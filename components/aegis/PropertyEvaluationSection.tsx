"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";

export function PropertyEvaluationSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0B1F3A] via-[#122856] to-[#0B1F3A] text-white border-t border-[#D8B56D]/30 text-center relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D8B56D 1px, transparent 1px), linear-gradient(90deg, #D8B56D 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8B56D]/20 text-xs font-semibold text-[#D8B56D] border border-[#D8B56D]/40">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D8B56D]" />
          <span className="font-display uppercase tracking-wider text-[11px]">Protect Your Indian Real Estate</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Have a Property in Bengaluru, Hyderabad, or Delhi NCR?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-body">
          Get an instant property valuation, rental yield analysis, and complimentary condition audit with a certified Sustune Asset Steward.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?interest=aegis"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#c9a65d] hover:brightness-105 text-[#0B1F3A] font-bold text-sm shadow-xl transition-all cursor-pointer font-display"
          >
            <span>Schedule Free Asset Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20have%20a%20property%20in%20India%20and%20would%20like%20to%20know%20about%20Aegis%20stewardship."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer font-display"
          >
            <PhoneCall className="w-4 h-4 text-[#D8B56D]" />
            <span>Chat with Lead Property Steward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
