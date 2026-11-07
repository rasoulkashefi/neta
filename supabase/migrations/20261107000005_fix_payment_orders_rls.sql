-- ==============================================================================
-- Neta.land Backend Migration: 006 - Add Insert and Update RLS on Payment Orders
-- ==============================================================================

create policy "Workspace members can insert payment orders"
  on public.payment_orders for insert
  to authenticated
  with check (
    exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = payment_orders.workspace_id
      and workspace_members.user_id = auth.uid()
    )
  );

create policy "Workspace members can update their payment orders"
  on public.payment_orders for update
  to authenticated
  using (
    exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = payment_orders.workspace_id
      and workspace_members.user_id = auth.uid()
    )
  );
