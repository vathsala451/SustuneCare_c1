import React from "react";
import type { Metadata } from "next";
import { BackToHomeButton } from "@/components/ui/BackToHomeButton";
import { PortalDashboard } from "@/components/portal/PortalDashboard";

export const metadata: Metadata = {
  title: "Client Portal Interactive Demo | Sustune Care Dual-Shield Dashboard",
  description:
    "Interactive demonstration of the Sustune Care Dual-Shield Client Portal. Experience how global NRIs review property rental ledgers, 360° inspection reports, parent vitals telemetry, and doctor appointment logs in real time.",
};

export default function PortalPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackToHomeButton currentPageTitle="Interactive Client Portal Simulation" />
      <PortalDashboard />
    </div>
  );
}
