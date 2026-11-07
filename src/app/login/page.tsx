'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Lock, Mail, ArrowUpLeft, AlertCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/app';
  const urlError = searchParams.get('error');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    urlError === 'auth-code-error' ? 'لینک تایید منقضی شده یا نامعتبر است. لطفا دوباره تلاش کنید.' : null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const supabase = createClient();

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      // Mock fallback for preview/testing when backend env is not yet injected
      await new Promise((r) => setTimeout(r, 600));
      setLoading(false);
      router.push(redirectTo);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          setErrorMessage('ایمیل یا کلمه عبور وارد شده صحیح نیست.');
        } else if (error.message.includes('Email not confirmed')) {
          setErrorMessage('لطفا ابتدا ایمیل ارسالی برای تایید حساب را باز کنید.');
        } else {
          setErrorMessage(error.message);
        }
        setLoading(false);
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      setErrorMessage('خطایی در برقراری ارتباط با سرور رخ داد.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">ورود به حساب کاربری</h1>
        <p className="text-xs text-[#A9B7CB] mt-2">
          برای مدیریت تنظیمات DNS، دسترسی به سرویس‌ها، رله‌های گیمینگ و درگاه AI
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-3.5 rounded-xl bg-[#FF4D4D]/10 border border-[#FF4D4D]/30 flex items-start gap-2.5 text-xs text-[#FF8585]">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span className="leading-relaxed">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          label="ایمیل کاربری"
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
          leftIcon={<ArrowLeft className="w-4 h-4 shrink-0" />}
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
  );
}

export default function LoginPage() {
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

      {/* Login Card with Suspense for useSearchParams */}
      <div className="max-w-md w-full mx-auto my-12">
        <Suspense fallback={<div className="bg-[#121D30] border border-[#26364D] rounded-3xl p-10 text-center text-sm text-[#A9B7CB]">در حال بارگذاری فرم...</div>}>
          <LoginForm />
        </Suspense>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#64748B]">
        حفظ حریم خصوصی با معماری عدم ذخیره لاگ • پلتفرم دیجیتال neta.land
      </div>
    </div>
  );
}
