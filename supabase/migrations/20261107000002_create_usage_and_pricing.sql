-- ==============================================================================
-- Neta.land Backend Migration: 003 - Usage Telemetry & Pricing Versions
-- ==============================================================================

-- 1. Pricing Versions Table (تعرفه‌های متغیر زمانی برای هر معیار مصرف)
create table if not exists public.pricing_versions (
  id uuid primary key default gen_random_uuid(),
  product_id text references public.products(id) on delete cascade not null,
  metric_name text not null, -- e.g. 'token_input', 'token_output', 'dns_query', 'traffic_gb'
  model_name text, -- e.g. 'gpt-4o', 'claude-3-7-sonnet', 'gemini-2.0-flash'
  unit_name text not null default 'unit', -- e.g. '1K tokens', 'query', 'GB'
  unit_price_toman numeric(16, 6) not null default 0,
  effective_from timestamptz default timezone('utc'::text, now()) not null,
  effective_to timestamptz,
  metadata jsonb default '{}'::jsonb not null,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

comment on table public.pricing_versions is 'تاریخچه تعرفه خدمات بر اساس زمان و نسخه (مانع از محاسبه اشتباه گذشته)';

-- 2. Usage Events Table (ثبت اتمیک و ضدتکرار رویدادهای مصرف)
create table if not exists public.usage_events (
  id uuid primary key default gen_random_uuid(),
  idempotency_key text unique not null,
  workspace_id uuid references public.workspaces(id) on delete cascade not null,
  product_id text references public.products(id) on delete cascade not null,
  metric_name text not null,
  quantity numeric(18, 4) not null check (quantity >= 0),
  cost_toman numeric(16, 4) not null default 0,
  pricing_version_id uuid references public.pricing_versions(id) on delete set null,
  timestamp timestamptz default timezone('utc'::text, now()) not null,
  raw_metadata jsonb default '{}'::jsonb not null,
  is_settled boolean default false not null, -- آیا با کیف‌پول تسویه شده است
  created_at timestamptz default timezone('utc'::text, now()) not null
);

comment on table public.usage_events is 'لاگ رویدادهای مصرف واقعی با کلید ضدتکرار (Idempotency Key)';

-- 3. High Performance Indexes
create index if not exists idx_pricing_lookup
  on public.pricing_versions (product_id, metric_name, model_name, effective_from);

create index if not exists idx_usage_events_workspace_time
  on public.usage_events (workspace_id, timestamp desc);

create index if not exists idx_usage_events_product_time
  on public.usage_events (workspace_id, product_id, timestamp desc);

create index if not exists idx_usage_events_settlement
  on public.usage_events (workspace_id, is_settled) where (is_settled = false);

-- 4. Enable Row Level Security (RLS)
alter table public.pricing_versions enable row level security;
alter table public.usage_events enable row level security;

-- 5. RLS Policies
create policy "Anyone can view active pricing versions"
  on public.pricing_versions for select
  to authenticated, anon
  using (effective_to is null or effective_to > now());

create policy "Workspace members can view their usage events"
  on public.usage_events for select
  to authenticated
  using (
    exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = usage_events.workspace_id
      and workspace_members.user_id = auth.uid()
    )
  );

-- 6. Helper Function: Ingest Telemetry Event Idempotently
create or replace function public.record_usage_event(
  p_idempotency_key text,
  p_workspace_id uuid,
  p_product_id text,
  p_metric_name text,
  p_quantity numeric,
  p_model_name text default null,
  p_raw_metadata jsonb default '{}'::jsonb
)
returns public.usage_events
language plpgsql
security definer
set search_path = public
as $$
declare
  v_pricing public.pricing_versions%rowtype;
  v_calculated_cost numeric(16, 4) := 0;
  v_result public.usage_events;
begin
  -- Find current active pricing
  select * into v_pricing
  from public.pricing_versions
  where product_id = p_product_id
    and metric_name = p_metric_name
    and (p_model_name is null or model_name = p_model_name or model_name is null)
    and (effective_to is null or effective_to > now())
  order by effective_from desc
  limit 1;

  if found and v_pricing.unit_price_toman > 0 then
    v_calculated_cost := round(p_quantity * v_pricing.unit_price_toman, 4);
  end if;

  -- Insert with idempotency guarantee
  insert into public.usage_events (
    idempotency_key,
    workspace_id,
    product_id,
    metric_name,
    quantity,
    cost_toman,
    pricing_version_id,
    raw_metadata
  )
  values (
    p_idempotency_key,
    p_workspace_id,
    p_product_id,
    p_metric_name,
    p_quantity,
    v_calculated_cost,
    v_pricing.id,
    p_raw_metadata
  )
  on conflict (idempotency_key) do nothing
  returning * into v_result;

  -- If conflict occurred, fetch the existing event
  if v_result.id is null then
    select * into v_result from public.usage_events where idempotency_key = p_idempotency_key;
  end if;

  return v_result;
end;
$$;

-- 7. Seed Standard AI & Connectivity Pricing
insert into public.pricing_versions (product_id, metric_name, model_name, unit_name, unit_price_toman)
values
  -- AI Models (per 1K tokens)
  ('ai-api', 'tokens_input', 'gpt-4o', '1K tokens', 180.000000),
  ('ai-api', 'tokens_output', 'gpt-4o', '1K tokens', 540.000000),
  ('ai-api', 'tokens_input', 'claude-3-7-sonnet', '1K tokens', 220.000000),
  ('ai-api', 'tokens_output', 'claude-3-7-sonnet', '1K tokens', 660.000000),
  ('ai-api', 'tokens_input', 'gemini-2.0-flash', '1K tokens', 20.000000),
  ('ai-api', 'tokens_output', 'gemini-2.0-flash', '1K tokens', 60.000000),
  -- Connectivity / Network Metrics
  ('smart-dns', 'dns_query', null, '10K queries', 0.000000), -- Included in subscription
  ('game-ping', 'gaming_session', null, 'session', 0.000000) -- Included in subscription
on conflict do nothing;
