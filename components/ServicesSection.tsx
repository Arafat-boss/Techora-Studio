"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Box, Code2, Sparkles, Layers } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

export default function ServicesSection() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-900 mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B8FF4B]" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            End-to-End Craft Across <br />
            <span className="font-serif-italic font-normal text-zinc-700">Hardware & Digital</span>
          </h2>
        </div>
        <p className="text-zinc-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
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
                className="h-full bg-white border border-black/10 hover:border-black/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative group overflow-hidden"
              >
                {/* Crosshairs at 4 corners */}
                <span className="absolute top-3 left-3 text-zinc-300 group-hover:text-zinc-800 transition-colors font-mono text-xs">
                  +
                </span>
                <span className="absolute top-3 right-3 text-zinc-300 group-hover:text-zinc-800 transition-colors font-mono text-xs">
                  +
                </span>
                <span className="absolute bottom-3 left-3 text-zinc-300 group-hover:text-zinc-800 transition-colors font-mono text-xs">
                  +
                </span>
                <span className="absolute bottom-3 right-3 text-zinc-300 group-hover:text-zinc-800 transition-colors font-mono text-xs">
                  +
                </span>

                {/* Top header row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/[0.04] border border-black/10 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all text-zinc-700">
                        <Icon className="w-5 h-5 transition-colors" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                          {service.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 group-hover:text-black transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-lg font-mono font-bold text-zinc-300 group-hover:text-zinc-600 transition-colors">
                      {service.num}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs text-zinc-700 font-mono bg-[#f9f9fb] border border-black/5 px-3 py-2 rounded-lg"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview Image Container */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100 border border-black/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs text-white flex items-center gap-1.5 group-hover:bg-black transition-colors shadow-sm">
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
