"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  KeyRound,
  FileCheck,
  Wrench,
  Scale,
  CheckCircle2,
  ArrowRight,
  X,
  ShieldCheck,
  Building2,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

interface AegisModuleDetail {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  shortSummary: string;
  shortPoints: string[];
  fullDescription: string;
  icon: React.ReactNode;
  image: string;
  sla: string;
  checklist: string[];
  deliverables: string[];
}

export function AegisServices() {
  const [selectedModule, setSelectedModule] = useState<AegisModuleDetail | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedModule(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const modules: AegisModuleDetail[] = [
    {
      number: "01",
      title: "Institutional Tenant Scouting",
      subtitle: "Corporate Vetting, CIBIL Due Diligence & Digital Leases",
      category: "Tenant Placement",
      shortSummary: "Triple-layer screening: CIBIL 750+ bureau score, corporate HR verification, and police station background clearance.",
      shortPoints: [
        "CIBIL & Experian Bureau scoring (min 750)",
        "Corporate HR verification (MNCs & consulates)",
        "Local police background verification filed",
      ],
      fullDescription:
        "Never suffer through bad tenants, unverified sub-letting, or delayed payments. Our institutional tenant scouting process filters out high-risk applicants through triple-layer verification: CIBIL bureau credit scoring, formal corporate HR employment confirmation, and mandatory local police background filing. We prepare legal lease agreements vetted by senior property advocates.",
      icon: <KeyRound className="w-5 h-5 text-[#B79224] dark:text-[#F3DC87]" />,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      sla: "Average placement: 18.4 Days · Target: < 21 Days",
      checklist: [
        "Mandatory 750+ CIBIL score verification before scheduling property visits",
        "Formal written employment confirmation directly from employer HR email",
        "Official police verification certificate filed at local precinct",
      ],
      deliverables: [
        "Digital e-Stamped lease agreement signed via Aadhaar e-Sign",
        "Complete tenant KYC and background audit dossier in your client portal",
        "Initial move-in inventory photographic baseline report",
      ],
    },
    {
      number: "02",
      title: "Active Rental Management & Escrow",
      subtitle: "Automated Collections, TDS Compliance & NRE Remittance",
      category: "Financial Escrow",
      shortSummary: "Rents collected into audited escrow and remitted on the 5th of every month directly to your NRE/NRO account.",
      shortPoints: [
        "Escrow collection with 5th-of-month payout",
        "Section 195 TDS calculations & Form 15CA/CB",
        "Society maintenance reconciliation at source",
      ],
      fullDescription:
        "Eliminate cross-border timezone friction and rent collection stress. Rents are collected into a dedicated escrow account and remitted directly into your NRE or NRO account on the 5th of every month. Our in-house chartered accounting panel calculates applicable Section 195 TDS deductions and issues Form 15CA/CB documentation for clean RBI repatriation.",
      icon: <FileCheck className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      sla: "Guaranteed 5th-of-the-month RTGS / NEFT remittance",
      checklist: [
        "Automated electronic rent collection via NACH / ECS mandates",
        "Formal Section 195 tax withholding calculation & TAN challan issuance",
        "Society maintenance charge deduction at source with official receipt upload",
      ],
      deliverables: [
        "Monthly reconciled remittance ledger with itemized tax and maintenance breakdown",
        "Form 15CA/CB certification prepared for bank remittance desk",
        "Automated legal payment receipts dispatched to tenant and owner",
      ],
    },
    {
      number: "03",
      title: "Turnkey Maintenance & 360° Audits",
      subtitle: "Civil Restoration, Waterproofing & Pre-Approved Repairs",
      category: "Asset Preservation",
      shortSummary: "Forensic 80-point quarterly condition audits with high-resolution photo logs, pre-monsoon checks, and vetted technicians.",
      shortPoints: [
        "Quarterly 80-point digital forensic audits",
        "Pre-monsoon roof, balcony & waterproofing checks",
        "48-hour turnaround SLA for standard tickets",
      ],
      fullDescription:
        "Vacant and tenanted properties both face rapid structural degradation without preventive upkeep. Sustune conducts rigorous quarterly room-by-room forensic inspections with calibrated moisture meters and 360° photographic logging. Minor repairs are handled under an owner-approved cap without disturbing overseas sleep.",
      icon: <Wrench className="w-5 h-5 text-[#B79224] dark:text-[#F3DC87]" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      sla: "48-Hour turnaround for standard tickets · 4-Hour for critical leaks",
      checklist: [
        "Non-destructive electronic moisture detection on all exterior and plumbing walls",
        "Circuit load testing, earth leakage breaker verification, and electrical safety",
        "Complete plumbing line pressure testing and sanitary drain flush",
      ],
      deliverables: [
        "Interactive 80-point digital inspection viewer in your portal with high-res photo zoom",
        "Pre-approved cost estimates with zero markup guarantee on vendor invoices",
        "Photographic before-and-after proof on all completed work orders",
      ],
    },
    {
      number: "04",
      title: "Legal Title & Tax Guardianship",
      subtitle: "Khata Mutation, Encumbrance Audits & Dispute Prevention",
      category: "Legal Stewardship",
      shortSummary: "Fiduciary legal title protection, biannual Encumbrance Certificate retrieval, municipal property tax filing, and encroachment shielding.",
      shortPoints: [
        "Annual municipal property tax (BBMP/GHMC/MCD) filing",
        "Biannual Encumbrance Certificates (EC) pulled",
        "Supreme Court-vetted lease deeds & advocate support",
      ],
      fullDescription:
        "NRI ancestral holdings are historically vulnerable to land sharks, encroachment, fraudulent power-of-attorney registrations, and municipal record tampering. Sustune's senior property advocates maintain active guardianship: pulling regular Encumbrance Certificates, filing timely property taxes, and monitoring physical plot perimeters.",
      icon: <Scale className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      sla: "Biannual EC audit · Immediate tax receipt upload upon filing",
      checklist: [
        "Bi-annual certified Encumbrance Certificate (EC) retrieval from sub-registrar",
        "FEMA compliance and RBI repatriation verification for NRI accounts",
        "Physical boundary verification and GPS-tagged perimeter check for vacant plots",
      ],
      deliverables: [
        "Certified EC certificate archived digitally in client portal",
        "Official BBMP / GHMC / MCD property tax payment receipt and challan",
        "Legal advisory memo for any title or municipal zoning amendments",
      ],
    },
  ];

  return (
    <section
      id="property-services"
      className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <Building2 className="w-4 h-4 text-[#D8B56D]" />
            <span>PREMIER REAL ESTATE STEWARDSHIP FRAMEWORK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F3A] dark:text-white">
            The Four Aegis Operational Modules
          </h2>

          <p className="text-sm sm:text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            Engineered for high-value properties in Bengaluru, Hyderabad, and Delhi NCR. Click <strong>Quick Details</strong> on any module to review comprehensive SLAs, checklists, and legal safeguards.
          </p>
        </div>

        {/* 4 Concise Visual Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="bg-white dark:bg-[#0B1F3A]/85 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Banner with Module Tag */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/25 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0B1F3A]/85 backdrop-blur-md text-[#F3DC87] border border-[#D8B56D]/40">
                      Module {mod.number} · {mod.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md">
                      {mod.icon}
                    </div>
                    <span className="text-[10px] font-medium text-slate-300 bg-[#0B1F3A]/80 px-2 py-0.5 rounded-full border border-white/10">
                      {mod.sla}
                    </span>
                  </div>
                </div>

                {/* Card Body - Crisp & Punchy */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white leading-snug">
                      {mod.title}
                    </h3>
                    <p className="text-[11px] text-[#B79224] dark:text-[#F3DC87] font-semibold mt-0.5">
                      {mod.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                    {mod.shortSummary}
                  </p>

                  {/* 3 Quick Chips */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/10 text-xs text-slate-700 dark:text-slate-200">
                    {mod.shortPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedModule(mod)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white font-semibold text-xs border border-slate-200 dark:border-white/20 transition-all cursor-pointer text-center"
                >
                  Quick Details
                </button>
                <Link
                  href={`/contact?interest=aegis&module=${mod.number}`}
                  className="py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A] font-bold text-xs transition-all flex items-center gap-1 cursor-pointer hover:brightness-110"
                >
                  <span>Inquire for Property</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rich Details Modal for Deep Exploration */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#0B1F3A] text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border-2 border-[#D8B56D]/50 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedModule(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D8B56D]/20 text-[#F3DC87] border border-[#D8B56D]/40">
                  Module {selectedModule.number} · {selectedModule.category}
                </span>
                <span className="text-xs text-slate-400">{selectedModule.sla}</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {selectedModule.title}
                </h3>
                <p className="text-xs text-[#F3DC87] font-semibold mt-1">
                  {selectedModule.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {selectedModule.fullDescription}
              </p>

              {/* Checklist */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-bold text-[#F3DC87] uppercase tracking-wider">
                  Operational Checklist:
                </div>
                {selectedModule.checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Client Deliverables:
                </div>
                {selectedModule.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/contact?interest=aegis&module=${selectedModule.number}`}
                  className="flex-1 bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A] font-bold py-3 px-5 rounded-xl text-center text-xs sm:text-sm hover:brightness-110 transition-all cursor-pointer"
                >
                  Inquire for This Module
                </Link>
                <a
                  href="#pricing"
                  onClick={() => setSelectedModule(null)}
                  className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all cursor-pointer"
                >
                  View Tier Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
