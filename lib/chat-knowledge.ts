/**
 * Sustune Care - Grounded AI Knowledge Base & Intent Engine
 * 
 * Verified knowledge repository and grounded matching engine.
 * Used by /api/chat to supply prompt context to Google Gemini
 * and provide deterministic, zero-hallucination fallback responses.
 */

export interface ChatAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  external?: boolean;
}

export interface ChatReply {
  reply: string;
  actions?: ChatAction[];
  suggestedQuestions?: string[];
  source: "gemini" | "knowledge_base";
}

export interface PageSuggestedQuestion {
  question: string;
  category: "sparsh" | "aegis" | "general" | "contact";
}

export const PAGE_SUGGESTED_QUESTIONS: Record<string, PageSuggestedQuestion[]> = {
  "/": [
    { question: "What services does Sustune offer?", category: "general" },
    { question: "How does Dual-Shield protection work?", category: "general" },
    { question: "What are the fees for property & elder care?", category: "general" },
    { question: "How can I book a free NRI consultation?", category: "contact" },
  ],
  "/sparsh": [
    { question: "What services does Sparsh Elder Care offer?", category: "sparsh" },
    { question: "How fast is the 24/7 Rapid SOS response?", category: "sparsh" },
    { question: "Can you escort my parents to doctor appointments?", category: "sparsh" },
    { question: "What are the Sparsh care plans and pricing?", category: "sparsh" },
  ],
  "/aegis": [
    { question: "What property management services does Aegis provide?", category: "aegis" },
    { question: "How is rental income collected and remitted?", category: "aegis" },
    { question: "What does the 80-point property inspection include?", category: "aegis" },
    { question: "What are the property management tiers and fees?", category: "aegis" },
  ],
  "/why-sustune": [
    { question: "How does Sustune ensure legal & escrow governance?", category: "general" },
    { question: "Which cities in India do you operate in?", category: "general" },
    { question: "How do overseas families receive real-time updates?", category: "general" },
    { question: "How can I book an NRI consultation?", category: "contact" },
  ],
  "/contact": [
    { question: "How does the NRI consultation process work?", category: "contact" },
    { question: "What international time zones do you support?", category: "contact" },
    { question: "Can I connect with the concierge on WhatsApp?", category: "contact" },
    { question: "What are the active city desks in India?", category: "contact" },
  ],
  "/portal/login": [
    { question: "What data is visible in the Client Portal?", category: "general" },
    { question: "How are doctor clinical notes shared with NRIs?", category: "sparsh" },
    { question: "Can I view rental remittances and repair photo logs?", category: "aegis" },
    { question: "How do I get access to my client dashboard?", category: "contact" },
  ],
};

/**
 * Core Verified Facts grounded strictly in approved Sustune Care documentation.
 */
export const SUSTUNE_SYSTEM_KNOWLEDGE = `
You are the official AI Concierge for Sustune Care (Sustune Care Services Pvt. Ltd.).
Tagline: "Protected Care. Sustained Dignity."
Headline: "Care for your property. Care for your parents. Peace of mind for you."
Primary Focus: Solving the "Anxiety of Distance" for Non-Resident Indians (NRIs) across USA, UK, UAE, Canada, Australia, and Singapore.

OFFICIAL CHANNELS & CONTACT:
- Phone / Toll-Free Hotline: +91 800-SUSTUNE (+91 800 787 8863)
- WhatsApp Business Concierge: +91 800 787 8863 (Direct link: https://wa.me/918007878863)
- Email: concierge@sustunecare.com
- Website: www.sustunecare.com
- Active Operating Hubs: Bengaluru (Karnataka), Hyderabad (Telangana), and Delhi NCR (Gurugram, Noida, New Delhi). Expansion planned in Pune & Chennai.

CORE SERVICES:
1. SPARSH ELDER CARE (Healthcare Concierge & Parental Companionship):
   - Scope: Compassionate healthcare concierge and non-clinical support for aging parents in India.
   - The 6 Pillars of Care:
     1. 24/7 Rapid SOS & Emergency Escalation (11.8 min triage response, GPS ambulance dispatch, hospital admission coordination with Apollo, Fortis, Manipal).
     2. Doctor Escorts & Hospital Navigation (Trained escorts accompany parents to OPD appointments, take clinician notes, and provide overseas family with audio/written debriefs).
     3. Doorstep Medicine & Vital Monitoring (Weekly pill sorting, BP and glucose tracking, authentic pharmacy prescription replenishment).
     4. Respectful Companionship & Dignity (Weekly visits, cultural outings, temple visits, library trips, engaging conversations).
     5. Daily Errands & Household Logistics (Grocery fulfillment, utility bills, banking errands, digital life certificates).
     6. Transparent NRI Family Portal (Encrypted real-time WhatsApp alerts, digital medical vault, caregiver logs).
   - Care Pricing Tiers:
     - Essential SOS: ₹4,999/month ($59/mo) — 24/7 emergency dispatch, bi-weekly vital checks, medicine delivery.
     - Comprehensive Care: ₹9,999/month ($118/mo) [Most Popular] — Doctor escorts, weekly visits, audio debriefs, vitals monitoring.
     - Full Concierge: ₹18,999/month ($224/mo) — Dedicated nurse oversight, 3x weekly visits, unlimited doctor escorts, customized diet supervision.

2. AEGIS PROPERTY STEWARDSHIP (Institutional Real Estate Management for NRIs):
   - Scope: High-yield institutional property stewardship protecting prime residential and commercial real estate.
   - The 4 Operational Modules:
     1. Institutional Tenant Scouting: Triple-layer screening (CIBIL 750+ credit check, corporate HR background verification for MNC employees, police verification), biometric/digital lease deeds. Target placement < 21 days (average 18.4 days).
     2. Active Rental Management & Escrow: Automated rental collections into audited escrow; guaranteed 5th-of-the-month direct remittance to NRI NRE/NRO accounts; Section 195 TDS compliance & Form 15CA/CB tax filings.
     3. Turnkey Maintenance & 360° Audits: Forensic quarterly 80-point inspection audits with HD photo/video logs; 48-hour SLA for standard repairs, 4-hour SLA for urgent leaks/electrical issues; vetted empanelled contractors.
     4. Legal Title & Tax Guardianship: Municipal property tax assessment and receipt filing; biannual Encumbrance Certificate (EC) verification; Khata transfer/mutation support; physical perimeter encroachment prevention.
   - Property Pricing Tiers:
     - 2BHK Residential Apartment: 7.5% of monthly rental (minimum ₹3,500/mo)
     - 3-4BHK Luxury Apartment / Penthouse: 8.0% of monthly rental
     - Gated Villa / Independent Estate: 9.0% of monthly rental

3. DUAL-SHIELD PACKAGE:
   - Combines Aegis Property Stewardship + Sparsh Elder Care.
   - Single unified digital dashboard, 1 monthly consolidated statement, 10% bundle savings, and a dedicated Family Concierge Manager.

4. CLIENT PORTAL & TRANSPARENCY:
   - Real-time digital dashboard accessible across all time zones.
   - Features: Rent ledger, maintenance tickets, 360° inspection photo vaults, parent health vitals history, doctor audio recordings, and instant encrypted WhatsApp summaries.

5. BOOKING & CONSULTATION WORKFLOW:
   - Free 30-minute confidential NRI strategy call.
   - Booked online via /contact with interest selector (Aegis, Sparsh, or Dual-Shield).
   - Tailored to diaspora time zones: Americas (EST/PST), Europe (GMT/CET), Middle East (GST), and Asia-Pacific (SGT/AEST).

CRITICAL AI INSTRUCTIONS & CONSTRAINTS:
- NEVER invent services, guarantees, unlisted pricing, medical treatments, or legal outcomes.
- Sparsh provides NON-CLINICAL concierge support, companion escorts, and triage coordination. It is not an ICU hospital or an emergency ambulance fleet owner; it coordinates rapidly with hospital networks like Apollo, Fortis, and Manipal.
- Keep answers concise, polite, friendly, and structured (use bullet points and bold text).
- Do not write long essays. Answers must be 2 to 4 sentences or a quick bulleted list.
- Always include relevant navigational links or recommend booking a consultation when appropriate.
- If asked about something outside Sustune Care's scope, clearly state the limitation and offer to connect the user with the concierge team.
`;

/**
 * Built-in grounded knowledge retrieval & intent matcher.
 * Provides high-speed, 100% reliable responses with contextual buttons and follow-up chips.
 */
export function getGroundedChatReply(userMessage: string, pathname: string = "/"): ChatReply {
  const query = userMessage.trim().toLowerCase();

  // 1. Greetings & Pleasantries
  if (/^(hi|hello|hey|namaste|good morning|good evening|greetings|hola)\b/i.test(query)) {
    return {
      reply: `Hello! Welcome to **Sustune Care**. I am your 24/7 AI Concierge.\n\nWe provide **Aegis Property Stewardship** and **Sparsh Elder Care** for Non-Resident Indians (NRIs) with family and assets in **Bengaluru, Hyderabad, and Delhi NCR**.\n\nHow can I assist you today?`,
      actions: [
        { label: "Explore Sparsh Elder Care", href: "/sparsh" },
        { label: "Explore Aegis Property", href: "/aegis" },
        { label: "Book NRI Consultation", href: "/contact?type=consultation", variant: "primary" },
      ],
      suggestedQuestions: [
        "What services does Sparsh offer?",
        "How does Aegis property management work?",
        "What is the Dual-Shield bundle?",
      ],
      source: "knowledge_base",
    };
  }

  // 2. Sparsh Elder Care Questions
  if (
    query.includes("sparsh") ||
    query.includes("elder") ||
    query.includes("parent") ||
    query.includes("healthcare") ||
    query.includes("medical") ||
    query.includes("doctor") ||
    query.includes("sos") ||
    query.includes("ambulance") ||
    query.includes("escort") ||
    query.includes("medicine") ||
    query.includes("companion")
  ) {
    if (query.includes("price") || query.includes("cost") || query.includes("fee") || query.includes("plan") || query.includes("tier")) {
      return {
        reply: `**Sparsh Elder Care** offers three transparent monthly care tiers:\n\n` +
          `• **Essential SOS (₹4,999 / ~$59/mo)**: 24/7 emergency dispatch (11.8 min triage response), bi-weekly vital check-ups, and doorstep medicine delivery.\n` +
          `• **Comprehensive Care (₹9,999 / ~$118/mo)** *(Most Popular)*: OPD doctor escorts, weekly companion visits, bi-weekly vitals, and recorded audio debriefs for overseas family.\n` +
          `• **Full Concierge (₹18,999 / ~$224/mo)**: Dedicated nurse oversight, 3x weekly companion visits, unlimited doctor escorts, and personalized diet management.\n\n` +
          `You can test our interactive Care Plan Configurator to tailor a plan for your parents.`,
        actions: [
          { label: "Configure Care Plan", href: "/sparsh#configurator", variant: "primary" },
          { label: "Book Care Consultation", href: "/contact?interest=sparsh" },
        ],
        suggestedQuestions: [
          "How fast is the emergency SOS response?",
          "Can you escort parents to doctor visits?",
          "How do overseas children get updates?",
        ],
        source: "knowledge_base",
      };
    }

    if (query.includes("emergency") || query.includes("sos") || query.includes("hospital") || query.includes("ambulance")) {
      return {
        reply: `**24/7 Rapid SOS & Emergency Escalation:**\n\n` +
          `• **11.8-minute average triage response** across Bengaluru, Hyderabad, and Delhi NCR.\n` +
          `• Immediate GPS ambulance dispatch and hospital coordination with premier networks (Apollo, Fortis, Manipal).\n` +
          `• A trained Sustune Care Manager rushes to the hospital to handle admission paperwork, clinician liaising, and live WhatsApp/phone briefings with overseas family.\n\n` +
          `*Note: Sparsh provides compassionate non-clinical concierge navigation and emergency liaison, working alongside accredited medical institutions.*`,
        actions: [
          { label: "View Sparsh SOS Framework", href: "/sparsh#care-services", variant: "primary" },
          { label: "Schedule Care Assessment", href: "/contact?interest=sparsh" },
        ],
        suggestedQuestions: [
          "Can doctor escorts be arranged for OPD visits?",
          "What are the Sparsh monthly plans?",
          "How do I enroll my parents?",
        ],
        source: "knowledge_base",
      };
    }

    if (query.includes("doctor") || query.includes("escort") || query.includes("hospital navigation")) {
      return {
        reply: `**Doctor Escorts & Hospital Navigation:**\n\n` +
          `• A vetted Care Companion picks up your parents from home, assists them throughout the OPD consultation, and ensures they return safely.\n` +
          `• The companion takes clinician notes and records an executive audio summary of the physician's instructions.\n` +
          `• All prescription updates and doctor notes are uploaded immediately to your secure **Client Portal** and sent via encrypted WhatsApp.`,
        actions: [
          { label: "Explore Care Services", href: "/sparsh#care-services", variant: "primary" },
          { label: "Book Consultation", href: "/contact?interest=sparsh" },
        ],
        suggestedQuestions: [
          "What are the 6 Pillars of Sparsh?",
          "How does medicine fulfillment work?",
          "What is the cost of comprehensive care?",
        ],
        source: "knowledge_base",
      };
    }

    return {
      reply: `**Sparsh Elder Care** is our compassionate healthcare concierge for aging parents of NRIs.\n\n` +
        `**Our 6 Pillars of Care:**\n` +
        `1. **24/7 Rapid SOS**: 11.8-min triage response & hospital admission escort.\n` +
        `2. **Doctor Escorts**: Full OPD hospital navigation and audio debriefs.\n` +
        `3. **Doorstep Medicine**: Weekly pill organizer sorting & authentic pharmacy replenishment.\n` +
        `4. **Dignified Companionship**: Weekly home visits, temple runs & social check-ins.\n` +
        `5. **Daily Errands**: Grocery fulfillment, banking & utility management.\n` +
        `6. **Family Portal**: Instant WhatsApp alerts and secure clinician logs for overseas children.`,
      actions: [
        { label: "Explore Care Services", href: "/sparsh#care-services", variant: "primary" },
        { label: "View Care Options & Pricing", href: "/sparsh#configurator" },
        { label: "Book a Consultation", href: "/contact?interest=sparsh" },
      ],
      suggestedQuestions: [
        "What are the Sparsh care plans and pricing?",
        "How fast is the 24/7 Rapid SOS response?",
        "Can you escort parents to doctor visits?",
      ],
      source: "knowledge_base",
    };
  }

  // 3. Aegis Property Management Questions
  if (
    query.includes("aegis") ||
    query.includes("property") ||
    query.includes("rent") ||
    query.includes("tenant") ||
    query.includes("escrow") ||
    query.includes("lease") ||
    query.includes("inspection") ||
    query.includes("maintenance") ||
    query.includes("tax") ||
    query.includes("khata")
  ) {
    if (query.includes("fee") || query.includes("cost") || query.includes("price") || query.includes("charge") || query.includes("rate")) {
      return {
        reply: `**Aegis Property Management Fees** are performance-based as a percentage of monthly collected rent (min ₹3,500/month):\n\n` +
          `• **2BHK Residential Apartment**: **7.5%** of monthly rental.\n` +
          `• **3–4BHK Luxury Apartment / Penthouse**: **8.0%** of monthly rental *(Most Popular)*.\n` +
          `• **Gated Villa / Independent Estate**: **9.0%** of monthly rental.\n\n` +
          `**Includes:** Institutional corporate tenant scouting, biometric lease deeds, audited escrow rent collection, quarterly 80-point inspections, and Form 15CA/CB NRI tax assistance. Zero placement fee markup!`,
        actions: [
          { label: "Compare Property Tiers", href: "/aegis#pricing", variant: "primary" },
          { label: "Property Management Enquiry", href: "/contact?interest=aegis" },
        ],
        suggestedQuestions: [
          "How is rent collected into escrow?",
          "What is included in the 80-point inspection?",
          "How do you screen tenants?",
        ],
        source: "knowledge_base",
      };
    }

    if (query.includes("tenant") || query.includes("screening") || query.includes("scouting")) {
      return {
        reply: `**Institutional Tenant Scouting:**\n\n` +
          `• We target corporate executives and vetted MNC professionals.\n` +
          `• **Triple-Layer Screening**: Mandatory CIBIL 750+ credit check, employer HR verification, and local police verification.\n` +
          `• Supreme Court-vetted digital lease deeds with biometric e-signatures and enforceable eviction protection.\n` +
          `• Average placement turnaround: **18.4 days** (target < 21 days).`,
        actions: [
          { label: "Explore Property Services", href: "/aegis#property-services", variant: "primary" },
          { label: "Enquire About My Property", href: "/contact?interest=aegis" },
        ],
        suggestedQuestions: [
          "How is rent remitted to NRI accounts?",
          "What are the property tiers and fees?",
          "How do you handle maintenance repairs?",
        ],
        source: "knowledge_base",
      };
    }

    if (query.includes("inspection") || query.includes("audit") || query.includes("maintenance") || query.includes("repair")) {
      return {
        reply: `**Forensic 80-Point Property Audits & Maintenance:**\n\n` +
          `• **Quarterly 360° Digital Audits**: High-resolution photo and video logs covering structural dampness, plumbing pressure, electrical fixtures, woodwork, and appliances.\n` +
          `• Pre-monsoon waterproofing and termite barrier checks.\n` +
          `• **SLA Response Times**: 48-hour resolution for standard maintenance tickets, 4-hour emergency response for active plumbing or electrical leaks.\n` +
          `• All audit reports are published directly to your **Client Portal** with timestamped imagery.`,
        actions: [
          { label: "View Sample Audit Report", href: "/aegis#property-services", variant: "primary" },
          { label: "Book Property Consultation", href: "/contact?interest=aegis" },
        ],
        suggestedQuestions: [
          "How is rent collected and remitted?",
          "What are the property management tiers?",
          "Can you manage my property in Bengaluru/Hyderabad?",
        ],
        source: "knowledge_base",
      };
    }

    return {
      reply: `**Aegis Property Stewardship** provides institutional real estate protection for high-value NRI residences in India.\n\n` +
        `**The 4 Operational Modules:**\n` +
        `1. **Institutional Tenant Scouting**: Corporate vetting, CIBIL 750+ verification, biometric digital leases (avg 18.4 days).\n` +
        `2. **Active Rental Escrow**: Guaranteed 5th-of-the-month direct remittance to NRE/NRO accounts, TDS compliance & Form 15CA/CB.\n` +
        `3. **Turnkey Maintenance & 80-Point Audits**: Quarterly 360° photo inspection reports and 48-hr repair SLA.\n` +
        `4. **Legal Title & Tax Guardianship**: Khata mutation, municipal tax payment receipts, and biannual Encumbrance Certificate (EC) audits.`,
      actions: [
        { label: "Explore Property Services", href: "/aegis#property-services", variant: "primary" },
        { label: "Property Management Enquiry", href: "/contact?interest=aegis" },
        { label: "Book a Consultation", href: "/contact?interest=aegis&type=consultation" },
      ],
      suggestedQuestions: [
        "What are the property tiers and fees?",
        "How is rent collected into escrow?",
        "What does an 80-point inspection include?",
      ],
      source: "knowledge_base",
    };
  }

  // 4. Dual-Shield / Combined Bundle
  if (query.includes("dual") || query.includes("shield") || query.includes("bundle") || query.includes("both") || query.includes("combine")) {
    return {
      reply: `**The Dual-Shield Package** combines Aegis Property Stewardship and Sparsh Elder Care into one seamless concierge service for global NRIs:\n\n` +
        `• **Unified Family Portal**: Manage property rental ledgers, repair logs, and parental vitals/doctor notes on one single dashboard.\n` +
        `• **Dedicated Family Concierge**: One single trusted point of contact coordinating both property and parents.\n` +
        `• **Consolidated Monthly Statement**: Simplified international billing with a **10% bundle savings** across active tiers.`,
      actions: [
        { label: "Explore Dual-Shield on Home", href: "/#dual-showcase", variant: "primary" },
        { label: "Book Dual-Shield Consultation", href: "/contact?interest=dual" },
      ],
      suggestedQuestions: [
        "What services does Sparsh offer?",
        "What property services does Aegis provide?",
        "How do I book a consultation?",
      ],
      source: "knowledge_base",
    };
  }

  // 5. Contact, Consultation & How to Enquire
  if (
    query.includes("contact") ||
    query.includes("book") ||
    query.includes("consult") ||
    query.includes("enquir") ||
    query.includes("phone") ||
    query.includes("call") ||
    query.includes("whatsapp") ||
    query.includes("email") ||
    query.includes("talk")
  ) {
    return {
      reply: `You can connect with the Sustune Care concierge desk through multiple convenient channels:\n\n` +
        `• **Free NRI Strategy Consultation**: Book a confidential 30-minute video or phone call via our [Consultation Form](/contact).\n` +
        `• **WhatsApp Direct**: Chat directly with our diaspora concierge at **+91 800 787 8863**.\n` +
        `• **Toll-Free Hotline**: **+91 800-SUSTUNE** (+91 800 787 8863).\n` +
        `• **Email**: **concierge@sustunecare.com**.\n\n` +
        `We accommodate international time zones across USA, UK, UAE, Canada, Australia, and Singapore.`,
      actions: [
        { label: "Book Consultation Online", href: "/contact?type=consultation", variant: "primary" },
        { label: "Chat on WhatsApp", href: "https://wa.me/918007878863", variant: "whatsapp", external: true },
      ],
      suggestedQuestions: [
        "What time zones do you support?",
        "Which Indian cities do you operate in?",
        "What happens during the first consultation?",
      ],
      source: "knowledge_base",
    };
  }

  // 6. Cities & Geographic Coverage
  if (query.includes("city") || query.includes("cities") || query.includes("location") || query.includes("bengaluru") || query.includes("hyderabad") || query.includes("delhi") || query.includes("ncr") || query.includes("pune") || query.includes("chennai")) {
    return {
      reply: `**Operating Geographic Coverage:**\n\n` +
        `• **Primary Operational Hubs**: **Bengaluru** (Karnataka), **Hyderabad** (Telangana), and **Delhi NCR** (Gurugram, Noida, South/Central Delhi).\n` +
        `• Each primary hub features dedicated on-ground City Managers, empanelled healthcare networks, and vetted contractor teams.\n` +
        `• **Expansion Hubs**: Pune and Chennai rollouts are currently underway.`,
      actions: [
        { label: "View City Coverage", href: "/why-sustune" },
        { label: "Check Property/Parent Location", href: "/contact" },
      ],
      suggestedQuestions: [
        "What services does Sparsh offer in Bengaluru?",
        "How do you manage properties in Hyderabad?",
        "How can I book a consultation?",
      ],
      source: "knowledge_base",
    };
  }

  // 7. Client Portal & Updates
  if (query.includes("portal") || query.includes("dashboard") || query.includes("update") || query.includes("report") || query.includes("app")) {
    return {
      reply: `**Client Portal & Real-Time Transparency:**\n\n` +
        `• Every NRI client receives private credentials to our encrypted **Client Portal**.\n` +
        `• **Real Estate Tab**: Track rent collections, tenant lease contracts, maintenance tickets, and quarterly 360° inspection reports with HD photos.\n` +
        `• **Parent Health Tab**: Review vital logs (blood pressure, glucose), doctor appointment recordings, and upcoming pharmacy refills.\n` +
        `• Urgent updates are also pushed instantly to your authorized family WhatsApp group.`,
      actions: [
        { label: "Open Client Portal Login", href: "/portal/login", variant: "primary" },
        { label: "Book a Consultation", href: "/contact" },
      ],
      suggestedQuestions: [
        "How are doctor notes shared with overseas family?",
        "Can I see a sample property inspection report?",
        "How do I sign up?",
      ],
      source: "knowledge_base",
    };
  }

  // 8. Company Background & Trust / Governance
  if (query.includes("who is") || query.includes("about") || query.includes("governance") || query.includes("trust") || query.includes("why sustune") || query.includes("legal")) {
    return {
      reply: `**About Sustune Care (Sustune Care Services Pvt. Ltd.):**\n\n` +
        `We are an institutional concierge platform founded to solve the "Anxiety of Distance" for overseas Indians.\n\n` +
        `• **Institutional Governance**: Escrow banking protocols, Supreme Court-vetted lease deeds, and strict compliance.\n` +
        `• **Dual Focus**: Unifying high-yield property stewardship with dignified, compassionate elder healthcare.\n` +
        `• **Accountability**: Dedicated on-ground City Managers, zero hidden markups, and transparent photo/audio verification.`,
      actions: [
        { label: "Learn Why Sustune", href: "/why-sustune", variant: "primary" },
        { label: "Book a Consultation", href: "/contact" },
      ],
      suggestedQuestions: [
        "What services does Aegis provide?",
        "What services does Sparsh provide?",
        "How do I connect with a specialist?",
      ],
      source: "knowledge_base",
    };
  }

  // 9. Polite Fallback for Unmatched Queries
  return {
    reply: `Thank you for your question. While I have extensive knowledge of **Sustune Care's** property stewardship (Aegis) and elder care (Sparsh) services, I want to ensure you receive verified, personalized details for your specific family or property.\n\n` +
      `Our diaspora concierge specialists are available across all international time zones to answer your exact questions. Would you like to schedule a free 30-minute consultation or message our team directly on WhatsApp?`,
    actions: [
      { label: "Book an NRI Consultation", href: "/contact?type=consultation", variant: "primary" },
      { label: "Chat on WhatsApp (+91 800 787 8863)", href: "https://wa.me/918007878863", variant: "whatsapp", external: true },
      { label: "Explore Sparsh Elder Care", href: "/sparsh" },
      { label: "Explore Aegis Property", href: "/aegis" },
    ],
    suggestedQuestions: [
      "What services does Sparsh offer?",
      "What property services does Aegis provide?",
      "What are the operating cities in India?",
    ],
    source: "knowledge_base",
  };
}
