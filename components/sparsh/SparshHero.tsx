"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  Activity,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ShieldAlert,
  Play,
  Stethoscope,
  CalendarHeart,
  Clock,
} from "lucide-react";

export function SparshHero() {
  return (
    <section className="relative overflow-hidden bg-[#071329] text-white py-14 sm:py-20 lg:py-24">
      {/* High-Quality Static Elder Care Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=85"
          alt="Sparsh Compassionate Healthcare and Parental Elder Care"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 sm:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071329]/85 via-[#071329]/45 to-[#071329]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.2),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Essential Headlines & The 3 Proposed Action Options */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-emerald-400/40 text-xs font-bold text-emerald-300 backdrop-blur-md">
              <div className="w-4 h-4 relative shrink-0">
                <Image
                  src="/brand/logo.png"
                  alt="Sustune Care Official Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <span>SPARSH FAMILY &amp; ELDER CONCIERGE</span>
            </div>

            {/* Headline - Punchy & Impactful */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              A Trusted, Caring Presence <br />
              <span className="text-emerald-400">Back Home in India.</span>
            </h1>

            {/* Short 1-Sentence Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body max-w-2xl font-normal">
              Clinical doctor escorts, routine vitals tracking, and warm companionship for your aging parents. When you are thousands of miles away, they are never alone.
            </p>

            {/* 3 Dedicated Proposed Actions - Connected to Real Functionality */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 font-sans">
              {/* Proposed Action 1: Explore Care Services -> Scrolls to 6 Pillars */}
              <a
                href="#care-services"
                className="bg-gradient-to-r from-[#176B63] to-[#0e4842] hover:brightness-110 text-white font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-emerald-300" />
                <span>Explore Care Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Proposed Action 2: View Care Options -> Scrolls to Interactive Configurator */}
              <a
                href="#configurator"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm py-3.5 px-5 rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>View Care Options</span>
              </a>

              {/* Proposed Action 3: Book a Consultation -> Connects to Consultation Flow */}
              <Link
                href="/contact?interest=sparsh"
                className="bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <CalendarHeart className="w-4 h-4 text-[#0B1F3A]" />
                <span>Book a Consultation</span>
              </Link>
            </div>

            {/* Concise Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs text-slate-200">
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>OPD Doctor Escort</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>24/7 SOS Alert</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Bi-Weekly Telemetry</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Daily Errands</span>
              </div>
            </div>

            {/* Clinical & Compassionate Care Indicator */}
            <div className="pt-1 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-emerald-300 font-medium">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                Dedicated Clinical &amp; Daily Companionship
              </span>
              <span>·</span>
              <span>NABH &amp; Doctor Aligned Concierge in India</span>
            </div>
          </div>

          {/* Right Column: Apollo & Fortis Style Clinical Emergency Telemetry Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-400/40 h-[240px] sm:h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1000&q=80"
                alt="Compassionate healthcare escort providing respectful companionship"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 bg-[#0B1F3A]/90 backdrop-blur-md p-3 rounded-xl border border-emerald-400/40 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Sparsh Care Companion</span>
                  <span className="text-slate-300 text-[11px]">Apollo Escort · Audio Log Uploaded</span>
                </div>
                <span className="text-emerald-300 font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Care
                </span>
              </div>
            </div>

            {/* Emergency & Hospital Support Grid (Apollo/Fortis visual benchmark) */}
            <div className="bg-gradient-to-b from-[#0F5132] to-[#082A1A] border-2 border-emerald-400/50 rounded-2xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    Active Telemetry Grid
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                  NABH Aligned
                </span>
              </div>

              <div className="mt-3.5 space-y-3">
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-emerald-200 font-medium">Emergency Rapid Triage Response</div>
                    <div className="font-serif text-2xl font-bold text-white mt-0.5">11.8 Minutes</div>
                  </div>
                  <div className="text-right text-[10px] text-emerald-300 max-w-[140px] leading-tight">
                    Paramedic &amp; Care Companion dispatched simultaneously
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#061e13] border border-emerald-500/40 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-emerald-200 text-xs">Hospital Network Access</div>
                    <div className="text-[10px] text-slate-300 mt-0.5">Apollo, Manipal, Fortis, Max Healthcare</div>
                  </div>
                  <Activity className="w-5 h-5 text-emerald-400 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
