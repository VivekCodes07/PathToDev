# PathToDev — Premium Developer Guidance Website

Official business website for **PathToDev** — Developer Guidance & Career Mentorship for college students and beginner developers.

> **Tagline:** Find Your Path in Tech.  
> **Official Email:** hello.pathtodev@gmail.com  
> **Brand Theme:** Deep Navy (`#101B35`), Electric Blue (`#3B82F6`), White (`#FFFFFF`), Light Blue (`#F5F8FF`).

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build
```bash
npm run build
```
Generates optimized static assets in the `/dist` directory.

---

## ⚙️ Centralized Configuration (`src/config/site.ts`)

All business parameters are centralized in a single configuration file so you never need to edit individual components:

| Parameter | Purpose | Location |
| :--- | :--- | :--- |
| `WHATSAPP_NUMBER` | Your WhatsApp Business number (e.g., `"919876543210"`) | `src/config/site.ts` |
| `isWhatsAppConfigured` | Set to `true` when live number is supplied | `src/config/site.ts` |
| `officialEmail` | Official business contact email | `src/config/site.ts` |
| `payment.upiId` | Your active merchant UPI ID | `src/config/site.ts` |
| `payment.qrCodeImage` | Path to your uploaded UPI QR image | `src/config/site.ts` |
| `socials.*` | Instagram, LinkedIn, GitHub URLs | `src/config/site.ts` |
| `form.endpointUrl` | Google Forms / Formspree URL for enquiry form | `src/config/site.ts` |

---

## 🎨 Approved Logo Integration

- Place your official logo vector or PNG in:
  ```
  public/logo/pathtodev-logo.svg
  ```
- The website will automatically detect and render your approved brand logo without modifying colours or typography.
- Until provided, a clean, clearly marked official placeholder is displayed.

---

## 📦 Project Architecture

```
PathToDev/
├── public/
│   ├── favicon.svg          # Brand favicon
│   └── logo/                # Approved brand logo asset directory
├── src/
│   ├── config/
│   │   ├── site.ts          # Centralized business, contact & UPI configuration
│   │   └── services.ts      # Services, pricing (₹199, ₹299, ₹499), FAQs, steps
│   ├── types/
│   │   └── index.ts         # TypeScript definitions
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navbar with mobile drawer
│   │   ├── Footer.tsx       # Deep navy footer with quick links & policies
│   │   ├── Logo.tsx         # Logo renderer with approved placeholder logic
│   │   ├── SectionHeading.tsx # Uniform section headings & badges
│   │   ├── ServiceCard.tsx  # Pricing cards with features & WhatsApp triggers
│   │   ├── FAQAccordion.tsx # Accessible FAQ accordion
│   │   ├── ContactForm.tsx  # Validated student requirements enquiry form
│   │   ├── PaymentModal.tsx # Manual UPI payment guide & QR modal
│   │   ├── LegalModal.tsx   # Privacy Policy & Terms modal
│   │   └── FloatingWhatsApp.tsx # Floating WhatsApp widget with prefilled topics
│   ├── sections/
│   │   ├── Hero.tsx         # High-impact hero with workspace video & CTA
│   │   ├── About.tsx        # Problem vs PathToDev solution & philosophy
│   │   ├── Services.tsx     # 3 pricing tiers & feature matrix
│   │   ├── HowItWorks.tsx   # 5-step transparent workflow
│   │   ├── DeveloperJourney.tsx # Interactive storytelling stage stepper
│   │   ├── WhyPathToDev.tsx # Grounded pillars & honest boundaries comparison
│   │   ├── FAQ.tsx          # 9 official questions answered clearly
│   │   └── Contact.tsx      # Direct WhatsApp/Email cards & enquiry form
│   ├── App.tsx              # Main application root
│   ├── main.tsx             # React DOM entry point
│   └── index.css            # Custom design system & typography stylesheet
├── index.html               # Semantic HTML & Open Graph meta tags
├── package.json
└── vite.config.js
```

---

## 🔒 Positioning Guarantee
PathToDev is an honest developer guidance and mentorship platform. It explicitly avoids false placement guarantees, fake reviews, or inflated statistics.
