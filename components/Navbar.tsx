"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Sparkles, Mail, MapPin, Phone } from "lucide-react";

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

  // Close menu on route change
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
          className={`w-full max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-[#0a0a0a]/85 backdrop-blur-xl border border-white/10 shadow-2xl py-2.5 px-4 sm:px-6 rounded-full"
              : "bg-transparent py-2 px-2"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-white tracking-tight font-semibold text-lg hover:text-[#a2e435] transition-colors"
          >
            <div className="w-6 h-6 rounded bg-gradient-to-br from-white to-white/40 flex items-center justify-center p-1 shadow-sm group-hover:from-[#a2e435] group-hover:to-[#83ca16] transition-all">
              <span className="w-2 h-2 rounded-full bg-black" />
            </div>
            <span className="text-base tracking-wider uppercase font-semibold">
              TECHORA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a2e435] animate-pulse" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs uppercase tracking-wider font-mono transition-all rounded-full ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#a2e435] rounded-full -z-10 shadow-[0_0_15px_rgba(162,228,53,0.4)]"
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
              className="hidden sm:inline-flex items-center gap-1.5 bg-white text-black hover:bg-[#a2e435] text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(162,228,53,0.4)] hover:scale-105 active:scale-95"
            >
              <span>Schedule a call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Menu Button (Morphing burger to X) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex flex-col items-center justify-center gap-1.5 transition-all text-white relative z-50 cursor-pointer"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-5 h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-5 h-0.5 bg-white rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:px-20 overflow-y-auto"
          >
            {/* Top / Main Navigation Links */}
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 mt-4">
              <div className="md:col-span-7 flex flex-col gap-2">
                <span className="text-xs uppercase font-mono text-[#a2e435] tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a2e435]" />
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
                      className="group flex items-center justify-between py-3 border-b border-white/10 hover:border-[#a2e435] transition-colors"
                    >
                      <span className="text-3xl sm:text-5xl font-medium tracking-tight group-hover:text-[#a2e435] group-hover:translate-x-3 transition-all duration-300">
                        {link.label}
                      </span>
                      <span className="text-xs font-mono text-white/40 group-hover:text-[#a2e435] transition-colors flex items-center gap-2">
                        0{idx + 1}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Info in Menu */}
              <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10 space-y-8">
                <div>
                  <h3 className="text-xs uppercase font-mono text-white/40 tracking-widest mb-3">
                    Studio Headquarters
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    TechHub Plaza, Suite 301 Main Street,
                    <br />
                    Metro Tower, Floor 15
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase font-mono text-white/40 tracking-widest mb-3">
                    Direct Reach
                  </h3>
                  <p className="text-sm text-white/90 flex flex-col gap-1.5">
                    <a
                      href="mailto:info@techora.design"
                      className="hover:text-[#a2e435] transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#a2e435]" />
                      info@techora.design
                    </a>
                    <a
                      href="tel:+14155550198"
                      className="hover:text-[#a2e435] transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#a2e435]" />
                      +1 (415) 555-0198
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase font-mono text-white/40 tracking-widest mb-3">
                    Socials & Channels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["X / Twitter", "Dribbble", "LinkedIn", "Instagram", "GitHub"].map((soc) => (
                      <span
                        key={soc}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-[#a2e435] hover:text-[#a2e435] transition-colors cursor-pointer"
                      >
                        {soc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">Status</div>
                    <div className="text-xs text-white/50">Taking on Q1/Q2 Projects</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a2e435] shadow-[0_0_8px_#a2e435] animate-ping" />
                </div>
              </div>
            </div>

            {/* Bottom Menu Footer */}
            <div className="max-w-6xl mx-auto w-full pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
              <span>© {new Date().getFullYear()} TECHORA DESIGN STUDIO</span>
              <div className="flex items-center gap-6">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
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
