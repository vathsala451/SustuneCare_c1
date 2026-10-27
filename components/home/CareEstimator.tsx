"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Building2,
  HeartHandshake,
  HeartPulse,
  Sparkles,
  Check,
  Info,
  ArrowRight,
  ShieldCheck,
  Percent,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import {
  CURRENCIES,
  Currency,
  PROPERTY_TYPES,
  PropertyTypeId,
  CARE_TIERS,
  CareTierId,
  METROPOLITAN_HUBS,
  RENTAL_SLIDER_CONFIG,
  calculatePricing,
} from "@/lib/pricing";
import { useCurrency } from "@/lib/currency-context";

export function CareEstimator() {
  const { currency, setCurrency, info } = useCurrency();

  // Internal state matching the original live website chunk 33710 (24__swn-2mgz7.js)
  const [hub, setHub] = useState<string>("Bengaluru");
  const [isAegisActive, setIsAegisActive] = useState<boolean>(true);
  const [isSparshActive, setIsSparshActive] = useState<boolean>(true);
  const [propertyType, setPropertyType] = useState<PropertyTypeId>("luxury");
  const [monthlyRentINR, setMonthlyRentINR] = useState<number>(RENTAL_SLIDER_CONFIG.defaultINR); // 65,000 INR
  const [careTier, setCareTier] = useState<CareTierId>("comprehensive");
  const [isBundleDiscountApplied, setIsBundleDiscountApplied] = useState<boolean>(true);

  // Centralized calculations
  const pricing = calculatePricing({
    isAegisActive,
    isSparshActive,
    propertyType,
    monthlyRentINR,
    careTier,
    currency,
    hub,
    isBundleDiscountApplied,
  });

  // Property Selection: Auto-sets default rent for the type as per original JS
  const handlePropertyTypeSelect = (typeId: PropertyTypeId) => {
    setPropertyType(typeId);
    setMonthlyRentINR(PROPERTY_TYPES[typeId].defaultRentINR);
  };

  // WhatsApp pre-filled share link matching original implementation
  const whatsappQuoteUrl = `https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20I%20used%20the%20TCO%20Estimator%20for%20${encodeURIComponent(
    hub
  )}.%20Estimated%20quote%3A%20${encodeURIComponent(pricing.netMonthlyFeeFormatted)}%2Fmo.%20I%20would%20like%20to%20discuss.`;

  return (
    <section id="tco-estimator" className="py-20 sm:py-28 bg-white dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-semibold text-[#0B1F3A] dark:text-[#F3DC87] mb-1">
            <Calculator className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>Interactive TCO &amp; ROI Simulator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            Transparent Diaspora Care Estimator
          </h2>
          <p className="text-[#5A6E85] dark:text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            Estimate your monthly investment in INR (₹) or your local currency ({currency}).
            No hidden broker fees, zero markup on maintenance.
          </p>

          {/* Currency Selector Pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Currency:</span>
            <div className="inline-flex flex-wrap items-center p-1 rounded-2xl bg-[#F6F3ED] dark:bg-white/10 border border-[#DCE3EA] dark:border-white/15 shadow-xs">
              {(["USD", "INR", "GBP", "AED", "CAD", "AUD"] as Currency[]).map((curr) => {
                const cInfo = CURRENCIES[curr];
                const isSelected = currency === curr;
                return (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-[#0B1F3A] text-[#F3DC87] shadow-sm font-extrabold"
                        : "text-[#263548] dark:text-slate-200 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10"
                    }`}
                  >
                    <span>{cInfo.flag}</span>
                    <span>{curr} ({cInfo.symbol.trim()})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Estimator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#F6F3ED] dark:bg-[#0B1F3A]/60 rounded-3xl p-6 sm:p-8 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-8">
            {/* 1. Target Metropolitan Hub */}
            <div>
              <label className="block text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider mb-2.5">
                1. Select Target Metropolitan Hub in India
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {METROPOLITAN_HUBS.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setHub(h.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                      hub === h.id
                        ? "bg-[#0B1F3A] dark:bg-[#142d52] text-white dark:text-[#F3DC87] border-[#0B1F3A] dark:border-[#D8B56D]/50 shadow-xs"
                        : "bg-white dark:bg-white/5 text-[#263548] dark:text-slate-200 border-[#DCE3EA] dark:border-white/10 hover:border-[#D8B56D]/50"
                    }`}
                  >
                    <div className="font-bold">{h.name}</div>
                    <span className="text-[9px] block font-normal opacity-70">{h.state}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scope of Stewardship */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="block text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
                  2. Select Scope of Stewardship
                </label>
                {pricing.isDualShield && (
                  <span className="text-[10px] font-bold text-[#176B63] dark:text-emerald-300 bg-[#176B63]/15 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-[#176B63]/30 dark:border-emerald-500/40">
                    Dual-Shield 15% Synergy Discount Active
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsAegisActive(!isAegisActive)}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                    isAegisActive
                      ? "bg-[#D8B56D]/15 dark:bg-[#D8B56D]/20 border-[#D8B56D] ring-1 ring-[#D8B56D]"
                      : "bg-white dark:bg-white/5 border-[#DCE3EA] dark:border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      isAegisActive ? "bg-[#0B1F3A] text-[#F3DC87]" : "bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-300"
                    }`}
                  >
                    <Building2 className="w-5 h-5 text-[#D8B56D]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-1.5 font-serif">
                      <span>Aegis Property Shield</span>
                      {isAegisActive && (
                        <span className="text-[9px] bg-[#D8B56D]/30 text-[#967530] dark:text-[#F3DC87] font-bold px-1.5 py-0.5 rounded">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#5A6E85] dark:text-slate-300 mt-0.5 font-body">
                      Rental, Corporate Tenant, Maintenance &amp; Tax
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSparshActive(!isSparshActive)}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                    isSparshActive
                      ? "bg-[#176B63]/15 dark:bg-emerald-950/40 border-[#176B63] dark:border-emerald-400 ring-1 ring-[#176B63] dark:ring-emerald-400"
                      : "bg-white dark:bg-white/5 border-[#DCE3EA] dark:border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      isSparshActive ? "bg-[#176B63] text-white" : "bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-300"
                    }`}
                  >
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-1.5 font-serif">
                      <span>Sparsh Parental Care</span>
                      {isSparshActive && (
                        <span className="text-[9px] bg-[#176B63]/30 text-[#176B63] dark:text-emerald-300 font-bold px-1.5 py-0.5 rounded">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#5A6E85] dark:text-slate-300 mt-0.5 font-body">
                      24/7 SOS, Hospital Escorts &amp; Weekly Visits
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* 3. Property Type & Expected Rent (Aegis) */}
            {isAegisActive && (
              <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider flex items-center gap-1.5 font-serif">
                    <Building2 className="w-4 h-4 text-[#D8B56D]" />
                    <span>3. Property Type &amp; Expected Rent</span>
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">Tier: {hub}</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handlePropertyTypeSelect("apt")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                      propertyType === "apt"
                        ? "bg-[#0B1F3A] dark:bg-[#142d52] text-white dark:text-[#F3DC87] border-[#0B1F3A] dark:border-[#D8B56D]/50 shadow-xs"
                        : "bg-[#F6F3ED] dark:bg-white/5 text-[#263548] dark:text-slate-200 border-[#DCE3EA] dark:border-white/10 hover:border-[#D8B56D]/50"
                    }`}
                  >
                    2BHK Apartment
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePropertyTypeSelect("luxury")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                      propertyType === "luxury"
                        ? "bg-[#0B1F3A] dark:bg-[#142d52] text-white dark:text-[#F3DC87] border-[#0B1F3A] dark:border-[#D8B56D]/50 shadow-xs"
                        : "bg-[#F6F3ED] dark:bg-white/5 text-[#263548] dark:text-slate-200 border-[#DCE3EA] dark:border-white/10 hover:border-[#D8B56D]/50"
                    }`}
                  >
                    3-4BHK Luxury
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePropertyTypeSelect("villa")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                      propertyType === "villa"
                        ? "bg-[#0B1F3A] dark:bg-[#142d52] text-white dark:text-[#F3DC87] border-[#0B1F3A] dark:border-[#D8B56D]/50 shadow-xs"
                        : "bg-[#F6F3ED] dark:bg-white/5 text-[#263548] dark:text-slate-200 border-[#DCE3EA] dark:border-white/10 hover:border-[#D8B56D]/50"
                    }`}
                  >
                    Gated Villa / Penthouse
                  </button>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5 font-body">
                    <label className="text-[#5A6E85] dark:text-slate-300 font-medium">Monthly Rental Value:</label>
                    <span className="font-bold text-[#0B1F3A] dark:text-[#F3DC87] text-sm font-serif">
                      {currency === "INR" ? (
                        `₹${monthlyRentINR.toLocaleString("en-IN")}`
                      ) : (
                        `$${Math.round(monthlyRentINR * 0.0118).toLocaleString("en-US")} (₹${monthlyRentINR.toLocaleString("en-IN")})`
                      )}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={RENTAL_SLIDER_CONFIG.minINR}
                    max={RENTAL_SLIDER_CONFIG.maxINR}
                    step={RENTAL_SLIDER_CONFIG.stepINR}
                    value={monthlyRentINR}
                    aria-label="Monthly Rental Value"
                    onChange={(e) => setMonthlyRentINR(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#D8B56D]"
                  />

                  <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-body">
                    <span>{currency === "INR" ? "₹25,000" : "$295 (~₹25k)"}</span>
                    <span className="text-slate-600 dark:text-slate-300 font-medium">
                      Stewardship Fee: ~{pricing.rentalContextPercent}{" "}
                      ({currency === "INR" ? "Min ₹3,500/month" : "Min $41/month"})
                    </span>
                    <span>{currency === "INR" ? "₹2,50,000+" : "$2,950+ (~₹2.5L+)"}</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Sparsh Healthcare Tier */}
            {isSparshActive && (
              <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 space-y-4 animate-in fade-in duration-200">
                <span className="text-xs font-bold text-[#176B63] dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-serif">
                  <HeartPulse className="w-4 h-4 text-[#176B63] dark:text-emerald-400" />
                  <span>4. Sparsh Healthcare Tier</span>
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCareTier("essential")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      careTier === "essential"
                        ? "bg-[#176B63] dark:bg-emerald-900/60 text-white border-[#176B63] dark:border-emerald-500/50 shadow-xs"
                        : "bg-[#F6F3ED] dark:bg-white/5 text-[#263548] dark:text-slate-200 border-[#DCE3EA] dark:border-white/10 hover:border-[#176B63]/50"
                    }`}
                  >
                    <div className="font-bold text-xs font-serif">Essential SOS</div>
                    <div
                      className={`text-[10px] mt-0.5 font-body ${
                        careTier === "essential" ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      24/7 SOS &amp; Emergency + Monthly Vitals
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCareTier("comprehensive")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      careTier === "comprehensive"
                        ? "bg-[#176B63] dark:bg-emerald-900/60 text-white border-[#176B63] dark:border-emerald-500/50 shadow-xs"
                        : "bg-[#F6F3ED] dark:bg-white/5 text-[#263548] dark:text-slate-200 border-[#DCE3EA] dark:border-white/10 hover:border-[#176B63]/50"
                    }`}
                  >
                    <div className="font-bold text-xs flex items-center gap-1 font-serif">
                      <span>Comprehensive</span>
                      <span className="text-[9px] bg-emerald-200 dark:bg-emerald-800 text-[#0E4842] dark:text-emerald-100 px-1 rounded font-bold font-sans">
                        Popular
                      </span>
                    </div>
                    <div
                      className={`text-[10px] mt-0.5 font-body ${
                        careTier === "comprehensive" ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Doctor Escorts + Bi-Weekly Vitals + Weekly Visits
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCareTier("concierge")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      careTier === "concierge"
                        ? "bg-[#176B63] dark:bg-emerald-900/60 text-white border-[#176B63] dark:border-emerald-500/50 shadow-xs"
                        : "bg-[#F6F3ED] dark:bg-white/5 text-[#263548] dark:text-slate-200 border-[#DCE3EA] dark:border-white/10 hover:border-[#176B63]/50"
                    }`}
                  >
                    <div className="font-bold text-xs font-serif">Full Concierge</div>
                    <div
                      className={`text-[10px] mt-0.5 font-body ${
                        careTier === "concierge" ? "text-emerald-200" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Unlimited Escorts + 3x Weekly Visits + Dedicated Nurse
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Live Plan Summary Card (5 cols) matching exact original design */}
          <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#D8B56D]/60 shadow-2xl space-y-6 relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold text-[#F3DC87] uppercase tracking-wider block font-sans">
                  Live Plan Summary
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Estimated Investment</h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/15 font-sans">
                City: {hub}
              </span>
            </div>

            {/* Line Items Table Breakdown matching exact requested format */}
            <div className="space-y-3 text-xs sm:text-sm font-body">
              {/* Table Column Labels */}
              <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-white/10 font-sans">
                <span>Item</span>
                <span>{currency}</span>
              </div>

              {/* Row 1: Aegis Property */}
              {isAegisActive && (
                <div className="flex justify-between items-center text-slate-200 py-1">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D8B56D] shrink-0" />
                    <span>Aegis Property Shield</span>
                  </span>
                  <span className="font-semibold text-white font-serif">{pricing.aegisFeeFormatted}</span>
                </div>
              )}

              {/* Row 2: Sparsh Care */}
              {isSparshActive && (
                <div className="flex justify-between items-center text-slate-200 py-1">
                  <span className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="capitalize">
                      Sparsh {careTier === "comprehensive" ? "Comprehensive Care" : careTier === "essential" ? "Essential SOS" : "Full Concierge"}
                    </span>
                  </span>
                  <span className="font-semibold text-white font-serif">{pricing.sparshFeeFormatted}</span>
                </div>
              )}

              {/* Row 3: Combined Subtotal (shown when both are active) */}
              {isAegisActive && isSparshActive && (
                <div className="flex justify-between items-center text-slate-300 py-1 border-t border-white/10 text-xs">
                  <span>Eligible Combined Subtotal</span>
                  <span className="font-semibold text-white font-serif">{pricing.grossSubtotalFormatted}</span>
                </div>
              )}

              {/* Row 4: Dual-Shield Synergy Discount (15%) */}
              {pricing.isDualShield && (
                <div className="flex justify-between items-center text-emerald-300 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/30">
                  <span className="flex items-center gap-1.5 font-semibold font-sans">
                    <Percent className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dual-Shield discount (15%)</span>
                  </span>
                  <span className="font-bold font-serif">−{pricing.discountAmountFormatted}</span>
                </div>
              )}
            </div>

            {/* Total Net Monthly Fee */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400 mb-1 font-body">Total Net Monthly Fee:</div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold gold-gradient-text">
                  {pricing.netMonthlyFeeFormatted.replace("/month", "")}
                </span>
                <span className="text-slate-400 text-sm font-body">/ month</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-body">
                Billed quarterly or annually. Cancel or pause anytime with 30-day notice.
              </div>
              <div className="text-xs text-[#F3DC87] mt-2 font-semibold font-body">
                Annual Total: {pricing.annualFeeFormatted} / year
              </div>
            </div>

            {/* Estimated Annual Financial Protection */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F3DC87] font-sans">
                <TrendingUp className="w-4 h-4 text-[#D8B56D]" />
                <span>Estimated Annual Financial Protection:</span>
              </div>
              <div className="text-xl font-bold text-white font-serif">
                ~ {pricing.annualProtectionLakhFormatted}
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed font-body">
                Calculated based on zero rent loss, avoided contractor inflation, preventive property maintenance, and eliminating distress international travel.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <Link
                href={`/contact?interest=${
                  pricing.isDualShield
                    ? "bundle"
                    : isAegisActive
                    ? "aegis"
                    : isSparshActive
                    ? "sparsh"
                    : "general"
                }&city=${encodeURIComponent(hub)}&tier=${propertyType}&care=${careTier}&currency=${currency}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-sm shadow-xl transition-all group font-sans cursor-pointer"
              >
                <span>Lock In This Plan &amp; Schedule Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold border border-white/20 transition-all cursor-pointer font-sans"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Share Quote via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
