'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  ArrowLeft,
  Activity,
  Sparkles,
  KeyRound,
  CheckCircle2,
  Server
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function PlatformHero() {
  const [activeTab, setActiveTab] = useState<'connectivity' | 'ai' | 'cloud'>('connectivity');

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-28">
      {/* Background Subtle Network Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] h-[300px] sm:h-[480px] bg-gradient-to-tr from-[#38D9F5]/10 via-[#8B7CFF]/15 to-transparent rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center mb-6">
          <Badge variant="cyan" size="md" dot>
            پلتفرم یکپارچه محصولات دیجیتال نتا • neta.land
          </Badge>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#E6EDF7] tracking-tight leading-[1.3] max-w-4xl mx-auto mb-6">
          یک پلتفرم متمرکز برای تمام سرویس‌های دیجیتال شما
        </h1>

        {/* Supporting Message */}
        <p className="text-sm sm:text-lg lg:text-xl text-[#A9B7CB] max-w-3xl mx-auto leading-[1.85] mb-10">
          از بهینه‌سازی مسیر بازی‌ها و DNS هوشمند تا درگاه یکپارچه مدل‌های هوش مصنوعی و زیرساخت‌های آینده ابری؛ بدون نیاز به ده‌ها اشتراک، تنظیمات پیچیده یا کارت‌های ارزی.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <Link href="/products" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
              leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}
            >
              کاوش کاتالوگ محصولات
            </Button>
          </Link>
          <Link href="/ai" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[190px]"
              leftIcon={<Sparkles className="w-4 h-4 text-[#8B7CFF]" />}
            >
              پلتفرم هوش مصنوعی (AI)
            </Button>
          </Link>
          <a href="#test" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[150px]"
              leftIcon={<Activity className="w-4 h-4 text-[#38D9F5]" />}
            >
              تست اتصال
            </Button>
          </a>
        </div>

        {/* Interactive Platform Experience Mockup */}
        <div className="relative max-w-4xl mx-auto">
          {/* Subtle Ambient Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#38D9F5]/25 via-[#8B7CFF]/30 to-[#F5A65B]/25 rounded-3xl blur-xl opacity-40" />

          <div className="relative bg-[#0E1726] border border-[#26364D] rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-start overflow-hidden">
            {/* Mockup Top Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[#26364D]/70 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F16D7A]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#F5B84C]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#39C99A]/80 inline-block" />
                <span className="text-xs font-mono text-[#A9B7CB] ms-2">platform.neta.land/console</span>
              </div>

              {/* View Switcher Tabs */}
              <div className="bg-[#121D30] p-1 rounded-xl border border-[#26364D] flex items-center gap-1 self-start sm:self-auto">
                <button
                  onClick={() => setActiveTab('connectivity')}
                  className={cn(
                    'px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5',
                    activeTab === 'connectivity'
                      ? 'bg-[#38D9F5] text-[#0B1220] font-bold'
                      : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                  )}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>اتصال و شبکه</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className={cn(
                    'px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5',
                    activeTab === 'ai'
                      ? 'bg-[#8B7CFF] text-white font-bold'
                      : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                  )}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>درگاه هوش مصنوعی</span>
                </button>

                <button
                  onClick={() => setActiveTab('cloud')}
                  className={cn(
                    'px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5',
                    activeTab === 'cloud'
                      ? 'bg-[#18263B] text-[#38D9F5] font-bold border border-[#38D9F5]/30'
                      : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                  )}
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>زیرساخت ابری</span>
                </button>
              </div>
            </div>

            {/* Tab 1 Content: Connectivity */}
            {activeTab === 'connectivity' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in-50 duration-200">
                <div className="bg-[#121D30] rounded-xl p-4 border border-[#38D9F5]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#E6EDF7]">DNS هوشمند Anycast</span>
                    <Badge variant="cyan" size="sm">Active</Badge>
                  </div>
                  <div className="text-[11px] text-[#A9B7CB] mb-3">پاسخ‌دهی زیر ۱۰ میلی‌ثانیه با رمزنگاری DoH</div>
                  <div className="font-mono text-xs text-[#38D9F5] bg-[#0E1726] p-2 rounded-lg">
                    doh.neta.land/dns-query
                  </div>
                </div>

                <div className="bg-[#121D30] rounded-xl p-4 border border-[#F5A65B]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#E6EDF7]">رله بازی‌های آنلاین</span>
                    <Badge variant="amber" size="sm">42ms</Badge>
                  </div>
                  <div className="text-[11px] text-[#A9B7CB] mb-3">تثبیت ساب‌تیک و مسیر مستقیم پکت‌های UDP</div>
                  <div className="text-xs text-[#F5A65B] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F5A65B] animate-ping" />
                    <span>Istanbul & Frankfurt Relays</span>
                  </div>
                </div>

                <div className="bg-[#121D30] rounded-xl p-4 border border-[#8B7CFF]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#E6EDF7]">دسترسی سرویس‌ها</span>
                    <Badge variant="violet" size="sm">۵۰+ سرویس</Badge>
                  </div>
                  <div className="text-[11px] text-[#A9B7CB] mb-3">رفع خطای ۴۰۳ داکر، فیگما، کلود و مخازن کد</div>
                  <div className="text-xs text-[#8B7CFF] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>تایید سلامت گواهی‌های SSL</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2 Content: AI Platform */}
            {activeTab === 'ai' && (
              <div className="bg-[#121D30] rounded-xl p-5 border border-[#8B7CFF]/40 space-y-4 animate-in fade-in-50 duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#26364D] pb-3">
                  <div className="flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-[#8B7CFF]" />
                    <span className="text-xs font-bold text-[#E6EDF7]">کلید فعال:</span>
                    <code className="text-xs font-mono text-[#38D9F5] bg-[#0E1726] px-2 py-0.5 rounded">neta_live_99f2b8...</code>
                  </div>
                  <Badge variant="violet" size="sm">OpenAI Compatible Format</Badge>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-start">
                  <div className="bg-[#0E1726] p-3 rounded-lg border border-[#26364D]">
                    <span className="text-[10px] text-[#A9B7CB] block">Claude 3.5 Sonnet</span>
                    <span className="text-xs font-bold text-[#E6EDF7]">Anthropic API</span>
                  </div>
                  <div className="bg-[#0E1726] p-3 rounded-lg border border-[#26364D]">
                    <span className="text-[10px] text-[#A9B7CB] block">GPT-4o</span>
                    <span className="text-xs font-bold text-[#E6EDF7]">OpenAI API</span>
                  </div>
                  <div className="bg-[#0E1726] p-3 rounded-lg border border-[#26364D]">
                    <span className="text-[10px] text-[#A9B7CB] block">DeepSeek V3 / R1</span>
                    <span className="text-xs font-bold text-[#39C99A]">کاهش هزینه تا ۹۰٪</span>
                  </div>
                  <div className="bg-[#0E1726] p-3 rounded-lg border border-[#26364D]">
                    <span className="text-[10px] text-[#A9B7CB] block">Gemini 1.5 Pro</span>
                    <span className="text-xs font-bold text-[#E6EDF7]">2M Context</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#A9B7CB] flex items-center justify-between pt-1">
                  <span>تنها با تغییر Base URL بدون نیاز به نصب هیچ ابزار جدید در پایتون و تایپ‌اسکریپت.</span>
                  <Link href="/ai" className="text-[#8B7CFF] font-bold hover:underline">
                    مشاهده مستندات API ←
                  </Link>
                </div>
              </div>
            )}

            {/* Tab 3 Content: Cloud & Roadmap */}
            {activeTab === 'cloud' && (
              <div className="bg-[#121D30] rounded-xl p-5 border border-[#26364D] space-y-4 animate-in fade-in-50 duration-200">
                <div className="flex items-center justify-between border-b border-[#26364D] pb-3">
                  <span className="text-xs font-bold text-[#E6EDF7]">نقشه راه گسترش زیرساخت ابری و همکاران</span>
                  <Badge variant="neutral" size="sm">Phase: Infrastructure Rollout</Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-start">
                  <div className="bg-[#0E1726] p-3 rounded-lg border border-[#26364D]">
                    <div className="text-xs font-bold text-[#E6EDF7] mb-1">Edge Containers</div>
                    <p className="text-[11px] text-[#A9B7CB]">استقرار سریع کانتینرهای داکر بر روی دیسک‌های NVMe</p>
                  </div>
                  <div className="bg-[#0E1726] p-3 rounded-lg border border-[#26364D]">
                    <div className="text-xs font-bold text-[#E6EDF7] mb-1">S3 Object Storage</div>
                    <p className="text-[11px] text-[#A9B7CB]">ذخیره‌سازی فایل‌ها با استاندارد AWS S3 بدون هزینه پنهان</p>
                  </div>
                  <div className="bg-[#0E1726] p-3 rounded-lg border border-[#26364D]">
                    <div className="text-xs font-bold text-[#E6EDF7] mb-1">Marketplace شرکا</div>
                    <p className="text-[11px] text-[#A9B7CB]">ارائه سرویس‌ها و ابزارهای شما روی درگاه نتا</p>
                  </div>
                </div>

                <div className="text-[11px] text-[#A9B7CB] flex items-center justify-between pt-1">
                  <span>سرویس‌های ابری بر مبنای اصل شفافیت و پس از نهایی‌سازی تست‌های بارگذاری عرضه خواهند شد.</span>
                  <Link href="/cloud#marketplace" className="text-[#38D9F5] font-bold hover:underline">
                    ثبت‌نام در برنامه همکاران ←
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
