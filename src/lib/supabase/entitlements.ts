import { createClient } from './server';

export interface WorkspaceSubscription {
  id: string;
  workspace_id: string;
  product_id: string;
  plan_id: string;
  status: 'active' | 'past_due' | 'canceled' | 'trialing';
  current_period_start: string;
  current_period_end?: string;
  auto_renew: boolean;
  plan?: {
    name: string;
    slug: string;
    price_toman: number;
    billing_cycle: string;
  };
}

export interface WorkspaceEntitlement {
  product_id: string;
  feature_key: string;
  feature_value: any;
}

/**
 * Fetch all active product subscriptions for a given workspace
 */
export async function getWorkspaceSubscriptions(workspaceId: string): Promise<WorkspaceSubscription[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('workspace_subscriptions')
    .select(`
      id,
      workspace_id,
      product_id,
      plan_id,
      status,
      current_period_start,
      current_period_end,
      auto_renew,
      product_plans (
        name,
        slug,
        price_toman,
        billing_cycle
      )
    `)
    .eq('workspace_id', workspaceId)
    .eq('status', 'active');

  if (error || !data) {
    return [];
  }

  return data.map((item: any) => ({
    ...item,
    plan: item.product_plans,
  }));
}

/**
 * Fetch all active entitlements for a given workspace
 */
export async function getWorkspaceEntitlements(workspaceId: string): Promise<WorkspaceEntitlement[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('entitlements')
    .select('product_id, feature_key, feature_value')
    .eq('workspace_id', workspaceId);

  if (error || !data) {
    return [];
  }

  return data;
}

/**
 * Check if a workspace has a specific entitlement feature active
 */
export async function hasEntitlement(
  workspaceId: string,
  productId: string,
  featureKey: string
): Promise<boolean> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('entitlements')
    .select('feature_value')
    .eq('workspace_id', workspaceId)
    .eq('product_id', productId)
    .eq('feature_key', featureKey)
    .maybeSingle();

  if (error || !data) return false;

  const val = data.feature_value;
  if (typeof val === 'boolean') return val;
  if (typeof val === 'number') return val > 0;
  return Boolean(val);
}
