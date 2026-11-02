'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SUPPORTED_SERVICES } from '@/lib/mockData';
import { Search, ArrowLeft, CheckCircle2, AlertTriangle, HelpCircle, Layers } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'همه دسته‌ها' },
  { id: 'ai', label: 'هوش مصنوعی' },
  { id: 'dev', label: 'توسعه نرم‌افزار' },
  { id: 'design', label: 'طراحی' },
  { id: 'gaming', label: 'گیمینگ' },
  { id: 'streaming', label: 'استریم' },
];

export function ServiceDirectoryPreview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SUPPORTED_SERVICES.filter((svc) => {
    const matchesCategory = selectedCategory === 'all' || svc.category === selectedCategory;
    const matchesSearch =
      svc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      svc.persianName.includes(searchTerm) ||
      svc.description.includes(searchTerm);
    return matchesCategory && matchesSearch;
  }).slice(0, 8); // Homepage curated selection

  return (
    <section className="py-20 md:py-28 bg-[#080E18] border-t border-[#26364D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center mb-3">
              <Badge variant="violet" size="sm" dot>
                کاتالوگ اعتبارسنجی‌شده • شفافیت ۱۰۰٪
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.35]">
              سرویس موردنظرت رو پیدا کن.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#A9B7CB] max-w-xl leading-[1.75]">
              بررسی سریع سازگاری، پایداری پروتکل‌ها و دریافت راهنمای اختصاصی راه‌اندازی برای هر ابزار.
            </p>
          </div>

          <Link href="/services">
            <Button variant="outline" size="md" leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
              مشاهده فهرست کامل (۵۰+ سرویس)
            </Button>
          </Link>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#121D30] border border-[#26364D] rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#8B7CFF] text-white font-semibold'
                    : 'text-[#A9B7CB] hover:bg-[#18263B] hover:text-[#E6EDF7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <Input
              type="text"
              placeholder="جستجوی سرویس (کلود، داکر، فیگما...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              rightIcon={<Search className="w-4 h-4" />}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredServices.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.slug}`}
              className="group bg-[#121D30] border border-[#26364D] hover:border-[#8B7CFF]/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CFF]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="font-mono text-xs font-bold text-[#E6EDF7] group-hover:text-[#8B7CFF] transition-colors">
                    {svc.name}
                  </div>
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
                      بررسی
                    </Badge>
                  )}
                </div>

                <div className="text-xs text-[#8B7CFF] font-medium mb-2">
                  {svc.persianName}
                </div>

                <p className="text-xs text-[#A9B7CB] line-clamp-2 leading-[1.65] mb-4">
                  {svc.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#26364D]/60 flex items-center justify-between text-[11px] text-[#64748B]">
                <div className="flex items-center gap-1 font-mono">
                  <span>{svc.protocols.join(' • ')}</span>
                </div>
                <span className="text-[#8B7CFF] font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  <span>راهنما</span>
                  <ArrowLeft className="w-3 h-3 rtl:-scale-x-100" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-[#121D30] rounded-2xl border border-[#26364D]">
            <p className="text-sm text-[#A9B7CB]">هیچ سرویسی با این نام در این دسته یافت نشد.</p>
            <Link href="/services" className="inline-block mt-3 text-xs text-[#8B7CFF] hover:underline">
              مشاهده تمام سرویس‌ها در دایرکتوری اصلی
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
