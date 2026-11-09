import { ServiceItem, FAQItem, JourneyStage, StepItem, WhyChooseItem, TransparencyBoundaries } from '../types';
import { PREFILLED_MESSAGES } from './site';

export const SERVICES: ServiceItem[] = [
  {
    id: "written-roadmap",
    title: "Written Developer Roadmap",
    subtitle: "A personalized, step-by-step learning blueprint tailored to your goals.",
    price: 199,
    currency: "₹",
    deliveryTime: "Delivered within 48 hours after receiving details",
    isFeatured: false,
    scopeNote: "One-time written service. Does not include a consultation call or ongoing support.",
    description: "Get a structured, step-by-step developer roadmap tailored to your background, target stack, and available study hours. Eliminate tutorial confusion completely.",
    features: [
      "Personalized developer roadmap based on the student's goals",
      "Recommended technologies and tools",
      "Step-by-step learning sequence",
      "Actionable 30-day learning plan",
      "Beginner-friendly project suggestions",
      "Digital delivery within 48 hours after receiving all required information"
    ],
    ctaText: "Get This Roadmap",
    whatsappMessage: PREFILLED_MESSAGES.roadmap
  },
  {
    id: "one-to-one-call",
    title: "One-to-One Guidance Call",
    subtitle: "Direct 30-minute private consultation to untangle your doubts.",
    price: 299,
    currency: "₹",
    duration: "30-minute private session",
    deliveryTime: "Scheduled via Google Meet",
    isFeatured: false,
    scopeNote: "One-time consultation call. Does not include a personalized written roadmap or ongoing support.",
    description: "Connect face-to-face in a focused 30-minute video session to evaluate your current skillset, pick the best programming path, and get straight answers to your questions.",
    features: [
      "One private 30-minute Google Meet consultation",
      "Developer career direction",
      "Programming language and technology selection guidance",
      "Discussion of the student's current doubts and blockers",
      "Clear and actionable next steps",
      "Realistic feedback based on the student's goals"
    ],
    ctaText: "Book a Guidance Call",
    whatsappMessage: PREFILLED_MESSAGES.oneToOne
  },
  {
    id: "complete-package",
    title: "Complete Developer Guidance Package",
    subtitle: "The ultimate clarity combo: live consultation plus comprehensive custom roadmap.",
    price: 499,
    currency: "₹",
    duration: "30-minute call + comprehensive written roadmap",
    deliveryTime: "Roadmap delivered within 48h after consultation",
    isFeatured: true,
    featuredBadge: "Recommended Package",
    scopeNote: "Comprehensive combo: includes live consultation + personalized roadmap + 7-day follow-up.",
    description: "Our complete mentorship experience: discuss your dilemma 1-on-1 first, then receive an extensive custom written roadmap with a 90-day execution framework.",
    features: [
      "One 30-minute private Google Meet consultation",
      "Personalized written developer roadmap",
      "Recommended technologies and learning sequence",
      "Structured 90-day action plan",
      "Project and portfolio recommendations",
      "One follow-up clarification within 7 days",
      "Written roadmap delivered within 48 hours after the consultation"
    ],
    ctaText: "Choose Complete Package",
    whatsappMessage: PREFILLED_MESSAGES.completePackage
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Submit Your Enquiry",
    description: "Choose your preferred guidance service and share your college background, current coding knowledge, learning goals, and challenges through our enquiry form or WhatsApp.",
    detail: "Tell us where you are in your developer journey and what kind of direction you need."
  },
  {
    number: "02",
    title: "Requirements Review",
    description: "We review your background, current knowledge, goals, and specific questions to understand which guidance service best fits your needs.",
    detail: "Your requirements help us prepare relevant recommendations based on your current learning stage."
  },
  {
    number: "03",
    title: "Service Confirmation",
    description: "We confirm your selected service, clarify what is included, and arrange a mutually convenient Google Meet slot when a consultation is part of your package.",
    detail: "Know exactly what you're purchasing before proceeding with payment."
  },
  {
    number: "04",
    title: "Payment Instructions",
    description: "Once your service is confirmed, we share the official UPI ID or QR code. Complete your one-time payment using your preferred UPI application.",
    detail: "Payment details are shared directly after enquiry review and service confirmation."
  },
  {
    number: "05",
    title: "Guidance Delivery",
    description: "Attend your scheduled 30-minute consultation or receive your personalized written roadmap, depending on the service you selected.",
    detail: "Written roadmaps are delivered within 48 hours after the required information is received, or within 48 hours after consultation for the Complete Package."
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: 1,
    title: "Confusion & Information Overload",
    tagline: "Drowning in endless YouTube tutorials & conflicting advice",
    description: "You want to code, but you're constantly second-guessing: Which language is best? Should I learn React, Python, or Flutter? Am I wasting my time?",
    state: "problem",
    keyPoints: [
      "Tutorial paralysis & unfinished courses",
      "Zero idea what companies actually expect",
      "Anxiety about AI replacing developers"
    ],
    icon: "HelpCircle",
    insight: "Where 80% of self-learners get stuck for months."
  },
  {
    step: 2,
    title: "Clear Direction & Goal Setting",
    tagline: "PathToDev personalizes your unique tech trajectory",
    description: "Through our 1-on-1 guidance or written roadmap, we analyze your strengths, interests, and college timeline to establish one definitive technical direction.",
    state: "transition",
    keyPoints: [
      "Elimination of irrelevant technologies",
      "Targeted focus on one viable track (e.g. Frontend / Backend)",
      "Realistic timeline built around your academic life"
    ],
    icon: "Compass",
    insight: "Where PathToDev provides targeted clarity."
  },
  {
    step: 3,
    title: "Structured, Step-by-Step Learning",
    tagline: "Executing with curated resources and zero guesswork",
    description: "Instead of random tutorials, you follow an ordered sequence of concepts. Every topic builds systematically on the previous one.",
    state: "active",
    keyPoints: [
      "No skipped prerequisites",
      "High-signal documentation & resources",
      "Consistent daily 1-2 hour study blueprint"
    ],
    icon: "BookOpen",
    insight: "Where daily consistency replaces endless tutorials."
  },
  {
    step: 4,
    title: "Building Real-World Projects",
    tagline: "Moving beyond generic to-do lists and cloned weather apps",
    description: "Apply your knowledge to practical, portfolio-worthy software projects that showcase real problem-solving, clean code structure, and modern tools.",
    state: "active",
    keyPoints: [
      "Projects relevant to current tech standards",
      "Proper Git & GitHub version control habits",
      "Clear documentation and deployable demos"
    ],
    icon: "Code2",
    insight: "Where portfolio-grade software takes shape."
  },
  {
    step: 5,
    title: "Measurable Progress & Confidence",
    tagline: "Clarity, self-reliance, and readiness for future opportunities",
    description: "You now know where you stand, what you are building next, and how your skills map to real developer roles—without relying on hype or false promises.",
    state: "outcome",
    keyPoints: [
      "Genuine developer confidence",
      "Clean showcase portfolio ready for review",
      "Clear roadmap for continuous growth"
    ],
    icon: "TrendingUp",
    insight: "Where authentic competence opens real career doors."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who is PathToDev for, and is it suitable for complete beginners?",
    answer: "PathToDev is designed for college students, recent graduates, and beginners who want direction in software development. You do not need prior coding experience. Whether you are starting from zero, learning programming fundamentals, or confused about which technology to choose, we help you understand your options and create a practical learning direction based on your goals."
  },
  {
    id: "faq-2",
    question: "Which guidance service should I choose?",
    answer: "We offer three one-time guidance services:\n\n**Written Developer Roadmap — ₹199**\nA personalized PDF roadmap with recommended technologies, a step-by-step learning sequence, beginner project suggestions, and a 30-day action plan. Delivered within 48 hours after we receive your completed requirements. No consultation call is included.\n\n**One-to-One Guidance Call — ₹299**\nOne private 30-minute Google Meet consultation to discuss your goals, technology choices, learning direction, and current questions. No written roadmap or ongoing chat support is included.\n\n**Complete Developer Guidance Package — ₹499**\nOur combined package includes one 30-minute Google Meet consultation, a personalized written roadmap with a 90-day action plan, project and portfolio recommendations, and one follow-up clarification message within 7 days. The roadmap is delivered within 48 hours after your consultation.\n\nChoose the written roadmap if you prefer a structured document, the call if you want direct discussion, or the complete package if you want both."
  },
  {
    id: "faq-3",
    question: "How do I book a one-to-one guidance call?",
    answer: "Choose the One-to-One Guidance Call or Complete Developer Guidance Package and send us an enquiry through WhatsApp or the website contact form. We review your requirements, confirm the selected service and payment details, and coordinate a mutually convenient Google Meet time. Calls are scheduled Monday to Saturday, between 10:00 AM and 8:00 PM IST."
  },
  {
    id: "faq-4",
    question: "How will I receive my roadmap, and when?",
    answer: "Your roadmap is prepared as a structured digital PDF and shared through the email address and WhatsApp contact you provide.\n\nFor the ₹199 Written Developer Roadmap, delivery is within 48 hours after we receive your completed requirements.\n\nFor the ₹499 Complete Developer Guidance Package, delivery is within 48 hours after your consultation call."
  },
  {
    id: "faq-5",
    question: "How can I make payment?",
    answer: "Payments are handled manually through UPI. After reviewing your requirements and confirming your selected service, we share the official UPI payment details through WhatsApp or email.\n\nYou can pay using any UPI-enabled application. Once payment is complete, share the payment confirmation with us so we can proceed with your service.\n\nAll services are one-time payments. There are no recurring subscriptions or automated charges."
  },
  {
    id: "faq-6",
    question: "Do you provide coding classes or courses?",
    answer: "No. PathToDev focuses on developer guidance and career direction, not teaching through coding classes or selling video courses. We help you identify what to learn, which technologies to consider, which resources to follow, and how to approach practical projects. You remain responsible for learning and implementing the concepts yourself."
  },
  {
    id: "faq-7",
    question: "Can you complete my assignments or write code for me?",
    answer: "No. We do not complete college assignments, write academic submissions, solve exams, or build projects on your behalf. Our role is to provide learning direction, explain development choices, recommend resources, and help you understand how to approach your own projects."
  },
  {
    id: "faq-8",
    question: "Can I ask follow-up questions after receiving guidance?",
    answer: "The ₹499 Complete Developer Guidance Package includes one follow-up clarification message within 7 days of receiving your roadmap.\n\nThe ₹199 Written Developer Roadmap and ₹299 One-to-One Guidance Call are focused, one-time services and do not include ongoing chat support or unlimited follow-up questions. You can enquire about another service if you need additional guidance."
  },
  {
    id: "faq-9",
    question: "Do you guarantee internships or placements?",
    answer: "No. PathToDev is a developer guidance service, not a placement agency or job broker. We cannot guarantee internships, jobs, salary packages, or interview results. Our goal is to help you make informed learning decisions, build relevant skills, and work towards your career goals with a realistic plan."
  },
  {
    id: "faq-10",
    question: "Can I choose my own development field?",
    answer: "Yes. You can discuss your preferred field, whether it is Frontend Development, Backend Development, Full-Stack Development, Mobile App Development, or another area of software development. We help you understand suitable technologies and learning sequences based on your interests, current knowledge, and goals."
  },
  {
    id: "faq-11",
    question: "What if I need a refund, cancellation, or call rescheduling?",
    answer: "Our Terms & Conditions state that payments are generally non-refundable once personalized preparation has begun, because creating roadmaps and preparing consultations requires individual analysis.\n\nOur current terms do not specify a separate cancellation window, refund processing timeframe, or fixed call-rescheduling notice period. If your plans change or you have a payment-related concern, contact us through WhatsApp so we can clarify the situation before making any assumptions about a refund or rescheduled session."
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Personalized Developer Roadmaps",
    description: "Tailored learning blueprints constructed around your individual goals, current coding background, and academic semester schedule.",
    icon: "Map"
  },
  {
    title: "Beginner-Friendly Guidance",
    description: "Approachable explanations and patient, judgment-free support that demystifies software concepts without intimidating jargon.",
    icon: "HeartHandshake"
  },
  {
    title: "Technology & Stack Selection",
    description: "Objective guidance to help you commit to one viable technology path instead of second-guessing or hopping between stacks.",
    icon: "Navigation"
  },
  {
    title: "Practical Project Recommendations",
    description: "Curated suggestions for meaningful portfolio projects that demonstrate genuine problem-solving, clean architecture, and modern tools.",
    icon: "Terminal"
  },
  {
    title: "Affordable Student-First Pricing",
    description: "Transparent, accessible services starting at ₹199 with no hidden charges, upselling pressure, or recurring subscriptions.",
    icon: "Tag"
  },
  {
    title: "Honest & Realistic Advice",
    description: "Grounded guidance with zero placement guarantees, exaggerated salary claims, or unrealistic shortcuts to competence.",
    icon: "ShieldCheck"
  }
];

export const TRANSPARENCY_BOUNDARIES: TransparencyBoundaries = {
  badge: "Transparent Boundaries",
  title: "Our Commitment to Honest Guidance",
  description: "Clear expectations build long-term trust and genuine developer capability.",
  whatWeDo: [
    "Assess your current coding foundation and college study availability.",
    "Recommend a focused programming stack aligned with your goals.",
    "Suggest meaningful project ideas with practical implementation steps.",
    "Provide dedicated 1-on-1 consultation to resolve specific roadblocks."
  ],
  whatWeDoNotDo: [
    "Make false promises of guaranteed internships, jobs, or high salaries.",
    "Sell generic, recorded video courses or expensive coaching bootcamps.",
    "Act as a placement consultancy or recruitment middleman.",
    "Lock students into confusing subscription tiers or recurring payments."
  ]
};
