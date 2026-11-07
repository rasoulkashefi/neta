import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Activity,
  Globe,
  Gamepad2,
  Stethoscope,
  Wand2,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';

export const metadata = {
  title: 'سرویس‌های اتصال و شبکه — نتا | Neta.land',
  description: 'مجموعه ابزارهای هوشمند اتصال نتا: DNS رمزنگاری‌شده Anycast، تثبیت ساب‌تیک بازی‌های آنلاین و درگاه دسترسی لایه ۷ به سرویس‌های تخصصی.',
};

export default function ConnectivityHubPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center mb-4">
              <Badge variant="cyan" size="md" dot>
                زیرساخت عملیاتی و تست‌شده • ۱۰۰٪ در دسترس
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E6EDF7] tracking-tight leading-[1.3] mb-5">
              اتصال پایدار، بدون نوسان و ایمن برای تمام دستگاه‌ها
            </h1>
            <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.85]">
              سرویس‌های اتصال نتا بر پایه سه ستون اصلی معماری شبکه ساخته شده‌اند تا دسترسی مستقیم و بدون وقفه شما را به بازی‌ها، ابزارهای کدنویسی و سرویس‌های بین‌المللی تضمین کنند.
            </p>
          </div>

          {/* Quick Hub Navigation Cards (The 3 Core Pillars + Diagnostics + Setup) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Pillar 1: Smart DNS */}
            <div className="p-6 rounded-3xl bg-[#121D30] border border-[#38D9F5]/30 hover:border-[#38D9F5]/60 flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#38D9F5]/10 border border-[#38D9F5]/20 flex items-center justify-center text-[#38D9F5]">
                    <Activity className="w-6 h-6" />
                  </div>
                  <Badge variant="cyan" size="sm">Anycast DoH</Badge>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF7] mb-2">DNS هوشمند و بدون لاگ</h2>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                  تفکیک آنی نام دامنه‌ها با پروتکل‌های TLS 1.3 و HTTPS. مسدودسازی دامنه‌های فیشینگ و پاسخ‌دهی زیر ۱۰ میلی‌ثانیه از نزدیک‌ترین نود.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#39C99A]" />
                    <span>پشتیبانی از DoH, DoT و آدرس‌های استاندارد IPv4/IPv6</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#39C99A]" />
                    <span>حفاظت حریم خصوصی بدون ثبت فعالیت کاربر</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#26364D]/60 flex items-center gap-3">
                <Link href="/dns" className="flex-1">
                  <Button variant="primary" size="sm" className="w-full justify-between">
                    <span>تنظیمات و جزییات DNS</span>
                    <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
                  </Button>
                </Link>
                <Link href="/help/getting-started-dns">
                  <Button variant="ghost" size="sm">
                    آموزش
                  </Button>
                </Link>
              </div>
            </div>

            {/* Pillar 2: Gaming Connectivity */}
            <div className="p-6 rounded-3xl bg-[#121D30] border border-[#F5A65B]/30 hover:border-[#F5A65B]/60 flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A65B]/10 border border-[#F5A65B]/20 flex items-center justify-center text-[#F5A65B]">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <Badge variant="amber" size="sm">Sub-tick Ready</Badge>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF7] mb-2">بهینه‌ساز پینگ گیمینگ</h2>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                  کاهش نوسان پکت (Jitter) و تثبیت پکت‌های UDP به سرورهای رسمی بازی‌های آنلاین در ترکیه، آلمان و خاورمیانه با روت مستقیم.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#39C99A]" />
                    <span>سازگار با Valorant, CS2, Dota 2, Rainbow Six</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#39C99A]" />
                    <span>تست زنده پیش از ورود به بازی بدون ادعای دروغین</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#26364D]/60 flex items-center gap-3">
                <Link href="/gaming" className="flex-1">
                  <Button variant="primary" size="sm" className="w-full justify-between">
                    <span>مشاهده سرورهای بازی</span>
                    <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
                  </Button>
                </Link>
                <Link href="/test">
                  <Button variant="ghost" size="sm">
                    تست پینگ
                  </Button>
                </Link>
              </div>
            </div>

            {/* Pillar 3: Service Access Gateway */}
            <div className="p-6 rounded-3xl bg-[#121D30] border border-[#8B7CFF]/30 hover:border-[#8B7CFF]/60 flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B7CFF]/10 border border-[#8B7CFF]/20 flex items-center justify-center text-[#8B7CFF]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <Badge variant="violet" size="sm">Layer 7 Reverse Proxy</Badge>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF7] mb-2">گیت‌وی دسترسی سرویس‌ها</h2>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                  رفع خطای ۴۰۳ و تحریم‌های مکانی در بیش از ۵۰ سرویس توسعه‌دهندگان از جمله OpenAI، Claude، Docker Hub، Figma و GitHub.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#39C99A]" />
                    <span>بازنویسی هدرهای مکانی بدون دستکاری محتوا</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#39C99A]" />
                    <span>پوشش تمام پلتفرم‌های سیستم‌عامل و کنسول‌ها</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#26364D]/60 flex items-center gap-3">
                <Link href="/services" className="flex-1">
                  <Button variant="primary" size="sm" className="w-full justify-between">
                    <span>کاتالوگ سرویس‌های فعال</span>
                    <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
                  </Button>
                </Link>
                <Link href="/app/access">
                  <Button variant="ghost" size="sm">
                    مدیریت
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Setup & Diagnostics Interactive Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#0E1726] border border-[#26364D] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-start">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-[#38D9F5]" />
                  <h3 className="text-lg font-bold text-[#E6EDF7]">ویزارد تنظیم سریع روی دستگاه‌ها</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8]">
                  راهنمای گام‌به‌گام برای راه‌اندازی بدون دردسر روی ویندوز، اندروید، iOS، مک و مودم‌های خانگی.
                </p>
              </div>
              <Link href="/app/setup" className="shrink-0 w-full sm:w-auto">
                <Button variant="secondary" size="md" className="w-full">
                  شروع راه‌اندازی
                </Button>
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-[#0E1726] border border-[#26364D] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-start">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-[#39C99A]" />
                  <h3 className="text-lg font-bold text-[#E6EDF7]">تست و ارزیابی زنده اتصال</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8]">
                  تست سلامت DNS، بررسی تاخیر به نزدیک‌ترین نود Anycast و اندازه‌گیری جیتر شبکه خود.
                </p>
              </div>
              <Link href="/test" className="shrink-0 w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full">
                  اجرای تست زنده
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
