'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GAMES_DIRECTORY } from '@/lib/mockData';
import { Gamepad2, ArrowLeft, Zap, ShieldAlert, CheckCircle2, Server, Activity } from 'lucide-react';

export function GamingSection() {
  const [selectedGameId, setSelectedGameId] = useState('valorant');
  const activeGame = GAMES_DIRECTORY.find((g) => g.id === selectedGameId) || GAMES_DIRECTORY[0];
  const [selectedRegionId, setSelectedRegionId] = useState(activeGame.regions[0]?.id || '');

  // Keep region in sync when game switches
  const currentRegion =
    activeGame.regions.find((r) => r.id === selectedRegionId) || activeGame.regions[0];

  const handleGameSelect = (gameId: string) => {
    setSelectedGameId(gameId);
    const game = GAMES_DIRECTORY.find((g) => g.id === gameId);
    if (game && game.regions.length > 0) {
      setSelectedRegionId(game.regions[0].id);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center mb-3">
            <Badge variant="amber" size="sm" dot>
              پایداری Sub-tick و جبران پکت‌های UDP
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.32]">
            هر میلی‌ثانیه مهمه.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
            کیفیت اتصال رو بسنج و ببین چه بهینه‌سازی‌هایی برای مسیر بازی تو امکان‌پذیره. نتا با روتینگ مستقیم و عبور از گلوگاه‌ها، پینگ و جیتر بازی شما را تثبیت می‌کند.
          </p>
        </div>

        {/* Interactive Gaming Dashboard */}
        <div className="bg-[#0E1726] border border-[#26364D] rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Game Selectors as Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#26364D]/60 no-scrollbar">
            {GAMES_DIRECTORY.map((game) => (
              <button
                key={game.id}
                onClick={() => handleGameSelect(game.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[44px] ${
                  selectedGameId === game.id
                    ? 'bg-[#F5A65B] text-[#0B1220] shadow-[0_0_20px_rgba(245,166,91,0.3)]'
                    : 'bg-[#121D30] text-[#A9B7CB] hover:text-[#E6EDF7] border border-[#26364D]'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>{game.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Server Region Selector & Technical Notes */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-[#A9B7CB] mb-3">
                  انتخاب ریجن سرور بازی:
                </h4>
                <div className="space-y-2">
                  {activeGame.regions.map((reg) => (
                    <button
                      key={reg.id}
                      onClick={() => setSelectedRegionId(reg.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-start transition-all cursor-pointer ${
                        currentRegion.id === reg.id
                          ? 'bg-[#18263B] border-[#F5A65B]/60 shadow-sm'
                          : 'bg-[#121D30] border-[#26364D] hover:border-[#F5A65B]/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Server className="w-4 h-4 text-[#F5A65B]" />
                        <div>
                          <div className="text-sm font-bold text-[#E6EDF7]">{reg.name}</div>
                          <div className="text-xs font-mono text-[#64748B]">{reg.location}</div>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="text-xs font-mono text-[#39C99A] font-bold">
                          ~{reg.optimizedPing} ms
                        </span>
                        <div className="text-[10px] text-[#A9B7CB]">مسیر بهینه</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Note */}
              <div className="p-4 rounded-xl bg-[#121D30] border border-[#26364D] text-xs text-[#A9B7CB] leading-[1.75]">
                <div className="font-semibold text-[#E6EDF7] mb-1 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#F5A65B]" />
                  <span>تحلیل فنی مسیر:</span>
                </div>
                {activeGame.notes}
              </div>
            </div>

            {/* Right: Live Diagnostics Metrics Display */}
            <div className="lg:col-span-7 bg-[#121D30] border border-[#26364D] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#26364D]/60">
                  <div>
                    <span className="text-xs text-[#A9B7CB]">گیم انتخاب‌شده:</span>
                    <h3 className="text-xl font-black text-[#E6EDF7] tracking-tight">
                      {activeGame.title} — {currentRegion.name}
                    </h3>
                  </div>
                  <Badge variant="success" size="md" dot>
                    مسیر نتا: فعال
                  </Badge>
                </div>

                {/* Metric Boxes Comparison */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                  {/* Metric 1: Ping */}
                  <div className="bg-[#0B1220] border border-[#26364D] rounded-xl p-4 text-center">
                    <span className="text-[11px] text-[#A9B7CB] block mb-1">پینگ بهینه‌شده</span>
                    <div className="font-mono text-2xl md:text-3xl font-black text-[#F5A65B] tabular-nums">
                      {currentRegion.optimizedPing} <span className="text-xs font-normal">ms</span>
                    </div>
                    <div className="text-[10px] text-[#64748B] line-through mt-1">
                      استاندارد: {currentRegion.standardPing}ms
                    </div>
                  </div>

                  {/* Metric 2: Jitter */}
                  <div className="bg-[#0B1220] border border-[#26364D] rounded-xl p-4 text-center">
                    <span className="text-[11px] text-[#A9B7CB] block mb-1">نوسان (Jitter)</span>
                    <div className="font-mono text-2xl md:text-3xl font-black text-[#38D9F5] tabular-nums">
                      {currentRegion.typicalJitter} <span className="text-xs font-normal">ms</span>
                    </div>
                    <div className="text-[10px] text-[#39C99A] mt-1">
                      بسیار پایدار
                    </div>
                  </div>

                  {/* Metric 3: Packet Loss */}
                  <div className="bg-[#0B1220] border border-[#26364D] rounded-xl p-4 text-center">
                    <span className="text-[11px] text-[#A9B7CB] block mb-1">پکت‌لاس</span>
                    <div className="font-mono text-2xl md:text-3xl font-black text-[#39C99A] tabular-nums">
                      {currentRegion.packetLoss}%
                    </div>
                    <div className="text-[10px] text-[#39C99A] mt-1">
                      بدون ریزش
                    </div>
                  </div>
                </div>

                {/* Honesty note */}
                <p className="text-xs text-[#A9B7CB] leading-[1.7] p-3 rounded-lg bg-[#0B1220]/60 border border-[#26364D]/50">
                  <span className="font-bold text-[#F5A65B]">نکته فنی:</span> تغییر صرف دی‌ان‌اس تاخیر بازی را کاهش نمی‌دهد؛ رله اختصاصی گیمینگ نتا بسته‌های داده UDP شما را از طریق کوتاه‌ترین فیبر ترانزیت به سرور رسمی متصل می‌کند.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#26364D]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#64748B] font-mono">
                  Gateway: pop-fra.neta.land (BGP Anycast)
                </span>
                <Link href="/gaming" className="w-full sm:w-auto">
                  <Button
                    variant="gaming"
                    size="md"
                    className="w-full sm:w-auto"
                    leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}
                  >
                    تست اتصال بازی شما
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
