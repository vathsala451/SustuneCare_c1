"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Building2,
  Activity,
  Play,
  X,
  Calculator,
  CheckCircle2,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function HeroSection() {
  const [activeOption, setActiveOption] = useState<"dual" | "aegis" | "sparsh">("dual");
  const [activeVideo, setActiveVideo] = useState<"aegis" | "sparsh">("aegis");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="solutions" className="relative overflow-hidden bg-[#071329] text-white min-h-[92vh] flex flex-col justify-center pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* 1. High-Quality Static Marketing Image Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src={
            activeOption === "sparsh"
              ? "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=85"
              : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          }
          alt="Sustune Care Institutional Real Estate and Parental Stewardship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 sm:opacity-30 transition-opacity duration-700"
        />

        {/* Sophisticated Vignette Overlays for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071329]/85 via-[#071329]/50 to-[#071329]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_#071329_95%)]" />
        {/* Subtle Architectural Grid Pattern Matching Design */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Centered Status Bar & Logo as shown in the design */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-md text-xs font-semibold text-slate-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D8B56D] shrink-0" />
            <span className="text-[#E6C67A] uppercase tracking-wider text-[11px] sm:text-xs font-bold">
              Property &amp; Family Care, Connected
            </span>
            <span className="text-slate-400 font-light">|</span>
            <span className="text-slate-300 text-[11px] sm:text-xs">
              USA • UK • UAE • Australia • Canada • Singapore
            </span>
          </div>

          {/* Sustune Care Shield Emblem - Displayed Cleanly Without Background (Enlarged) */}
          <div className="my-4 sm:my-5 flex items-center justify-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <Image
                src="/brand/logo.png"
                alt="Sustune Care Shield Logo"
                width={180}
                height={195}
                priority
                className="w-full h-full object-contain select-none drop-shadow-[0_10px_32px_rgba(216,181,109,0.35)] filter"
              />
            </div>
          </div>

          {/* Main Headline - Short, Punchy, Emotional */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Distance Should <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Never Mean Worry.</span>
          </h1>

          {/* Value Hook matching the mockup */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed font-body">
            <strong className="font-bold text-white">
              Care for your property. Care for your parents. Peace of mind for you.
            </strong>{" "}
            Sustune Care replaces the anxiety of distance with institutional property stewardship (Aegis) and
            compassionate family elder care (Sparsh) across Bengaluru, Hyderabad, and Delhi NCR.
          </p>

          {/* Interactive 3-Option Quick Selector */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#0B1F3A]/90 border border-white/20 shadow-2xl backdrop-blur-md">
              <button
                type="button"
                onClick={() => {
                  setActiveOption("dual");
                  setActiveVideo("aegis");
                }}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeOption === "dual"
                    ? "bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A] shadow-lg font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#0B1F3A]" />
                <span>Dual-Shield (Both)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveOption("aegis");
                  setActiveVideo("aegis");
                }}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeOption === "aegis"
                    ? "bg-[#142d52] text-[#F3DC87] border border-[#D8B56D]/60 shadow-md font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#D8B56D]" />
                <span>Aegis Property</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveOption("sparsh");
                  setActiveVideo("sparsh");
                }}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeOption === "sparsh"
                    ? "bg-[#176B63] text-white border border-emerald-400/60 shadow-md font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>Sparsh Elder Care</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Image-Based Option Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mt-4 sm:mt-6">
          {/* Card 1: Aegis Property Management */}
          <div
            className={`rounded-2xl overflow-hidden border transition-all duration-300 bg-white/5 backdrop-blur-md flex flex-col justify-between group shadow-xl ${
              activeOption === "aegis" || activeOption === "dual"
                ? "border-[#D8B56D] ring-2 ring-[#D8B56D]/40"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="relative h-48 sm:h-52 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Luxury residential property in Bengaluru"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/30 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1F3A]/90 backdrop-blur-md border border-[#D8B56D]/50 text-[#F3DC87] text-[11px] font-bold">
                <Building2 className="w-3.5 h-3.5 text-[#D8B56D]" />
                <span>AEGIS REAL ESTATE SHIELD</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                <span className="font-semibold">₹182.4 Cr Asset Portfolio</span>
                <span className="text-[#F3DC87] font-bold">18-Day Placement</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Aegis Property Stewardship
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Protecting high-value residences across Bengaluru, Hyderabad &amp; Delhi NCR. Corporate leases, escrow rent, and 360° quarterly inspection audits.
                </p>
              </div>

              {/* 3 Quick Visual Chips */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D]" />
                  <span>CIBIL 750+ Vetting</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D]" />
                  <span>5th of Month Escrow</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D]" />
                  <span>Form 15CA/CB Tax</span>
                </span>
              </div>

              {/* Prominent Action Button */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/aegis"
                  className="flex-1 bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#0B1F3A]" />
                  <span>Explore Aegis Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact?interest=aegis"
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
                >
                  <span>Enquire</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Sparsh Elder Care */}
          <div
            className={`rounded-2xl overflow-hidden border transition-all duration-300 bg-white/5 backdrop-blur-md flex flex-col justify-between group shadow-xl ${
              activeOption === "sparsh" || activeOption === "dual"
                ? "border-emerald-400 ring-2 ring-emerald-400/40"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="relative h-48 sm:h-52 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Compassionate health escort assisting Indian elder"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/30 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1F3A]/90 backdrop-blur-md border border-emerald-400/50 text-emerald-300 text-[11px] font-bold">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>SPARSH PARENTAL CARE SHIELD</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                <span className="font-semibold">Apollo · Fortis · Manipal</span>
                <span className="text-emerald-300 font-bold">11.8 Min SOS Response</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Sparsh Family &amp; Elder Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Giving parents the clinical escort, routine vitals tracking, and warm companionship they deserve. When you are thousands of miles away, they are never alone.
                </p>
              </div>

              {/* 3 Quick Visual Chips */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>OPD Doctor Escorts</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Routine Vitals &amp; ECG</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>24/7 Rapid SOS Alert</span>
                </span>
              </div>

              {/* Prominent Action Button */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/sparsh"
                  className="flex-1 bg-gradient-to-r from-[#176B63] to-[#0e4842] hover:brightness-110 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4 text-emerald-300" />
                  <span>Explore Care Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact?interest=sparsh"
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
                >
                  <span>Enquire</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Global Action Bar with On-Demand Video Showcase */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="group relative inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] hover:from-white/[0.14] hover:to-white/[0.1] text-white border border-[#D8B56D]/35 hover:border-[#D8B56D]/80 shadow-lg hover:shadow-[0_8px_28px_rgba(216,181,109,0.3)] backdrop-blur-md transition-all duration-300 cursor-pointer"
            >
              {/* Unique Multi-Layered Cinema 4K Icon with Sonar Pulse */}
              <div className="relative flex items-center justify-center shrink-0 w-8 h-8 sm:w-9 sm:h-9">
                {/* 1. Radar Sonar Ping Wave */}
                <span className="absolute -inset-1 rounded-full bg-[#D8B56D]/35 animate-ping opacity-60 duration-1000 pointer-events-none" />

                {/* 2. Outer Precision Gold Bevel Ring */}
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#967530] via-[#F3DC87] to-[#D8B56D] shadow-[0_0_14px_rgba(216,181,109,0.45)] group-hover:shadow-[0_0_24px_rgba(216,181,109,0.8)] transition-all">
                  {/* 3. Deep Optical Lens Well */}
                  <div className="w-full h-full rounded-full bg-[#071329] p-[2px] flex items-center justify-center">
                    {/* 4. Metallic Gold Core Disc */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F5DE93] via-[#D8B56D] to-[#B79224] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {/* 5. Crisp Cinema Play Arrow */}
                      <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#071329] fill-current translate-x-0.5 filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* 6. Active 4K Recording Indicator Pip */}
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-[#071329]" />
                </span>
              </div>

              {/* Text Label */}
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-[#F3DC87] transition-colors pr-1">
                Watch Video
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 font-sans">
            <Link
              href="#tco-estimator"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#D8B56D]" />
              <span>Calculate Care Cost</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0B1F3A]" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4K Video Player Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#0B1F3A] text-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative border-2 border-[#D8B56D]/60">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-serif text-lg font-bold text-white">
                  Sustune Care 4K Operational Video
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer transition-colors"
                aria-label="Close video modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden bg-black relative">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                src={
                  activeVideo === "aegis"
                    ? "/videos/aegis-promotional-video.mp4"
                    : "/videos/sparsh-promotional-video.mp4"
                }
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveVideo("aegis")}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer ${
                    activeVideo === "aegis"
                      ? "bg-[#D8B56D] text-[#0B1F3A] border-[#D8B56D]"
                      : "bg-white/5 text-slate-300 border-white/15"
                  }`}
                >
                  Aegis Property Video
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVideo("sparsh")}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer ${
                    activeVideo === "sparsh"
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-white/5 text-slate-300 border-white/15"
                  }`}
                >
                  Sparsh Elder Care Video
                </button>
              </div>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A] font-bold py-2 px-4 rounded-xl cursor-pointer hover:brightness-110 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
