"use client";

import React from "react";
import Link from "next/link";
import { PlayCircle, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { PromotionalVideoPlayer } from "@/components/ui/PromotionalVideoPlayer";

export function SparshPromoVideoSection() {
  return (
    <section
      id="sparsh-video"
      aria-label="Sparsh Healthcare Video Presentation"
      className="py-14 sm:py-20 bg-[#061224] text-white relative overflow-hidden border-b border-white/10"
    >
      {/* Subtle ambient emerald glow centered behind video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(16,185,129,0.14),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal, Unobstructed Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-emerald-400/40 text-xs font-bold text-emerald-300">
            <PlayCircle className="w-4 h-4 text-emerald-400" />
            <span>OFFICIAL SPARSH ELDER CARE VIDEO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            A Warm, Dignified Presence <br />
            <span className="text-emerald-400">Back Home in India</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body max-w-xl mx-auto">
            Experience our operational framework: from OPD doctor escorts and medication audits to joyful companionship.
          </p>
        </div>

        {/* Centerpiece Video Player - Fully Unobstructed */}
        <div className="flex justify-center">
          <div className="w-full max-w-[380px] sm:max-w-[420px]">
            <PromotionalVideoPlayer
              src="/videos/sparsh-promotional-video.mp4"
              title="Sparsh Parental Healthcare Video"
              badgeText="Sparsh 4K Operational Video"
              accentColor="emerald"
            />
          </div>
        </div>

        {/* Minimal Action Bar Below Video */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8 font-sans">
          <Link
            href="/contact?interest=sparsh"
            className="bg-gradient-to-r from-[#176B63] to-[#0e4842] hover:brightness-110 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>Book Family Care Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#configurator"
            className="bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Configure Care Plan</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
