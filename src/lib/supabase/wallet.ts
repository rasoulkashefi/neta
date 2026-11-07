import { createClient } from './server';

export interface WorkspaceBalance {
  available_toman: number;
  reserved_toman: number;
  total_toman: number;
}

export interface LedgerTransactionHistory {
  id: string;
  transaction_type: string;
  description: string;
  reference_id?: string;
  created_at: string;
  amount: number;
}

/**
 * Fetch the exact real-time mathematical balance from the Double-Entry Ledger
 */
export async function getWorkspaceBalance(workspaceId: string): Promise<WorkspaceBalance> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('get_workspace_balance', {
    p_workspace_id: workspaceId,
  });

  if (error || !data || data.length === 0) {
    console.error('Error fetching workspace balance:', error);
    return { available_toman: 0, reserved_toman: 0, total_toman: 0 };
  }

  const row = data[0];
  return {
    available_toman: Number(row.available_toman || 0),
    reserved_toman: Number(row.reserved_toman || 0),
    total_toman: Number(row.total_toman || 0),
  };
}

/**
 * Top up wallet balance atomically through Double-Entry Bookkeeping
 */
export async function topupWallet(
  workspaceId: string,
  amountToman: number,
  idempotencyKey: string,
  paymentReference: string,
  description?: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('wallet_topup', {
    p_workspace_id: workspaceId,
    p_amount: amountToman,
    p_idempotency_key: idempotencyKey,
    p_reference_id: paymentReference,
    p_description: description || 'شارژ کیف‌پول از درگاه پرداخت',
  });

  if (error) {
    console.error('Failed to topup wallet:', error);
    throw error;
  }

  return data;
}

/**
 * Hold a balance reservation before high-risk operations (e.g. AI token streaming)
 */
export async function holdWalletReserve(
  workspaceId: string,
  amountToman: number,
  idempotencyKey: string,
  description?: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('wallet_hold_reserve', {
    p_workspace_id: workspaceId,
    p_amount: amountToman,
    p_idempotency_key: idempotencyKey,
    p_description: description || 'رزرو موقت اعتبار برای فراخوانی هوش مصنوعی',
  });

  if (error) {
    console.error('Failed to hold reserve:', error);
    throw error;
  }

  return data;
}

/**
 * Settle a finalized usage cost into system revenue
 */
export async function settleWalletUsage(
  workspaceId: string,
  productId: string,
  costToman: number,
  idempotencyKey: string,
  fromReserved = false
) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('wallet_settle_usage', {
    p_workspace_id: workspaceId,
    p_product_id: productId,
    p_cost_toman: costToman,
    p_idempotency_key: idempotencyKey,
    p_from_reserved: fromReserved,
  });

  if (error) {
    console.error('Failed to settle usage:', error);
    throw error;
  }

  return data;
}

/**
 * Fetch transaction history for a workspace
 */
export async function getWorkspaceLedgerHistory(workspaceId: string, limit = 20): Promise<LedgerTransactionHistory[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('ledger_entries')
    .select(`
      id,
      amount,
      created_at,
      ledger_transactions (
        id,
        transaction_type,
        description,
        reference_id
      )
    `)
    .eq('workspace_id', workspaceId)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error || !data) {
    return [];
  }

  return data.map((item: any) => ({
    id: item.id,
    amount: Number(item.amount),
    created_at: item.created_at,
    transaction_type: item.ledger_transactions?.transaction_type || 'unknown',
    description: item.ledger_transactions?.description || '',
    reference_id: item.ledger_transactions?.reference_id,
  }));
}
