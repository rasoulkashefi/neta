'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { User, Shield, Key, Bell, Save } from 'lucide-react';

export default function AppSettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="pb-4 border-b border-[#26364D]/60">
        <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
          تنظیمات حساب کاربری
        </h1>
        <p className="text-xs text-[#A9B7CB] mt-1">
          مدیریت اطلاعات هویتی، رمز عبور، امنیت دومرحله‌ای و کلیدهای API
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Card */}
        <div className="p-6 rounded-3xl bg-[#121D30] border border-[#26364D] space-y-4">
          <h2 className="text-base font-bold text-[#E6EDF7] flex items-center gap-2">
            <User className="w-5 h-5 text-[#38D9F5]" />
            <span>مشخصات فردی</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="نام کامل یا مستعار" defaultValue="کاربر حرفه‌ای نتا" />
            <Input label="نشانی ایمیل" defaultValue="user@neta.land" disabled />
          </div>
        </div>

        {/* Security Card */}
        <div className="p-6 rounded-3xl bg-[#121D30] border border-[#26364D] space-y-4">
          <h2 className="text-base font-bold text-[#E6EDF7] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#39C99A]" />
            <span>امنیت و ورود</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input type="password" label="تغییر کلمه عبور فعلی" placeholder="••••••••" />
            <Input type="password" label="کلمه عبور جدید" placeholder="••••••••" />
          </div>

          <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-[#E6EDF7]">احراز هویت دو مرحله‌ای (2FA)</div>
              <p className="text-xs text-[#A9B7CB] mt-0.5">محافظت با Google Authenticator یا اپلیکیشن‌های TOTP</p>
            </div>
            <Badge variant="success" size="sm">فعال</Badge>
          </div>
        </div>

        {/* API Access Card */}
        <div className="p-6 rounded-3xl bg-[#121D30] border border-[#26364D] space-y-4">
          <h2 className="text-base font-bold text-[#E6EDF7] flex items-center gap-2">
            <Key className="w-5 h-5 text-[#8B7CFF]" />
            <span>کلید دسترسی API برنامه نتا</span>
          </h2>

          <div className="p-3 bg-[#0B1220] rounded-xl border border-[#26364D] font-mono text-xs flex items-center justify-between">
            <span className="text-[#8B7CFF] select-all">neta_live_948f20b4a18ce019</span>
            <Button variant="outline" size="sm" type="button">
              تولید مجدد
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit" variant="primary" size="md" leftIcon={<Save className="w-4 h-4" />}>
            ذخیره تغییرات
          </Button>
          {saved && (
            <span className="text-xs font-bold text-[#39C99A] animate-in fade-in">
              تنظیمات با موفقیت ذخیره شد!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
