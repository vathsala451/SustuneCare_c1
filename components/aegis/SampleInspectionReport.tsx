"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileCheck2,
  Calendar,
  UserCheck,
  Droplets,
  Download,
  Zap,
  CheckCircle2,
  Info,
  ShieldCheck,
} from "lucide-react";

export function SampleInspectionReport() {
  const [activeRoom, setActiveRoom] = useState<string>("living");
  const [isExporting, setIsExporting] = useState(false);

  const rooms = [
    {
      id: "living",
      name: "Living Room & Foyer",
      score: "98/100",
      status: "Flawless",
      photo:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      geo: "GEO: 17.4401° N, 78.3489° E",
      time: "11:34 AM IST",
      caption: "Living room facing East. Natural ventilation optimal, no dampness detected.",
      recommendation:
        "No immediate capital expenditure required. Scheduled for next routine quarterly re-test in January 2027.",
      items: [
        {
          name: "Italian Botticino Marble Flooring",
          status: "Pass",
          note: "Diamond polish intact, zero hairline fractures or grout erosion.",
        },
        {
          name: "Concealed LED Cove Lighting",
          status: "Pass",
          note: "All 18 points functional. Voltage measured at standard 230V.",
        },
        {
          name: "Main Teak Entrance Door & Yale Smart Lock",
          status: "Pass",
          note: "Battery level at 92%. Digital latch smooth, deadbolt engages tightly.",
        },
        {
          name: "Wall Paint & Finish",
          status: "Pass",
          note: "Asian Paints Royale Luxury Emulsion. Zero scuffs or moisture marks.",
        },
      ],
    },
    {
      id: "master",
      name: "Master Suite & Walk-in",
      score: "95/100",
      status: "Pristine",
      photo:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
      geo: "GEO: 17.4402° N, 78.3490° E",
      time: "11:48 AM IST",
      caption: "Master suite facing North-East. Sunlight exposure verified optimal.",
      recommendation:
        "Schedule next routine quarterly HEPA filter replacement during Q4 audit.",
      items: [
        {
          name: "Hardwood Teak Laminate Flooring",
          status: "Pass",
          note: "Laminate joinery tight, zero moisture swelling or squeaking boards.",
        },
        {
          name: "Custom Floor-to-Ceiling Wardrobes",
          status: "Pass",
          note: "Hettich soft-close sliders calibrated, interior dehumidifier sachet active.",
        },
        {
          name: "Daikin Inverter AC Ducting & Temp Calibration",
          status: "Pass",
          note: "Thermal scan confirms 21.2°C ambient delta, filters sterilized.",
        },
        {
          name: "En-Suite Acoustic Glazing & Balcony Latch",
          status: "Pass",
          note: "Sound insulation test verified at 42dB, silicone sealant intact.",
        },
      ],
    },
    {
      id: "kitchen",
      name: "Gourmet Modular Kitchen",
      score: "94/100",
      status: "Excellent",
      photo:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      geo: "GEO: 17.4403° N, 78.3488° E",
      time: "12:05 PM IST",
      caption: "Kitchen utility dry. Gas detector sensor active with green status.",
      recommendation:
        "Pre-approved preventive service on RO filter scheduled for Q1 2027.",
      items: [
        {
          name: "Hafele Hydraulic Lift Cabinetry & Hardware",
          status: "Pass",
          note: "All gas springs smooth, zero misalignment on soft-close dampers.",
        },
        {
          name: "Faber Auto-Clean Chimney Suction Test",
          status: "Pass",
          note: "Airflow velocity tested at 1,350 m³/hr, baffle filters degreased.",
        },
        {
          name: "Under-Sink Plumbing & Reverse Osmosis Telemetry",
          status: "Pass",
          note: "TDS output verified at 78 ppm, zero drip seepage on manifold.",
        },
        {
          name: "Quartz Countertop & Backsplash Sealant",
          status: "Pass",
          note: "Anti-microbial silicone seal continuous around undermount sink.",
        },
      ],
    },
    {
      id: "plumbing",
      name: "Plumbing & Moisture Radar",
      score: "97/100",
      status: "Passed",
      photo:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      geo: "GEO: 17.4401° N, 78.3487° E",
      time: "12:20 PM IST",
      caption: "Plumbing shafts dry. Sump sensor telemetry reporting normal.",
      recommendation:
        "Water softening salt replenishment logged for next concierge maintenance visit.",
      items: [
        {
          name: "Thermal Imaging Seepage Diagnostics",
          status: "Pass",
          note: "FLIR thermal camera detected 0% hidden capillary leakage behind tile walls.",
        },
        {
          name: "Main Pressure Pump & Manifold Bar Pressure",
          status: "Pass",
          note: "Water pressure stable at 3.2 bar, automatic pressure cut-off functioning.",
        },
        {
          name: "Geyser Anode Rod & Heating Efficiency",
          status: "Pass",
          note: "35L storage geyser element drawing 2.0 kW, thermal relief valve checked.",
        },
        {
          name: "Trap Cleanouts & Anti-Siphon Air Vents",
          status: "Pass",
          note: "All P-traps unobstructed, zero sewer odor backflow into residence.",
        },
      ],
    },
    {
      id: "terrace",
      name: "Terrace & Facade Drainage",
      score: "96/100",
      status: "Secure",
      photo:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      geo: "GEO: 17.4404° N, 78.3491° E",
      time: "12:38 PM IST",
      caption: "Terrace perimeter secure. Structural lightning rod earth pit certified.",
      recommendation:
        "Pre-monsoon roof surface inspection completed successfully. No recaulk required.",
      items: [
        {
          name: "Elastomeric Polyurethane Waterproofing Membrane",
          status: "Pass",
          note: "Zero bubbling, UV protective top-coat intact across 1,200 sq.ft.",
        },
        {
          name: "Rainwater Scuppers & Downspout Grates",
          status: "Pass",
          note: "Cast iron grates cleared of debris; flow test passes 120 L/min flush.",
        },
        {
          name: "Parapet Coping & External Weather-Shield Paint",
          status: "Pass",
          note: "Dulux Weathershield elastomeric coat shows zero micro-fissures.",
        },
        {
          name: "Solar Inverter & Rooftop Surge Arrestor",
          status: "Pass",
          note: "Ground resistance measured at 1.8 ohms; inverter sync at 99.4%.",
        },
      ],
    },
  ];

  const current = rooms.find((r) => r.id === activeRoom) || rooms[0];

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      window.print();
    }, 600);
  };

  return (
    <section id="inspection-report" className="py-20 sm:py-28 bg-[#0B1F3A] text-white relative overflow-hidden">
      {/* Subtle Architectural Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D8B56D 1px, transparent 1px), linear-gradient(90deg, #D8B56D 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8B56D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#D8B56D] border border-white/15 mb-3.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span className="font-display tracking-wide uppercase text-[11px]">Forensic Transparency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Sample Digital Inspection Report
          </h2>
          <p className="mt-3.5 text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            Experience what Sustune NRI property owners receive every quarter: high-resolution
            room-by-room photographic audits, moisture readings, and structural sign-offs.
          </p>
        </div>

        {/* Outer White Card Container with Architectural Gold Border */}
        <div className="bg-white dark:bg-[#08172c] text-slate-900 dark:text-slate-100 rounded-3xl shadow-2xl border-2 border-[#D8B56D]/40 overflow-hidden transition-colors">
          {/* Top Midnight Navy Report Bar */}
          <div className="bg-[#071426] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 border border-[#D8B56D]/60 shadow-md shrink-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Sustune Care Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#D8B56D] text-[#0B1F3A] font-display">
                    OFFICIAL AUDIT REPORT
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    ID: SUS-HYD-2026-Q3-0894
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  The Palms Villa 4B, Gachibowli Financial District
                </h3>
                <p className="text-xs text-slate-300 font-body">
                  Hyderabad, Telangana - PIN 500032
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-slate-400 font-body">Overall Health Score</div>
                <div className="font-serif text-3xl font-bold text-[#D8B56D]">
                  96 <span className="text-sm font-sans text-white/80">/ 100</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider font-display">
                  Grade A+ (Pristine)
                </div>
              </div>

              <button
                type="button"
                onClick={handleExport}
                className="bg-[#D8B56D] hover:bg-[#c9a65d] text-[#0B1F3A] text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-2 shadow-md transition-all shrink-0 cursor-pointer font-display"
              >
                <Download className="w-4 h-4" />
                <span>{isExporting ? "Preparing..." : "Export PDF"}</span>
              </button>
            </div>
          </div>

          {/* Subheader Metadata Strip */}
          <div className="bg-[#F6F3ED] dark:bg-[#071329] border-b border-[#DCE3EA] dark:border-white/10 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700 dark:text-slate-300 font-body">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D8B56D]" />
              <span>Inspection Date: <strong className="text-[#0B1F3A] dark:text-white">October 02, 2026</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#176B63] dark:text-emerald-400" />
              <span>Lead Auditor: <strong className="text-[#0B1F3A] dark:text-white">K. Venkatesh, B.Tech Civil</strong> (Licensed Asset Steward #AST-4412)</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#176B63] dark:text-emerald-400" />
              <span>Moisture Level: <strong className="text-[#176B63] dark:text-emerald-400">0.4% (Pass)</strong></span>
            </div>
          </div>

          {/* Room Selector Tabs (All 5 original tabs) */}
          <div className="flex border-b border-[#DCE3EA] dark:border-white/10 bg-slate-100/70 dark:bg-white/5 overflow-x-auto scrollbar-none">
            {rooms.map((room) => {
              const isSelected = room.id === activeRoom;
              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setActiveRoom(room.id)}
                  className={`py-3.5 px-5 text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-2 border-b-2 cursor-pointer font-display ${
                    isSelected
                      ? "border-[#0B1F3A] dark:border-[#D8B56D] bg-white dark:bg-[#0c1f38] text-[#0B1F3A] dark:text-[#F3DC87]"
                      : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10"
                  }`}
                >
                  <span>{room.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      isSelected
                        ? "bg-[#0B1F3A] dark:bg-[#D8B56D] text-white dark:text-[#0B1F3A]"
                        : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {room.score}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Room Audit Details */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F6F3ED]/40 dark:bg-[#050f1c]/50">
            {/* Left 7 Columns: Room Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#DCE3EA] dark:border-white/10">
                <h4 className="font-serif text-lg font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                  <span>{current.name} Audit Checklist</span>
                </h4>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 font-display">
                  {current.status}
                </span>
              </div>

              <div className="space-y-3">
                {current.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-[#0b1f3a] border border-[#DCE3EA] dark:border-white/10 hover:border-[#D8B56D]/50 transition-colors shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-[#0B1F3A] dark:text-white flex items-center gap-2 font-body">
                        <CheckCircle2 className="w-4 h-4 text-[#176B63] dark:text-emerald-400 shrink-0" />
                        <span>{item.name}</span>
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#176B63] dark:text-emerald-300 bg-teal-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-teal-200 dark:border-emerald-500/30 font-display">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pl-6 leading-relaxed font-body">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Steward's Recommendation Box */}
              <div className="p-4 rounded-xl bg-[#0B1F3A]/5 dark:bg-white/5 border border-[#0B1F3A]/15 dark:border-white/15 text-xs text-[#0B1F3A] dark:text-slate-200 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-[#D8B56D] shrink-0 mt-0.5" />
                <span className="font-body leading-relaxed">
                  <strong className="font-display font-semibold">Steward&apos;s Recommendation:</strong> {current.recommendation}
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Inspection Photo & Auditor Sign-Off */}
            <div className="lg:col-span-5 space-y-4">
              {/* Photo with Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#DCE3EA] dark:border-white/15 shadow-md group h-64">
                <Image
                  src={current.photo}
                  alt={current.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span>{current.geo}</span>
                    <span>{current.time}</span>
                  </div>
                  <p className="font-medium text-xs mt-1 text-slate-100 font-body">
                    {current.caption}
                  </p>
                </div>
              </div>

              {/* Digital Auditor Sign-Off Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0b1f3a] border border-[#DCE3EA] dark:border-white/10 text-xs space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#0B1F3A] dark:text-white font-display">Digital Auditor Sign-Off:</span>
                  <span className="text-[10px] text-[#176B63] dark:text-emerald-300 font-bold bg-teal-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-teal-200 dark:border-emerald-500/30 font-display">
                    Verified Digital Hash
                  </span>
                </div>
                <div className="font-serif italic text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  &ldquo;I hereby certify that this property has been physically evaluated according to Sustune 80-Point Structural &amp; Tenancy Protocols.&rdquo;
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-white/10 font-body">
                  Signed: K. Venkatesh (Civil Engineer, Reg #HYD-AST-4412)
                </div>
              </div>

              {/* Demonstration Notice */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 px-1 font-body">
                <Info className="w-3.5 h-3.5 text-[#D8B56D] shrink-0" />
                <span>Illustrative demonstration report. Real audit certificates are delivered as cryptographically sealed PDFs via client portal.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
