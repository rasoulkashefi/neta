-- ==============================================================================
-- Neta.land Backend Migration: 002 - Products Catalog, Plans & Entitlements
-- ==============================================================================

-- 1. Products Table
create table if not exists public.products (
  id text primary key,
  name text not null,
  description text,
  category text not null check (category in ('connectivity', 'ai', 'cloud', 'security')),
  status text not null default 'active' check (status in ('active', 'beta', 'coming_soon', 'deprecated')),
  icon text,
  metadata jsonb default '{}'::jsonb not null,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

comment on table public.products is 'کاتالوگ جامع محصولات پلتفرم نتا (اتصال، هوش مصنوعی، ابری)';

-- 2. Product Plans Table
create table if not exists public.product_plans (
  id uuid primary key default gen_random_uuid(),
  product_id text references public.products(id) on delete cascade not null,
  slug text not null,
  name text not null,
  price_toman numeric(12, 0) default 0 not null,
  billing_cycle text default 'monthly' check (billing_cycle in ('monthly', 'yearly', 'usage_based', 'lifetime', 'free')),
  features jsonb default '[]'::jsonb not null,
  is_active boolean default true not null,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  unique (product_id, slug)
);

comment on table public.product_plans is 'پلن‌های عرضه هر محصول (رایگان، ماهانه، بر اساس مصرف)';

-- 3. Workspace Subscriptions Table (Active Subscriptions)
create table if not exists public.workspace_subscriptions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade not null,
  product_id text references public.products(id) on delete cascade not null,
  plan_id uuid references public.product_plans(id) on delete restrict not null,
  status text default 'active' check (status in ('active', 'past_due', 'canceled', 'trialing')),
  current_period_start timestamptz default timezone('utc'::text, now()) not null,
  current_period_end timestamptz,
  auto_renew boolean default true not null,
  metadata jsonb default '{}'::jsonb not null,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  unique (workspace_id, product_id)
);

comment on table public.workspace_subscriptions is 'اشتراک فعال هر فضای کاری روی هر محصول';

-- 4. Entitlements Table (Fine-grained Permissions & Quotas)
create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade not null,
  product_id text references public.products(id) on delete cascade not null,
  feature_key text not null,
  feature_value jsonb not null,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  unique (workspace_id, product_id, feature_key)
);

comment on table public.entitlements is 'سهمیه‌ها و دسترسی‌های اختصاصی فعال برای هر فضای کاری';

-- 5. Enable Row Level Security (RLS)
alter table public.products enable row level security;
alter table public.product_plans enable row level security;
alter table public.workspace_subscriptions enable row level security;
alter table public.entitlements enable row level security;

-- 6. RLS Policies

-- Public / Authenticated can view active products and plans
create policy "Anyone can view active products"
  on public.products for select
  to authenticated, anon
  using (status != 'deprecated');

create policy "Anyone can view active plans"
  on public.product_plans for select
  to authenticated, anon
  using (is_active = true);

-- Workspace members can view their subscriptions
create policy "Workspace members can view subscriptions"
  on public.workspace_subscriptions for select
  to authenticated
  using (
    exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = workspace_subscriptions.workspace_id
      and workspace_members.user_id = auth.uid()
    )
  );

-- Workspace members can view their entitlements
create policy "Workspace members can view entitlements"
  on public.entitlements for select
  to authenticated
  using (
    exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = entitlements.workspace_id
      and workspace_members.user_id = auth.uid()
    )
  );

-- 7. Helper Security Functions (With explicit search_path)
create or replace function public.check_workspace_entitlement(
  p_workspace_id uuid,
  p_product_id text,
  p_feature_key text
)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.entitlements
    where workspace_id = p_workspace_id
      and product_id = p_product_id
      and feature_key = p_feature_key
      and (
        feature_value = 'true'::jsonb
        or (jsonb_typeof(feature_value) = 'number' and (feature_value::text)::numeric > 0)
      )
  );
$$;

-- 8. Seed Initial Products and Plans
insert into public.products (id, name, description, category, status, icon)
values
  ('smart-dns', 'دی‌ان‌اس هوشمند نتا', 'بهینه‌سازی رزولوشن دامنه و دور زدن اختلال‌های روتینگ اینترنت', 'connectivity', 'active', 'Activity'),
  ('game-ping', 'بهینه‌ساز پینگ گیمینگ', 'پایدارسازی مسیرهای ترافیک UDP به سمت سرورهای بازی‌های آنلاین', 'connectivity', 'active', 'Gamepad2'),
  ('ai-api', 'درگاه یکپارچه مدل‌های هوش مصنوعی', 'دسترسی متمرکز به بیش از ۴۰ مدل هوش مصنوعی با کلید واحد', 'ai', 'beta', 'Sparkles'),
  ('cloud-compute', 'زیرساخت ابری و سرورهای توسعه', 'ماشین‌های مجازی پرسرعت و پایگاه‌داده‌های مدیریت‌شده نتا', 'cloud', 'coming_soon', 'Layers')
on conflict (id) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  status = excluded.status,
  updated_at = timezone('utc'::text, now());

-- Seed Smart DNS Plans
insert into public.product_plans (product_id, slug, name, price_toman, billing_cycle, features)
values
  ('smart-dns', 'free', 'آزمایشی رایگان', 0, 'free', '["پشتیبانی از ۳ دستگاه همزمان", "دسترسی به سرورهای نرمال", "پشتیبانی تیکتی"]'::jsonb),
  ('smart-dns', 'pro', 'اشتراک حرفه‌ای DNS', 49000, 'monthly', '["دستگاه‌های نامحدود", "اولویت در روتینگ هوشمند Anycast", "پشتیبانی اختصاصی ۲۴ ساعته"]'::jsonb)
on conflict (product_id, slug) do nothing;

-- Seed Gaming Plans
insert into public.product_plans (product_id, slug, name, price_toman, billing_cycle, features)
values
  ('game-ping', 'pro-gaming', 'اشتراک حرفه‌ای گیمینگ', 98000, 'monthly', '["مسیرهای روتینگ اختصاصی گیمینگ", "کاهش جیتر و رفع پکت‌لاس", "پشتیبانی اولویت‌دار گیمرها"]'::jsonb)
on conflict (product_id, slug) do nothing;

-- Seed AI API Plans
insert into public.product_plans (product_id, slug, name, price_toman, billing_cycle, features)
values
  ('ai-api', 'pay-as-you-go', 'مصرف بر اساس تقاضا (اعتباری)', 0, 'usage_based', '["شارژ دلخواه کیف‌پول", "سازگار با OpenAI SDK", "دسترسی به GPT-4o، Claude 3.7 و Gemini 2.0"]'::jsonb)
on conflict (product_id, slug) do nothing;
