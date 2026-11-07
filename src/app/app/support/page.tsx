'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { LifeBuoy, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function AppSupportPage() {
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('access');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8">
      <div className="pb-4 border-b border-[#26364D]/60">
        <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
          مرکز پشتیبانی فنی و تیکت‌ها
        </h1>
        <p className="text-xs text-[#A9B7CB] mt-1">
          پاسخ‌گویی مستقیم مهندسان شبکه نتا به سوالات و مشکلات اتصال شما
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Ticket Form */}
        <div className="md:col-span-7 bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#E6EDF7] mb-6">ثبت درخواست جدید</h2>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#0B1220] border border-[#39C99A] text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#39C99A] mx-auto" />
              <h3 className="text-base font-bold text-[#E6EDF7]">تیکت شما با موفقیت ثبت گردید</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                شماره پیگیری: <span className="font-mono text-[#38D9F5]">#TK-93821</span> • پاسخ پشتیبانی تا کمتر از ۲۰ دقیقه دیگر به ایمیل شما ارسال خواهد شد.
              </p>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                ثبت تیکت دیگر
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="موضوع درخواست"
                placeholder="مثلا: اختلال در دسترسی به کلود یا نوسان پینگ والورانت"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#A9B7CB]">دسته‌بندی موضوع:</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#0B1220] border border-[#26364D] rounded-xl px-4 py-2.5 text-xs text-[#E6EDF7] focus:outline-none focus:border-[#38D9F5]"
                >
                  <option value="access">دسترسی به سرویس‌ها (Access)</option>
                  <option value="dns">تنظیمات و سرعت DNS</option>
                  <option value="gaming">پینگ و رله گیمینگ</option>
                  <option value="billing">اشتراک و صورت‌حساب</option>
                  <option value="other">پیشنهاد یا سایر موارد</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#A9B7CB]">شرح کامل مشکل:</label>
                <textarea
                  rows={4}
                  placeholder="لطفا نام سیستم‌عامل، اپراتور اینترنت (همراه‌اول، ایرانسل، شاتل...) و پیام خطای دریافتی را شرح دهید..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0B1220] border border-[#26364D] rounded-xl p-3 text-xs text-[#E6EDF7] placeholder-[#64748B] focus:outline-none focus:border-[#38D9F5]"
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="md" leftIcon={<Send className="w-4 h-4" />}>
                ارسال تیکت پشتیبانی
              </Button>
            </form>
          )}
        </div>

        {/* Existing Tickets Overview */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-[#121D30] border border-[#26364D] space-y-4">
            <h3 className="text-sm font-bold text-[#E6EDF7]">تیکت‌های اخیر شما</h3>
            <div className="p-4 rounded-xl bg-[#0B1220] border border-[#26364D] text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#38D9F5]">#TK-8102</span>
                <Badge variant="success" size="sm">پاسخ داده شده</Badge>
              </div>
              <div className="font-bold text-[#E6EDF7]">افزودن رجیستری Quay.io به داکر</div>
              <div className="text-[11px] text-[#A9B7CB]">دامنه اعتبارسنجی شد و به لیست اضافه گردید.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
