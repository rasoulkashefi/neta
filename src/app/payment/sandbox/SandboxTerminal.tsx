'use client';

import React from 'react';
import Link from 'next/link';
import { submitSandboxPayment } from './actions';
import { ShieldCheck, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface SandboxTerminalProps {
  authority: string | null;
  order: {
    id: string;
    amount_toman: number;
    status: string;
    gateway: string;
  } | null;
}

export function SandboxTerminal({ authority, order }: SandboxTerminalProps) {
  if (!authority || !order) {
    return (
      <div className="min-h-screen bg-[#080E18] text-[#E6EDF7] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#121D30] border border-[#FF4D4D]/30 p-8 rounded-3xl text-center">
          <XCircle className="w-12 h-12 text-[#FF4D4D] mx-auto mb-4" />
          <h1 className="text-xl font-black mb-2">شناسه پرداخت نامعتبر است</h1>
          <p className="text-xs text-[#A9B7CB] mb-6">شناسه پرداخت یافت نشد یا منقضی شده است.</p>
          <Link href="/app/subscription">
            <Button variant="secondary" size="md" className="w-full">
              بازگشت به اشتراک‌ها
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (order.status !== 'pending') {
    return (
      <div className="min-h-screen bg-[#080E18] text-[#E6EDF7] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#121D30] border border-[#26364D] p-8 rounded-3xl text-center">
          <AlertTriangle className="w-12 h-12 text-[#FFB020] mx-auto mb-4" />
          <h1 className="text-xl font-black mb-2">این تراکنش قبلاً تعیین وضعیت شده است</h1>
          <p className="text-xs text-[#A9B7CB] mb-6">وضعیت فعلی: {order.status === 'paid' ? 'پرداخت شده' : 'لغو یا ناموفق'}</p>
          <Link href="/app/subscription">
            <Button variant="secondary" size="md" className="w-full">
              بازگشت به کیف‌پول
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formattedAmount = Number(order.amount_toman).toLocaleString('fa-IR');

  return (
    <div className="min-h-screen bg-[#070C15] text-[#E6EDF7] flex flex-col justify-between p-4 sm:p-8">
      {/* Top Banner */}
      <div className="max-w-xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#26364D]/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#38D9F5] to-[#8B7CFF] p-[1.5px]">
            <div className="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center font-black text-sm text-[#38D9F5]">
              N
            </div>
          </div>
          <div>
            <span className="font-extrabold text-sm text-[#E6EDF7]">درگاه پرداخت نتا‌لند</span>
            <span className="block text-[10px] text-[#A9B7CB]">محیط شبیه‌ساز امن (Sandbox Gateway)</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFB020]/10 border border-[#FFB020]/30 text-[11px] text-[#FFB020] font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>حالت تست شبیه‌سازی</span>
        </div>
      </div>

      {/* Main Gateway Card */}
      <div className="max-w-md w-full mx-auto my-8">
        <div className="bg-[#10192A] border border-[#26364D] rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="text-center pb-6 border-b border-[#26364D]/60">
            <span className="text-xs text-[#A9B7CB] block mb-1">مبلغ قابل پرداخت</span>
            <div className="text-3xl font-black text-[#38D9F5] tracking-tight">
              {formattedAmount} <span className="text-sm font-normal text-[#A9B7CB]">تومان</span>
            </div>
          </div>

          <div className="py-5 space-y-3 text-xs border-b border-[#26364D]/60">
            <div className="flex items-center justify-between">
              <span className="text-[#A9B7CB]">پذیرنده:</span>
              <span className="font-semibold text-[#E6EDF7]">پلتفرم دیجیتال نتا (Neta.land)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#A9B7CB]">شناسه ارجاع:</span>
              <span className="font-mono text-[#38D9F5] text-[11px] dir-ltr truncate max-w-[200px]">{authority}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#A9B7CB]">نحوه تسویه:</span>
              <span className="text-[#00E5A3]">دفترکل دوطرفه آنی (Double-Entry)</span>
            </div>
          </div>

          <div className="my-5 p-3 rounded-xl bg-[#38D9F5]/10 border border-[#38D9F5]/20 text-[11px] text-[#A9B7CB] leading-relaxed">
            💡 این یک درگاه شبیه‌ساز است تا بدون نیاز به پرداخت بانکی یا اینماد، فرایند کامل شارژ، صدور سند مالی و فعال‌سازی سرویس‌ها را تست کنید.
          </div>

          <form action={submitSandboxPayment} className="space-y-3">
            <input type="hidden" name="authority" value={authority} />

            <Button
              type="submit"
              name="action"
              value="pay"
              variant="primary"
              size="lg"
              className="w-full bg-gradient-to-r from-[#00E5A3] to-[#38D9F5] text-[#070C15] font-extrabold hover:brightness-110 shadow-lg shadow-[#00E5A3]/20"
              leftIcon={<CheckCircle2 className="w-4 h-4 shrink-0" />}
            >
              پرداخت موفق آزمایشی
            </Button>

            <Button
              type="submit"
              name="action"
              value="cancel"
              variant="secondary"
              size="md"
              className="w-full text-[#FF6B6B] hover:bg-[#FF4D4D]/10 hover:border-[#FF4D4D]/30"
              leftIcon={<XCircle className="w-4 h-4 shrink-0" />}
            >
              انصراف از پرداخت
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[11px] text-[#64748B]">
        امنیت مالی با استاندارد Double-Entry Bookkeeping • neta.land
      </div>
    </div>
  );
}
