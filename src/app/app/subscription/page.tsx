import React, { Suspense } from 'react';
import { connection } from 'next/server';
import { getWorkspaceBalance, getWorkspaceLedgerHistory } from '@/lib/supabase/wallet';
import { getCurrentUserWorkspaceId } from '@/lib/supabase/payments';
import { SubscriptionClient } from './SubscriptionClient';

async function SubscriptionContent() {
  await connection();
  const workspaceId = await getCurrentUserWorkspaceId();

  let balance = { available_toman: 0, reserved_toman: 0, total_toman: 0 };
  let history: any[] = [];

  if (workspaceId) {
    try {
      balance = await getWorkspaceBalance(workspaceId);
      history = await getWorkspaceLedgerHistory(workspaceId, 20);
    } catch (e) {
      console.error('Failed to load wallet data:', e);
    }
  }

  return <SubscriptionClient balance={balance} history={history} />;
}

export default function AppSubscriptionPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-[#A9B7CB]">در حال بارگذاری اطلاعات مالی...</div>}>
      <SubscriptionContent />
    </Suspense>
  );
}
