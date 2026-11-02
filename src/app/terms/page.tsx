import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { FileText, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'شرایط و ضوابط استفاده — نتا | Neta.land',
  description: 'شرایط بهره‌برداری از خدمات پلتفرم نتا، شفافیت پیرامون محدودیت‌های فنی و قوانین استفاده منصفانه.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="cyan" size="md" dot>قوانین و چارچوب حقوقی</Badge>
            <h1 className="text-3xl sm:text-4xl font-black text-[#E6EDF7] tracking-tight leading-[1.32] mt-4 mb-4">
              شرایط استفاده از پلتفرم نتا
            </h1>
            <p className="text-sm sm:text-base text-[#A9B7CB] max-w-xl mx-auto leading-[1.8]">
              استفاده از خدمات نتا به منزله پذیرش کامل این چارچوب شفاف و منصفانه است.
            </p>
          </div>

          <div className="space-y-8 bg-[#121D30] border border-[#26364D] rounded-3xl p-6 sm:p-10 text-xs sm:text-sm text-[#A9B7CB] leading-[1.85]">
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#E6EDF7]">
                ۱. تعریف خدمات و دامنه عملکرد
              </h2>
              <p>
                نتا یک سامانه بهینه‌سازی مسیر اتصال، حل‌کننده امن DNS و تسهیل‌کننده دسترسی به سرویس‌های تخصصی است. نتا ابزار دور زدن کلی قانون نبوده و ادعایی مبنی بر دسترسی به تمامی وب‌سایت‌های محدودشده جهان ندارد.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-[#26364D]/60">
              <h2 className="text-base sm:text-lg font-bold text-[#E6EDF7]">
                ۲. محدودیت‌های فنی و پینگ
              </h2>
              <p>
                کیفیت نهایی اتصال اینترنت به عواملی خارج از کنترل نتا (مانند خطوط فیزیکی مسی/فیبر نوری مخابرات، نویز خطوط و اختلالات ترانزیت بالادستی اپراتورها) بستگی دارد. نتا کوتاه‌ترین مسیر ترانزیت را تضمین می‌کند، اما مسئول قطعی‌های سراسری زیرساخت کشور نیست.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-[#26364D]/60">
              <h2 className="text-base sm:text-lg font-bold text-[#E6EDF7]">
                ۳. قوانین استفاده منصفانه (Fair Use)
              </h2>
              <p>
                اشتراک‌های کاربری نتا برای استفاده شخصی طراحی شده‌اند. هرگونه استفاده از سرویس جهت حملات تکذیب سرویس (DDoS)، ارسال هرزنامه انبوه، اسکن غیرمجاز پورت‌ها یا بازفروش پهنای باند منجر به مسدودسازی دائمی دسترسی بدون بازگشت وجه خواهد شد.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-[#26364D]/60">
              <h2 className="text-base sm:text-lg font-bold text-[#E6EDF7]">
                ۴. شرایط بازگشت وجه
              </h2>
              <p>
                کاربران تا ۷ روز پس از اولین خرید اشتراک، در صورتی که به دلایل فنی موفق به دریافت سرویس متناسب با نیاز خود نشوند، حق دارند درخواست لغو و بازگشت کامل وجه را از طریق بخش پشتیبانی ثبت نمایند.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
