import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Lock, EyeOff, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'سیاست حفظ حریم خصوصی — نتا | Neta.land',
  description: 'تعهدات شفاف نتا پیرامون عدم ذخیره تاریخچه درخواست‌های DNS، بهینه‌سازی ترافیک و به حداقل رساندن داده‌های دریافتی.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="cyan" size="md" dot>حریم خصوصی مبتنی بر طراحی (Privacy by Design)</Badge>
            <h1 className="text-3xl sm:text-4xl font-black text-[#E6EDF7] tracking-tight leading-[1.32] mt-4 mb-4">
              سیاست حفظ حریم خصوصی نتا
            </h1>
            <p className="text-sm sm:text-base text-[#A9B7CB] max-w-xl mx-auto leading-[1.8]">
              ما باور داریم که ابزار شبکه باید بدون چشم‌داشت به داده‌های شخصی و رفتار وب‌گردی کاربران کار کند.
            </p>
          </div>

          <div className="space-y-8 bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 text-xs sm:text-sm text-[#A9B7CB] leading-[1.85]">
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#E6EDF7] flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-[#38D9F5]" />
                <span>۱. تعهد عدم ذخیره سوابق DNS (No Query Logs Policy)</span>
              </h2>
              <p>
                سرورهای DNS نتا هیچ‌گونه تاریخچه‌ای از دامنه‌هایی که سیستم شما درخواست می‌کند ذخیره نمی‌کنند. داده‌های کوئری صرفاً در حافظه موقت (RAM) پردازش شده و پس از بازگرداندن پاسخ نشانی آی‌پی به طور کامل از بین می‌روند.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-[#26364D]/60">
              <h2 className="text-base sm:text-lg font-bold text-[#E6EDF7] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#39C99A]" />
                <span>۲. رمزنگاری ترافیک (DoH و TLS 1.3)</span>
              </h2>
              <p>
                در پروتکل‌های رمزنگاری‌شده نظیر DNS-over-HTTPS و DNS-over-TLS، ارتباط میان دستگاه شما و نودهای Anycast ما با کلیدهای امنیتی معتبر رمزنگاری می‌شود تا هیچ ارائه‌دهنده اینترنت یا ناظر میان‌راهی نتواند محتوای درخواست‌ها را بازرسی کند.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-[#26364D]/60">
              <h2 className="text-base sm:text-lg font-bold text-[#E6EDF7] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#8B7CFF]" />
                <span>۳. داده‌هایی که جمع‌آوری می‌شوند (حداقل داده فنی)</span>
              </h2>
              <p>
                تنها اطلاعاتی که جهت حفظ پایداری و امنیت شبکه تجمیع می‌گردند عبارتند از:
              </p>
              <ul className="list-disc ps-5 space-y-1">
                <li>آمار تجمیعی تعداد کل کوئری‌های در ثانیه (QPS) بدون انتساب به هویت فردی.</li>
                <li>زمان تاخیر گره‌های بین‌المللی جهت توزیع بار متوازن BGP Anycast.</li>
                <li>نشانی ایمیل حساب کاربری جهت مدیریت اشتراک و احراز هویت در پنل کاربری.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-6 border-t border-[#26364D]/60">
              <h2 className="text-base sm:text-lg font-bold text-[#E6EDF7]">
                ۴. عدم فروش یا واگذاری اطلاعات به اشخاص ثالث
              </h2>
              <p>
                نتا هیچ‌گونه داده‌ای را به شرکت‌های تبلیغاتی، ردیاب‌های تجاری یا نهادهای ثالث نمی‌فروشد و اجاره نمی‌دهد. مدل درآمدی نتا صرفاً متکی بر اشتراک مستقیم کاربران است.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
