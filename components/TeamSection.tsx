"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function DribbbleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.63 4.88a7.92 7.92 0 0 1 1.76 4.67 18.59 18.59 0 0 0-5.35-.79 17.5 17.5 0 0 0-1.39.06 18.3 18.3 0 0 0 4.98-3.94zM12 4a7.91 7.91 0 0 1 5.37 2.11 16.48 16.48 0 0 1-4.57 3.65 14.86 14.86 0 0 1-3.69-5.18A7.8 7.8 0 0 1 12 4zM7.56 5.34a17.26 17.26 0 0 0 3.6 5 15.65 15.65 0 0 1-7.07 1.83A8 8 0 0 1 7.56 5.34zm-3.5 8.35a13.73 13.73 0 0 0 6.64-1.64 19.34 19.34 0 0 1 1.43 4.22 17.65 17.65 0 0 1-6.17 1.15 8.1 8.1 0 0 1-1.9-.2zm8.06 6.27a17.5 17.5 0 0 0-1.27-3.88 17.87 17.87 0 0 1 4.54-.58c.45 0 .9.02 1.34.07a8 8 0 0 1-4.61 4.39zm5.9-2.58a15.7 15.7 0 0 0-1.37-.06 16.32 16.32 0 0 0-4.07.51 18.5 18.5 0 0 0-1.38-4.07 16.73 16.73 0 0 1 5.09.78 7.88 7.88 0 0 1 1.73 2.84z" />
    </svg>
  );
}

export default function TeamSection() {
  const team = [
    {
      name: "Liam Alexander",
      role: "Lead Product Designer",
      avatar: "/images/i1HQmHKuaqVIiFDDbnxu3eSvDM.png",
      bio: "Focuses on industrial hardware, tactile ergonomics, and spatial design.",
    },
    {
      name: "Ethan Vance",
      role: "Design Engineer",
      avatar: "/images/A4gp1uK8IPCXRgoVMvD6es6rXc.png",
      bio: "Bridges mechanical prototyping, WebGL rendering, and production code.",
    },
    {
      name: "Morgan Sterling",
      role: "Creative Director",
      avatar: "/images/t2IinwzJVpnMsudq7WYMD5Q.png",
      bio: "Directs visionary brand systems, typography, and identity architecture.",
    },
    {
      name: "Sofia Chen",
      role: "Lead UI / UX Designer",
      avatar: "/images/xF67o9KL2pdUNFoIyhGVuR7nzI.png",
      bio: "Specializes in multi-platform design tokens and micro-interaction craft.",
    },
    {
      name: "Noah Reynolds",
      role: "Framer & Web Engineer",
      avatar: "/images/Bwqsulc9a1MtU5g4fle62Cp4E.png",
      bio: "Builds high-performance Next.js architectures and fluid animations.",
    },
    {
      name: "Olivia Thorne",
      role: "Head of Project Delivery",
      avatar: "/images/7QzAJUIdfcX0NgIDOeWiBZaU1A.png",
      bio: "Coordinates timeline precision, client communications, and launch agility.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-900 mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B8FF4B]" />
            <span>Creative Minds</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            The Designers & Engineers Behind <br />
            <span className="font-serif-italic font-normal text-zinc-700">Every Breakthrough</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-800 font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <span>Schedule a call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <Card3DTilt
              cursorText="View Profile"
              className="bg-white border border-black/10 hover:border-black/30 rounded-3xl p-5 sm:p-6 transition-all duration-300 group shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] relative"
            >
              {/* Corner crosshairs */}
              <span className="absolute top-2.5 left-2.5 text-zinc-300 group-hover:text-zinc-700 transition-colors font-mono text-[10px]">
                +
              </span>
              <span className="absolute top-2.5 right-2.5 text-zinc-300 group-hover:text-zinc-700 transition-colors font-mono text-[10px]">
                +
              </span>

              {/* Avatar image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-black/5 mb-5 flex items-center justify-center">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Social icons overlay on hover */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-7 h-7 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer p-1.5">
                      <XIcon className="w-full h-full" />
                    </span>
                    <span className="w-7 h-7 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer p-1.5">
                      <LinkedInIcon className="w-full h-full" />
                    </span>
                    <span className="w-7 h-7 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer p-1.5">
                      <DribbbleIcon className="w-full h-full" />
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white bg-black/80 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </div>
              </div>

              {/* Info Text */}
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1 font-semibold">
                  {member.role}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-black transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
