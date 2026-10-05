"use client";

import React from "react";
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
    <section className="w-full py-9 border-y border-black/10 bg-[#f9f9fb] overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f9f9fb] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f9f9fb] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-12 sm:gap-16">
        {[...logos, ...logos, ...logos].map((logo, idx) => {
          const Icon = logo.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 group opacity-70 hover:opacity-100 transition-opacity cursor-pointer flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-black/[0.04] border border-black/10 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all text-zinc-700">
                <Icon className="w-4 h-4 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wider text-zinc-900 font-mono uppercase">
                  {logo.name}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
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
