"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StudioStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const statement =
    "We are a design studio focused on clarity, craft, and real-world execution. Our work spans brand systems, digital experiences, and physical products — all shaped through thoughtful design decisions and precise 3D.";

  const words = statement.split(" ");

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto"
    >
      <div className="flex flex-col items-start gap-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a2e435]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a2e435]" />
          <span>Studio Philosophy</span>
        </div>

        {/* Word by word illuminated paragraph */}
        <p className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.3] text-white/30 flex flex-wrap gap-x-2.5 sm:gap-x-3.5 gap-y-1 sm:gap-y-2">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
          })}
        </p>

        {/* Studio Specs footer */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-white/10 mt-8">
          <div>
            <div className="text-xs font-mono text-white/40 uppercase">Method</div>
            <div className="text-sm font-semibold text-white mt-1">3D-First Workflow</div>
          </div>
          <div>
            <div className="text-xs font-mono text-white/40 uppercase">Standard</div>
            <div className="text-sm font-semibold text-white mt-1">Industrial Craft</div>
          </div>
          <div>
            <div className="text-xs font-mono text-white/40 uppercase">Delivery</div>
            <div className="text-sm font-semibold text-white mt-1">Production Ready</div>
          </div>
          <div>
            <div className="text-xs font-mono text-white/40 uppercase">Reach</div>
            <div className="text-sm font-semibold text-white mt-1">Global Teams</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 1)"]
  );

  const isSpecial = word.toLowerCase().includes("brand") || word.toLowerCase().includes("physical") || word.toLowerCase().includes("3d");

  return (
    <motion.span
      style={{ opacity, color }}
      className={`transition-colors duration-150 ${isSpecial ? "font-serif-italic font-normal" : ""}`}
    >
      {word}
    </motion.span>
  );
}
