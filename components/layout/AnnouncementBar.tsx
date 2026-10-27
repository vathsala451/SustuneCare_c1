"use client";

import React, { useState } from "react";
import { PhoneCall, ChevronDown, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { currencies, Currency } from "@/lib/pricing";
import { useCurrency } from "@/lib/currency-context";

export function AnnouncementBar() {
  const { currency, setCurrency, info } = useCurrency();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside
      aria-label="Service Announcement"
      className="bg-[#0B1F3A] text-white text-xs py-2 px-4 border-b border-[#D8B56D]/30 relative z-50 select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Active Desks Announcement */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="hidden sm:inline text-slate-300">Active Concierge Desks:</span>
          <span className="text-[#F3DC87] font-medium tracking-wide truncate">
            {siteConfig.activeHubs.join(" • ")}
          </span>
        </div>

        {/* Right: Phone Hotline + Currency Selector (No duplicate theme toggle here) */}
        <div className="flex items-center gap-4 text-slate-300 shrink-0">
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-1.5 hover:text-[#D8B56D] transition-colors focus-ring rounded"
            title="Call 24/7 NRI Hotline"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span className="hidden md:inline text-[11px] uppercase tracking-wider text-slate-400">
              NRI Hotline:
            </span>
            <span className="font-semibold text-white text-xs">{siteConfig.phone}</span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          {/* Currency Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1.5 bg-[#061224] hover:bg-[#142d52] border border-[#D8B56D]/40 text-white rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors focus-ring cursor-pointer"
              aria-expanded={isDropdownOpen}
              aria-label="Select Currency for estimates"
            >
              <span>{info.flag}</span>
              <span className="font-semibold">{currency}</span>
              <span className="text-[#F3DC87]">({info.symbol.trim()})</span>
              <ChevronDown className="w-3 h-3 text-[#D8B56D]" />
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-1 w-48 bg-[#061224] text-white rounded-xl shadow-2xl border border-[#D8B56D]/40 py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-white/10">
                    Select Diaspora Currency
                  </div>
                  {(Object.keys(currencies) as Currency[]).map((curr) => {
                    const cInfo = currencies[curr];
                    const isSelected = currency === curr;
                    return (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => {
                          setCurrency(curr);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs hover:bg-white/10 flex items-center justify-between font-medium cursor-pointer transition-colors ${
                          isSelected ? "bg-[#D8B56D]/20 text-[#F3DC87] font-bold" : "text-slate-200"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{cInfo.flag}</span>
                          <span>{curr} ({cInfo.symbol.trim()})</span>
                        </span>
                        {isSelected && (
                          <Check className="w-3.5 h-3.5 text-[#D8B56D]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
