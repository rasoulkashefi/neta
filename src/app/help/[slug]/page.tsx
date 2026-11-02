import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HELP_ARTICLES } from '@/lib/mockData';
import { ArrowLeft, Clock } from 'lucide-react';

export function generateStaticParams() {
  return HELP_ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export default async function HelpArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = HELP_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF7] flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#A9B7CB] mb-8 font-medium">
            <Link href="/" className="hover:text-[#38D9F5]">نتا</Link>
            <span>/</span>
            <Link href="/help" className="hover:text-[#38D9F5]">مرکز مستندات</Link>
            <span>/</span>
            <span className="text-[#38D9F5]">{article.categoryLabel}</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="cyan" size="sm">{article.categoryLabel}</Badge>
              <span className="text-xs text-[#64748B] flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#E6EDF7] tracking-tight leading-[1.35] mb-4">
              {article.title}
            </h1>
            <p className="text-sm sm:text-base text-[#A9B7CB] leading-[1.8] pb-6 border-b border-[#26364D]">
              {article.excerpt}
            </p>
          </div>

          {/* Article formatted content */}
          <div className="prose prose-invert max-w-none text-[#E6EDF7] space-y-6 text-sm leading-[1.85]">
            <div className="p-6 rounded-2xl bg-[#121D30] border border-[#26364D] whitespace-pre-line font-sans">
              {article.content}
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="mt-12 pt-8 border-t border-[#26364D] flex items-center justify-between">
            <Link href="/help">
              <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-4 h-4 rtl:rotate-180" />}>
                بازگشت به فهرست مقالات
              </Button>
            </Link>
            <Link href="/test">
              <Button variant="primary" size="sm">
                تست اتصال شما
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
