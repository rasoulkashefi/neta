'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import {
  LayoutDashboard,
  Wand2,
  Globe,
  Activity,
  Gamepad2,
  Stethoscope,
  Laptop2,
  CreditCard,
  LifeBuoy,
  Settings,
  ArrowUpLeft,
  Menu,
  X,
  LogOut,
  User,
  Bell
} from 'lucide-react';

const APP_ROUTES = [
  { href: '/app', label: 'نمای کلی', icon: LayoutDashboard },
  { href: '/app/setup', label: 'راه‌اندازی دستگاه', icon: Wand2 },
  { href: '/app/access', label: 'سرویس‌های من', icon: Globe, badge: '50+' },
  { href: '/app/dns', label: 'تنظیمات DNS', icon: Activity },
  { href: '/app/gaming', label: 'بهینه‌ساز بازی', icon: Gamepad2 },
  { href: '/app/diagnostics', label: 'تست تشخیصی', icon: Stethoscope },
  { href: '/app/devices', label: 'دستگاه‌های فعال', icon: Laptop2, badge: '۲' },
  { href: '/app/subscription', label: 'اشتراک و صورت‌حساب', icon: CreditCard },
  { href: '/app/support', label: 'پشتیبانی فنی', icon: LifeBuoy },
  { href: '/app/settings', label: 'تنظیمات حساب', icon: Settings },
];

export function AppNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080E18] text-[#E6EDF7] flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-40 bg-[#0B1220]/90 backdrop-blur-md border-b border-[#26364D] px-4 h-16 flex items-center justify-between">
        <Link href="/app" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#38D9F5]/20 border border-[#38D9F5]/40 flex items-center justify-center font-black text-sm text-[#38D9F5]">
            N
          </div>
          <span className="font-extrabold text-base text-[#E6EDF7]">پنل نتا</span>
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl text-[#A9B7CB] hover:bg-[#18263B] border border-[#26364D]"
          aria-label="تغییر منوی سایدبار"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar for Desktop & Mobile Overlay */}
      <aside
        className={cn(
          'fixed md:sticky top-0 z-50 md:z-30 h-screen w-64 bg-[#0B1220] border-e border-[#26364D] p-4 flex flex-col justify-between transition-transform duration-300',
          sidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        )}
      >
        <div>
          {/* Logo & Brand */}
          <div className="flex items-center justify-between pb-6 mb-4 border-b border-[#26364D]/60 px-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#38D9F5] via-[#8B7CFF] to-[#0B1220] p-[1.5px]">
                <div className="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-sm text-[#38D9F5]">N</span>
                </div>
              </div>
              <div>
                <div className="font-extrabold text-base text-[#E6EDF7] leading-none">نِتا</div>
                <div className="text-[10px] font-mono text-[#38D9F5]">neta.land/app</div>
              </div>
            </Link>

            <Link href="/" className="text-xs text-[#A9B7CB] hover:text-[#38D9F5] flex items-center gap-0.5" title="بازگشت به سایت">
              <span>سایت</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* User Profile Snippet */}
          <div className="p-3 rounded-xl bg-[#121D30] border border-[#26364D] mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#18263B] border border-[#38D9F5]/40 flex items-center justify-center text-[#38D9F5]">
                <User className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-[#E6EDF7] truncate">کاربر حرفه‌ای</div>
                <div className="text-[10px] font-bold text-[#39C99A]">پلن Personal Pro</div>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#39C99A] animate-pulse" title="متصل" />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {APP_ROUTES.map((route) => {
              const Icon = route.icon;
              const isActive = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center justify-between px-3 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#38D9F5]/10 text-[#38D9F5] font-bold border border-[#38D9F5]/30'
                      : 'text-[#A9B7CB] hover:bg-[#121D30] hover:text-[#E6EDF7]'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{route.label}</span>
                  </div>
                  {route.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[#18263B] text-[#A9B7CB]">
                      {route.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#26364D]/60 space-y-2">
          <div className="px-3 py-2 rounded-lg bg-[#0E1726] border border-[#26364D]/50 text-[11px] text-[#A9B7CB] flex items-center justify-between">
            <span>سرور متصل:</span>
            <span className="font-mono text-[#38D9F5]">pop-fra (64ms)</span>
          </div>

          <Link
            href="/login"
            className="flex items-center gap-2 px-3 py-2 text-xs text-[#F16D7A] hover:bg-[#F16D7A]/10 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>خروج از حساب</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
