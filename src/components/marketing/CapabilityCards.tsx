import React from 'react';
import Link from 'next/link';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { Globe, Activity, Gamepad2, ArrowLeft, CheckCircle2 } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'access',
    icon: Globe,
    badge: 'Access',
    title: 'دسترسی به سرویس‌ها',
    description: 'رفع پایدار اختلالات جغرافیایی و دسترسی مطمئن به ابزارهای کاری، کدنویسی، طراحی و مدل‌های هوش مصنوعی با اعتبارسنجی شفاف.',
    features: [
      'سازگاری با کلود، اوپن‌ای‌آی، فیگما و داکر',
      'بدون تغییر در محتوا یا شنود کلاینت',
      'راهنمای گام‌به‌گام اختصاصی هر ابزار'
    ],
    ctaText: 'مشاهده سرویس‌ها',
    ctaHref: '/services',
    accentColor: '#8B7CFF',
    accentClass: 'text-[#8B7CFF] bg-[#8B7CFF]/10 border-[#8B7CFF]/30',
    borderHover: 'hover:border-[#8B7CFF]/50'
  },
  {
    id: 'dns',
    icon: Activity,
    badge: 'DNS',
    title: 'DNS سریع و پایدار',
    description: 'تفکیک سریع نام دامنه‌ها با نزدیک‌ترین سرورهای لبه Anycast و رمزنگاری مدرن DoH و DoT برای افزایش پایداری و امنیت اینترنت شما.',
    features: [
      'پاسخ‌دهی با کمترین تاخیر در گره‌های محلی',
      'پیکربندی ساده در تمام گوشی‌ها و مودم‌ها',
      'حفاظت در برابر جعل DNS و فیشینگ'
    ],
    ctaText: 'آشنایی با DNS',
    ctaHref: '/dns',
    accentColor: '#38D9F5',
    accentClass: 'text-[#38D9F5] bg-[#38D9F5]/10 border-[#38D9F5]/30',
    borderHover: 'hover:border-[#38D9F5]/50'
  },
  {
    id: 'gaming',
    icon: Gamepad2,
    badge: 'Gaming',
    title: 'اتصال بهتر برای بازی',
    description: 'تشخیص گلوگاه‌های مسیر بازی و هدایت مستقیم پکت‌های UDP به سرورهای رسمی والورانت، کانتر ۲ و دوتا جهت کاهش محسوس جیتر و پکت‌لاس.',
    features: [
      'مسیرهای مستقیم و پایدار به خاورمیانه و اروپا',
      'تثبیت ساب‌تیک در بازی‌های رقابتی شوتر',
      'مانیتورینگ زنده سلامت سیگنال بدون ادعای پوچ'
    ],
    ctaText: 'تست اتصال بازی',
    ctaHref: '/gaming',
    accentColor: '#F5A65B',
    accentClass: 'text-[#F5A65B] bg-[#F5A65B]/10 border-[#F5A65B]/30',
    borderHover: 'hover:border-[#F5A65B]/50'
  }
];

export function CapabilityCards() {
  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center text-xs font-mono text-[#38D9F5] tracking-widest uppercase mb-3">
            یک معماری هماهنگ • سه قابلیت کلیدی
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.32]">
            سه نیاز، یک سرویس.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
            به جای استفاده از ابزارهای پراکنده و ناپایدار، نتا تمام نیازهای ارتباطی شما را در یک بستر فنی منسجم، سریع و شفاف گرد هم آورده است.
          </p>
        </div>

        {/* 3 Unified Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={cap.id}
                className={`relative flex flex-col justify-between bg-[#121D30] border border-[#26364D] rounded-2xl p-6 md:p-8 transition-all duration-300 ${cap.borderHover} hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] group`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${cap.accentClass}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${cap.accentClass}`}
                    >
                      {cap.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#E6EDF7] tracking-tight mb-3 leading-[1.35]">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                    {cap.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2.5 pt-2 border-t border-[#26364D]/60 mb-8">
                    {cap.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#E6EDF7]">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: cap.accentColor }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Text Link CTA */}
                <div className="pt-4 border-t border-[#26364D]/60">
                  <Link
                    href={cap.ctaHref}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 group-hover:gap-3"
                    style={{ color: cap.accentColor }}
                  >
                    <span>{cap.ctaText}</span>
                    <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
