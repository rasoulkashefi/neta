import { createClient } from './server';
import { createAdminClient } from './admin';

export interface CreateOrderParams {
  workspaceId: string;
  amountToman: number;
  gateway?: 'sandbox' | 'zarinpal' | 'zibal';
  callbackUrl?: string;
  metadata?: Record<string, any>;
}

export interface PaymentOrderResult {
  orderId: string;
  authority: string;
  paymentUrl: string;
}

/**
 * Get current authenticated user's active workspace ID.
 * Authenticates the user session via cookie, then queries workspace using admin client to eliminate RLS recursion.
 */
export async function getCurrentUserWorkspaceId(): Promise<string | null> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const adminSupabase = createAdminClient();
  const { data: member, error } = await adminSupabase
    .from('workspace_members')
    .select('workspace_id')
    .eq('user_id', user.id)
    .limit(1)
    .maybeSingle();

  if (error || !member) {
    console.error('Error fetching user workspace:', error);
    return null;
  }

  return member.workspace_id;
}

/**
 * Create a new payment order using admin client to bypass RLS restrictions safely
 */
export async function createPaymentOrder(params: CreateOrderParams): Promise<PaymentOrderResult> {
  const adminSupabase = createAdminClient();
  const gateway = params.gateway || 'sandbox';
  const authority = 'AUTH-' + Math.random().toString(36).substring(2, 10).toUpperCase() + '-' + Date.now();
  const idempotencyKey = 'ord_' + authority;

  const { data, error } = await adminSupabase
    .from('payment_orders')
    .insert({
      workspace_id: params.workspaceId,
      amount_toman: params.amountToman,
      gateway,
      status: 'pending',
      authority,
      idempotency_key: idempotencyKey,
      callback_url: params.callbackUrl || '/app/subscription?payment=result',
      metadata: params.metadata || {},
    })
    .select('id, authority')
    .single();

  if (error || !data) {
    console.error('Error creating payment order:', error);
    throw new Error('خطا در ثبت سفارش پرداخت: ' + (error?.message || 'نامشخص'));
  }

  // Generate Payment URL
  const paymentUrl = `/payment/sandbox?authority=${authority}`;

  return {
    orderId: data.id,
    authority: data.authority,
    paymentUrl,
  };
}

/**
 * Verify payment with server-side atomic settlement into the Double-Entry Ledger
 */
export async function verifyPayment(authority: string, success: boolean, trackingCode?: string) {
  const adminSupabase = createAdminClient();

  const { data, error } = await adminSupabase.rpc('verify_and_settle_payment', {
    p_authority: authority,
    p_success: success,
    p_tracking_code: trackingCode || null,
  });

  if (error) {
    console.error('Verification error:', error);
    throw new Error('خطا در اعتبارسنجی پرداخت: ' + error.message);
  }

  return data?.[0] || null;
}

/**
 * Get order details by authority
 */
export async function getOrderByAuthority(authority: string) {
  const adminSupabase = createAdminClient();

  const { data, error } = await adminSupabase
    .from('payment_orders')
    .select('id, workspace_id, amount_toman, status, gateway, created_at')
    .eq('authority', authority)
    .maybeSingle();

  if (error || !data) return null;
  return data;
}
