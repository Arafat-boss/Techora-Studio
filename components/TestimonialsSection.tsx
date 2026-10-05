"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      id: "t1",
      quote:
        "Techora transformed our product workflow with instant tactile suggestions and real-time collaborative prototypes. Their 3D precision is unparalleled.",
      author: "Emily Carla",
      role: "Chief Executive Officer",
      company: "@Taskify",
      avatar: "/images/i1HQmHKuaqVIiFDDbnxu3eSvDM.png",
      rating: 5,
    },
    {
      id: "t2",
      quote:
        "The engineering efficiency in generating interactive Next.js components and responsive systems is unmatched. Seamless integration and weeks of time saved.",
      author: "Sarah Smith",
      role: "VP of Product Engineering",
      company: "@Codify",
      avatar: "/images/A4gp1uK8IPCXRgoVMvD6es6rXc.png",
      rating: 5,
    },
    {
      id: "t3",
      quote:
        "Incorporating Techora into our physical product and web development process has elevated our brand to global tier-1 standards.",
      author: "Johnathan Mercer",
      role: "Head of Design Systems",
      company: "@Brandora",
      avatar: "/images/t2IinwzJVpnMsudq7WYMD5Q.png",
      rating: 5,
    },
    {
      id: "t4",
      quote:
        "The craftsmanship in their industrial hardware models and fluid micro-animations gave our spatial computing launch tremendous credibility.",
      author: "Elena Rostova",
      role: "Founder & Lead Architect",
      company: "@NexusAI",
      avatar: "/images/xF67o9KL2pdUNFoIyhGVuR7nzI.png",
      rating: 5,
    },
    {
      id: "t5",
      quote:
        "Working with Techora felt like unlocking a new dimension of design capability. Every iteration pushed the boundaries of modern aesthetics.",
      author: "Marcus Vance",
      role: "Head of Innovation",
      company: "@Synthetix",
      avatar: "/images/4XTnLW7JZjeMcl56gnBMDX20k.png",
      rating: 5,
    },
    {
      id: "t6",
      quote:
        "From conceptual sketch to high-fidelity tactile UI, the turnaround speed and obsessive attention to detail blew our executive team away.",
      author: "Chloe Dupond",
      role: "Chief Product Officer",
      company: "@Veritas",
      avatar: "/images/7QzAJUIdfcX0NgIDOeWiBZaU1A.png",
      rating: 5,
    },
    {
      id: "t7",
      quote:
        "The component architecture is so robust and performant that our site speeds actually improved by 40% after rolling out the redesign.",
      author: "David Kross",
      role: "Senior VP of Technology",
      company: "@Hyperlink",
      avatar: "/images/Bwqsulc9a1MtU5g4fle62Cp4E.png",
      rating: 5,
    },
    {
      id: "t8",
      quote:
        "The tactile feedback, glassmorphic subtleties, and sleek interaction physics created an emotional connection with our users from day one.",
      author: "Maya Lin",
      role: "Principal Architect",
      company: "@QuantumCore",
      avatar: "/images/5GbIrngxJhowImxRpAWUx622xc.png",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Compute 3 items starting from current index
  const visibleItems = [
    testimonials[currentIdx % testimonials.length],
    testimonials[(currentIdx + 1) % testimonials.length],
    testimonials[(currentIdx + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-t border-black/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-900 mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B8FF4B]" />
            <span>Client Praise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            What Are They Saying <br />
            <span className="font-serif-italic font-normal text-zinc-700">About Our Craft?</span>
          </h2>
        </div>

        {/* Carousel controls & pagination count */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-600 font-semibold">
            <span className="text-zinc-900">
              {String(currentIdx + 1).padStart(2, "0")}
            </span>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-500">
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 active:scale-95 border border-black/10 flex items-center justify-center text-zinc-900 transition-all cursor-pointer shadow-xs hover:border-black/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 active:scale-95 border border-black/10 flex items-center justify-center text-zinc-900 transition-all cursor-pointer shadow-xs hover:border-black/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Animated Grid of Testimonials */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item, slotIdx) => {
              // Hide 2nd item on mobile, 3rd on tablet
              const visibilityClass =
                slotIdx === 0
                  ? "block"
                  : slotIdx === 1
                  ? "hidden md:block"
                  : "hidden lg:block";

              return (
                <motion.div
                  key={`${item.id}-${currentIdx}`}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 40 : -40,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -40 : 40,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: slotIdx * 0.05,
                  }}
                  className={`h-full ${visibilityClass}`}
                >
                  <Card3DTilt
                    cursorText="Read Review"
                    className="h-full bg-white border border-black/10 hover:border-black/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.06)] relative group overflow-hidden"
                  >
                    {/* Stars */}
                    <div>
                      <div className="flex items-center gap-1 text-black mb-6">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#B8FF4B] text-[#B8FF4B]"
                          />
                        ))}
                      </div>

                      <Quote className="w-8 h-8 text-black/10 mb-4 group-hover:text-black/20 transition-colors" />

                      <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-normal mb-8 min-h-[5.5rem]">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-zinc-100 border border-black/10 flex-shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-black transition-colors">
                          {item.author}
                        </h4>
                        <p className="text-xs text-zinc-500 font-mono">
                          {item.role}{" "}
                          <span className="text-zinc-700 font-medium">
                            {item.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Card3DTilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-12">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIdx ? 1 : -1);
              setCurrentIdx(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIdx
                ? "w-8 bg-zinc-900"
                : "w-2 bg-black/15 hover:bg-black/30"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
