"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  HeartHandshake,
  Lock,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-[#D8B56D]/30 pt-16 pb-12 relative overflow-hidden select-none">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D8B56D 1px, transparent 1px), linear-gradient(90deg, #D8B56D 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D8B56D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#176B63]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Restored Original 3 Trust Cards at Top of Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 mb-14 backdrop-blur-sm">
          {/* Trust Pillar 1 */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#D8B56D]/15 border border-[#D8B56D]/30 text-[#D8B56D] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#D8B56D]" />
            </div>
            <div>
              <h4 className="text-white font-serif font-semibold text-sm">Audited Escrow &amp; RERA Ready</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed font-body">
                Client rental yields remitted directly via bank-grade escrow accounts with full TDS &amp; Form 15CA/CB support.
              </p>
            </div>
          </div>

          {/* Trust Pillar 2 */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#176B63]/25 border border-[#176B63]/40 text-teal-300 shrink-0">
              <HeartHandshake className="w-6 h-6 text-teal-300" />
            </div>
            <div>
              <h4 className="text-white font-serif font-semibold text-sm">NABH &amp; HIPAA Aligned Care</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed font-body">
                Parental medical telemetry and electronic health records encrypted with military-grade 256-bit encryption.
              </p>
            </div>
          </div>

          {/* Trust Pillar 3 */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-300 shrink-0">
              <Lock className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-serif font-semibold text-sm">Dual-Shield Guarantee</h4>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed font-body">
                Zero proxy-contractors. Dedicated background-checked Property Stewards and Certified Clinical Care Companions.
              </p>
            </div>
          </div>
        </div>

        {/* 5-Column Navigation Grid matching original website */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-sm">
          {/* Column 1 & 2: Sustune Care Brand & Contact Details (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56D] rounded-xl p-1"
            >
              <div className="relative flex items-center justify-center shrink-0 w-14 h-14 rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 border border-[#D8B56D]/40 bg-white p-1">
                <Image
                  src="/logo.png"
                  alt="Sustune Care Logo"
                  width={58}
                  height={58}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-tight font-bold leading-none text-2xl text-white">
                  SUSTUNE CARE
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium mt-1 text-slate-300 font-display">
                  Aegis • Sparsh • NRIs
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3 font-body">
              Institutional-grade Property Asset Stewardship &amp; Empathetic Parental Healthcare Concierge. Built exclusively for Non-Resident Indians across the USA, UK, UAE, Australia, and Canada.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300 font-body">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8B56D] shrink-0" />
                <span>Operating Hubs: Bengaluru • Hyderabad • Delhi NCR • Pune</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#176B63] shrink-0" />
                <span>24/7 NRI Dispatch &amp; Time-zone Aligned Account Managers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8B56D] shrink-0" />
                <a
                  href="tel:+918007878863"
                  className="hover:text-white transition-colors"
                >
                  NRI Emergency Concierge: +91 800-SUSTUNE (+91 800-787-8863)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D8B56D] shrink-0" />
                <a
                  href="mailto:concierge@sustunecare.com"
                  className="hover:text-white transition-colors"
                >
                  concierge@sustunecare.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Aegis Property Original Links */}
          <div>
            <h5 className="text-[#D8B56D] font-serif text-base font-semibold mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B56D]" />
              Aegis Property
            </h5>
            <ul className="space-y-2.5 text-slate-300 text-xs font-body">
              <li>
                <Link href="/aegis#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Tenant Scouting &amp; KYC</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D8B56D] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/aegis#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Rent Escrow &amp; Repatriation</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D8B56D] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/aegis#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Turnkey Maintenance &amp; Fit-out</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D8B56D] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/aegis#inspection-report" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Digital Inspection Reports</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D8B56D] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/aegis#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Khata Mutation &amp; Property Tax</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D8B56D] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sparsh Healthcare Original Links */}
          <div>
            <h5 className="text-teal-300 font-serif text-base font-semibold mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#176B63]" />
              Sparsh Healthcare
            </h5>
            <ul className="space-y-2.5 text-slate-300 text-xs font-body">
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>24/7 SOS &amp; Ambulance Dispatch</span>
                  <ArrowUpRight className="w-3 h-3 text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Doctor Escorts &amp; Summaries</span>
                  <ArrowUpRight className="w-3 h-3 text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Routine Vitals &amp; Lab Tests</span>
                  <ArrowUpRight className="w-3 h-3 text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Medication Delivery &amp; Sorting</span>
                  <ArrowUpRight className="w-3 h-3 text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/sparsh" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Warm Companionship Visits</span>
                  <ArrowUpRight className="w-3 h-3 text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Client Experience Original Links */}
          <div>
            <h5 className="text-white font-serif text-base font-semibold mb-4 tracking-wide">
              Client Experience
            </h5>
            <ul className="space-y-2.5 text-slate-300 text-xs font-body">
              <li>
                <Link href="/portal/login" className="hover:text-[#D8B56D] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8B56D]" />
                  <span>Client Portal Login</span>
                </Link>
              </li>
              <li>
                <Link href="/#tco-estimator" className="hover:text-[#D8B56D] transition-colors">
                  NRI Fee Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D8B56D] transition-colors">
                  Book Virtual Video Consultation
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/918007878863?text=Hi%20Sustune%2C%20I%20would%20like%20to%20speak%20with%20an%20NRI%20care%20manager."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:underline flex items-center gap-1 mt-2 font-medium"
                >
                  Direct WhatsApp NRI Desk →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Security Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-body">
          <p>© {currentYear} Sustune Care Private Limited. All rights reserved. Registered under Indian Companies Act.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
              Privacy Policy &amp; Health Data Protection
            </span>
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
              Terms of Asset Stewardship
            </span>
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
              SOC-2 &amp; ISO 27001 Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
