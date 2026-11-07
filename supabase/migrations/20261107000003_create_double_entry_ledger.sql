-- ==============================================================================
-- Neta.land Backend Migration: 004 - Double-Entry Financial Ledger & Wallet
-- ==============================================================================

-- 1. Ledger Account Types
create type public.ledger_account_type as enum (
  'user_available',   -- موجودی آزاد کاربر
  'user_reserved',    -- وجوه رزرو شده برای مصرف در حال اجرا
  'system_cash',      -- وجوه نقدی دریافتی درگاه پرداخت (دارایی)
  'revenue_ai',       -- درآمد تحقق‌یافته پلتفرم هوش مصنوعی
  'revenue_connectivity', -- درآمد تحقق‌یافته دی‌ان‌اس و گیمینگ
  'revenue_cloud'     -- درآمد تحقق‌یافته سرویس‌های ابری
);

-- 2. Ledger Accounts Table
create table if not exists public.ledger_accounts (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade, -- null برای حساب‌های کل سیستم
  account_type public.ledger_account_type not null,
  currency text not null default 'TOMAN',
  created_at timestamptz default timezone('utc'::text, now()) not null,
  unique (workspace_id, account_type)
);

comment on table public.ledger_accounts is 'سرفصل‌های حسابداری؛ تفکیک موجودی آزاد، رزرو و درآمدهای تحقق‌یافته';

-- 3. Ledger Transactions Table (سند مادر هر تراکنش مالی)
create table if not exists public.ledger_transactions (
  id uuid primary key default gen_random_uuid(),
  idempotency_key text unique not null,
  transaction_type text not null check (
    transaction_type in ('topup', 'hold_reserve', 'release_reserve', 'settle_usage', 'refund', 'adjustment')
  ),
  description text not null,
  reference_id text, -- شناسه پرداخت بانکی یا شناسه رویداد مصرف
  metadata jsonb default '{}'::jsonb not null,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

comment on table public.ledger_transactions is 'اسناد مالی؛ هر سند دارای حداقل دو آرتیکل متوازن بدهکار و بستانکار است';

-- 4. Ledger Entries Table (آرتیکل‌های ثبت دفترکل - Double-Entry)
create table if not exists public.ledger_entries (
  id uuid primary key default gen_random_uuid(),
  transaction_id uuid references public.ledger_transactions(id) on delete cascade not null,
  account_id uuid references public.ledger_accounts(id) on delete restrict not null,
  workspace_id uuid references public.workspaces(id) on delete cascade, -- تسهیل ایندکس و RLS
  amount numeric(16, 2) not null, -- مثبت = بستانکار (ورود به حساب)، منفی = بدهکار (خروج از حساب)
  created_at timestamptz default timezone('utc'::text, now()) not null
);

comment on table public.ledger_entries is 'ثبت‌های دفترکل؛ هیچ موجودی به صورت مستقیم ویرایش نمی‌شود، تنها ثبت اضافه می‌شود';

-- 5. High Performance Financial Indexes
create index if not exists idx_ledger_entries_workspace
  on public.ledger_entries (workspace_id, created_at desc);

create index if not exists idx_ledger_entries_account
  on public.ledger_entries (account_id, created_at desc);

create index if not exists idx_ledger_entries_tx
  on public.ledger_entries (transaction_id);

-- 6. Enable Row Level Security (RLS)
alter table public.ledger_accounts enable row level security;
alter table public.ledger_transactions enable row level security;
alter table public.ledger_entries enable row level security;

-- RLS Policies: Workspace members can only view their own accounts and entries
create policy "Workspace members can view their accounts"
  on public.ledger_accounts for select
  to authenticated
  using (
    workspace_id is not null and exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = ledger_accounts.workspace_id
      and workspace_members.user_id = auth.uid()
    )
  );

create policy "Workspace members can view their entries"
  on public.ledger_entries for select
  to authenticated
  using (
    workspace_id is not null and exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = ledger_entries.workspace_id
      and workspace_members.user_id = auth.uid()
    )
  );

-- 7. Ensure Ledger Accounts Exist for a Workspace (Atomic Helper)
create or replace function public.ensure_workspace_ledger_accounts(p_workspace_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.ledger_accounts (workspace_id, account_type)
  values
    (p_workspace_id, 'user_available'),
    (p_workspace_id, 'user_reserved')
  on conflict (workspace_id, account_type) do nothing;
end;
$$;

-- 8. Get Real-time Wallet Balance (محاسبه جبری لحظه‌ای از دفترکل)
create or replace function public.get_workspace_balance(p_workspace_id uuid)
returns table (
  available_toman numeric(16, 2),
  reserved_toman numeric(16, 2),
  total_toman numeric(16, 2)
)
language sql
security definer
set search_path = public
stable
as $$
  with balances as (
    select
      la.account_type,
      coalesce(sum(le.amount), 0) as balance
    from public.ledger_accounts la
    left join public.ledger_entries le on le.account_id = la.id
    where la.workspace_id = p_workspace_id
    group by la.account_type
  )
  select
    coalesce((select balance from balances where account_type = 'user_available'), 0)::numeric(16, 2) as available_toman,
    coalesce((select balance from balances where account_type = 'user_reserved'), 0)::numeric(16, 2) as reserved_toman,
    coalesce((select sum(balance) from balances), 0)::numeric(16, 2) as total_toman;
$$;

-- 9. Atomic Transaction: Topup Wallet (شارژ کیف‌پول از درگاه)
create or replace function public.wallet_topup(
  p_workspace_id uuid,
  p_amount numeric(16, 2),
  p_idempotency_key text,
  p_reference_id text,
  p_description text default 'شارژ کیف‌پول از درگاه بانکی'
)
returns table (
  transaction_id uuid,
  available_toman numeric(16, 2)
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_tx_id uuid;
  v_user_account_id uuid;
  v_system_account_id uuid;
begin
  if p_amount <= 0 then
    raise exception 'مبلغ شارژ باید بزرگتر از صفر باشد';
  end if;

  perform public.ensure_workspace_ledger_accounts(p_workspace_id);

  select id into v_user_account_id
  from public.ledger_accounts
  where workspace_id = p_workspace_id and account_type = 'user_available';

  select id into v_system_account_id
  from public.ledger_accounts
  where workspace_id is null and account_type = 'system_cash';

  -- Create System Cash Account if not exists
  if v_system_account_id is null then
    insert into public.ledger_accounts (workspace_id, account_type)
    values (null, 'system_cash')
    returning id into v_system_account_id;
  end if;

  -- Create Transaction Header (Idempotent)
  insert into public.ledger_transactions (idempotency_key, transaction_type, description, reference_id)
  values (p_idempotency_key, 'topup', p_description, p_reference_id)
  on conflict (idempotency_key) do nothing
  returning id into v_tx_id;

  if v_tx_id is not null then
    -- Entry 1: بدهکار کردن صندوق سیستم (دریافت پول درگاه)
    insert into public.ledger_entries (transaction_id, account_id, workspace_id, amount)
    values (v_tx_id, v_system_account_id, null, p_amount);

    -- Entry 2: بستانکار کردن موجودی آزاد کاربر
    insert into public.ledger_entries (transaction_id, account_id, workspace_id, amount)
    values (v_tx_id, v_user_account_id, p_workspace_id, p_amount);
  else
    select id into v_tx_id from public.ledger_transactions where idempotency_key = p_idempotency_key;
  end if;

  return query
  select v_tx_id, b.available_toman
  from public.get_workspace_balance(p_workspace_id) b;
end;
$$;

-- 10. Atomic Transaction: Hold Reserve (رزرو موقت اعتبار برای مصرف‌های پرریسک / هوش مصنوعی)
create or replace function public.wallet_hold_reserve(
  p_workspace_id uuid,
  p_amount numeric(16, 2),
  p_idempotency_key text,
  p_description text default 'رزرو اعتبار برای اجرای سرویس'
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_current_available numeric(16, 2);
  v_tx_id uuid;
  v_user_avail_id uuid;
  v_user_resv_id uuid;
begin
  perform public.ensure_workspace_ledger_accounts(p_workspace_id);

  select available_toman into v_current_available
  from public.get_workspace_balance(p_workspace_id);

  if v_current_available < p_amount then
    raise exception 'موجودی قابل استفاده کافی نیست. موجودی: %, درخواستی: %', v_current_available, p_amount;
  end if;

  select id into v_user_avail_id from public.ledger_accounts where workspace_id = p_workspace_id and account_type = 'user_available';
  select id into v_user_resv_id from public.ledger_accounts where workspace_id = p_workspace_id and account_type = 'user_reserved';

  insert into public.ledger_transactions (idempotency_key, transaction_type, description)
  values (p_idempotency_key, 'hold_reserve', p_description)
  on conflict (idempotency_key) do nothing
  returning id into v_tx_id;

  if v_tx_id is not null then
    -- کسر از موجودی آزاد
    insert into public.ledger_entries (transaction_id, account_id, workspace_id, amount)
    values (v_tx_id, v_user_avail_id, p_workspace_id, -p_amount);

    -- اضافه به وجوه رزرو
    insert into public.ledger_entries (transaction_id, account_id, workspace_id, amount)
    values (v_tx_id, v_user_resv_id, p_workspace_id, p_amount);
  end if;

  return true;
end;
$$;

-- 11. Atomic Transaction: Settle Usage (تسویه نهایی هزینه و انتقال به درآمد سیستم)
create or replace function public.wallet_settle_usage(
  p_workspace_id uuid,
  p_product_id text,
  p_cost_toman numeric(16, 2),
  p_idempotency_key text,
  p_from_reserved boolean default false,
  p_description text default 'تسویه رویداد مصرف سرویس'
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_tx_id uuid;
  v_user_source_id uuid;
  v_revenue_account_id uuid;
  v_account_type public.ledger_account_type;
begin
  perform public.ensure_workspace_ledger_accounts(p_workspace_id);

  -- منبع برداشت (آزاد یا رزروشده)
  if p_from_reserved then
    v_account_type := 'user_reserved';
  else
    v_account_type := 'user_available';
  end if;

  select id into v_user_source_id
  from public.ledger_accounts
  where workspace_id = p_workspace_id and account_type = v_account_type;

  -- حساب درآمد سیستم متناسب با محصول
  select id into v_revenue_account_id
  from public.ledger_accounts
  where workspace_id is null and account_type = case
    when p_product_id = 'ai-api' then 'revenue_ai'::public.ledger_account_type
    when p_product_id = 'cloud-compute' then 'revenue_cloud'::public.ledger_account_type
    else 'revenue_connectivity'::public.ledger_account_type
  end;

  if v_revenue_account_id is null then
    insert into public.ledger_accounts (workspace_id, account_type)
    values (
      null,
      case
        when p_product_id = 'ai-api' then 'revenue_ai'::public.ledger_account_type
        when p_product_id = 'cloud-compute' then 'revenue_cloud'::public.ledger_account_type
        else 'revenue_connectivity'::public.ledger_account_type
      end
    )
    returning id into v_revenue_account_id;
  end if;

  insert into public.ledger_transactions (idempotency_key, transaction_type, description)
  values (p_idempotency_key, 'settle_usage', p_description)
  on conflict (idempotency_key) do nothing
  returning id into v_tx_id;

  if v_tx_id is not null then
    -- کسر از حساب کاربر
    insert into public.ledger_entries (transaction_id, account_id, workspace_id, amount)
    values (v_tx_id, v_user_source_id, p_workspace_id, -p_cost_toman);

    -- اضافه به درآمد تحقق‌یافته سیستم
    insert into public.ledger_entries (transaction_id, account_id, workspace_id, amount)
    values (v_tx_id, v_revenue_account_id, null, p_cost_toman);
  end if;

  return true;
end;
$$;
