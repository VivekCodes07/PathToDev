import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { HOW_IT_WORKS_STEPS } from '../config/services';
import { Compass, MessageCircle, FileQuestion, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, PREFILLED_MESSAGES } from '../config/site';

export const HowItWorks: React.FC = () => {
  const stepIcons = [Compass, MessageCircle, FileQuestion, CreditCard, Sparkles];

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="section-py bg-brand-blue-light/40 relative border-t border-slate-100">
      <div className="container">
        <SectionHeading
          badge="Seamless Process"
          title="How It Works in 5 Clear Steps"
          subtitle="From initial doubt to structured execution: a simple, transparent workflow with zero complicated onboarding."
          align="center"
        />

        {/* Steps Grid */}
        <div className="relative pt-6">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-blue/50 to-brand-blue/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const IconComponent = stepIcons[idx] || Sparkles;

              return (
                <div
                  key={step.number}
                  className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 relative group"
                >
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue-soft border border-brand-blue/20 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-brand-blue/30 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-brand-navy leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Micro Detail Pill */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[11px] text-slate-500 italic">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Section CTA */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-subtle text-center max-w-2xl mx-auto">
          <h4 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
            Ready to Get Started?
          </h4>
          <p className="text-sm text-brand-muted mt-2 max-w-md mx-auto leading-relaxed">
            Choose the guidance service that matches your current needs.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Primary Action: Explore Services */}
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="btn-primary w-full sm:w-auto group inline-flex items-center justify-center gap-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Secondary Action: WhatsApp */}
            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
