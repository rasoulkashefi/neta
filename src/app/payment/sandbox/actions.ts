'use server';

import { verifyPayment } from '@/lib/supabase/payments';
import { redirect } from 'next/navigation';

export async function submitSandboxPayment(formData: FormData) {
  const authority = formData.get('authority') as string;
  const action = formData.get('action') as string;

  if (!authority) {
    redirect('/app/subscription?payment=error&message=missing_authority');
  }

  const isSuccess = action === 'pay';
  const trackingCode = 'TRX-' + Math.floor(10000000 + Math.random() * 90000000);

  try {
    const result = await verifyPayment(authority, isSuccess, trackingCode);
    if (isSuccess && result?.status === 'paid') {
      redirect(`/app/subscription?payment=success&tracking=${trackingCode}&balance=${result.new_balance}`);
    } else {
      redirect(`/app/subscription?payment=failed&authority=${authority}`);
    }
  } catch (err: any) {
    console.error('Sandbox action error:', err);
    redirect(`/app/subscription?payment=error&message=${encodeURIComponent(err.message || 'unknown')}`);
  }
}
