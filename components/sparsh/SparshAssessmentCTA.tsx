import React from "react";
import Link from "next/link";
import { HeartHandshake, ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

export function SparshAssessmentCTA() {
  const whatsappUrl =
    "https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20would%20like%20to%20discuss%20care%20for%20my%20parents%20in%20India.";

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-r from-[#0F5132] via-[#0A3622] to-[#0F5132] text-white border-t border-emerald-500/30 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(44,217,151,0.18),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-emerald-300 border border-emerald-400/30">
          <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
          <span>Give Your Parents Dignity &amp; Support</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Ready to give your parents the care they deserve?
        </h2>

        <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Schedule a virtual introduction with a Sustune Senior Care Director. We conduct a preliminary geriatric
          and lifestyle assessment to design the perfect care routine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <Link
            href="/contact?interest=sparsh"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-[#093420] font-bold text-sm shadow-xl transition-all cursor-pointer group"
          >
            <span>Schedule Free Parental Assessment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-emerald-300" />
            <span>Direct WhatsApp with Head of Care</span>
          </a>
        </div>

        <div className="pt-6 border-t border-white/15 text-xs text-emerald-200/80 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>NABH-Aligned Health Framework</span>
          </span>
          <span>•</span>
          <span>Zero Obligation Parental Assessment</span>
          <span>•</span>
          <span>Timezone Aligned Video Consultations</span>
        </div>
      </div>
    </section>
  );
}
