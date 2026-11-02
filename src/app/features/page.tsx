import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { Globe, Activity, Gamepad2, Shield, Zap, Server, Check, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'قابلیت‌ها — پلتفرم نتا | Neta.land',
  description: 'بررسی جامع سه قابلیت محوری نتا: دسترسی به سرویس‌های بین‌المللی، DNS فوق سریع Anycast و بهینه‌سازی روتینگ بازی‌های رقابتی.',
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="cyan" size="md" dot>معماری و قابلیت‌های نتا</Badge>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.32] mt-4 mb-6">
              مهندسی‌شده برای سرعت، شفافیت و ثبات اتصال
            </h1>
            <p className="text-base sm:text-lg text-[#A9B7CB] leading-[1.8]">
              نتا یک سرویس کلیشه‌ای نیست؛ یک معماری ماژولار است که بر اساس تفکیک نیازهای ارتباطی طراحی شده تا بدون کاهش امنیت، تجربه روانی به کاربر ارائه دهد.
            </p>
          </div>

          {/* Deep Dive 1: Access */}
          <div className="mb-24 bg-[#121D30] border border-[#8B7CFF]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="violet" size="md">قابلیت اول • دسترسی هوشمند</Badge>
                <h2 className="text-3xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.35]">
                  دسترسی به سرویس‌های کاری و توسعه‌دهندگان
                </h2>
                <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.8]">
                  بسیاری از سرویس‌های پیشرو جهانی مانند Claude، OpenAI، Docker Hub و Figma، به دلیل تحریم‌های یک‌طرفه یا خطاهای توزیع جغرافیایی، دسترسی کاربران را مسدود می‌کنند. نتا با استفاده از پروکسی معکوس لایه ۷ و بدون دخالت در محتوا، ترافیک درخواست‌ها را مستقیماً از نزدیک‌ترین لبه‌های اروپایی تاییدشده عبور می‌دهد.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#8B7CFF]" />
                    <span>تفکیک هوشمند ترافیک داخلی و خارجی</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#8B7CFF]" />
                    <span>سازگاری با احراز هویت دومرحله‌ای (2FA)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#8B7CFF]" />
                    <span>پشتیبانی کامل از WebSocket و استریم SSE</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#8B7CFF]" />
                    <span>بدون دستکاری کدهای هدر یا کوکی‌های کاربر</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/services">
                    <Button variant="access" size="md" leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                      جستجوی سرویس‌ها در دایرکتوری
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0B1220] border border-[#26364D] rounded-2xl p-6 font-mono text-xs text-[#A9B7CB] space-y-3">
                <div className="text-[11px] text-[#8B7CFF] font-bold pb-2 border-b border-[#26364D]">
                  // جریان درخواست پروکسی معکوس
                </div>
                <div className="text-[#38D9F5]">Client GET https://api.anthropic.com</div>
                <div className="ps-3 border-s-2 border-[#8B7CFF]/40 space-y-1">
                  <div>↳ DNS Resolve: pop-fra.neta.land</div>
                  <div>↳ TLS SNI Pass-through (Zero Payload Tamper)</div>
                  <div>↳ BGP Low-latency Routing: 42ms</div>
                </div>
                <div className="text-[#39C99A]">HTTP/2 200 OK — Ready for Streaming</div>
              </div>
            </div>
          </div>

          {/* Deep Dive 2: DNS */}
          <div className="mb-24 bg-[#121D30] border border-[#38D9F5]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="cyan" size="md">قابلیت دوم • تفکیک سریع دامنه</Badge>
                <h2 className="text-3xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.35]">
                  DNS سریع، پایدار و رمزنگاری‌شده Anycast
                </h2>
                <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.8]">
                  رزولوشن سنتی دی‌ان‌اس روی پورت ۵۳ بدون رمزنگاری است و توسط اپراتورها به راحتی شنود، مسموم (DNS Cache Poisoning) یا دستکاری می‌شود. نتا با تکیه بر استانداردهای DoH (روی پورت ۴۴۳) و DoT (روی پورت ۸۵۳)، اطمینان حاصل می‌کند که هیچ واسطه‌ای در شبکه نتواند مسیر آدرس‌دهی شما را منحرف کند.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#38D9F5]" />
                    <span>پاسخ‌دهی محلی زیر ۸ میلی‌ثانیه در لبه تهران</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#38D9F5]" />
                    <span>فیلترینگ خودکار بدافزارها و فیشینگ</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#38D9F5]" />
                    <span>پشتیبانی کامل از IPv4 و IPv6 دوگانه</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#38D9F5]" />
                    <span>تعهد مطلق عدم ذخیره Query Log</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/dns">
                    <Button variant="primary" size="md" leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                      مشاهده مشخصات و تنظیم DNS
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0B1220] border border-[#26364D] rounded-2xl p-6 font-mono text-xs space-y-4">
                <div className="text-[#38D9F5] font-bold pb-2 border-b border-[#26364D]">
                  مقایسه تاخیر رزولوشن DNS در ایران
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span>نتا (Anycast Edge)</span>
                      <span className="text-[#38D9F5] font-bold">7.2 ms</span>
                    </div>
                    <div className="w-full bg-[#18263B] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#38D9F5] h-full w-[12%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span>Cloudflare (1.1.1.1)</span>
                      <span className="text-[#A9B7CB]">38.4 ms</span>
                    </div>
                    <div className="w-full bg-[#18263B] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#A9B7CB] h-full w-[45%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span>Google DNS (8.8.8.8)</span>
                      <span className="text-[#A9B7CB]">54.1 ms</span>
                    </div>
                    <div className="w-full bg-[#18263B] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#64748B] h-full w-[65%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Dive 3: Gaming */}
          <div className="bg-[#121D30] border border-[#F5A65B]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="amber" size="md">قابلیت سوم • روتینگ گیمینگ</Badge>
                <h2 className="text-3xl font-extrabold text-[#E6EDF7] tracking-tight leading-[1.35]">
                  مسیر مستقیم و تثبیت پکت‌های شوتر رقابتی
                </h2>
                <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.8]">
                  در بازی‌های آنلاین مانند والورانت و کانتر-استرایک، تنها پینگ مهم نیست؛ نوسان تاخیر (Jitter) و ریزش بسته‌ها (Packet Loss) عامل اصلی برخورد نکردن تیرها هستند. رله‌های گیمینگ نتا در استانبول و فرانکفورت با اجتناب از هاپ‌های اضافه شرکت ارتباطات زیرساخت، کوتاه‌ترین مسیر مستقیم فیزیکی را به سرورهای بازی ارائه می‌دهند.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#F5A65B]" />
                    <span>تثبیت ساب‌تیک در نرخ بازخورد ۱۲۸ تیک</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#F5A65B]" />
                    <span>حذف قطعی Voice دیسکورد در حین مسابقه</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#F5A65B]" />
                    <span>سازگاری با کنسول‌های PS5 و Xbox Series</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <Check className="w-4 h-4 text-[#F5A65B]" />
                    <span>حفظ وضعیت NAT Type Open</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/gaming">
                    <Button variant="gaming" size="md" leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                      بررسی پینگ بازی‌ها
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0B1220] border border-[#26364D] rounded-2xl p-6 font-mono text-xs space-y-4">
                <div className="text-[#F5A65B] font-bold pb-2 border-b border-[#26364D]">
                  تست مسیر والورانت (سرور استانبول)
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-[#18263B] rounded-xl border border-[#26364D]">
                    <span className="text-[10px] text-[#64748B] block mb-1">مسیر اینترنت عادی</span>
                    <span className="text-xl font-bold text-[#F16D7A]">78 ms</span>
                    <span className="text-[10px] text-[#F16D7A] block mt-1">جیتر: 6.8ms (نوسان)</span>
                  </div>
                  <div className="p-3 bg-[#18263B] rounded-xl border border-[#F5A65B]/40">
                    <span className="text-[10px] text-[#A9B7CB] block mb-1">مسیر مستقیم نتا</span>
                    <span className="text-xl font-bold text-[#39C99A]">46 ms</span>
                    <span className="text-[10px] text-[#39C99A] block mt-1">جیتر: 1.8ms (تثبیت)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
