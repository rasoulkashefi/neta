'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GAMES_DIRECTORY } from '@/lib/mockData';
import { Gamepad2, Zap, ArrowLeft, Activity, ShieldCheck, Server, AlertCircle } from 'lucide-react';

export default function GamingPage() {
  const [activeGame, setActiveGame] = useState(GAMES_DIRECTORY[0]);

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="amber" size="md" dot>بهینه‌سازی ترافیک UDP • Sub-tick Fix</Badge>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.32] mt-4 mb-4">
              اتصال بهینه‌تر برای بازی‌های آنلاین
            </h1>
            <p className="text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
              تشخیص موانع مسیر، حذف هاپ‌های اضافه اپراتور و اتصال مستقیم به رله‌های رسمی والورانت، کانتر ۲ و دیسکورد با پکت‌لاس صفر.
            </p>
          </div>

          {/* Interactive Game Latency Matrix */}
          <div className="bg-[#121D30] border border-[#F5A65B]/40 rounded-3xl p-6 sm:p-10 mb-16 shadow-[0_0_50px_-15px_rgba(245,166,91,0.2)]">
            <h2 className="text-xl font-bold text-[#E6EDF7] mb-6">انتخاب بازی جهت ارزیابی مسیر</h2>

            {/* Game Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#26364D]/60 no-scrollbar">
              {GAMES_DIRECTORY.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setActiveGame(game)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[44px] ${
                    activeGame.id === game.id
                      ? 'bg-[#F5A65B] text-[#0B1220] shadow-[0_0_20px_rgba(245,166,91,0.3)]'
                      : 'bg-[#0B1220] text-[#A9B7CB] hover:text-[#E6EDF7] border border-[#26364D]'
                  }`}
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>{game.title}</span>
                </button>
              ))}
            </div>

            {/* Regions comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full text-start text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#26364D] text-[#64748B] font-mono">
                    <th className="py-3 px-4 text-start">سرور / ریجن بازی</th>
                    <th className="py-3 px-4 text-center">پینگ استاندارد</th>
                    <th className="py-3 px-4 text-center">پینگ نتا (بهینه‌شده)</th>
                    <th className="py-3 px-4 text-center">جیتر (نوسان)</th>
                    <th className="py-3 px-4 text-center">پکت‌لاس</th>
                    <th className="py-3 px-4 text-end">وضعیت رله</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#26364D]/60">
                  {activeGame.regions.map((reg) => (
                    <tr key={reg.id} className="hover:bg-[#18263B]/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-bold text-[#E6EDF7]">{reg.name}</div>
                        <div className="font-mono text-[11px] text-[#64748B]">{reg.location}</div>
                      </td>
                      <td className="py-4 px-4 text-center font-mono text-[#64748B] line-through">
                        {reg.standardPing} ms
                      </td>
                      <td className="py-4 px-4 text-center font-mono font-black text-[#F5A65B] text-base">
                        {reg.optimizedPing} ms
                      </td>
                      <td className="py-4 px-4 text-center font-mono text-[#38D9F5]">
                        ±{reg.typicalJitter} ms
                      </td>
                      <td className="py-4 px-4 text-center font-mono text-[#39C99A]">
                        {reg.packetLoss}%
                      </td>
                      <td className="py-4 px-4 text-end">
                        <Badge variant="success" size="sm" dot>
                          عملیاتی
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#0B1220] border border-[#26364D] text-xs text-[#A9B7CB] leading-[1.8] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#F5A65B] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#E6EDF7]">شفافیت فنی و بدون اغراق:</span> پینگ نهایی شما بستگی به کیفیت فیزیکی سیم‌کشی مخابرات و فاصله شهر شما تا لبه‌های تهران دارد. نتا مسیر خارجی تا سرور بازی را با کوتاه‌ترین فیبر ترانزیت تثبیت می‌کند تا جیتر و مفقودی پکت‌ها به صفر میل کنند.
              </div>
            </div>
          </div>

          {/* Setup for Console & PC CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#121D30] border border-[#26364D] space-y-4">
              <h3 className="text-xl font-bold text-[#E6EDF7]">تنظیم روی PC و لپ‌تاپ</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.75]">
                برای ویندوز می‌توانید با یک کلیک از اپلیکیشن سبک نتا استفاده کنید تا فقط ترافیک فایل اجرایی بازی از مسیر اختصاصی عبور کند.
              </p>
              <Link href="/app/setup">
                <Button variant="outline" size="sm">
                  دریافت نسخه ویندوز
                </Button>
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-[#121D30] border border-[#26364D] space-y-4">
              <h3 className="text-xl font-bold text-[#E6EDF7]">تنظیم روی پلی‌استیشن و ایکس‌باکس</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.75]">
                بدون نیاز به نرم‌افزار، تنها با وارد کردن آی‌پی‌های اختصاصی در منوی تنظیمات شبکه کنسول یا روتر خانگی.
              </p>
              <Link href="/help">
                <Button variant="gaming" size="sm">
                  مشاهده راهنمای تصویری کنسول
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
