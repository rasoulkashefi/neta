-- ==============================================================================
-- Neta.land Backend Migration: 005 - Payment Orders & Gateway Sandbox
-- ==============================================================================

-- 1. Payment Orders Table
create table if not exists public.payment_orders (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade not null,
  amount_toman numeric(16, 2) not null check (amount_toman > 0),
  gateway text not null default 'sandbox', -- 'sandbox', 'zarinpal', 'zibal'
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'canceled')),
  authority text unique not null,
  tracking_code text,
  idempotency_key text unique not null,
  callback_url text,
  metadata jsonb default '{}'::jsonb not null,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  settled_at timestamptz
);

-- 2. Indexes
create index if not exists idx_payment_orders_workspace on public.payment_orders (workspace_id, created_at desc);
create index if not exists idx_payment_orders_authority on public.payment_orders (authority);

-- 3. Enable RLS
alter table public.payment_orders enable row level security;

create policy "Workspace members can view their payment orders" on public.payment_orders for select
to authenticated using (exists (
  select 1 from public.workspace_members
  where workspace_members.workspace_id = payment_orders.workspace_id
  and workspace_members.user_id = auth.uid()
));

-- 4. Server-Side Verification and Atomic Double-Entry Settlement
create or replace function public.verify_and_settle_payment(
  p_authority text,
  p_success boolean,
  p_tracking_code text default null
)
returns table (
  order_id uuid,
  status text,
  new_balance numeric(16, 2)
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_order public.payment_orders%rowtype;
  v_balance numeric(16, 2);
begin
  select * into v_order from public.payment_orders where authority = p_authority for update;

  if not found then
    raise exception 'سفارش پرداختی با این شناسه یافت نشد';
  end if;

  if v_order.status != 'pending' then
    select available_toman into v_balance from public.get_workspace_balance(v_order.workspace_id);
    return query select v_order.id, v_order.status, v_balance;
    return;
  end if;

  if p_success then
    update public.payment_orders
    set status = 'paid', tracking_code = coalesce(p_tracking_code, 'SB-' || substr(md5(random()::text), 1, 8)), settled_at = timezone('utc'::text, now())
    where id = v_order.id;

    -- واریز اتمیک به دفترکل دوطرفه
    perform public.wallet_topup(
      v_order.workspace_id,
      v_order.amount_toman,
      'pay_' || v_order.id::text,
      v_order.authority,
      'شارژ کیف‌پول از طریق درگاه ' || v_order.gateway
    );
  else
    update public.payment_orders
    set status = 'failed', settled_at = timezone('utc'::text, now())
    where id = v_order.id;
  end if;

  select available_toman into v_balance from public.get_workspace_balance(v_order.workspace_id);
  return query select v_order.id, case when p_success then 'paid'::text else 'failed'::text end, v_balance;
end;
$$;
