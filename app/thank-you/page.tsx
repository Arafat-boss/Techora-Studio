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
        <div className="w-20 h-20 rounded-full bg-black/[0.04] border border-black/10 text-[#5e9c04] flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
          Thank <span className="font-serif-italic font-normal text-zinc-700">You</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          Your project inquiry has been received by our senior design engineering team. We will review your materials and reach out within 24 business hours.
        </p>

        <div className="pt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-800 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-sm hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white border border-black/10 hover:border-black/30 text-zinc-900 text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-xs"
          >
            <span>Explore Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
