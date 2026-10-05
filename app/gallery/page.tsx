"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Sparkles, Filter, Check, Eye } from "lucide-react";
import Card3DTilt from "@/components/Card3DTilt";
import FAQSection from "@/components/FAQSection";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState<any | null>(null);

  const categories = [
    "All",
    "Hardware",
    "Audio Device",
    "Imaging Device",
    "Input Device",
    "Personal Audio",
    "Gaming",
    "Home Audio",
  ];

  const galleryItems = [
    {
      id: "radio",
      title: "Monolithic Radio",
      category: "Audio Device",
      image: "/images/qUKerDw7PYRHdjtSo9a8dMyn4.webp",
      desc: "Tactile acoustic driver with machined aluminum chassis and analog frequency meter.",
      specs: ["Solid Anodized Aluminum", "Lossless Bluetooth 5.4", "Analog Tuning Dial", "18h Battery Life"],
      year: "2026",
    },
    {
      id: "knobs",
      title: "Precision Knobs",
      category: "Hardware",
      image: "/images/sXpGa5SBIHzL1ZlluLzui0nhLvU.webp",
      desc: "Modular mechanical rotary controllers with programmable haptic resistance.",
      specs: ["Magnetic Hall Effect Sensor", "RGB Ring Diffusion", "30-step Detent Physics", "CNC Brass Core"],
      year: "2026",
    },
    {
      id: "camera",
      title: "Aperture Optical Camera",
      category: "Imaging Device",
      image: "/images/ECZJ1Q4e4w0kBS44HaG0CXpt4.webp",
      desc: "Medium format digital rangefinder with tactile shutter dial and ceramic sensor mount.",
      specs: ["100MP BSI CMOS Sensor", "Electronic Viewfinder 5.7M", "Titanium Weather Sealed", "Dual CFexpress"],
      year: "2025",
    },
    {
      id: "floppy",
      title: "Tactile Memory Drive",
      category: "Input Device",
      image: "/images/NtEN2D6kMVU5edxcFtgwapyjzY.webp",
      desc: "Retro-futuristic magnetic storage cartridge with hardware cryptographic key.",
      specs: ["Encrypted NVMe Interface", "Biometric Lock Ring", "E-ink Label Display", "Ruggedized Alloy"],
      year: "2026",
    },
    {
      id: "wearable",
      title: "Bio-Sense Wearable",
      category: "Personal Audio",
      image: "/images/fiZDgyyLGVGXBPPrxVokE0CNYf8.webp",
      desc: "Ceramic wearable computing ring tracking autonomic nervous system metrics in real-time.",
      specs: ["PPG Optical Sensor", "Skin Temp Thermistor", "Titanium Inner Layer", "7-Day Charge"],
      year: "2026",
    },
    {
      id: "controller",
      title: "Spatial Pro Controller",
      category: "Gaming",
      image: "/images/uYntMlmBGGuyvzWF4BXrjyJndY.webp",
      desc: "Ergonomic spatial gaming controller with adaptive force-feedback triggers and gyro.",
      specs: ["Linear Resonant Actuators", "Hall Effect Thumbsticks", "Low-Latency 2.4GHz", "Textured Grip"],
      year: "2025",
    },
    {
      id: "smart-speaker",
      title: "Acoustic Sphere Speaker",
      category: "Home Audio",
      image: "/images/C7BSp7QXaRs6vOZA6mQJJw1Afv8.webp",
      desc: "Omnidirectional studio monitor engineered with cast basalt housing and planar tweeters.",
      specs: ["360° Spatial Dispersion", "Dual Passive Radiators", "Room Calibration Mic", "AirPlay 2 & Tidal Connect"],
      year: "2026",
    },
    {
      id: "wristwatch",
      title: "Chrono Precision Wristwatch",
      category: "Hardware",
      image: "/images/MmBthxVDgdEVOD8FF0y49WB0kKk.webp",
      desc: "Minimalist timepiece merging Swiss automatic escapement with OLED micro-complications.",
      specs: ["Sapphire Crystal Lens", "Grade 5 Titanium Case", "28,800 vph Caliber", "100m Water Resistance"],
      year: "2025",
    },
    {
      id: "earbuds",
      title: "Planar In-Ear Monitors",
      category: "Personal Audio",
      image: "/images/vec1OUSFxZWZEzCqG0buoUWEJ5c.webp",
      desc: "Ultra-thin planar magnetic drivers delivering ultra-high resolution transparent sound.",
      specs: ["14.2mm Planar Drivers", "Hybrid Active Noise Cancelling", "Custom Memory Foam Tips", "LDAC Hi-Res"],
      year: "2026",
    },
    {
      id: "headphones",
      title: "Acoustic Studio Over-Ear",
      category: "Personal Audio",
      image: "/images/yNthML8J1qeDjdj240uVozkKE.webp",
      desc: "Open-back reference headphones featuring magnetic beryllium transducers and plush leather.",
      specs: ["50mm Beryllium Transducers", "Floating Headband System", "Detachable Silver Cable", "Pure Reference Tuning"],
      year: "2025",
    },
    {
      id: "vr-headset",
      title: "Vision Neural Headset",
      category: "Gaming",
      image: "/images/9eD88IPKTw4s3e2ACxglJMr1zWs.webp",
      desc: "Ultra-compact micro-OLED headset with eye-tracking foveated rendering.",
      specs: ["Dual 4K Micro-OLED", "Pancake Optical Stack", "Inside-out 6DoF Tracking", "Sub-15ms Motion-to-Photon"],
      year: "2026",
    },
    {
      id: "laptop",
      title: "Modular Workspace Laptop",
      category: "Hardware",
      image: "/images/ruM84yQKYiTGK0mIWGzyalj01WQ.webp",
      desc: "Hot-swappable port modules, magnesium alloy unibody, and color-calibrated 120Hz display.",
      specs: ["16-inch 3.2K Mini-LED", "Liquid Metal Thermal Chamber", "Hot-Swap USB-C Modules", "100Wh High-Density Cell"],
      year: "2026",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-900 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#B8FF4B]" />
          <span>Physical & Digital Archive</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900">
          Gallery of <span className="font-serif-italic font-normal text-zinc-700">Form & Craft</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
          Carefully designed objects focused on form, usability, ergonomics, and manufacturable detail across modern consumer devices.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-black text-white font-semibold shadow-sm"
                  : "bg-black/[0.04] hover:bg-black hover:text-white text-zinc-600 border border-black/10 hover:border-black"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <Card3DTilt
                cursorText="View Object"
                onClick={() => setActiveModalItem(item)}
                className="cursor-pointer bg-white border border-black/10 hover:border-black/30 rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative group overflow-hidden"
              >
                {/* Crosshairs */}
                <span className="absolute top-3 left-3 text-zinc-300 group-hover:text-zinc-700 font-mono text-[10px]">
                  +
                </span>
                <span className="absolute top-3 right-3 text-zinc-300 group-hover:text-zinc-700 font-mono text-[10px]">
                  +
                </span>

                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-black/5 mb-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[11px] font-mono text-zinc-900 shadow-sm">
                    {item.category}
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white">
                    {item.year}
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-black group-hover:text-white text-zinc-700 flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-black/15 rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-zinc-100 hover:bg-black hover:text-white border border-black/10 flex items-center justify-center text-zinc-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mt-4">
                {/* Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-black/10">
                  <Image
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-900 font-semibold">
                      {activeModalItem.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Release: {activeModalItem.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                    {activeModalItem.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {activeModalItem.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-black/10">
                    <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider block font-semibold">
                      Hardware Specifications:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {activeModalItem.specs.map((spec: string, sIdx: number) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 text-xs font-mono text-zinc-800 bg-[#f9f9fb] px-3 py-2 rounded-lg border border-black/5"
                        >
                          <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <button
                      onClick={() => setActiveModalItem(null)}
                      className="w-full bg-black text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <div className="mt-20">
        <FAQSection />
      </div>
    </div>
  );
}
