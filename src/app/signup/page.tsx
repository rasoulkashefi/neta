'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Lock, Mail, User, ArrowUpLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successSent, setSuccessSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const supabase = createClient();

    // Check if Supabase backend is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      await new Promise((r) => setTimeout(r, 600));
      setLoading(false);
      router.push('/app/setup');
      return;
    }

    try {
      const origin = window.location.origin;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
          emailRedirectTo: `${origin}/auth/callback`,
        },
      });

      if (error) {
        if (error.message.includes('User already registered')) {
          setErrorMessage('این ایمیل قبلاً ثبت شده است. لطفاً وارد شوید.');
        } else if (error.message.includes('Password should be at least')) {
          setErrorMessage('رمز عبور باید حداقل ۶ نویسه باشد.');
        } else {
          setErrorMessage(error.message);
        }
        setLoading(false);
        return;
      }

      // If Supabase requires email confirmation and user is not immediately authenticated:
      if (data?.user && !data?.session) {
        setSuccessSent(true);
        setLoading(false);
        return;
      }

      // Session established immediately
      router.push('/app/setup');
      router.refresh();
    } catch {
      setErrorMessage('خطایی در ارتباط با سرور رخ داد.');
      setLoading(false);
    }
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
          {successSent ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#00E5A3]/10 border border-[#00E5A3]/30 flex items-center justify-center text-[#00E5A3]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-black text-[#E6EDF7]">ایمیل تایید ارسال شد</h2>
              <p className="text-xs text-[#A9B7CB] mt-2.5 leading-relaxed">
                یک لینک فعال‌سازی به آدرس <span className="font-mono text-[#38D9F5] dir-ltr inline-block">{email}</span> ارسال کردیم. روی لینک کلیک کنید تا حساب شما فوراً فعال شود.
              </p>
              <div className="mt-8 pt-6 border-t border-[#26364D]/60">
                <Link href="/login">
                  <Button variant="secondary" size="md" className="w-full">
                    رفتن به صفحه ورود
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <Badge variant="cyan" size="sm" dot>شروع در چند ثانیه</Badge>
                <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight mt-2">ساخت حساب کاربری</h1>
                <p className="text-xs text-[#A9B7CB] mt-1.5">
                  دسترسی به سرویس‌های شبکه، درگاه یکپارچه AI و زیرساخت‌های ابری نتا
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
                  leftIcon={<ArrowLeft className="w-4 h-4 shrink-0" />}
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
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#64748B]">
        تضمین عدم ذخیره لاگ کوئری‌های کاربری • neta.land
      </div>
    </div>
  );
}
