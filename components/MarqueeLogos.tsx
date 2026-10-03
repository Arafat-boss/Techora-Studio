"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Compass, Orbit, Command, Shield, Zap } from "lucide-react";

export default function MarqueeLogos() {
  const logos = [
    { name: "FLOWBOARD", icon: Layers, metric: "Architecture" },
    { name: "AGENTIFY", icon: Cpu, metric: "AI Systems" },
    { name: "TODOFUSION", icon: Zap, metric: "Productivity" },
    { name: "IDENTIFY", icon: Shield, metric: "Security" },
    { name: "CODIFY", icon: Command, metric: "Dev Infra" },
    { name: "NEXUS AI", icon: Orbit, metric: "Neural Tech" },
    { name: "LANDIFY", icon: Compass, metric: "Spatial Web" },
    { name: "FLEXIFY", icon: Sparkles, metric: "Design Systems" },
  ];

  return (
    <section className="w-full py-10 border-y border-white/[0.08] bg-black/40 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-12 sm:gap-16">
        {[...logos, ...logos, ...logos].map((logo, idx) => {
          const Icon = logo.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 group opacity-50 hover:opacity-100 transition-opacity cursor-pointer flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 group-hover:border-[#a2e435]/50 group-hover:bg-[#a2e435]/10 flex items-center justify-center transition-all">
                <Icon className="w-4 h-4 text-white group-hover:text-[#a2e435] transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wider text-white font-mono uppercase">
                  {logo.name}
                </span>
                <span className="text-[10px] text-white/40 font-mono">
                  {logo.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
