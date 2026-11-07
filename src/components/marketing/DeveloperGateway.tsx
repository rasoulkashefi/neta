'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Copy, Check, ArrowLeft, Terminal, KeyRound, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DeveloperGateway() {
  const [activeLang, setActiveLang] = useState<'python' | 'curl' | 'ts'>('python');
  const [copied, setCopied] = useState(false);

  const snippets = {
    python: `from openai import OpenAI

# استفاده از SDK رسمی OpenAI با تغییر Base URL و کلید نتا:
client = OpenAI(
    base_url="https://api.neta.land/v1",
    api_key="neta_live_your_token_here"
)

# فراخوانی Claude 3.5، GPT-4o یا DeepSeek با همان سینتکس:
completion = client.chat.completions.create(
    model="claude-3-5-sonnet",
    messages=[{"role": "user", "content": "کد میکروسرویس احراز هویت را بنویس"}]
)

print(completion.choices[0].message.content)`,

    curl: `curl https://api.neta.land/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer neta_live_your_token_here" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "تحلیل عملکرد دیتابیس را ارائه بده"}]
  }'`,

    ts: `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.neta.land/v1",
  apiKey: process.env.NETA_API_KEY,
});

const response = await client.chat.completions.create({
  model: "deepseek-v3",
  messages: [{ role: "user", content: "بهینه‌سازی کوئری PostgreSQL" }],
});

console.log(response.choices[0].message.content);`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-28 bg-[#080E18] border-y border-[#26364D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <div className="inline-flex items-center">
              <Badge variant="violet" size="md" dot>
                تجربه توسعه‌دهندگان • Developer First
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#E6EDF7] tracking-tight leading-[1.3]">
              کد کمتر، پایداری بیشتر، بدون قفل ارائه‌دهنده
            </h2>

            <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.85]">
              با معماری هماهنگ نتا، توسعه‌دهندگان ایرانی دیگر نیازی به خرید شماره‌های مجازی، پی‌پال یا دور زدن مداوم خطاهای کلودفلر ندارند. به سادگی یک کلید ایجاد کنید و تمام درخواست‌های هوش مصنوعی محصول خود را از طریق یک لایه امن و سریع ارسال نمایید.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6EDF7]">
                <div className="w-5 h-5 rounded-md bg-[#8B7CFF]/15 text-[#8B7CFF] flex items-center justify-center shrink-0">
                  <KeyRound className="w-3.5 h-3.5" />
                </div>
                <span>کلید یکپارچه برای Claude 3.5، GPT-4o، DeepSeek و Gemini</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6EDF7]">
                <div className="w-5 h-5 rounded-md bg-[#38D9F5]/15 text-[#38D9F5] flex items-center justify-center shrink-0">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <span>سازگاری صددرصدی با مشخصات رسمی OpenAI SDK</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6EDF7]">
                <div className="w-5 h-5 rounded-md bg-[#39C99A]/15 text-[#39C99A] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span>سوییچ خودکار Failover بین مدل‌ها در صورت افت سرعت ارائه‌دهنده</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href="/ai">
                <Button variant="primary" size="md" leftIcon={<ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />}>
                  مستندات و نمونه کدهای API
                </Button>
              </Link>
              <Link href="/app/ai">
                <Button variant="outline" size="md">
                  ساخت کلید در کنسول
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Interactive Code Box */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E1726] border border-[#26364D] rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#26364D] px-6 py-3.5 bg-[#121D30]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F16D7A]" />
                  <span className="w-3 h-3 rounded-full bg-[#F5B84C]" />
                  <span className="w-3 h-3 rounded-full bg-[#39C99A]" />
                  <span className="text-xs font-mono text-[#A9B7CB] ms-2">unified-client.{activeLang === 'python' ? 'py' : activeLang === 'curl' ? 'sh' : 'ts'}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-[#080E18] p-1 rounded-xl border border-[#26364D] flex items-center">
                    {(['python', 'curl', 'ts'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        className={cn(
                          'px-2.5 py-1 rounded-lg text-xs font-mono uppercase transition-colors',
                          activeLang === lang
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
                    {copied ? 'کپی شد' : 'کپی'}
                  </Button>
                </div>
              </div>

              {/* Code Body */}
              <div className="p-6 overflow-x-auto text-start font-mono text-xs sm:text-sm text-[#E6EDF7] leading-relaxed bg-[#080E18]">
                <pre dir="ltr" className="whitespace-pre">
                  {snippets[activeLang]}
                </pre>
              </div>

              {/* Status bar */}
              <div className="border-t border-[#26364D] px-6 py-3 bg-[#121D30]/60 flex items-center justify-between text-xs text-[#A9B7CB]">
                <span>پروتکل: HTTPS REST + Server-Sent Events (SSE)</span>
                <span className="text-[#39C99A] font-bold">Latency: ~24ms to Frankfurt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
