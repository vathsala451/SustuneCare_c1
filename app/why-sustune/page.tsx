import React from "react";
import type { Metadata } from "next";
import { BackToHomeButton } from "@/components/ui/BackToHomeButton";
import { WhySustune } from "@/components/home/WhySustune";
import { GovernanceSection } from "@/components/home/GovernanceSection";
import { DistanceChallenge } from "@/components/home/DistanceChallenge";
import { CoverageSection } from "@/components/home/CoverageSection";
import { NRISurveySection } from "@/components/home/NRISurveySection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Why Sustune Care | Institutional Governance & NRI Diaspora Trust",
  description:
    "Institutional stewardship and legal escrow governance protecting NRI properties and aging parents in Bengaluru, Hyderabad, Delhi NCR, and beyond.",
};

export default function WhySustunePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Universal Back to Home Navigation Bar */}
      <BackToHomeButton currentPageTitle="Why Sustune & Institutional Governance" />

      {/* Core Institutional Trust & Why Sustune Architecture */}
      <WhySustune />

      {/* Sovereign Legal & Banking Governance */}
      <GovernanceSection />

      {/* The Distance Challenge for Overseas NRIs */}
      <DistanceChallenge />

      {/* Geographic Operating Coverage in India */}
      <CoverageSection />

      {/* Diaspora Survey Data & Confidence Metrics */}
      <NRISurveySection />

      {/* Direct Consultation Intake */}
      <CTASection />
    </div>
  );
}
