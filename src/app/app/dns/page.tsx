'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Activity, ShieldCheck, Copy, Check, Lock, Zap } from 'lucide-react';

export default function AppDnsSettingsPage() {
  const [copied, setCopied] = useState(false);
  const [malwareBlock, setMalwareBlock] = useState(true);
  const [adblock, setAdblock] = useState(true);
  const [aiFilter, setAiFilter] = useState(false);

  const dohEndpoint = 'https://dns.neta.land/dns-query/u-8f921a4';

  const copyEndpoint = () => {
    navigator.clipboard.writeText(dohEndpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="pb-4 border-b border-[#26364D]/60">
        <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
          تنظیمات پروفایل DNS اختصاصی
        </h1>
        <p className="text-xs text-[#A9B7CB] mt-1">
          مدیریت آدرس‌های DoH شخصی‌سازی‌شده و سوئیچ فیلترهای امنیتی
        </p>
      </div>

      {/* Personalized Endpoint Box */}
      <div className="p-6 rounded-3xl bg-[#121D30] border border-[#38D9F5]/40 space-y-4 shadow-[0_0_40px_-15px_rgba(56,217,245,0.2)]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[#E6EDF7]">آدرس اختصاصی DNS-over-HTTPS شما</h2>
            <p className="text-xs text-[#A9B7CB]">این آدرس شامل شناسه پروفایل امن شما با فیلترهای سفارشی زیر است</p>
          </div>
          <Badge variant="cyan" size="sm" dot>Active Token</Badge>
        </div>

        <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="text-[#38D9F5] select-all truncate">{dohEndpoint}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={copyEndpoint}
            leftIcon={copied ? <Check className="w-4 h-4 text-[#39C99A]" /> : <Copy className="w-4 h-4" />}
          >
            {copied ? 'کپی شد' : 'کپی آدرس DoH'}
          </Button>
        </div>
      </div>

      {/* Security & Content Filters */}
      <div className="p-6 rounded-3xl bg-[#121D30] border border-[#26364D] space-y-6">
        <h3 className="text-base font-bold text-[#E6EDF7]">فیلترهای امنیتی و مسدودسازی در سطح DNS</h3>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-[#E6EDF7]">مسدودسازی خودکار بدافزار و فیشینگ (Malware Shield)</div>
              <p className="text-xs text-[#A9B7CB] mt-0.5">جلوگیری از اتصال به سرورهای باج‌افزار و دامنه‌های مشکوک</p>
            </div>
            <button
              onClick={() => setMalwareBlock(!malwareBlock)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                malwareBlock ? 'bg-[#39C99A]/20 text-[#39C99A] border border-[#39C99A]/40' : 'bg-[#18263B] text-[#64748B]'
              }`}
            >
              {malwareBlock ? 'فعال' : 'غیرفعال'}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-[#E6EDF7]">فیلتر تبلیغات آزاردهنده و ردیاب‌ها (Ad & Tracker Blocker)</div>
              <p className="text-xs text-[#A9B7CB] mt-0.5">مسدود کردن سرورهای بنر و اسکریپت‌های ردیابی رفتار وب</p>
            </div>
            <button
              onClick={() => setAdblock(!adblock)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                adblock ? 'bg-[#39C99A]/20 text-[#39C99A] border border-[#39C99A]/40' : 'bg-[#18263B] text-[#64748B]'
              }`}
            >
              {adblock ? 'فعال' : 'غیرفعال'}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-[#E6EDF7]">مسیریابی با بالاترین اولویت Anycast</div>
              <p className="text-xs text-[#A9B7CB] mt-0.5">اتصال مستقیم به نزدیک‌ترین PoP جهت کاهش تاخیر</p>
            </div>
            <Badge variant="cyan" size="sm">همیشه فعال</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
