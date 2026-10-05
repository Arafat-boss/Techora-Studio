"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services are offered by Techora?",
      a: "We design and build modern, high-performing websites, interactive digital systems, and industrial hardware prototypes using custom 3D-first engineering and modern Next.js architecture.",
    },
    {
      q: "Who is this studio designed for?",
      a: "Our studio is ideal for funded startups, pioneering agencies, hardware innovators, and creators needing world-class digital presence, tactile prototypes, and high-conversion brand systems.",
    },
    {
      q: "How do new client projects start?",
      a: "Every project kicks off with an in-depth discovery sprint to define requirements, design aesthetic benchmarks, technical constraints, and clear milestone timelines.",
    },
    {
      q: "What is the typical project delivery timeline?",
      a: "Timelines depend on complexity, but most digital web systems and industrial prototype design sprints are completed within two to four weeks.",
    },
    {
      q: "Can our internal team fully customize and extend the build?",
      a: "Yes. Everything is engineered with modular design tokens, clean TypeScript, reusable components, and comprehensive documentation so your engineers can scale effortlessly.",
    },
    {
      q: "Do you offer post-launch support and training?",
      a: "Yes, every delivery includes dedicated post-launch support, continuous performance monitoring, and an interactive 2-hour onboarding training session with your core team.",
    },
    {
      q: "What about ongoing design updates and feature releases?",
      a: "We offer dedicated retainer sprints and agile maintenance packages to expand your design system, launch new product pages, and optimize conversion metrics.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto border-t border-black/10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-900 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#B8FF4B]" />
          <span>Clarity & Answers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 uppercase font-mono">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-zinc-600">
          This is different — we get that. You may have questions, and here are answers straight from our design team.
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white border-black shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                  : "bg-[#f9f9fb] border-black/10 hover:border-black/25 hover:bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-semibold text-zinc-900 tracking-tight">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-black border-black text-white rotate-45"
                      : "bg-black/5 border-black/10 text-zinc-600"
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-black/5 pt-4 font-normal">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
