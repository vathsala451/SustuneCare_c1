import React from "react";
import type { Metadata } from "next";
import { BackToHomeButton } from "@/components/ui/BackToHomeButton";
import { AegisHero } from "@/components/aegis/AegisHero";
import { AegisPromoVideoSection } from "@/components/aegis/AegisPromoVideoSection";
import { AegisServices } from "@/components/aegis/AegisServices";
import { AegisPricing } from "@/components/aegis/AegisPricing";
import { SampleInspectionReport } from "@/components/aegis/SampleInspectionReport";
import { PropertyEvaluationSection } from "@/components/aegis/PropertyEvaluationSection";

export const metadata: Metadata = {
  title: "Aegis Property Management | Institutional NRI Real Estate Stewardship",
  description:
    "Protect, rent, and preserve your luxury residential and commercial property in Bengaluru, Hyderabad, and Delhi NCR. Vetted corporate tenants, escrow rent collection, and quarterly 80-point inspection audits.",
  keywords: [
    "NRI Property Management India",
    "Aegis Property Stewardship",
    "Real Estate Escrow India",
    "Tenant Scouting Bengaluru Hyderabad",
    "Forensic 80-point Property Inspection",
    "Form 15CA CB NRI Tax Remittance",
  ],
};

export default function AegisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Universal Back to Home Navigation Bar */}
      <BackToHomeButton currentPageTitle="Aegis Property Management" />

      <AegisHero />
      <AegisPromoVideoSection />
      <AegisServices />
      <AegisPricing />
      <SampleInspectionReport />
      <PropertyEvaluationSection />
    </div>
  );
}
