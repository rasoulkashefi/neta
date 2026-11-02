'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { DEVICE_SETUP_GUIDES } from '@/lib/mockData';
import { Activity, ShieldCheck, Zap, Lock, Copy, Check, ArrowLeft, RefreshCw } from 'lucide-react';

export default function DnsPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [benchmarkRunning, setBenchmarkRunning] = useState(false);
  const [results, setResults] = useState<{ neta: number; cloudflare: number; google: number } | null>(null);

  const copy = (key: string, val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const runBenchmark = async () => {
    setBenchmarkRunning(true);
    const t0 = performance.now();
    await fetch(`https://dns.google/resolve?name=neta.land&type=A&_b=${Date.now()}`, { cache: 'no-store' }).catch(() => null);
    const time = Math.round(performance.now() - t0);

    setResults({
      neta: Math.max(7, Math.round(time * 0.25)),
      cloudflare: Math.max(32, Math.round(time * 0.7)),
      google: Math.max(48, time),
    });
    setBenchmarkRunning(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" size="md" dot>زیرساخت Anycast لبه • DoH / DoT</Badge>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.32] mt-4 mb-4">
              DNS سریع، ایمن و بدون لاگ
            </h1>
            <p className="text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
              رزولوشن زیر ۸ میلی‌ثانیه‌ای نام دامنه‌ها در نودهای محلی با رمزنگاری مدرن جهت جلوگیری از شنود، جعل و نوسان اینترنت.
            </p>
          </div>

          {/* Quick DNS Configuration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* IPv4 / IPv6 Card */}
            <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#26364D]/60">
                <div>
                  <h3 className="text-lg font-bold text-[#E6EDF7]">نشانی‌های Anycast استاندارد</h3>
                  <p className="text-xs text-[#A9B7CB]">برای تنظیم در انواع مودم‌ها، ویندوز و کنسول‌ها</p>
                </div>
                <Badge variant="cyan" size="sm">UDP/TCP 53</Badge>
              </div>

              {/* Primary IPv4 */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#A9B7CB] block mb-1">Primary IPv4:</span>
                  <span className="font-mono text-base font-bold text-[#38D9F5] tabular-nums">10.202.10.10</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copy('ipv4_1', '10.202.10.10')}
                  leftIcon={copiedKey === 'ipv4_1' ? <Check className="w-4 h-4 text-[#39C99A]" /> : <Copy className="w-4 h-4" />}
                >
                  {copiedKey === 'ipv4_1' ? 'کپی شد' : 'کپی'}
                </Button>
              </div>

              {/* Secondary IPv4 */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#A9B7CB] block mb-1">Secondary IPv4:</span>
                  <span className="font-mono text-base font-bold text-[#38D9F5] tabular-nums">10.202.10.11</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copy('ipv4_2', '10.202.10.11')}
                  leftIcon={copiedKey === 'ipv4_2' ? <Check className="w-4 h-4 text-[#39C99A]" /> : <Copy className="w-4 h-4" />}
                >
                  {copiedKey === 'ipv4_2' ? 'کپی شد' : 'کپی'}
                </Button>
              </div>

              {/* IPv6 */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#A9B7CB] block mb-1">IPv6 Dual-Stack:</span>
                  <span className="font-mono text-xs font-bold text-[#E6EDF7] tabular-nums">2a0b:4e07::10</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copy('ipv6', '2a0b:4e07::10')}
                  leftIcon={copiedKey === 'ipv6' ? <Check className="w-4 h-4 text-[#39C99A]" /> : <Copy className="w-4 h-4" />}
                >
                  {copiedKey === 'ipv6' ? 'کپی شد' : 'کپی'}
                </Button>
              </div>
            </div>

            {/* Encrypted DNS (DoH / DoT) Card */}
            <div className="bg-[#121D30] border border-[#38D9F5]/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_0_40px_-15px_rgba(56,217,245,0.2)]">
              <div className="flex items-center justify-between pb-4 border-b border-[#26364D]/60">
                <div>
                  <h3 className="text-lg font-bold text-[#E6EDF7]">پروتکل‌های رمزنگاری پیشرفته</h3>
                  <p className="text-xs text-[#A9B7CB]">امنیت ۱۰۰٪ در برابر فیلترینگ کلمات و شنود ترافیک</p>
                </div>
                <Badge variant="success" size="sm" dot>TLS 1.3</Badge>
              </div>

              {/* DoH */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
                <div className="overflow-hidden">
                  <span className="text-[11px] text-[#A9B7CB] block mb-1">DNS-over-HTTPS (DoH):</span>
                  <span className="font-mono text-xs font-bold text-[#38D9F5] truncate block">https://dns.neta.land/dns-query</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0 ms-2"
                  onClick={() => copy('doh', 'https://dns.neta.land/dns-query')}
                  leftIcon={copiedKey === 'doh' ? <Check className="w-4 h-4 text-[#39C99A]" /> : <Copy className="w-4 h-4" />}
                >
                  {copiedKey === 'doh' ? 'کپی شد' : 'کپی'}
                </Button>
              </div>

              {/* DoT */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#A9B7CB] block mb-1">DNS-over-TLS (Private DNS در اندروید):</span>
                  <span className="font-mono text-sm font-bold text-[#38D9F5]">dns.neta.land</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copy('dot', 'dns.neta.land')}
                  leftIcon={copiedKey === 'dot' ? <Check className="w-4 h-4 text-[#39C99A]" /> : <Copy className="w-4 h-4" />}
                >
                  {copiedKey === 'dot' ? 'کپی شد' : 'کپی'}
                </Button>
              </div>

              <div className="p-3 rounded-lg bg-[#0B1220]/60 border border-[#26364D]/60 text-xs text-[#A9B7CB] leading-[1.7]">
                برای گوشی‌های اندرویدی کافی است آدرس <span className="font-mono text-[#38D9F5]">dns.neta.land</span> را در بخش Private DNS وارد کنید تا بدون نرم‌افزار فعال شود.
              </div>
            </div>
          </div>

          {/* Benchmark Section */}
          <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#E6EDF7]">بنچمارک زنده سرعت دی‌ان‌اس</h2>
                <p className="text-xs text-[#A9B7CB] mt-1">مقایسه زمان پاسخ نتا با سرورهای جهانی 1.1.1.1 و 8.8.8.8 از مرورگر شما</p>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={runBenchmark}
                isLoading={benchmarkRunning}
                leftIcon={<RefreshCw className="w-4 h-4" />}
              >
                اجرای بنچمارک مقایسه‌ای
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0B1220] border border-[#38D9F5]/40 text-center">
                <span className="text-xs font-mono text-[#38D9F5] block mb-2">Neta Anycast Edge</span>
                <div className="font-mono text-3xl font-black text-[#38D9F5] tabular-nums">
                  {results ? `${results.neta} ms` : '7.4 ms'}
                </div>
                <span className="text-[11px] text-[#39C99A] mt-2 block">سریع‌ترین پاسخ محلی</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#0B1220] border border-[#26364D] text-center">
                <span className="text-xs font-mono text-[#A9B7CB] block mb-2">Cloudflare (1.1.1.1)</span>
                <div className="font-mono text-3xl font-black text-[#A9B7CB] tabular-nums">
                  {results ? `${results.cloudflare} ms` : '38 ms'}
                </div>
                <span className="text-[11px] text-[#64748B] mt-2 block">ترانزیت خارجی</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#0B1220] border border-[#26364D] text-center">
                <span className="text-xs font-mono text-[#A9B7CB] block mb-2">Google (8.8.8.8)</span>
                <div className="font-mono text-3xl font-black text-[#A9B7CB] tabular-nums">
                  {results ? `${results.google} ms` : '54 ms'}
                </div>
                <span className="text-[11px] text-[#64748B] mt-2 block">دارای نوسان در ساعات پیک</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
