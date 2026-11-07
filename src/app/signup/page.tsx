'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Lock, Mail, User, ArrowUpLeft, Check } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    router.push('/app/setup');
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

      {/* Signup Card */}
      <div className="max-w-md w-full mx-auto my-8">
        <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-6">
            <Badge variant="cyan" size="sm" dot>شروع در چند ثانیه</Badge>
            <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight mt-2">ساخت حساب کاربری</h1>
            <p className="text-xs text-[#A9B7CB] mt-1.5">
              آزمایش رایگان DNS و بررسی سازگاری سرویس‌ها بدون نیاز به کارت بانکی
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              label="نام یا نام مستعار"
              placeholder="مثلا: علی یا سارا"
              value={name}
              onChange={(e) => setName(e.target.value)}
              rightIcon={<User className="w-4 h-4" />}
              required
            />

            <Input
              type="email"
              label="آدرس ایمیل"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              rightIcon={<Mail className="w-4 h-4" />}
              required
            />

            <Input
              type="password"
              label="کلمه عبور انتخابی (حداقل ۸ نویسه)"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightIcon={<Lock className="w-4 h-4" />}
              required
            />

            <div className="text-xs text-[#A9B7CB] leading-[1.6]">
              با ثبت‌نام،{' '}
              <Link href="/terms" className="text-[#38D9F5] hover:underline">شرایط استفاده</Link>
              {' '}و{' '}
              <Link href="/privacy" className="text-[#38D9F5] hover:underline">سیاست حفظ حریم خصوصی</Link>
              {' '}را می‌پذیرید.
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-4"
              isLoading={loading}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              شروع رایگان و راه‌اندازی
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#26364D]/60 text-center text-xs text-[#A9B7CB]">
            <span>قبلا ثبت‌نام کرده‌اید؟</span>{' '}
            <Link href="/login" className="text-[#38D9F5] font-bold hover:underline">
              ورود به حساب
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#64748B]">
        تضمین عدم ذخیره لاگ کوئری‌های کاربری • neta.land
      </div>
    </div>
  );
}
