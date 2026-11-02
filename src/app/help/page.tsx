'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { HELP_ARTICLES } from '@/lib/mockData';
import { Search, BookOpen, ArrowLeft, LifeBuoy, FileText, CheckCircle2 } from 'lucide-react';

export default function HelpCenterPage() {
  const [query, setQuery] = useState('');

  const filtered = HELP_ARTICLES.filter(
    (art) =>
      art.title.includes(query) ||
      art.excerpt.includes(query) ||
      art.categoryLabel.includes(query)
  );

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="cyan" size="md" dot>مرکز آموزش و مستندات فنی</Badge>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.32] mt-4 mb-4">
              چگونه می‌توانیم کمکتان کنیم؟
            </h1>
            <p className="text-base sm:text-lg text-[#A9B7CB] leading-[1.8] mb-8">
              راهنماهای گام‌به‌گام راه‌اندازی، رفع خطاهای رایج اتصال و آموزش‌های فنی نتا.
            </p>

            <div className="max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="جستجو در مقالات (DoH، رفع پکت‌لاس، کلود، ویندوز...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rightIcon={<Search className="w-5 h-5" />}
              />
            </div>
          </div>

          {/* Categorized Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-[#121D30] border border-[#26364D] hover:border-[#38D9F5]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#38D9F5]/10 border border-[#38D9F5]/30 flex items-center justify-center text-[#38D9F5] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#E6EDF7] mb-2">شروع سریع و راه‌اندازی</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
                تنظیم DNS روی اندروید، iOS، ویندوز و روترهای خانگی در چند دقیقه.
              </p>
              <Link href="/help/getting-started-dns" className="text-xs text-[#38D9F5] font-bold flex items-center gap-1 hover:underline">
                <span>مشاهده راهنما</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:-scale-x-100" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#121D30] border border-[#26364D] hover:border-[#F5A65B]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#F5A65B]/10 border border-[#F5A65B]/30 flex items-center justify-center text-[#F5A65B] mb-4">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#E6EDF7] mb-2">عیب‌یابی گیمینگ</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
                کاهش نوسان پینگ (Jitter)، رفع خطای Sub-tick و تنظیم پورت‌های بازی.
              </p>
              <Link href="/help/troubleshooting-gaming-jitter" className="text-xs text-[#F5A65B] font-bold flex items-center gap-1 hover:underline">
                <span>مشاهده راهنما</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:-scale-x-100" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#121D30] border border-[#26364D] hover:border-[#8B7CFF]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#8B7CFF]/10 border border-[#8B7CFF]/30 flex items-center justify-center text-[#8B7CFF] mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#E6EDF7] mb-2">سرویس‌های هوش مصنوعی</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7] mb-4">
                حل مشکل خطای 403 Forbidden و ریجکت شدن توکن‌ها در Claude و ChatGPT.
              </p>
              <Link href="/help/ai-tools-access-troubleshooting" className="text-xs text-[#8B7CFF] font-bold flex items-center gap-1 hover:underline">
                <span>مشاهده راهنما</span>
                <ArrowLeft className="w-3.5 h-3.5 rtl:-scale-x-100" />
              </Link>
            </div>
          </div>

          {/* Articles List */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 mb-16">
            <h2 className="text-xl font-bold text-[#E6EDF7] mb-6">تمام مقالات و مستندات</h2>
            <div className="divide-y divide-[#26364D]/60">
              {filtered.map((art) => (
                <Link
                  key={art.slug}
                  href={`/help/${art.slug}`}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#18263B]/40 px-3 rounded-xl transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Badge variant="cyan" size="sm">{art.categoryLabel}</Badge>
                      <span className="text-xs text-[#64748B] font-mono">{art.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#E6EDF7] group-hover:text-[#38D9F5] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#A9B7CB] mt-1 leading-[1.6]">
                      {art.excerpt}
                    </p>
                  </div>

                  <ArrowLeft className="w-4 h-4 text-[#A9B7CB] group-hover:text-[#38D9F5] shrink-0 rtl:-scale-x-100 transition-transform group-hover:-translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
