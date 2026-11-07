'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowDownLeft,
  ArrowUpRight,
  ShieldCheck,
  Wallet,
  Sparkles,
  Lock
} from 'lucide-react';
import { initiateTopup } from './actions';
import type { WorkspaceBalance, LedgerTransactionHistory } from '@/lib/supabase/wallet';

interface SubscriptionClientProps {
  balance: WorkspaceBalance;
  history: LedgerTransactionHistory[];
  activePlanName?: string;
}

const PRESET_AMOUNTS = [
  { value: 50000, label: '۵۰,۰۰۰ تومان' },
  { value: 100000, label: '۱۰۰,۰۰۰ تومان' },
  { value: 250000, label: '۲۵۰,۰۰۰ تومان' },
  { value: 500000, label: '۵۰۰,۰۰۰ تومان' },
];

export function SubscriptionClient({ balance, history, activePlanName = 'آزمایشی رایگان' }: SubscriptionClientProps) {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get('payment');
  const trackingCode = searchParams.get('tracking');

  const [topupOpen, setTopupOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(100000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const effectiveAmount = customAmount ? parseInt(customAmount, 10) || 0 : selectedAmount;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-4 border-b border-[#26364D]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
            مدیریت اشتراک، کیف‌پول و دفترکل مالی
          </h1>
          <p className="text-xs text-[#A9B7CB] mt-1">
            مشاهده موجودی لحظه‌ای حساب، شارژ اعتباری و تاریخچه اسناد مالی
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => setTopupOpen(true)}
          leftIcon={<Plus className="w-4 h-4 shrink-0" />}
        >
          شارژ سریع کیف‌پول
        </Button>
      </div>

      {/* Payment Success/Failure Notification */}
      {paymentStatus === 'success' && (
        <div className="p-4 rounded-2xl bg-[#00E5A3]/10 border border-[#00E5A3]/30 flex items-start gap-3 text-xs text-[#00E5A3]">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sm block">شارژ حساب با موفقیت انجام شد!</span>
            <p className="text-[#A9B7CB]">
              سند مالی به صورت خودکار در دفترکل دوطرفه ثبت گردید. کد پیگیری بانکی:{' '}
              <span className="font-mono text-[#00E5A3] font-bold">{trackingCode || 'SB-DIRECT'}</span>
            </p>
          </div>
        </div>
      )}

      {paymentStatus === 'failed' && (
        <div className="p-4 rounded-2xl bg-[#FF4D4D]/10 border border-[#FF4D4D]/30 flex items-start gap-3 text-xs text-[#FF6B6B]">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-sm block">تراکنش انجام نشد یا توسط کاربر لغو گردید.</span>
            <p className="text-[#A9B7CB] mt-0.5">هیچ مبلغی از حساب شما کسر نشده و دفتری تغییر نکرده است.</p>
          </div>
        </div>
      )}

      {/* Financial Balances Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Available Balance */}
        <div className="p-6 rounded-3xl bg-[#121D30] border border-[#38D9F5]/40 shadow-[0_10px_30px_-10px_rgba(56,217,245,0.15)] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-[#A9B7CB]">موجودی آزاد قابل استفاده</span>
            <div className="w-8 h-8 rounded-xl bg-[#38D9F5]/10 border border-[#38D9F5]/30 flex items-center justify-center text-[#38D9F5]">
              <Wallet className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#38D9F5] tracking-tight">
            {balance.available_toman.toLocaleString('fa-IR')} <span className="text-xs font-normal text-[#A9B7CB]">تومان</span>
          </div>
          <p className="text-[11px] text-[#A9B7CB] mt-2">
            آماده مصرف برای توکن‌های AI و تمدید اشتراک‌ها
          </p>
        </div>

        {/* Reserved Funds */}
        <div className="p-6 rounded-3xl bg-[#121D30] border border-[#26364D] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-[#A9B7CB]">وجوه رزرو شده (Hold)</span>
            <div className="w-8 h-8 rounded-xl bg-[#FFB020]/10 border border-[#FFB020]/30 flex items-center justify-center text-[#FFB020]">
              <Lock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#FFB020] tracking-tight">
            {balance.reserved_toman.toLocaleString('fa-IR')} <span className="text-xs font-normal text-[#A9B7CB]">تومان</span>
          </div>
          <p className="text-[11px] text-[#A9B7CB] mt-2">
            اعتبار مسدودشده برای پردازش‌های فعال و استریم‌ها
          </p>
        </div>

        {/* Total Wallet */}
        <div className="p-6 rounded-3xl bg-[#121D30] border border-[#26364D]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-[#A9B7CB]">کل دارایی دفترکل</span>
            <div className="w-8 h-8 rounded-xl bg-[#8B7CFF]/10 border border-[#8B7CFF]/30 flex items-center justify-center text-[#8B7CFF]">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#E6EDF7] tracking-tight">
            {balance.total_toman.toLocaleString('fa-IR')} <span className="text-xs font-normal text-[#A9B7CB]">تومان</span>
          </div>
          <p className="text-[11px] text-[#A9B7CB] mt-2">
            مجموع موازنه حساب‌های کاربر
          </p>
        </div>
      </div>

      {/* Topup Modal Drawer */}
      {topupOpen && (
        <div className="fixed inset-0 z-50 bg-[#070C15]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#26364D]/60 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#38D9F5]/20 text-[#38D9F5] flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#E6EDF7]">شارژ کیف‌پول نتا</h3>
              </div>
              <button
                onClick={() => setTopupOpen(false)}
                className="text-[#A9B7CB] hover:text-[#E6EDF7] text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <form action={initiateTopup} onSubmit={() => setLoading(true)} className="space-y-5">
              <div>
                <label className="block text-xs text-[#A9B7CB] mb-2.5">انتخاب مبالغ پیش‌فرض:</label>
                <div className="grid grid-cols-2 gap-2.5">
                  {PRESET_AMOUNTS.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(item.value);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                        selectedAmount === item.value && !customAmount
                          ? 'bg-[#38D9F5]/10 border-[#38D9F5] text-[#38D9F5] shadow-sm shadow-[#38D9F5]/20'
                          : 'bg-[#0E1726] border-[#26364D] text-[#A9B7CB] hover:border-[#38D9F5]/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#A9B7CB] mb-1.5">یا وارد کردن مبلغ دلخواه (تومان):</label>
                <input
                  type="number"
                  placeholder="مثلاً: 150000"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border border-[#26364D] text-sm text-[#E6EDF7] focus:outline-none focus:border-[#38D9F5] font-mono dir-ltr"
                />
              </div>

              <input type="hidden" name="amount" value={effectiveAmount} />

              <div className="p-3 rounded-xl bg-[#0B1220] border border-[#26364D]/50 text-xs text-[#A9B7CB] flex items-center justify-between">
                <span>مبلغ نهایی برای پرداخت:</span>
                <span className="font-bold text-sm text-[#38D9F5]">
                  {effectiveAmount.toLocaleString('fa-IR')} تومان
                </span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={loading}
                >
                  انتقال به درگاه پرداخت آزمایشی (سندباکس)
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Transaction History from Double-Entry Ledger */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#E6EDF7]">تاریخچه تراکنش‌ها و دفترکل مالی</h2>
          <span className="text-xs text-[#A9B7CB]">بر اساس استانداردهای بانکی و مالی</span>
        </div>

        <div className="rounded-3xl bg-[#121D30] border border-[#26364D] overflow-hidden">
          {history.length === 0 ? (
            <div className="p-12 text-center text-xs text-[#A9B7CB]">
              هنوز تراکنشی در دفترکل ثبت نشده است. با زدن دکمه «شارژ سریع کیف‌پول» اولین تراکنش را ایجاد کنید!
            </div>
          ) : (
            <div className="divide-y divide-[#26364D]/60 text-xs">
              {history.map((tx) => {
                const isCredit = tx.amount > 0;
                return (
                  <div key={tx.id} className="p-4 sm:p-5 flex items-center justify-between hover:bg-[#18263B]/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isCredit ? 'bg-[#00E5A3]/10 text-[#00E5A3] border border-[#00E5A3]/30' : 'bg-[#FF4D4D]/10 text-[#FF4D4D] border border-[#FF4D4D]/30'
                      }`}>
                        {isCredit ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div>
                        <span className="font-bold text-[#E6EDF7] block">{tx.description || 'تراکنش سیستمی'}</span>
                        <div className="flex items-center gap-2 text-[11px] text-[#64748B] mt-0.5">
                          <span>{new Date(tx.created_at).toLocaleDateString('fa-IR')}</span>
                          {tx.reference_id && (
                            <>
                              <span>•</span>
                              <span className="font-mono dir-ltr">{tx.reference_id}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-end">
                      <span className={`font-black text-sm block ${isCredit ? 'text-[#00E5A3]' : 'text-[#FF8585]'}`}>
                        {isCredit ? '+' : ''}{tx.amount.toLocaleString('fa-IR')} تومان
                      </span>
                      <span className="text-[10px] text-[#A9B7CB] font-mono">Double-Entry</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
