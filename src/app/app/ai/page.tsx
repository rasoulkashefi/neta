'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AI_MODELS_LIST } from '@/lib/products';
import {
  KeyRound,
  Copy,
  Check,
  Terminal,
  ArrowLeft,
  Cpu
} from 'lucide-react';

export default function AppAIConsolePage() {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const baseUrl = 'https://api.neta.land/v1';
  const sampleKey = 'neta_live_7d9e4a3b8c12ef098a5';

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(baseUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(sampleKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#26364D]/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-black text-[#E6EDF7] tracking-tight">
              کنسول پلتفرم هوش مصنوعی (Unified AI API)
            </h1>
            <Badge variant="violet" size="sm">Beta</Badge>
          </div>
          <p className="text-xs sm:text-sm text-[#A9B7CB]">
            مدیریت دسترسی به مدل‌های Claude، OpenAI، DeepSeek و Gemini از طریق یک درگاه یکپارچه.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/app/ai/keys">
            <Button variant="primary" size="sm" leftIcon={<KeyRound className="w-4 h-4" />}>
              مدیریت کلیدهای API
            </Button>
          </Link>
          <Link href="/ai#docs">
            <Button variant="outline" size="sm">
              مستندات کامل
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Setup Cards: Base URL & Active Token */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: API Endpoint Base URL */}
        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#A9B7CB] flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-[#38D9F5]" />
              <span>آدرس پایه درگاه (Base URL):</span>
            </span>
            <Badge variant="cyan" size="sm">OpenAI Compatible</Badge>
          </div>

          <div className="flex items-center justify-between bg-[#080E18] p-2.5 rounded-xl border border-[#26364D]">
            <code dir="ltr" className="font-mono text-xs sm:text-sm text-[#38D9F5]">
              {baseUrl}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyUrl}
              leftIcon={copiedUrl ? <Check className="w-3.5 h-3.5 text-[#39C99A]" /> : <Copy className="w-3.5 h-3.5" />}
            >
              {copiedUrl ? 'کپی شد' : 'کپی'}
            </Button>
          </div>
          <p className="text-[11px] text-[#A9B7CB]">
            در تمام کلاینت‌های رسمی OpenAI، تنها کافیست این مقدار را برای پارامتر <code className="text-[#E6EDF7]">base_url</code> قرار دهید.
          </p>
        </div>

        {/* Card 2: Primary API Key */}
        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#A9B7CB] flex items-center gap-1.5">
              <KeyRound className="w-4 h-4 text-[#8B7CFF]" />
              <span>کلید فعال پروژه پیش‌فرض:</span>
            </span>
            <Badge variant="success" size="sm" dot>فعال</Badge>
          </div>

          <div className="flex items-center justify-between bg-[#080E18] p-2.5 rounded-xl border border-[#26364D]">
            <code dir="ltr" className="font-mono text-xs text-[#E6EDF7] truncate max-w-[220px]">
              {sampleKey}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyKey}
              leftIcon={copiedKey ? <Check className="w-3.5 h-3.5 text-[#39C99A]" /> : <Copy className="w-3.5 h-3.5" />}
            >
              {copiedKey ? 'کپی شد' : 'کپی کلید'}
            </Button>
          </div>
          <p className="text-[11px] text-[#A9B7CB]">
            سقف هزینه ماهانه: ۵۰ دلار (حدود ۳.۲ میلیون تومان) • مصرف فعلی: ۱۲.۴۰ دلار
          </p>
        </div>
      </div>

      {/* 3 Metric Summary Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#0E1726] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">کل درخواست‌های ماه جاری:</span>
          <div className="text-2xl font-bold font-mono text-[#E6EDF7]">۲۴,۵۸۰</div>
          <span className="text-[11px] text-[#39C99A] mt-1 block">۹۹.۹۸٪ موفق (بدون خطا)</span>
        </div>

        <div className="p-4 rounded-xl bg-[#0E1726] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">مجموع توکن‌های پردازش‌شده:</span>
          <div className="text-2xl font-bold font-mono text-[#8B7CFF]">۱,۸۴۰,۵۰۰</div>
          <span className="text-[11px] text-[#A9B7CB] mt-1 block">ورودی: ۱.۲M / خروجی: ۶۴۰K</span>
        </div>

        <div className="p-4 rounded-xl bg-[#0E1726] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">میانگین زمان اولین توکن (TTFT):</span>
          <div className="text-2xl font-bold font-mono text-[#38D9F5]">۳۴۰ ms</div>
          <span className="text-[11px] text-[#38D9F5] mt-1 block">مسیر بهینه فرانکفورت</span>
        </div>
      </div>

      {/* Available Models Quick Table in Dashboard */}
      <div className="bg-[#121D30] border border-[#26364D] rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-[#26364D] flex items-center justify-between">
          <h2 className="text-base font-bold text-[#E6EDF7] flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#8B7CFF]" />
            <span>مدل‌های قابل استفاده با کلید شما</span>
          </h2>
          <Link href="/app/ai/usage" className="text-xs text-[#38D9F5] hover:underline flex items-center gap-1">
            <span>گزارش جزئیات مصرف</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead>
              <tr className="border-b border-[#26364D] bg-[#0E1726] text-[#A9B7CB]">
                <th className="py-3 px-4 font-bold">شناسه مدل (Model ID)</th>
                <th className="py-3 px-4 font-bold">ارائه‌دهنده</th>
                <th className="py-3 px-4 font-bold">پنجره زمینه</th>
                <th className="py-3 px-4 font-bold">تاخیر میانگین</th>
                <th className="py-3 px-4 font-bold text-center">وضعیت روت</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#26364D]/60 text-[#E6EDF7]">
              {AI_MODELS_LIST.map((model) => (
                <tr key={model.id} className="hover:bg-[#18263B]/40 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#38D9F5]">{model.id}</td>
                  <td className="py-3 px-4 text-[#A9B7CB]">{model.provider}</td>
                  <td className="py-3 px-4 font-mono">{model.contextWindow}</td>
                  <td className="py-3 px-4 font-mono text-[#39C99A]">{model.latency}</td>
                  <td className="py-3 px-4 text-center">
                    <Badge variant={model.status.includes('فعال') ? 'success' : 'neutral'} size="sm" dot>
                      {model.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
