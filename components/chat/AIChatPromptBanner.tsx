"use client";

import React from "react";
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";

interface AIChatPromptBannerProps {
  division: "sparsh" | "aegis" | "general";
  className?: string;
}

export function AIChatPromptBanner({ division, className = "" }: AIChatPromptBannerProps) {
  const isSparsh = division === "sparsh";
  const isAegis = division === "aegis";

  const title = isSparsh
    ? "Got Questions About Sparsh Elder Care?"
    : isAegis
    ? "Got Questions About Aegis Property Stewardship?"
    : "Have Questions About Sustune Care?";

  const subtitle = isSparsh
    ? "Skip reading lengthy documents. Ask our 24/7 AI Concierge about emergency protocols, hospital doctor escorts, monthly pricing, or doorstep medicine delivery."
    : isAegis
    ? "Skip reading lengthy documents. Ask our 24/7 AI Concierge about corporate tenant screening, escrow remittances, 80-point inspection audits, or NRI tax compliance."
    : "Skip reading lengthy documents. Ask our 24/7 AI Concierge about our Dual-Shield package, institutional governance, city coverage, or booking a consultation.";

  const promptChips = isSparsh
    ? [
        "What services does Sparsh Elder Care offer?",
        "How fast is the 24/7 Rapid SOS response?",
        "Can you escort my parents to doctor appointments?",
        "What are the Sparsh care plans and pricing?",
      ]
    : isAegis
    ? [
        "What property management services does Aegis provide?",
        "How is rental income collected and remitted?",
        "What does the 80-point property inspection include?",
        "What are the property management tiers and fees?",
      ]
    : [
        "What services does Sustune offer?",
        "How does Dual-Shield protection work?",
        "Which cities in India do you operate in?",
        "How can I book a free NRI consultation?",
      ];

  const triggerChat = (question?: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-sustune-chat", {
          detail: { question },
        })
      );
    }
  };

  return (
    <section className={`py-16 sm:py-20 bg-[#F6F3ED] dark:bg-[#071329] border-t border-b border-slate-200/80 dark:border-white/10 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1F3A] via-[#0E2445] to-[#081528] p-6 sm:p-10 text-white shadow-xl overflow-hidden border border-[#D8B56D]/30">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8B56D]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D8B56D]/40 text-xs font-bold text-[#F3DC87] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B56D]" />
              <span>INSTANT INTERACTIVE CLARITY &bull; 24/7 AI SUPPORT</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl">
              {title}
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {/* Clickable Prompt Chips */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-3xl">
              {promptChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => triggerChat(chip)}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white/10 hover:bg-[#D8B56D]/20 text-slate-100 hover:text-[#F3DC87] border border-white/15 hover:border-[#D8B56D]/60 transition-all cursor-pointer text-left transform active:scale-95"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#D8B56D] shrink-0" />
                  <span>{chip}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B56D]" />
                </button>
              ))}
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => triggerChat()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#D8B56D]/30 transition-all transform active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#0B1F3A]" />
                <span>Ask AI Concierge Anything</span>
              </button>

              <Link
                href={isSparsh ? "/contact?interest=sparsh" : isAegis ? "/contact?interest=aegis" : "/contact"}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wide border border-white/20 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-[#D8B56D]" />
                <span>Book 1-on-1 Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
