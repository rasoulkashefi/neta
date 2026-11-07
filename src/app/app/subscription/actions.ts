'use server';

import { createPaymentOrder, getCurrentUserWorkspaceId } from '@/lib/supabase/payments';
import { redirect } from 'next/navigation';

export async function initiateTopup(formData: FormData) {
  const amountStr = formData.get('amount') as string;
  const amount = parseInt(amountStr, 10);

  if (!amount || amount <= 0) {
    throw new Error('مبلغ نامعتبر است');
  }

  const workspaceId = await getCurrentUserWorkspaceId();
  if (!workspaceId) {
    redirect('/login');
  }

  const result = await createPaymentOrder({
    workspaceId,
    amountToman: amount,
    gateway: 'sandbox',
  });

  redirect(result.paymentUrl);
}
