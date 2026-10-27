"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Play, Sparkles, X, ShieldAlert } from "lucide-react";

export function SparshStorytellingSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="storytelling" className="py-20 sm:py-28 bg-[#FBFBFB] dark:bg-[#071329] border-t border-slate-100 dark:border-white/10 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F5132]/10 dark:bg-emerald-950/40 border border-[#0F5132]/20 dark:border-emerald-500/30 text-xs font-semibold text-[#0F5132] dark:text-emerald-300 mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Human-Centric Empathy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] dark:text-white tracking-tight">
            “A Trusted Presence Back Home”
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            Technology enables communication, but only genuine human affection can cure the ache of distance.
            Discover the caretakers who treat your parents like their own.
          </p>
        </div>

        {/* Feature Story Card */}
        <div className="rounded-3xl overflow-hidden bg-[#0B1B3D] text-white shadow-2xl relative border-2 border-[#D4AF37]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span className="text-xs uppercase font-bold text-[#F3DC87] tracking-widest">
                Documentary Story
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                How Suresh Found Peace in London While His 82-Year-Old Mother Thrived in Bengaluru
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                “Before Sustune, I was constantly on edge in London, wondering if Amma remembered to take her evening insulin. Meeting Sister Mercy changed our lives. Amma now calls her her second daughter, and their laughter over evening filter coffee is something money cannot buy.”
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-[#D4AF37] hover:bg-[#B79224] text-[#0B1B3D] font-bold py-3.5 px-6 rounded-xl flex items-center gap-2.5 transition-all shadow-lg text-xs sm:text-sm cursor-pointer group"
                >
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>Watch the 3-Minute Story</span>
                </button>
                <span className="text-xs text-slate-400">Filmed in Bengaluru • 4K</span>
              </div>
            </div>

            {/* Visual Media Column (5 cols) */}
            <div
              className="lg:col-span-5 relative h-72 lg:h-full min-h-[320px] cursor-pointer group overflow-hidden"
              onClick={() => setIsVideoOpen(true)}
            >
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Elderly Indian mother laughing warmly with nurse companion"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#0B1B3D] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Demonstration Modal Dialog */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#0B1B3D] text-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative border border-[#D4AF37]">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer transition-colors"
              aria-label="Close documentary modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video rounded-2xl overflow-hidden bg-black relative mb-4 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                alt="Documentary video preview"
                fill
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute text-center p-6 bg-black/70 rounded-2xl backdrop-blur-sm max-w-md mx-4 border border-[#D4AF37]/30">
                <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  “They are our eyes, ears, and hearts back home.”
                </h4>
                <p className="text-xs text-slate-300 mb-2">
                  Documentary excerpt: Dr. Vikramaditya Reddy &amp; Sister Mercy sharing the journey of parental care from London to Bengaluru.
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-200 text-[10px] border border-amber-400/30">
                  <ShieldAlert className="w-3 h-3 text-amber-400" />
                  <span>Demonstration documentary placeholder pending approved media release</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Sustune Care Documentary Series • 4K Ultra HD</span>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="bg-[#D4AF37] text-[#0B1B3D] font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#b79224] transition-colors"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
