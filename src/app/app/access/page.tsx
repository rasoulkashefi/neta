'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { SUPPORTED_SERVICES } from '@/lib/mockData';
import { Search, Globe, Check, AlertCircle, ToggleLeft, ToggleRight } from 'lucide-react';

export default function AppAccessPage() {
  const [search, setSearch] = useState('');
  const [serviceStates, setServiceStates] = useState<Record<string, boolean>>({
    claude: true,
    chatgpt: true,
    figma: true,
    docker: true,
    github: true,
    spotify: false,
    discord: true,
    steam: true,
  });

  const toggle = (id: string) => {
    setServiceStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = SUPPORTED_SERVICES.filter(
    (s) => s.name.toLowerCase().includes(search.toLowerCase()) || s.persianName.includes(search)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#26364D]/60">
        <div>
          <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
            مدیریت سرویس‌های مجاز (Access)
          </h1>
          <p className="text-xs text-[#A9B7CB] mt-1">
            فعال یا غیرفعال‌سازی اختصاصی پروکسی معکوس لایه ۷ برای هر یک از دامنه‌ها
          </p>
        </div>

        <div className="w-full sm:w-64">
          <Input
            type="text"
            placeholder="فیلتر سرویس..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            rightIcon={<Search className="w-4 h-4" />}
          />
        </div>
      </div>

      <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 divide-y divide-[#26364D]/60">
        {filtered.map((svc) => {
          const isEnabled = serviceStates[svc.id] ?? false;
          return (
            <div key={svc.id} className="py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#8B7CFF]/15 text-[#8B7CFF] flex items-center justify-center font-bold text-xs">
                  {svc.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#E6EDF7]">{svc.name}</span>
                    <Badge variant={svc.status === 'supported' ? 'success' : 'warning'} size="sm">
                      {svc.statusLabel}
                    </Badge>
                  </div>
                  <div className="text-xs text-[#A9B7CB] font-mono mt-0.5">
                    {svc.endpoint} • {svc.protocols.join(', ')}
                  </div>
                </div>
              </div>

              <button
                onClick={() => toggle(svc.id)}
                className={`p-1.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  isEnabled
                    ? 'bg-[#39C99A]/15 border-[#39C99A]/40 text-[#39C99A]'
                    : 'bg-[#18263B] border-[#26364D] text-[#64748B]'
                }`}
              >
                <span>{isEnabled ? 'فعال' : 'غیرفعال'}</span>
                {isEnabled ? (
                  <ToggleRight className="w-5 h-5 text-[#39C99A]" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-[#64748B]" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
