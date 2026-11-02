'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GAMES_DIRECTORY } from '@/lib/mockData';
import { Gamepad2, Server, Check, ArrowLeft, Activity } from 'lucide-react';

export default function AppGamingDashboardPage() {
  const [selectedGame, setSelectedGame] = useState(GAMES_DIRECTORY[0]);

  return (
    <div className="space-y-8">
      <div className="pb-4 border-b border-[#26364D]/60">
        <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
          بهینه‌سازی روتینگ بازی‌های آنلاین
        </h1>
        <p className="text-xs text-[#A9B7CB] mt-1">
          انتخاب رله‌های پرسرعت جهت هدایت مستقیم بسته‌های UDP به سرورهای رسمی بازی
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Game list */}
        <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 space-y-2">
          <h2 className="text-xs font-mono uppercase text-[#A9B7CB] mb-4">بازی‌های پشتیبانی‌شده:</h2>
          {GAMES_DIRECTORY.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className={`w-full p-3.5 rounded-xl border text-start flex items-center justify-between transition-all cursor-pointer ${
                selectedGame.id === game.id
                  ? 'bg-[#18263B] border-[#F5A65B] text-[#F5A65B]'
                  : 'bg-[#0B1220] border-[#26364D] hover:border-[#F5A65B]/40 text-[#E6EDF7]'
              }`}
            >
              <span className="text-sm font-bold">{game.title}</span>
              <span className="text-xs font-mono">{game.regions.length} ریجن</span>
            </button>
          ))}
        </div>

        {/* Selected Game Regions */}
        <div className="md:col-span-2 bg-[#121D30] border border-[#F5A65B]/30 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#26364D]/60">
            <div>
              <h2 className="text-lg font-bold text-[#E6EDF7]">{selectedGame.title}</h2>
              <span className="text-xs text-[#A9B7CB]">{selectedGame.notes}</span>
            </div>
            <Badge variant="amber" size="sm">UDP Relay Active</Badge>
          </div>

          <div className="space-y-3">
            {selectedGame.regions.map((reg) => (
              <div
                key={reg.id}
                className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-bold text-[#E6EDF7]">{reg.name}</div>
                  <div className="text-xs font-mono text-[#64748B]">{reg.location}</div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-end">
                    <span className="font-mono text-base font-bold text-[#39C99A]">{reg.optimizedPing} ms</span>
                    <span className="text-[10px] text-[#A9B7CB] block">جیتر: ±{reg.typicalJitter}ms</span>
                  </div>
                  <Badge variant="success" size="sm" dot>پایدار</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
