'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  KeyRound,
  Plus,
  Copy,
  Check,
  Trash2,
  ShieldCheck,
  X
} from 'lucide-react';

interface MockKey {
  id: string;
  name: string;
  keyPrefix: string;
  env: 'Production' | 'Staging' | 'Development';
  createdAt: string;
  lastUsed: string;
  spendLimit: string;
  status: 'active' | 'revoked';
}

const INITIAL_KEYS: MockKey[] = [
  {
    id: 'key-1',
    name: 'Main Web App (FastAPI)',
    keyPrefix: 'neta_live_7d9e4a3b8c...',
    env: 'Production',
    createdAt: '۱۴۰۴/۱۱/۰۱',
    lastUsed: '۱۰ دقیقه پیش',
    spendLimit: '۵۰ دلار',
    status: 'active'
  },
  {
    id: 'key-2',
    name: 'Local Dev & Testing',
    keyPrefix: 'neta_test_1f8c2b9a4d...',
    env: 'Development',
    createdAt: '۱۴۰۴/۱۱/۰۵',
    lastUsed: 'دیروز',
    spendLimit: '۱۰ دلار',
    status: 'active'
  }
];

export default function AppAIKeysPage() {
  const [keys, setKeys] = useState<MockKey[]>(INITIAL_KEYS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyEnv, setNewKeyEnv] = useState<'Production' | 'Development'>('Production');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName.trim()) return;

    const newKey: MockKey = {
      id: `key-${Date.now()}`,
      name: newKeyName,
      keyPrefix: `neta_live_${Math.random().toString(36).substring(2, 10)}...`,
      env: newKeyEnv,
      createdAt: 'امروز',
      lastUsed: 'استفاده‌نشده',
      spendLimit: '۲۰ دلار',
      status: 'active'
    };

    setKeys([newKey, ...keys]);
    setNewKeyName('');
    setIsModalOpen(false);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRevoke = (id: string) => {
    setKeys(keys.map(k => k.id === id ? { ...k, status: 'revoked' } : k));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#26364D]/60">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#E6EDF7] tracking-tight">
            مدیریت کلیدهای API هوش مصنوعی
          </h1>
          <p className="text-xs sm:text-sm text-[#A9B7CB] mt-1">
            ایجاد، محدودسازی سقف هزینه و ابطال کلیدهای دسترسی پروژه‌ها و برنامه‌های شما.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => setIsModalOpen(true)}
          leftIcon={<Plus className="w-4 h-4" />}
        >
          ساخت کلید جدید
        </Button>
      </div>

      {/* Security Info Banner */}
      <div className="p-4 rounded-2xl bg-[#121D30] border border-[#8B7CFF]/30 flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-[#8B7CFF] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <div className="font-bold text-[#E6EDF7]">
            نکات امنیتی کلیدهای نتا
          </div>
          <p className="text-[#A9B7CB] leading-[1.75]">
            کلیدهای دسترسی اختصاصی شما اجازه فراخوانی مدل‌های هوش مصنوعی و کسر از شارژ حساب را دارند. هرگز کلیدها را در کدهای فرانت‌اند (کلاینت) یا مخازن عمومی گیت‌هاب قرار ندهید. همیشه از متغیرهای محیطی سمت سرور (<code className="text-[#38D9F5]">process.env</code>) استفاده کنید.
          </p>
        </div>
      </div>

      {/* Keys Table */}
      <div className="bg-[#121D30] border border-[#26364D] rounded-2xl overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#26364D] flex items-center justify-between">
          <span className="text-xs font-bold text-[#E6EDF7]">
            کلیدهای ایجادشده ({keys.length})
          </span>
          <span className="text-[11px] text-[#A9B7CB]">محیط پیش‌نمایش رابط کاربری</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead>
              <tr className="border-b border-[#26364D] bg-[#0E1726] text-[#A9B7CB]">
                <th className="py-3 px-4 font-bold">نام کلید و برچسب</th>
                <th className="py-3 px-4 font-bold">پیشوند کلید</th>
                <th className="py-3 px-4 font-bold">محیط</th>
                <th className="py-3 px-4 font-bold">تاریخ ساخت</th>
                <th className="py-3 px-4 font-bold">آخرین فعالیت</th>
                <th className="py-3 px-4 font-bold">سقف ماهانه</th>
                <th className="py-3 px-4 font-bold text-center">وضعیت</th>
                <th className="py-3 px-4 font-bold text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#26364D]/60 text-[#E6EDF7]">
              {keys.map((k) => (
                <tr key={k.id} className="hover:bg-[#18263B]/40 transition-colors">
                  <td className="py-3 px-4 font-bold">{k.name}</td>
                  <td className="py-3 px-4 font-mono text-[#38D9F5]">{k.keyPrefix}</td>
                  <td className="py-3 px-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18263B] text-[#A9B7CB]">
                      {k.env}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[#A9B7CB] font-mono">{k.createdAt}</td>
                  <td className="py-3 px-4 text-[#A9B7CB]">{k.lastUsed}</td>
                  <td className="py-3 px-4 font-bold text-[#39C99A]">{k.spendLimit}</td>
                  <td className="py-3 px-4 text-center">
                    <Badge variant={k.status === 'active' ? 'success' : 'danger'} size="sm" dot>
                      {k.status === 'active' ? 'فعال' : 'باطل‌شده'}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(k.id, k.keyPrefix)}
                        title="کپی پیشوند کلید"
                        className="px-2"
                      >
                        {copiedId === k.id ? <Check className="w-3.5 h-3.5 text-[#39C99A]" /> : <Copy className="w-3.5 h-3.5" />}
                      </Button>
                      {k.status === 'active' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRevoke(k.id)}
                          title="ابطال کلید"
                          className="px-2 text-[#F16D7A] hover:bg-[#F16D7A]/10"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Key Modal (Frontend Simulation) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080E18]/80 backdrop-blur-sm animate-in fade-in-50 duration-150">
          <div className="w-full max-w-md bg-[#0E1726] border border-[#26364D] rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#26364D]">
              <h3 className="text-base font-bold text-[#E6EDF7] flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-[#8B7CFF]" />
                <span>ساخت کلید API جدید</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#A9B7CB] hover:text-[#E6EDF7] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateKey} className="space-y-4 text-start">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#A9B7CB]">نام یا شناسه کلید</label>
                <input
                  type="text"
                  required
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="مثلاً: Backend Chatbot v2"
                  className="w-full bg-[#121D30] border border-[#26364D] focus:border-[#38D9F5] rounded-xl px-3.5 py-2.5 text-xs text-[#E6EDF7] placeholder-[#A9B7CB]/60 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#A9B7CB]">محیط استقرار</label>
                <select
                  value={newKeyEnv}
                  onChange={(e) => setNewKeyEnv(e.target.value as 'Production' | 'Development')}
                  className="w-full bg-[#121D30] border border-[#26364D] focus:border-[#38D9F5] rounded-xl px-3.5 py-2.5 text-xs text-[#E6EDF7] focus:outline-none"
                >
                  <option value="Production">Production (عملیاتی)</option>
                  <option value="Development">Development (آزمایشی)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#A9B7CB]">سقف هزینه ماهانه (Spend Limit)</label>
                <input
                  type="text"
                  defaultValue="$25 (حدود ۱.۶ میلیون تومان)"
                  className="w-full bg-[#121D30] border border-[#26364D] rounded-xl px-3.5 py-2.5 text-xs text-[#E6EDF7] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  انصراف
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                >
                  تولید و ثبت کلید
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
