'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PRICING_PLANS } from '@/lib/mockData';
import { Check, X, ArrowLeft, ShieldCheck } from 'lucide-react';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center mb-3">
            <Badge variant="cyan" size="sm" dot>
              تعرفه‌های شفاف و بدون هزینه مخفی
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.32]">
            پلنی متناسب با نیازت انتخاب کن.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
            از پلن رایگان برای تست سرعت DNS تا پلن‌های اختصاصی هوش مصنوعی و گیمینگ رقابتی؛ لغو اشتراک در هر لحظه تنها با یک کلیک امکان‌پذیر است.
          </p>

          {/* Billing Switch */}
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
                ۲۰٪ صرفه‌جویی
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const isPersonal = plan.capabilityTarget === 'personal';
            const isGaming = plan.capabilityTarget === 'gaming';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 md:p-8 border transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[#121D30] border-[#38D9F5]/50 shadow-[0_0_40px_-10px_rgba(56,217,245,0.25)] ring-1 ring-[#38D9F5]/30'
                    : 'bg-[#0E1726] border-[#26364D] hover:border-[#26364D]/80'
                }`}
              >
                <div>
                  {/* Top Badge */}
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

                  {/* Price */}
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

                  {/* Features List */}
                  <div className="pt-6 border-t border-[#26364D]/70 space-y-3 mb-6">
                    <div className="text-xs font-bold text-[#A9B7CB] mb-2">
                      قابلیت‌های مشمول:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E6EDF7]">
                        <Check className="w-4 h-4 text-[#39C99A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations (Exclusions) */}
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-[#26364D]/50 space-y-2 mb-6">
                      <div className="text-xs font-bold text-[#64748B] mb-1">
                        عدم شمول:
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

                {/* CTA Button */}
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

        {/* Cancellation Notice */}
        <div className="mt-12 text-center text-xs text-[#64748B] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#39C99A]" />
          <span>تمام پلن‌ها دارای ضمانت بازگشت وجه تا ۷ روز در صورت عدم تطابق فنی اتصال هستند.</span>
        </div>
      </div>
    </section>
  );
}
