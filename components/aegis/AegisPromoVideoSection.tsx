"use client";

import React from "react";
import Link from "next/link";
import { PlayCircle, Sparkles, ArrowRight, ShieldCheck, FileCheck2 } from "lucide-react";
import { PromotionalVideoPlayer } from "@/components/ui/PromotionalVideoPlayer";

export function AegisPromoVideoSection() {
  return (
    <section
      id="aegis-video"
      aria-label="Aegis Property Video Presentation"
      className="py-14 sm:py-20 bg-[#0B1F3A] text-white relative overflow-hidden border-b border-white/10"
    >
      {/* Subtle ambient gold glow centered behind video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(216,181,109,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal, Unobstructed Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D8B56D]/40 text-xs font-bold text-[#F3DC87]">
            <PlayCircle className="w-4 h-4 text-[#D8B56D]" />
            <span>OFFICIAL AEGIS PROPERTY VIDEO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Institutional Property Stewardship <br />
            <span className="gold-gradient-text">In Action</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body max-w-xl mx-auto">
            Take an executive walkthrough of our operational framework: corporate tenant vetting, escrow rent collection, and forensic quarterly audits.
          </p>
        </div>

        {/* Centerpiece Video Player - Fully Unobstructed */}
        <div className="flex justify-center">
          <div className="w-full max-w-[380px] sm:max-w-[420px]">
            <PromotionalVideoPlayer
              src="/videos/aegis-promotional-video.mp4"
              title="Aegis Property Care Video"
              badgeText="Aegis 4K Operational Video"
              accentColor="gold"
            />
          </div>
        </div>

        {/* Minimal Action Bar Below Video */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8 font-sans">
          <Link
            href="/contact?interest=aegis"
            className="bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#0B1F3A]" />
            <span>Request Asset Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#pricing"
            className="bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4 text-[#D8B56D]" />
            <span>Compare Stewardship Plans</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
