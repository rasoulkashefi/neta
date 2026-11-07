'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
  Calendar,
  Download,
  TrendingDown
} from 'lucide-react';

export default function AppAIUsagePage() {
  const modelStats = [
    {
      name: 'Claude 3.5 Sonnet (Anthropic)',
      tokens: '840,000',
      percentage: 45,
      cost: '$6.72',
      color: 'bg-[#8B7CFF]'
    },
    {
      name: 'DeepSeek V3 (DeepSeek)',
      tokens: '620,000',
      percentage: 33,
      cost: '$0.85',
      color: 'bg-[#39C99A]'
    },
    {
      name: 'GPT-4o (OpenAI)',
      tokens: '380,500',
      percentage: 22,
      cost: '$3.80',
      color: 'bg-[#38D9F5]'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#26364D]/60">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#E6EDF7] tracking-tight">
            گزارش مصرف و تحلیل توکن‌های هوش مصنوعی
          </h1>
          <p className="text-xs sm:text-sm text-[#A9B7CB] mt-1">
            مشاهده دقیق هزینه‌ها، تفکیک مصرف به تفکیک مدل و مانیتورینگ سقف ماهانه.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121D30] border border-[#26364D] text-xs text-[#A9B7CB]">
            <Calendar className="w-4 h-4 text-[#38D9F5]" />
            <span>ماه جاری (اسفند ۱۴۰۴)</span>
          </div>
          <Button variant="outline" size="sm" leftIcon={<Download className="w-4 h-4" />}>
            خروجی CSV
          </Button>
        </div>
      </div>

      {/* Spend Limit & Quota Card */}
      <div className="p-6 rounded-2xl bg-[#121D30] border border-[#26364D] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs text-[#A9B7CB] block mb-1">مصرف کل دوره جاری:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-[#38D9F5]">$11.37</span>
              <span className="text-xs text-[#A9B7CB]">(حدود ۷۴۰,۰۰۰ تومان)</span>
            </div>
          </div>
          <div className="text-end">
            <span className="text-xs text-[#A9B7CB] block mb-1">سقف بودجه فعال:</span>
            <div className="font-mono text-xl font-bold text-[#E6EDF7]">$50.00</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="h-2.5 w-full bg-[#080E18] rounded-full overflow-hidden flex">
            <div className="h-full bg-[#8B7CFF]" style={{ width: '13%' }} title="Claude: $6.72" />
            <div className="h-full bg-[#39C99A]" style={{ width: '3%' }} title="DeepSeek: $0.85" />
            <div className="h-full bg-[#38D9F5]" style={{ width: '7%' }} title="GPT-4o: $3.80" />
          </div>
          <div className="flex justify-between text-[11px] text-[#A9B7CB]">
            <span>۲۳٪ از سقف مصرف ماهانه استفاده شده است.</span>
            <span className="font-mono text-[#39C99A]">۳۸.۶۳ دلار باقیمانده</span>
          </div>
        </div>
      </div>

      {/* Usage by Model Breakdown */}
      <div className="bg-[#121D30] border border-[#26364D] rounded-2xl p-6 space-y-6">
        <h2 className="text-base font-bold text-[#E6EDF7]">
          تفکیک توکن و هزینه بر اساس مدل
        </h2>

        <div className="space-y-4">
          {modelStats.map((item) => (
            <div key={item.name} className="p-4 rounded-xl bg-[#0E1726] border border-[#26364D] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-xs font-bold text-[#E6EDF7]">{item.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-[#A9B7CB]">{item.tokens} توکن</span>
                  <span className="font-bold text-[#39C99A]">{item.cost}</span>
                </div>
              </div>

              <div className="h-1.5 w-full bg-[#18263B] rounded-full overflow-hidden">
                <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Callout */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#121D30] to-[#18263B] border border-[#39C99A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#39C99A]/15 text-[#39C99A] flex items-center justify-center shrink-0">
            <TrendingDown className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#E6EDF7]">
              صرفه‌جویی با مسیریاب نتا (Smart Routing): ~۳۵ دلار
            </div>
            <p className="text-[11px] text-[#A9B7CB] mt-0.5">
              با هدایت خودکار پرامپت‌های استدلال ریاضی به DeepSeek به جای مدل‌های پرچمدار گران‌قیمت.
            </p>
          </div>
        </div>
        <Link href="/app/ai" className="shrink-0">
          <Button variant="secondary" size="sm">
            تنظیمات مسیریاب
          </Button>
        </Link>
      </div>
    </div>
  );
}
