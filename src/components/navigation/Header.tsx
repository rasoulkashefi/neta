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
    category: 'اتصال و دسترسی شبکه',
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
    ]
  },
  {
    category: 'پلتفرم هوش مصنوعی (AI)',
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
      }
    ]
  },
  {
    category: 'زیرساخت ابری و همکاران',
    badge: 'به‌زودی',
    items: [
      {
        title: 'سرورهای ابری و فضای S3',
        badge: 'نقشه راه',
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



  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-md',
        isScrolled
          ? 'bg-[#0B1220]/90 border-b border-[#26364D]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-[#0B1220]/40 border-b border-[#26364D]/30'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-5">
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

          {/* Quick Platform Status */}
          <Link href="/status" className="hidden lg:inline-flex items-center">
            <Badge variant="success" size="sm" dot>
              شبکه ۹۹.۹٪ نرمال
            </Badge>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname === '/'
                ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/50'
            )}
          >
            صفحه اصلی
          </Link>

          {/* Scalable Products Mega Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
                productsOpen || pathname.startsWith('/products')
                  ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                  : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/50'
              )}
              aria-expanded={productsOpen}
            >
              <span>محصولات</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  productsOpen ? 'rotate-180' : ''
                )}
              />
            </button>

            {/* Dropdown Menu */}
            {productsOpen && (
              <div className="absolute top-full start-0 mt-2 w-[520px] rounded-2xl bg-[#0E1726] border border-[#26364D] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-in fade-in-50 zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#26364D]/70 px-1">
                  <div className="text-xs font-bold text-[#E6EDF7] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#38D9F5]" />
                    <span>کاتالوگ سرویس‌ها و ابزارهای نتا</span>
                  </div>
                  <Link
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    className="text-[11px] font-bold text-[#38D9F5] hover:underline flex items-center gap-1"
                  >
                    <span>مشاهده تمام محصولات</span>
                    <ArrowLeft className="w-3 h-3 rtl:-scale-x-100" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {PRODUCT_GROUPS.map((group) => (
                    <div key={group.category} className="space-y-1.5">
                      <div className="flex items-center justify-between px-2 text-[11px] font-semibold text-[#A9B7CB]">
                        <span>{group.category}</span>
                        {group.badge && (
                          <span className={cn(
                            'text-[10px] px-1.5 py-0.2 rounded-full font-mono',
                            group.badge === 'فعال' ? 'bg-[#39C99A]/15 text-[#39C99A]' :
                            group.badge === 'Beta' ? 'bg-[#8B7CFF]/15 text-[#8B7CFF]' :
                            'bg-[#18263B] text-[#A9B7CB]'
                          )}>
                            {group.badge}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-1">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setProductsOpen(false)}
                              className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#121D30] border border-transparent hover:border-[#26364D] transition-colors"
                            >
                              <div className="p-1.5 rounded-lg bg-[#18263B] group-hover:bg-[#38D9F5]/10 text-[#38D9F5] shrink-0 mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-[#E6EDF7] group-hover:text-[#38D9F5] transition-colors">
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#18263B] text-[#A9B7CB]">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-[#A9B7CB] truncate mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/connectivity"
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname.startsWith('/connectivity') || pathname === '/dns' || pathname === '/gaming'
                ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/50'
            )}
          >
            سرویس‌های اتصال
          </Link>

          <Link
            href="/ai"
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname.startsWith('/ai')
                ? 'text-[#8B7CFF] bg-[#8B7CFF]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/50'
            )}
          >
            <span>پلتفرم هوش مصنوعی</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#8B7CFF]/20 text-[#8B7CFF]">Beta</span>
          </Link>

          <Link
            href="/cloud"
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname.startsWith('/cloud')
                ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/50'
            )}
          >
            <span>ابری و شرکا</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#18263B] text-[#A9B7CB]">نقشه راه</span>
          </Link>

          <Link
            href="/pricing"
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname === '/pricing'
                ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/50'
            )}
          >
            قیمت‌ها
          </Link>

          <Link
            href="/help"
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
              pathname.startsWith('/help')
                ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-bold'
                : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/50'
            )}
          >
            مستندات
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              ورود
            </Button>
          </Link>
          <Link href="/app">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}
            >
              کنسول کاربری
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B] border border-[#26364D]"
          aria-label="تغییر وضعیت منوی موبایل"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#26364D] bg-[#0E1726]/95 backdrop-blur-xl px-4 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200">
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
              <Button variant="primary" size="sm" className="w-full">
                کنسول مدیریت نتا
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
