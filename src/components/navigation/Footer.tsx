import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Shield, Activity, Globe, Heart, ArrowUpLeft } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#26364D] bg-[#080E18] text-[#A9B7CB] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#38D9F5]/20 border border-[#38D9F5]/40 flex items-center justify-center font-black text-sm text-[#38D9F5]">
                N
              </div>
              <span className="font-extrabold text-xl text-[#E6EDF7] tracking-tight">نتا</span>
              <span className="text-xs font-mono text-[#38D9F5]">neta.land</span>
            </div>
            <p className="text-sm text-[#A9B7CB] max-w-sm leading-[1.8]">
              پلتفرم بهینه‌سازی اتصال و دسترسی به اینترنت با سه محور اصلی: دسترسی به سرویس‌های تخصصی، DNS پرسرعت و پایدار، و تثبیت پکت‌های گیمینگ.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link href="/status">
                <Badge variant="success" size="sm" dot>
                  وضعیت زیرساخت: ۹۹.۹٪ نرمال
                </Badge>
              </Link>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6EDF7]">قابلیت‌ها</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-[#38D9F5] transition-colors flex items-center gap-1.5">
                  <span>سرویس‌های پشتیبانی‌شده</span>
                </Link>
              </li>
              <li>
                <Link href="/dns" className="hover:text-[#38D9F5] transition-colors flex items-center gap-1.5">
                  <span>DNS امن و اختصاصی</span>
                </Link>
              </li>
              <li>
                <Link href="/gaming" className="hover:text-[#38D9F5] transition-colors flex items-center gap-1.5">
                  <span>بهینه‌ساز پینگ گیمینگ</span>
                </Link>
              </li>
              <li>
                <Link href="/test" className="hover:text-[#38D9F5] transition-colors flex items-center gap-1.5">
                  <span>تست زنده اتصال</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6EDF7]">راهنما و پشتیبانی</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-[#38D9F5] transition-colors">
                  مرکز مستندات
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-[#38D9F5] transition-colors">
                  مانیتورینگ نودها
                </Link>
              </li>
              <li>
                <Link href="/help/getting-started-dns" className="hover:text-[#38D9F5] transition-colors">
                  تنظیم DoH و DoT
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#38D9F5] transition-colors">
                  پلن‌ها و تعرفه‌ها
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6EDF7]">شفافیت و قانون</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#38D9F5] transition-colors">
                  حریم خصوصی (بدون لاگ)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#38D9F5] transition-colors">
                  شرایط استفاده
                </Link>
              </li>
              <li>
                <Link href="/help/ai-tools-access-troubleshooting" className="hover:text-[#38D9F5] transition-colors">
                  محدودیت‌های فنی
                </Link>
              </li>
              <li>
                <Link href="/app" className="hover:text-[#38D9F5] transition-colors flex items-center gap-1">
                  <span>داشبورد کاربری</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 text-[#38D9F5]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#26364D]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 نِتا (Neta.land). تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span>توسعه‌یافته با رویکرد مهندسی و شفافیت کامل شبکه</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
