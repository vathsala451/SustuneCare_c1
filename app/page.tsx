import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { DualServiceShowcase } from "@/components/home/DualServiceShowcase";
import { CareEstimator } from "@/components/home/CareEstimator";
import { PortalTransparency } from "@/components/home/PortalTransparency";
import { WhySustuneGateway } from "@/components/home/WhySustuneGateway";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Sustune Care | Institutional Property & Parental Elder Care for NRIs",
  description:
    "Care for your property. Care for your parents. Peace of mind for you. Serving global NRIs across the USA, UK, UAE, Australia, and Singapore with verified property management (Aegis) and compassionate elder care (Sparsh) in India.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Dual-Hero Interactive Gateway */}
      <HeroSection />

      {/* 2. Diaspora Trust & Verified Metrics Strip */}
      <TrustStrip />

      {/* 3. Dual Service Showcase: Direct Click-Through to Aegis and Sparsh Pages */}
      <DualServiceShowcase />

      {/* 4. Interactive Fee & Care Estimator Calculator */}
      <CareEstimator />

      {/* 5. Client Portal Transparency & Live Demo Link */}
      <PortalTransparency />

      {/* 6. Institutional Governance & Why Sustune Gateway Link */}
      <WhySustuneGateway />

      {/* 7. Diaspora Client Testimonials */}
      <TestimonialsSection />

      {/* 8. Direct NRI Consultation CTA */}
      <CTASection />
    </div>
  );
}
