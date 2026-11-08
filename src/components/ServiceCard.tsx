import React from 'react';
import { Check, Clock, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { getWhatsAppUrl } from '../config/site';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService?: (service: ServiceItem) => void;
  onOpenPaymentInfo?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onOpenPaymentInfo
}) => {
  const isFeatured = service.isFeatured;
  const whatsappUrl = getWhatsAppUrl(service.whatsappMessage);

  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl bg-white transition-all duration-300 ${
        isFeatured
          ? 'border-2 border-brand-blue shadow-premium ring-4 ring-brand-blue/10 md:-translate-y-2'
          : 'border border-slate-200/90 shadow-subtle hover:shadow-premium hover:-translate-y-1'
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue text-white shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            {service.featuredBadge || 'Most Popular'}
          </span>
        </div>
      )}

      {/* Card Header */}
      <div className={`p-6 sm:p-8 ${isFeatured ? 'bg-gradient-to-b from-brand-blue-soft/50 to-white' : ''} rounded-t-2xl`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy leading-snug">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-brand-muted leading-relaxed min-h-[40px]">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="mt-6 flex items-baseline gap-1.5 pb-6 border-b border-slate-100">
          <span className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight">
            {service.currency}{service.price}
          </span>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-muted">
            / one-time
          </span>
        </div>

        {/* Delivery / Session Tag */}
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
          <Clock className="w-4 h-4 text-brand-blue shrink-0" />
          <span>{service.deliveryTime}</span>
        </div>
      </div>

      {/* Feature Inclusions List */}
      <div className="p-6 sm:p-8 pt-0 flex-1 flex flex-col justify-between">
        <div className="space-y-3.5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            What's included:
          </p>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-dark leading-relaxed">
                <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isFeatured ? 'bg-brand-blue text-white' : 'bg-brand-blue-soft text-brand-blue'}`}>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
          {/* Primary CTA (WhatsApp prefilled enquiry) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onSelectService) {
                // Also trigger enquiry form scroll/selection if requested
              }
            }}
            className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm ${
              isFeatured
                ? 'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-brand-blue/20 hover:shadow-glow'
                : 'bg-brand-navy hover:bg-brand-dark text-white'
            }`}
          >
            <span>{service.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA (Direct Form Selection / Payment info) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectService && onSelectService(service)}
              className="flex-1 text-center py-2 text-xs font-semibold text-slate-600 hover:text-brand-blue transition-colors"
            >
              Fill Enquiry Form
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={() => onOpenPaymentInfo && onOpenPaymentInfo(service)}
              className="flex-1 text-center py-2 text-xs font-semibold text-slate-600 hover:text-brand-blue transition-colors"
            >
              UPI Payment Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
