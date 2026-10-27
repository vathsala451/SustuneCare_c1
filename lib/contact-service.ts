import { siteConfig } from "./site-config";
import { ConsultationFormData } from "./validation";

export interface SubmissionResult {
  success: boolean;
  isDemoMode: boolean;
  referenceId?: string;
  message: string;
}

/**
 * Clean abstraction for lead submission.
 * Connects to future API endpoint or CRM webhook if NEXT_PUBLIC_LEAD_API_URL is configured.
 * Gracefully provides a transparent demo mode response if running without backend.
 */
export async function submitConsultationRequest(
  data: ConsultationFormData
): Promise<SubmissionResult> {
  const apiUrl = process.env.NEXT_PUBLIC_LEAD_API_URL;

  // If a live API is configured, forward the request
  if (apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        isDemoMode: false,
        referenceId: result.referenceId || `SC-${Date.now().toString().slice(-6)}`,
        message: "Your consultation request has been securely received by our concierge desk.",
      };
    } catch (err) {
      console.error("Consultation submission error:", err);
      return {
        success: false,
        isDemoMode: false,
        message:
          "Unable to connect to the intake server. Please try again or connect directly via WhatsApp.",
      };
    }
  }

  // Demonstration mode: simulate realistic async response without pretending it was sent to an active server
  await new Promise((resolve) => setTimeout(resolve, 900));

  const demoRef = `DEMO-SC-${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    success: true,
    isDemoMode: true,
    referenceId: demoRef,
    message:
      "Interactive Demonstration: Consultation form validated successfully. In live production, this dispatches to our CRM and triggers an immediate concierge callback.",
  };
}

/**
 * Builds an official WhatsApp chat link with pre-filled message using configured business number.
 */
export function buildWhatsAppLink(customNote?: string): string {
  const phone = siteConfig.whatsappNumber;
  const defaultText =
    "Hello Sustune Care Concierge. I am an NRI interested in scheduling a consultation for property and family care in India.";
  const text = encodeURIComponent(customNote || defaultText);
  return `https://wa.me/${phone}?text=${text}`;
}
