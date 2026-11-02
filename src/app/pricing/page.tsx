'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PRICING_PLANS } from '@/lib/mockData';
import { Check, X, ArrowLeft, ShieldCheck, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" size="md" dot>قیمت‌گذاری صادقانه • بدون تله‌های بازاریابی</Badge>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.32] mt-4 mb-4">
              پلن‌ها و تعرفه‌های شفاف
            </h1>
            <p className="text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
              بدون تخفیف‌های ساختگی ضربدر خورده یا تایمرهای معکوس جعلی. آنچه می‌بینید دقیقا همان چیزی است که دریافت می‌کنید.
            </p>

            {/* Switch */}
            <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-[#121D30] border border-[#26364D]">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#18263B] text-[#38D9F5] shadow-sm'
                    : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                }`}
              >
                پرداخت ماهانه
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'yearly'
                    ? 'bg-[#18263B] text-[#38D9F5] shadow-sm'
                    : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                }`}
              >
                <span>پرداخت سالانه</span>
                <span className="text-xs font-bold bg-[#38D9F5]/20 text-[#38D9F5] px-2 py-0.5 rounded-full">
                  ۲۰٪ تخفیف
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
            {PRICING_PLANS.map((plan) => {
              const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
              const isPersonal = plan.capabilityTarget === 'personal';
              const isGaming = plan.capabilityTarget === 'gaming';

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-[#121D30] border-[#38D9F5]/50 shadow-[0_0_40px_-10px_rgba(56,217,245,0.25)] ring-1 ring-[#38D9F5]/30'
                      : 'bg-[#0E1726] border-[#26364D]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-base font-bold text-[#E6EDF7]">{plan.name}</span>
                      {plan.badge && (
                        <Badge
                          variant={isPersonal ? 'cyan' : isGaming ? 'amber' : 'neutral'}
                          size="sm"
                        >
                          {plan.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-black text-[#E6EDF7] tracking-tight">
                          {price}
                        </span>
                        {plan.id !== 'starter' && (
                          <span className="text-sm font-semibold text-[#A9B7CB]">تومان</span>
                        )}
                        {plan.id !== 'starter' && (
                          <span className="text-xs text-[#64748B]">/ ماهانه</span>
                        )}
                      </div>
                      <p className="text-xs text-[#A9B7CB] mt-2 leading-[1.6]">
                        {plan.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#26364D]/70 space-y-3 mb-6">
                      <div className="text-xs font-bold text-[#A9B7CB] mb-2">
                        امکانات و ظرفیت‌ها:
                      </div>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E6EDF7]">
                          <Check className="w-4 h-4 text-[#39C99A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t border-[#26364D]/50 space-y-2 mb-6">
                        <div className="text-xs font-bold text-[#64748B] mb-1">
                          محدودیت‌ها و موارد خارج از این پلن:
                        </div>
                        {plan.limitations.map((lim, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#64748B]">
                            <X className="w-3.5 h-3.5 text-[#F16D7A] shrink-0 mt-0.5" />
                            <span>{lim}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-[#26364D]/70">
                    <Link href={plan.buttonHref} className="block w-full">
                      <Button
                        variant={plan.isPopular ? 'primary' : isGaming ? 'gaming' : 'outline'}
                        size="md"
                        className="w-full"
                        leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}
                      >
                        {plan.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subscription Guarantees Table */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 text-xs sm:text-sm text-[#A9B7CB] space-y-4">
            <h3 className="text-lg font-bold text-[#E6EDF7] mb-2">تعهدات و قوانین اشتراک نتا</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1">
                <span className="font-bold text-[#E6EDF7] block">ضمانت بازگشت وجه ۷ روزه</span>
                <p className="text-xs leading-[1.7]">اگر کیفیت اتصال یا پینگ بازی مورد نظر شما بهبود نیافت، کل مبلغ پرداختی بدون کسر هزینه مسترد خواهد شد.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#E6EDF7] block">لغو آسان با یک کلیک</span>
                <p className="text-xs leading-[1.7]">هیچ نیازی به تماس تلفنی یا ارسال تیکت نیست؛ از پنل کاربری در هر ثانیه اشتراک خودکار را غیرفعال کنید.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#E6EDF7] block">پشتیبانی چند دستگاه همزمان</span>
                <p className="text-xs leading-[1.7]">قابلیت اتصال همزمان گوشی، رایانه شخصی و کنسول بازی تحت یک اشتراک واحد بدون افت سرعت.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
