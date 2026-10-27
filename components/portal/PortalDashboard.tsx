"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  HeartHandshake,
  LayoutDashboard,
  Bell,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Clock,
  Calendar,
  FileText,
  Wrench,
  Download,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Pill,
  UserCheck,
  ChevronDown,
  Check,
  X,
  PhoneCall,
  Info,
  TrendingUp,
  CalendarCheck,
  CreditCard,
  Play,
  Pause,
  ShieldAlert,
  Volume2,
  PlusCircle,
  Sparkles,
  ArrowRight,
  Activity,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface NotificationItem {
  id: string;
  title: string;
  time: string;
  type: "property" | "care";
  read: boolean;
}

export function PortalDashboard() {
  const [activeTab, setActiveTab] = useState<"property" | "care">("property");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("prop-1");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  
  // Interactive Modals & Toast State
  const [selectedRemittance, setSelectedRemittance] = useState<any | null>(null);
  const [showNewTicketModal, setShowNewTicketModal] = useState<boolean>(false);
  const [showSosModal, setShowSosModal] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // New Ticket Form State
  const [ticketForm, setTicketForm] = useState({
    propertyId: "prop-1",
    category: "Plumbing & Solar",
    priority: "Routine",
    issue: "",
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 4000);
  };

  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: "n-1",
      title: "October Rent Escrow Credited (₹1,15,000) for Palm Meadows Villa",
      time: "2 hours ago",
      type: "property",
      read: false,
    },
    {
      id: "n-2",
      title: "Sister Mary completed Cardiology OPD escort at Apollo for father",
      time: "Yesterday, 4:15 PM",
      type: "care",
      read: false,
    },
    {
      id: "n-3",
      title: "Quarterly 360° Inspection Report generated for Hitec City Apartment",
      time: "3 days ago",
      type: "property",
      read: true,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Preserved & Enriched Property Data (All existing fields, rows, tickets, and scores preserved)
  const properties = [
    {
      id: "prop-1",
      title: "Palm Meadows Villa #14",
      city: "Bengaluru (Whitefield)",
      type: "4 BHK Luxury Villa",
      status: "Tenanted",
      rent: "₹1,15,000 / month",
      grossRentINR: 115000,
      escrowDate: "5th of every month",
      tenant: {
        name: "Vikram & Ananya Sharma",
        employer: "Microsoft India R&D",
        leaseEnd: "31 August 2027",
        policeVerification: "Verified & Filed (Whitefield PS)",
        creditScore: "CIBIL 812 (Excellent)",
        securityDeposit: "₹3,45,000",
      },
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      inspectionScore: "98/100 (Quarterly Q3 Audit)",
      previousScore: "95/100 (Quarterly Q2 Audit)",
      lastAudit: "12 Oct 2026",
      nextInspection: "15 Jan 2027",
      inspectionDetails: {
        leadSteward: "K. Venkatesh (Lead Civil Steward)",
        criticalSeepage: "0 Detected (100% Clear)",
        minorIssues: "1 Minor Observation (Solar valve sensor calibration completed)",
        recommendedActions: "Annual facade weather sealing & waterproofing scheduled for Nov 15",
      },
      maintenanceTickets: [
        {
          id: "TK-101",
          issue: "Solar water heater temperature valve calibration",
          status: "Resolved",
          cost: "₹1,850",
          date: "04 Oct 2026",
          category: "Plumbing & Solar",
          technician: "Sustune Certified Civil Crew (Ramesh K.)",
          priority: "Routine",
          sla: "48h SLA • Resolved in 18h",
          approval: "Pre-approved under ₹5,000 threshold",
        },
        {
          id: "TK-102",
          issue: "Annual exterior facade weather sealing & waterproofing",
          status: "Scheduled",
          cost: "Pre-approved",
          date: "15 Nov 2026",
          category: "Civil & Waterproofing",
          technician: "Authorized Asian Paints Waterproofing Partner",
          priority: "Preventive",
          sla: "Scheduled for 15 Nov 2026",
          approval: "Owner Approved via Portal",
        },
      ],
      rentLedger: [
        {
          month: "October 2026",
          amount: "₹1,15,000",
          status: "Paid to Escrow",
          ref: "TXN-88219",
          grossINR: 115000,
          tdsRate: 31.2,
          tdsINR: 35880,
          maintenanceDeductionINR: 0,
          netINR: 79120,
          destinationAccount: "HDFC NRE A/C ending in ...9041",
          utrNumber: "HDFCNRE2026100588219",
          remittedDate: "Oct 05, 2026 (In Escrow Clearing)",
          form15caStatus: "Generated & Filed ✓",
        },
        {
          month: "September 2026",
          amount: "₹1,15,000",
          status: "Remitted to NRE",
          ref: "TXN-79401",
          grossINR: 115000,
          tdsRate: 31.2,
          tdsINR: 35880,
          maintenanceDeductionINR: 0,
          netINR: 79120,
          destinationAccount: "HDFC NRE A/C ending in ...9041",
          utrNumber: "HDFCNRE2026090579401",
          remittedDate: "Sep 05, 2026 (Transferred to NRE)",
          form15caStatus: "Generated & Stamped ✓",
        },
        {
          month: "August 2026",
          amount: "₹1,15,000",
          status: "Remitted to NRE",
          ref: "TXN-61298",
          grossINR: 115000,
          tdsRate: 31.2,
          tdsINR: 35880,
          maintenanceDeductionINR: 0,
          netINR: 79120,
          destinationAccount: "HDFC NRE A/C ending in ...9041",
          utrNumber: "HDFCNRE2026080561298",
          remittedDate: "Aug 05, 2026 (Transferred to NRE)",
          form15caStatus: "Generated & Stamped ✓",
        },
      ],
    },
    {
      id: "prop-2",
      title: "My Home Bhooja #Tower 4-1802",
      city: "Hyderabad (Hitec City)",
      type: "3 BHK High-Rise Penthouse",
      status: "Tenanted",
      rent: "₹95,000 / month",
      grossRentINR: 95000,
      escrowDate: "5th of every month",
      tenant: {
        name: "Dr. K. Srinivas Rao",
        employer: "Apollo Health City",
        leaseEnd: "15 January 2027",
        policeVerification: "Verified & Filed (Raidurgam PS)",
        creditScore: "CIBIL 795 (High)",
        securityDeposit: "₹2,85,000",
      },
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
      inspectionScore: "96/100 (Quarterly Q3 Audit)",
      previousScore: "94/100 (Quarterly Q2 Audit)",
      lastAudit: "28 Sep 2026",
      nextInspection: "28 Dec 2026",
      inspectionDetails: {
        leadSteward: "P. Raghunath (Senior MEP Engineer)",
        criticalSeepage: "0 Detected (100% Clear)",
        minorIssues: "0 Detected",
        recommendedActions: "Quarterly HVAC filter cleaning pre-approved",
      },
      maintenanceTickets: [
        {
          id: "TK-089",
          issue: "Daikin VRV air conditioning seasonal servicing",
          status: "Resolved",
          cost: "₹3,200",
          date: "20 Sep 2026",
          category: "HVAC & Electrical",
          technician: "Authorized Daikin HVAC Specialist",
          priority: "Routine",
          sla: "48h SLA • Resolved in 24h",
          approval: "Pre-approved under ₹5,000 threshold",
        },
      ],
      rentLedger: [
        {
          month: "October 2026",
          amount: "₹95,000",
          status: "Paid to Escrow",
          ref: "TXN-88220",
          grossINR: 95000,
          tdsRate: 31.2,
          tdsINR: 29640,
          maintenanceDeductionINR: 0,
          netINR: 65360,
          destinationAccount: "ICICI NRE A/C ending in ...4108",
          utrNumber: "ICICINRE2026100588220",
          remittedDate: "Oct 05, 2026 (In Escrow Clearing)",
          form15caStatus: "Generated & Filed ✓",
        },
        {
          month: "September 2026",
          amount: "₹95,000",
          status: "Remitted to NRE",
          ref: "TXN-79402",
          grossINR: 95000,
          tdsRate: 31.2,
          tdsINR: 29640,
          maintenanceDeductionINR: 0,
          netINR: 65360,
          destinationAccount: "ICICI NRE A/C ending in ...4108",
          utrNumber: "ICICINRE2026090579402",
          remittedDate: "Sep 05, 2026 (Transferred to NRE)",
          form15caStatus: "Generated & Stamped ✓",
        },
      ],
    },
  ];

  // Dynamically Calculated Portfolio Summary Metrics (from existing sample data)
  const totalMonthlyGrossRentINR = properties.reduce(
    (acc, p) => acc + (p.grossRentINR || 0),
    0
  );
  const totalPropertiesCount = properties.length;
  const occupiedPropertiesCount = properties.filter(
    (p) => p.status.toLowerCase() === "tenanted"
  ).length;
  const totalEscrowDepositINR = 630000; // ₹3,45,000 (Villa) + ₹2,85,000 (Penthouse)
  const latestRemittedDate = "Sep 05, 2026"; // Sep payment remitted via RTGS; Oct is in escrow clearing
  const nextScheduledInspectionDate = "Jan 15, 2027"; // Next Q4 Inspection for Palm Meadows

  // Filtered Properties
  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || p.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const activeProperty =
    properties.find((p) => p.id === selectedPropertyId) || properties[0];

  // Preserved & Extended Parent Care Data
  const parentCareData = {
    parents: "Shri R. K. Vatsala & Smt. Sharda Vatsala",
    city: "Bengaluru (Indiranagar)",
    careCompanion: "Sister Mary Susan (GNM Nurse, 8 yrs geriatric experience)",
    primaryHospital: "Apollo Hospital, Bannerghatta Road",
    physician: "Dr. Sandeep Verma (MD, Senior Cardiologist)",
    emergencyStandby: {
      status: "ACTIVE • STANDBY",
      responseTime: "7-12 mins",
      casualtyDesk: "Apollo Hospital Bannerghatta Road (Pre-registered)",
      hotline: "+91 800-SUSTUNE",
    },
    latestVisitSummary: {
      date: "Yesterday, 4:15 PM",
      location: "Indiranagar Home Residence & Defense Colony Park",
      summary: "Companion accompanied father for evening stroll, sorted weekly medicines in organizer tray, and assisted mother with FaceTime call.",
      companion: "Sister Mary Susan",
      vitalsStatus: "Optimal (BP 122/80 mmHg, SpO2 98%)",
      audioMemoLength: "3 mins 42 secs",
      audioMemoNote: "Uncle showed me his old regiment photographs from 1974. We took a 35-minute stroll around the defense colony park. Assisted Aunty in setting up her FaceTime call with Rajeshwari in London.",
    },
    medicationSchedule: [
      { slot: "Morning (08:30 AM)", medicines: "Telmisartan 40mg • Metformin 500mg", status: "Taken with Breakfast ✓", verified: true },
      { slot: "Afternoon (01:30 PM)", medicines: "Multivitamin • Calcium + Vit D3", status: "Taken with Lunch ✓", verified: true },
      { slot: "Night (08:30 PM)", medicines: "Rosuvastatin 10mg", status: "Scheduled post-dinner (Alert set)", verified: false },
    ],
    refillStockDays: 18,
    upcomingVisits: [
      {
        id: "v-1",
        date: "Friday, 24 Oct 2026",
        time: "10:00 AM – 1:00 PM",
        type: "Doctor Escort & Lab Tests",
        location: "Apollo Heart Institute",
        notes: "Quarterly echocardiogram & lipid profile review with Dr. Verma.",
        companionAssigned: "Sister Mary Susan",
      },
      {
        id: "v-2",
        date: "Monday, 27 Oct 2026",
        time: "4:00 PM – 6:30 PM",
        type: "Wellbeing & Social Visit",
        location: "Home Residence",
        notes: "Weekly vital telemetry, pharmacy delivery, and evening park walk.",
        companionAssigned: "Sister Mary Susan",
      },
    ],
    vitalsLogs: [
      {
        date: "20 Oct 2026",
        bp: "122/80 mmHg",
        sugar: "112 mg/dL (Fasting)",
        pulse: "72 bpm",
        status: "Normal",
        recordedBy: "Sister Mary S.",
      },
      {
        date: "13 Oct 2026",
        bp: "126/82 mmHg",
        sugar: "118 mg/dL (Fasting)",
        pulse: "74 bpm",
        status: "Normal",
        recordedBy: "Sister Mary S.",
      },
      {
        date: "06 Oct 2026",
        bp: "134/86 mmHg",
        sugar: "138 mg/dL (Post-meal)",
        pulse: "76 bpm",
        status: "Moderate Attention",
        recordedBy: "Sister Mary S.",
      },
    ],
    consultationNotes: [
      {
        id: "cn-1",
        date: "12 Sep 2026",
        doctor: "Dr. Sandeep Verma (Cardiology)",
        hospital: "Apollo Hospital",
        summary:
          "Father's BP response to modified medication is optimal. Continue Telmisartan 40mg. Mild dietary salt reduction advised. Next follow-up booked for late October.",
        audioLength: "3 mins 42 secs",
      },
      {
        id: "cn-2",
        date: "18 Aug 2026",
        doctor: "Dr. Meenakshi Sundaram (Ophthalmology)",
        hospital: "Narayana Nethralaya",
        summary:
          "Mother's annual diabetic retinopathy screening clear. New reading glasses prescription issued and delivered to residence.",
        audioLength: "2 mins 10 secs",
      },
    ],
    medicineDeliveries: [
      {
        id: "med-1",
        date: "15 Oct 2026",
        pharmacy: "Apollo Pharmacy Indiranagar",
        items: "Monthly supply: Telmisartan 40mg, Metformin 500mg, Rosuvastatin 10mg",
        status: "Delivered & Organized in Dispenser",
      },
      {
        id: "med-2",
        date: "15 Sep 2026",
        pharmacy: "Apollo Pharmacy Indiranagar",
        items: "Monthly chronic medication refill",
        status: "Delivered & Verified",
      },
    ],
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.issue.trim()) {
      showToast("Please enter an issue description.");
      return;
    }
    showToast(`Request submitted for ${activeProperty.title}! Assigned Ticket ID: TK-${Math.floor(100 + Math.random() * 900)}`);
    setShowNewTicketModal(false);
    setTicketForm({
      propertyId: "prop-1",
      category: "Plumbing & Solar",
      priority: "Routine",
      issue: "",
    });
  };

  return (
    <div className="bg-[#F6F3ED] dark:bg-[#061224] min-h-screen text-[#263548] dark:text-slate-100 transition-colors">
      {/* IMPROVEMENT 6: Transparent Security & Demo Environment Banner */}
      <div className="bg-[#071426] text-[#D8B56D] py-2.5 px-4 border-b border-[#D8B56D]/30 text-xs flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#D8B56D] shrink-0" />
            <span className="font-medium font-body">
              Interactive demonstration — simulated sample data only. Real production client portals require authenticated credentials and bank-grade zero-trust access controls.
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400">
            DEMO SIMULATION ENVIRONMENT · NO REAL CUSTOMER DATA
          </span>
        </div>
      </div>

      {/* Portal Top Bar — Luxury Midnight Navy Navigation */}
      <header className="bg-[#0B1F3A] text-white border-b border-[#D8B56D]/20 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 py-3.5 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-white p-1 border border-[#D8B56D]/60 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Sustune Care Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="font-serif font-bold text-lg text-white tracking-tight group-hover:text-[#D8B56D] transition-colors">
                Sustune Care
              </span>
            </Link>
            <span className="text-white/30">/</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/10 text-[#D8B56D] border border-white/10 font-display">
                Private Concierge Console
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative hidden md:block w-72">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search properties, reports, vitals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs border border-white/15 bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-[#D8B56D] focus:bg-white/15 transition-all font-body"
              />
            </div>

            {/* Dark / Light Mode Switcher */}
            <ThemeToggle variant="header" />

            {/* Notification Bell with Badge */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 relative cursor-pointer transition-colors"
                aria-label="View notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#D8B56D] ring-2 ring-[#0B1F3A]" />
                )}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white rounded-2xl shadow-2xl border border-[#DCE3EA] dark:border-white/15 z-50 p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-2.5">
                      <span className="font-display font-bold text-xs text-[#0B1F3A] dark:text-white uppercase tracking-wider">
                        Concierge Notifications ({unreadCount} new)
                      </span>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-[11px] font-semibold text-[#176B63] dark:text-emerald-400 hover:underline cursor-pointer font-body"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>

                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {notifications.map((item) => (
                        <div
                          key={item.id}
                          className={`p-3 rounded-xl text-xs transition-colors ${
                            item.read
                              ? "bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-transparent"
                              : "bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#D8B56D]/30 text-[#0B1F3A] dark:text-[#F3DC87] font-medium"
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <span
                              className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                                item.read ? "bg-slate-300 dark:bg-slate-600" : "bg-[#D8B56D]"
                              }`}
                            />
                            <div className="flex-1">
                              <p className="leading-snug font-body">{item.title}</p>
                              <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-1 block font-mono">
                                {item.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User Profile Avatar */}
            <div className="flex items-center gap-3 pl-3 border-l border-white/20">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D8B56D] to-[#f4deb0] text-[#0B1F3A] flex items-center justify-center font-bold text-xs shadow-md border border-[#D8B56D] font-display">
                RV
              </div>
              <div className="hidden lg:block text-left text-xs">
                <span className="font-bold text-white block leading-tight font-display">Rajeshwari V.</span>
                <span className="text-[11px] text-slate-300 font-body">London, UK (GMT)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Portal Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Navigation Tabs Bar */}
        <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-2.5 border border-[#DCE3EA] dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("property")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer font-display ${
                activeTab === "property"
                  ? "bg-[#0B1F3A] text-white shadow-md border border-[#D8B56D]/40"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              <Building2 className={`w-4 h-4 ${activeTab === "property" ? "text-[#D8B56D]" : "text-slate-400"}`} />
              <span>Real Estate Portfolio (Aegis)</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ml-1 font-mono ${activeTab === "property" ? "bg-white/20 text-[#D8B56D]" : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300"}`}>
                2 Units
              </span>
            </button>

            <button
              onClick={() => setActiveTab("care")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer font-display ${
                activeTab === "care"
                  ? "bg-[#176B63] text-white shadow-md border border-teal-400/40"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              <HeartHandshake className={`w-4 h-4 ${activeTab === "care" ? "text-teal-200" : "text-slate-400"}`} />
              <span>Parent Health Hub (Sparsh)</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ml-1 font-mono ${activeTab === "care" ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300"}`}>
                Active
              </span>
            </button>
          </div>

          <div className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2 font-body px-2">
            <span className="text-slate-500 dark:text-slate-400">Dedicated Hub:</span>
            <strong className="text-[#0B1F3A] dark:text-white font-display">Bengaluru Concierge (+91 800-SUSTUNE)</strong>
          </div>
        </div>

        {/* TAB 1: PROPERTY PORTFOLIO */}
        {activeTab === "property" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* IMPROVEMENT 1: Compact Glassmorphic Portfolio Summary Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Metric 1: Monthly Gross Yield */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:border-[#D8B56D]/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">
                    Monthly Gross Yield
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#D8B56D]/15 dark:bg-[#D8B56D]/20 flex items-center justify-center text-[#D8B56D]">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                  ₹{totalMonthlyGrossRentINR.toLocaleString("en-IN")}{" "}
                  <span className="text-xs font-sans text-slate-400 dark:text-slate-400 font-normal">
                    (~$2,478)
                  </span>
                </div>
                <div className="text-[11px] text-[#176B63] dark:text-emerald-400 font-semibold mt-1.5 flex items-center gap-1 font-display">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {totalPropertiesCount} Properties • {occupiedPropertiesCount} of {totalPropertiesCount} Tenanted (100%)
                  </span>
                </div>
              </div>

              {/* Metric 2: Latest Remittance Payout */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:border-[#D8B56D]/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">
                    Latest Remitted Payout
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-emerald-950/60 flex items-center justify-center text-[#176B63] dark:text-emerald-400">
                    <CreditCard className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                  {latestRemittedDate}
                </div>
                <div className="text-[11px] text-[#176B63] dark:text-emerald-400 font-semibold mt-1.5 font-display flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Remitted to NRE (Oct Cycle in Escrow)</span>
                </div>
              </div>

              {/* Metric 3: Security Deposit in Escrow */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:border-[#D8B56D]/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">
                    Security Deposit in Escrow
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                  ₹{totalEscrowDepositINR.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 font-body">
                  Held in interest-bearing bank escrow
                </div>
              </div>

              {/* Metric 4: Next Scheduled Inspection */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:border-[#D8B56D]/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">
                    Next Scheduled Inspection
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <CalendarCheck className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                  {nextScheduledInspectionDate}
                </div>
                <div className="text-[11px] text-[#B79224] dark:text-[#F3DC87] font-semibold mt-1.5 font-display">
                  Q4 Digital Technical &amp; Pre-Monsoon Audit
                </div>
              </div>
            </div>

            {/* Preserved Property Cards Horizontal Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredProperties.map((prop) => {
                const isSelected = selectedPropertyId === prop.id;
                return (
                  <div
                    key={prop.id}
                    onClick={() => setSelectedPropertyId(prop.id)}
                    className={`rounded-2xl p-5 border transition-all cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? "bg-white dark:bg-[#0B1F3A] border-[#D8B56D] shadow-lg ring-2 ring-[#D8B56D]/30"
                        : "bg-white dark:bg-[#0B1F3A]/70 border-[#DCE3EA] dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-md"
                    }`}
                  >
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-display">
                          {prop.city}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-emerald-950/60 text-[#176B63] dark:text-emerald-300 border border-teal-200 dark:border-emerald-500/30 font-display">
                          {prop.status}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-[#0B1F3A] dark:text-white">
                        {prop.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-body">{prop.type}</p>
                      <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0B1F3A] dark:text-white">
                        <span className="font-display">{prop.rent}</span>
                        <span className="text-[#176B63] dark:text-emerald-400 text-[11px] font-semibold font-display">
                          Audit: {prop.inspectionScore.slice(0, 6)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Property Deep Detail Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Tenant & Rental Ledger (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Preserved Tenant Information Card */}
                <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#0B1F3A] dark:text-[#D8B56D]" />
                      <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                        Active Tenant Information
                      </h4>
                    </div>
                    <span className="text-xs text-[#176B63] dark:text-emerald-400 font-semibold flex items-center gap-1 font-display">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Compliant Tenancy</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
                    <div className="p-3.5 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10">
                      <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Primary Lessee</span>
                      <strong className="text-[#0B1F3A] dark:text-white text-sm block mt-0.5 font-display font-semibold">
                        {activeProperty.tenant.name}
                      </strong>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                        {activeProperty.tenant.employer}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10">
                      <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Verification Status</span>
                      <strong className="text-[#176B63] dark:text-emerald-400 text-xs block mt-0.5 font-display font-semibold">
                        {activeProperty.tenant.policeVerification}
                      </strong>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                        Credit Rating: {activeProperty.tenant.creditScore}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs text-slate-500 dark:text-slate-400 font-body">
                    <span>Lease Term: <strong className="text-[#0B1F3A] dark:text-white">Until {activeProperty.tenant.leaseEnd}</strong></span>
                    <span className="text-[#0B1F3A] dark:text-white font-semibold font-display">Digital Deed on File</span>
                  </div>
                </div>

                {/* IMPROVEMENT 2: Preserved Rental Escrow Ledger + Expandable Breakdown Details */}
                <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D8B56D]" />
                      <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                        Escrow Rental Remittance Ledger
                      </h4>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-display">Audited Payouts</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#F6F3ED] dark:bg-white/10 text-slate-600 dark:text-slate-300 uppercase font-bold text-[10px] border-b border-[#DCE3EA] dark:border-white/10 font-display">
                        <tr>
                          <th className="py-3 px-3.5">Billing Cycle</th>
                          <th className="py-3 px-3.5">Gross Rent</th>
                          <th className="py-3 px-3.5">Escrow Status</th>
                          <th className="py-3 px-3.5">Bank Ref</th>
                          <th className="py-3 px-3.5 text-right">Breakdown</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-white/10 font-body">
                        {activeProperty.rentLedger.map((row) => (
                          <tr key={row.month} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                            <td className="py-3 px-3.5 font-semibold text-[#0B1F3A] dark:text-white font-display">
                              {row.month}
                            </td>
                            <td className="py-3 px-3.5 font-bold text-[#0B1F3A] dark:text-white">
                              {row.amount}
                            </td>
                            <td className="py-3 px-3.5">
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#176B63] dark:text-emerald-300 bg-teal-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-teal-200 dark:border-emerald-500/30">
                                <Check className="w-3 h-3" />
                                {row.status}
                              </span>
                            </td>
                            <td className="py-3 px-3.5 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                              {row.ref}
                            </td>
                            <td className="py-3 px-3.5 text-right">
                              <button
                                onClick={() => setSelectedRemittance({ ...row, property: activeProperty })}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0B1F3A]/5 dark:bg-white/10 hover:bg-[#D8B56D]/20 text-[#0B1F3A] dark:text-[#D8B56D] text-[11px] font-semibold transition-colors font-display cursor-pointer"
                              >
                                <span>View Breakdown</span>
                                <ChevronRight className="w-3 h-3" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Micro Hint regarding Remittance Calculations */}
                  <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between border-t border-slate-100 dark:border-white/10">
                    <span>*Click &apos;View Breakdown&apos; for TDS Section 195 deductions &amp; Form 15CA status.</span>
                    <span className="font-mono text-[10px]">Zero Commission Markup</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Maintenance & 360° Audits (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* IMPROVEMENT 4: Extended Quarterly Technical Audit Card */}
                <div className="bg-[#0B1F3A] text-white rounded-2xl p-6 border-2 border-[#D8B56D]/40 shadow-xl space-y-4 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#D8B56D 1px, transparent 1px), linear-gradient(90deg, #D8B56D 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-xs font-bold text-[#D8B56D] uppercase tracking-wider font-display">
                        Quarterly 360° Technical Audit
                      </span>
                      <span className="text-xs text-slate-300 font-mono">{activeProperty.lastAudit}</span>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between">
                        <div className="text-[11px] text-slate-300 font-body">Property Audit Score</div>
                        <span className="text-[11px] text-emerald-400 font-mono">
                          Previous: {activeProperty.previousScore.slice(0, 6)} (+3 pts)
                        </span>
                      </div>
                      <div className="font-serif font-bold text-3xl text-[#D8B56D] mt-0.5">
                        {activeProperty.inspectionScore}
                      </div>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed font-body">
                        All electrical phases balanced. Plumbing pressure 3.2 bar. No seepage detected.
                        Italian marble polished.
                      </p>
                    </div>

                    {/* Extended Audit Parameters */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Next Scheduled Audit:</span>
                        <strong className="text-white font-mono">{activeProperty.nextInspection}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Critical Structural Seepage:</span>
                        <strong className="text-emerald-400">{activeProperty.inspectionDetails.criticalSeepage}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Recommended Action:</span>
                        <span className="text-slate-300 text-[11px] text-right truncate max-w-[180px]">
                          {activeProperty.inspectionDetails.recommendedActions}
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/aegis#inspection-report"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all font-display cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#D8B56D]" />
                      <span>View Interactive Sample Audit</span>
                    </Link>
                  </div>
                </div>

                {/* IMPROVEMENT 5: Enhanced Maintenance Log with SLA & Technician Details */}
                <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-[#0B1F3A] dark:text-[#D8B56D]" />
                      <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                        Maintenance Log
                      </h4>
                    </div>
                    <button
                      onClick={() => setShowNewTicketModal(true)}
                      className="text-[11px] font-bold text-[#0B1F3A] dark:text-[#D8B56D] hover:underline flex items-center gap-1 font-display cursor-pointer"
                    >
                      <PlusCircle className="w-3.5 h-3.5 text-[#D8B56D]" />
                      <span>New Request</span>
                    </button>
                  </div>

                  <div className="space-y-3 font-body">
                    {activeProperty.maintenanceTickets.map((tk) => (
                      <div
                        key={tk.id}
                        className="p-3.5 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 text-xs space-y-2 hover:border-[#D8B56D]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-[#0B1F3A] dark:text-[#F3DC87]">{tk.id}</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">({tk.category})</span>
                          </div>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-display ${
                              tk.status === "Resolved"
                                ? "bg-teal-50 dark:bg-emerald-950/60 text-[#176B63] dark:text-emerald-300 border border-teal-200 dark:border-emerald-500/30"
                                : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30"
                            }`}
                          >
                            {tk.status}
                          </span>
                        </div>
                        
                        <p className="text-slate-700 dark:text-slate-300 leading-snug">{tk.issue}</p>
                        
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-1 pt-1 border-t border-slate-200/60 dark:border-white/10">
                          <span>Team: <strong className="text-slate-700 dark:text-slate-200">{tk.technician}</strong></span>
                          <span>Cost: <strong className="text-[#0B1F3A] dark:text-white font-mono">{tk.cost}</strong></span>
                        </div>

                        <div className="text-[10px] text-slate-400 dark:text-slate-400 flex items-center justify-between">
                          <span>Date: {tk.date}</span>
                          <span className="text-[#176B63] dark:text-emerald-400 font-semibold">{tk.sla}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PARENT HEALTH HUB (SPARSH) */}
        {activeTab === "care" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Top Parent Summary Profile Card */}
            <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-[#176B63] dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-display">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Sparsh Dedicated Family Concierge</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#0B1F3A] dark:text-white">
                  {parentCareData.parents}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-body">
                  Residence: {parentCareData.city} · Primary Hospital: {parentCareData.primaryHospital}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="p-4 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 text-xs space-y-1 shrink-0 font-body">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Assigned Care Companion:</span>
                  <strong className="text-[#0B1F3A] dark:text-white text-sm block font-display font-semibold">
                    {parentCareData.careCompanion}
                  </strong>
                  <span className="text-[#176B63] dark:text-emerald-400 font-semibold text-[11px] flex items-center gap-1 font-display">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>On-Ground in Bengaluru · Active Service</span>
                  </span>
                </div>

                {/* Emergency Dispatch Simulation Trigger */}
                <button
                  onClick={() => setShowSosModal(true)}
                  className="px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-300 text-xs font-bold flex items-center gap-2 shadow-xs hover:bg-red-100 transition-colors font-display cursor-pointer"
                >
                  <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400 animate-pulse" />
                  <span>View 24/7 SOS Protocol</span>
                </button>
              </div>
            </div>

            {/* IMPROVEMENT 3: Sparsh Health Hub Overview Grid (4 Glassmorphic Panels) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Panel 1: Latest Recorded Vitals */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">
                    Latest Vitals Reading
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-emerald-950/60 flex items-center justify-center text-[#176B63] dark:text-emerald-400">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                  122/80 <span className="text-xs font-sans text-slate-400 font-normal">mmHg</span>
                </div>
                <div className="text-[11px] text-[#176B63] dark:text-emerald-400 font-semibold mt-1.5 flex items-center gap-1 font-display">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Optimal BP • Sugar 112 mg/dL (Controlled)</span>
                </div>
              </div>

              {/* Panel 2: Latest Care Visit */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">
                    Latest Completed Visit
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                  Yesterday, 4:15 PM
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1.5 font-body">
                  Home check-in, vital telemetry &amp; park walk
                </div>
              </div>

              {/* Panel 3: Upcoming Appointment */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">
                    Next Accompanied Escort
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                  Friday, 10:00 AM
                </div>
                <div className="text-[11px] text-amber-700 dark:text-amber-300 font-semibold mt-1.5 font-display">
                  Apollo Heart Institute OPD with Sister Mary
                </div>
              </div>

              {/* Panel 4: Medication Refill */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0B1F3A]/80 border border-[#DCE3EA] dark:border-white/10 shadow-xs hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-body">
                    Medication Refill Status
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Pill className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-serif text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                  Stocked (18 Days)
                </div>
                <div className="text-[11px] text-[#176B63] dark:text-emerald-400 font-semibold mt-1.5 font-display flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Blister Dispenser 100% Adherent</span>
                </div>
              </div>
            </div>

            {/* IMPROVEMENT 3: Companion Journal & Daily Medication Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Recent Family Journal Update & Audio Memo (7 cols) */}
              <div className="lg:col-span-7 bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#176B63] dark:text-emerald-400" />
                    <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                      Latest Companion Journal &amp; Family Update
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {parentCareData.latestVisitSummary.date}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <strong className="text-[#0B1F3A] dark:text-white font-display">
                      {parentCareData.latestVisitSummary.companion}
                    </strong>
                    <span className="text-[#176B63] dark:text-emerald-400 font-semibold text-[11px]">
                      {parentCareData.latestVisitSummary.vitalsStatus}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic font-body">
                    &ldquo;{parentCareData.latestVisitSummary.audioMemoNote}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setIsPlayingAudio(!isPlayingAudio);
                        showToast(isPlayingAudio ? "Audio memo paused." : "Playing audio debrief memo from Sister Mary Susan (3:42)...");
                      }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0B1F3A] dark:bg-[#D8B56D] text-white dark:text-[#0B1F3A] text-xs font-bold transition-all cursor-pointer font-display"
                    >
                      {isPlayingAudio ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Pause Audio Memo</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>Play Audio Memo ({parentCareData.latestVisitSummary.audioMemoLength})</span>
                        </>
                      )}
                    </button>

                    {isPlayingAudio && (
                      <span className="inline-flex items-center gap-1 text-xs text-[#176B63] dark:text-emerald-400 font-mono animate-pulse">
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Streaming voice log...</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Today's Smart Medication Tracker (5 cols) */}
              <div className="lg:col-span-5 bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Pill className="w-4 h-4 text-[#D8B56D]" />
                    <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                      Today&apos;s Medication Schedule
                    </h4>
                  </div>
                  <span className="text-[11px] text-[#176B63] dark:text-emerald-400 font-semibold font-display">
                    Smart Dispenser
                  </span>
                </div>

                <div className="space-y-2.5 font-body">
                  {parentCareData.medicationSchedule.map((med, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 flex items-center justify-between text-xs"
                    >
                      <div>
                        <strong className="text-[#0B1F3A] dark:text-white block font-display">
                          {med.slot}
                        </strong>
                        <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                          {med.medicines}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-display ${
                          med.verified
                            ? "bg-teal-50 dark:bg-emerald-950/60 text-[#176B63] dark:text-emerald-300 border border-teal-200 dark:border-emerald-500/30"
                            : "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30"
                        }`}
                      >
                        {med.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Care Hub Main Grid (Preserved Escorts, Telemetry Logs, Doctor Notes, Pharmacy Refills) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Scheduled Visits & Telemetry Logs (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Preserved Upcoming Scheduled Escorts */}
                <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D8B56D]" />
                      <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                        Upcoming Accompanied Visits
                      </h4>
                    </div>
                    <span className="text-xs text-[#176B63] dark:text-emerald-400 font-semibold font-display">
                      Chauffeur &amp; Escort Included
                    </span>
                  </div>

                  <div className="space-y-3 font-body">
                    {parentCareData.upcomingVisits.map((visit) => (
                      <div
                        key={visit.id}
                        className="p-4 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 text-xs space-y-2 hover:border-[#176B63]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[#0B1F3A] dark:text-white font-display">
                            {visit.type}
                          </span>
                          <span className="font-bold px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-emerald-950/60 text-[#176B63] dark:text-emerald-300 border border-teal-200 dark:border-emerald-500/30 text-[11px] font-display">
                            Confirmed
                          </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{visit.notes}</p>
                        <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-2">
                          <span>Schedule: <strong className="text-[#0B1F3A] dark:text-white">{visit.date} ({visit.time})</strong></span>
                          <span>Escort: <strong className="text-[#0B1F3A] dark:text-white">{visit.companionAssigned}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preserved Health Vitals Telemetry History */}
                <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-[#176B63] dark:text-emerald-400" />
                      <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                        Routine Wellbeing Telemetry Log
                      </h4>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-display">Bi-Weekly Tracking</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#F6F3ED] dark:bg-white/10 text-slate-600 dark:text-slate-300 uppercase font-bold text-[10px] border-b border-[#DCE3EA] dark:border-white/10 font-display">
                        <tr>
                          <th className="py-3 px-3.5">Date</th>
                          <th className="py-3 px-3.5">Blood Pressure</th>
                          <th className="py-3 px-3.5">Blood Glucose</th>
                          <th className="py-3 px-3.5">Resting Pulse</th>
                          <th className="py-3 px-3.5">Telemetry Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-white/10 font-body">
                        {parentCareData.vitalsLogs.map((log) => (
                          <tr key={log.date} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                            <td className="py-3 px-3.5 font-semibold text-[#0B1F3A] dark:text-white font-display">
                              {log.date}
                            </td>
                            <td className="py-3 px-3.5 font-bold text-[#0B1F3A] dark:text-white">{log.bp}</td>
                            <td className="py-3 px-3.5 text-slate-700 dark:text-slate-300">{log.sugar}</td>
                            <td className="py-3 px-3.5 text-slate-700 dark:text-slate-300">{log.pulse}</td>
                            <td className="py-3 px-3.5">
                              <span
                                className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full font-display ${
                                  log.status === "Normal"
                                    ? "bg-teal-50 dark:bg-emerald-950/60 text-[#176B63] dark:text-emerald-300 border border-teal-200 dark:border-emerald-500/30"
                                    : "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30"
                                }`}
                              >
                                {log.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column: Doctor Notes & Medication Replenishment (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Preserved Doctor Consultation Directive Notes */}
                <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#0B1F3A] dark:text-[#D8B56D]" />
                      <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                        Doctor Directives &amp; Audio Notes
                      </h4>
                    </div>
                    <span className="text-[11px] text-[#176B63] dark:text-emerald-400 font-semibold font-display">
                      Transcribed
                    </span>
                  </div>

                  <div className="space-y-3 font-body">
                    {parentCareData.consultationNotes.map((note) => (
                      <div
                        key={note.id}
                        className="p-3.5 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 text-xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <strong className="text-[#0B1F3A] dark:text-white font-display">{note.doctor}</strong>
                          <span className="text-[10px] text-slate-400 dark:text-slate-400 font-mono">{note.date}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{note.summary}</p>
                        <div className="flex items-center justify-between text-[11px] text-[#0B1F3A] dark:text-white pt-1">
                          <span className="text-slate-500 dark:text-slate-400">Hospital: {note.hospital}</span>
                          <span
                            onClick={() => {
                              setIsPlayingAudio(!isPlayingAudio);
                              showToast(isPlayingAudio ? "Audio memo paused." : `Playing directive memo from ${note.doctor} (${note.audioLength})...`);
                            }}
                            className="font-semibold cursor-pointer text-[#0B1F3A] dark:text-[#F3DC87] hover:text-[#D8B56D] transition-colors font-display"
                          >
                            ▶ Play Audio Log ({note.audioLength})
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preserved Medication Delivery Tracking */}
                <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-2xl p-6 border border-[#DCE3EA] dark:border-white/10 shadow-sm space-y-4 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Pill className="w-4 h-4 text-[#D8B56D]" />
                      <h4 className="font-serif font-bold text-lg text-[#0B1F3A] dark:text-white">
                        Prescription Replenishment
                      </h4>
                    </div>
                    <span className="text-[11px] text-[#176B63] dark:text-emerald-400 font-semibold font-display">
                      Verified Pharmacy
                    </span>
                  </div>

                  <div className="space-y-3 font-body">
                    {parentCareData.medicineDeliveries.map((med) => (
                      <div
                        key={med.id}
                        className="p-3.5 rounded-xl bg-[#F6F3ED] dark:bg-white/5 border border-[#DCE3EA] dark:border-white/10 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#0B1F3A] dark:text-white font-display">{med.pharmacy}</span>
                          <span className="text-[10px] text-slate-400 dark:text-slate-400 font-mono">{med.date}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">{med.items}</p>
                        <span className="text-[#176B63] dark:text-emerald-400 font-semibold text-[11px] block pt-1 font-display">
                          ✓ {med.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* IMPROVEMENT 2 MODAL: Detailed Remittance Breakdown Modal */}
      {selectedRemittance && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedRemittance(null)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-8 border border-[#DCE3EA] dark:border-white/15 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8B56D] font-display">
                  Escrow Reconciliation
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B1F3A] dark:text-white mt-0.5">
                  {selectedRemittance.month} Remittance Breakdown
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-body">
                  {selectedRemittance.property?.title} ({selectedRemittance.property?.city})
                </p>
              </div>
              <button
                onClick={() => setSelectedRemittance(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reconciled Financial Figures */}
            <div className="space-y-3 text-xs sm:text-sm font-body">
              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span>Monthly Gross Rent Collected:</span>
                <strong className="text-[#0B1F3A] dark:text-white font-mono">
                  ₹{selectedRemittance.grossINR?.toLocaleString("en-IN") || selectedRemittance.amount}
                </strong>
              </div>

              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span>TDS Deducted at Source (Section 195 - 31.2%):</span>
                <span className="font-semibold text-red-600 dark:text-red-400 font-mono">
                  -₹{selectedRemittance.tdsINR?.toLocaleString("en-IN") || "35,880"}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span>Society Maintenance Retained:</span>
                <span className="text-slate-500 dark:text-slate-400">
                  ₹0 (Directly settled by lessee)
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span>Sustune Care Stewardship Fee:</span>
                <span className="text-[#176B63] dark:text-emerald-400 font-semibold font-display">
                  Included in Annual Retainer
                </span>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/15 flex justify-between items-center text-sm sm:text-base">
                <span className="font-bold text-[#0B1F3A] dark:text-white font-display">
                  Net Remitted to NRE Account:
                </span>
                <span className="font-serif text-xl font-bold text-[#176B63] dark:text-emerald-400 font-mono">
                  ₹{selectedRemittance.netINR?.toLocaleString("en-IN") || "79,120"}
                </span>
              </div>
            </div>

            {/* Bank Reference & Form 15CA Dossier */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2 text-slate-600 dark:text-slate-300 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Destination:</span>
                <strong className="text-[#0B1F3A] dark:text-white">
                  {selectedRemittance.destinationAccount || "HDFC NRE A/C ending in ...9041"}
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Bank UTR Ref:</span>
                <span className="font-semibold text-[#0B1F3A] dark:text-white">
                  {selectedRemittance.utrNumber || selectedRemittance.ref}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Filing Status:</span>
                <span className="text-[#176B63] dark:text-emerald-400 font-bold">
                  {selectedRemittance.form15caStatus || "Form 15CA/CB Generated & Stamped ✓"}
                </span>
              </div>
            </div>

            {/* Download Buttons & Close */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => showToast("Sample Form 15CA generated for demo demonstration. In production, this is digitally signed by your Chartered Accountant.")}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#0B1F3A] dark:bg-[#D8B56D] text-white dark:text-[#0B1F3A] text-xs font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all font-display cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Form 15CA (Demo)</span>
              </button>

              <button
                onClick={() => showToast("Sample monthly escrow statement downloaded (Demo only).")}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-[#0B1F3A] dark:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-200 dark:border-white/15 font-display cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Monthly Statement (Demo)</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-400 dark:text-slate-400 text-center font-body">
              *Illustrative sample breakdown for demonstration. Real remittances are backed by Chartered Accountant Form 15CB certifications.
            </p>
          </div>
        </div>
      )}

      {/* IMPROVEMENT 5 MODAL: New Maintenance Request Modal */}
      {showNewTicketModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowNewTicketModal(false)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-8 border border-[#DCE3EA] dark:border-white/15 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8B56D] font-display">
                  Corporate SLA Dispatch
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B1F3A] dark:text-white mt-0.5">
                  Submit Maintenance Request
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-body">
                  Zero commission markup on verified contractor invoices
                </p>
              </div>
              <button
                onClick={() => setShowNewTicketModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleTicketSubmit} className="space-y-4 text-xs font-body">
              <div>
                <label className="block text-slate-600 dark:text-slate-300 mb-1 font-semibold font-display">
                  Property Location
                </label>
                <select
                  value={ticketForm.propertyId}
                  onChange={(e) => setTicketForm({ ...ticketForm, propertyId: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-white/15 bg-[#F6F3ED] dark:bg-[#071426] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D8B56D]"
                >
                  {properties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.city})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 dark:text-slate-300 mb-1 font-semibold font-display">
                    Category
                  </label>
                  <select
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-white/15 bg-[#F6F3ED] dark:bg-[#071426] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D8B56D]"
                  >
                    <option value="Plumbing & Solar">Plumbing &amp; Solar</option>
                    <option value="HVAC & Electrical">HVAC &amp; Electrical</option>
                    <option value="Civil & Waterproofing">Civil &amp; Waterproofing</option>
                    <option value="Carpentry & Locks">Carpentry &amp; Security</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-slate-300 mb-1 font-semibold font-display">
                    Priority / SLA
                  </label>
                  <select
                    value={ticketForm.priority}
                    onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-white/15 bg-[#F6F3ED] dark:bg-[#071426] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D8B56D]"
                  >
                    <option value="Routine">Routine (48h Resolution)</option>
                    <option value="Urgent">Urgent (12h Dispatch)</option>
                    <option value="Preventive">Scheduled Seasonal Audit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-300 mb-1 font-semibold font-display">
                  Describe Issue or Maintenance Task
                </label>
                <textarea
                  rows={3}
                  value={ticketForm.issue}
                  onChange={(e) => setTicketForm({ ...ticketForm, issue: e.target.value })}
                  placeholder="e.g. Master bedroom Daikin AC fan noise check, water filter cartridge replacement..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-white/15 bg-[#F6F3ED] dark:bg-[#071426] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D8B56D]"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] text-slate-500 dark:text-slate-400">
                <strong>Pre-approval notice:</strong> Expenses under ₹5,000 threshold are executed immediately per client agreement. Higher estimates require your explicit digital sign-off.
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#0B1F3A] dark:bg-[#D8B56D] text-white dark:text-[#0B1F3A] text-xs font-bold hover:brightness-110 transition-all font-display cursor-pointer"
                >
                  Submit Ticket (Demo)
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewTicketModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-white/15 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-display cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* IMPROVEMENT 3 MODAL: Sparsh 24/7 Rapid SOS Protocol Modal */}
      {showSosModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowSosModal(false)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-8 border border-[#DCE3EA] dark:border-white/15 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 font-display">
                  Emergency Healthcare Protocol
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B1F3A] dark:text-white mt-0.5">
                  Sparsh 24/7 Rapid SOS Dispatch
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-body">
                  Pre-authorized casualty admission &amp; clinical escort
                </p>
              </div>
              <button
                onClick={() => setShowSosModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs font-body">
              <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/30 space-y-1">
                <strong className="text-red-800 dark:text-red-300 block font-display">
                  Simulated Emergency Sequence
                </strong>
                <p className="text-red-700 dark:text-red-300 text-[11px] leading-relaxed">
                  In an actual emergency, tapping the SOS trigger initiates a high-priority dispatch alert to our 24/7 medical desk in Bengaluru.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-[#176B63] dark:text-emerald-300 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    1
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Sister Mary Susan</strong> is alerted on-ground and dispatched immediately to the parents&apos; residence in Indiranagar.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-[#176B63] dark:text-emerald-300 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    2
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Casualty department at <strong>Apollo Hospital Bannerghatta Road</strong> is pre-alerted with digital records and pre-authorized admission guarantee.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-[#176B63] dark:text-emerald-300 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    3
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Real-time WhatsApp &amp; voice debrief patched to overseas sponsor in <strong>London, UK</strong> with emergency physician summary.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/918007878863?text=Hi%20Sustune%20Care%2C%20this%20is%20a%20priority%20inquiry%20regarding%20Sparsh%20emergency%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#176B63] to-[#0e4842] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all font-display cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact 24/7 NRI Careline</span>
              </a>

              <button
                type="button"
                onClick={() => setShowSosModal(false)}
                className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-white/15 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-display cursor-pointer"
              >
                Close Simulation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-2xl bg-[#0B1F3A] text-white border border-[#D8B56D]/40 shadow-2xl animate-in slide-in-from-bottom-3 duration-200 text-xs space-y-1">
          <div className="flex items-center gap-2 font-display font-bold text-[#F3DC87]">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>Client Console Notification</span>
          </div>
          <p className="text-slate-200 leading-snug font-body">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
