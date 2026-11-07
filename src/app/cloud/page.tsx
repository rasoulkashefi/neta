'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Cloud,
  HardDrive,
  Database,
  Cpu,
  Store,
  CheckCircle2,
  Clock,
  Send,
  Check
} from 'lucide-react';

export default function CloudAndPartnersPage() {
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerType, setPartnerType] = useState('api');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center mb-4">
              <Badge variant="cyan" size="md" dot>
                نقشه راه توسعه زیرساخت و پلتفرم مارکت‌پلیس
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E6EDF7] tracking-tight leading-[1.3] mb-5">
              آینده زیرساخت‌های ابری و مارکت‌پلیس خدمات دیجیتال
            </h1>
            <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.85]">
              نتا در حال بسط افق‌های خود از بهینه‌سازی اتصال به یک پلتفرم جامع ابری است. ما زیرساخت‌های سخت‌افزاری و نرم‌افزاری لازم را مهیا می‌کنیم تا هم سرویس‌های ابری مدرن و هم راهکارهای ارائه‌دهندگان معتبر ثالث روی یک پنل یکپارچه ارائه شوند.
            </p>
          </div>

          {/* Transparent Status Alert */}
          <div className="mb-16 p-4 sm:p-5 rounded-2xl bg-[#121D30] border border-[#F5B84C]/30 text-start flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-[#F5B84C] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-bold text-[#E6EDF7]">
                اصل شفافیت نتا: سرویس‌های این بخش در حال آماده‌سازی و ارزیابی فنی هستند
              </div>
              <p className="text-xs text-[#A9B7CB] leading-[1.75]">
                بر خلاف رویه‌های غیرواقعی، ما سرویس‌های ابری پیاده‌نشده را به عنوان محصول آماده به فروش نمی‌رسانیم. شما می‌توانید مشخصات فنی خدمات آینده را بررسی کرده یا برای دسترسی زودهنگام (Early Access) و همکاری در مارکت‌پلیس اعلام آمادگی نمایید.
              </p>
            </div>
          </div>

          {/* 4 Cloud Services Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Service 1: Edge Compute */}
            <div id="compute" className="scroll-mt-24 p-8 rounded-3xl bg-[#0E1726] border border-[#26364D] hover:border-[#38D9F5]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#38D9F5]/10 border border-[#38D9F5]/20 flex items-center justify-center text-[#38D9F5]">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <Badge variant="neutral" size="sm">در حال توسعه سخت‌افزاری</Badge>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF7] mb-2">سرورهای لبه و کانتینرها (Edge Compute)</h2>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                  استقرار آسان کانتینرهای Docker بر روی نودهای مجهز به دیسک‌های NVMe Gen4 با اتصال ۱۰ گیگابیت فیبر نوری اختصاصی، مناسب برای میکروسرویس‌های نیازمند پینگ تک‌رقمی.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#38D9F5]" />
                    <span>بوت کانتینر در کمتر از ۵ ثانیه</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#38D9F5]" />
                    <span>توزیع بار ترافیک داخلی و خارجی لایه ۴ و ۷</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#38D9F5]" />
                    <span>محاسبه ساعتی و دقیق بر حسب میزان مصرف RAM/CPU</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#26364D]/60 flex items-center justify-between text-xs text-[#A9B7CB]">
                <span>فاز آزمایشی: سه‌ماهه آینده</span>
                <span className="font-mono text-[#38D9F5]">Phase: Infra Prep</span>
              </div>
            </div>

            {/* Service 2: S3 Object Storage */}
            <div id="storage" className="scroll-mt-24 p-8 rounded-3xl bg-[#0E1726] border border-[#26364D] hover:border-[#38D9F5]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B7CFF]/10 border border-[#8B7CFF]/20 flex items-center justify-center text-[#8B7CFF]">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <Badge variant="neutral" size="sm">ارزیابی نهایی سناریوها</Badge>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF7] mb-2">فضای ذخیره‌سازی ابری اشیا (S3 Compatible)</h2>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                  ذخیره‌سازی فایل‌های استاتیک، تصاویر و نسخه‌های پشتیبان با ماندگاری ۹۹.۹۹۹٪ و سازگاری کامل با کتابخانه‌ها و SDKهای AWS S3 بدون هزینه ترافیک خروجی سنگین.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B7CFF]" />
                    <span>سازگاری ۱۰۰٪ با ابزارهای AWS CLI, Boto3, MinIO</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B7CFF]" />
                    <span>تولید Signed URLs برای امنیت فایل‌های اختصاصی</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B7CFF]" />
                    <span>یکپارچگی مستقیم با شبکه توزیع محتوای نتا</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#26364D]/60 flex items-center justify-between text-xs text-[#A9B7CB]">
                <span>پروتکل: S3 API Compatible</span>
                <span className="font-mono text-[#8B7CFF]">High Durability</span>
              </div>
            </div>

            {/* Service 3: Managed Databases */}
            <div id="database" className="scroll-mt-24 p-8 rounded-3xl bg-[#0E1726] border border-[#26364D] hover:border-[#38D9F5]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#39C99A]/10 border border-[#39C99A]/20 flex items-center justify-center text-[#39C99A]">
                    <Database className="w-6 h-6" />
                  </div>
                  <Badge variant="neutral" size="sm">نقشه راه توسعه</Badge>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF7] mb-2">دیتابیس‌های مدیریت‌شده (Postgres & Redis)</h2>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                  پایگاه‌های داده بدون دغدغه نگهداری؛ با قابلیت بکاپ‌گیری روزانه اتوماتیک، مقیاس‌پذیری عمودی فوری و خوشه‌بندی Failover برای تداوم کسب‌وکار.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#39C99A]" />
                    <span>پشتیبانی از افزونه‌های وکتور (pgvector) برای AI</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#39C99A]" />
                    <span>کشینگ رادیس با تاخیر زیر یک میلی‌ثانیه</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#26364D]/60 flex items-center justify-between text-xs text-[#A9B7CB]">
                <span>پشتیبانی: PostgreSQL 16+, Redis 7+</span>
                <span className="font-mono text-[#39C99A]">Multi-Zone</span>
              </div>
            </div>

            {/* Service 4: Dedicated GPU Clusters */}
            <div id="gpu" className="scroll-mt-24 p-8 rounded-3xl bg-[#0E1726] border border-[#26364D] hover:border-[#38D9F5]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A65B]/10 border border-[#F5A65B]/20 flex items-center justify-center text-[#F5A65B]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <Badge variant="neutral" size="sm">در حال تامین تجهیزات</Badge>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF7] mb-2">کلاسترهای پردازش گرافیکی (AI & GPU)</h2>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8] mb-6">
                  کارت‌های گرافیک قدرتمند سازمانی برای فاین‌تیون مدل‌های زبانی بزرگ، پردازش‌های استنتاجی فشرده (Inference) و پردازش تصاویر سه بعدی.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#F5A65B]" />
                    <span>دسترسی On-Demand ساعتی بدون پیش‌پرداخت نجومی</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E6EDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#F5A65B]" />
                    <span>محیط‌های پیش‌نصب‌شده PyTorch, vLLM و HuggingFace</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#26364D]/60 flex items-center justify-between text-xs text-[#A9B7CB]">
                <span>معماری سخت‌افزار: NVIDIA Tensor Core</span>
                <span className="font-mono text-[#F5A65B]">vLLM Ready</span>
              </div>
            </div>
          </div>

          {/* Section: The Partner & Marketplace Program */}
          <div id="marketplace" className="scroll-mt-24 bg-gradient-to-br from-[#121D30] via-[#18263B] to-[#0E1726] border border-[#8B7CFF]/40 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center mb-3">
                <Badge variant="violet" size="md" dot>
                  پلتفرم باز • مارکت‌پلیس سرویس‌های دیجیتال
                </Badge>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#E6EDF7] tracking-tight mb-4">
                سرویس دیجیتال خود را روی بستر نتا به هزاران کاربر عرضه کنید
              </h2>
              <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.85]">
                چشم‌انداز نتا، تبدیل شدن به یک بازارگاه متمرکز برای کلیه محصولات فناورانه است. اگر شما ارائه‌دهنده سرویس‌های هوش مصنوعی، ابزارهای ابری، APIهای سازمانی، سرورهای تخصصی بازی یا هر نوع راهکار دیجیتال هستید، می‌توانید با اتصال به شبکه نتا، از مزایای زیرساخت یکپارچه بهره‌مند شوید:
              </p>
            </div>

            {/* 4 Partner Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-[#0E1726]/80 border border-[#26364D]">
                <div className="text-sm font-bold text-[#E6EDF7] mb-1">تسویه‌حساب خودکار</div>
                <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                  دریافت درآمد حاصل از مصرف سرویس به صورت ریالی و مستقیم در درگاه بانکی بدون واسطه.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1726]/80 border border-[#26364D]">
                <div className="text-sm font-bold text-[#E6EDF7] mb-1">احراز هویت متمرکز (SSO)</div>
                <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                  کاربران با همان حساب و کیف‌پول نتا به سرویس شما متصل شده و توکن‌های امن دریافت می‌کنند.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1726]/80 border border-[#26364D]">
                <div className="text-sm font-bold text-[#E6EDF7] mb-1">ترافیک لبه Anycast</div>
                <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                  استفاده از شبکه توزیع‌شده و سریع نتا برای کاهش تاخیر دسترسی کاربران به API شما.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1726]/80 border border-[#26364D]">
                <div className="text-sm font-bold text-[#E6EDF7] mb-1">دسترسی به بازار آماده</div>
                <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                  سرویس شما در کاتالوگ عمومی نتا در برابر دید هزاران توسعه‌دهنده و متخصص قرار می‌گیرد.
                </p>
              </div>
            </div>

            {/* Partner Application Form (Frontend-only) */}
            <div className="bg-[#0E1726] border border-[#26364D] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#26364D]">
                <h3 className="text-base font-bold text-[#E6EDF7] flex items-center gap-2">
                  <Store className="w-5 h-5 text-[#8B7CFF]" />
                  <span>فرم ابراز علاقه شرکای تجاری و ارائه‌دهندگان سرویس</span>
                </h3>
                <span className="text-xs text-[#A9B7CB] hidden sm:inline">بررسی توسط تیم فنی ظرف ۴۸ ساعت</span>
              </div>

              {partnerSubmitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#39C99A]/15 border border-[#39C99A]/30 text-[#39C99A] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#E6EDF7]">درخواست شما با موفقیت ثبت شد</h4>
                  <p className="text-xs text-[#A9B7CB] max-w-md mx-auto">
                    از توجه شما به اکوسیستم نتا سپاسگزاریم. مستندات ادغام مارکت‌پلیس و مشخصات فنی اولیه به زودی برای ایمیل ثبت‌شده ارسال خواهد شد.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPartnerSubmitted(false)}
                    className="mt-4"
                  >
                    ثبت درخواست دیگر
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-start">
                      <label className="text-xs font-semibold text-[#A9B7CB]">نام شرکت یا تیم توسعه</label>
                      <input
                        type="text"
                        required
                        placeholder="مثلاً تیم نرم‌افزاری هوش داده"
                        className="w-full bg-[#121D30] border border-[#26364D] focus:border-[#38D9F5] rounded-xl px-3.5 py-2.5 text-xs text-[#E6EDF7] placeholder-[#A9B7CB]/60 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5 text-start">
                      <label className="text-xs font-semibold text-[#A9B7CB]">ایمیل سازمانی یا کاری</label>
                      <input
                        type="email"
                        required
                        placeholder="contact@company.ir"
                        className="w-full bg-[#121D30] border border-[#26364D] focus:border-[#38D9F5] rounded-xl px-3.5 py-2.5 text-xs text-[#E6EDF7] placeholder-[#A9B7CB]/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-start">
                      <label className="text-xs font-semibold text-[#A9B7CB]">دسته‌بندی محصول پیشنهادی</label>
                      <select
                        value={partnerType}
                        onChange={(e) => setPartnerType(e.target.value)}
                        className="w-full bg-[#121D30] border border-[#26364D] focus:border-[#38D9F5] rounded-xl px-3.5 py-2.5 text-xs text-[#E6EDF7] focus:outline-none"
                      >
                        <option value="api">API یا درگاه خدمات وب</option>
                        <option value="ai">مدل یا ابزار هوش مصنوعی اختصاصی</option>
                        <option value="cloud">زیرساخت سرور و رایانش ابری</option>
                        <option value="saas">نرم‌افزار ابری و سازمانی (SaaS)</option>
                        <option value="gaming">سرور یا رله بازی آنلاین</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-start">
                      <label className="text-xs font-semibold text-[#A9B7CB]">وب‌سایت یا آدرس گیت‌هاب</label>
                      <input
                        type="url"
                        placeholder="https://..."
                        className="w-full bg-[#121D30] border border-[#26364D] focus:border-[#38D9F5] rounded-xl px-3.5 py-2.5 text-xs text-[#E6EDF7] placeholder-[#A9B7CB]/60 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-semibold text-[#A9B7CB]">توضیح کوتاه درباره سرویس و مدل تجاری</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="چه سرویسی ارائه می‌دهید و چگونه مایلید با نتا همکاری داشته باشید؟"
                      className="w-full bg-[#121D30] border border-[#26364D] focus:border-[#38D9F5] rounded-xl p-3 text-xs text-[#E6EDF7] placeholder-[#A9B7CB]/60 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#A9B7CB]">اطلاعات شما محرمانه باقی خواهد ماند.</span>
                    <Button
                      type="submit"
                      variant="primary"
                      size="sm"
                      leftIcon={<Send className="w-4 h-4 rtl:-scale-x-100" />}
                    >
                      ارسال درخواست بررسی
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
