-- ==============================================================================
-- Neta.land Backend Migration: 007 - Fix RLS Recursion on Workspace Members
-- ==============================================================================

-- Drop the recursive policies
drop policy if exists "Members can view other members of their workspace" on public.workspace_members;
drop policy if exists "Users can view workspaces they are members of" on public.workspaces;
drop policy if exists "Users can view workspaces they belong to" on public.workspaces;

-- 1. Simple, fast, non-recursive policy for workspace_members
create policy "Users can view their own workspace memberships"
  on public.workspace_members for select
  to authenticated
  using (user_id = auth.uid());

-- 2. Clean policy for workspaces
create policy "Users can view workspaces they own or belong to"
  on public.workspaces for select
  to authenticated
  using (
    owner_id = auth.uid()
    or exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = workspaces.id
      and workspace_members.user_id = auth.uid()
    )
  );

-- 3. Select policy on ledger_transactions
create policy "Authenticated users can view ledger transaction headers"
  on public.ledger_transactions for select
  to authenticated
  using (true);
