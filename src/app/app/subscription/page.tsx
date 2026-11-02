'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CreditCard, Check, AlertCircle, Calendar, ShieldCheck } from 'lucide-react';

export default function AppSubscriptionPage() {
  const [autoRenew, setAutoRenew] = useState(true);

  return (
    <div className="space-y-8">
      <div className="pb-4 border-b border-[#26364D]/60">
        <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
          مدیریت اشتراک و فاکتورها
        </h1>
        <p className="text-xs text-[#A9B7CB] mt-1">
          مشاهده جزئیات پلن فعال، تاریخ انقضا و مدیریت تمدید خودکار
        </p>
      </div>

      {/* Active Plan Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#121D30] border border-[#38D9F5]/40 space-y-6 shadow-[0_0_40px_-15px_rgba(56,217,245,0.2)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-[#E6EDF7]">اشتراک Personal Pro</h2>
              <Badge variant="success" size="sm" dot>فعال</Badge>
            </div>
            <p className="text-xs text-[#A9B7CB] mt-1">
              دسترسی نامحدود به ۵۰+ سرویس بین‌المللی با پهنای باند کامل
            </p>
          </div>

          <div className="text-start sm:text-end">
            <span className="font-mono text-2xl font-black text-[#38D9F5]">۱۹۵,۰۰۰ تومان</span>
            <span className="text-xs text-[#A9B7CB] block mt-0.5">تمدید بعدی: ۲۸ آبان ۱۴۰۵</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#26364D]/60 text-xs text-[#E6EDF7]">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#39C99A]" />
            <span>ظرفیت تا ۳ دستگاه همزمان</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#39C99A]" />
            <span>فیلتر بدافزار و DoH نامحدود</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#39C99A]" />
            <span>پشتیبانی چت زیر ۲۰ دقیقه</span>
          </div>
        </div>

        <div className="pt-4 border-t border-[#26364D]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoRenew(!autoRenew)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                autoRenew ? 'bg-[#39C99A]/15 text-[#39C99A] border border-[#39C99A]/30' : 'bg-[#18263B] text-[#64748B]'
              }`}
            >
              تمدید خودکار: {autoRenew ? 'روشن' : 'خاموش'}
            </button>
            <span className="text-xs text-[#64748B]">لغو اشتراک بدون جریمه در هر ثانیه</span>
          </div>

          <Button variant="outline" size="sm">
            ارتقا به پلن Gaming Ultimate
          </Button>
        </div>
      </div>

      {/* Invoice History */}
      <div className="p-6 rounded-3xl bg-[#121D30] border border-[#26364D] space-y-4">
        <h3 className="text-base font-bold text-[#E6EDF7]">سوابق پرداخت و فاکتورها</h3>

        <div className="divide-y divide-[#26364D]/60 text-xs">
          <div className="py-3 flex items-center justify-between">
            <div>
              <span className="font-bold text-[#E6EDF7]">اشتراک ماهانه Personal Pro</span>
              <span className="text-[#64748B] block mt-0.5 font-mono">۲۸ مهر ۱۴۰۵ • فاکتور #NETA-8492</span>
            </div>
            <div className="text-end">
              <span className="font-mono font-bold text-[#E6EDF7]">۱۹۵,۰۰۰ تومان</span>
              <Badge variant="success" size="sm" className="ms-2">پرداخت‌شده</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
