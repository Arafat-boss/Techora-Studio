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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-[#5e9c04] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
          <span>About Techora</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-tight">
          Pioneering the Future of <br />
          <span className="font-serif-italic font-normal text-zinc-700">Form, Code & Experience</span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-3xl">
          Our mission is to empower innovative teams, designers, and creators with world-class industrial product craft and cutting-edge digital software engineering.
        </p>

        <div className="pt-4 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-800 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-sm hover:scale-105"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white border border-black/10 hover:border-black/30 text-zinc-900 text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-xs"
          >
            <span>Explore Archive</span>
          </Link>
        </div>
      </div>

      {/* Big Hero Image */}
      <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-100 border border-black/10 shadow-md mb-24">
        <Image
          src="/images/CKjpQCXbgdY4rJr7UEGzaixoAe8.webp"
          alt="Techora Studio Space"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16] animate-ping" />
            <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              TECHORA LABS & INDUSTRIAL PROTOTYPING HQ
            </span>
          </div>
          <span className="text-xs font-mono text-white/70">
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
            <Card3DTilt className="h-full bg-white border border-black/10 hover:border-black/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tighter block mb-2 font-mono">
                  {stat.value}
                </span>
                <h3 className="text-base font-semibold text-[#5e9c04] tracking-tight mb-2 uppercase font-mono text-xs">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-4 pt-4 border-t border-black/5 font-normal">
                {stat.description}
              </p>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase text-[#5e9c04] tracking-widest block font-semibold">
            Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            How We Think & Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-[#f9f9fb] border border-black/10 rounded-3xl p-8 hover:border-black/30 hover:bg-white transition-all space-y-4 shadow-xs"
              >
                <div className="w-12 h-12 rounded-2xl bg-black/[0.04] border border-black/10 flex items-center justify-center text-[#5e9c04]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {val.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
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
