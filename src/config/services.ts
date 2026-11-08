import { ServiceItem, FAQItem, JourneyStage, StepItem } from '../types';
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
    icon: "HelpCircle"
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
    icon: "Compass"
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
    icon: "BookOpen"
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
    icon: "Code2"
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
    icon: "TrendingUp"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who can use PathToDev?",
    answer: "PathToDev is designed specifically for college students (1st through final year), recent graduates, self-taught beginners, and early-stage career switchers who feel overwhelmed by tech choices and need realistic, personalized guidance."
  },
  {
    id: "faq-2",
    question: "Is PathToDev suitable for complete beginners?",
    answer: "Yes, absolutely. A significant portion of students we guide have never written a line of code or have only touched basic syntax in college. We explain concepts in plain, non-intimidating language and help you start on the right foot without wasting months."
  },
  {
    id: "faq-3",
    question: "Do you provide coding classes?",
    answer: "No. PathToDev is strictly a developer guidance and mentorship service. We do not run coding classes, live bootcamps, or sell pre-recorded video courses. Instead, we curate the best learning paths, direct you to optimal free and high-quality resources, and give you an actionable plan to execute."
  },
  {
    id: "faq-4",
    question: "How will I receive my roadmap?",
    answer: "Your personalized developer roadmap is delivered digitally as a structured PDF document sent directly to your registered email and WhatsApp. For written roadmaps, delivery is within 48 hours after we receive your completed requirements questionnaire."
  },
  {
    id: "faq-5",
    question: "How do I book a guidance call?",
    answer: "Select the 'One-to-One Guidance Call' or 'Complete Developer Guidance Package' on our website, then connect via WhatsApp or our enquiry form. Once service details are confirmed and payment is complete, we coordinate a mutually convenient time slot and share a Google Meet calendar invite."
  },
  {
    id: "faq-6",
    question: "How can I make payment?",
    answer: "We support direct manual UPI payments through any UPI-enabled application (Google Pay, PhonePe, Paytm, BHIM, Cred, or bank apps). We share our UPI details after confirming your requirements, and you can confirm by sending a screenshot."
  },
  {
    id: "faq-7",
    question: "Do you guarantee internships or jobs?",
    answer: "No. PathToDev is an honest mentorship and guidance service, not a placement agency or job broker. We do not make false guarantees about hiring, salaries, or placements. Our mission is to give you genuine clarity, structured skills roadmaps, and project direction so you can build authentic competence."
  },
  {
    id: "faq-8",
    question: "Can I ask follow-up questions?",
    answer: "The 'Complete Developer Guidance Package' includes one follow-up clarification message within 7 days of receiving your roadmap. For other services, additional calls or roadmaps can be scheduled as separate sessions whenever you need fresh direction."
  },
  {
    id: "faq-9",
    question: "Can I choose my own development field?",
    answer: "Yes. Whether your interest lies in Frontend Development, Backend Development, Full-Stack Web Development, Mobile Apps, or choosing between languages like JavaScript/TypeScript, Python, Java, or C++, we tailor our advice and roadmaps to your chosen field and college timeline."
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Personalized Developer Roadmaps",
    description: "Every student has different hours, college commitments, and background. We build roadmaps around you, not generic one-size-fits-all templates.",
    icon: "Map"
  },
  {
    title: "Beginner-Friendly Guidance",
    description: "No intimidating tech jargon or superiority complex. We meet you where you are and explain concepts in clear, intuitive terms.",
    icon: "Smile"
  },
  {
    title: "Clear Learning Direction",
    description: "Stop jumping between tutorials every week. Get a disciplined, structured order of topics to learn from foundation to real-world projects.",
    icon: "Navigation"
  },
  {
    title: "Practical Project Recommendations",
    description: "Move away from cliché clones that everyone builds. Learn what kind of projects genuinely highlight problem-solving skills.",
    icon: "Terminal"
  },
  {
    title: "Affordable Services",
    description: "Transparent, student-accessible pricing starting at just ₹199. Quality mentorship should be accessible to every aspiring coder.",
    icon: "Tag"
  },
  {
    title: "Honest & Realistic Advice",
    description: "Zero hype, zero placement gimmicks, and zero fake guarantees. We offer grounded, practical direction for sustainable long-term growth.",
    icon: "ShieldCheck"
  }
];
