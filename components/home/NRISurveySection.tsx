import React from "react";
import { ClipboardList, Clock, Lock, ExternalLink } from "lucide-react";

export function NRISurveySection() {
  return (
    <section id="survey" className="py-16 sm:py-20 bg-[#0B1F3A] text-white relative overflow-hidden border-b border-[#D8B56D]/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(216,181,109,0.14),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#D8B56D]/20 text-[#F3DC87] text-xs font-bold uppercase tracking-wider border border-[#D8B56D]/40 font-sans">
                NRI Pulse Research
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Help Us Tailor Stewardship Services for Your City Back Home
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-body">
                Managing physical real estate and caring for aging parents thousands of miles away is one of the hardest challenges for the Global Indian diaspora. Take our brief 2-minute survey to shape our operational expansion in Bengaluru, Hyderabad, Delhi NCR, and Tier-1 hubs.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300 font-sans">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D8B56D]" />
                  <span>Takes 2 Minutes</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Confidential</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdCuTEI5h1hxB0yzlwRM-U_6RDU2JQ-FCXwimKynh4RM0IJzA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#176B63] to-[#0E4842] hover:from-[#1D8278] hover:to-[#176B63] text-white font-bold text-xs sm:text-sm text-center shadow-lg hover:shadow-[#176B63]/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 font-sans cursor-pointer"
              >
                <ClipboardList className="w-4 h-4" />
                <span>Complete 2-Min NRI Survey</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-slate-400 mt-2 font-body">
                Opens official Sustune Care Google Form
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
