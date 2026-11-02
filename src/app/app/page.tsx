'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  Globe,
  Activity,
  Gamepad2,
  Server,
  Zap,
  CheckCircle2,
  Clock,
  ArrowLeft,
  ArrowUpRight,
  Shield,
  Laptop
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
            وضعیت شبکه شما متصل و کاملاً پایدار است.
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
          <span className="text-[10px] text-[#39C99A] mt-1 block">پاسخ‌دهی عالی</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">کوئری‌های DoH امروز:</span>
          <div className="font-mono text-2xl font-bold text-[#E6EDF7]">14,280</div>
          <span className="text-[10px] text-[#38D9F5] mt-1 block">رمزنگاری شده TLS 1.3</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">سرویس‌های مجاز فعال:</span>
          <div className="text-2xl font-bold text-[#8B7CFF]"><span className="font-mono tabular-nums">28</span> سرویس</div>
          <span className="text-[10px] text-[#8B7CFF] mt-1 block">Claude, Docker, Figma...</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
          <span className="text-xs text-[#A9B7CB] block mb-1">دستگاه‌های آنلاین:</span>
          <div className="text-2xl font-bold text-[#F5A65B]">۲ دستگاه</div>
          <span className="text-[10px] text-[#A9B7CB] mt-1 block">ویندوز و اندروید</span>
        </div>
      </div>

      {/* 3 Capabilities Status Cards in Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Capability 1: Access */}
        <div className="p-6 rounded-2xl bg-[#121D30] border border-[#8B7CFF]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#8B7CFF]/15 text-[#8B7CFF] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <Badge variant="violet" size="sm">Active</Badge>
            </div>
            <h3 className="text-base font-bold text-[#E6EDF7] mb-1">دسترسی به سرویس‌ها</h3>
            <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
              پروکسی معکوس لایه ۷ برای ابزارهای هوش مصنوعی و داکر با موفقیت فعال است.
            </p>
          </div>
          <Link href="/app/access">
            <Button variant="ghost" size="sm" className="w-full justify-between text-[#8B7CFF]">
              <span>مدیریت سرویس‌ها</span>
              <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
            </Button>
          </Link>
        </div>

        {/* Capability 2: DNS */}
        <div className="p-6 rounded-2xl bg-[#121D30] border border-[#38D9F5]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#38D9F5]/15 text-[#38D9F5] flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <Badge variant="cyan" size="sm">Anycast DoH</Badge>
            </div>
            <h3 className="text-base font-bold text-[#E6EDF7] mb-1">DNS سریع و ضد تبلیغ</h3>
            <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
              فیلتر بدافزار و فیشینگ فعال است. تاخیر تفکیک دامنه: ۷ میلی‌ثانیه.
            </p>
          </div>
          <Link href="/app/dns">
            <Button variant="ghost" size="sm" className="w-full justify-between text-[#38D9F5]">
              <span>تنظیمات دی‌ان‌اس</span>
              <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
            </Button>
          </Link>
        </div>

        {/* Capability 3: Gaming */}
        <div className="p-6 rounded-2xl bg-[#121D30] border border-[#F5A65B]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5A65B]/15 text-[#F5A65B] flex items-center justify-center">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <Badge variant="amber" size="sm">Sub-tick Ready</Badge>
            </div>
            <h3 className="text-base font-bold text-[#E6EDF7] mb-1">رله بازی‌های آنلاین</h3>
            <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
              مسیر مستقیم والورانت به سرور استانبول (پینگ ۴۶ میلی‌ثانیه) در حالت آماده‌باش.
            </p>
          </div>
          <Link href="/app/gaming">
            <Button variant="ghost" size="sm" className="w-full justify-between text-[#F5A65B]">
              <span>پیکربندی بازی‌ها</span>
              <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
            </Button>
          </Link>
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
            <Button variant="primary" size="sm">
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
