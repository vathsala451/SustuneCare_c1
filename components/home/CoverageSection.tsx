import React from "react";
import { MapPin, Building2, Stethoscope, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CoverageSection() {
  const hubs = [
    {
      city: "Bengaluru",
      badge: "Full Primary Hub",
      badgeColor: "bg-brand-emeraldLight text-brand-emeraldDark border-brand-emerald/30",
      description:
        "Comprehensive real estate asset stewardship and hospital escort network spanning East, South, and North Bengaluru.",
      keyAreas: ["Whitefield", "Indiranagar", "Koramangala", "Sarjapur Road", "Hebbal", "Jayanagar"],
      hospitals: ["Apollo Hospitals", "Manipal Hospital", "Fortis Hospital", "Narayana Health"],
      features: [
        "Dedicated On-Ground City Care Manager",
        "Quarterly 360° Inspection Teams",
        "Apollo & Manipal OPD Accompaniment",
      ],
    },
    {
      city: "Hyderabad",
      badge: "Full Primary Hub",
      badgeColor: "bg-brand-emeraldLight text-brand-emeraldDark border-brand-emerald/30",
      description:
        "Dedicated corporate tenant placement and elder care escort across the IT corridor and established residential pockets.",
      keyAreas: ["Hitec City", "Gachibowli", "Jubilee Hills", "Banjara Hills", "Financial District", "Madhapur"],
      hospitals: ["Apollo Health City", "KIMS Hospitals", "Yashoda Hospitals", "Care Hospitals"],
      features: [
        "Corporate IT Tenant Vetting Desk",
        "Escrow Automated Rent Remittance",
        "Jubilee Hills OPD Care Escort",
      ],
    },
    {
      city: "Delhi NCR",
      badge: "Full Primary Hub",
      badgeColor: "bg-brand-emeraldLight text-brand-emeraldDark border-brand-emerald/30",
      description:
        "Institutional property preservation and senior concierge across Gurugram, South Delhi, and Noida premier sectors.",
      keyAreas: ["Gurugram (Golf Course Rd / Cyber City)", "South Delhi", "Noida (Expressway / Sec 150)", "Dwarka"],
      hospitals: ["Medanta The Medicity", "Max Healthcare", "Fortis Memorial", "Apollo Indraprastha"],
      features: [
        "Luxury Villa & High-Rise Oversight",
        "Geriatric Escort & Pharmacy Delivery",
        "Police Verification & Lease Filing",
      ],
    },
  ];

  return (
    <section id="coverage" className="py-20 lg:py-28 bg-[#F6F3ED] dark:bg-[#071329] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <MapPin className="w-3.5 h-3.5 text-[#176B63]" />
            <span>METROPOLITAN SERVICE COVERAGE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            Active Concierge Hubs Across India
          </h2>
          <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            We operate dedicated local offices, trusted contractor networks, and hospital-escort
            companions in India&apos;s leading NRI residential centers.
          </p>
        </div>

        {/* 3 Main Hubs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hubs.map((hub) => (
            <div
              key={hub.city}
              className="rounded-2xl p-7 bg-white dark:bg-[#0B1F3A]/70 border border-[#DCE3EA] dark:border-white/10 shadow-[0_12px_36px_-6px_rgba(11,31,58,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(11,31,58,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-[#F6F3ED] dark:bg-white/10 text-[#0B1F3A] dark:text-white border border-[#DCE3EA] dark:border-white/10 shadow-xs">
                      <Building2 className="w-5 h-5 text-[#D8B56D]" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-[#0B1F3A] dark:text-white">
                      {hub.city}
                    </h3>
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#176B63]/15 text-[#176B63] dark:text-emerald-300 border border-[#176B63]/30"
                  >
                    {hub.badge}
                  </span>
                </div>

                <p className="text-xs text-[#5A6E85] dark:text-slate-300 leading-relaxed mb-6 font-body">
                  {hub.description}
                </p>

                {/* Key Localities */}
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-sans">
                    Key Residential Clusters:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hub.keyAreas.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#F6F3ED] dark:bg-white/10 text-[#263548] dark:text-slate-200 border border-[#DCE3EA] dark:border-white/10 font-body"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Partner Hospital Network */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 dark:border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block flex items-center gap-1.5 font-sans">
                    <Stethoscope className="w-3.5 h-3.5 text-[#176B63]" />
                    <span>OPD Escort Network:</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hub.hospitals.map((hosp) => (
                      <span
                        key={hosp}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#176B63]/10 text-[#176B63] dark:text-emerald-300 border border-[#176B63]/25 font-body"
                      >
                        {hosp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Capabilities */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-white/10">
                  {hub.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#263548] dark:text-slate-200 font-medium font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Hubs Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#967530] dark:text-[#F3DC87] block font-sans">
              Secondary Hubs &amp; Expansion Regions
            </span>
            <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
              Require Support in Chennai, Mumbai, or Pune?
            </h4>
            <p className="text-xs text-[#5A6E85] dark:text-slate-300 font-body">
              We extend property stewardship and bespoke family accompaniment services across
              Tier-1 expansion locations upon customized consultation.
            </p>
          </div>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl text-xs font-bold bg-[#0B1F3A] hover:bg-[#142d52] dark:bg-white dark:text-[#0B1F3A] text-white transition-colors shrink-0 font-sans shadow-sm"
          >
            Inquire for Other Cities
          </a>
        </div>
      </div>
    </section>
  );
}
