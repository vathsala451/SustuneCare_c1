# Sustune Care — Official Web Application

> **Tagline:** “Protected Care. Sustained Dignity.”  
> **Positioning:** “Care for your property. Care for your parents. Peace of mind for you.”

A production-quality, responsive Next.js web application built for **Sustune Care**, dedicated to Non-Resident Indians (NRIs) who require reliable, transparent assistance managing their real estate property (**Aegis**) and caring for their aging parents (**Sparsh**) back home in India.

---

## 1. Brand Design System

Built strictly adhering to the official **Sustune Care Brand Guidelines & Stationery Suite Manual**:

| Design Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Clinical White** | `#FFFFFF` | Main background surface |
| **Cool Mist** | `#F1F5F9` | Alternate sections and card surfaces |
| **Deep Marine Blue** | `#0D3B66` | Navigation, hero sections, and footer |
| **Cerulean Flow** | `#0073B7` | Primary buttons and key actions |
| **Imperial Gold** | `#C99738` | Premium accents, borders, and highlights |
| **Burnished Bronze** | `#8B601C` | Secondary gold accents and depth |
| **Emerald Vitality** | `#0A8754` | Care-related accents and success states |
| **Pure Slate** | `#1E293B` | Body typography and high-contrast headings |

- **Visual Balance (60–30–10 Principle):** ~60% white and light neutral surfaces, ~30% blue-based brand elements, and ~10% gold and emerald accents.
- **Typography:** Plus Jakarta Sans (Headings) & Inter (Body text).
- **Emblem Geometry:** Vector SVG implementation featuring the official shield, architectural gable roof, 4-point star, flowing S-wave ribbon, and supporting hands.

---

## 2. Completed Website Routes

### Route A: `/` — Homepage
- **Top Announcement Bar:** Verified concierge locations across Bengaluru, Hyderabad & Delhi NCR, 24/7 NRI Careline, and currency switcher (USD, GBP, AED, INR).
- **Sticky Navigation:** Sustune Care vector emblem, main navigation, mobile drawer with accessible focus trap, and consultation CTAs.
- **Split-Layout Hero:** Eyebrow badge, headline *"Distance Should Never Mean Worry"*, interactive 3-way toggle (Dual-Shield, Aegis, Sparsh), authentic elder care photography, and floating service panel.
- **Trust Strip:** Genuine, supportable trust attributes without fabricated metrics or fake reviews.
- **Dual-Service Showcase:** Side-by-side cards for **Aegis Property Stewardship** and **Sparsh Family Care** with distinct photography and direct route links.
- **The Distance Challenge:** Compares the high-anxiety Status Quo (3 AM wakeups, hidden symptoms, imposing on relatives) against the corporate Sustune Protocol.
- **How It Works:** 4-step transparent onboarding from intake to dedicated City Manager oversight.
- **Interactive Care Estimator:** Real-time monthly calculations factoring in property tiers, care tiers, visit frequency, bundle discounts, and multi-currency conversion.
- **Transparency Portal Preview:** Demonstrates the dual-shield dashboard with rental records and doctor visit notes.
- **Four Brand Pillars:** Protected Governance, Home Comfort & Shelter, Dynamic Vitality, and Empathetic Hands.
- **Governance Standards:** Explains ethical oversight, audited escrow, and police verification.
- **Accessible FAQ Accordion:** Answers all 6 core diaspora inquiries.
- **Footer:** Multi-column brand summary, legal disclaimers, contact details, and copyright.

### Route B: `/aegis` — Property Stewardship
- Dedicated property hero with luxury residential architectural photography.
- Five comprehensive management modules: Tenant Screening & Onboarding, Active Rental Escrow, Quarterly 360° Inspections, Maintenance & Emergency Repairs, and Turnkey Interiors.
- **Sample 360° Digital Inspection Report:** Interactive room tabs (Living Room, Kitchen, Master Bedroom, Bathrooms, Balcony), condition scores, priority indicators, high-resolution photo logs, and technical recommendations.
- **Pricing Comparison Table:** Compares *Tenant Scouting Only* vs *Complete Aegis Management* with transparent illustrative rates.

### Route C: `/sparsh` — Family & Elder Care
- Empathetic hero section with verified senior care photography.
- Six core care pillars: 24/7 Emergency Assistance Coordination, Doctor OPD Accompaniment, Routine Vitals Telemetry, Daily Errands, Scheduled Companionship, and Family Portal Logs.
- **Interactive Care Plan Configurator:** Dynamic module selector, visit rhythm options, real-time monthly estimate calculations, and prominent non-clinical medical disclaimers.

### Route D: `/portal-preview` — Customer Portal Demo
- Interactive client dashboard with top navigation, unread notification center (toggleable with "mark as read" interaction), search filtering, and persistent sample data banner.
- **Tab 1: Property Portfolio:** Property cards, tenant verification details, rental remittance ledger, and maintenance ticket logs.
- **Tab 2: Parent Health Hub:** Assigned Care Companion profile, upcoming hospital visits, routine vitals telemetry table (BP, sugar, pulse), doctor consultation directive notes, and pharmacy delivery status.

### Route E: `/contact` — Consultation & Lead Intake
- Form with strict validation: Full Name, Email, Phone with country code selector, Diaspora Country, Indian City of Support, Service Interest, Preferred Contact Method, and Privacy Consent.
- Instant inline error messages and duplicate-submission prevention.
- Clean backend service abstraction with transparent interactive demonstration mode and generated reference codes.
- Direct WhatsApp integration with pre-filled concierge messages using the configured business number.

---

## 3. Technology Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS (configured with official brand design tokens)
- **Icons:** Lucide React
- **Animation:** Framer Motion & CSS Micro-transitions

---

## 4. Running Locally

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```
All routes are pre-rendered statically with zero compilation errors.
