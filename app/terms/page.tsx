import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and utilizing the Techora website, services, digital assets, or hardware prototypes, you confirm that you have read, understood, and agreed to be bound by these Terms of Service.",
    },
    {
      title: "2. Intellectual Property Rights",
      content:
        "All visual designs, 3D models, code libraries, typography styling, trademarks, and concepts created by Techora remain the intellectual property of Techora until explicitly transferred under a signed master services agreement.",
    },
    {
      title: "3. Scope of Engagement & Deliverables",
      content:
        "Client project milestones, timelines, and deliverables are specified in individualized Statements of Work (SOW). Any modifications or additions requested outside of the original scope are subject to supplementary sprint agreements.",
    },
    {
      title: "4. Client Confidentiality & Non-Disclosure",
      content:
        "We treat all proprietary client information, product schematics, and unreleased technical data with strict confidentiality. Both parties agree to execute mutual non-disclosure covenants upon project kickoff.",
    },
    {
      title: "5. Payment Terms & Invoicing",
      content:
        "Invoices are issued according to project milestone completion schedules. Payments are due within 14 calendar days of issuance unless otherwise structured in the client agreement.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "In no event shall Techora, its officers, or its partners be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use delivered web systems or prototype hardware.",
    },
    {
      title: "7. Governing Law",
      content:
        "These terms shall be governed by and interpreted in accordance with the laws of the State of California, without regard to its conflict of law principles.",
    },
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-[#a2e435] transition-colors mb-8 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Return Home</span>
      </Link>

      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a2e435]">
          <FileText className="w-3.5 h-3.5" />
          <span>Terms of Engagement</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Terms of <span className="font-serif-italic font-normal text-[#a2e435]">Service</span>
        </h1>
        <div className="flex items-center gap-3 text-xs font-mono text-white/40 pt-1">
          <span>LAST UPDATED: JANUARY 19, 2026</span>
          <span>•</span>
          <span>REVISION 3.1</span>
        </div>
      </div>

      <div className="space-y-8 bg-[#0a0a0a] border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl">
        {terms.map((t, idx) => (
          <div key={idx} className="space-y-3 pb-6 border-b border-white/5 last:border-0 last:pb-0">
            <h2 className="text-xl font-bold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              {t.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
