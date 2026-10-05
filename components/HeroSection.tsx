"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
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
          className="object-cover object-center scale-105 opacity-85"
          priority
          quality={100}
        />
        {/* Soft Vignette blending cleanly into White */}
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60" />
      </div>

      {/* Main Hero Header Content */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6 relative z-10">
        {/* Sub-eyebrow with editorial serif */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl text-zinc-700 font-serif-italic max-w-xl"
        >
          Thoughtful design across{" "}
          <span className="text-zinc-900 not-italic font-semibold">brands</span>,{" "}
          <span className="text-zinc-900 not-italic font-semibold">physical products</span>, and{" "}
          <span className="text-zinc-900 font-serif-italic font-medium">digital experiences</span>
        </motion.p>

        {/* Main H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 leading-[1.02]"
        >
          Design for <span className="font-serif-italic font-normal text-zinc-800">Everyone</span>
        </motion.h1>

        {/* Studio Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl font-normal leading-relaxed"
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
            className="group relative inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-800 font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Schedule a call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-black/10 hover:border-black/25 text-zinc-900 font-medium text-sm px-7 py-4 rounded-full transition-all duration-200 backdrop-blur-xl shadow-sm"
            data-cursor-text="Explore Gallery"
          >
            <Compass className="w-4 h-4 text-zinc-700" />
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
                className="bg-white/90 backdrop-blur-xl border border-black/10 group-hover:border-black/30 rounded-2xl p-3.5 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden"
              >
                {/* Corner Crosshair Decoration */}
                <div className="absolute top-2 left-2 text-zinc-300 group-hover:text-zinc-700 transition-colors font-mono text-[10px]">
                  +
                </div>
                <div className="absolute top-2 right-2 text-zinc-300 group-hover:text-zinc-700 transition-colors font-mono text-[10px]">
                  +
                </div>

                {/* Product Image Area */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 border border-black/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[11px] font-mono text-zinc-900 shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-3 pt-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-zinc-900 group-hover:text-black transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-black group-hover:text-white text-zinc-700 flex items-center justify-center transition-all flex-shrink-0 ml-2">
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
