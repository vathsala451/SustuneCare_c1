"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Building2,
  HeartHandshake,
  Layers,
  Clock,
  ShieldCheck,
  Send,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import {
  validateConsultationForm,
  ConsultationFormData,
  ValidationErrors,
} from "@/lib/validation";
import {
  submitConsultationRequest,
  buildWhatsAppLink,
  SubmissionResult,
} from "@/lib/contact-service";

export function ConsultationForm() {
  const searchParams = useSearchParams();
  const initialInterest = (searchParams.get("interest") as any) || "combined";

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    nriLocation: "USA",
    cityRequired: "Bengaluru",
    serviceInterest:
      initialInterest === "dual"
        ? "combined"
        : ["aegis", "sparsh", "combined"].includes(initialInterest)
        ? initialInterest
        : "combined",
    preferredContact: "whatsapp",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  const countryCodeOptions = [
    { code: "+1", label: "🇺🇸 / 🇨🇦 USA/Canada (+1)" },
    { code: "+44", label: "🇬🇧 UK (+44)" },
    { code: "+971", label: "🇦🇪 UAE (+971)" },
    { code: "+61", label: "🇦🇺 Australia (+61)" },
    { code: "+65", label: "🇸🇬 Singapore (+65)" },
    { code: "+91", label: "🇮🇳 India (+91)" },
    { code: "other", label: "Other Country" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field-specific error as user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateConsultationForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const result = await submitConsultationRequest(formData);
      setSubmissionResult(result);
    } catch (err) {
      setSubmissionResult({
        success: false,
        isDemoMode: true,
        message:
          "Network error while communicating with intake service. Please retry or contact us directly via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = buildWhatsAppLink(
    `Hello Sustune Care Concierge. My name is ${
      formData.fullName || "an NRI client"
    } living in ${formData.nriLocation}. I am interested in ${
      formData.serviceInterest
    } services in ${formData.cityRequired}.`
  );

  return (
    <div className="py-16 lg:py-24 bg-[#F6F3ED] dark:bg-[#061224] border-b border-[#DCE3EA] dark:border-white/10 text-[#263548] dark:text-slate-100 relative overflow-hidden transition-colors">
      {/* Subtle Architectural Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/20 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span className="font-display uppercase tracking-widest text-[11px]">CONFIDENTIAL NRI STRATEGY INTAKE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            Schedule Your NRI Consultation
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-body">
            Discuss your ancestral property and family elder care needs with our senior
            diaspora concierge team. We accommodate time zones across the Americas, Europe,
            Middle East, and Asia-Pacific.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Reassuring Support Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#0B1F3A] text-white border-2 border-[#D8B56D]/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#D8B56D 1px, transparent 1px), linear-gradient(90deg, #D8B56D 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8B56D] block mb-1 font-display">
                    Direct Concierge Support
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white">
                    Why Schedule a Call?
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-body">
                    Every family situation is nuanced. During this 20-minute call, we will:
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-200 font-body">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0 mt-0.5" />
                    <span>Review property location, vacancy state, and tenancy status.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0 mt-0.5" />
                    <span>Understand parents&apos; routine medications and hospital preferences.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0 mt-0.5" />
                    <span>Provide an itemized scope and transparent pricing tier.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B56D] shrink-0 mt-0.5" />
                    <span>Answer legal, tax (Form 15CA/CB), and medical escort questions.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-slate-300 font-body">
                  <div className="flex items-center gap-2.5">
                    <PhoneCall className="w-4 h-4 text-[#D8B56D] shrink-0" />
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white font-semibold transition-colors">
                      {siteConfig.phone} (24/7 NRI Careline)
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#D8B56D] shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#D8B56D] shrink-0" />
                    <span>Desks in {siteConfig.activeHubs.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-2xl p-6 bg-white dark:bg-[#0B1F3A]/70 border border-[#DCE3EA] dark:border-white/10 shadow-sm text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-display">
                Prefer Immediate Messaging?
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                Connect directly with our WhatsApp concierge desk right now for quick inquiries.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#176B63] to-[#0e4842] hover:brightness-105 text-white font-bold text-xs shadow-md transition-all font-display cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accessible Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0B1F3A]/80 rounded-3xl p-6 sm:p-10 border border-[#DCE3EA] dark:border-white/10 shadow-xl transition-colors">
            {/* Success / Feedback Banner */}
            {submissionResult && (
              <div
                className={`mb-6 p-4 rounded-xl text-xs leading-relaxed border ${
                  submissionResult.success
                    ? "bg-teal-50 dark:bg-emerald-950/60 text-teal-950 dark:text-emerald-200 border-teal-300 dark:border-emerald-500/40"
                    : "bg-red-50 dark:bg-red-950/60 text-red-950 dark:text-red-200 border-red-300 dark:border-red-500/40"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {submissionResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-[#176B63] dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-bold text-sm font-display">
                      {submissionResult.success
                        ? "Consultation Request Received"
                        : "Submission Error"}
                    </p>
                    <p className="font-body">{submissionResult.message}</p>
                    {submissionResult.referenceId && (
                      <p className="text-[11px] font-mono text-slate-600 dark:text-slate-300 mt-1">
                        Reference Code: <strong>{submissionResult.referenceId}</strong>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Service Interest Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white font-display">
                  What service do you require? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center gap-1.5 ${
                      formData.serviceInterest === "aegis"
                        ? "bg-[#D8B56D]/15 dark:bg-[#D8B56D]/20 border-[#D8B56D] text-[#0B1F3A] dark:text-[#F3DC87] font-bold shadow-sm"
                        : "bg-[#F6F3ED] dark:bg-white/5 border-[#DCE3EA] dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="aegis"
                      checked={formData.serviceInterest === "aegis"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <Building2 className="w-4 h-4 text-[#D8B56D]" />
                    <span className="text-xs font-display">Aegis Property</span>
                  </label>

                  <label
                    className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center gap-1.5 ${
                      formData.serviceInterest === "sparsh"
                        ? "bg-teal-50 dark:bg-emerald-950/60 border-[#176B63] dark:border-emerald-400 text-[#176B63] dark:text-emerald-300 font-bold shadow-sm"
                        : "bg-[#F6F3ED] dark:bg-white/5 border-[#DCE3EA] dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="sparsh"
                      checked={formData.serviceInterest === "sparsh"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <HeartHandshake className="w-4 h-4 text-[#176B63] dark:text-emerald-400" />
                    <span className="text-xs font-display">Sparsh Elder Care</span>
                  </label>

                  <label
                    className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center gap-1.5 ${
                      formData.serviceInterest === "combined"
                        ? "bg-[#0B1F3A]/10 dark:bg-white/15 border-[#0B1F3A] dark:border-white/30 text-[#0B1F3A] dark:text-white font-bold shadow-sm"
                        : "bg-[#F6F3ED] dark:bg-white/5 border-[#DCE3EA] dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="combined"
                      checked={formData.serviceInterest === "combined"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <Layers className="w-4 h-4 text-[#0B1F3A] dark:text-[#D8B56D]" />
                    <span className="text-xs font-display">Dual-Shield (Both)</span>
                  </label>
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white font-display"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Rajeshwari H. M."
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 font-body transition-all ${
                    errors.fullName
                      ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                      : "border-[#DCE3EA] dark:border-white/15 focus:ring-[#D8B56D] focus:border-[#D8B56D] bg-[#F6F3ED]/40 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 dark:text-red-400 font-medium font-body">{errors.fullName}</p>
                )}
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white font-display"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 font-body transition-all ${
                      errors.email
                        ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                        : "border-[#DCE3EA] dark:border-white/15 focus:ring-[#D8B56D] focus:border-[#D8B56D] bg-[#F6F3ED]/40 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 dark:text-red-400 font-medium font-body">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white font-display"
                  >
                    Contact Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="px-2.5 py-2.5 rounded-xl text-xs border border-[#DCE3EA] dark:border-white/15 bg-[#F6F3ED] dark:bg-[#071426] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D8B56D] font-body"
                    >
                      {countryCodeOptions.map((opt) => (
                        <option key={opt.code} value={opt.code} className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 408 555 0199"
                      disabled={isSubmitting}
                      className={`flex-1 px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 font-body transition-all ${
                        errors.phone
                          ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                          : "border-[#DCE3EA] dark:border-white/15 focus:ring-[#D8B56D] focus:border-[#D8B56D] bg-[#F6F3ED]/40 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 dark:text-red-400 font-medium font-body">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* NRI Location & Target City in India */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="nriLocation"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white font-display"
                  >
                    Your Country of Residence *
                  </label>
                  <select
                    id="nriLocation"
                    name="nriLocation"
                    value={formData.nriLocation}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#DCE3EA] dark:border-white/15 bg-white dark:bg-[#071426] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D8B56D] font-body"
                  >
                    <option value="USA" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">United States (USA)</option>
                    <option value="UK" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">United Kingdom (UK)</option>
                    <option value="UAE" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">United Arab Emirates (UAE)</option>
                    <option value="AUS" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Australia</option>
                    <option value="CAN" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Canada</option>
                    <option value="SGP" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Singapore</option>
                    <option value="Other" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Other Country</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="cityRequired"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white font-display"
                  >
                    Indian City Where Support is Needed *
                  </label>
                  <select
                    id="cityRequired"
                    name="cityRequired"
                    value={formData.cityRequired}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#DCE3EA] dark:border-white/15 bg-white dark:bg-[#071426] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D8B56D] font-body"
                  >
                    <option value="Bengaluru" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Bengaluru</option>
                    <option value="Hyderabad" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Hyderabad</option>
                    <option value="Delhi NCR" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Delhi NCR (Gurugram / Noida / Delhi)</option>
                    <option value="Chennai" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Chennai</option>
                    <option value="Mumbai" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Mumbai / Pune</option>
                    <option value="Other" className="bg-white dark:bg-[#0B1F3A] text-slate-900 dark:text-white">Other City in India</option>
                  </select>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white font-display">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "whatsapp", label: "WhatsApp" },
                    { id: "phone", label: "Phone Call" },
                    { id: "video", label: "Zoom Call" },
                    { id: "email", label: "Email" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`p-2.5 rounded-xl border text-center text-xs font-medium cursor-pointer transition-all font-display ${
                        formData.preferredContact === method.id
                          ? "bg-[#0B1F3A] dark:bg-[#D8B56D] text-white dark:text-[#0B1F3A] font-bold border-[#0B1F3A] dark:border-[#D8B56D] shadow-sm"
                          : "bg-[#F6F3ED] dark:bg-white/5 border-[#DCE3EA] dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method.id}
                        checked={formData.preferredContact === method.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span>{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Optional Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white font-display"
                >
                  Optional Details or Family Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share any specific property location, parental health details, or preferred call time..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#DCE3EA] dark:border-white/15 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] focus:border-[#D8B56D] bg-[#F6F3ED]/40 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 font-body transition-all"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-1">
                <label className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer font-body">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="mt-0.5 rounded text-[#D8B56D] focus:ring-[#D8B56D] w-4 h-4 cursor-pointer"
                  />
                  <span>
                    I consent to Sustune Care storing my contact details solely for scheduling my
                    NRI consultation and delivering service updates under the privacy notice.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-red-600 dark:text-red-400 font-medium pl-6 font-body">{errors.consent}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#c9a65d] hover:brightness-105 text-[#0B1F3A] font-bold text-sm shadow-xl transition-all cursor-pointer font-display disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#0B1F3A]" />
                      <span>Validating &amp; Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#0B1F3A]" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-2 font-body">
                  No spam · Your contact details are kept strictly confidential under institutional governance.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
