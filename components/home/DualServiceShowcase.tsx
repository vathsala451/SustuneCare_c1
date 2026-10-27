"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Activity,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  KeyRound,
  FileCheck,
  Stethoscope,
  Siren,
  X,
  Sparkles,
} from "lucide-react";

export function DualServiceShowcase() {
  const [modalDetail, setModalDetail] = useState<"aegis" | "sparsh" | null>(null);

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-white dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Concise & Direct */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <span className="w-2 h-2 rounded-full bg-[#D8B56D]" />
            <span>TWO SPECIALIZED DIVISIONS · ONE TRUSTED PARTNER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            Explore Our Care Divisions
          </h2>
          <p className="text-sm sm:text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            Choose your area of focus: institutional protection for high-value real estate or compassionate healthcare accompaniment for elderly parents.
          </p>
        </div>

        {/* Dual Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1: AEGIS Property Stewardship (Godrej / Sobha / My Home style prestige) */}
          <div className="rounded-3xl overflow-hidden border border-[#DCE3EA] dark:border-white/10 bg-white dark:bg-[#0B1F3A]/85 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div className="h-2 bg-gradient-to-r from-[#D8B56D] via-[#F3DC87] to-[#967530]" />

            <div>
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Contemporary luxury residential apartment in Bengaluru"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 bg-[#0B1F3A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#D8B56D]/40 shadow-sm">
                    <Building2 className="w-4 h-4 text-[#D8B56D]" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-[#F3DC87]">
                      Real Estate Division
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D8B56D]/20 text-[#F3DC87] border border-[#D8B56D]/40 backdrop-blur-md">
                    Asset Protection
                  </span>
                </div>
              </div>

              {/* Card Body - Concise, No Essay Text */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1F3A] dark:text-white">
                    AEGIS Property Stewardship
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] dark:text-slate-300 mt-2 leading-relaxed">
                    Protecting premier residences and commercial spaces in Bengaluru, Hyderabad &amp; Delhi NCR. Corporate leases, escrow rent, and 360° quarterly inspection audits.
                  </p>
                </div>

                {/* 4 Crisp Visual Feature Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-white/10 text-xs text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <KeyRound className="w-4 h-4 text-[#D8B56D] shrink-0" />
                    <span className="font-semibold">Corporate Tenant Vetting</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <FileCheck className="w-4 h-4 text-[#D8B56D] shrink-0" />
                    <span className="font-semibold">5th-of-Month Escrow Payout</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0" />
                    <span className="font-semibold">360° Digital Forensic Audits</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0" />
                    <span className="font-semibold">Section 195 TDS &amp; Form 15CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: One Primary + Quick Details */}
            <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
              <Link
                href="/aegis"
                className="flex-1 bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <ShieldCheck className="w-4 h-4 text-[#0B1F3A]" />
                <span>Explore Aegis Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setModalDetail("aegis")}
                className="px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-white font-semibold text-xs sm:text-sm border border-slate-200 dark:border-white/20 transition-all cursor-pointer"
              >
                Quick Details
              </button>
            </div>
          </div>

          {/* Card 2: SPARSH Family and Elder Care (Apollo / Fortis clinical warmth) */}
          <div className="rounded-3xl overflow-hidden border border-[#DCE3EA] dark:border-white/10 bg-white dark:bg-[#0B1F3A]/85 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div className="h-2 bg-gradient-to-r from-[#176B63] via-[#2CD997] to-[#0E4842]" />

            <div>
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  alt="Compassionate health companion assisting elderly family member at home"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 bg-[#0B1F3A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#176B63]/50 shadow-sm">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-emerald-300">
                      Elder Care Division
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#176B63]/30 text-emerald-300 border border-[#176B63]/50 backdrop-blur-md">
                    Parental Wellbeing
                  </span>
                </div>
              </div>

              {/* Card Body - Concise, No Essay Text */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1F3A] dark:text-white">
                    SPARSH Elder &amp; Parental Care
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] dark:text-slate-300 mt-2 leading-relaxed">
                    Giving your parents the clinical escort, routine vitals tracking, and warm companionship they deserve. You are thousands of miles away; they are never alone.
                  </p>
                </div>

                {/* 4 Crisp Visual Feature Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-white/10 text-xs text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <Stethoscope className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">OPD Doctor Accompaniment</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <Siren className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">24/7 Rapid SOS Alert</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">Bi-Weekly Home Telemetry</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">Doorstep Blister Pill Sorting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: One Primary + Quick Details */}
            <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
              <Link
                href="/sparsh"
                className="flex-1 bg-gradient-to-r from-[#176B63] to-[#0e4842] hover:brightness-110 text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <HeartHandshake className="w-4 h-4 text-emerald-300" />
                <span>Explore Care Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setModalDetail("sparsh")}
                className="px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-white font-semibold text-xs sm:text-sm border border-slate-200 dark:border-white/20 transition-all cursor-pointer"
              >
                Quick Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Details Modal */}
      {modalDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#0B1F3A] text-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border-2 border-[#D8B56D]/50">
            <button
              type="button"
              onClick={() => setModalDetail(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {modalDetail === "aegis" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#F3DC87]">
                  <Building2 className="w-5 h-5 text-[#D8B56D]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Aegis Real Estate Specifications</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Institutional Property Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Sustune Aegis protects overseas NRI properties through strict fiduciary controls. We manage corporate tenant vetting (750+ CIBIL), direct escrow rental remittances on the 5th of each month, Section 195 TDS repatriation filings, and forensic 80-point quarterly inspection audits.
                </p>
                <div className="space-y-2 text-xs text-slate-200 pt-2 border-t border-white/10">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Target Tenant Placement:</span>
                    <strong className="text-white">&lt; 21 Days (Avg 18.4)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Escrow Payout Day:</span>
                    <strong className="text-white">5th of Every Month</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Inspection Standard:</span>
                    <strong className="text-white">80-Point Room-by-Room Audit</strong>
                  </div>
                </div>
                <div className="pt-2 flex gap-3">
                  <Link
                    href="/aegis"
                    className="flex-1 bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A] font-bold py-3 px-4 rounded-xl text-center text-xs sm:text-sm hover:brightness-110 transition-all"
                  >
                    Go to Full Aegis Page
                  </Link>
                  <Link
                    href="/contact?interest=aegis"
                    className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-300">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sparsh Elder Care Specifications</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Parental Healthcare Concierge
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Sustune Sparsh combines empathetic companionship with institutional clinical coordination. Trained, background-verified Care Companions accompany parents to doctor consultations, record directives, monitor routine vitals, and provide 24/7 rapid emergency dispatch to premier hospitals.
                </p>
                <div className="space-y-2 text-xs text-slate-200 pt-2 border-t border-white/10">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Emergency Dispatch Target:</span>
                    <strong className="text-emerald-400">&lt; 14 Minutes (Avg 11.8)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Hospital Partner Network:</span>
                    <strong className="text-white">Apollo, Fortis, Manipal, Max</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Care Continuity:</span>
                    <strong className="text-white">Same Assigned Care Companion</strong>
                  </div>
                </div>
                <div className="pt-2 flex gap-3">
                  <Link
                    href="/sparsh"
                    className="flex-1 bg-gradient-to-r from-[#176B63] to-[#0e4842] text-white font-bold py-3 px-4 rounded-xl text-center text-xs sm:text-sm hover:brightness-110 transition-all"
                  >
                    Go to Full Sparsh Page
                  </Link>
                  <Link
                    href="/contact?interest=sparsh"
                    className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
