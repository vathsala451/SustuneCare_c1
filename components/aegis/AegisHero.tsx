"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
  Building2,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

export function AegisHero() {
  return (
    <section className="relative overflow-hidden bg-[#071329] text-white py-14 sm:py-20 lg:py-24">
      {/* 1. High-Quality Static Property Management Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Aegis Institutional Luxury Property Stewardship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 sm:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071329]/85 via-[#071329]/45 to-[#071329]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(216,181,109,0.18),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & The 3 Proposed Action Options */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D8B56D]/40 text-xs font-semibold text-[#F3DC87] backdrop-blur-md">
              <div className="w-4 h-4 relative shrink-0">
                <Image
                  src="/brand/logo.png"
                  alt="Sustune Care Official Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <span>AEGIS REAL ESTATE STEWARDSHIP DIVISION</span>
            </div>

            {/* Headline - Godrej & Sobha Architectural Prestige */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Institutional Property Stewardship for <br />
              <span className="gold-gradient-text">High-Value Indian Assets</span>
            </h1>

            {/* Short 1-Sentence Summary */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl font-normal">
              Protecting prime residences across Bengaluru, Hyderabad &amp; Delhi NCR with corporate lease vetting, guaranteed escrow rent remittances, and forensic 80-point inspection audits.
            </p>

            {/* 3 Dedicated Proposed Actions - Connected to Real Functionality */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 font-sans">
              {/* Proposed Action 1: Explore Property Services -> Scrolls to 4 Modules */}
              <a
                href="#property-services"
                className="bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-[#0B1F3A]" />
                <span>Explore Property Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Proposed Action 2: Property Management Enquiry -> Connects to Enquiry Form */}
              <Link
                href="/contact?interest=aegis"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm py-3.5 px-5 rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <FileCheck2 className="w-4 h-4 text-[#D8B56D]" />
                <span>Property Management Enquiry</span>
              </Link>

              {/* Proposed Action 3: Book a Consultation -> Connects to Consultation Flow */}
              <Link
                href="/contact?interest=aegis&type=consultation"
                className="bg-[#142d52] hover:bg-[#1a3a6b] text-[#F3DC87] font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl border border-[#D8B56D]/60 shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-[#D8B56D]" />
                <span>Book a Consultation</span>
              </Link>
            </div>

            {/* Concise Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs text-slate-200">
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D] shrink-0" />
                <span>Zero Unauthorized Tenancy</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D] shrink-0" />
                <span>5th Escrow Payout</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D] shrink-0" />
                <span>Form 15CA/CB Tax</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D] shrink-0" />
                <span>80-Pt Digital Audit</span>
              </div>
            </div>

            {/* Institutional Asset Stewardship Indicator */}
            <div className="pt-1 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-[#F3DC87] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D8B56D]" />
                Institutional Real Estate Stewardship
              </span>
              <span>·</span>
              <span>Serving NRIs across Bengaluru, Hyderabad &amp; Delhi NCR</span>
            </div>
          </div>

          {/* Right Column: Godrej / Sobha Style Institutional Metrics Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#132752] to-[#0B1F3A] border-2 border-[#D8B56D]/60 rounded-3xl p-6 sm:p-7 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Live Portfolio Metric
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#D8B56D]/20 text-[#F3DC87] border border-[#D8B56D]/40">
                  Bengaluru • Hyderabad
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Total Asset Value Stewarded</div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                    ₹182.4 Crore
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 mt-1 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>99.8% On-time remittance rate</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Average Tenant Placement</span>
                    <span className="font-bold text-[#F3DC87]">18.4 Days</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#D8B56D] h-full w-[85%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Target: &lt; 21 Days</span>
                    <span>Industry Avg: 60+ Days</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#176B63]/25 border border-[#176B63]/40 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-emerald-200">Legal Eviction Protection</div>
                    <div className="text-[11px] text-slate-300">
                      Supreme Court-vetted digital lease deeds
                    </div>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
