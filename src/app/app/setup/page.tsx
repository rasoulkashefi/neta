'use client';

import React from 'react';
import { SetupWizardSection } from '@/components/marketing/SetupWizardSection';
import { Badge } from '@/components/ui/Badge';

export default function AppSetupPage() {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-[#26364D]/60">
        <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
          پیکربندی و راه‌اندازی دستگاه
        </h1>
        <p className="text-xs text-[#A9B7CB] mt-1">
          مراحل پیکربندی دی‌ان‌اس و روتینگ اختصاصی نتا برای هر یک از دستگاه‌های متصل شما
        </p>
      </div>

      <SetupWizardSection />
    </div>
  );
}
