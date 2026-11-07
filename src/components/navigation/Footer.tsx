import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Activity, Sparkles, Cloud } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#26364D] bg-[#080E18] text-[#A9B7CB] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#38D9F5]/20 border border-[#38D9F5]/40 flex items-center justify-center font-black text-sm text-[#38D9F5]">
                N
              </div>
              <span className="font-extrabold text-2xl text-[#E6EDF7] tracking-tight">نتا</span>
              <span className="text-xs font-mono text-[#38D9F5]">neta.land</span>
            </div>
            <p className="text-sm text-[#A9B7CB] max-w-sm leading-[1.85]">
              پلتفرم جامع ارائه و تبادل محصولات دیجیتال؛ از تثبیت اتصال و DNS هوشمند تا درگاه یکپارچه مدل‌های هوش مصنوعی و زیرساخت مقیاس‌پذیر ابری.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <Link href="/status">
                <Badge variant="success" size="sm" dot>
                  وضعیت زیرساخت Anycast: نرمال
                </Badge>
              </Link>
            </div>
            <div className="text-xs text-[#A9B7CB]/80 pt-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#39C99A]" />
              <span>پایبندی ۱۰۰٪ به اصل شفافیت و حفظ حریم خصوصی بدون لاگ</span>
            </div>
          </div>

          {/* Column 1: Connectivity */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6EDF7] flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#38D9F5]" />
              <span>اتصال و شبکه</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/connectivity" className="hover:text-[#38D9F5] transition-colors">
                  نمای کلی سرویس‌های اتصال
                </Link>
              </li>
              <li>
                <Link href="/dns" className="hover:text-[#38D9F5] transition-colors">
                  DNS هوشمند و ضد بدافزار
                </Link>
              </li>
              <li>
                <Link href="/gaming" className="hover:text-[#38D9F5] transition-colors">
                  بهینه‌ساز پینگ گیمینگ
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#38D9F5] transition-colors">
                  سرویس‌های لایه ۷ (داکر، فیگما)
                </Link>
              </li>
              <li>
                <Link href="/test" className="hover:text-[#38D9F5] transition-colors">
                  تست زنده اتصال
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: AI Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6EDF7] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8B7CFF]" />
              <span>پلتفرم هوش مصنوعی</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai" className="hover:text-[#8B7CFF] transition-colors">
                  درگاه متمرکز AI (یک کلید)
                </Link>
              </li>
              <li>
                <Link href="/ai#models" className="hover:text-[#8B7CFF] transition-colors">
                  کاتالوگ و مقایسه مدل‌ها
                </Link>
              </li>
              <li>
                <Link href="/ai#docs" className="hover:text-[#8B7CFF] transition-colors">
                  نمونه کدها و OpenAI SDK
                </Link>
              </li>
              <li>
                <Link href="/ai#calculator" className="hover:text-[#8B7CFF] transition-colors">
                  محاسبه‌گر هزینه توکن‌ها
                </Link>
              </li>
              <li>
                <Link href="/app/ai" className="hover:text-[#8B7CFF] transition-colors">
                  کنسول مدیریت کلیدهای API
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Cloud & Partners */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6EDF7] flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5 text-[#38D9F5]" />
              <span>ابری و مارکت‌پلیس</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cloud#compute" className="hover:text-[#38D9F5] transition-colors">
                  کانتینرهای لبه (Edge Compute)
                </Link>
              </li>
              <li>
                <Link href="/cloud#storage" className="hover:text-[#38D9F5] transition-colors">
                  فضای ابری سازگار با S3
                </Link>
              </li>
              <li>
                <Link href="/cloud#marketplace" className="hover:text-[#38D9F5] transition-colors">
                  برنامه همکاران و عرضه سرویس
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#38D9F5] transition-colors">
                  کاتالوگ کامل محصولات
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Documentation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6EDF7]">
              راهنما و شفافیت
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-[#38D9F5] transition-colors">
                  مرکز مستندات
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#38D9F5] transition-colors">
                  تعرفه‌ها و پلن‌ها
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#38D9F5] transition-colors">
                  سیاست حفظ حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#38D9F5] transition-colors">
                  شرایط استفاده از خدمات
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-[#38D9F5] transition-colors">
                  مانیتورینگ نودهای Anycast
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#26364D]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B7CB]">
          <div>
            تمام حقوق برای پلتفرم دیجیتال نتا (Neta.land) محفوظ است. ۱۴۰۵ - ۱۴۰۳
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-[#E6EDF7] transition-colors">
              قوانین
            </Link>
            <Link href="/privacy" className="hover:text-[#E6EDF7] transition-colors">
              حریم خصوصی
            </Link>
            <Link href="/status" className="hover:text-[#E6EDF7] transition-colors">
              وضعیت شبکه
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
