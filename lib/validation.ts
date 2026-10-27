export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  nriLocation: string;
  cityRequired: string;
  serviceInterest: "aegis" | "sparsh" | "combined";
  preferredContact: "whatsapp" | "email" | "phone" | "video";
  message?: string;
  consent: boolean;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  nriLocation?: string;
  cityRequired?: string;
  serviceInterest?: string;
  preferredContact?: string;
  consent?: string;
}

export function validateConsultationForm(data: ConsultationFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (minimum 2 characters).";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone validation
  const cleanPhone = data.phone.replace(/[\s\-\(\)]/g, "");
  if (!cleanPhone || cleanPhone.length < 7 || !/^\+?[0-9]+$/.test(cleanPhone)) {
    errors.phone = "Please enter a valid contact number (digits and optional +).";
  }

  // Location validation
  if (!data.nriLocation) {
    errors.nriLocation = "Please select your current country of residence.";
  }

  // Indian city validation
  if (!data.cityRequired) {
    errors.cityRequired = "Please select the Indian city where support is required.";
  }

  // Consent validation
  if (!data.consent) {
    errors.consent = "You must agree to the privacy policy to request a consultation.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
