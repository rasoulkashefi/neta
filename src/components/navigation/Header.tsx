'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import {
  Menu,
  X,
  ArrowLeft,
  ChevronDown,
  Activity,
  Globe,
  Gamepad2,
  Sparkles,
  Cloud,
  Cpu,
  Store,
  Layers
} from 'lucide-react';

interface SubProduct {
  title: string;
  badge?: string;
  href: string;
  icon: React.ElementType;
  desc: string;
}

const PRODUCT_GROUPS: {
  category: string;
  badge?: string;
  items: SubProduct[];
}[] = [
  {
    category: 'اتصال و شبکه (عملیاتی)',
    badge: 'فعال',
    items: [
      {
        title: 'DNS هوشمند Anycast',
        badge: 'DoH/DoT',
        href: '/dns',
        icon: Activity,
        desc: 'تفکیک سریع نام دامنه‌ها با نزدیک‌ترین لبه‌ها'
      },
      {
        title: 'بهینه‌ساز پینگ گیمینگ',
        badge: 'Sub-tick',
        href: '/gaming',
        icon: Gamepad2,
        desc: 'هدایت مستقیم UDP و حذف پکت‌لاس در بازی‌های رقابتی'
      },
      {
        title: 'گیت‌وی دسترسی سرویس‌ها',
        badge: '۵۰+ سرویس',
        href: '/services',
        icon: Globe,
        desc: 'رفع خطای ۴۰۳ در فیگما، داکر، کلود و مخازن کد'
      },
      {
        title: 'هاب سرویس‌های اتصال',
        href: '/connectivity',
        icon: Layers,
        desc: 'نمای کلی کلیه سرویس‌ها و ابزارهای شبکه'
      }
    ]
  },
  {
    category: 'پلتفرم هوش مصنوعی (AI Platform)',
    badge: 'Beta',
    items: [
      {
        title: 'درگاه یکپارچه مدل‌های AI',
        badge: 'Unified API',
        href: '/ai',
        icon: Sparkles,
        desc: 'یک کلید API برای دسترسی به Claude 3.5، GPT-4o و DeepSeek'
      },
      {
        title: 'مسیریاب و مقایسه مدل‌ها',
        badge: 'هوشمند',
        href: '/ai#models',
        icon: Cpu,
        desc: 'کاهش ۶۰٪ هزینه‌ها با تحلیل پیچیدگی پرامپت'
      },
      {
        title: 'کنسول مدیریت کلیدها',
        href: '/app/ai',
        icon: Sparkles,
        desc: 'تولید کلید و مانیتورینگ مصرف توکن‌ها'
      }
    ]
  },
  {
    category: 'زیرساخت ابری و همکاران',
    badge: 'نقشه راه',
    items: [
      {
        title: 'سرورهای ابری و فضای S3',
        badge: 'Edge Compute',
        href: '/cloud',
        icon: Cloud,
        desc: 'محاسبات لبه و ذخیره‌سازی مقیاس‌پذیر ابری'
      },
      {
        title: 'مارکت‌پلیس شرکا',
        badge: 'Partner Hub',
        href: '/cloud#marketplace',
        icon: Store,
        desc: 'عرضه و میزبانی سرویس‌های دیجیتال شما روی نتا'
      }
    ]
  }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-md',
        isScrolled
          ? 'bg-[#0B1220]/90 border-b border-[#26364D]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-[#0B1220]/50 border-b border-[#26364D]/40'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Right Section: Logo & Quick Status */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38D9F5] rounded-xl p-1"
            aria-label="صفحه اصلی نتا"
          >
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-[#38D9F5] via-[#8B7CFF] to-[#0B1220] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(56,217,245,0.25)]">
              <div className="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center">
                <span className="font-black text-sm tracking-tighter text-[#38D9F5]">N</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-xl text-[#E6EDF7] tracking-tight">نِتا</span>
              <span className="text-[11px] font-mono text-[#38D9F5] uppercase tracking-widest hidden sm:inline">.land</span>
            </div>
          </Link>

          <Link href="/status" className="hidden xl:inline-flex items-center">
            <Badge variant="success" size="sm" dot>
              شبکه ۹۹.۹٪ نرمال
            </Badge>
          </Link>
        </div>

        {/* Center Section: Compact, Clean Desktop Navigation (Will NEVER wrap) */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className={cn(
              'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname === '/'
                ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/60'
            )}
          >
            صفحه اصلی
          </Link>

          {/* Scalable Products Mega Menu Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
                productsOpen || pathname.startsWith('/products') || pathname.startsWith('/ai') || pathname.startsWith('/connectivity') || pathname.startsWith('/cloud')
                  ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                  : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/60'
              )}
              aria-expanded={productsOpen}
            >
              <span>محصولات</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform duration-200',
                  productsOpen ? 'rotate-180 text-[#38D9F5]' : 'text-[#A9B7CB]'
                )}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {productsOpen && (
              <div className="absolute top-full start-1/2 -translate-x-1/2 mt-2 w-[620px] rounded-3xl bg-[#0E1726] border border-[#26364D] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl animate-in fade-in-50 zoom-in-95 duration-150">
                <div className="grid grid-cols-3 gap-4 pb-4 mb-4 border-b border-[#26364D]/70 text-start">
                  {PRODUCT_GROUPS.map((group) => (
                    <div key={group.category} className="space-y-2">
                      <div className="flex items-center justify-between pb-1.5 border-b border-[#26364D]/50 text-[11px] font-bold text-[#E6EDF7]">
                        <span>{group.category}</span>
                        {group.badge && (
                          <span className={cn(
                            'text-[9px] px-1.5 py-0.2 rounded font-mono',
                            group.badge === 'فعال' ? 'bg-[#39C99A]/15 text-[#39C99A]' :
                            group.badge === 'Beta' ? 'bg-[#8B7CFF]/15 text-[#8B7CFF]' :
                            'bg-[#18263B] text-[#A9B7CB]'
                          )}>
                            {group.badge}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setProductsOpen(false)}
                              className="group block p-2 rounded-xl hover:bg-[#121D30] border border-transparent hover:border-[#26364D] transition-all"
                            >
                              <div className="flex items-center gap-2 mb-0.5">
                                <Icon className="w-3.5 h-3.5 text-[#38D9F5] group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold text-[#E6EDF7] group-hover:text-[#38D9F5] transition-colors">
                                  {item.title}
                                </span>
                              </div>
                              <p className="text-[10px] text-[#A9B7CB] line-clamp-1 leading-normal">
                                {item.desc}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Mega Menu Callout */}
                <div className="flex items-center justify-between px-2 pt-1 text-xs">
                  <span className="text-[#A9B7CB] text-[11px]">
                    همه سرویس‌ها روی یک پنل و حساب کاربری واحد ارائه می‌شوند.
                  </span>
                  <Link
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    className="font-bold text-[#38D9F5] hover:underline flex items-center gap-1.5"
                  >
                    <span>مشاهده کاتالوگ جامع محصولات</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className={cn(
              'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname === '/pricing'
                ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/60'
            )}
          >
            قیمت‌ها
          </Link>

          <Link
            href="/help"
            className={cn(
              'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname.startsWith('/help')
                ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/60'
            )}
          >
            مستندات
          </Link>
        </nav>

        {/* Left Section: Action CTAs with Correct Arrow Direction */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              ورود
            </Button>
          </Link>
          <Link href="/app">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              کنسول کاربری
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B] border border-[#26364D]"
          aria-label="تغییر وضعیت منوی موبایل"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#26364D] bg-[#0E1726]/95 backdrop-blur-xl px-4 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-bold text-[#E6EDF7] hover:bg-[#18263B]"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold text-[#38D9F5] bg-[#38D9F5]/10"
            >
              <span>کاتالوگ کامل محصولات</span>
              <Layers className="w-4 h-4" />
            </Link>
            <Link
              href="/connectivity"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[#A9B7CB] hover:bg-[#18263B]"
            >
              سرویس‌های اتصال (DNS، بازی و دسترسی)
            </Link>
            <Link
              href="/ai"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#8B7CFF] hover:bg-[#18263B]"
            >
              <span>پلتفرم هوش مصنوعی (Unified API)</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#8B7CFF]/20 text-[#8B7CFF]">Beta</span>
            </Link>
            <Link
              href="/cloud"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#A9B7CB] hover:bg-[#18263B]"
            >
              <span>زیرساخت ابری و مارکت‌پلیس</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#18263B] text-[#A9B7CB]">نقشه راه</span>
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[#A9B7CB] hover:bg-[#18263B]"
            >
              تعرفه‌ها و پلن‌ها
            </Link>
            <Link
              href="/help"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[#A9B7CB] hover:bg-[#18263B]"
            >
              مستندات و آموزش‌ها
            </Link>
          </div>

          <div className="pt-4 border-t border-[#26364D] flex flex-col gap-2">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="sm" className="w-full">
                ورود به حساب
              </Button>
            </Link>
            <Link href="/app" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                کنسول مدیریت نتا
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
