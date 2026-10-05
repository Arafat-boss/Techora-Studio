"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Articles", href: "/article" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-6 md:px-10 flex justify-center items-center ${
          isScrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div
          className={`w-full max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 bg-white/90 backdrop-blur-xl border border-black/10 rounded-full px-4 sm:px-6 ${
            isScrolled
              ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2"
              : "shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-2.5"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-zinc-900 tracking-tight font-semibold text-lg hover:text-black transition-colors"
          >
            <div className="w-6 h-6 rounded bg-black flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-all">
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
            <span className="text-base tracking-wider uppercase font-semibold text-zinc-900">
              TECHORA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.04] backdrop-blur-md px-4 py-1.5 rounded-full border border-black/5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs uppercase tracking-wider font-mono transition-all rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-black rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-black text-white hover:bg-zinc-800 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
            >
              <span>Schedule a call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Menu Button (Morphing burger to X) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex flex-col items-center justify-center gap-1.5 transition-all text-zinc-900 relative z-50 cursor-pointer"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-5 h-0.5 bg-zinc-900 rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="w-5 h-0.5 bg-zinc-900 rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-5 h-0.5 bg-zinc-900 rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Drawer Menu (Light Mode) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-2xl text-zinc-900 flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:px-20 overflow-y-auto"
          >
            {/* Top / Main Navigation Links */}
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 mt-4">
              <div className="md:col-span-7 flex flex-col gap-2">
                <span className="text-xs uppercase font-mono text-[#5e9c04] tracking-widest mb-2 flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#84cc16]" />
                  Navigation
                </span>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-3 border-b border-black/10 hover:border-black transition-colors"
                    >
                      <span className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-900 group-hover:translate-x-3 transition-all duration-300">
                        {link.label}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 group-hover:text-black transition-colors flex items-center gap-2">
                        0{idx + 1}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Info in Menu */}
              <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/10 pt-8 md:pt-0 md:pl-10 space-y-8">
                <div>
                  <h3 className="text-xs uppercase font-mono text-zinc-400 tracking-widest mb-3 font-semibold">
                    Studio Headquarters
                  </h3>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    TechHub Plaza, Suite 301 Main Street,
                    <br />
                    Metro Tower, Floor 15
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase font-mono text-zinc-400 tracking-widest mb-3 font-semibold">
                    Direct Reach
                  </h3>
                  <p className="text-sm text-zinc-800 flex flex-col gap-1.5">
                    <a
                      href="mailto:info@techora.design"
                      className="hover:text-black transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#5e9c04]" />
                      info@techora.design
                    </a>
                    <a
                      href="tel:+14155550198"
                      className="hover:text-black transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#5e9c04]" />
                      +1 (415) 555-0198
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase font-mono text-zinc-400 tracking-widest mb-3 font-semibold">
                    Socials & Channels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["X / Twitter", "Dribbble", "LinkedIn", "Instagram", "GitHub"].map((soc) => (
                      <span
                        key={soc}
                        className="px-3 py-1 text-xs rounded-full bg-black/5 border border-black/10 hover:border-black hover:bg-black hover:text-white transition-colors cursor-pointer text-zinc-700 font-mono"
                      >
                        {soc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/[0.03] border border-black/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-zinc-900">Status</div>
                    <div className="text-xs text-zinc-500">Taking on Q1/Q2 Projects</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16] shadow-[0_0_8px_#84cc16] animate-ping" />
                </div>
              </div>
            </div>

            {/* Bottom Menu Footer */}
            <div className="max-w-6xl mx-auto w-full pt-8 mt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
              <span>© {new Date().getFullYear()} TECHORA DESIGN STUDIO</span>
              <div className="flex items-center gap-6">
                <Link href="/privacy-policy" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-black transition-colors">
                  Terms of Use
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
