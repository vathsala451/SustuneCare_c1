import React, { Suspense } from "react";
import type { Metadata } from "next";
import { BackToHomeButton } from "@/components/ui/BackToHomeButton";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Book an NRI Consultation | Sustune Care Property & Family Support",
  description:
    "Schedule a confidential strategy call with our diaspora concierge desk. Review property stewardship (Aegis) and parental elder care (Sparsh) options across Bengaluru, Hyderabad, and Delhi NCR.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackToHomeButton currentPageTitle="Book an NRI Consultation" />
      <Suspense
        fallback={
          <div className="py-24 text-center text-sm text-slate-500 font-semibold">
            Loading consultation form...
          </div>
        }
      >
        <ConsultationForm />
      </Suspense>
    </div>
  );
}
