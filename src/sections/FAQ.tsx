import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { FAQS } from '../config/services';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, PREFILLED_MESSAGES } from '../config/site';

export const FAQ: React.FC = () => {
  return (
    <section id="faqs" className="section-py bg-white relative">
      <div className="container">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our developer guidance, roadmaps, payment process, and mentorship scope."
          align="center"
        />

        {/* FAQ Accordion Component */}
        <FAQAccordion items={FAQS} />

        {/* Bottom Contact Prompt if question not listed */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-xl mx-auto">
          <HelpCircle className="w-6 h-6 text-brand-blue mx-auto mb-2" />
          <h4 className="text-sm font-bold text-brand-navy">Have a question not listed here?</h4>
          <p className="text-xs text-brand-muted mt-1">
            We are always happy to clarify before you book any service.
          </p>
          <div className="mt-4">
            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.quickQuestion)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-brand-navy text-xs font-bold border border-slate-200 transition-colors shadow-subtle"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
