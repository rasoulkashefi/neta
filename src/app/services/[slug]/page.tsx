import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SUPPORTED_SERVICES } from '@/lib/mockData';
import { ArrowLeft, CheckCircle2, ShieldCheck, Server, Globe } from 'lucide-react';

export function generateStaticParams() {
  return SUPPORTED_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SUPPORTED_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#A9B7CB] mb-8 font-mono">
            <Link href="/" className="hover:text-[#38D9F5]">نتا</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#38D9F5]">سرویس‌ها</Link>
            <span>/</span>
            <span className="text-[#8B7CFF]">{service.name}</span>
          </div>

          {/* Banner Card */}
          <div className="bg-[#121D30] border border-[#8B7CFF]/40 rounded-3xl p-6 sm:p-10 mb-10 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#26364D]/80">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-black text-[#E6EDF7]">{service.name}</h1>
                  <Badge variant="violet" size="sm">
                    {service.categoryName}
                  </Badge>
                </div>
                <div className="text-sm text-[#8B7CFF] font-semibold">
                  {service.persianName}
                </div>
              </div>

              <div className="shrink-0">
                {service.status === 'supported' && (
                  <Badge variant="success" size="md" dot>
                    پشتیبانی کامل و تست‌شده
                  </Badge>
                )}
                {service.status === 'partial' && (
                  <Badge variant="warning" size="md" dot>
                    پشتیبانی مشروط و نسبی
                  </Badge>
                )}
                {service.status === 'unverified' && (
                  <Badge variant="neutral" size="md">
                    در حال آزمایش لایه شبکه
                  </Badge>
                )}
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-[#A9B7CB] leading-[1.85]">
              {service.description}
            </p>

            {service.detailedGuide && (
              <div className="mt-6 p-4 rounded-xl bg-[#0B1220] border border-[#26364D] text-xs text-[#A9B7CB] leading-[1.75]">
                <span className="font-bold text-[#E6EDF7] block mb-1">مکانیزم فنی هدایت ترافیک:</span>
                {service.detailedGuide}
              </div>
            )}
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-[#121D30] border border-[#26364D]">
              <span className="text-xs text-[#A9B7CB] block mb-1">اندپوینت شبکه</span>
              <span className="font-mono text-sm font-bold text-[#38D9F5]">{service.endpoint}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#121D30] border border-[#26364D]">
              <span className="text-xs text-[#A9B7CB] block mb-1">پروتکل‌های مجاز</span>
              <span className="font-mono text-sm font-bold text-[#E6EDF7]">{service.protocols.join(', ')}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#121D30] border border-[#26364D]">
              <span className="text-xs text-[#A9B7CB] block mb-1">پورت‌های استاندارد</span>
              <span className="font-mono text-sm font-bold text-[#39C99A]">TCP / TLS {service.port}</span>
            </div>
          </div>

          {/* Step by Step Configuration */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-[#E6EDF7]">نحوه فعال‌سازی برای {service.name}</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex gap-4">
                <span className="w-6 h-6 rounded-full bg-[#18263B] text-[#8B7CFF] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  ۱
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#E6EDF7]">تنظیم DNS اختصاصی نتا روی دستگاه</h3>
                  <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                    برای دسترسی، کافی است DNS سیستم خود را به آی‌پی‌های Anycast نتا (10.202.10.10) تغییر دهید.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex gap-4">
                <span className="w-6 h-6 rounded-full bg-[#18263B] text-[#8B7CFF] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  ۲
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#E6EDF7]">پاک‌سازی کش DNS مرورگر</h3>
                  <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                    در صورت باز بودن قبلی تب {service.name}، یک‌بار کلید ترکیبی Ctrl + Shift + R را بزنید تا درخواست‌ها مستقیماً از مسیر نتا ترجمه شوند.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex gap-4">
                <span className="w-6 h-6 rounded-full bg-[#18263B] text-[#8B7CFF] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  ۳
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#E6EDF7]">راستی‌آزمایی دسترسی</h3>
                  <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                    از ابزار تست تشخیصی اختصاصی نتا استفاده کنید تا دریافت پاسخ 200 OK از سرورهای {service.name} تایید شود.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#26364D]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/services">
                <Button variant="ghost" size="sm">
                  بازگشت به دایرکتوری
                </Button>
              </Link>
              <Link href="/test">
                <Button variant="access" size="sm" leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                  انجام تست زنده اتصال
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
