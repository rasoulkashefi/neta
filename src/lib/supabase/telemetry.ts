import { createClient } from './server';

export interface UsageEventInput {
  idempotencyKey: string;
  workspaceId: string;
  productId: string;
  metricName: string;
  quantity: number;
  modelName?: string;
  metadata?: Record<string, any>;
}

export interface UsageSummaryItem {
  metric_name: string;
  product_id: string;
  total_quantity: number;
  total_cost_toman: number;
}

/**
 * Record a raw usage event with idempotency protection.
 * If network retries send the same idempotencyKey, duplicate billing is prevented.
 */
export async function trackUsageEvent(input: UsageEventInput) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('record_usage_event', {
    p_idempotency_key: input.idempotencyKey,
    p_workspace_id: input.workspaceId,
    p_product_id: input.productId,
    p_metric_name: input.metricName,
    p_quantity: input.quantity,
    p_model_name: input.modelName || null,
    p_raw_metadata: input.metadata || {},
  });

  if (error) {
    console.error('Failed to record usage event:', error);
    throw error;
  }

  return data;
}

/**
 * Fetch recent usage events for a workspace
 */
export async function getRecentUsageEvents(workspaceId: string, limit = 20) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('usage_events')
    .select('*')
    .eq('workspace_id', workspaceId)
    .order('timestamp', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Failed to get usage events:', error);
    return [];
  }

  return data;
}
