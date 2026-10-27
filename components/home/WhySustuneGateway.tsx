import React from "react";
import Link from "next/link";
import { ShieldCheck, Scale, Award, ArrowRight, Building, CheckCircle2 } from "lucide-react";

export function WhySustuneGateway() {
  return (
    <section className="py-16 sm:py-24 bg-[#0B1F3A] text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(216,181,109,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D8B56D]/40 text-xs font-semibold text-[#F3DC87]">
              <ShieldCheck className="w-4 h-4 text-[#D8B56D]" />
              <span>Institutional NRI Stewardship</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Built on Sovereign Governance &amp; <br />
              <span className="gold-gradient-text">Absolute Legal Integrity</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body max-w-2xl">
              Discover how Sustune Care protects diaspora interests through dedicated escrow accounts, police-verified care companions, Supreme Court-vetted lease frameworks, and municipal tax due diligence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0" />
                <span>Dedicated Escrow Rental Accounts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0" />
                <span>Triple-Tier Companion Background Vetting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0" />
                <span>Section 195 TDS &amp; 15CA/CB Filing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0" />
                <span>Operating Hubs across 6 Major Corridors</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/why-sustune"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
              >
                <span>Read Full Institutional Governance Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>Speak with an NRI Director</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Three Visual Governance Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#D8B56D]/15 border border-[#D8B56D]/30 shrink-0">
                <Scale className="w-5 h-5 text-[#D8B56D]" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white">Sovereign Banking Governance</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed font-body">
                  Zero commingling of client funds. All rentals pass through verified escrow with automated reconciliation.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-400/30 shrink-0">
                <Award className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white">Triple-Tier Human Vetting</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed font-body">
                  Mandatory biometric checks, permanent residence confirmation, and local police verification for all staff.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-400/30 shrink-0">
                <Building className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white">Geographic Operating Coverage</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed font-body">
                  Active local teams and dedicated careline managers in Bengaluru, Hyderabad, Delhi NCR, Pune, Chennai, and Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
