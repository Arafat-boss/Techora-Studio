"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, Sparkles } from "lucide-react";
import { articlesData } from "@/lib/articles";
import Card3DTilt from "@/components/Card3DTilt";

export default function ArticleIndexPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", "Design Architecture", "Web Engineering", "Visual Identity", "Product Strategy", "Industrial Tech", "Engineering"];

  const filteredArticles =
    selectedTag === "All"
      ? articlesData
      : articlesData.filter((a) => a.category === selectedTag);

  return (
    <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a2e435]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a2e435]" />
          <span>Journal & Insights</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
          Design <span className="font-serif-italic font-normal text-[#a2e435]">Insights</span>
        </h1>
        <p className="text-sm sm:text-base text-white/60 max-w-2xl font-normal leading-relaxed">
          Essays, engineering walkthroughs, and studio research covering industrial design, tactile computing, and high-performance web systems.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
        {allTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-[#a2e435] text-black font-semibold shadow-[0_0_15px_rgba(162,228,53,0.3)]"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white border border-white/10"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, idx) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Link href={`/article/${article.slug}`} className="block group h-full">
              <Card3DTilt
                cursorText="Read Article"
                className="h-full bg-[#0e0e0e] border border-white/10 hover:border-[#a2e435]/50 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                {/* Crosshairs */}
                <span className="absolute top-3 left-3 text-white/20 group-hover:text-[#a2e435]/70 font-mono text-[10px]">
                  +
                </span>
                <span className="absolute top-3 right-3 text-white/20 group-hover:text-[#a2e435]/70 font-mono text-[10px]">
                  +
                </span>

                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/70 border border-white/5 mb-5 flex items-center justify-center">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#a2e435]">
                      {article.category}
                    </div>
                  </div>

                  {/* Date and Read time */}
                  <div className="flex items-center gap-3 text-xs font-mono text-white/40 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white group-hover:text-[#a2e435] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-white/60 mt-2 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author row */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 border border-white/20">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-xs font-semibold text-white/90">
                      {article.author.name}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#a2e435] group-hover:text-black text-white/60 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Card3DTilt>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
