import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { POP_NODES, INCIDENT_REPORTS } from '@/lib/mockData';
import { Activity, Server, ShieldCheck, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export const metadata = {
  title: 'وضعیت زنده شبکه و گره‌ها — نتا | Neta.land',
  description: 'داشبورد مانیتورینگ سلامت زیرساخت، آپ‌تایم نودهای Anycast، وضعیت سرورهای گیمینگ و سوابق شفاف حوادث شبکه نتا.',
};

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Status Banner */}
          <div className="bg-[#121D30] border border-[#39C99A]/50 rounded-3xl p-8 mb-12 shadow-[0_0_50px_-15px_rgba(57,201,154,0.2)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#39C99A]/20 border border-[#39C99A]/50 flex items-center justify-center text-[#39C99A]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-[#E6EDF7]">
                    کلیه سامانه‌ها عملیاتی و پایدار هستند
                  </h1>
                  <p className="text-xs text-[#A9B7CB] mt-1">
                    آخرین بروزرسانی وضعیت: هم‌اکنون • نرخ پایداری ماهانه ۹۹.۹۴٪
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <Badge variant="success" size="md" dot>
                  Uptime 99.94%
                </Badge>
              </div>
            </div>
          </div>

          {/* Individual PoP Nodes Status */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#E6EDF7]">وضعیت پاپ‌سایت‌های بین‌المللی (PoP Nodes)</h2>
              <span className="text-xs font-mono text-[#64748B]">BGP Anycast Routing</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {POP_NODES.map((node) => (
                <div
                  key={node.id}
                  className="bg-[#121D30] border border-[#26364D] rounded-2xl p-6 space-y-4 hover:border-[#38D9F5]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#E6EDF7]">{node.city}</h3>
                      <span className="text-xs text-[#A9B7CB]">{node.name}</span>
                    </div>
                    <Badge variant="success" size="sm" dot>
                      {node.statusText}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    <div className="p-3 bg-[#0B1220] rounded-xl border border-[#26364D]">
                      <span className="text-[#64748B] block mb-1">تاخیر RTT:</span>
                      <span className="text-base font-bold text-[#38D9F5]">{node.latencyMs} ms</span>
                    </div>
                    <div className="p-3 bg-[#0B1220] rounded-xl border border-[#26364D]">
                      <span className="text-[#64748B] block mb-1">بار مصرفی:</span>
                      <span className="text-base font-bold text-[#39C99A]">{node.loadPercentage}%</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#26364D]/60 flex items-center justify-between text-[11px] text-[#A9B7CB]">
                    <span>سرویس‌ها:</span>
                    <div className="flex items-center gap-2 font-mono">
                      <span className={node.services.dns ? 'text-[#38D9F5]' : 'text-[#64748B]'}>DNS</span>
                      <span>•</span>
                      <span className={node.services.access ? 'text-[#8B7CFF]' : 'text-[#64748B]'}>Access</span>
                      <span>•</span>
                      <span className={node.services.gamingRelay ? 'text-[#F5A65B]' : 'text-[#64748B]'}>Gaming</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Incident History Log */}
          <div id="incidents" className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 mb-16">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#26364D]/80">
              <div>
                <h2 className="text-xl font-bold text-[#E6EDF7]">تاریخچه حوادث و اختلالات گذشته</h2>
                <p className="text-xs text-[#A9B7CB] mt-1">شفافیت کامل در ثبت اختلالات ترانزیت اینترنت بین‌المللی</p>
              </div>
              <Badge variant="neutral" size="sm">۳۰ روز اخیر</Badge>
            </div>

            <div className="space-y-6">
              {INCIDENT_REPORTS.map((inc) => (
                <div key={inc.id} className="p-6 rounded-2xl bg-[#0B1220] border border-[#26364D] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#64748B]">{inc.date}</span>
                      <Badge variant="success" size="sm">
                        {inc.statusText}
                      </Badge>
                    </div>
                    <span className="text-xs font-mono text-[#39C99A]">مدت رفع: {inc.resolutionTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#E6EDF7]">{inc.title}</h3>
                  <p className="text-xs text-[#A9B7CB] leading-[1.75]">{inc.description}</p>

                  <div className="pt-3 border-t border-[#26364D]/60 flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748B]">
                    <span>بخش‌های تحت تاثیر: {inc.affected.join(', ')}</span>
                    <span>•</span>
                    <span className="text-[#F5B84C]">اثر: {inc.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
