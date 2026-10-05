import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        'Welcome to Techora ("we," "our," or "us"). At Techora, we are committed to safeguarding your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we collect, handle, and protect your information across our website, hardware testing portals, and digital services.',
    },
    {
      title: "2. Information We Collect",
      content:
        "We collect information you provide directly to us through project inquiry forms, client communications, prototype feedback portals, and cookie-based analytics. This may include your name, company name, email address, phone number, and project specifications.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "Your data is used solely to evaluate project requirements, deliver design and engineering proposals, execute contract deliverables, and provide post-launch maintenance. We never sell, rent, or trade your personal or business data to third-party advertisers.",
    },
    {
      title: "4. Data Security & Storage",
      content:
        "We employ industry-standard encryption protocols (TLS 1.3, AES-256) and strict access controls across all cloud storage and prototyping repositories. Access to confidential client CAD files and software repositories is restricted strictly to authorized team engineers.",
    },
    {
      title: "5. Cookies & Analytics",
      content:
        "We utilize lightweight, privacy-focused cookies to measure page load performance, analyze referral sources, and optimize responsive viewport rendering. You may disable cookies through your browser preferences without affecting site functionality.",
    },
    {
      title: "6. Your Rights & Data Deletion",
      content:
        "You have the right to request access to, correction of, or permanent deletion of any personal information held by Techora. To exercise these rights, please contact our privacy officer at privacy@techora.design.",
    },
    {
      title: "7. Updates to This Policy",
      content:
        "We may update this policy periodically to reflect evolving regulatory standards and technological updates. Material revisions will be posted directly to this page with an updated effective date.",
    },
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-black transition-colors mb-8 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Return Home</span>
      </Link>

      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-mono text-zinc-900 font-semibold">
          <Shield className="w-3.5 h-3.5" />
          <span>Legal Documentation</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
          Privacy <span className="font-serif-italic font-normal text-zinc-700">Policy</span>
        </h1>
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
          <span>EFFECTIVE DATE: JANUARY 19, 2026</span>
          <span>•</span>
          <span>VERSION 2.4</span>
        </div>
      </div>

      <div className="space-y-8 bg-white border border-black/10 p-8 sm:p-12 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        {sections.map((sec, idx) => (
          <div key={idx} className="space-y-3 pb-6 border-b border-black/5 last:border-0 last:pb-0">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
              {sec.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              {sec.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
