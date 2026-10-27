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
    <section className="relative overflow-hidden bg-[#071329] text-white min-h-[92vh] flex flex-col justify-center pt-8 pb-16 lg:pt-12 lg:pb-20">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Centered Status Bar */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D8B56D]/40 backdrop-blur-md text-xs font-semibold text-slate-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D8B56D] animate-ping shrink-0" />
            <span className="text-[#F3DC87] uppercase tracking-wider text-[11px] font-bold">
              Institutional Property &amp; Family Care
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">USA · UK · UAE · Australia · Canada · Singapore</span>
          </div>

          {/* Main Headline - Short, Punchy, Emotional */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Distance Should <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Never Mean Worry.</span>
          </h1>

          {/* Short 1-Sentence Value Hook (No long document paragraphs) */}
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-body font-normal">
            Care for your property. Care for your parents. Total peace of mind for global NRIs across Bengaluru, Hyderabad, and Delhi NCR.
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
                <Building2 className="w-4 h-4 text-[#D8B56D]" />
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
                <HeartHandshake className="w-4 h-4 text-emerald-300" />
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-[#D8B56D] text-[#0B1F3A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current translate-x-0.5" />
              </div>
              <span>Watch 4K Operational Video</span>
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
