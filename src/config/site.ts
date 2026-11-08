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
  WHATSAPP_NUMBER: "916201766193",
  WHATSAPP_DISPLAY: "+91 62017 66193",
  WHATSAPP_BASE_URL: "https://wa.me/916201766193",
  isWhatsAppConfigured: true,

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
 * Builds a direct WhatsApp chat URL with properly encoded pre-filled text.
 * Strictly uses the official WhatsApp URL (https://wa.me/916201766193).
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = (SITE_CONFIG.WHATSAPP_NUMBER || "916201766193").replace(/[^0-9]/g, "");
  const defaultText = PREFILLED_MESSAGES.general;
  const message = customMessage !== undefined ? customMessage : defaultText;
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}${text ? `?text=${text}` : ''}`;
}

export const PREFILLED_MESSAGES = {
  general: "Hi PathToDev! I would like to know more about your developer guidance services.",
  serviceEnquiry: "Hi PathToDev! I am interested in your developer guidance services. Could you please help me?",
  quickQuestion: "Hi PathToDev! I have a quick question about your services.",
  roadmap: "Hi PathToDev! I am interested in the Written Developer Roadmap (₹199). Could you please help me with the next steps?",
  oneToOne: "Hi PathToDev! I would like to book a One-to-One Guidance Call (₹299). Could you please share available slots?",
  completePackage: "Hi PathToDev! I am interested in the Complete Developer Guidance Package (₹499). Could you please help me get started?",
};
