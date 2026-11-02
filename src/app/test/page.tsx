'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ConnectionTest } from '@/components/marketing/ConnectionTest';
import { Activity, ShieldCheck, RefreshCw, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function TestPage() {
  const [ipData, setIpData] = useState<{ ip: string; isp: string; country: string } | null>({
    ip: 'نمایشی (تست زنده مرورگر)',
    isp: 'شناسایی‌شده توسط WebRTC',
    country: 'Iran (IR)'
  });

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" size="md" dot>مرکز آزمایش اتصال و عیب‌یابی</Badge>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.32] mt-4 mb-4">
              تست تشخیصی زنده شبکه
            </h1>
            <p className="text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
              تحلیل در لحظه زمان تاخیر DNS، دسترسی‌پذیری سرویس‌های بین‌المللی، و کیفیت روتینگ پکت‌های گیمینگ شما.
            </p>
          </div>

          {/* Connection Test Interactive Component */}
          <div className="mb-16">
            <ConnectionTest />
          </div>

          {/* Additional Deep Diagnostics: DNS Leak & IPv6 Check */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#26364D]">
                <h3 className="text-base font-bold text-[#E6EDF7]">بررسی نشت DNS (DNS Leak Test)</h3>
                <Badge variant="success" size="sm">بدون نشت</Badge>
              </div>
              <p className="text-xs text-[#A9B7CB] leading-[1.75]">
                این تست بررسی می‌کند که آیا درخواست‌های نام دامنه شما از تونل امن خارج می‌شوند یا خیر. در صورت تنظیم بودن DoH نتا، هیچ درخواستی به سرورهای محلی ارسال نخواهد شد.
              </p>
              <div className="p-3 bg-[#0B1220] rounded-xl border border-[#26364D] font-mono text-xs flex justify-between">
                <span className="text-[#64748B]">Active Resolver:</span>
                <span className="text-[#38D9F5]">doh.neta.land [Anycast DE]</span>
              </div>
            </div>

            <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#26364D]">
                <h3 className="text-base font-bold text-[#E6EDF7]">پشتیبانی از IPv6 دوگانه</h3>
                <Badge variant="cyan" size="sm">Dual-Stack Ready</Badge>
              </div>
              <p className="text-xs text-[#A9B7CB] leading-[1.75]">
                زیرساخت نتا به طور کامل از استاندارد نسل ششم اینترنت (IPv6) پشتیبانی می‌کند تا اتصال شما به سرورهای مدرن بدون تاخیر ناشی از ترجمه آدرس NAT64 برقرار شود.
              </p>
              <div className="p-3 bg-[#0B1220] rounded-xl border border-[#26364D] font-mono text-xs flex justify-between">
                <span className="text-[#64748B]">IPv6 DNS:</span>
                <span className="text-[#39C99A]">2a0b:4e07::10 (Active)</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
