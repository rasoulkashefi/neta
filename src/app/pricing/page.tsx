'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PRICING_PLANS } from '@/lib/mockData';
import { AI_MODELS_LIST } from '@/lib/products';
import { Check, X, ArrowLeft, Sparkles, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const [activeDomain, setActiveDomain] = useState<'connectivity' | 'ai'>('connectivity');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="cyan" size="md" dot>قیمت‌گذاری شفاف و بدون هزینه‌های پنهان</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.3] mt-4 mb-4">
              تعرفه‌های محصولات و خدمات نتا
            </h1>
            <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.85]">
              پلن‌های ماهانه برای پایداری اتصال و اشتراک دستگاه‌ها، به همراه پرداخت دقیق ریالی به ازای مصرف توکن‌های هوش مصنوعی.
            </p>

            {/* Domain Switcher */}
            <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#121D30] border border-[#26364D] gap-1">
              <button
                onClick={() => setActiveDomain('connectivity')}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5',
                  activeDomain === 'connectivity'
                    ? 'bg-[#38D9F5] text-[#0B1220] shadow-md'
                    : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                )}
              >
                <Activity className="w-4 h-4" />
                <span>اشتراک‌های اتصال و شبکه</span>
              </button>
              <button
                onClick={() => setActiveDomain('ai')}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5',
                  activeDomain === 'ai'
                    ? 'bg-[#8B7CFF] text-white shadow-md'
                    : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                )}
              >
                <Sparkles className="w-4 h-4" />
                <span>تعرفه توکن‌های هوش مصنوعی (API)</span>
              </button>
            </div>
          </div>

          {/* DOMAIN 1: CONNECTIVITY PLANS */}
          {activeDomain === 'connectivity' && (
            <div className="space-y-12 animate-in fade-in-50 duration-200">
              {/* Billing Cycle Switch */}
              <div className="text-center">
                <div className="inline-flex items-center p-1 rounded-xl bg-[#0E1726] border border-[#26364D]">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={cn(
                      'px-4 py-1.5 rounded-lg text-xs font-semibold transition-all',
                      billingCycle === 'monthly'
                        ? 'bg-[#18263B] text-[#38D9F5]'
                        : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                    )}
                  >
                    پرداخت ماهانه
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={cn(
                      'px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1',
                      billingCycle === 'yearly'
                        ? 'bg-[#18263B] text-[#38D9F5]'
                        : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                    )}
                  >
                    <span>پرداخت سالانه</span>
                    <span className="text-[10px] font-bold bg-[#38D9F5]/20 text-[#38D9F5] px-1.5 py-0.2 rounded-full">
                      ۲۰٪ تخفیف
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
                      className={cn(
                        'relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 border transition-all duration-300',
                        plan.isPopular
                          ? 'bg-[#121D30] border-[#38D9F5]/50 shadow-[0_0_40px_-10px_rgba(56,217,245,0.25)] ring-1 ring-[#38D9F5]/30'
                          : 'bg-[#0E1726] border-[#26364D]'
                      )}
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
                              محدودیت‌ها:
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
            </div>
          )}

          {/* DOMAIN 2: AI TOKENS PRICING TABLE */}
          {activeDomain === 'ai' && (
            <div className="space-y-8 animate-in fade-in-50 duration-200">
              <div className="bg-[#121D30] border border-[#8B7CFF]/30 rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#26364D]">
                  <div>
                    <h2 className="text-xl font-bold text-[#E6EDF7]">
                      تعرفه مصوب مدل‌های هوش مصنوعی نتا (Pay-as-you-go)
                    </h2>
                    <p className="text-xs text-[#A9B7CB] mt-1">
                      محاسبه دقیق بدون هیچ هزینه اشتراک ماهانه اجباری. مبالغ بر حسب یک میلیون توکن (1M Tokens) محاسبه و ریالی تسویه می‌شوند.
                    </p>
                  </div>
                  <Link href="/app/ai">
                    <Button variant="secondary" size="sm" leftIcon={<Sparkles className="w-4 h-4" />}>
                      ساخت کلید در کنسول
                    </Button>
                  </Link>
                </div>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-start text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#26364D] text-[#A9B7CB]">
                        <th className="py-3 px-4 font-bold">مدل هوش مصنوعی</th>
                        <th className="py-3 px-4 font-bold">ارائه‌دهنده</th>
                        <th className="py-3 px-4 font-bold">ورودی (هر ۱M توکن)</th>
                        <th className="py-3 px-4 font-bold">خروجی (هر ۱M توکن)</th>
                        <th className="py-3 px-4 font-bold">پنجره متن</th>
                        <th className="py-3 px-4 font-bold text-center">وضعیت دسترسی</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#26364D]/60 text-[#E6EDF7]">
                      {AI_MODELS_LIST.map((model) => (
                        <tr key={model.id} className="hover:bg-[#18263B]/30">
                          <td className="py-4 px-4 font-bold text-[#E6EDF7]">
                            {model.name}
                            <span className="block text-[11px] font-mono text-[#38D9F5] font-normal">{model.id}</span>
                          </td>
                          <td className="py-4 px-4 text-[#A9B7CB]">{model.provider}</td>
                          <td className="py-4 px-4 font-mono text-[#39C99A]">{model.inputCost}</td>
                          <td className="py-4 px-4 font-mono text-[#E6EDF7]">{model.outputCost}</td>
                          <td className="py-4 px-4 font-mono">{model.contextWindow}</td>
                          <td className="py-4 px-4 text-center">
                            <Badge variant={model.status.includes('فعال') ? 'violet' : 'neutral'} size="sm">
                              {model.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 pt-4 border-t border-[#26364D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B7CB]">
                  <span>نرخ تبدیل دلار بر مبنای نرخ رسمی سامانه بانکی روز محاسبه می‌شود.</span>
                  <Link href="/ai#calculator" className="text-[#38D9F5] hover:underline font-bold">
                    محاسبه‌گر آنلاین هزینه ماهانه پروژه ←
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Guarantees Box */}
          <div className="mt-16 bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 text-xs sm:text-sm text-[#A9B7CB] space-y-4">
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
