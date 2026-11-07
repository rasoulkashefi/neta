'use client';

import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Activity,
  Sparkles,
  Cloud,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

export function ProductSpectrum() {
  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center text-xs font-bold text-[#38D9F5] mb-3">
            معماری پلتفرم دیجیتال • شفاف و تفکیک‌شده
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E6EDF7] tracking-tight leading-[1.3]">
            سه قلمرو محصول؛ یک هویت منسجم
          </h2>
          <p className="text-sm sm:text-base text-[#A9B7CB] mt-4 leading-[1.85]">
            نتا محصولات مختلف را در یک دسته کلی نامفهوم پنهان نمی‌کند. بسته به اینکه توسعه‌دهنده، گیمر یا مدیر زیرساخت هستید، مسیر دسترسی شما شفاف و متمایز است.
          </p>
        </div>

        {/* The 3 Core Spectrum Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Connectivity */}
          <div className="rounded-3xl bg-[#121D30] border border-[#38D9F5]/30 p-8 flex flex-col justify-between hover:border-[#38D9F5]/60 transition-all shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#38D9F5]/10 border border-[#38D9F5]/20 flex items-center justify-center text-[#38D9F5]">
                  <Activity className="w-6 h-6" />
                </div>
                <Badge variant="success" size="sm" dot>۱۰۰٪ عملیاتی و فعال</Badge>
              </div>

              <span className="text-xs font-mono text-[#38D9F5] uppercase tracking-wider block mb-1">
                Connectivity & Edge
              </span>
              <h3 className="text-2xl font-black text-[#E6EDF7] tracking-tight mb-3">
                اتصال، DNS و پینگ بازی
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                هسته اصلی و امتحان‌پذیرفته نتا؛ شامل سرورهای Anycast DNS، بهینه‌سازی مستقیم پکت‌های بازی‌های آنلاین و عبور لایه ۷ از خطای ۴۰۳ داکر، فیگما و مخازن کد.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#39C99A] shrink-0" />
                  <span>پروتکل‌های مدرن DoH و DoT بدون لاگ</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#39C99A] shrink-0" />
                  <span>رله مستقیم سرورهای بازی (Valorant, CS2)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#39C99A] shrink-0" />
                  <span>۵۰+ سرویس بین‌المللی تاییدشده</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#26364D]/60 flex items-center gap-2">
              <Link href="/connectivity" className="flex-1 min-w-0">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full justify-between"
                  leftIcon={<ArrowLeft className="w-4 h-4 shrink-0" />}
                >
                  مشاهده سرویس‌های اتصال
                </Button>
              </Link>
              <Link href="/test" className="shrink-0">
                <Button variant="ghost" size="sm" className="px-2.5">
                  تست اتصال
                </Button>
              </Link>
            </div>
          </div>

          {/* Pillar 2: AI Platform */}
          <div className="rounded-3xl bg-[#121D30] border border-[#8B7CFF]/40 p-8 flex flex-col justify-between hover:border-[#8B7CFF]/70 transition-all shadow-lg relative">
            <div className="absolute -top-3 start-8">
              <span className="text-[10px] font-bold font-mono px-3 py-1 rounded-full bg-[#8B7CFF] text-white uppercase tracking-wider">
                New Commercial Direction
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#8B7CFF]/15 border border-[#8B7CFF]/30 flex items-center justify-center text-[#8B7CFF]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <Badge variant="violet" size="sm" dot>نسخه بتا (دسترسی زودهنگام)</Badge>
              </div>

              <span className="text-xs font-mono text-[#8B7CFF] uppercase tracking-wider block mb-1">
                Unified AI Platform
              </span>
              <h3 className="text-2xl font-black text-[#E6EDF7] tracking-tight mb-3">
                درگاه یکپارچه هوش مصنوعی
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                یک API Key واحد برای اتصال به برترین مدل‌های جهان شامل Claude 3.5 Sonnet، GPT-4o، DeepSeek V3 و Gemini Pro، با سازگاری ۱۰۰٪ با کتابخانه‌های رسمی OpenAI.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7CFF] shrink-0" />
                  <span>تغییر تنها یک خط کلاینت پایتون یا نود</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7CFF] shrink-0" />
                  <span>تسویه‌حساب ریالی شفاف بر مبنای توکن مصرفی</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7CFF] shrink-0" />
                  <span>مسیریاب هوشمند و Fallback خودکار در زمان اختلال</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#26364D]/60 flex items-center gap-2">
              <Link href="/ai" className="flex-1 min-w-0">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-between"
                  leftIcon={<ArrowLeft className="w-4 h-4 shrink-0" />}
                >
                  درگاه AI و مستندات
                </Button>
              </Link>
              <Link href="/ai#models" className="shrink-0">
                <Button variant="ghost" size="sm" className="px-2.5">
                  مدل‌ها
                </Button>
              </Link>
            </div>
          </div>

          {/* Pillar 3: Cloud & Marketplace */}
          <div className="rounded-3xl bg-[#121D30] border border-[#26364D] p-8 flex flex-col justify-between hover:border-[#38D9F5]/40 transition-all shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#18263B] border border-[#26364D] flex items-center justify-center text-[#38D9F5]">
                  <Cloud className="w-6 h-6" />
                </div>
                <Badge variant="neutral" size="sm">نقشه راه و برنامه همکاران</Badge>
              </div>

              <span className="text-xs font-mono text-[#A9B7CB] uppercase tracking-wider block mb-1">
                Cloud & Ecosystem
              </span>
              <h3 className="text-2xl font-black text-[#E6EDF7] tracking-tight mb-3">
                زیرساخت ابری و مارکت‌پلیس
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                معماری مقیاس‌پذیر برای سرورهای کانتینری لبه، فضای ذخیره‌سازی سازگار با S3 و بستری باز برای ارائه خدمات ثالث و نرم‌افزارهای شرکای نتا.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#A9B7CB] shrink-0" />
                  <span>کانتینرهای Edge با دیسک‌های NVMe</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#A9B7CB] shrink-0" />
                  <span>فضای S3 با ماندگاری ۹۹.۹۹۹٪</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#A9B7CB] shrink-0" />
                  <span>برنامه ویژه ارائه‌دهندگان سرویس (Partner Program)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#26364D]/60 flex items-center gap-2">
              <Link href="/cloud" className="flex-1 min-w-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between"
                  leftIcon={<ArrowLeft className="w-4 h-4 shrink-0" />}
                >
                  بررسی نقشه راه و همکاران
                </Button>
              </Link>
              <Link href="/cloud#marketplace" className="shrink-0">
                <Button variant="ghost" size="sm" className="px-2.5">
                  همکاری
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
