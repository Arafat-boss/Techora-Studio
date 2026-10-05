"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronRight, Compass } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

export default function HeroSection() {
  const showcaseItems = [
    {
      id: "knobs",
      title: "Tactile Knobs",
      category: "Hardware",
      image: "/images/qUKerDw7PYRHdjtSo9a8dMyn4.webp",
      desc: "Precision aluminum rotary controls with haptic feedback.",
    },
    {
      id: "vr-headset",
      title: "Spatial Headset",
      category: "Personal Audio",
      image: "/images/sXpGa5SBIHzL1ZlluLzui0nhLvU.webp",
      desc: "Ergonomic mixed reality headset crafted for spatial workflows.",
    },
    {
      id: "laptop",
      title: "Sleek Laptop",
      category: "Hardware",
      image: "/images/ECZJ1Q4e4w0kBS44HaG0CXpt4.webp",
      desc: "Unibody magnesium chassis with integrated ambient cooling.",
    },
    {
      id: "radio",
      title: "Acoustic Radio",
      category: "Audio Device",
      image: "/images/NtEN2D6kMVU5edxcFtgwapyjzY.webp",
      desc: "Monolithic acoustic driver with warm brass mechanical dials.",
    },
  ];

  return (
    <section className="relative w-full pt-36 sm:pt-44 pb-20 px-4 sm:px-6 md:px-10 overflow-hidden min-h-[90vh] flex flex-col justify-between">
      {/* Full Hero Section Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 select-none overflow-hidden">
        <Image
          src="/images/CKjpQCXbgdY4rJr7UEGzaixoAe8.webp"
          alt="Techora Studio Hero Background"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={95}
        />
        {/* Layered Cinematic Vignettes and Gradients */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#a2e435]/15 blur-[160px] pointer-events-none rounded-full" />
      </div>

      {/* Main Hero Header Content */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6 relative z-10">
        {/* Eyebrow / Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/70 border border-white/15 text-xs font-mono text-white/90 shadow-2xl backdrop-blur-xl"
        >
          <span className="w-2 h-2 rounded-full bg-[#a2e435] shadow-[0_0_10px_#a2e435] animate-pulse" />
          <span>Next-Gen Design & Technology Studio</span>
          <span className="text-white/30">|</span>
          <span className="text-[#a2e435] flex items-center gap-1 font-sans font-medium">
            Available for Q1/Q2 <ChevronRight className="w-3 h-3" />
          </span>
        </motion.div>

        {/* Sub-eyebrow with editorial serif */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl text-white/80 font-serif-italic max-w-xl drop-shadow-md"
        >
          Thoughtful design across{" "}
          <span className="text-white not-italic font-medium">brands</span>,{" "}
          <span className="text-white not-italic font-medium">physical products</span>, and{" "}
          <span className="text-[#a2e435] font-serif-italic">digital experiences</span>
        </motion.p>

        {/* Main H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[1.02] drop-shadow-2xl"
        >
          Design for <span className="font-serif-italic font-normal text-white/95">Everyone</span>
        </motion.h1>

        {/* Studio Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-normal leading-relaxed drop-shadow"
        >
          We help ideas become clear, usable, and beautifully crafted. A multidisciplinary design and engineering studio translating visionary concepts into iconic physical and digital realities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-white text-black hover:bg-[#a2e435] font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(162,228,53,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Schedule a call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-black/60 hover:bg-black/80 border border-white/20 hover:border-white/40 text-white font-medium text-sm px-7 py-4 rounded-full transition-all duration-200 backdrop-blur-xl shadow-lg"
            data-cursor-text="Explore Gallery"
          >
            <Compass className="w-4 h-4 text-[#a2e435]" />
            <span>Explore Showcase</span>
          </Link>
        </motion.div>
      </div>

      {/* Interactive 3D Showcase Grid */}
      <div className="max-w-7xl mx-auto w-full mt-20 sm:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {showcaseItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
          >
            <Link href={`/gallery`} className="block group">
              <Card3DTilt
                cursorText="Preview gallery"
                className="bg-[#0e0e0e]/90 backdrop-blur-md border border-white/10 group-hover:border-[#a2e435]/50 rounded-2xl p-3.5 flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                {/* Corner Crosshair Decoration */}
                <div className="absolute top-2 left-2 text-white/20 group-hover:text-[#a2e435]/60 transition-colors font-mono text-[10px]">
                  +
                </div>
                <div className="absolute top-2 right-2 text-white/20 group-hover:text-[#a2e435]/60 transition-colors font-mono text-[10px]">
                  +
                </div>

                {/* Product Image Area */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/80 border border-white/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90">
                    {item.category}
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-3 pt-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-white group-hover:text-[#a2e435] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-white/50 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#a2e435] group-hover:text-black text-white/60 flex items-center justify-center transition-all flex-shrink-0 ml-2">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Card3DTilt>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
