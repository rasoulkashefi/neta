import React, { Suspense } from 'react';
import { connection } from 'next/server';
import { getOrderByAuthority } from '@/lib/supabase/payments';
import { SandboxTerminal } from './SandboxTerminal';

interface SandboxPageProps {
  searchParams: Promise<{ authority?: string }>;
}

async function SandboxContent({ searchParams }: SandboxPageProps) {
  await connection();
  const { authority } = await searchParams;
  const order = authority ? await getOrderByAuthority(authority) : null;

  return <SandboxTerminal authority={authority || null} order={order} />;
}

export default function SandboxPaymentPage({ searchParams }: SandboxPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#070C15] flex items-center justify-center text-sm text-[#A9B7CB]">
          در حال بارگذاری درگاه پرداخت...
        </div>
      }
    >
      <SandboxContent searchParams={searchParams} />
    </Suspense>
  );
}
