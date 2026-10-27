import React from "react";
import { MessageSquare, Calendar, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Tell Us What You Need",
      description:
        "Select whether you require Aegis Property Stewardship, Sparsh Family Care, or a combined Dual-Shield package through our simple intake form.",
      icon: <MessageSquare className="w-5 h-5 text-[#D8B56D]" />,
    },
    {
      step: "02",
      title: "Discuss with Our Concierge Team",
      description:
        "Join a private video strategy call scheduled around your international time zone (USA, UK, UAE, Australia) to review property details and parental needs.",
      icon: <Calendar className="w-5 h-5 text-[#176B63]" />,
    },
    {
      step: "03",
      title: "Agree on a Tailored Plan",
      description:
        "Receive a clear, transparent scope of services and illustrative rates with zero hidden fees, custom-fit to your family's exact requirements.",
      icon: <FileCheck className="w-5 h-5 text-[#D8B56D]" />,
    },
    {
      step: "04",
      title: "Receive Coordinated Updates",
      description:
        "Relax as on-ground City Managers oversee your properties and Care Companions escort your parents, delivering timestamped logs to your portal.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#176B63]" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F6F3ED] dark:bg-[#071329] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <span className="w-2 h-2 rounded-full bg-[#176B63]" />
            <span>SEAMLESS ONBOARDING</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            How Sustune Care Works for NRIs
          </h2>
          <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            From your first inquiry to active on-ground stewardship, our four-step onboarding
            ensures total clarity, confidentiality, and institutional execution.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="rounded-2xl p-7 bg-white dark:bg-[#0B1F3A]/60 border border-[#DCE3EA] dark:border-white/10 hover:border-[#D8B56D]/60 hover:shadow-[0_12px_36px_-6px_rgba(11,31,58,0.1)] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif font-extrabold text-3xl text-[#0B1F3A]/20 dark:text-white/20 group-hover:text-[#D8B56D] transition-colors">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-xl bg-[#F6F3ED] dark:bg-white/10 border border-[#DCE3EA] dark:border-white/10 shadow-xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-bold text-[#176B63] dark:text-emerald-400 flex items-center gap-1 font-body">
                <span>Step {index + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Operational Note */}
        <div className="mt-12 text-center bg-white dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 rounded-2xl p-5 max-w-2xl mx-auto text-xs text-[#5A6E85] dark:text-slate-300 font-body shadow-xs">
          <p>
            <strong className="text-[#0B1F3A] dark:text-white">Note:</strong> Inquiring or requesting a strategy call does not commit you to
            any service or invoice. Services begin only after mutual agreement on your tailored plan.
          </p>
        </div>
      </div>
    </section>
  );
}
