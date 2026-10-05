"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, ArrowRight, CheckCircle } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "idea",
      num: "01",
      icon: Lightbulb,
      title: "Discovery & Strategy",
      subtitle: "Idea & Alignment",
      description:
        "We meet with your core team to learn about your visionary concept, target audience, technical requirements, and strategic goals.",
      deliverables: ["Product Roadmap", "Market Positioning", "Technical Scope", "Architecture Blueprints"],
      image: "/images/CJx6vuv3UJI2IyPXZcvkIcsONY.jpg",
    },
    {
      id: "design",
      num: "02",
      icon: PenTool,
      title: "Design & Prototyping",
      subtitle: "3D & UI/UX Systems",
      description:
        "We craft high-fidelity interactive prototypes, industrial 3D renderings, and cohesive design tokens ready for feedback and stakeholder presentation.",
      deliverables: ["Figma Design Systems", "3D CAD Models", "Micro-Interactions", "User Journey Maps"],
      image: "/images/ueDmcBYocjsloR3rQA3UY7NtQ0c.jpg",
    },
    {
      id: "web-dev",
      num: "03",
      icon: Code2,
      title: "Engineering & Craft",
      subtitle: "Next-Gen Development",
      description:
        "We develop software using clean modern frameworks, silky smooth WebGL animations, responsive layouts, and robust SEO infrastructure.",
      deliverables: ["Next.js App Router", "Framer Motion Physics", "API Integrations", "Sub-100ms Page Loads"],
      image: "/images/PdQPVs4R7CP1zXb7Qk646wxYFw.jpg",
    },
    {
      id: "launch",
      num: "04",
      icon: Rocket,
      title: "Deployment & Scale",
      subtitle: "Launch & Support",
      description:
        "When the build is perfected, we orchestrate global edge deployment, conduct comprehensive QA, and run an in-depth training session for your team.",
      deliverables: ["Global Edge Deployment", "2hr Team Training", "Full Source Code Handover", "Ongoing Release Support"],
      image: "/images/CKjpQCXbgdY4rJr7UEGzaixoAe8.webp",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-t border-black/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-[#5e9c04] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
          <span>How It Works</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
          From Idea to <span className="font-serif-italic font-normal text-zinc-700">Launch</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-600">
          Crafting Your Next-Gen Digital Success Path with a streamlined, collaborative 4-step workflow.
        </p>
      </div>

      {/* Step Tabs Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                isActive
                  ? "bg-white border-black shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                  : "bg-[#f9f9fb] border-black/5 hover:border-black/20"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeStepGlow"
                  className="absolute top-0 left-0 right-0 h-1 bg-black"
                />
              )}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold ${isActive ? "text-black" : "text-zinc-400"}`}>
                  STAGE {step.num}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-zinc-400"}`} />
              </div>
              <h3 className={`text-base font-semibold ${isActive ? "text-zinc-900" : "text-zinc-600"}`}>
                {step.subtitle}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Panel */}
      <div className="bg-[#f9f9fb] border border-black/10 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-black text-white font-bold font-mono text-sm flex items-center justify-center">
                  {steps[activeStep].num}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
                  Step {activeStep + 1} of 4
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {steps[activeStep].description}
              </p>

              {/* Deliverables tags */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider block font-semibold">
                  Key Deliverables & Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white border border-black/10 px-3 py-2 rounded-xl text-xs text-zinc-800 font-mono shadow-xs"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#5e9c04] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation button */}
              <div className="pt-4 flex items-center gap-4">
                {activeStep < steps.length - 1 ? (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-800 font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-sm"
                  >
                    <span>Next: Stage 0{activeStep + 2}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveStep(0)}
                    className="inline-flex items-center gap-2 bg-black text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    <span>Back to Start</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Stage Visual */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 border border-black/10 shadow-md">
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating badge inside visual */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-ping" />
                  <span>Phase: {steps[activeStep].subtitle}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
