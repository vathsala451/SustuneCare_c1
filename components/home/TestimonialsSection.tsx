import React from "react";
import { MessageSquareQuote, ShieldCheck, Star, MapPin, Info, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      initials: "VS",
      name: "Dr. Vikram S.",
      role: "Consultant Radiologist",
      location: "London, United Kingdom 🇬🇧",
      service: "Dual-Shield (Property & Care)",
      story:
        "Managing my parents' health from London used to mean endless anxious phone calls. Having Sister Mary accompany my father to Apollo for his cardiology follow-ups and upload the exact doctor notes within an hour has been life-changing. Meanwhile, our Whitefield villa rent is handled without a single broker hassle.",
      highlight: "Eliminated the constant 3 AM worry across time zones.",
    },
    {
      initials: "PK",
      name: "Priya & Karthik M.",
      role: "VP of Product & Engineering",
      location: "San Jose, California 🇺🇸",
      service: "Sparsh Family & Elder Care",
      story:
        "My mother in Hyderabad used to downplay her knee pain and dizzy spells so we wouldn't panic in California. The Sparsh Care Companion conducts regular bi-weekly vitals check-ins and schedules timely diagnostics. The transparency through the client portal is exceptional.",
      highlight: "Authentic, respectful care that preserves parents' dignity.",
    },
    {
      initials: "RS",
      name: "Rohan & Sneha D.",
      role: "Financial Director",
      location: "Dubai, United Arab Emirates 🇦🇪",
      service: "Aegis Property Stewardship",
      story:
        "We had two apartments in Gurugram that sat empty for months because local brokers were unresponsive and unreliable. Aegis placed corporate tenants with full police verification in under three weeks. The quarterly 360° digital inspection reports with HD photos provide total peace of mind.",
      highlight: "Corporate tenants placed and 5th-of-month rent guaranteed.",
    },
    {
      initials: "AP",
      name: "Ananya P.",
      role: "Senior Urban Architect",
      location: "Sydney, Australia 🇦🇺",
      service: "Dual-Shield (Property & Care)",
      story:
        "The distance between Sydney and Bengaluru is daunting during emergencies. When my father experienced an acute blood pressure spike, Sustune Care's local coordinator immediately initiated emergency coordination, dispatched a companion, liaised with hospital staff, and briefed me directly. That level of dedication cannot be bought from ad-hoc agents.",
      highlight: "Rapid emergency protocol and on-ground presence.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>DIASPORA TRUST &amp; PERSPECTIVES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            How Sustune Care Supports Families Globally
          </h2>
          <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            Read representative scenarios of global Non-Resident Indians who transitioned from
            unreliable ad-hoc favors to structured institutional stewardship.
          </p>
        </div>

        {/* Clear Demonstration / Example Feedback Banner */}
        <div className="mb-12 p-4 rounded-2xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between gap-4 max-w-4xl mx-auto font-body shadow-xs">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-[#D8B56D] shrink-0" />
            <span>
              <strong className="text-[#0B1F3A] dark:text-white">Demonstration Preview:</strong> Representative feedback illustrating real-world
              scenarios handled by Sustune Care. Client identities are protected under fiduciary privacy.
            </span>
          </div>
          <span className="text-[10px] uppercase font-bold text-[#967530] dark:text-[#F3DC87] shrink-0 font-sans">
            Fiduciary Privacy
          </span>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-7 sm:p-8 bg-[#F6F3ED] dark:bg-[#0B1F3A]/60 border border-[#DCE3EA] dark:border-white/10 shadow-[0_2px_10px_rgba(11,31,58,0.04)] hover:shadow-[0_12px_36px_-6px_rgba(11,31,58,0.1)] hover:bg-white dark:hover:bg-[#0B1F3A] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-serif font-bold text-base border-2 border-[#D8B56D] shadow-sm">
                      {t.initials}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                        {t.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-body">
                        <span>{t.role}</span>
                        <span>•</span>
                        <span>{t.location}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D8B56D]/15 text-[#967530] dark:text-[#F3DC87] border border-[#D8B56D]/30 font-sans">
                    {t.service}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#263548] dark:text-slate-200 leading-relaxed font-body">
                  &ldquo;{t.story}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE3EA] dark:border-white/10 flex items-center gap-2 text-xs font-semibold text-[#176B63] dark:text-emerald-400 font-body">
                <CheckCircle2 className="w-4 h-4 text-[#176B63] dark:text-emerald-400 shrink-0" />
                <span>{t.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Diaspora Trust Strip */}
        <div className="mt-16 pt-10 border-t border-[#DCE3EA] dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10">
            <div className="font-serif font-bold text-3xl text-[#0B1F3A] dark:text-[#F3DC87]">
              100%
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-300 mt-1 block font-body">Escrow Audited Payouts</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10">
            <div className="font-serif font-bold text-3xl text-[#0B1F3A] dark:text-[#F3DC87]">
              60-Point
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-300 mt-1 block font-body">Quarterly Property Inspections</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10">
            <div className="font-serif font-bold text-3xl text-[#0B1F3A] dark:text-[#F3DC87]">
              Rapid Protocol
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-300 mt-1 block font-body">Immediate Alert &amp; Hospital Escalation</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10">
            <div className="font-serif font-bold text-3xl text-[#0B1F3A] dark:text-[#F3DC87]">
              All Timezones
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-300 mt-1 block font-body">EST, PST, GMT, GST, AEST Sync</span>
          </div>
        </div>
      </div>
    </section>
  );
}
