"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Users, Zap, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import TeamSection from "@/components/TeamSection";
import Card3DTilt from "@/components/Card3DTilt";

export default function AboutPage() {
  const stats = [
    {
      value: "10X",
      label: "Velocity Multiplier",
      description: "Accelerated development cycles via 3D-first prototypes and modular tokens.",
    },
    {
      value: "150+",
      label: "Global Launches",
      description: "Shipped physical consumer electronics and high-conversion software suites.",
    },
    {
      value: "99.4%",
      label: "Client Retention",
      description: "Long-term engineering partnerships with leading Silicon Valley tech ventures.",
    },
    {
      value: "14",
      label: "Design Honors",
      description: "Recognized by Awwwards, Red Dot, FWA, and Industrial Design Excellence.",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Clarity over Complexity",
      desc: "Every curve in hardware and every line of code exists to solve a real human need with effortless elegance.",
    },
    {
      icon: Zap,
      title: "Tactile & Digital Convergence",
      desc: "We believe the future of computing bridges physical tactile hardware and fluid spatial digital interfaces.",
    },
    {
      icon: ShieldCheck,
      title: "Industrial-Grade Rigor",
      desc: "From aerospace tolerances in CAD models to sub-millisecond WebGL frame render times.",
    },
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-4xl space-y-6 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a2e435]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a2e435]" />
          <span>About Techora</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Pioneering the Future of <br />
          <span className="font-serif-italic font-normal text-[#a2e435]">Form, Code & Experience</span>
        </h1>

        <p className="text-base sm:text-xl text-white/70 font-normal leading-relaxed max-w-3xl">
          Our mission is to empower innovative teams, designers, and creators with world-class industrial product craft and cutting-edge digital software engineering.
        </p>

        <div className="pt-4 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#a2e435] text-black font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#83ca16] transition-all shadow-[0_0_20px_rgba(162,228,53,0.3)] hover:scale-105"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
          >
            <span>Explore Archive</span>
          </Link>
        </div>
      </div>

      {/* Big Hero Image */}
      <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl mb-24">
        <Image
          src="/images/CKjpQCXbgdY4rJr7UEGzaixoAe8.webp"
          alt="Techora Studio Space"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a2e435] animate-ping" />
            <span className="text-xs font-mono text-white/90 uppercase tracking-wider">
              TECHORA LABS & INDUSTRIAL PROTOTYPING HQ
            </span>
          </div>
          <span className="text-xs font-mono text-white/50">
            EST. 2021 — SAN FRANCISCO & TOKYO
          </span>
        </div>
      </div>

      {/* Animated Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card3DTilt className="h-full bg-[#0d0d0d] border border-white/10 hover:border-[#a2e435]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-colors shadow-xl">
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter block mb-2 font-mono">
                  {stat.value}
                </span>
                <h3 className="text-base font-semibold text-[#a2e435] tracking-tight mb-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-4 pt-4 border-t border-white/5">
                {stat.description}
              </p>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase text-[#a2e435] tracking-widest block">
            Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How We Think & Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-[#0b0b0b] border border-white/10 rounded-3xl p-8 hover:border-[#a2e435]/30 transition-colors space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#a2e435]/10 border border-[#a2e435]/30 flex items-center justify-center text-[#a2e435]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {val.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section Component */}
      <TeamSection />
    </div>
  );
}
