import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { SITE_CONFIG, getWhatsAppUrl, PREFILLED_MESSAGES } from '../config/site';
import { Mail, MessageCircle, Clock, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';

interface ContactProps {
  selectedServiceTitle?: string;
  onOpenPaymentInfo?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedServiceTitle, onOpenPaymentInfo }) => {
  return (
    <section id="contact" className="section-py bg-brand-blue-light/50 relative border-t border-slate-100">
      <div className="container">
        <SectionHeading
          badge="Get in Touch"
          title="Start Your Guided Developer Journey"
          subtitle="Submit your requirements through our simple form or connect with us directly via WhatsApp or official email."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-premium transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-navy">Fastest Response: WhatsApp</h3>
                  <p className="text-xs text-brand-muted">Direct mentor chat</p>
                </div>
              </div>
              <p className="text-xs text-brand-dark/80 leading-relaxed mb-4">
                Have a quick dilemma, want to confirm slot availability, or prefer sending your details directly? Message us on WhatsApp.
              </p>
              <a
                href={getWhatsAppUrl(PREFILLED_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Official Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-premium transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-soft text-brand-blue flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-navy">Official Business Email</h3>
                  <p className="text-xs text-brand-muted">For detailed enquiries & roadmaps</p>
                </div>
              </div>
              <p className="text-xs text-brand-dark/80 leading-relaxed mb-4">
                Reach out for institutional mentorship, roadmap questions, or formal communications.
              </p>
              <a
                href={`mailto:${SITE_CONFIG.officialEmail}`}
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-dark text-white text-xs font-bold transition-colors shadow-sm break-all"
              >
                <Mail className="w-4 h-4" />
                <span>{SITE_CONFIG.officialEmail}</span>
              </a>
            </div>

            {/* Operating Hours & Payment Note */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                <Clock className="w-4 h-4 text-brand-blue" />
                <span>Operating Timelines</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                • Written Roadmaps: Delivered within <strong>48 hours</strong> of completed requirements.<br />
                • Guidance Calls: Scheduled Mon–Sat, 10:00 AM – 8:00 PM IST via Google Meet.
              </p>
              
              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenPaymentInfo}
                  className="text-xs font-bold text-brand-blue hover:text-brand-blue-hover inline-flex items-center gap-1"
                >
                  <span>View UPI Payment Instructions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Comprehensive Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm initialServiceId={selectedServiceTitle} />
          </div>
        </div>
      </div>
    </section>
  );
};
