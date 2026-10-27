"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Check,
  Sparkles,
  ArrowRight,
  Info,
  ShieldAlert,
  Calendar,
  Users,
  Activity,
  Stethoscope,
  Smile,
  Pill,
  Siren,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCurrency } from "@/lib/currency-context";

interface CareModule {
  id: string;
  name: string;
  description: string;
  baseCostUSD: number;
  isRecommended?: boolean;
}

export function CarePlanConfigurator() {
  const { currency, info } = useCurrency();

  // Mode: Expanded interactive configurator with preserved module selector
  const [parentsCovered, setParentsCovered] = useState<"single" | "couple">("couple");
  const [vitalsFrequency, setVitalsFrequency] = useState<"monthly" | "biweekly" | "weekly">("biweekly");
  const [hospitalEscorts, setHospitalEscorts] = useState<number>(2); // 1, 2, 4 visits/mo
  const [companionshipVisits, setCompanionshipVisits] = useState<number>(4); // 2, 4, 8 visits/mo
  const [smartPillSorting, setSmartPillSorting] = useState<boolean>(true);

  // Preserved Module Selector State
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "emergency",
    "wellbeing",
    "doctor",
    "companionship",
  ]);

  const modules: CareModule[] = [
    {
      id: "emergency",
      name: "Emergency Assistance Coordination",
      description:
        "24/7 dispatch coordination, hospital pre-authorization, and immediate on-ground companion deployment during critical health events.",
      baseCostUSD: 60,
      isRecommended: true,
    },
    {
      id: "wellbeing",
      name: "Routine Wellbeing & Vitals Checks",
      description:
        "In-home blood pressure, sugar, ECG, and oxygen telemetry logs, plus regular vitals audits.",
      baseCostUSD: 80,
      isRecommended: true,
    },
    {
      id: "doctor",
      name: "Doctor Appointment Accompaniment",
      description:
        "Care Companion escorts parents to specialist OPD visits in sanitized private cab, takes notes, coordinates diagnostics, and uploads audio consultation summaries.",
      baseCostUSD: 110,
      isRecommended: true,
    },
    {
      id: "companionship",
      name: "Scheduled Companionship & Errands",
      description:
        "Warm, respectful social check-ins: conversation, walking assistance, temple or park outings, and grocery/errand support.",
      baseCostUSD: 90,
      isRecommended: true,
    },
  ];

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length === 1) return; // Keep at least 1
      setSelectedModules(selectedModules.filter((m) => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  /**
   * Original Sparsh pricing formula recovered from live application (chunk 2y5ma8x42m6ph.js):
   * Base C = 3999 (covers 24/7 Rapid SOS, triage & pre-alert protocols)
   * if (vitals === "biweekly") C += 2000
   * if (vitals === "weekly") C += 4000
   * C += 1500 * hospitalEscorts + 800 * companionshipVisits
   * if (smartPillSorting) C += 1200
   * Couple multiplier: "couple" === parents ? Math.round(1.35 * C) : C  (Save 65% on second parent)
   *
   * Default two-parent configuration:
   * 3999 + 2000 + (1500 * 2 = 3000) + (800 * 4 = 3200) + 1200 = 13,399
   * Couple total = Math.round(1.35 * 13399) = 18,088.65 -> ₹18,089 / month! ($213 USD at 0.0118 rate)
   */
  let rawBaseINR = 3999;
  if (selectedModules.includes("wellbeing")) {
    if (vitalsFrequency === "biweekly") rawBaseINR += 2000;
    if (vitalsFrequency === "weekly") rawBaseINR += 4000;
  }
  if (selectedModules.includes("doctor")) {
    rawBaseINR += 1500 * hospitalEscorts;
  }
  if (selectedModules.includes("companionship")) {
    rawBaseINR += 800 * companionshipVisits;
  }
  if (smartPillSorting) {
    rawBaseINR += 1200;
  }

  const totalMonthlyINR =
    parentsCovered === "couple" ? Math.round(1.35 * rawBaseINR) : rawBaseINR;

  const totalConverted =
    currency === "INR"
      ? totalMonthlyINR
      : Math.round(totalMonthlyINR * info.rateFromINR);

  const displayPrimary =
    currency === "INR"
      ? `₹${totalMonthlyINR.toLocaleString("en-IN")}`
      : `${info.symbol}${totalConverted.toLocaleString("en-US")}`;

  const displaySecondary =
    currency === "INR"
      ? `≈ $${Math.round(totalMonthlyINR * 0.0118)} USD`
      : `≈ ₹${totalMonthlyINR.toLocaleString("en-IN")}`;

  const whatsappMessage = encodeURIComponent(
    `Hi Sustune Care, I configured a custom Sparsh Care Plan for my ${
      parentsCovered === "couple" ? "both parents" : "parent"
    } in India. Estimated total: ${displayPrimary}/month (${displaySecondary}). Can we schedule a parental assessment call?`
  );

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-white dark:bg-[#071329] border-t border-slate-100 dark:border-white/10 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 text-xs font-semibold text-[#0F5132] dark:text-emerald-300 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Interactive Care Configurator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] dark:text-white tracking-tight">
            Build Your Parents’ Custom Care Plan
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            Every senior’s health profile is unique. Configure companionship hours, doctor visit frequencies,
            and emergency coverage with live transparent pricing in {currency}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Configuration Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBFBFB] dark:bg-[#0B1F3A]/70 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm space-y-7 transition-colors">
            {/* 1. Parents Covered */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2.5 font-display">
                1. Parents Covered
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setParentsCovered("single")}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    parentsCovered === "single"
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <Users className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Single Parent</div>
                    <div
                      className={`text-[10px] ${
                        parentsCovered === "single" ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Father or Mother (1 Beneficiary)
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setParentsCovered("couple")}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    parentsCovered === "couple"
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <Users className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Both Parents (Couple)</div>
                    <div
                      className={`text-[10px] ${
                        parentsCovered === "couple" ? "text-emerald-200" : "text-emerald-600 dark:text-emerald-400 font-semibold"
                      }`}
                    >
                      Save 65% on second parent
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Home Vitals & ECG Checkup Frequency */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5 font-display">
                  <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  2. Home Vitals &amp; ECG Checkup Frequency
                </label>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Nurse Home Visit</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setVitalsFrequency("monthly")}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    vitalsFrequency === "monthly"
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">Monthly</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      vitalsFrequency === "monthly" ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Basic maintenance
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVitalsFrequency("biweekly")}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    vitalsFrequency === "biweekly"
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">Bi-Weekly</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      vitalsFrequency === "biweekly" ? "text-emerald-200" : "text-emerald-700 dark:text-emerald-400 font-medium"
                    }`}
                  >
                    Most recommended
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVitalsFrequency("weekly")}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    vitalsFrequency === "weekly"
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">Weekly</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      vitalsFrequency === "weekly" ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Chronic monitoring
                  </div>
                </button>
              </div>
            </div>

            {/* 3. In-Person Hospital & Doctor Escorts */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5 font-display">
                  <Stethoscope className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  3. In-Person Hospital &amp; Doctor Escorts
                </label>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Sanitized cab + companion</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setHospitalEscorts(1)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    hospitalEscorts === 1
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">1 Visit / Mo</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      hospitalEscorts === 1 ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Routine review
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setHospitalEscorts(2)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    hospitalEscorts === 2
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">2 Visits / Mo</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      hospitalEscorts === 2 ? "text-emerald-200" : "text-emerald-700 dark:text-emerald-400 font-medium"
                    }`}
                  >
                    Dual specialists
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setHospitalEscorts(4)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    hospitalEscorts === 4
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">4 Visits / Mo</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      hospitalEscorts === 4 ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Post-op / Intensive
                  </div>
                </button>
              </div>
            </div>

            {/* 4. Warm Companionship & Errand Visits */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5 font-display">
                  <Smile className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  4. Warm Companionship &amp; Errand Visits
                </label>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Tea, walks &amp; errands</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCompanionshipVisits(2)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    companionshipVisits === 2
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">2 Visits / Mo</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      companionshipVisits === 2 ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Fortnightly social
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCompanionshipVisits(4)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    companionshipVisits === 4
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">Weekly (4 / Mo)</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      companionshipVisits === 4 ? "text-emerald-200" : "text-emerald-700 dark:text-emerald-400 font-medium"
                    }`}
                  >
                    Ideal engagement
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCompanionshipVisits(8)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    companionshipVisits === 8
                      ? "bg-[#0F5132] text-white border-[#0F5132] shadow-sm"
                      : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="text-xs font-bold">Twice Wkly (8 / Mo)</div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      companionshipVisits === 8 ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Active connection
                  </div>
                </button>
              </div>
            </div>

            {/* 5. Smart Color-Coded Blister Pill Sorting Toggle */}
            <div className="pt-2">
              <label className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-pointer hover:border-emerald-500 dark:hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-[#0F5132] dark:text-emerald-300">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-white">
                      Smart Color-Coded Blister Pill Sorting
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Doorstep medicine delivery organized into Morning / Noon / Night pouches (+₹1,200/mo)
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={smartPillSorting}
                  onChange={(e) => setSmartPillSorting(e.target.checked)}
                  className="w-5 h-5 accent-[#0F5132] rounded cursor-pointer"
                />
              </label>
            </div>

            {/* Preserved Service-Module Selector */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-3 font-display">
                Included Core Care Modules:
              </span>
              <div className="space-y-2.5">
                {modules.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? "bg-white dark:bg-[#0B1F3A] border-brand-emerald dark:border-emerald-500 shadow-xs"
                          : "bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 opacity-70"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? "bg-brand-emerald text-white"
                            : "border border-slate-300 dark:border-white/20 bg-white dark:bg-white/10"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-xs text-brand-navy dark:text-white">
                            {mod.name}
                          </h4>
                          {mod.isRecommended && (
                            <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/40">
                              Included
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-body">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Plan Summary & Subscription Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A3622] text-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-400 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                  Configured Care Plan
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Monthly Subscription
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-emerald-200 border border-white/15">
                {parentsCovered === "couple" ? "2 Beneficiaries" : "1 Beneficiary"}
              </span>
            </div>

            {/* Dynamic Plan Checklist */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Siren className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 Rapid SOS &amp; Emergency Ambulance</span>
                </span>
                <span className="font-semibold text-emerald-300">Included</span>
              </div>

              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vitals Telemetry ({vitalsFrequency})</span>
                </span>
                <span className="font-semibold text-white">Active</span>
              </div>

              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Doctor Escorts ({hospitalEscorts} visits/mo)</span>
                </span>
                <span className="font-semibold text-white">Active</span>
              </div>

              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Smile className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Companionship ({companionshipVisits} visits/mo)</span>
                </span>
                <span className="font-semibold text-white">Active</span>
              </div>

              <div className="flex items-center justify-between text-emerald-100">
                <span className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Smart Blister Pill Sorting</span>
                </span>
                <span
                  className={`font-semibold ${
                    smartPillSorting ? "text-white" : "text-emerald-300/60"
                  }`}
                >
                  {smartPillSorting ? "Active" : "Optional"}
                </span>
              </div>
            </div>

            {/* Price Display */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-emerald-300 mb-1">Total Monthly Care Fee:</div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                  {displayPrimary}
                </span>
                <span className="text-emerald-300 text-sm">/ month</span>
              </div>
              <div className="text-xs text-emerald-200 mt-1 font-medium">
                {displaySecondary}
              </div>
              <div className="text-[11px] text-emerald-200/80 mt-1">
                No long-term lock-in. Cancel, pause, or upgrade anytime with 30-day notice.
              </div>
            </div>

            {/* The Sparsh Continuity Guarantee */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-emerald-100 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>The Sparsh Guarantee:</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                Parents are assigned the <em>same</em> named Companion for continuity of care. Police verified, basic life support certified, and background checked.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <Button
                href={`/contact?interest=sparsh&plan=custom&monthly=${totalMonthlyINR}&parents=${parentsCovered}&vitals=${vitalsFrequency}&escorts=${hospitalEscorts}&visits=${companionshipVisits}`}
                variant="secondary"
                size="md"
                fullWidth
                icon={<Sparkles className="w-4 h-4 text-white" />}
                iconRight={<ArrowRight className="w-4 h-4" />}
                className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-[#093420] font-bold"
              >
                Enroll Parents in This Plan
              </Button>

              <a
                href={`https://wa.me/918007878863?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Discuss Plan on WhatsApp</span>
              </a>
            </div>

            {/* Preserved Clinical Governance Disclaimer */}
            <div className="p-3.5 rounded-xl bg-black/25 border border-emerald-500/30 text-[11px] text-emerald-100 leading-relaxed flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Clinical Disclaimer:</strong> Sparsh provides non-clinical companionship,
                escort, and telemetry logistics. We do not prescribe medications, render medical
                diagnoses, or replace emergency 108/112 statutory ambulance infrastructure.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
