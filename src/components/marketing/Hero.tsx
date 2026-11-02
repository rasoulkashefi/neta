'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Activity, Globe, Gamepad2, ShieldCheck, Zap, Server } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background Subtle Network Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-[#38D9F5]/10 via-[#8B7CFF]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center mb-6">
          <Badge variant="cyan" size="md" dot>
            نسل جدید زیرساخت اتصال هوشمند • neta.land
          </Badge>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#E6EDF7] tracking-tight leading-[1.32] max-w-4xl mx-auto mb-6">
          اینترنتت، برای کاری که می‌خوای.
        </h1>

        {/* Supporting Message */}
        <p className="text-base sm:text-lg lg:text-xl text-[#A9B7CB] max-w-2xl mx-auto leading-[1.8] mb-10">
          دسترسی راحت‌تر به سرویس‌های پشتیبانی‌شده، DNS سریع و اتصال بهینه‌تر برای بازی؛ همه در یک تجربه ساده.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/signup" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
              leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}
            >
              شروع رایگان
            </Button>
          </Link>
          <a href="#test" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px]"
              leftIcon={<Activity className="w-4 h-4 text-[#38D9F5]" />}
            >
              تست اتصال
            </Button>
          </a>
        </div>

        {/* Product UI Preview — The Three Capabilities in One Calm Surface */}
        <div className="relative max-w-4xl mx-auto">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#38D9F5]/30 via-[#8B7CFF]/30 to-[#F5A65B]/30 rounded-3xl blur-xl opacity-40" />

          <div className="relative bg-[#0E1726] border border-[#26364D] rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-start overflow-hidden">
            {/* Top Bar of the Mockup */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#26364D]/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F16D7A]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#F5B84C]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#39C99A]/80 inline-block" />
                <span className="text-xs font-mono text-[#A9B7CB] ms-2">gateway.neta.land/status</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" size="sm" dot>
                  پروتکل فعال: Anycast + DoH
                </Badge>
              </div>
            </div>

            {/* Three Capabilities Pillars Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Capability A: Access (Violet) */}
              <div className="bg-[#121D30] rounded-xl p-4 border border-[#8B7CFF]/20 hover:border-[#8B7CFF]/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#8B7CFF]/15 border border-[#8B7CFF]/30 flex items-center justify-center text-[#8B7CFF]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#8B7CFF] bg-[#8B7CFF]/10 px-2 py-0.5 rounded-full">
                    Access
                  </span>
                </div>
                <div className="text-sm font-bold text-[#E6EDF7] mb-1">دسترسی به سرویس‌ها</div>
                <div className="text-xs text-[#A9B7CB] mb-3 leading-[1.6]">
                  اتصال بدون خطا به کلود، داکر، و هوش مصنوعی با پروکسی لایه ۷.
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8B7CFF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF]" />
                  <span>50+ سرویس اعتبارسنجی‌شده</span>
                </div>
              </div>

              {/* Capability B: DNS (Cyan) */}
              <div className="bg-[#121D30] rounded-xl p-4 border border-[#38D9F5]/20 hover:border-[#38D9F5]/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#38D9F5]/15 border border-[#38D9F5]/30 flex items-center justify-center text-[#38D9F5]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#38D9F5] bg-[#38D9F5]/10 px-2 py-0.5 rounded-full">
                    DNS
                  </span>
                </div>
                <div className="text-sm font-bold text-[#E6EDF7] mb-1">DNS سریع و پایدار</div>
                <div className="text-xs text-[#A9B7CB] mb-3 leading-[1.6]">
                  رزولوشن رمزنگاری‌شده DoH با تاخیر زیر ۱۰ میلی‌ثانیه در لبه محلی.
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#38D9F5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38D9F5]" />
                  <span className="tabular-nums">7.4 ms میانگین پاسخ</span>
                </div>
              </div>

              {/* Capability C: Gaming (Amber) */}
              <div className="bg-[#121D30] rounded-xl p-4 border border-[#F5A65B]/20 hover:border-[#F5A65B]/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F5A65B]/15 border border-[#F5A65B]/30 flex items-center justify-center text-[#F5A65B]">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#F5A65B] bg-[#F5A65B]/10 px-2 py-0.5 rounded-full">
                    Gaming
                  </span>
                </div>
                <div className="text-sm font-bold text-[#E6EDF7] mb-1">اتصال بهتر برای بازی</div>
                <div className="text-xs text-[#A9B7CB] mb-3 leading-[1.6]">
                  کاهش جیتر و تثبیت پکت‌های والورانت و CS2 روی رله‌های خاورمیانه.
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#F5A65B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A65B]" />
                  <span className="tabular-nums">0.0% پکت‌لاس / 34ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
