'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AI_MODELS_LIST } from '@/lib/products';
import {
  Terminal,
  KeyRound,
  Coins,
  Copy,
  Check,
  ArrowLeft,
  Cpu,
  Code2
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AIPlatformPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'curl' | 'node'>('python');
  const [copied, setCopied] = useState(false);
  const [tokenInput, setTokenInput] = useState(500); // 500K tokens

  const codeSnippets = {
    python: `from openai import OpenAI

# تنها کافیست Base URL و کلید نتا را ست کنید:
client = OpenAI(
    base_url="https://api.neta.land/v1",
    api_key="neta_live_your_unified_key_here"
)

response = client.chat.completions.create(
    model="claude-3-5-sonnet", # یا gpt-4o, deepseek-v3, gemini-1-5-pro
    messages=[
        {"role": "system", "content": "You are an expert AI architect."},
        {"role": "user", "content": "How do I build scalable microservices?"}
    ],
    temperature=0.7,
)

print(response.choices[0].message.content)`,

    curl: `curl https://api.neta.land/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer neta_live_your_unified_key_here" \\
  -d '{
    "model": "deepseek-v3",
    "messages": [
      {"role": "user", "content": "Solve this equation step-by-step."}
    ],
    "temperature": 0.2
  }'`,

    node: `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.neta.land/v1",
  apiKey: process.env.NETA_API_KEY, // کلید یکپارچه شما از پنل نتا
});

async function main() {
  const stream = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: "معماری یک سیستم ریل‌تایم را توضیح بده" }],
    stream: true,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

main();`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center mb-4">
              <Badge variant="violet" size="md" dot>
                پلتفرم هوش مصنوعی نتا • نسخه بتا
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E6EDF7] tracking-tight leading-[1.3] mb-5">
              یک کلید واحد برای تمام مدل‌های پیشرو هوش مصنوعی
            </h1>
            <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.85]">
              بدون نیاز به کارت‌های اعتباری بین‌المللی یا مدیریت ده‌ها اشتراک ارزی مجزا. به مدل‌های Claude 3.5، GPT-4o، DeepSeek و Gemini از طریق یک درگاه سازگار با فرمت استاندارد OpenAI متصل شوید.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <Link href="/app/ai">
                <Button variant="primary" size="lg" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                  دریافت کلید دسترسی در پنل
                </Button>
              </Link>
              <a href="#code">
                <Button variant="secondary" size="lg" leftIcon={<Code2 className="w-4 h-4 text-[#8B7CFF]" />}>
                  مشاهده نمونه کد
                </Button>
              </a>
            </div>
          </div>

          {/* Core Highlights 4 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
              <div className="w-10 h-10 rounded-xl bg-[#8B7CFF]/15 text-[#8B7CFF] flex items-center justify-center mb-3">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#E6EDF7] mb-1">یک کلید API برای همه</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                با تغییر یک متغیر محیطی، به ده‌ها مدل تجاری و متن‌باز دسترسی مستقیم پیدا کنید.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
              <div className="w-10 h-10 rounded-xl bg-[#38D9F5]/15 text-[#38D9F5] flex items-center justify-center mb-3">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#E6EDF7] mb-1">سازگاری با OpenAI SDK</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                ۱۰۰٪ سازگار با کلاینت‌های رسمی پایتون و نود بدون نیاز به نصب کتابخانه‌های متفرقه.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
              <div className="w-10 h-10 rounded-xl bg-[#39C99A]/15 text-[#39C99A] flex items-center justify-center mb-3">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#E6EDF7] mb-1">پرداخت دقیق ریالی</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                فقط به ازای تعداد توکن مصرفی واقعی هزینه پرداخت کنید، بدون هزینه‌های پنهان یا اشتراک اجباری.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D]">
              <div className="w-10 h-10 rounded-xl bg-[#F5A65B]/15 text-[#F5A65B] flex items-center justify-center mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#E6EDF7] mb-1">Fallback و پایداری بالا</h3>
              <p className="text-xs text-[#A9B7CB] leading-[1.7]">
                در صورت قطعی یا Rate Limit یک ارائه‌دهنده، ترافیک بدون وقفه به نزدیک‌ترین مدل جایگزین منتقل می‌شود.
              </p>
            </div>
          </div>

          {/* Section: Interactive Code Sandbox */}
          <div id="code" className="scroll-mt-24 mb-20">
            <div className="bg-[#0E1726] border border-[#26364D] rounded-3xl overflow-hidden shadow-2xl">
              {/* Top Code Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-[#26364D] px-6 py-4 bg-[#121D30]/80 gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F16D7A]" />
                  <span className="w-3 h-3 rounded-full bg-[#F5B84C]" />
                  <span className="w-3 h-3 rounded-full bg-[#39C99A]" />
                  <span className="text-xs font-mono text-[#A9B7CB] ms-2">api.neta.land/v1/chat/completions</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-[#0E1726] p-1 rounded-xl border border-[#26364D] flex items-center">
                    {(['python', 'node', 'curl'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLanguage(lang)}
                        className={cn(
                          'px-3 py-1 rounded-lg text-xs font-mono uppercase transition-colors',
                          selectedLanguage === lang
                            ? 'bg-[#8B7CFF] text-white font-bold'
                            : 'text-[#A9B7CB] hover:text-[#E6EDF7]'
                        )}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    leftIcon={copied ? <Check className="w-3.5 h-3.5 text-[#39C99A]" /> : <Copy className="w-3.5 h-3.5" />}
                  >
                    {copied ? 'کپی شد' : 'کپی کد'}
                  </Button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-6 overflow-x-auto text-start font-mono text-xs sm:text-sm text-[#E6EDF7] leading-relaxed bg-[#080E18]">
                <pre dir="ltr" className="whitespace-pre">
                  {codeSnippets[selectedLanguage]}
                </pre>
              </div>

              {/* Footer explanation */}
              <div className="bg-[#121D30]/50 border-t border-[#26364D] px-6 py-3 flex items-center justify-between text-xs text-[#A9B7CB]">
                <span>تنها با تغییر <code className="bg-[#0E1726] px-1.5 py-0.5 rounded text-[#38D9F5]">base_url</code> کد فعلی شما بدون هیچ تغییر دیگری کار خواهد کرد.</span>
                <span className="text-[11px] text-[#39C99A] font-bold">سازگاری کامل با استریم پاسخ‌ها</span>
              </div>
            </div>
          </div>

          {/* Section: Models Catalog & Comparison Table */}
          <div id="models" className="scroll-mt-24 mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-[#E6EDF7] tracking-tight mb-3">
                مدل‌های پشتیبانی‌شده در پلتفرم
              </h2>
              <p className="text-xs sm:text-sm text-[#A9B7CB]">
                مشخصات فنی و قیمت مصوب هر ارائه‌دهنده را با هم مقایسه کنید و مدل ایده‌آل پروژه خود را انتخاب نمایید.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#26364D] bg-[#0E1726]">
              <table className="w-full text-start text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#26364D] bg-[#121D30] text-[#A9B7CB]">
                    <th className="py-4 px-6 font-bold">نام مدل</th>
                    <th className="py-4 px-4 font-bold">ارائه‌دهنده</th>
                    <th className="py-4 px-4 font-bold">پنجره زمینه (Context)</th>
                    <th className="py-4 px-4 font-bold">تعرفه ۱M توکن (ورودی/خروجی)</th>
                    <th className="py-4 px-4 font-bold">کاربرد برتر</th>
                    <th className="py-4 px-6 font-bold text-center">وضعیت</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#26364D]/60 text-[#E6EDF7]">
                  {AI_MODELS_LIST.map((model) => (
                    <tr key={model.id} className="hover:bg-[#121D30]/40 transition-colors">
                      <td className="py-4 px-6">
                        <div className="font-bold text-[#E6EDF7]">{model.name}</div>
                        <div className="text-[11px] font-mono text-[#38D9F5]">{model.category}</div>
                      </td>
                      <td className="py-4 px-4 font-medium text-[#A9B7CB]">{model.provider}</td>
                      <td className="py-4 px-4 font-mono">{model.contextWindow}</td>
                      <td className="py-4 px-4">
                        <div className="text-xs font-mono text-[#39C99A]">{model.inputCost} ورودی</div>
                        <div className="text-[11px] font-mono text-[#A9B7CB]">{model.outputCost} خروجی</div>
                      </td>
                      <td className="py-4 px-4 text-xs text-[#A9B7CB] max-w-xs">{model.bestFor}</td>
                      <td className="py-4 px-6 text-center">
                        <Badge variant={model.status.includes('فعال') ? 'violet' : 'neutral'} size="sm">
                          {model.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Token Estimator / Calculator */}
          <div id="calculator" className="scroll-mt-24 mb-20 bg-gradient-to-r from-[#121D30] via-[#18263B] to-[#0E1726] border border-[#26364D] rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center">
                  <Badge variant="cyan" size="sm" dot>
                    ماشین‌حساب شفافیت مصرف
                  </Badge>
                </div>
                <h3 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
                  برآورد هزینه بر اساس حجم پروژه
                </h3>
                <p className="text-xs sm:text-sm text-[#A9B7CB] leading-[1.8]">
                  تعداد توکن پیش‌بینی‌شده ماهانه خود را مشخص کنید تا هزینه تخمینی استفاده از مدل‌های پرچمدار و مدل‌های اقتصادی را فوراً مشاهده نمایید.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#E6EDF7]">
                    <span>مصرف ماهانه:</span>
                    <span className="font-mono text-base text-[#38D9F5]">{tokenInput.toLocaleString('fa-IR')} هزار توکن (~{(tokenInput / 1000).toFixed(1)} میلیون)</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(Number(e.target.value))}
                    className="w-full accent-[#38D9F5] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#A9B7CB] font-mono">
                    <span>۵۰K توکن (آزمایشی)</span>
                    <span>۱M توکن (استارتاپ)</span>
                    <span>۵M توکن (سازمانی)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#0E1726] border border-[#26364D] rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A9B7CB]">
                  هزینه تقریبی ماهانه به ازای {(tokenInput / 1000).toFixed(2)}M توکن:
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#121D30] border border-[#26364D]">
                    <div>
                      <span className="font-bold text-sm text-[#E6EDF7]">DeepSeek V3 (اقتصادی و کدنویسی)</span>
                      <div className="text-[10px] text-[#39C99A]">بهترین نرخ بازدهی به هزینه</div>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#39C99A]">
                      ~${((tokenInput / 1000) * 1.3).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#121D30] border border-[#26364D]">
                    <div>
                      <span className="font-bold text-sm text-[#E6EDF7]">GPT-4o (چندحالته و عمومی)</span>
                      <div className="text-[10px] text-[#A9B7CB]">مدل استاندارد جهانی</div>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#E6EDF7]">
                      ~${((tokenInput / 1000) * 6.2).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#121D30] border border-[#26364D]">
                    <div>
                      <span className="font-bold text-sm text-[#E6EDF7]">Claude 3.5 Sonnet (استدلال برتر)</span>
                      <div className="text-[10px] text-[#8B7CFF]">برترین مدل برنامه‌نویسی</div>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#8B7CFF]">
                      ~${((tokenInput / 1000) * 9.0).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#A9B7CB] text-center">
                  تمام مبالغ به صورت ریالی روز با درگاه شاپرک قابل تسویه مستقیم خواهند بود.
                </div>
              </div>
            </div>
          </div>

          {/* Section: Router & Fallback Callout */}
          <div id="router" className="scroll-mt-24 p-8 rounded-3xl bg-[#0E1726] border border-[#8B7CFF]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <Badge variant="violet" size="sm">ماژول هوشمند مسیریابی</Badge>
              <h3 className="text-xl font-bold text-[#E6EDF7]">Neta Smart Fallback & Semantic Caching</h3>
              <p className="text-xs sm:text-sm text-[#A9B7CB] max-w-2xl leading-[1.8]">
                مسیریاب نتا به طور خودکار کوئری‌های تکراری را کش کرده و سوالات ساده را به مدل‌های اقتصادی هدایت می‌کند تا هزینه‌های پروژه بدون هیچ‌گونه کدنویسی اضافی به حداقل برسد.
              </p>
            </div>
            <Link href="/app/ai" className="shrink-0">
              <Button variant="primary" size="md">
                فعال‌سازی در پنل
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
