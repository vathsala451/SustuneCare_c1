import React from "react";
import { FileText, MapPin, Heart, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function TrustStrip() {
  const icons = [
    <FileText key="report" className="w-5 h-5 text-[#D8B56D] shrink-0" />,
    <MapPin key="pin" className="w-5 h-5 text-[#176B63] shrink-0" />,
    <Heart key="heart" className="w-5 h-5 text-[#176B63] shrink-0" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-[#0B1F3A] dark:text-[#D8B56D] shrink-0" />,
  ];

  return (
    <section className="bg-[#F6F3ED] dark:bg-[#091A33] border-b border-[#DCE3EA] dark:border-white/10 py-9 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.trustAttributes.map((attr, idx) => (
            <div
              key={attr.title}
              className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 shadow-[0_2px_10px_rgba(11,31,58,0.04)] hover:shadow-md hover:border-[#D8B56D]/60 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-[#F6F3ED] dark:bg-white/10 shadow-xs border border-[#DCE3EA] dark:border-white/15 shrink-0 group-hover:scale-105 transition-transform">
                {icons[idx]}
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-[#0B1F3A] dark:text-white">
                  {attr.title}
                </h3>
                <p className="text-xs text-[#5A6E85] dark:text-slate-300 mt-1 leading-relaxed font-body">
                  {attr.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
