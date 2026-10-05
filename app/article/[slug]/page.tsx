import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Share2, Sparkles, CheckCircle2 } from "lucide-react";
import { articlesData } from "@/lib/articles";
import Card3DTilt from "@/components/Card3DTilt";

export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = articlesData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        href="/article"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-black transition-colors mb-8 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to all insights</span>
      </Link>

      {/* Article Header */}
      <div className="space-y-6 mb-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-[#5e9c04] font-semibold">
            {article.category}
          </span>
          <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="text-zinc-300">•</span>
          <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author Bio Row */}
        <div className="flex items-center justify-between pt-6 border-t border-black/10">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-100 border border-black/10">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900">
                {article.author.name}
              </div>
              <div className="text-xs font-mono text-[#5e9c04]">
                {article.author.role}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-100 border border-black/10 shadow-md mb-12">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
      </div>

      {/* Article Body Content */}
      <div className="prose max-w-none space-y-6 text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
        {article.content.map((paragraph, pIdx) => {
          if (paragraph.startsWith("Key takeaways") || paragraph.startsWith("Best practices")) {
            return (
              <h2
                key={pIdx}
                className="text-2xl font-bold text-zinc-900 pt-6 border-t border-black/10 tracking-tight"
              >
                {paragraph}
              </h2>
            );
          }
          if (/^\d\./.test(paragraph)) {
            return (
              <div
                key={pIdx}
                className="flex items-start gap-3 bg-[#f9f9fb] border border-black/10 p-4 rounded-xl text-sm sm:text-base font-mono text-zinc-900"
              >
                <CheckCircle2 className="w-5 h-5 text-[#5e9c04] flex-shrink-0 mt-0.5" />
                <span>{paragraph.replace(/^\d\.\s*/, "")}</span>
              </div>
            );
          }
          return <p key={pIdx}>{paragraph}</p>;
        })}
      </div>

      {/* Tags */}
      <div className="pt-10 mt-12 border-t border-black/10 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mr-2 font-semibold">
          Topics:
        </span>
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Articles */}
      <div className="mt-20 pt-16 border-t border-black/10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-[#5e9c04] uppercase tracking-widest block mb-1 font-semibold">
              Keep Reading
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/article"
            className="text-xs font-mono text-zinc-500 hover:text-black transition-colors flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedArticles.map((rel) => (
            <Link key={rel.slug} href={`/article/${rel.slug}`} className="block group">
              <Card3DTilt className="h-full bg-white border border-black/10 hover:border-black/30 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-100 mb-4 border border-black/5">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <span className="text-xs font-mono text-[#5e9c04] block mb-1.5 font-semibold">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-black transition-colors leading-snug">
                    {rel.title}
                  </h3>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>{rel.readTime}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-black transition-colors" />
                </div>
              </Card3DTilt>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
