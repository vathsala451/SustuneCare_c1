import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Building2,
  Stethoscope,
  Lock,
  FileCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ServiceMatrix() {
  const serviceMatrixRows = [
    {
      feature: "Corporate Tenant Scouting & Background Screening",
      category: "Aegis Property",
      aegis: true,
      sparsh: false,
      dual: true,
      detail: "Employment checks, CIBIL credit scoring, police tenant verification filing.",
    },
    {
      feature: "Escrow Rent Collection & Form 15CA/CB Repatriation",
      category: "Aegis Property",
      aegis: true,
      sparsh: false,
      dual: true,
      detail: "Automated 5th-of-month NRE/NRO bank deposits with audited financial statements.",
    },
    {
      feature: "Quarterly 360° Digital Inspections with HD Photos",
      category: "Aegis Property",
      aegis: true,
      sparsh: false,
      dual: true,
      detail: "Room-by-room condition reports, plumbing & electrical audits uploaded to portal.",
    },
    {
      feature: "Turnkey Maintenance, Repairs & Interior Fit-outs",
      category: "Aegis Property",
      aegis: true,
      sparsh: false,
      dual: true,
      detail: "Empanelled vetted contractors, itemised quotes, and zero commission markups.",
    },
    {
      feature: "24/7 Emergency Assistance Coordination",
      category: "Sparsh Care",
      aegis: false,
      sparsh: true,
      dual: true,
      detail: "Pre-mapped hospital network response (Apollo, Manipal, Fortis) with companion dispatch.",
    },
    {
      feature: "Hospital OPD Doctor Appointment Accompaniment",
      category: "Sparsh Care",
      aegis: false,
      sparsh: true,
      dual: true,
      detail: "Trained companion escorts parents, transcribes doctor directives & records audio notes.",
    },
    {
      feature: "Routine Wellbeing & Vitals Telemetry Check-ins",
      category: "Sparsh Care",
      aegis: false,
      sparsh: true,
      dual: true,
      detail: "Blood pressure, glucose monitoring, and weekly physical health log updates.",
    },
    {
      feature: "Doorstep Medication Replenishment & Errands",
      category: "Sparsh Care",
      aegis: false,
      sparsh: true,
      dual: true,
      detail: "Prescription verification, pharmacy delivery, and essential home errand runs.",
    },
    {
      feature: "Unified Dual-Shield Client Portal & Timezone Sync",
      category: "Governance",
      aegis: true,
      sparsh: true,
      dual: true,
      detail: "Real-time updates delivered across your diaspora timezone (EST, PST, GMT, GST, AEST).",
    },
    {
      feature: "15% Combined Synergy Bundle Discount",
      category: "Commercial",
      aegis: false,
      sparsh: false,
      dual: true,
      detail: "Automatic 15% discount applied across all monthly retainer calculations.",
    },
  ];

  const institutionalComparison = [
    {
      pillar: "Legal Accountability",
      sustune: "Pvt Ltd Legal SLA Binding with fiduciary responsibility",
      brokers: "Informal verbal agreements, zero accountability",
      relatives: "Social friction, awkward obligations",
    },
    {
      pillar: "Staff Verification",
      sustune: "Multi-point police verification & identity screening",
      brokers: "Unverified third-party casual laborers",
      relatives: "Unregulated personal contacts",
    },
    {
      pillar: "Digital Transparency",
      sustune: "24/7 Private NRI Portal with HD media & logs",
      brokers: "Ad-hoc messaging, sporadic phone calls",
      relatives: "Infrequent updates, downplayed health issues",
    },
    {
      pillar: "Emergency Medical SOP",
      sustune: "Pre-mapped hospital networks & immediate companion dispatch",
      brokers: "Not offered",
      relatives: "Subject to personal availability & local traffic",
    },
    {
      pillar: "Financial Compliance",
      sustune: "FEMA & RBI compliant NRE/NRO banking trails",
      brokers: "Cash demands, opaque brokerage markups",
      relatives: "Awkward reimbursement calculations",
    },
  ];

  return (
    <section id="service-matrix" className="py-20 lg:py-28 bg-white dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PART 1: DUAL-SHIELD SERVICE MATRIX */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B56D]" />
              <span>DUAL-SHIELD SERVICE MATRIX</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
              Compare Dedicated &amp; Combined Packages
            </h2>
            <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
              Choose standalone Aegis Property Stewardship, dedicated Sparsh Family Care, or
              unite both under our premier Dual-Shield package with an approved 15% synergy discount.
            </p>
          </div>

          {/* 3 Package Cards Top Header for Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Plan 1: Aegis */}
            <div className="p-6 rounded-2xl bg-[#F6F3ED] dark:bg-[#0B1F3A]/50 border border-[#DCE3EA] dark:border-white/10 text-center space-y-2 hover:border-[#D8B56D]/50 transition-colors">
              <div className="flex items-center justify-center gap-2 text-[#0B1F3A] dark:text-white font-bold text-base font-serif">
                <Building2 className="w-5 h-5 text-[#D8B56D]" />
                <span>Aegis Property</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-body">Asset preservation, tenancy, &amp; escrow</p>
              <div className="text-xs font-bold text-[#967530] dark:text-[#F3DC87] pt-1">Standalone Coverage</div>
            </div>

            {/* Plan 2: Sparsh */}
            <div className="p-6 rounded-2xl bg-[#F6F3ED] dark:bg-[#0B1F3A]/50 border border-[#DCE3EA] dark:border-white/10 text-center space-y-2 hover:border-[#176B63]/50 transition-colors">
              <div className="flex items-center justify-center gap-2 text-[#0B1F3A] dark:text-white font-bold text-base font-serif">
                <HeartHandshake className="w-5 h-5 text-[#176B63]" />
                <span>Sparsh Family Care</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-body">Doctor escorts, wellbeing, &amp; companionship</p>
              <div className="text-xs font-bold text-[#176B63] dark:text-emerald-400 pt-1">Standalone Coverage</div>
            </div>

            {/* Plan 3: Dual-Shield (Featured) */}
            <div className="p-6 rounded-2xl bg-[#0B1F3A] text-white border-2 border-[#D8B56D] shadow-xl text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#D8B56D] text-[#0B1F3A] font-extrabold text-[10px] uppercase px-3 py-0.5 rounded-bl-md">
                Save 15%
              </div>
              <div className="flex items-center justify-center gap-2 font-bold text-base text-[#F3DC87] font-serif">
                <Sparkles className="w-5 h-5 text-[#D8B56D]" />
                <span>Dual-Shield Combined</span>
              </div>
              <p className="text-xs text-slate-300 font-body">Complete property &amp; parental protection</p>
              <div className="text-xs font-bold text-emerald-300 pt-1">15% Synergy Discount Included</div>
            </div>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#DCE3EA] dark:border-white/10 shadow-sm bg-white dark:bg-[#091A33]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#F6F3ED] dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-white text-xs uppercase tracking-wider font-bold border-b border-[#DCE3EA] dark:border-white/10">
                  <th className="py-4 px-6 w-1/2">Service Capability</th>
                  <th className="py-4 px-4 text-center w-1/6">Aegis Only</th>
                  <th className="py-4 px-4 text-center w-1/6">Sparsh Only</th>
                  <th className="py-4 px-4 text-center w-1/6 bg-[#0B1F3A]/5 dark:bg-white/5 text-[#0B1F3A] dark:text-[#F3DC87]">Dual-Shield</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE3EA] dark:divide-white/10 text-xs sm:text-sm font-body">
                {serviceMatrixRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#F6F3ED]/60 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-[#0B1F3A] dark:text-white">{row.feature}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{row.detail}</div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.aegis ? (
                        <CheckCircle2 className="w-5 h-5 text-[#D8B56D] mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.sparsh ? (
                        <CheckCircle2 className="w-5 h-5 text-[#176B63] mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-[#0B1F3A]/5 dark:bg-white/5 font-semibold">
                      {row.dual ? (
                        <div className="flex items-center justify-center gap-1 text-[#0B1F3A] dark:text-white">
                          <CheckCircle2 className="w-5 h-5 text-[#D8B56D]" />
                        </div>
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PART 2: INSTITUTIONAL COMPARISON TABLE (Sustune vs Brokers vs Relatives) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D8B56D]" />
              <span>INSTITUTIONAL STANDARD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
              Why Sustune Care Outperforms Alternatives
            </h2>
            <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
              Compare institutional corporate accountability with informal brokers or burdened local relatives.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#DCE3EA] dark:border-white/10 shadow-[0_12px_36px_-6px_rgba(11,31,58,0.08)] bg-white dark:bg-[#091A33]">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#0B1F3A] text-white text-xs uppercase tracking-wider font-bold">
                  <th className="py-4 px-6 w-1/4">Evaluation Pillar</th>
                  <th className="py-4 px-6 w-1/3 bg-[#061224] text-[#F3DC87] border-x border-white/10">
                    Sustune Care (Institutional)
                  </th>
                  <th className="py-4 px-6 w-1/5 text-slate-300">Local Brokers / Agents</th>
                  <th className="py-4 px-6 w-1/5 text-slate-300">Friends &amp; Relatives</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE3EA] dark:divide-white/10 text-xs sm:text-sm font-body">
                {institutionalComparison.map((row) => (
                  <tr key={row.pillar} className="hover:bg-[#F6F3ED]/60 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0B1F3A] dark:text-white">
                      {row.pillar}
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#176B63] dark:text-emerald-300 bg-[#176B63]/10 dark:bg-emerald-950/20 border-x border-[#176B63]/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#176B63] shrink-0 mt-0.5" />
                        <span>{row.sustune}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.brokers}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.relatives}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
