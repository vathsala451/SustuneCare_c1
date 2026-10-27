import React from "react";
import type { Metadata } from "next";
import { BackToHomeButton } from "@/components/ui/BackToHomeButton";
import { SparshHero } from "@/components/sparsh/SparshHero";
import { SparshPromoVideoSection } from "@/components/sparsh/SparshPromoVideoSection";
import { SparshPillars } from "@/components/sparsh/SparshPillars";
import { CarePlanConfigurator } from "@/components/sparsh/CarePlanConfigurator";
import { SparshCareTeam } from "@/components/sparsh/SparshCareTeam";
import { SparshAssessmentCTA } from "@/components/sparsh/SparshAssessmentCTA";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Sparsh Elder Care | NRI Parental Healthcare Concierge in India",
  description:
    "Institutional, compassionate healthcare concierge and companionship for aging parents in Bengaluru, Hyderabad, and Delhi NCR. 24/7 Rapid SOS, doctor escorts, medication sorting, and weekly visits.",
};

export default function SparshPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Universal Back to Home Navigation Bar */}
      <BackToHomeButton currentPageTitle="Sparsh Elder Care Concierge" />

      {/* 1. Hero with Emergency & Hospital Support Metrics */}
      <SparshHero />

      {/* Dedicated Promotional Video Section */}
      <SparshPromoVideoSection />

      {/* 2. Six Pillars of Care with Section F: Medication & Care Continuity */}
      <SparshPillars />

      {/* 3. Section B: Expanded Interactive Care Configurator with Recovered Dynamic Formula */}
      <CarePlanConfigurator />

      {/* 4. Section C: Meet Your Parents' Care Team (Editorial Profiles) */}
      <SparshCareTeam />

      {/* 5. Section D: Dedicated Parental Assessment & Direct WhatsApp CTA */}
      <SparshAssessmentCTA />

      {/* 6. Preserved Dual-Shield Consultation & Strategy CTA */}
      <CTASection />
    </div>
  );
}
