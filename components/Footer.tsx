"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#f8f8fa] text-zinc-900 pt-20 pb-12 px-4 sm:px-6 md:px-10 border-t border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Action Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-14 border-b border-black/10 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#5e9c04] flex items-center gap-2 mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Start a Conversation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
              Have a Project in Mind? <br />
              <span className="font-serif-italic font-normal text-zinc-700">Let's Build Something Iconic.</span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-black text-white hover:bg-[#84cc16] hover:text-black font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Middle Links & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-14 border-b border-black/10">
          {/* Studio Info (Cols 1-4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-black flex items-center justify-center p-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <span className="font-bold text-lg tracking-widest uppercase text-zinc-900">TECHORA</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              A precision studio crafted for breakthrough physical hardware, tactile computing, next-gen digital experiences, and visionary brand systems.
            </p>

            {/* Live Time Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-700">
                <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
                <span>STUDIO TIME: {time || "12:00:00 PM EST"}</span>
              </div>
            </div>
          </div>

          {/* Contact Direct (Cols 5-7) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
              Direct Reach
            </h3>
            <div className="space-y-2.5 text-sm text-zinc-700">
              <a
                href="mailto:hello@techora.design"
                className="hover:text-black transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#5e9c04]" />
                hello@techora.design
              </a>
              <a
                href="tel:+14155550198"
                className="hover:text-black transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#5e9c04]" />
                +1 (415) 555-0198
              </a>
              <div className="flex items-start gap-2 text-zinc-500 text-xs leading-relaxed pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#5e9c04] flex-shrink-0 mt-0.5" />
                <span>TechHub Plaza, Suite 301 Main St, Metro Tower Floor 15</span>
              </div>
            </div>
          </div>

          {/* Quick Menu (Cols 8-9) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 font-mono">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-black transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/article" className="hover:text-black transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels (Cols 10-12) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
              Socials & Community
            </h3>
            <div className="flex flex-col space-y-2 text-sm text-zinc-600 font-mono">
              {[
                { name: "X (Twitter)", href: "#" },
                { name: "Dribbble", href: "#" },
                { name: "LinkedIn", href: "#" },
                { name: "GitHub", href: "#" },
                { name: "Instagram", href: "#" },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  className="hover:text-black transition-colors flex items-center justify-between group py-1 border-b border-black/5"
                >
                  <span>{soc.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} TECHORA STUDIO INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#5e9c04] font-medium">Crafted with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
