import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export function MarketplaceBanner() {
  return (
    <section className="py-16 bg-[#0B1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#121D30] via-[#18263B] to-[#0E1726] border border-[#8B7CFF]/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 end-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-[#8B7CFF]/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-start">
              <div className="inline-flex items-center">
                <Badge variant="violet" size="sm" dot>
                  اکوسیستم باز نتا • پلتفرم مارکت‌پلیس
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#E6EDF7] tracking-tight leading-[1.3]">
                طراحی‌شده برای گسترش: سرویس دیجیتال خود را روی بستر نتا ارائه دهید
              </h2>

              <p className="text-xs sm:text-sm text-[#A9B7CB] max-w-2xl leading-[1.85]">
                ما در حال ساخت مارکت‌پلیس اختصاصی نتا هستیم. اگر محصول دیجیتال، ابزار هوش مصنوعی، دیتابیس یا API تخصصی دارید، با اتصال به درگاه مشترک نتا، دغدغه احراز هویت، تسویه‌حساب ریالی و زیرساخت شبکه توزیع‌شده را به ما بسپارید و به صورت مستقیم به هزاران کاربر فعال نتا دسترسی پیدا کنید.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#E6EDF7] pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39C99A]" />
                  <span>تسویه حساب ریالی خودکار</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF]" />
                  <span>SSO و مدیریت دسترسی امن</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38D9F5]" />
                  <span>ترافیک Anycast بدون تاخیر</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link href="/cloud#marketplace" className="w-full">
                <Button variant="secondary" size="md" className="w-full justify-center" leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                  پیوستن به برنامه همکاران
                </Button>
              </Link>
              <Link href="/products" className="w-full">
                <Button variant="outline" size="md" className="w-full justify-center">
                  مشاهده کاتالوگ محصولات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
