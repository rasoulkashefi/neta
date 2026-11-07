'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  PRODUCT_CATEGORIES,
  AUDIENCE_FILTERS,
  PRODUCTS_CATALOG,
  ProductCategory,
  TargetAudience,
  ProductStatus
} from '@/lib/products';
import {
  Search,
  Layers,
  ArrowLeft,
  Sparkles,
  Activity,
  Cloud,
  Store,
  CheckCircle2,
  ExternalLink,
  SlidersHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedAudience, setSelectedAudience] = useState<TargetAudience | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Audience filter
      if (selectedAudience !== 'all' && product.targetAudience !== 'all' && product.targetAudience !== selectedAudience) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = product.title.toLowerCase().includes(query) || product.persianTitle.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query) || product.tagline.toLowerCase().includes(query);
        const matchesFeatures = product.features.some(f => f.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesFeatures) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedAudience, searchQuery]);

  const getStatusBadge = (status: ProductStatus, label: string) => {
    switch (status) {
      case 'available':
        return <Badge variant="success" size="sm" dot>{label}</Badge>;
      case 'beta':
        return <Badge variant="violet" size="sm" dot>{label}</Badge>;
      case 'partner':
        return <Badge variant="amber" size="sm" dot>{label}</Badge>;
      case 'coming_soon':
      default:
        return <Badge variant="neutral" size="sm">{label}</Badge>;
    }
  };

  const getCategoryIcon = (category: ProductCategory) => {
    switch (category) {
      case 'connectivity':
        return Activity;
      case 'ai':
        return Sparkles;
      case 'cloud':
        return Cloud;
      case 'marketplace':
        return Store;
      default:
        return Layers;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center mb-4">
              <Badge variant="cyan" size="md" dot>
                کاتالوگ جامع محصولات و سرویس‌های دیجیتال
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E6EDF7] tracking-tight leading-[1.3] mb-4">
              سبد محصولات پلتفرم نتا
            </h1>
            <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.85]">
              یک بستر یکپارچه برای دسترسی پایدار به شبکه، درگاه متمرکز مدل‌های هوش مصنوعی، زیرساخت‌های ابری و سرویس‌های ارائه‌دهندگان معتبر. با قابلیت انتخاب دقیق بر اساس نیاز و نقش شما.
            </p>
          </div>

          {/* Filter Bar & Search */}
          <div className="bg-[#0E1726] border border-[#26364D] rounded-2xl p-4 sm:p-6 mb-10 space-y-6">
            {/* Search + Category Controls */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as ProductCategory | 'all')}
                    className={cn(
                      'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all',
                      selectedCategory === cat.id
                        ? 'bg-[#38D9F5] text-[#0B1220] shadow-[0_0_20px_rgba(56,217,245,0.3)]'
                        : 'bg-[#121D30] text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B] border border-[#26364D]'
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[260px] sm:w-80">
                <Search className="w-4 h-4 text-[#A9B7CB] absolute start-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجو در نام و قابلیت‌ها..."
                  className="w-full bg-[#121D30] border border-[#26364D] focus:border-[#38D9F5] rounded-xl ps-10 pe-4 py-2 text-xs sm:text-sm text-[#E6EDF7] placeholder-[#A9B7CB]/60 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Audience Segment Filter */}
            <div className="pt-4 border-t border-[#26364D]/60 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#A9B7CB] me-2 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>فیلتر بر اساس مخاطب:</span>
              </span>
              {AUDIENCE_FILTERS.map((aud) => (
                <button
                  key={aud.id}
                  onClick={() => setSelectedAudience(aud.id as TargetAudience | 'all')}
                  className={cn(
                    'px-3 py-1 rounded-lg text-xs font-medium transition-colors',
                    selectedAudience === aud.id
                      ? 'bg-[#8B7CFF]/20 text-[#8B7CFF] border border-[#8B7CFF]/40'
                      : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#121D30]'
                  )}
                >
                  {aud.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6 px-1">
            <span className="text-xs text-[#A9B7CB]">
              نمایش <strong className="text-[#38D9F5] font-mono">{filteredProducts.length}</strong> محصول منطبق بر فیلترها
            </span>
            {(selectedCategory !== 'all' || selectedAudience !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedAudience('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#F16D7A] hover:underline"
              >
                پاک کردن تمام فیلترها
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#0E1726] border border-[#26364D] rounded-3xl p-8">
              <Layers className="w-12 h-12 text-[#A9B7CB]/40 mx-auto mb-4" />
              <h3 className="text-base font-bold text-[#E6EDF7] mb-2">محصولی با این مشخصات یافت نشد</h3>
              <p className="text-xs text-[#A9B7CB] max-w-sm mx-auto mb-6">
                می‌توانید عبارت جستجو را تغییر دهید یا فیلترهای دسته‌بندی را به حالت پیش‌فرض بازگردانید.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedAudience('all');
                  setSearchQuery('');
                }}
              >
                مشاهده همه محصولات
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const Icon = getCategoryIcon(product.category);
                return (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between rounded-2xl bg-[#121D30] border border-[#26364D] hover:border-[#38D9F5]/40 transition-all duration-200 p-6 shadow-sm hover:shadow-lg"
                  >
                    <div>
                      {/* Top Meta: Icon + Status */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#18263B] border border-[#26364D] flex items-center justify-center text-[#38D9F5]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          {getStatusBadge(product.status, product.statusLabel)}
                          <span className="text-[10px] font-mono text-[#A9B7CB]">
                            {product.audienceLabel}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-lg font-black text-[#E6EDF7] tracking-tight mb-1">
                        {product.persianTitle}
                      </h3>
                      <div className="text-[11px] font-mono text-[#38D9F5] mb-3">
                        {product.title}
                      </div>
                      <p className="text-xs text-[#A9B7CB] leading-[1.8] mb-5">
                        {product.shortDescription}
                      </p>

                      {/* Specs / Highlights */}
                      {product.specs && (
                        <div className="bg-[#0E1726] rounded-xl p-3 border border-[#26364D]/60 space-y-1.5 mb-5 text-[11px]">
                          {product.specs.map((spec, i) => (
                            <div key={i} className="flex items-center justify-between text-[#A9B7CB]">
                              <span>{spec.label}:</span>
                              <span className="font-semibold text-[#E6EDF7]">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Benefits List */}
                      <div className="space-y-1.5 mb-6">
                        {product.keyBenefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#E6EDF7]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#39C99A] shrink-0 mt-0.5" />
                            <span className="leading-tight">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA & Price Hint */}
                    <div className="pt-4 border-t border-[#26364D]/60 mt-auto">
                      {product.pricingHint && (
                        <div className="text-[11px] text-[#A9B7CB] mb-3 flex items-center justify-between">
                          <span>تعرفه:</span>
                          <span className="text-[#38D9F5] font-semibold">{product.pricingHint}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Link href={product.href} className="flex-1">
                          <Button
                            variant={product.status === 'available' ? 'primary' : product.status === 'beta' ? 'secondary' : 'outline'}
                            size="sm"
                            className="w-full justify-center"
                            leftIcon={<ArrowLeft className="w-3.5 h-3.5 rtl:-scale-x-100" />}
                          >
                            {product.ctaText}
                          </Button>
                        </Link>
                        {product.docsHref && (
                          <Link href={product.docsHref} title="مستندات">
                            <Button variant="ghost" size="sm" className="px-2.5">
                              <ExternalLink className="w-4 h-4 text-[#A9B7CB]" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Marketplace Callout Box */}
          <div className="mt-16 bg-gradient-to-r from-[#121D30] via-[#18263B] to-[#0E1726] border border-[#8B7CFF]/30 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center">
                <Badge variant="violet" size="sm" dot>
                  پلتفرم باز و اکوسیستم همکاران نتا
                </Badge>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#E6EDF7] tracking-tight">
                سرویس دیجیتال دارید؟ روی نتا به کاربران معرفی کنید.
              </h2>
              <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8]">
                ما در حال توسعه زیرساخت مارکت‌پلیس نتا هستیم تا ارائه‌دهندگان سرویس‌های هوش مصنوعی، دیتابیس‌ها و ابزارهای توسعه بتوانند با اتصال به درگاه مشترک نتا، خدمات خود را با احراز هویت متمرکز و تسویه‌حساب ریالی به هزاران کاربر فعال عرضه نمایند.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link href="/cloud#marketplace">
                <Button variant="secondary" size="md">
                  اطلاعات همکاری شرکا
                </Button>
              </Link>
              <Link href="/help">
                <Button variant="outline" size="md">
                  مطالعه سند توسعه‌دهندگان
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
