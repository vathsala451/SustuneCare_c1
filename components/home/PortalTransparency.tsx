"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Eye,
  FileCheck2,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Building2,
  Stethoscope,
  Wrench,
  Bell,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PortalTransparency() {
  const [activeTab, setActiveTab] = useState<"overview" | "property" | "care">("overview");

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
              <LayoutDashboard className="w-3.5 h-3.5 text-[#176B63]" />
              <span>DIASPORA CLIENT PORTAL PREVIEW</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
              Total Transparency, 24/7 on Your Screen
            </h2>
            <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
              Never wonder if the rent was credited or how your parents&apos; doctor visit went.
              Our private portal logs every activity with timestamped photos, clinician notes, and
              audited financials.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href="/portal/login"
              variant="primary"
              size="md"
              className="bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold shadow-md"
              icon={<Eye className="w-4 h-4 text-[#0B1F3A]" />}
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Open Full Interactive Portal
            </Button>
          </div>
        </div>

        {/* Dashboard Preview Mockup Frame */}
        <div className="rounded-2xl border-2 border-[#D8B56D]/40 bg-white dark:bg-[#0B1F3A] shadow-2xl overflow-hidden">
          {/* Mock Browser/App Header Bar */}
          <div className="bg-[#0B1F3A] text-white px-4 py-3 border-b border-[#D8B56D]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-slate-300 ml-2 font-mono hidden sm:inline">
                portal.sustunecare.com/dashboard/preview
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-sans">
              <span className="px-2.5 py-0.5 rounded-full bg-[#D8B56D]/20 text-[#F3DC87] font-bold border border-[#D8B56D]/30">
                Sample Data Demo
              </span>
              <span className="text-slate-400 hidden md:inline">Account: Dr. Rajeshwari V. (London, UK)</span>
            </div>
          </div>

          {/* Tab Selector Toolbar inside Mockup */}
          <div className="bg-[#F6F3ED] dark:bg-[#061224] px-6 py-2.5 border-b border-[#DCE3EA] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1 bg-white dark:bg-white/10 p-1 rounded-xl border border-[#DCE3EA] dark:border-white/10 shadow-xs">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-[#0B1F3A] text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#0B1F3A]"
                }`}
              >
                Dual-Shield Overview
              </button>
              <button
                onClick={() => setActiveTab("property")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "property"
                    ? "bg-[#0B1F3A] text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#0B1F3A]"
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-[#D8B56D]" />
                <span>Property Portfolio</span>
              </button>
              <button
                onClick={() => setActiveTab("care")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "care"
                    ? "bg-[#176B63] text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#0B1F3A]"
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-200" />
                <span>Parent Care Hub</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2 font-sans">
              <Bell className="w-3.5 h-3.5 text-[#D8B56D]" />
              <span>2 New Notifications (Rent Credited · Cardiology Escort Logged)</span>
            </div>
          </div>

          {/* Inner Dashboard Layout Preview */}
          <div className="p-6 sm:p-8 bg-slate-50/70 dark:bg-[#071329] space-y-6">
            {/* Top Quick Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-[#0B1F3A] p-4 rounded-[10px] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Portfolio Properties
                </div>
                <div className="font-display font-extrabold text-2xl text-brand-navy dark:text-white mt-1">
                  2 Units Active
                </div>
                <div className="text-[11px] text-brand-emerald dark:text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>100% Tenancy · Rent in Escrow</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0B1F3A] p-4 rounded-[10px] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Latest 360° Inspection
                </div>
                <div className="font-display font-extrabold text-2xl text-brand-navy dark:text-white mt-1">
                  98% Excellent
                </div>
                <div className="text-[11px] text-brand-cerulean dark:text-cyan-400 font-semibold mt-1">
                  Audited 12 Oct · 42 HD Photos
                </div>
              </div>

              <div className="bg-white dark:bg-[#0B1F3A] p-4 rounded-[10px] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Upcoming Doctor Visit
                </div>
                <div className="font-display font-extrabold text-2xl text-brand-navy dark:text-white mt-1">
                  Friday, 10:30 AM
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                  Apollo Jubilee Hills · Escort Assigned
                </div>
              </div>

              <div className="bg-white dark:bg-[#0B1F3A] p-4 rounded-[10px] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Parent Vitals Trend
                </div>
                <div className="font-display font-extrabold text-2xl text-brand-navy dark:text-white mt-1">
                  122/80 mmHg
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300 font-semibold mt-1">
                  Stable · Dr. S. Verma Review
                </div>
              </div>
            </div>

            {/* TAB CONTENT: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-150">
                {/* Box 1: Real Estate Portfolio Snapshot */}
                <div className="bg-white dark:bg-[#0B1F3A] rounded-[10px] p-5 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-gold" />
                      <h4 className="font-display font-bold text-sm text-brand-navy dark:text-white">
                        Aegis Real Estate Portfolio
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-brand-emerald dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                      Tenanted
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-brand-navy dark:text-white">Palm Meadows Villa #14</div>
                        <div className="text-slate-500 dark:text-slate-400">Whitefield, Bengaluru · 4 BHK</div>
                      </div>
                      <span className="font-bold text-brand-navy dark:text-[#F3DC87]">₹1,15,000 / mo</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center pt-1 text-[11px]">
                      <div className="p-2 rounded bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                        <span className="text-slate-500 dark:text-slate-400 block">Tenant</span>
                        <strong className="text-brand-navy dark:text-white">Infosys Exec</strong>
                      </div>
                      <div className="p-2 rounded bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                        <span className="text-slate-500 dark:text-slate-400 block">Next Rent</span>
                        <strong className="text-brand-navy dark:text-white">05 Nov Escrow</strong>
                      </div>
                      <div className="p-2 rounded bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                        <span className="text-slate-500 dark:text-slate-400 block">Audit</span>
                        <strong className="text-brand-emerald dark:text-emerald-400">Passed (98%)</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 2: Sparsh Parent Health Hub Snapshot */}
                <div className="bg-white dark:bg-[#0B1F3A] rounded-[10px] p-5 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-brand-emerald" />
                      <h4 className="font-display font-bold text-sm text-brand-navy dark:text-white">
                        Sparsh Parent Care Hub
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-brand-cerulean dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                      Active Concierge
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-brand-navy dark:text-white">Wellbeing Visit &amp; Cardiology Escort</strong>
                        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-gold" />
                          <span>Yesterday, 3:45 PM</span>
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">
                        Care Companion Sister Mary accompanied father to Dr. Verma at Apollo.
                        ECG normal, blood pressure well controlled. Medicine refill ordered.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Care Companion: <strong className="text-slate-700 dark:text-slate-200">Sister Mary S., GNM</strong></span>
                      <span className="text-brand-cerulean dark:text-cyan-400 font-semibold">1 Audio Note Attached</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PROPERTY PORTFOLIO */}
            {activeTab === "property" && (
              <div className="bg-white dark:bg-[#0B1F3A] rounded-[10px] p-6 border border-slate-200 dark:border-white/10 shadow-sm space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-brand-gold" />
                    <h4 className="font-display font-bold text-base text-brand-navy dark:text-white">
                      Detailed Real Estate &amp; Rental Ledger
                    </h4>
                  </div>
                  <span className="text-xs text-brand-emerald dark:text-emerald-400 font-semibold">100% Escrow Protected</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-[8px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-2">
                    <div className="flex items-center justify-between font-bold text-sm text-brand-navy dark:text-white">
                      <span>Palm Meadows Villa #14 (Whitefield)</span>
                      <span className="text-brand-emerald dark:text-emerald-400">₹1,15,000/mo</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">Tenant: Vikram &amp; Ananya Sharma · Lease valid till Aug 2027</p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10">
                      <span>Police Verification: <strong className="text-slate-700 dark:text-slate-200">Verified</strong></span>
                      <span>Credit Score: <strong className="text-slate-700 dark:text-slate-200">CIBIL 812</strong></span>
                    </div>
                  </div>

                  <div className="p-4 rounded-[8px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-2">
                    <div className="flex items-center justify-between font-bold text-sm text-brand-navy dark:text-white">
                      <span>My Home Bhooja #Tower 4 (Hitec City)</span>
                      <span className="text-brand-emerald dark:text-emerald-400">₹95,000/mo</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">Tenant: Dr. K. Srinivas Rao · Lease valid till Jan 2027</p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10">
                      <span>Police Verification: <strong className="text-slate-700 dark:text-slate-200">Verified</strong></span>
                      <span>Credit Score: <strong className="text-slate-700 dark:text-slate-200">CIBIL 795</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PARENT HEALTH HUB */}
            {activeTab === "care" && (
              <div className="bg-white dark:bg-[#0B1F3A] rounded-[10px] p-6 border border-slate-200 dark:border-white/10 shadow-sm space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-brand-emerald" />
                    <h4 className="font-display font-bold text-base text-brand-navy dark:text-white">
                      Parent Health Telemetry &amp; Doctor Notes
                    </h4>
                  </div>
                  <span className="text-xs text-brand-cerulean dark:text-cyan-400 font-semibold">Apollo Hospital Network</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-[8px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <strong className="text-brand-navy dark:text-white text-sm block">Upcoming: Cardiology Consultation Escort</strong>
                      <span className="text-slate-500 dark:text-slate-400">Friday, 24 Oct · Dr. Sandeep Verma, Apollo Bannerghatta</span>
                    </div>
                    <span className="text-xs font-bold text-brand-emerald dark:text-emerald-300 px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 self-start md:self-auto">
                      Companion Assigned: Sister Mary
                    </span>
                  </div>

                  <div className="p-4 rounded-[8px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-1">
                    <div className="flex items-center justify-between font-bold text-brand-navy dark:text-white">
                      <span>Latest Recorded Vitals: 122/80 mmHg · Blood Sugar: 112 mg/dL</span>
                      <span className="text-[11px] text-brand-emerald dark:text-emerald-400 font-semibold">Normal</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">Medication replenishment: Monthly chronic prescription verified and organized in dosage dispenser.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Persistent Disclaimer */}
          <div className="bg-slate-100 dark:bg-[#08172c] px-6 py-3.5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="italic">
              Interactive demonstration — sample data only. Protected by 256-bit SSL encryption in production.
            </span>
            <Link
              href="/portal/login"
              className="text-brand-cerulean dark:text-[#F3DC87] font-bold hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Explore full interactive dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
