'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { SUPPORTED_SERVICES } from '@/lib/mockData';
import { Search, ArrowLeft, Globe, Filter, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'همه دسته‌ها' },
  { id: 'ai', label: 'هوش مصنوعی' },
  { id: 'dev', label: 'توسعه نرم‌افزار' },
  { id: 'design', label: 'طراحی و دیزاین' },
  { id: 'gaming', label: 'گیمینگ و ارتباطات' },
  { id: 'streaming', label: 'رسانه و استریم' },
  { id: 'productivity', label: 'بهره‌وری' },
];

const STATUS_FILTERS = [
  { id: 'all', label: 'همه وضعیت‌ها' },
  { id: 'supported', label: 'پشتیبانی کامل' },
  { id: 'partial', label: 'پشتیبانی نسبی' },
  { id: 'unverified', label: 'در حال بررسی' },
];

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = SUPPORTED_SERVICES.filter((svc) => {
    const matchCat = category === 'all' || svc.category === category;
    const matchStatus = statusFilter === 'all' || svc.status === statusFilter;
    const matchSearch =
      svc.name.toLowerCase().includes(search.toLowerCase()) ||
      svc.persianName.includes(search) ||
      svc.description.includes(search) ||
      svc.endpoint.includes(search);
    return matchCat && matchStatus && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="violet" size="md" dot>دایرکتوری رسمی سازگاری</Badge>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.32] mt-4 mb-4">
              سرویس‌های پشتیبانی‌شده
            </h1>
            <p className="text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
              جستجو و بررسی سازگاری بیش از ۵۰ سرویس و ابزار بین‌المللی با زیرساخت نتا؛ با تفکیک پروتکل‌ها، پورت‌ها و وضعیت دقیق عملکرد.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-2xl p-4 md:p-6 mb-10 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search input */}
              <div className="w-full md:w-96">
                <Input
                  type="text"
                  placeholder="جستجوی سرویس (Claude, Docker, Figma, Spotify...)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  rightIcon={<Search className="w-4 h-4" />}
                />
              </div>

              {/* Status Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                {STATUS_FILTERS.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setStatusFilter(st.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      statusFilter === st.id
                        ? 'bg-[#18263B] text-[#38D9F5] border border-[#38D9F5]/40 shadow-sm'
                        : 'text-[#A9B7CB] hover:bg-[#18263B]/50'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-3 border-t border-[#26364D]/60 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    category === cat.id
                      ? 'bg-[#8B7CFF] text-white font-bold'
                      : 'text-[#A9B7CB] hover:bg-[#18263B] hover:text-[#E6EDF7]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count summary */}
          <div className="flex items-center justify-between mb-6 text-xs text-[#A9B7CB]">
            <span>نمایش {filtered.length} سرویس اعتبارسنجی‌شده</span>
            <span className="text-xs font-bold text-[#8B7CFF]">بروزرسانی زنده پروتکل‌ها</span>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((svc) => (
              <div
                key={svc.id}
                className="bg-[#121D30] border border-[#26364D] hover:border-[#8B7CFF]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-base font-bold text-[#E6EDF7] group-hover:text-[#8B7CFF] transition-colors">
                      {svc.name}
                    </span>
                    {svc.status === 'supported' && (
                      <Badge variant="success" size="sm">
                        پشتیبانی کامل
                      </Badge>
                    )}
                    {svc.status === 'partial' && (
                      <Badge variant="warning" size="sm">
                        نسبی
                      </Badge>
                    )}
                    {svc.status === 'unverified' && (
                      <Badge variant="neutral" size="sm">
                        در حال بررسی
                      </Badge>
                    )}
                  </div>

                  <div className="text-xs text-[#8B7CFF] font-semibold mb-2">
                    {svc.persianName} • {svc.categoryName}
                  </div>

                  <p className="text-xs text-[#A9B7CB] leading-[1.75] mb-6">
                    {svc.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#0B1220] border border-[#26364D] space-y-1.5 font-mono text-[11px] text-[#A9B7CB] mb-6">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">اندپوینت:</span>
                      <span className="text-[#E6EDF7] truncate max-w-[180px]">{svc.endpoint}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">پروتکل‌ها:</span>
                      <span>{svc.protocols.join(', ')}</span>
                    </div>
                    {svc.estimatedPingImprovement && (
                      <div className="flex justify-between text-[#39C99A]">
                        <span>بهبود کیفیت:</span>
                        <span>{svc.estimatedPingImprovement}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#26364D]/60 flex items-center justify-between">
                  <span className="text-[11px] text-[#64748B]">
                    پلتفرم: {svc.platforms.join(' • ')}
                  </span>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B7CFF] hover:gap-2 transition-all"
                  >
                    <span>راهنمای راه‌اندازی</span>
                    <ArrowLeft className="w-3.5 h-3.5 rtl:-scale-x-100" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 bg-[#121D30] rounded-3xl border border-[#26364D]">
              <Globe className="w-12 h-12 text-[#64748B] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#E6EDF7] mb-2">سرویسی با این مشخصات یافت نشد</h3>
              <p className="text-xs text-[#A9B7CB] max-w-sm mx-auto mb-6 leading-[1.7]">
                اگر ابزار کاری یا بازی مورد نظر شما در لیست نیست، می‌توانید آدرس آن را جهت اعتبارسنجی ارسال کنید.
              </p>
              <Link href="/help">
                <Button variant="outline" size="sm">
                  درخواست افزودن سرویس جدید
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
