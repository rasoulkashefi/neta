'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Globe,
  Activity,
  Gamepad2,
  Sparkles,
  ArrowLeft,
  Wand2
} from 'lucide-react';

export default function AppDashboardOverview() {
  const [connectionActive, setConnectionActive] = useState(true);

  return (
    <div className="space-y-8">
      {/* Top Welcome & Status Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#26364D]/60">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#E6EDF7] tracking-tight">
            سلام، روزت بخیر! 👋
          </h1>
          <p className="text-xs sm:text-sm text-[#A9B7CB] mt-1">
            وضعیت شبکه شما متصل و تمام درگاه‌های پلتفرم نتا در دسترس هستند.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant={connectionActive ? 'success' : 'neutral'} size="md" dot>
            {connectionActive ? 'متصل به نود فرانکفورت DE-01' : 'اتصال موقتا متوقف'}
          </Badge>
          <Button
            variant={connectionActive ? 'outline' : 'primary'}
            size="sm"
            onClick={() => setConnectionActive(!connectionActive)}
          >
            {connectionActive ? 'قطع موقت' : 'اتصال مجدد'}
          </Button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">تاخیر میانگین (RTT):</span>
          <div className="font-mono text-2xl font-bold text-[#38D9F5]">42 ms</div>
          <span className="text-[10px] text-[#39C99A] mt-1 block">پاسخ‌دهی عالی Anycast</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">کوئری‌های DoH امروز:</span>
          <div className="font-mono text-2xl font-bold text-[#E6EDF7]">14,280</div>
          <span className="text-[10px] text-[#38D9F5] mt-1 block">رمزنگاری شده TLS 1.3</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">درگاه هوش مصنوعی AI:</span>
          <div className="text-2xl font-bold text-[#8B7CFF]"><span className="font-mono tabular-nums">1.8M</span> توکن</div>
          <span className="text-[10px] text-[#8B7CFF] mt-1 block">Claude, GPT-4o, DeepSeek</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">دستگاه‌های آنلاین:</span>
          <div className="text-2xl font-bold text-[#F5A65B]">۲ دستگاه</div>
          <span className="text-[10px] text-[#A9B7CB] mt-1 block">ویندوز و اندروید</span>
        </div>
      </div>

      {/* 4 Platform Services Status Cards in Dashboard */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-[#E6EDF7]">
            سرویس‌های فعال روی حساب کاربری شما
          </h2>
          <Link href="/products" className="text-xs text-[#38D9F5] hover:underline flex items-center gap-1">
            <span>کاتالوگ کامل محصولات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Service 1: Unified AI API */}
          <div className="p-5 rounded-2xl bg-[#121D30] border border-[#8B7CFF]/40 flex flex-col justify-between hover:border-[#8B7CFF] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#8B7CFF]/15 text-[#8B7CFF] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <Badge variant="violet" size="sm">Beta</Badge>
              </div>
              <h3 className="text-sm font-bold text-[#E6EDF7] mb-1">درگاه هوش مصنوعی</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
                یک کلید برای Claude 3.5، GPT-4o و DeepSeek سازگار با مشخصات OpenAI SDK.
              </p>
            </div>
            <Link href="/app/ai">
              <Button variant="ghost" size="sm" className="w-full justify-between text-[#8B7CFF] px-2">
                <span>کنسول مدل‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Service 2: Smart DNS */}
          <div className="p-5 rounded-2xl bg-[#121D30] border border-[#38D9F5]/30 flex flex-col justify-between hover:border-[#38D9F5] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#38D9F5]/15 text-[#38D9F5] flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <Badge variant="cyan" size="sm">Anycast DoH</Badge>
              </div>
              <h3 className="text-sm font-bold text-[#E6EDF7] mb-1">DNS هوشمند و امن</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
                تفکیک دامنه با تاخیر زیر ۱۰ میلی‌ثانیه، مسدودسازی فیشینگ و رمزنگاری ترافیک.
              </p>
            </div>
            <Link href="/app/dns">
              <Button variant="ghost" size="sm" className="w-full justify-between text-[#38D9F5] px-2">
                <span>تنظیمات دی‌ان‌اس</span>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Service 3: Gaming Ping Relay */}
          <div className="p-5 rounded-2xl bg-[#121D30] border border-[#F5A65B]/30 flex flex-col justify-between hover:border-[#F5A65B] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#F5A65B]/15 text-[#F5A65B] flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <Badge variant="amber" size="sm">Sub-tick</Badge>
              </div>
              <h3 className="text-sm font-bold text-[#E6EDF7] mb-1">رله بازی‌های آنلاین</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
                مسیر مستقیم UDP به سرورهای والورانت و کانتر در استانبول و فرانکفورت.
              </p>
            </div>
            <Link href="/app/gaming">
              <Button variant="ghost" size="sm" className="w-full justify-between text-[#F5A65B] px-2">
                <span>پیکربندی بازی‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Service 4: Service Access Gateway */}
          <div className="p-5 rounded-2xl bg-[#121D30] border border-[#39C99A]/30 flex flex-col justify-between hover:border-[#39C99A] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#39C99A]/15 text-[#39C99A] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <Badge variant="success" size="sm">Active</Badge>
              </div>
              <h3 className="text-sm font-bold text-[#E6EDF7] mb-1">دسترسی به سرویس‌ها</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
                پروکسی معکوس لایه ۷ برای رفع خطای ۴۰۳ داکر هاب، فیگما، و مخازن کدنویسی.
              </p>
            </div>
            <Link href="/app/access">
              <Button variant="ghost" size="sm" className="w-full justify-between text-[#39C99A] px-2">
                <span>مدیریت سرویس‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Setup & Diagnostics Callout */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#121D30] to-[#18263B] border border-[#26364D] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-[#E6EDF7]">افزودن دستگاه جدید به حساب</h3>
          <p className="text-xs text-[#A9B7CB] mt-1">
            می‌توانید لپ‌تاپ، تبلت یا مودم خانگی خود را با ویزارد گام‌به‌گام راه‌اندازی کنید.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/app/setup">
            <Button variant="primary" size="sm" leftIcon={<Wand2 className="w-4 h-4" />}>
              ویزارد راه‌اندازی دستگاه
            </Button>
          </Link>
          <Link href="/app/diagnostics">
            <Button variant="outline" size="sm">
              اجرای تست تشخیصی
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
