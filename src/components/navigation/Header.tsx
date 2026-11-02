'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { Menu, X, ArrowLeft, Activity, Globe, Gamepad2, Shield } from 'lucide-react';

const NAV_LINKS = [
  { href: '/features', label: 'قابلیت‌ها' },
  { href: '/services', label: 'سرویس‌های پشتیبانی‌شده' },
  { href: '/gaming', label: 'گیمینگ' },
  { href: '/dns', label: 'DNS' },
  { href: '/pricing', label: 'قیمت‌ها' },
  { href: '/test', label: 'تست اتصال' },
  { href: '/status', label: 'وضعیت شبکه' },
  { href: '/help', label: 'راهنما' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md',
        isScrolled
          ? 'bg-[#0B1220]/85 border-b border-[#26364D]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38D9F5] rounded-lg p-1"
            aria-label="صفحه اصلی نتا"
          >
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-[#38D9F5] via-[#8B7CFF] to-[#0B1220] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center">
                <span className="font-black text-sm tracking-tighter text-[#38D9F5]">N</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-xl text-[#E6EDF7] tracking-tight">نِتا</span>
              <span className="text-[11px] font-mono text-[#38D9F5]/80 uppercase tracking-widest hidden sm:inline">.land</span>
            </div>
          </Link>

          {/* Quick status pill */}
          <Link href="/status" className="hidden lg:inline-flex">
            <Badge variant="success" size="sm" dot>
              شبکه عملیاتی
            </Badge>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38D9F5]',
                  isActive
                    ? 'text-[#38D9F5] bg-[#38D9F5]/10 font-semibold'
                    : 'text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B]/50'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              ورود
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="primary" size="sm" leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
              شروع رایگان
            </Button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <Link href="/signup">
            <Button variant="primary" size="sm">
              شروع
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="باز کردن منو"
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-xl text-[#A9B7CB] hover:text-[#E6EDF7] hover:bg-[#18263B] border border-[#26364D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38D9F5] min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#26364D] bg-[#0B1220]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#26364D]/60">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center',
                  pathname === link.href
                    ? 'bg-[#38D9F5]/10 text-[#38D9F5] font-semibold'
                    : 'text-[#A9B7CB] hover:bg-[#18263B] hover:text-[#E6EDF7]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" className="w-full">
                ورود به حساب
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                شروع رایگان
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
