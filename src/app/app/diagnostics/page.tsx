'use client';

import React from 'react';
import { ConnectionTest } from '@/components/marketing/ConnectionTest';

export default function AppDiagnosticsPage() {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-[#26364D]/60">
        <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
          کنسول تست و عیب‌یابی شبکه
        </h1>
        <p className="text-xs text-[#A9B7CB] mt-1">
          ارزیابی تاخیر زنده پاسخ DNS، پاسخگویی سرویس‌ها و پایداری بسته‌های گیمینگ
        </p>
      </div>

      <ConnectionTest />
    </div>
  );
}
