'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DEVICE_SETUP_GUIDES } from '@/lib/mockData';
import { DevicePlatform } from '@/types';
import {
  Laptop,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Gamepad,
  Check,
  Copy,
  ArrowLeft,
  ArrowRight,
  Globe,
  Activity,
  Gamepad2,
  CheckCircle2
} from 'lucide-react';

const OUTCOMES = [
  {
    id: 'access',
    title: 'دسترسی به سرویس‌ها',
    desc: 'کلود، داکر، هوش مصنوعی و ابزارهای کاری',
    icon: Globe,
    accent: '#8B7CFF'
  },
  {
    id: 'dns',
    title: 'DNS سریع و ایمن',
    desc: 'رزولوشن پرسرعت و وب‌گردی پایدار',
    icon: Activity,
    accent: '#38D9F5'
  },
  {
    id: 'gaming',
    title: 'اتصال بهینه برای گیمینگ',
    desc: 'کاهش پکت‌لاس و تثبیت پینگ بازی',
    icon: Gamepad2,
    accent: '#F5A65B'
  }
];

const PLATFORMS: { id: DevicePlatform; title: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'windows', title: 'ویندوز', icon: Laptop },
  { id: 'android', title: 'اندروید', icon: Smartphone },
  { id: 'ios', title: 'آیفون / iOS', icon: Tablet },
  { id: 'macos', title: 'مک‌او‌اس', icon: Monitor },
  { id: 'router', title: 'مودم و روتر', icon: Wifi },
  { id: 'console', title: 'کنسول بازی', icon: Gamepad },
];

export function SetupWizardSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOutcome, setSelectedOutcome] = useState('access');
  const [selectedPlatform, setSelectedPlatform] = useState<DevicePlatform>('windows');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | null>(null);

  const guide = DEVICE_SETUP_GUIDES[selectedPlatform] || DEVICE_SETUP_GUIDES['windows'];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsVerifying(false);
    setVerificationResult('success');
  };

  return (
    <section className="py-20 md:py-28 bg-[#080E18] border-t border-[#26364D]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-3">
            <Badge variant="cyan" size="sm" dot>
              شروع در کمتر از ۲ دقیقه
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.35]">
            راه‌اندازی ساده، بدون پیچیدگی.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A9B7CB] max-w-lg mx-auto leading-[1.75]">
            پیکربندی گام‌به‌گام متناسب با سیستم‌عامل شما بدون نیاز به دانش پیچیده شبکه.
          </p>
        </div>

        {/* Stepper Progress Bar */}
        <div className="flex items-center justify-between mb-8 px-2 max-w-xl mx-auto">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center">
              <button
                onClick={() => setCurrentStep(step)}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all cursor-pointer ${
                  currentStep === step
                    ? 'bg-[#38D9F5] text-[#0B1220] ring-4 ring-[#38D9F5]/20 shadow-[0_0_15px_rgba(56,217,245,0.4)]'
                    : currentStep > step
                    ? 'bg-[#39C99A] text-[#0B1220]'
                    : 'bg-[#18263B] text-[#A9B7CB] border border-[#26364D]'
                }`}
              >
                {currentStep > step ? <Check className="w-4 h-4 stroke-[3]" /> : step}
              </button>
              {step < 5 && (
                <div
                  className={`w-8 sm:w-16 h-0.5 mx-1 transition-colors ${
                    currentStep > step ? 'bg-[#39C99A]' : 'bg-[#26364D]'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Wizard Main Card */}
        <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Step 1: Select Outcome */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#38D9F5]">گام اول از پنج</span>
                <h3 className="text-xl font-bold text-[#E6EDF7] mt-1">هدف اصلی شما از اتصال چیست؟</h3>
                <p className="text-xs text-[#A9B7CB]">نتا تنظیمات بهینه را بر اساس نیاز شما پیکربندی می‌کند.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {OUTCOMES.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedOutcome === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedOutcome(item.id)}
                      className={`p-5 rounded-2xl border text-start flex flex-col justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#18263B] border-[#38D9F5] shadow-[0_0_20px_rgba(56,217,245,0.15)]'
                          : 'bg-[#0B1220] border-[#26364D] hover:border-[#38D9F5]/40'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#E6EDF7] mb-1">{item.title}</div>
                        <div className="text-xs text-[#A9B7CB] leading-[1.6]">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4 border-t border-[#26364D]/60">
                <Button variant="primary" onClick={() => setCurrentStep(2)} leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                  ادامه به انتخاب دستگاه
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Select Device */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#38D9F5]">گام دوم از پنج</span>
                <h3 className="text-xl font-bold text-[#E6EDF7] mt-1">روی چه دستگاهی می‌خواهید تنظیم کنید؟</h3>
                <p className="text-xs text-[#A9B7CB]">دستورالعمل‌ها دقیقاً مطابق با رابط سیستم‌عامل شما نمایش داده خواهند شد.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {PLATFORMS.map((plat) => {
                  const Icon = plat.icon;
                  const isSelected = selectedPlatform === plat.id;
                  return (
                    <button
                      key={plat.id}
                      onClick={() => setSelectedPlatform(plat.id)}
                      className={`p-5 rounded-2xl border text-start flex items-center gap-3.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#18263B] border-[#38D9F5] shadow-[0_0_20px_rgba(56,217,245,0.15)] text-[#38D9F5]'
                          : 'bg-[#0B1220] border-[#26364D] hover:border-[#38D9F5]/40 text-[#E6EDF7]'
                      }`}
                    >
                      <Icon className="w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold">{plat.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between pt-4 border-t border-[#26364D]/60">
                <Button variant="ghost" onClick={() => setCurrentStep(1)}>
                  بازگشت
                </Button>
                <Button variant="primary" onClick={() => setCurrentStep(3)} leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                  بررسی سازگاری دستگاه
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Check Compatibility */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#38D9F5]">گام سوم از پنج</span>
                <h3 className="text-xl font-bold text-[#E6EDF7] mt-1">تایید سازگاری {guide.title}</h3>
                <p className="text-xs text-[#A9B7CB]">سیستم‌عامل و پروتکل‌های پشتیبانی‌شده به شرح زیر است:</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0B1220] border border-[#26364D] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#26364D]/60">
                  <span className="text-xs text-[#A9B7CB]">وضعیت پشتیبانی پلتفرم:</span>
                  <Badge variant="success" size="sm" dot>کاملاً سازگار و تاییدشده</Badge>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#26364D]/60">
                  <span className="text-xs text-[#A9B7CB]">سطح سختی راه‌اندازی:</span>
                  <span className="text-xs font-bold text-[#38D9F5]">{guide.difficulty} ({guide.estimatedTime})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#A9B7CB]">پروتکل‌های در دسترس:</span>
                  <span className="text-xs font-mono text-[#E6EDF7]">DoH • DoT • IPv4 • IPv6</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-[#26364D]/60">
                <Button variant="ghost" onClick={() => setCurrentStep(2)}>
                  بازگشت
                </Button>
                <Button variant="primary" onClick={() => setCurrentStep(4)} leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                  مشاهده مراحل راه‌اندازی
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Step-by-Step Instructions */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#38D9F5]">گام چهارم از پنج</span>
                  <h3 className="text-xl font-bold text-[#E6EDF7] mt-1">مراحل تنظیم روی {guide.title}</h3>
                </div>
                <Badge variant="neutral" size="sm">{guide.estimatedTime}</Badge>
              </div>

              {/* Copyable Quick DNS IP Box */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#38D9F5]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#A9B7CB] mb-1">نشانی‌های سریع DNS نتا:</div>
                  <div className="font-mono text-sm font-bold text-[#38D9F5] flex items-center gap-3">
                    <span className="tabular-nums">{guide.recommendedDns.ipv4Primary}</span>
                    <span className="text-[#64748B]">|</span>
                    <span className="tabular-nums">{guide.recommendedDns.ipv4Secondary}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(guide.recommendedDns.ipv4Primary)}
                  leftIcon={copiedText ? <Check className="w-4 h-4 text-[#39C99A]" /> : <Copy className="w-4 h-4" />}
                >
                  {copiedText ? 'کپی شد!' : 'کپی آدرس اصلی'}
                </Button>
              </div>

              {/* Step list */}
              <div className="space-y-3">
                {guide.steps.map((st) => (
                  <div key={st.step} className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#18263B] text-[#38D9F5] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {st.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#E6EDF7]">{st.title}</h4>
                      <p className="text-xs text-[#A9B7CB] leading-[1.7]">{st.description}</p>
                      {st.codeSnippet && (
                        <div className="mt-2 p-2 rounded-lg bg-[#080E18] font-mono text-xs text-[#38D9F5] flex items-center justify-between">
                          <span>{st.codeSnippet}</span>
                          <button
                            onClick={() => copyToClipboard(st.codeSnippet!)}
                            className="text-[#A9B7CB] hover:text-[#38D9F5] p-1"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4 border-t border-[#26364D]/60">
                <Button variant="ghost" onClick={() => setCurrentStep(3)}>
                  بازگشت
                </Button>
                <Button variant="primary" onClick={() => setCurrentStep(5)} leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                  انجام تست راستی‌آزمایی
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Verification Test */}
          {currentStep === 5 && (
            <div className="space-y-6 text-center">
              <div>
                <span className="text-xs font-bold text-[#38D9F5]">گام پنجم و پایانی</span>
                <h3 className="text-2xl font-black text-[#E6EDF7] mt-1">تست اتصال و اتمام راه‌اندازی</h3>
                <p className="text-xs text-[#A9B7CB] mt-1">
                  پس از ذخیره تغییرات در دستگاه، دکمه زیر را بزنید تا فعال بودن مسیر نتا تایید گردد.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0B1220] border border-[#26364D] max-w-md mx-auto">
                {verificationResult === 'success' ? (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-[#39C99A]/20 border border-[#39C99A] text-[#39C99A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#E6EDF7]">اتصال شما با موفقیت فعال شد!</h4>
                      <p className="text-xs text-[#A9B7CB] mt-1 leading-[1.7]">
                        دستگاه شما هم‌اکنون به شبکه نتا متصل است و سرویس‌های تعریف‌شده با پایداری کامل در دسترس هستند.
                      </p>
                    </div>
                    <div className="pt-2">
                      <Badge variant="success" size="md">
                        تاخیر اتصال: ۲۸ میلی‌ثانیه • بدون پکت‌لاس
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#38D9F5]/10 border border-[#38D9F5]/30 text-[#38D9F5] flex items-center justify-center mx-auto">
                      <Activity className="w-8 h-8" />
                    </div>
                    <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                      ما یک درخواست آزمایشی رمزنگاری‌شده به سرور DoH نتا ارسال می‌کنیم تا وضعیت اتصال سیستم شما را ثبت کنیم.
                    </p>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleVerify}
                      isLoading={isVerifying}
                      className="w-full"
                    >
                      شروع تست تاییدیه اتصال
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-4 border-t border-[#26364D]/60">
                <Button variant="ghost" onClick={() => setCurrentStep(4)}>
                  بازگشت به راهنما
                </Button>
                {verificationResult === 'success' && (
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    راه‌اندازی برای دستگاه دیگر
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
