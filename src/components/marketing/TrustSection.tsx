import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { POP_NODES, INCIDENT_REPORTS } from '@/lib/mockData';
import { Shield, Activity, Lock, AlertTriangle, ArrowLeft, CheckCircle2, Server } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-[#080E18] border-t border-[#26364D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center mb-3">
              <Badge variant="cyan" size="sm" dot>
                بدون ادعای توخالی • معماری باز
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.35]">
              شفاف درباره اتصال تو.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#A9B7CB] max-w-xl leading-[1.75]">
              ما آمار گره‌های زیرساخت، لاگ اتفاقات و سیاست‌های حریم خصوصی را بدون روتوش در اختیار شما قرار می‌دهیم.
            </p>
          </div>

          <Link href="/status">
            <Badge variant="success" size="md" dot>
              کلیه سیستم‌ها فعال • مشاهده مانیتورینگ زنده
            </Badge>
          </Link>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Zero Log DNS */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#39C99A]/10 border border-[#39C99A]/30 flex items-center justify-center text-[#39C99A] mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#E6EDF7] mb-2">سیاست بدون لاگ DNS</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                ما تاریخچه وب‌گردی، دامنه‌های درخواست‌شده یا فعالیت‌های شخصی شما را ذخیره نمی‌کنیم.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#26364D]/60">
              <Link href="/privacy" className="text-xs text-[#38D9F5] hover:underline flex items-center gap-1 font-semibold">
                <span>سند حریم خصوصی</span>
                <ArrowLeft className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 2: Infrastructure Status */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#38D9F5]/10 border border-[#38D9F5]/30 flex items-center justify-center text-[#38D9F5] mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#E6EDF7] mb-2">سلامت گره‌های لبه</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                مانیتورینگ ۵ پاپ‌سایت بین‌المللی در آلمان، ترکیه، امارات، هلند و لبه تهران به صورت زنده.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#26364D]/60">
              <Link href="/status" className="text-xs text-[#38D9F5] hover:underline flex items-center gap-1 font-semibold">
                <span>داشبورد وضعیت گره‌ها</span>
                <ArrowLeft className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 3: Incident Log */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5B84C]/10 border border-[#F5B84C]/30 flex items-center justify-center text-[#F5B84C] mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#E6EDF7] mb-2">ثبت شفاف حوادث</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                کوچک‌ترین قطعی یا تاخیر ناشی از کابل‌های بین‌المللی همراه با زمان رفع ثبت می‌شود.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#26364D]/60">
              <Link href="/status#incidents" className="text-xs text-[#38D9F5] hover:underline flex items-center gap-1 font-semibold">
                <span>مشاهده سوابق حوادث</span>
                <ArrowLeft className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 4: Honest Limitations */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#8B7CFF]/10 border border-[#8B7CFF]/30 flex items-center justify-center text-[#8B7CFF] mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#E6EDF7] mb-2">محدودیت‌های فنی صریح</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                نتا ادعای دسترسی به تمامی سایت‌های غیرمجاز وب را ندارد؛ ما تنها روی سرویس‌های کاری و گیم متمرکزیم.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#26364D]/60">
              <Link href="/terms" className="text-xs text-[#38D9F5] hover:underline flex items-center gap-1 font-semibold">
                <span>شرایط و محدودیت‌ها</span>
                <ArrowLeft className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Live Node Status Snippet */}
        <div className="bg-[#121D30] border border-[#26364D] rounded-2xl p-5 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold text-[#A9B7CB]">
              وضعیت فعلی نودهای عملیاتی Anycast:
            </h4>
            <span className="text-[11px] text-[#39C99A] font-mono">Uptime: 99.94%</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {POP_NODES.map((node) => (
              <div
                key={node.id}
                className="p-3 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-[#E6EDF7]">{node.city}</div>
                  <div className="font-mono text-[10px] text-[#64748B]">{node.countryCode}</div>
                </div>
                <div className="text-end">
                  <span className="font-mono font-bold text-[#39C99A]">{node.latencyMs}ms</span>
                  <div className="text-[10px] text-[#A9B7CB]">{node.loadPercentage}% بار</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
