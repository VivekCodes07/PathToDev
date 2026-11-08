/**
 * Centralized Site Configuration for PathToDev
 * All business details, contact information, and integrations are managed here.
 */

export const SITE_CONFIG = {
  brandName: "PathToDev",
  tagline: "Find Your Path in Tech.",
  category: "Developer Guidance & Career Mentorship",
  officialEmail: "hello.pathtodev@gmail.com",
  
  // WhatsApp Configuration:
  // Placeholder indicator: Leave empty or set to valid phone number with country code (e.g., '919876543210')
  // When empty or placeholder, user is guided via friendly placeholder UI.
  WHATSAPP_NUMBER: "", // Set by owner, e.g., "91XXXXXXXXXX"
  isWhatsAppConfigured: false, // Set to true when actual business number is provided

  // Social Media Links (Set actual URLs when available; leave empty to keep cleanly disabled)
  socials: {
    instagram: "", // e.g. "https://instagram.com/pathtodev"
    linkedin: "",  // e.g. "https://linkedin.com/company/pathtodev"
    github: "",    // e.g. "https://github.com/pathtodev"
    twitter: "",   // e.g. "https://x.com/pathtodev"
  },

  // UPI Payment Configuration (Manual UPI Workflow)
  payment: {
    upiId: "pathtodev@upi", // Configurable UPI ID placeholder
    merchantName: "PathToDev Guidance",
    qrCodeImage: "", // Path to uploaded UPI QR image asset (e.g., '/images/upi-qr.png')
    isConfigured: false, // When false, indicates payment details are shared upon enquiry confirmation
    instructions: [
      "Customer submits an enquiry via website form or WhatsApp.",
      "PathToDev reviews requirements to ensure personalized guidance.",
      "Customer confirms the service and preferred consultation slot.",
      "Official UPI payment instructions are shared to complete payment.",
      "Selected guidance service is delivered within 48h or at the scheduled session."
    ]
  },

  // Enquiry Form Service Integration
  form: {
    // When configured with a Google Forms / Formspree / Web3Forms endpoint:
    endpointUrl: "", // e.g. "https://formspree.io/f/xyz" or Google Form action URL
    isConfigured: false, // Indicates whether an endpoint is live
  },

  // Brand Colours Reference
  colors: {
    deepNavy: "#101B35",
    electricBlue: "#3B82F6",
    white: "#FFFFFF",
    lightBlue: "#F5F8FF",
    darkText: "#17233C",
    mutedGrey: "#64748B",
  }
};

/**
 * Builds a direct WhatsApp chat URL with encoded pre-filled text.
 * Falls back to web or mailto when WhatsApp is in placeholder mode.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = SITE_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const defaultText = "Hello PathToDev, I would like to know more about your services.";
  const text = encodeURIComponent(customMessage || defaultText);

  if (!number || !SITE_CONFIG.isWhatsAppConfigured) {
    // If WhatsApp number is not yet configured, provide a mailto or placeholder indicator URL
    return `mailto:${SITE_CONFIG.officialEmail}?subject=${encodeURIComponent("PathToDev Guidance Enquiry")}&body=${text}`;
  }

  return `https://wa.me/${number}?text=${text}`;
}

export const PREFILLED_MESSAGES = {
  general: "Hello PathToDev, I would like to know more about your services.",
  roadmap: "Hello PathToDev, I am interested in the Written Developer Roadmap service.",
  oneToOne: "Hello PathToDev, I would like to book a One-to-One Guidance Call.",
  completePackage: "Hello PathToDev, I am interested in the Complete Developer Guidance Package.",
};
