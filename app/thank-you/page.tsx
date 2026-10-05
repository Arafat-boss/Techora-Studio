"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="pt-36 sm:pt-48 pb-24 px-4 sm:px-6 md:px-10 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <div className="w-20 h-20 rounded-full bg-[#a2e435]/10 border border-[#a2e435] text-[#a2e435] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(162,228,53,0.3)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Thank <span className="font-serif-italic font-normal text-[#a2e435]">You</span>
        </h1>

        <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
          Your project inquiry has been received by our senior design engineering team. We will review your materials and reach out within 24 business hours.
        </p>

        <div className="pt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#a2e435] text-black font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#83ca16] transition-all shadow-[0_0_20px_rgba(162,228,53,0.3)] hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
          >
            <span>Explore Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
