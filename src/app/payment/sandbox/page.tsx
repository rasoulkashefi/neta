import React, { Suspense } from 'react';
import { SandboxTerminal } from './SandboxTerminal';

export default function SandboxPaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#070C15] flex items-center justify-center text-sm text-[#A9B7CB]">
          در حال بارگذاری درگاه پرداخت...
        </div>
      }
    >
      <SandboxTerminal />
    </Suspense>
  );
}
