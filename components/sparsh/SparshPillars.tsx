"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Siren,
  Stethoscope,
  Activity,
  Heart,
  CalendarHeart,
  MessageSquareShare,
  CheckCircle2,
  ArrowRight,
  X,
  ShieldCheck,
  Building,
  Sparkles,
} from "lucide-react";

interface PillarDetail {
  id: string;
  title: string;
  tagline: string;
  category: string;
  shortSummary: string;
  shortPoints: string[];
  fullDescription: string;
  icon: React.ReactNode;
  accentColor: string;
  image: string;
  hospitalNetwork?: string;
  sla: string;
  protocols: string[];
  deliverables: string[];
}

export function SparshPillars() {
  const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPillar(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const pillars: PillarDetail[] = [
    {
      id: "emergency",
      title: "Emergency Assistance Coordination",
      tagline: "24/7 Rapid SOS & Pre-Authorized Hospital Liaison",
      category: "Critical Care",
      shortSummary: "Verified emergency routing, pre-cleared ICU casualty admissions, and on-ground companion deployment.",
      shortPoints: [
        "Rapid SOS dispatch to city control center",
        "Pre-registered admissions at Apollo, Fortis & Manipal",
        "On-ground companion bedside guardianship",
      ],
      fullDescription:
        "In critical situations, seconds count. Our 24/7 emergency response protocol eliminates chaotic overseas panic. We coordinate verified private ambulance routing, alert pre-registered emergency casualty rooms at premier hospitals (Apollo Hospitals, Manipal Hospitals, Fortis Healthcare), and deploy an on-ground care companion to handle paperwork, admission deposits, and family briefings until relatives arrive.",
      icon: <Siren className="w-5 h-5 text-red-500 dark:text-red-400" />,
      accentColor: "border-red-500/40 text-red-600 dark:text-red-300 bg-red-50/50 dark:bg-red-950/30",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
      hospitalNetwork: "Apollo Hospitals · Fortis Healthcare · Manipal Hospitals · Aster Prime",
      sla: "Instant SOS trigger · Companion on-site within 45 mins",
      protocols: [
        "Triple-redundant dispatch tree (SMS, WhatsApp, Automated Call to NRI child)",
        "Pre-filed digital health dossier shared securely with on-duty emergency physicians",
        "Pre-authorized admission escrow buffer preventing care delays",
      ],
      deliverables: [
        "Live GPS tracking of ambulance escort",
        "Doctor direct summary recorded and uploaded to client portal",
        "Continuous 24-hour bedside guardianship transition",
      ],
    },
    {
      id: "doctor",
      title: "Doctor Appointment Accompaniment",
      tagline: "Doorstep Chauffeur & Patient Advocacy at Top Hospitals",
      category: "Geriatric OPD",
      shortSummary: "Private chauffeured escort, ticket queue management, and recorded physician directives for overseas children.",
      shortPoints: [
        "Doorstep chauffeur pickup & wheelchair support",
        "Companion attends OPD & records doctor directives",
        "Prescription transcription & pharmacy follow-through",
      ],
      fullDescription:
        "Navigating multi-specialty hospital complexes, crowded waiting lobbies, and complex clinical jargon is overwhelming for aging parents. Our educated, empathetic Care Companions handle everything: chauffeur pickup, wheelchair assistance, billing desk clearances, sitting beside parents during consultations, and clarifying physician instructions.",
      icon: <Stethoscope className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
      accentColor: "border-emerald-500/40 text-emerald-700 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/30",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
      hospitalNetwork: "All accredited tertiary & specialty medical centers in Bengaluru, Hyderabad, Delhi NCR",
      sla: "Scheduled 48h in advance · Priority emergency escort on demand",
      protocols: [
        "Pre-consultation symptom journal review with overseas family",
        "Direct voice memo recording of physician directive (with physician consent)",
        "Diagnostic lab test sample collection & digital retrieval",
      ],
      deliverables: [
        "Digitized medical debrief summary delivered within 2 hours",
        "Verified prescription uploaded to family portal and pharmacy fulfillment",
        "Follow-up appointment calendar synchronization",
      ],
    },
    {
      id: "telemetry",
      title: "Routine Wellbeing & Vitals Telemetry",
      tagline: "Preventive In-Home Monitoring & Medication Auditing",
      category: "Clinical Telemetry",
      shortSummary: "Regular in-home checks for blood pressure, pulse, SpO2, and blood glucose with automated trend alerts.",
      shortPoints: [
        "Bi-weekly BP, pulse, SpO2, and glucose checks",
        "Smart blister sorting (Morning/Noon/Night)",
        "Quarterly geriatrician review & reconciliation",
      ],
      fullDescription:
        "Chronic condition management requires vigilance before small irregularities turn into acute hospitalizations. Our clinical companions conduct regular in-home vitals screenings using calibrated medical telemetry kits, logging readings directly into your secure client dashboard.",
      icon: <Activity className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
      accentColor: "border-blue-500/40 text-blue-700 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/30",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      sla: "Bi-weekly or weekly scheduled mornings · Instant anomaly alert",
      protocols: [
        "Calibrated Omron blood pressure & Accu-Chek glucometer readings",
        "Automated glycemic and systolic trend thresholds",
        "Pill-organizer reconciliation against current prescription chart",
      ],
      deliverables: [
        "Timestamped vitals log in client portal with 90-day trend graphs",
        "Immediate SMS alert to family for blood pressure spikes",
        "Monthly clinical oversight report signed by supervising geriatrician",
      ],
    },
    {
      id: "errands",
      title: "Daily Errands & Practical Support",
      tagline: "Doorstep Pharmacy Refills & Household Coordination",
      category: "Home Logistics",
      shortSummary: "Reliable coordination of prescription refills, municipal paperwork, life certificates, and home appliance repairs.",
      shortPoints: [
        "Doorstep pharmacy fulfillment from certified chemists",
        "7-day advance medication depletion alerts",
        "Assistance with bank life certificates & pension",
      ],
      fullDescription:
        "Routine daily logistics become burdensome for seniors living independently. Sustune handles the practical chores that drain parental energy: prescription refills from trusted pharmacies, bank life certificates, utility payments, and home maintenance.",
      icon: <Heart className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
      accentColor: "border-amber-500/40 text-amber-700 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/30",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80",
      sla: "Next-day execution for standard errands · Same-day urgent refills",
      protocols: [
        "Direct fulfillment through Apollo Pharmacy and MedPlus partner network",
        "Batch medicine expiry validation before doorstep handover",
        "Supervised vendor access for home appliance servicing",
      ],
      deliverables: [
        "Digital pharmacy invoices archived in client portal",
        "Automated recurring prescription delivery schedule",
        "Photo confirmation of errand completion",
      ],
    },
    {
      id: "companionship",
      title: "Scheduled Companionship Visits",
      tagline: "Combating Isolation with Warm, Dedicated Friendship",
      category: "Emotional Wellbeing",
      shortSummary: "Empathetic, unhurried visits from the same assigned Care Companion: conversation, tea, memory storytelling, and temple walks.",
      shortPoints: [
        "Named companion continuity — same trusted friend",
        "Triple-tier background verified & police certified",
        "Joyful photo & audio check-ins sent to children",
      ],
      fullDescription:
        "The ache of distance is felt most acutely in quiet living rooms. Loneliness severely impacts senior cardiovascular and mental health. Sustune Care assigns a consistent, educated Care Companion who visits on a reliable weekly cadence to share conversation, accompany walks in the park, assist with mobile technology, and listen to ancestral memories.",
      icon: <CalendarHeart className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
      accentColor: "border-purple-500/40 text-purple-700 dark:text-purple-300 bg-purple-50/50 dark:bg-purple-950/30",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      sla: "Consistent weekly visit slots · Zero unannounced substitutions",
      protocols: [
        "Strict matching by language preference, cultural background, and interests",
        "Respectful, dignified presence without infantalizing communication",
        "Assisted video call setup connecting parents directly to overseas grandchildren",
      ],
      deliverables: [
        "Post-visit WhatsApp audio debrief to overseas children within 1 hour",
        "High-definition photograph update capturing parent's wellbeing",
        "Mood and cognitive engagement journal tracked in portal",
      ],
    },
    {
      id: "portal",
      title: "Family Communication & Portal Logs",
      tagline: "Encrypted Health Hub with Instant WhatsApp Alerts",
      category: "Global Telemetry",
      shortSummary: "Complete transparency for overseas children: timestamped visit debriefs, doctor audio memos, and live vital charts.",
      shortPoints: [
        "Timestamped WhatsApp alerts delivered within minutes",
        "Private 256-bit encrypted family health dashboard",
        "Direct access to your dedicated City Care Concierge",
      ],
      fullDescription:
        "You should never have to wonder how your parents are doing or guess what the doctor prescribed. The Sustune Client Portal provides a single, unified source of truth: audio debriefs, prescription archives, vitals trend graphs, and next-visit schedules accessible across all timezones.",
      icon: <MessageSquareShare className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      accentColor: "border-teal-500/40 text-teal-700 dark:text-teal-300 bg-teal-50/50 dark:bg-teal-950/30",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      sla: "Instant visit upload · 24/7 Portal accessibility worldwide",
      protocols: [
        "Bank-grade 256-bit TLS encryption for all health documents",
        "Multi-family member role-based access for overseas siblings",
        "Automated push notifications for key health milestones",
      ],
      deliverables: [
        "Unified family mobile & web portal credentials",
        "Bi-weekly consolidated care digest PDF",
        "Direct WhatsApp hotline to assigned Concierge Director",
      ],
    },
  ];

  return (
    <section
      id="care-services"
      className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 text-xs font-bold text-[#0F5132] dark:text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>INSTITUTIONAL ELDER HEALTHCARE FRAMEWORK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F3A] dark:text-white">
            Six Pillars of Compassionate Care
          </h2>

          <p className="text-sm sm:text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            Concise, reliable healthcare accompaniment modeled after leading hospital standards. Click <strong>Quick Details</strong> on any service to explore clinical protocols and SLAs.
          </p>
        </div>

        {/* 6 Concise Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white dark:bg-[#0B1F3A]/85 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Header with Category Badge */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0B1F3A]/85 backdrop-blur-md text-emerald-300 border border-emerald-400/30">
                      {pillar.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-medium text-emerald-300 bg-white/10 px-2 py-0.5 rounded-full">
                      Verified Standard
                    </span>
                  </div>
                </div>

                {/* Card Body - Crisp & Punchy */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                    {pillar.shortSummary}
                  </p>

                  {/* 3 Quick Chips */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/10 text-xs text-slate-700 dark:text-slate-200">
                    {pillar.shortPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
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
                  onClick={() => setSelectedPillar(pillar)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white font-semibold text-xs border border-slate-200 dark:border-white/20 transition-all cursor-pointer text-center"
                >
                  Quick Details
                </button>
                <Link
                  href={`/contact?interest=sparsh&service=${pillar.id}`}
                  className="py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rich Details Modal for Deep Exploration */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#0B1F3A] text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border-2 border-emerald-400/50 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedPillar(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  {selectedPillar.category}
                </span>
                <span className="text-xs text-slate-400">{selectedPillar.sla}</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {selectedPillar.title}
                </h3>
                <p className="text-xs text-emerald-300 font-semibold mt-1">
                  {selectedPillar.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {selectedPillar.fullDescription}
              </p>

              {/* Protocols */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Operational Protocols:
                </div>
                {selectedPillar.protocols.map((protocol, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{protocol}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-bold text-[#F3DC87] uppercase tracking-wider">
                  Client Deliverables:
                </div>
                {selectedPillar.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B56D] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/contact?interest=sparsh&service=${selectedPillar.id}`}
                  className="flex-1 bg-gradient-to-r from-[#176B63] to-[#0e4842] text-white font-bold py-3 px-5 rounded-xl text-center text-xs sm:text-sm hover:brightness-110 transition-all cursor-pointer"
                >
                  Book Consultation for This Service
                </Link>
                <a
                  href="#configurator"
                  onClick={() => setSelectedPillar(null)}
                  className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all cursor-pointer"
                >
                  Configure Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
