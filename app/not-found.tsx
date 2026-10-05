import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-36 sm:pt-48 pb-24 px-4 sm:px-6 md:px-10 max-w-2xl mx-auto text-center">
      <div className="space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#a2e435] block">
          Error 404
        </span>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-white font-mono">
          Nothing <span className="font-serif-italic font-normal text-[#a2e435]">Here</span>
        </h1>

        <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal">
          The requested coordinate does not exist in our design archive or may have been relocated.
        </p>

        <div className="pt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#a2e435] text-black font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#83ca16] transition-all shadow-[0_0_20px_rgba(162,228,53,0.3)] hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
          >
            <span>View Gallery</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
