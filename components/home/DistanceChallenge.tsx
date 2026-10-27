import React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  HeartCrack,
  Building,
  PhoneOff,
  ShieldAlert,
} from "lucide-react";

export function DistanceChallenge() {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F3ED] dark:bg-[#071329] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8B56D]/15 dark:bg-[#D8B56D]/20 text-[#967530] dark:text-[#F3DC87] border border-[#D8B56D]/40 text-xs font-bold">
            <AlertTriangle className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>THE NRI REALITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            The <span className="underline decoration-[#D8B56D] decoration-4 underline-offset-8">Anxiety of Distance</span>, Resolved.
          </h2>
          <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            Every NRI lives with a quiet undercurrent of guilt and worry. Sustune Care
            replaces awkward favors from distant relatives and unreliable local brokers
            with institutional responsibility and heartfelt care.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: The Status Quo (Ad-Hoc / High Anxiety) */}
          <div className="bg-white dark:bg-[#0c1830] rounded-2xl p-6 sm:p-8 border border-red-200 dark:border-red-900/40 shadow-sm relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-400" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/40">
                    <HeartCrack className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block">
                      The Status Quo
                    </span>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                      Ad-Hoc Favors &amp; Guesswork
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/70 text-red-700 dark:text-red-300 border border-transparent dark:border-red-500/30">
                  High Anxiety
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-red-50/40 dark:bg-red-950/25 border border-red-100 dark:border-red-900/30">
                  <h4 className="font-display font-bold text-sm text-red-950 dark:text-red-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    The 3:00 AM Anxious Awakening
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed pl-4 font-body">
                    Waking up to a missed call in California or London, wondering if mom took
                    her heart medicine or if an emergency unfolded while you were asleep.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50/40 dark:bg-red-950/25 border border-red-100 dark:border-red-900/30">
                  <h4 className="font-display font-bold text-sm text-red-950 dark:text-red-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    Parents Concealing Symptoms
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed pl-4 font-body">
                    &ldquo;Beta, we are completely fine!&rdquo; — Indian parents habitually
                    downplay dizziness, chest discomfort, or falls so their overseas children
                    don&apos;t worry.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50/40 dark:bg-red-950/25 border border-red-100 dark:border-red-900/30">
                  <h4 className="font-display font-bold text-sm text-red-950 dark:text-red-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    Unmonitored Vacant Properties
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed pl-4 font-body">
                    Water seepage, dampness, illegal sub-leasing, or delayed rent payments
                    escalating into expensive disputes before anyone notices.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50/40 dark:bg-red-950/25 border border-red-100 dark:border-red-900/30">
                  <h4 className="font-display font-bold text-sm text-red-950 dark:text-red-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    Imposing on Relatives
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed pl-4 font-body">
                    Calling distant cousins or aging neighbors to handle hospital OPD queues,
                    tenant disputes, or emergency plumbing fixes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Operational Principle: <strong className="text-slate-700 dark:text-slate-200">Eliminating the friction and uncertainty of remote ad-hoc management</strong></span>
            </div>
          </div>

          {/* Right Column: The Sustune Protocol (Institutional Peace of Mind) */}
          <div className="bg-[#0B1F3A] text-white rounded-2xl p-6 sm:p-8 border-2 border-[#D8B56D]/60 shadow-xl relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D8B56D] via-[#176B63] to-[#2CD997]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D8B56D]/20 text-[#D8B56D] border border-[#D8B56D]/40">
                    <CheckCircle2 className="w-5 h-5 text-[#D8B56D]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#F3DC87] uppercase tracking-wider block">
                      The Sustune Protocol
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white">
                      Guaranteed Corporate Accountability
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#176B63] text-white">
                  Zero Anxiety
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8B56D]/40 transition-colors">
                  <h4 className="font-display font-bold text-sm text-[#F3DC87] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    24/7 Rapid Emergency Coordination
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed pl-6 font-body">
                    Pre-authorized emergency dispatch protocol with immediate hospital
                    escort, family alerts, and doctor directive logs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8B56D]/40 transition-colors">
                  <h4 className="font-display font-bold text-sm text-[#F3DC87] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Certified Healthcare Companions
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed pl-6 font-body">
                    A respectful companion accompanies your parents to doctor visits, collects
                    prescriptions, and uploads transparent consultation notes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8B56D]/40 transition-colors">
                  <h4 className="font-display font-bold text-sm text-[#F3DC87] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Quarterly 360° Digital Property Audits
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed pl-6 font-body">
                    High-resolution room-by-room condition reports, rent escrow statements,
                    and preventive maintenance tracking into your client portal.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8B56D]/40 transition-colors">
                  <h4 className="font-display font-bold text-sm text-[#F3DC87] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Real-Time WhatsApp &amp; Portal Updates
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed pl-6 font-body">
                    Photos, vitals tracking, and inspection summaries delivered across your
                    local time zone—EST, PST, GMT, GST, or AEST.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>Managed via private <strong className="text-white">Dual-Shield Client Portal</strong></span>
              <span className="text-[#F3DC87] font-semibold">100% Transparency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
