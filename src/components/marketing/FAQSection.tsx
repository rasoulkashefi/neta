'use client';

import React from 'react';
import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HOMEPAGE_FAQS } from '@/lib/mockData';
import { ArrowLeft, Activity, MessageSquare } from 'lucide-react';

const ACCORDION_ITEMS = HOMEPAGE_FAQS.map((faq, index) => ({
  id: `faq-${index + 1}`,
  question: faq.question,
  answer: faq.answer,
}));

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-3">
            <Badge variant="cyan" size="sm" dot>
              پاسخ به ابهامات متداول
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.32]">
            پرسش‌های متداول
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
            پاسخ‌های صریح و فنی به پرتکرارترین سوالات کاربران درباره نحوه عملکرد، امنیت و پروتکل‌های نتا.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 md:p-8 mb-20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <Accordion items={ACCORDION_ITEMS} defaultOpenIndex={0} />

          <div className="mt-8 pt-6 border-t border-[#26364D]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B7CB]">
            <span>پرسش دیگری دارید که در لیست بالا نیست؟</span>
            <Link href="/help" className="text-[#38D9F5] hover:underline font-semibold flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" />
              <span>ارسال سوال در مرکز پشتیبانی</span>
            </Link>
          </div>
        </div>

        {/* Final CTA Banner — «از اتصال بهتری شروع کن.» */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121D30] via-[#0E1726] to-[#18263B] border border-[#38D9F5]/40 p-8 sm:p-12 text-center shadow-[0_0_60px_-15px_rgba(56,217,245,0.25)]">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 start-1/2 -translate-x-1/2 w-96 h-48 bg-[#38D9F5]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-black text-[#E6EDF7] tracking-tight leading-[1.32]">
              از اتصال بهتری شروع کن.
            </h3>
            <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.8]">
              تنها در ۲ دقیقه می‌توانید DNS نتا را پیکربندی کرده یا با اجرای تست تشخیصی رایگان، تفاوت تاخیر و پایداری را روی سیستم خود بررسی کنید.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="#test" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px]"
                  leftIcon={<Activity className="w-4 h-4 fill-current text-[#0B1220]" />}
                >
                  تست اتصال
                </Button>
              </a>
              <Link href="/signup" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px]"
                  leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}
                >
                  ثبت‌نام و شروع رایگان
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
