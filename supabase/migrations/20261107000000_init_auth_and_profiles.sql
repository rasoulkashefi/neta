-- ==============================================================================
-- Neta.land Backend Migration: 001 - Init Auth, Profiles & Personal Workspaces
-- ==============================================================================

-- 1. Profiles Table (Linked 1-to-1 with auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

comment on table public.profiles is 'اطلاعات عمومی و پروفایل هویتی هر کاربر نتا';

-- 2. Workspaces Table (Core isolation unit for multi-tenancy)
create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  owner_id uuid references auth.users on delete cascade not null,
  is_personal boolean default true not null,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

comment on table public.workspaces is 'فضاهای کاری؛ واحد تفکیک پروژه‌ها، سهمیه‌ها و اعضای تیم';

-- 3. Workspace Members (RBAC: owner, admin, member)
create table if not exists public.workspace_members (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  role text not null check (role in ('owner', 'admin', 'member')),
  created_at timestamptz default timezone('utc'::text, now()) not null,
  unique (workspace_id, user_id)
);

comment on table public.workspace_members is 'اعضای هر فضای کاری و نقش دسترسی آن‌ها';

-- 4. Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;

-- 5. RLS Policies

-- Profiles Policies
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Workspaces Policies
create policy "Users can view workspaces they are members of"
  on public.workspaces for select
  using (
    exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = workspaces.id
      and workspace_members.user_id = auth.uid()
    )
  );

create policy "Workspace owners can update workspace details"
  on public.workspaces for update
  using (
    exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = workspaces.id
      and workspace_members.user_id = auth.uid()
      and workspace_members.role in ('owner', 'admin')
    )
  );

-- Workspace Members Policies
create policy "Members can view other members of their workspace"
  on public.workspace_members for select
  using (
    exists (
      select 1 from public.workspace_members as m
      where m.workspace_id = workspace_members.workspace_id
      and m.user_id = auth.uid()
    )
  );

-- 6. User Provisioning Trigger Function (Atomic Onboarding)
create or replace function public.handle_new_user()
returns trigger as $$
declare
  default_name text;
  new_workspace_id uuid;
  user_slug text;
begin
  default_name := coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1));
  user_slug := 'ws-' || substr(md5(random()::text || clock_timestamp()::text), 1, 8);

  -- A. Create Profile
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, default_name, new.raw_user_meta_data->>'avatar_url');

  -- B. Create Personal Workspace
  insert into public.workspaces (name, slug, owner_id, is_personal)
  values ('فضای کاری شخصی', user_slug, new.id, true)
  returning id into new_workspace_id;

  -- C. Add User as Owner in Workspace Members
  insert into public.workspace_members (workspace_id, user_id, role)
  values (new_workspace_id, new.id, 'owner');

  return new;
end;
$$ language plpgsql security definer;

-- Trigger execution on auth.users insert
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
