"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  X,
  Info,
} from "lucide-react";
import { useCurrency } from "@/lib/currency-context";

export function AegisPricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const { currency } = useCurrency();

  // Price formatting based on currency and billing cycle
  const getCompleteRateDisplay = () => {
    if (currency === "INR") {
      if (billingCycle === "annual") {
        return {
          rate: "8% of Rent",
          minimum: "(or min ₹4,250/mo)",
          savings: "Billed annually. Includes ~₹8,988 yearly savings.",
        };
      } else {
        return {
          rate: "8% of Rent",
          minimum: "(or min ₹5,000/mo)",
          savings: "Billed monthly. Standard retainer rate.",
        };
      }
    } else {
      // USD / other currencies
      if (billingCycle === "annual") {
        return {
          rate: "8% of Rent",
          minimum: "(or min $50/mo)",
          savings: "Billed annually. Includes ~$106 yearly savings.",
        };
      } else {
        return {
          rate: "8% of Rent",
          minimum: "(or min $61/mo)",
          savings: "Billed monthly. Standard retainer rate.",
        };
      }
    }
  };

  const completeRate = getCompleteRateDisplay();

  const comparisonRows = [
    {
      name: "Professional HD Staging & 3D Tour",
      scouting: true,
      complete: true,
    },
    {
      name: "Syndication on 6+ NRI & High-Net-Worth Portals",
      scouting: true,
      complete: true,
    },
    {
      name: "CIBIL / Experian Credit Bureau Background Check",
      scouting: true,
      complete: true,
    },
    {
      name: "Corporate HR & Police Tenant Verification",
      scouting: true,
      complete: true,
    },
    {
      name: "Legal Digital Lease Drafting & E-Stamp Execution",
      scouting: true,
      complete: true,
    },
    {
      name: "Deposit Collection & Escrow Remittance",
      scouting: true,
      complete: true,
    },
    {
      name: "Monthly Escrow Rent Collection & 5th Payout",
      scouting: false,
      complete: true,
    },
    {
      name: "TDS Computation & Form 15CA/CB Assistance",
      scouting: false,
      complete: true,
    },
    {
      name: "Quarterly 80-Point Digital Forensic Inspections",
      scouting: false,
      complete: true,
    },
    {
      name: "24/7 Emergency Maintenance SLA Dispatch",
      scouting: false,
      complete: true,
    },
    {
      name: "Annual Property Tax Filing & Khata Verification",
      scouting: false,
      complete: true,
    },
    {
      name: "Dedicated Named Asset Steward & NRI Portal Access",
      scouting: false,
      complete: true,
    },
    {
      name: "Free Tenant Replacement Guarantee (12 Months)",
      scouting: false,
      complete: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white dark:bg-[#061224] border-t border-[#DCE3EA] dark:border-white/10 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8B56D]/15 border border-[#D8B56D]/30 text-xs font-semibold text-[#967530] dark:text-[#F3DC87] mb-2 font-sans">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>Transparent Fee Structure</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            Compare Aegis Stewardship Tiers
          </h2>

          <p className="text-[#5A6E85] dark:text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            Choose between one-time placement or complete 365-day institutional asset protection.
            All rates supported in <strong className="text-[#0B1F3A] dark:text-[#F3DC87]">{currency}</strong>.
          </p>

          {/* Billing Cycle Switcher Toggle */}
          <div className="mt-8 flex justify-center items-center gap-3 font-sans">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`text-xs font-semibold transition-colors cursor-pointer ${
                billingCycle === "monthly"
                  ? "text-[#0B1F3A] dark:text-[#F3DC87] font-bold"
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Monthly Retainer
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle((b) => (b === "monthly" ? "annual" : "monthly"))}
              className="w-14 h-8 bg-[#0B1F3A] dark:bg-slate-800 border border-[#D8B56D]/50 rounded-full p-1 transition-colors relative focus:outline-none cursor-pointer"
              aria-label="Toggle billing cycle"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#D8B56D] transition-transform duration-200 shadow-md ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                billingCycle === "annual"
                  ? "text-[#0B1F3A] dark:text-[#F3DC87] font-bold"
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              <span>Annual Retainer</span>
              <span className="text-[10px] bg-[#176B63]/15 text-[#176B63] dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-[#176B63]/30">
                Save ~15%
              </span>
            </button>
          </div>
        </div>

        {/* 2 Main Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Tier 1: Tenant Scouting Only */}
          <div className="bg-[#F6F3ED] dark:bg-[#0B1F3A]/60 border border-[#DCE3EA] dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white">
                    Tenant Scouting Only
                  </h3>
                  <p className="text-xs text-[#5A6E85] dark:text-slate-400 mt-1 font-body">
                    Ideal for owners who manage day-to-day maintenance themselves.
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-[#DCE3EA] dark:border-white/10 font-sans">
                  One-Time
                </span>
              </div>

              <div className="my-6 py-4 border-y border-[#DCE3EA] dark:border-white/10">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F3A] dark:text-white">
                  15 Days Rent
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-body">
                  Payable only upon successful lease execution and key delivery.
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#263548] dark:text-slate-300 mb-8 font-body">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D8B56D] shrink-0" />
                  <span>Full corporate &amp; police background check</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D8B56D] shrink-0" />
                  <span>CIBIL 750+ credit verified tenants</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D8B56D] shrink-0" />
                  <span>Lawyer-drafted digital lease agreement</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400 dark:text-slate-500 line-through opacity-75">
                  <X className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
                  <span>Ongoing rent escrow &amp; tax assistance</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400 dark:text-slate-500 line-through opacity-75">
                  <X className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
                  <span>Quarterly forensic inspection audits</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?interest=aegis&tier=scouting"
              className="w-full text-center py-3.5 px-6 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-[#0B1F3A] dark:text-white font-bold text-sm transition-all border border-[#DCE3EA] dark:border-white/20 font-sans cursor-pointer shadow-xs"
            >
              Select Tenant Scouting
            </Link>
          </div>

          {/* Tier 2: Complete Aegis Stewardship */}
          <div className="bg-[#0B1F3A] text-white border-2 border-[#D8B56D] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D8B56D] text-[#0B1F3A] text-[10px] font-extrabold uppercase tracking-widest py-1.5 px-6 rounded-bl-xl shadow-md font-sans">
              Most Popular Diaspora Plan
            </div>

            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <span>Complete Aegis Stewardship</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-body">
                    Hands-off, end-to-end asset preservation and rental escrow.
                  </p>
                </div>
              </div>

              <div className="my-6 py-4 border-y border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F3DC87]">
                    {completeRate.rate}
                  </span>
                  <span className="text-xs text-slate-300 font-body">
                    {completeRate.minimum}
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1 font-body">
                  {completeRate.savings}
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200 mb-8 font-body">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D8B56D] shrink-0" />
                  <span>Everything in Tenant Scouting included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D8B56D] shrink-0" />
                  <span>Automated rent escrow collection &amp; 5th-of-month payout</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D8B56D] shrink-0" />
                  <span>Quarterly 80-point digital forensic inspection audits</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D8B56D] shrink-0" />
                  <span>TDS calculation &amp; Form 15CA/CB compliance support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D8B56D] shrink-0" />
                  <span>Free tenant replacement guarantee within 12 months</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?interest=aegis&tier=complete"
              className="w-full text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-sm shadow-xl transition-all cursor-pointer font-sans"
            >
              Enroll Property in Complete Aegis
            </Link>
          </div>
        </div>

        {/* Detailed Feature Comparison Matrix */}
        <div className="max-w-5xl mx-auto bg-[#F6F3ED] dark:bg-[#0B1F3A]/60 border border-[#DCE3EA] dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-serif text-lg font-bold text-[#0B1F3A] dark:text-white mb-6">
            Detailed Feature Comparison Matrix
          </h3>

          <div className="divide-y divide-[#DCE3EA] dark:divide-white/10 text-xs sm:text-sm font-body">
            {/* Header Row */}
            <div className="grid grid-cols-12 py-3 font-bold text-[#0B1F3A] dark:text-white uppercase text-[11px] tracking-wider font-sans">
              <div className="col-span-6 sm:col-span-8">Stewardship Deliverable</div>
              <div className="col-span-3 sm:col-span-2 text-center text-slate-700 dark:text-slate-300">
                Scouting Only
              </div>
              <div className="col-span-3 sm:col-span-2 text-center text-[#D8B56D] font-bold">
                Complete Aegis
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonRows.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-12 py-3.5 items-center hover:bg-white/60 dark:hover:bg-white/5 transition-colors"
              >
                <div className="col-span-6 sm:col-span-8 text-[#263548] dark:text-slate-200 font-medium">
                  {row.name}
                </div>

                <div className="col-span-3 sm:col-span-2 flex justify-center">
                  {row.scouting ? (
                    <Check className="w-4 h-4 text-[#176B63] dark:text-emerald-400" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                  )}
                </div>

                <div className="col-span-3 sm:col-span-2 flex justify-center">
                  {row.complete ? (
                    <Check className="w-5 h-5 text-[#D8B56D] font-bold" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#DCE3EA] dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-body">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#D8B56D]" />
              <span>All contracts executed under Indian Contract Act &amp; RERA advisory standards.</span>
            </span>
            <Link
              href="/contact?interest=aegis"
              className="text-[#0B1F3A] dark:text-[#F3DC87] font-bold hover:underline font-sans"
            >
              Need a Custom Multi-Property Portfolio Quote? →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
