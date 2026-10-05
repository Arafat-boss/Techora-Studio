"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "Hardware & Physical Products",
    budget: "$15k - $30k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    "Hardware & Physical Products",
    "Digital Web Engineering",
    "Brand Systems & Identity",
    "Product Design & UI/UX",
  ];

  const budgets = ["<$15k", "$15k - $30k", "$30k - $60k", "$60k+"];

  return (
    <div className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#a2e435]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a2e435]" />
          <span>Start a Project</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
          Let's Shape the <br />
          <span className="font-serif-italic font-normal text-[#a2e435]">Future Together</span>
        </h1>
        <p className="text-sm sm:text-base text-white/60 max-w-2xl font-normal leading-relaxed">
          Our mission is to empower designers, developers and agencies with the tools and craftsmanship they need to build iconic digital and physical products.
        </p>
      </div>

      {/* Main Grid: Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Left: Contact Info Card (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-8 bg-[#0a0a0a] border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#a2e435]/10 blur-[90px] pointer-events-none" />

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#a2e435] block mb-2">
              Headquarters
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Techora Design Studio
            </h2>
          </div>

          <div className="space-y-6 text-sm text-white/80">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#a2e435] flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/40 uppercase">Email</div>
                <a href="mailto:info@techora.design" className="font-medium text-white hover:text-[#a2e435] transition-colors">
                  info@techora.design
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#a2e435] flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/40 uppercase">Telephone</div>
                <a href="tel:+14155550198" className="font-medium text-white hover:text-[#a2e435] transition-colors">
                  +1 (415) 555-0198
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#a2e435] flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/40 uppercase">Address</div>
                <p className="font-medium text-white/90 leading-relaxed">
                  TechHub Plaza, Suite 301 Main Street,
                  <br />
                  Metro Tower, Floor 15
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-white">Availability</div>
              <div className="text-xs text-white/50 font-mono">Q1 / Q2 Active Sprints</div>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-[#a2e435] animate-ping" />
          </div>
        </div>

        {/* Right: Contact Form (Cols 6-12) */}
        <div className="lg:col-span-7 bg-[#0d0d0d] border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#a2e435]/10 border border-[#a2e435] text-[#a2e435] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(162,228,53,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Inquiry Received!
              </h3>
              <p className="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || "friend"}. Our lead design partner will review your project requirements and respond within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/60 tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#a2e435] text-white text-sm outline-none transition-colors placeholder:text-white/20 font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/60 tracking-wider">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#a2e435] text-white text-sm outline-none transition-colors placeholder:text-white/20 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Telephone */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/60 tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#a2e435] text-white text-sm outline-none transition-colors placeholder:text-white/20 font-sans"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/60 tracking-wider">
                    City / Timezone
                  </label>
                  <input
                    type="text"
                    placeholder="San Francisco, CA"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#a2e435] text-white text-sm outline-none transition-colors placeholder:text-white/20 font-sans"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-white/60 tracking-wider">
                  Service Domain
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`px-4 py-2.5 rounded-xl text-xs font-mono text-left border transition-all cursor-pointer ${
                        formData.service === srv
                          ? "bg-[#a2e435]/15 border-[#a2e435] text-white font-semibold"
                          : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-white/60 tracking-wider">
                  Target Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-3 rounded-xl text-xs font-mono text-center border transition-all cursor-pointer ${
                        formData.budget === b
                          ? "bg-[#a2e435] text-black font-bold"
                          : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-white/60 tracking-wider">
                  Project Overview & Goals
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about what you are looking to create, timelines, and technical requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#a2e435] text-white text-sm outline-none transition-colors placeholder:text-white/20 font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#a2e435] hover:bg-[#83ca16] text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(162,228,53,0.3)] hover:shadow-[0_0_35px_rgba(162,228,53,0.5)] flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <span>Submit Discovery Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
