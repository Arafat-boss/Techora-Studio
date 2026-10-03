"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Box, Code2, Sparkles, Layers } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "physical-products",
      num: "01",
      icon: Box,
      title: "Physical Products",
      category: "Industrial & Hardware",
      description:
        "Carefully designed objects focused on form, usability, ergonomics, and manufacturable detail across modern consumer devices and tactile tech.",
      features: [
        "3D Modeling & Rendering",
        "CAD & CMF Refinement",
        "Material Selection",
        "Rapid Prototyping Handover",
      ],
      image: "/images/fiZDgyyLGVGXBPPrxVokE0CNYf8.webp",
    },
    {
      id: "development",
      num: "02",
      icon: Code2,
      title: "Digital Engineering",
      category: "Full-Stack Development",
      description:
        "We create modern, responsive, and high-performing websites tailored to your business goals. Engineered with modern architectures, WebGL, and Next.js.",
      features: [
        "Responsive Web Applications",
        "Custom Interactive Motion",
        "SEO & Speed Optimization",
        "Component Design Systems",
      ],
      image: "/images/uYntMlmBGGuyvzWF4BXrjyJndY.webp",
    },
    {
      id: "brand-guidelines",
      num: "03",
      icon: Sparkles,
      title: "Brand Systems",
      category: "Strategic Identity",
      description:
        "We define strategic brand systems that align vision, visuals, and voice, helping companies communicate clearly, consistently, and confidently across every touchpoint.",
      features: [
        "Brand Strategy & Positioning",
        "Visual Identity & Logos",
        "Tone of Voice & Messaging",
        "Comprehensive Style Guides",
      ],
      image: "/images/C7BSp7QXaRs6vOZA6mQJJw1Afv8.webp",
    },
    {
      id: "product-design",
      num: "04",
      icon: Layers,
      title: "Product Design",
      category: "UI / UX & Systems",
      description:
        "Digital and physical interfaces refined with a 3D-first workflow, ensuring seamless ergonomics, fluid interaction patterns, and world-class usability.",
      features: [
        "User Experience Architecture",
        "Interactive Prototypes",
        "Figma Tokens & UI Kits",
        "Design System Governance",
      ],
      image: "/images/MmBthxVDgdEVOD8FF0y49WB0kKk.webp",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a2e435] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a2e435]" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            End-to-End Craft Across <br />
            <span className="font-serif-italic font-normal text-white/90">Hardware & Digital</span>
          </h2>
        </div>
        <p className="text-white/60 text-sm sm:text-base max-w-md font-normal leading-relaxed">
          From tangible physical computing to responsive web systems, we bridge industrial design and modern software engineering.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card3DTilt
                cursorText="Explore Service"
                className="h-full bg-[#0a0a0a] border border-white/10 hover:border-[#a2e435]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group overflow-hidden"
              >
                {/* Crosshairs at 4 corners */}
                <span className="absolute top-3 left-3 text-white/20 group-hover:text-[#a2e435]/70 transition-colors font-mono text-xs">
                  +
                </span>
                <span className="absolute top-3 right-3 text-white/20 group-hover:text-[#a2e435]/70 transition-colors font-mono text-xs">
                  +
                </span>
                <span className="absolute bottom-3 left-3 text-white/20 group-hover:text-[#a2e435]/70 transition-colors font-mono text-xs">
                  +
                </span>
                <span className="absolute bottom-3 right-3 text-white/20 group-hover:text-[#a2e435]/70 transition-colors font-mono text-xs">
                  +
                </span>

                {/* Top header row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-[#a2e435]/40 group-hover:bg-[#a2e435]/10 flex items-center justify-center transition-all">
                        <Icon className="w-5 h-5 text-white group-hover:text-[#a2e435] transition-colors" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider block">
                          {service.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#a2e435] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-lg font-mono font-bold text-white/20 group-hover:text-[#a2e435]/60 transition-colors">
                      {service.num}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs text-white/80 font-mono bg-white/[0.02] border border-white/5 px-3 py-2 rounded-lg"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#a2e435] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview Image Container */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-white/20 transition-all">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-1.5 group-hover:bg-[#a2e435] group-hover:text-black transition-colors">
                    <span className="font-semibold">Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
