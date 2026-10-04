"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      quote:
        "Techora transformed our product workflow with instant tactile suggestions and real-time collaborative prototypes. Their 3D precision is unparalleled.",
      author: "Emily Carla",
      role: "Chief Executive Officer",
      company: "@Taskify",
      avatar: "/images/i1HQmHKuaqVIiFDDbnxu3eSvDM.png",
      rating: 5,
    },
    {
      quote:
        "The engineering efficiency in generating interactive Next.js components and responsive systems is unmatched. Seamless integration and weeks of time saved.",
      author: "Sarah Smith",
      role: "VP of Product Engineering",
      company: "@Codify",
      avatar: "/images/A4gp1uK8IPCXRgoVMvD6es6rXc.png",
      rating: 5,
    },
    {
      quote:
        "Incorporating Techora into our physical product and web development process has elevated our brand to global tier-1 standards.",
      author: "Johnathan Mercer",
      role: "Head of Design Systems",
      company: "@Brandora",
      avatar: "/images/t2IinwzJVpnMsudq7WYMD5Q.png",
      rating: 5,
    },
    {
      quote:
        "The craftsmanship in their industrial hardware models and fluid micro-animations gave our spatial computing launch tremendous credibility.",
      author: "Elena Rostova",
      role: "Founder & Lead Architect",
      company: "@NexusAI",
      avatar: "/images/xF67o9KL2pdUNFoIyhGVuR7nzI.png",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a2e435] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a2e435]" />
            <span>Client Praise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            What Are They Saying <br />
            <span className="font-serif-italic font-normal text-white/90">About Our Craft?</span>
          </h2>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#a2e435]/50 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#a2e435]/50 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid of Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card3DTilt
              cursorText="Read Review"
              className="h-full bg-[#0d0d0d] border border-white/10 hover:border-[#a2e435]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group overflow-hidden"
            >
              {/* Stars */}
              <div>
                <div className="flex items-center gap-1 text-[#a2e435] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#a2e435]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-white/10 mb-4 group-hover:text-[#a2e435]/30 transition-colors" />

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white/10 border border-white/20 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#a2e435] transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-xs text-white/50 font-mono">
                    {item.role} <span className="text-[#a2e435]">{item.company}</span>
                  </p>
                </div>
              </div>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
