import React from "react";
import { ShieldCheck, FileCheck, Stethoscope, Lock } from "lucide-react";

export function GovernanceSection() {
  const standards = [
    {
      title: "Clinical & Ethical Governance",
      description:
        "Structured protocols modeled on international quality assurance. All Care Companions undergo comprehensive identity checks and geriatric empathy training.",
      icon: <Stethoscope className="w-5 h-5 text-[#176B63]" />,
    },
    {
      title: "Audited Real Estate Escrow",
      description:
        "Rent collections are held in dedicated escrow with automated disbursements and tax compliance assistance (Form 15CA/CB support for repatriation).",
      icon: <Lock className="w-5 h-5 text-[#0B1F3A] dark:text-[#D8B56D]" />,
    },
    {
      title: "Police & Legal Verification",
      description:
        "Tenancy contracts drafted by practicing property advocates with statutory local police verification filed before occupancy.",
      icon: <FileCheck className="w-5 h-5 text-[#D8B56D]" />,
    },
    {
      title: "Zero Conflicts of Interest",
      description:
        "We are independent fiduciaries. We do not take broker kickbacks or vendor commissions; our sole mandate is protecting your interests.",
      icon: <ShieldCheck className="w-5 h-5 text-[#176B63]" />,
    },
  ];

  return (
    <section id="governance" className="py-20 lg:py-28 bg-[#F6F3ED] dark:bg-[#071329] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>INSTITUTIONAL RIGOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            Governance &amp; Accountability Framework
          </h2>
          <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            We operate with the fiduciary integrity of a family office and the clinical discipline
            of a premier healthcare organization. No compromises, no shortcuts.
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std) => (
            <div
              key={std.title}
              className="p-7 rounded-2xl bg-white dark:bg-[#0B1F3A]/70 border border-[#DCE3EA] dark:border-white/10 shadow-[0_2px_10px_rgba(11,31,58,0.04)] hover:shadow-[0_12px_36px_-6px_rgba(11,31,58,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#F6F3ED] dark:bg-white/10 border border-[#DCE3EA] dark:border-white/15 shadow-xs w-fit mb-5">
                  {std.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white mb-2">
                  {std.title}
                </h3>
                <p className="text-xs text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
                  {std.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
