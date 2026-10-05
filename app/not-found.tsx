import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-36 sm:pt-48 pb-24 px-4 sm:px-6 md:px-10 max-w-2xl mx-auto text-center">
      <div className="space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-900 block font-semibold">
          Error 404
        </span>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-zinc-900 font-mono">
          Nothing <span className="font-serif-italic font-normal text-zinc-700">Here</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          The requested coordinate does not exist in our design archive or may have been relocated.
        </p>

        <div className="pt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-800 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-sm hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white border border-black/10 hover:border-black/30 text-zinc-900 text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-xs"
          >
            <span>View Gallery</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
