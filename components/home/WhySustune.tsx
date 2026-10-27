import React from "react";
import { ShieldCheck, Home, Activity, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhySustune() {
  const pillarIcons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#0B1F3A] dark:text-[#D8B56D]" />,
    Home: <Home className="w-6 h-6 text-[#D8B56D]" />,
    Activity: <Activity className="w-6 h-6 text-[#176B63]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#176B63]" />,
  };

  const accentBorders: Record<string, string> = {
    ShieldCheck: "border-t-4 border-t-[#0B1F3A] dark:border-t-[#D8B56D]",
    Home: "border-t-4 border-t-[#D8B56D]",
    Activity: "border-t-4 border-t-[#176B63]",
    HeartHandshake: "border-t-4 border-t-[#176B63]",
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <span className="w-2 h-2 rounded-full bg-[#D8B56D]" />
            <span>OUR FOUR BRAND PILLARS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            Why Global NRIs Trust Sustune Care
          </h2>
          <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            Rooted in our founding identity: Protected Care &amp; Sustained Dignity. Every decision
            we make is guided by four enduring operational values.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.brandPillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`rounded-2xl p-7 bg-[#F6F3ED] dark:bg-[#0B1F3A]/60 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:shadow-[0_12px_36px_-6px_rgba(11,31,58,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                accentBorders[pillar.icon]
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 border border-[#DCE3EA] dark:border-white/15 shadow-xs flex items-center justify-center mb-5">
                  {pillarIcons[pillar.icon]}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#967530] dark:text-[#F3DC87] block mb-1 font-sans">
                  {pillar.subtitle}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE3EA] dark:border-white/10 text-[11px] font-bold text-[#0B1F3A] dark:text-white font-sans">
                Sustune Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
