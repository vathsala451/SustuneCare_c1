export type Currency = "USD" | "INR" | "GBP" | "AED" | "CAD" | "AUD";

export interface CurrencyInfo {
  code: Currency;
  symbol: string;
  rateFromINR: number;
  label: string;
  flag: string;
  name: string;
  format: (amount: number, perMonth?: boolean) => string;
}

/**
 * Currency Exchange Rates from the original live Amplify application (chunk 31oww9de25p8y.js).
 * Base prices are denominated in INR (₹) and converted using fixed official rates (rateFromINR).
 * 1 INR = 0.0118 USD (1 USD ≈ 84.745 INR).
 */
export const CURRENCIES: Record<Currency, CurrencyInfo> = {
  USD: {
    code: "USD",
    symbol: "$",
    rateFromINR: 0.0118,
    label: "USD ($) - United States",
    flag: "🇺🇸",
    name: "US Dollar ($)",
    format: (amt, perMonth) => `$${Math.round(amt).toLocaleString("en-US")}${perMonth ? "/month" : ""}`,
  },
  INR: {
    code: "INR",
    symbol: "₹",
    rateFromINR: 1.0,
    label: "INR (₹) - India",
    flag: "🇮🇳",
    name: "Indian Rupee (₹)",
    format: (amt, perMonth) => `₹${Math.round(amt).toLocaleString("en-IN")}${perMonth ? "/month" : ""}`,
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    rateFromINR: 0.0093,
    label: "GBP (£) - United Kingdom",
    flag: "🇬🇧",
    name: "British Pound (£)",
    format: (amt, perMonth) => `£${Math.round(amt).toLocaleString("en-GB")}${perMonth ? "/month" : ""}`,
  },
  AED: {
    code: "AED",
    symbol: "AED ",
    rateFromINR: 0.0433,
    label: "AED - United Arab Emirates",
    flag: "🇦🇪",
    name: "UAE Dirham (AED)",
    format: (amt, perMonth) => `AED ${Math.round(amt).toLocaleString("en-AE")}${perMonth ? "/month" : ""}`,
  },
  CAD: {
    code: "CAD",
    symbol: "C$",
    rateFromINR: 0.0165,
    label: "CAD (C$) - Canada",
    flag: "🇨🇦",
    name: "Canadian Dollar (C$)",
    format: (amt, perMonth) => `C$${Math.round(amt).toLocaleString("en-CA")}${perMonth ? "/month" : ""}`,
  },
  AUD: {
    code: "AUD",
    symbol: "A$",
    rateFromINR: 0.0184,
    label: "AUD (A$) - Australia",
    flag: "🇦🇺",
    name: "Australian Dollar (A$)",
    format: (amt, perMonth) => `A$${Math.round(amt).toLocaleString("en-AU")}${perMonth ? "/month" : ""}`,
  },
};

// Aliased export for backwards compatibility
export const currencies = CURRENCIES;

// Target Metropolitan Hubs as verified from original website
export const METROPOLITAN_HUBS = [
  { id: "Bengaluru", name: "Bengaluru", state: "Karnataka", tag: "Primary Hub" },
  { id: "Hyderabad", name: "Hyderabad", state: "Telangana", tag: "Primary Hub" },
  { id: "Delhi NCR", name: "Delhi NCR", state: "NCR Region", tag: "Primary Hub" },
  { id: "Pune", name: "Pune", state: "Maharashtra", tag: "Expansion Hub" },
  { id: "Chennai", name: "Chennai", state: "Tamil Nadu", tag: "Expansion Hub" },
] as const;

export const metropolitanHubs = METROPOLITAN_HUBS;
export type MetropolitanHubId = (typeof METROPOLITAN_HUBS)[number]["id"];

// Property Types & Stewardship Fee Percentages as extracted from original JS (chunk 24__swn-2mgz7.js)
// Formula: Math.max(3500, Math.round(rent * (villa ? 0.09 : luxury ? 0.08 : 0.075)))
export type PropertyTypeId = "apt" | "luxury" | "villa";

export interface PropertyTypeConfig {
  id: PropertyTypeId;
  name: string;
  badge: string;
  description: string;
  defaultRentINR: number;
  ratePercentage: number;
}

export const PROPERTY_TYPES: Record<PropertyTypeId, PropertyTypeConfig> = {
  apt: {
    id: "apt",
    name: "2BHK Apartment",
    badge: "Residential Core",
    description: "Standard residential apartment monitoring, key custody, tenant background vetting, and digital lease deeds.",
    defaultRentINR: 40000,
    ratePercentage: 0.075, // 7.5%
  },
  luxury: {
    id: "luxury",
    name: "3–4BHK Luxury Property",
    badge: "High Demand · Popular",
    description: "Premium high-rise or gated community asset stewardship, corporate tenant screening, quarterly 360° inspection reports with HD photos.",
    defaultRentINR: 75000,
    ratePercentage: 0.08, // 8.0%
  },
  villa: {
    id: "villa",
    name: "Gated Villa / Penthouse",
    badge: "Estate Tier",
    description: "Expansive luxury villa or penthouse guardianship, perimeter security oversight, landscaping, and turnkey renovation supervision.",
    defaultRentINR: 150000,
    ratePercentage: 0.09, // 9.0%
  },
};

// Array export for components mapping over property options
export const propertyOptions = [
  PROPERTY_TYPES.apt,
  PROPERTY_TYPES.luxury,
  PROPERTY_TYPES.villa,
];

// Sparsh Healthcare Tiers as extracted from original JS (chunk 24__swn-2mgz7.js)
// Formula: { essential: 4999, comprehensive: 9999, concierge: 18999 }[tier]
export type CareTierId = "essential" | "comprehensive" | "concierge";

export interface CareTierConfig {
  id: CareTierId;
  name: string;
  badge: string;
  description: string;
  monthlyINR: number;
}

export const CARE_TIERS: Record<CareTierId, CareTierConfig> = {
  essential: {
    id: "essential",
    name: "Essential SOS",
    badge: "Safety Net",
    description: "24/7 SOS & Emergency dispatch, bi-weekly health vitals check, doorstep medicine replenishment & monthly summary.",
    monthlyINR: 4999,
  },
  comprehensive: {
    id: "comprehensive",
    name: "Comprehensive Care",
    badge: "Most Popular",
    description: "Doctor Escorts + Bi-Weekly Vitals + Weekly Visits + Audio consultation debriefs for overseas family.",
    monthlyINR: 9999,
  },
  concierge: {
    id: "concierge",
    name: "Full Concierge",
    badge: "Dedicated Nurse",
    description: "Unlimited Escorts + 3x Weekly Visits + Dedicated Nurse, personal diet oversight & continuous WhatsApp updates.",
    monthlyINR: 18999,
  },
};

// Array export for components mapping over care options
export const careOptions = [
  CARE_TIERS.essential,
  CARE_TIERS.comprehensive,
  CARE_TIERS.concierge,
];

// Slider Bounds & Bounds configuration in INR
export const RENTAL_SLIDER_CONFIG = {
  minINR: 25000,
  maxINR: 250000,
  stepINR: 5000,
  defaultINR: 65000,
  aegisMinFeeINR: 3500,
};

// Backwards-compatible rental config
export const rentalValueConfigs: Record<Currency, { default: number; min: number; max: number; step: number }> = {
  USD: { default: 65000, min: 25000, max: 250000, step: 5000 },
  INR: { default: 65000, min: 25000, max: 250000, step: 5000 },
  GBP: { default: 65000, min: 25000, max: 250000, step: 5000 },
  AED: { default: 65000, min: 25000, max: 250000, step: 5000 },
  CAD: { default: 65000, min: 25000, max: 250000, step: 5000 },
  AUD: { default: 65000, min: 25000, max: 250000, step: 5000 },
};

export type ServiceScope = "both" | "aegis" | "sparsh";

export interface PricingCalculationInput {
  isAegisActive: boolean;
  isSparshActive: boolean;
  propertyType: PropertyTypeId;
  monthlyRentINR: number;
  careTier: CareTierId;
  currency: Currency;
  hub?: string;
  isBundleDiscountApplied?: boolean;
}

export interface PricingCalculationResult {
  // Selections
  isAegisActive: boolean;
  isSparshActive: boolean;
  isDualShield: boolean;
  propertyType: PropertyTypeId;
  careTier: CareTierId;
  monthlyRentINR: number;
  currency: Currency;
  hub: string;

  // Raw INR internal calculations (source of truth)
  aegisFeeINR: number;
  sparshFeeINR: number;
  grossSubtotalINR: number;
  discountAmountINR: number;
  netMonthlyFeeINR: number;
  annualFeeINR: number;
  annualProtectionINR: number;

  // Converted numeric values in target currency
  aegisFeeConverted: number;
  sparshFeeConverted: number;
  grossSubtotalConverted: number;
  discountAmountConverted: number;
  netMonthlyFeeConverted: number;
  annualFeeConverted: number;
  annualProtectionConverted: number;

  // Formatted strings in target currency
  aegisFeeFormatted: string;
  sparshFeeFormatted: string;
  grossSubtotalFormatted: string;
  discountAmountFormatted: string | null;
  netMonthlyFeeFormatted: string;
  annualFeeFormatted: string;
  annualProtectionFormatted: string;
  annualProtectionLakhFormatted: string;
  monthlyRentFormatted: string;

  // Additional Metadata
  discountRate: number; // 0.15 for Dual-Shield, 0 for single service
  rentalContextPercent: string;
  propertyTitle: string;
  careTitle: string;
}

/**
 * Centrally calculates service fees, discounts, and estimates following the exact original logic:
 *
 * 1. Aegis Fee:
 *    B = isAegis ? Math.max(3500, Math.round(rent * (villa ? 0.09 : luxury ? 0.08 : 0.075))) : 0
 *
 * 2. Sparsh Fee:
 *    F = isSparsh ? { essential: 4999, comprehensive: 9999, concierge: 18999 }[tier] : 0
 *
 * 3. Dual-Shield Synergy Discount (15%):
 *    A = isAegis && isSparsh
 *    Subtotal = B + F
 *    Discount = A ? Math.round(0.15 * Subtotal) : 0
 *    Net Monthly = Subtotal - Discount
 *
 * 4. Annual Financial Protection:
 *    M = isAegis ? (1.5 * rent + 45000 + (150000 * !!isSparsh)) : (150000 * !!isSparsh)
 *
 * 5. Currency Conversion & Reconciliation:
 *    For USD (rate 0.0118):
 *    Aegis: Math.round(5200 * 0.0118) = $61
 *    Sparsh Comprehensive: Math.round(9999 * 0.0118) = $118
 *    Subtotal: $61 + $118 = $179
 *    Discount: Math.round(0.15 * 179) = $27
 *    Net Total: $179 - $27 = $152/month.
 *    Annual Protection: Math.round(292500 * 0.0118) = $3,452.
 */
export function calculatePricing(input: PricingCalculationInput): PricingCalculationResult {
  const {
    isAegisActive,
    isSparshActive,
    propertyType = "luxury",
    monthlyRentINR = 65000,
    careTier = "comprehensive",
    currency = "USD",
    hub = "Bengaluru",
    isBundleDiscountApplied = true,
  } = input;

  const curr = CURRENCIES[currency] || CURRENCIES.USD;
  const prop = PROPERTY_TYPES[propertyType] || PROPERTY_TYPES.luxury;
  const care = CARE_TIERS[careTier] || CARE_TIERS.comprehensive;

  // 1. Aegis Fee in INR
  const aegisFeeINR = isAegisActive
    ? Math.max(RENTAL_SLIDER_CONFIG.aegisMinFeeINR, Math.round(monthlyRentINR * prop.ratePercentage))
    : 0;

  // 2. Sparsh Fee in INR
  const sparshFeeINR = isSparshActive ? care.monthlyINR : 0;

  // 3. Dual-Shield Bundle Discount (INR)
  const isDualShield = isAegisActive && isSparshActive && isBundleDiscountApplied;
  const grossSubtotalINR = aegisFeeINR + sparshFeeINR;
  const discountRate = isDualShield ? 0.15 : 0;
  const discountAmountINR = isDualShield ? Math.round(0.15 * grossSubtotalINR) : 0;
  const netMonthlyFeeINR = grossSubtotalINR - discountAmountINR;
  const annualFeeINR = netMonthlyFeeINR * 12;

  // 4. Annual Financial Protection (INR)
  const annualProtectionINR = isAegisActive
    ? Math.round(1.5 * monthlyRentINR + 45000 + 150000 * (isSparshActive ? 1 : 0))
    : isSparshActive
    ? 150000
    : 0;

  // 5. Currency-Converted Amounts with Reconciled Line Items
  let aegisFeeConverted: number;
  let sparshFeeConverted: number;
  let grossSubtotalConverted: number;
  let discountAmountConverted: number;
  let netMonthlyFeeConverted: number;
  let annualFeeConverted: number;
  let annualProtectionConverted: number;

  if (currency === "INR") {
    aegisFeeConverted = aegisFeeINR;
    sparshFeeConverted = sparshFeeINR;
    grossSubtotalConverted = grossSubtotalINR;
    discountAmountConverted = discountAmountINR;
    netMonthlyFeeConverted = netMonthlyFeeINR;
    annualFeeConverted = annualFeeINR;
    annualProtectionConverted = annualProtectionINR;
  } else {
    aegisFeeConverted = Math.round(aegisFeeINR * curr.rateFromINR);
    sparshFeeConverted = Math.round(sparshFeeINR * curr.rateFromINR);
    grossSubtotalConverted = aegisFeeConverted + sparshFeeConverted;
    discountAmountConverted = isDualShield ? Math.round(0.15 * grossSubtotalConverted) : 0;
    netMonthlyFeeConverted = grossSubtotalConverted - discountAmountConverted;
    annualFeeConverted = netMonthlyFeeConverted * 12;
    annualProtectionConverted = Math.round(annualProtectionINR * curr.rateFromINR);
  }

  // Formatters
  const format = (amt: number, perMonth = false): string => {
    let text = "";
    if (currency === "INR") {
      text = `₹${amt.toLocaleString("en-IN")}`;
    } else {
      text = `${curr.symbol}${amt.toLocaleString("en-US")}`;
    }
    if (perMonth) text += "/month";
    return text;
  };

  const formatProtectionLakh = (inrAmt: number, convertedAmt: number): string => {
    if (currency === "INR") {
      return inrAmt >= 100000
        ? `₹${(inrAmt / 100000).toFixed(1)} Lakh (₹${inrAmt.toLocaleString("en-IN")})`
        : `₹${inrAmt.toLocaleString("en-IN")}`;
    }
    return `${curr.symbol}${convertedAmt.toLocaleString("en-US")}`;
  };

  const rentalPercent =
    monthlyRentINR > 0 ? ((aegisFeeINR / monthlyRentINR) * 100).toFixed(1) : "8.0";

  return {
    isAegisActive,
    isSparshActive,
    isDualShield,
    propertyType,
    careTier,
    monthlyRentINR,
    currency,
    hub,

    aegisFeeINR,
    sparshFeeINR,
    grossSubtotalINR,
    discountAmountINR,
    netMonthlyFeeINR,
    annualFeeINR,
    annualProtectionINR,

    aegisFeeConverted,
    sparshFeeConverted,
    grossSubtotalConverted,
    discountAmountConverted,
    netMonthlyFeeConverted,
    annualFeeConverted,
    annualProtectionConverted,

    aegisFeeFormatted: format(aegisFeeConverted, true),
    sparshFeeFormatted: format(sparshFeeConverted, true),
    grossSubtotalFormatted: format(grossSubtotalConverted, true),
    discountAmountFormatted: discountAmountConverted > 0 ? format(discountAmountConverted, true) : null,
    netMonthlyFeeFormatted: format(netMonthlyFeeConverted),
    annualFeeFormatted: format(annualFeeConverted),
    annualProtectionFormatted: format(annualProtectionConverted),
    annualProtectionLakhFormatted: formatProtectionLakh(annualProtectionINR, annualProtectionConverted),
    monthlyRentFormatted: format(Math.round(monthlyRentINR * curr.rateFromINR)),

    discountRate,
    rentalContextPercent: `${rentalPercent}% of monthly rent`,
    propertyTitle: isAegisActive ? prop.name : "None (Family Care Only)",
    careTitle: isSparshActive ? care.name : "None (Property Only)",
  };
}

// Backwards-compatible adapter for existing Estimator components
export interface EstimatorCalculationInput {
  scope: ServiceScope;
  hub: string;
  propertyTier: "2bhk" | "3-4bhk" | "villa" | PropertyTypeId;
  monthlyRent: number;
  careTier: "essential" | "comprehensive" | "concierge" | CareTierId;
  currency: Currency;
  isBundleDiscountApplied?: boolean;
}

export interface EstimatorCalculationResult {
  scope: ServiceScope;
  currency: Currency;
  hub: string;
  propertyTitle: string;
  careTitle: string;
  propertySubtotalRaw: number;
  careSubtotalRaw: number;
  grossSubtotalRaw: number;
  discountRate: number;
  discountAmountRaw: number;
  monthlyTotalRaw: number;
  annualTotalRaw: number;
  annualProtectionEstimateRaw: number;
  propertySubtotalFormatted: string;
  careSubtotalFormatted: string;
  grossSubtotalFormatted: string;
  discountAmountFormatted: string | null;
  monthlyTotalFormatted: string;
  annualTotalFormatted: string;
  annualProtectionEstimateFormatted: string;
  isEligibleForDiscount: boolean;
  rentalContextPercent: string;
}

export function calculateEstimate(input: EstimatorCalculationInput): EstimatorCalculationResult {
  const isAegisActive = input.scope === "both" || input.scope === "aegis";
  const isSparshActive = input.scope === "both" || input.scope === "sparsh";

  const propTierMap: Record<string, PropertyTypeId> = {
    "2bhk": "apt",
    "3-4bhk": "luxury",
    villa: "villa",
    apt: "apt",
    luxury: "luxury",
  };

  const mappedProp = propTierMap[input.propertyTier] || "luxury";

  const result = calculatePricing({
    isAegisActive,
    isSparshActive,
    propertyType: mappedProp,
    monthlyRentINR: input.monthlyRent || 65000,
    careTier: input.careTier as CareTierId,
    currency: input.currency || "USD",
    hub: input.hub,
    isBundleDiscountApplied: input.isBundleDiscountApplied,
  });

  return {
    scope: input.scope,
    currency: input.currency,
    hub: input.hub,
    propertyTitle: result.propertyTitle,
    careTitle: result.careTitle,
    propertySubtotalRaw: result.aegisFeeConverted,
    careSubtotalRaw: result.sparshFeeConverted,
    grossSubtotalRaw: result.grossSubtotalConverted,
    discountRate: result.discountRate,
    discountAmountRaw: result.discountAmountConverted,
    monthlyTotalRaw: result.netMonthlyFeeConverted,
    annualTotalRaw: result.annualFeeConverted,
    annualProtectionEstimateRaw: result.annualProtectionConverted,
    propertySubtotalFormatted: result.aegisFeeFormatted,
    careSubtotalFormatted: result.sparshFeeFormatted,
    grossSubtotalFormatted: result.grossSubtotalFormatted,
    discountAmountFormatted: result.discountAmountFormatted,
    monthlyTotalFormatted: result.netMonthlyFeeFormatted,
    annualTotalFormatted: result.annualFeeFormatted,
    annualProtectionEstimateFormatted: result.annualProtectionFormatted,
    isEligibleForDiscount: result.isDualShield,
    rentalContextPercent: result.rentalContextPercent,
  };
}

// Aegis Pricing Comparison Table Data (for /aegis page)
export const aegisPricingTiers = [
  {
    name: "Tenant Scouting Only",
    badge: "One-Time Service",
    description: "Ideal for NRIs who prefer self-managing rent but require corporate, vetted tenant discovery.",
    exampleRate: "15 Days Equivalent Rent",
    rateSubtext: "Illustrative example rate · Payable only upon successful lease signing",
    features: [
      { name: "Multi-platform professional property listing", included: true },
      { name: "Accompanied prospective tenant viewings", included: true },
      { name: "CIBIL credit check & employment verification", included: true },
      { name: "Local police tenant verification filing", included: true },
      { name: "Lawyer-drafted digital lease agreement", included: true },
      { name: "Key handover & move-in inventory report", included: true },
      { name: "Escrow automated rent collection", included: false },
      { name: "Quarterly 360° inspection reports", included: false },
      { name: "24/7 emergency repair & vendor coordination", included: false },
      { name: "Annual Form 15CA/CB tax remittance assistance", included: false },
    ],
    ctaText: "Request Tenant Scouting",
    href: "/contact?interest=aegis&plan=scouting",
  },
  {
    name: "Complete Aegis Management",
    badge: "Most Popular · Complete Stewardship",
    isPopular: true,
    description: "Total end-to-end institutional protection. We steward your asset like our own, every single month.",
    exampleRate: "7.5% – 9% of Monthly Rent",
    rateSubtext: "Illustrative rate (Min ₹3,500/mo) · Deducted directly from monthly rent escrow",
    features: [
      { name: "Multi-platform professional property listing", included: true },
      { name: "Accompanied prospective tenant viewings", included: true },
      { name: "CIBIL credit check & employment verification", included: true },
      { name: "Local police tenant verification filing", included: true },
      { name: "Lawyer-drafted digital lease agreement", included: true },
      { name: "Key handover & move-in inventory report", included: true },
      { name: "Escrow automated rent collection on 5th of each month", included: true },
      { name: "Quarterly 360° inspection reports with HD photo evidence", included: true },
      { name: "24/7 emergency repair & vendor coordination", included: true },
      { name: "Annual Form 15CA/CB tax remittance assistance", included: true },
    ],
    ctaText: "Start Aegis Management",
    href: "/contact?interest=aegis&plan=complete",
  },
];
