'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Lock, Mail, ArrowUpLeft } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    router.push('/app');
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col justify-between p-4 sm:p-8">
      {/* Top Header */}
      <div className="flex items-center justify-between max-w-5xl w-full mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#38D9F5] via-[#8B7CFF] to-[#0B1220] p-[1.5px]">
            <div className="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center">
              <span className="font-black text-sm text-[#38D9F5]">N</span>
            </div>
          </div>
          <span className="font-extrabold text-lg text-[#E6EDF7]">نتا</span>
        </Link>

        <Link href="/" className="text-xs text-[#A9B7CB] hover:text-[#38D9F5] flex items-center gap-1 font-medium">
          <span>بازگشت به سایت</span>
          <ArrowUpLeft className="w-4 h-4" />
        </Link>
      </div>

      {/* Login Card */}
      <div className="max-w-md w-full mx-auto my-12">
        <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">ورود به حساب کاربری</h1>
            <p className="text-xs text-[#A9B7CB] mt-2">
              برای مدیریت تنظیمات DNS، دسترسی به سرویس‌ها و رله‌های گیمینگ
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="ایمیل یا نام کاربری"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              rightIcon={<Mail className="w-4 h-4" />}
              required
            />

            <Input
              type="password"
              label="کلمه عبور"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightIcon={<Lock className="w-4 h-4" />}
              required
            />

            <div className="flex items-center justify-between text-xs text-[#A9B7CB] pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded bg-[#0B1220] border-[#26364D] text-[#38D9F5] focus:ring-[#38D9F5]" />
                <span>مرا به خاطر بسپار</span>
              </label>
              <a href="#" className="text-[#38D9F5] hover:underline">فراموشی رمز عبور؟</a>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-4"
              isLoading={loading}
              leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}
            >
              ورود به داشبورد
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#26364D]/60 text-center text-xs text-[#A9B7CB]">
            <span>هنوز حسابی ندارید؟</span>{' '}
            <Link href="/signup" className="text-[#38D9F5] font-bold hover:underline">
              ثبت‌نام رایگان
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#64748B]">
        اتصال امن با استاندارد TLS 1.3 • neta.land
      </div>
    </div>
  );
}
