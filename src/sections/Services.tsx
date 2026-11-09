import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES } from '../config/services';
import { ServiceItem } from '../types';
import { ShieldCheck, Info } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenPaymentInfo: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectService,
  onOpenPaymentInfo
}) => {
  return (
    <section id="services" className="section-py bg-white relative">
      <div className="container">
        <SectionHeading
          badge="Services & Pricing"
          title="Simple, Affordable Developer Guidance"
          subtitle="Clear pricing, personalized direction, and practical next steps. Choose the guidance format that fits your current learning stage."
          align="center"
        />

        {/* 3 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col h-full ${
                idx === 2 ? 'md:col-span-2 md:max-w-lg md:mx-auto md:w-full lg:col-span-1 lg:max-w-none' : ''
              }`}
            >
              <ServiceCard
                service={service}
                onSelectService={onSelectService}
                onOpenPaymentInfo={onOpenPaymentInfo}
              />
            </div>
          ))}
        </div>

        {/* Bottom Trust & Process Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-brand-blue-light border border-brand-blue/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-navy">Honest Direction, Zero False Promises</h4>
              <p className="text-xs text-brand-muted mt-0.5">
                PathToDev provides guidance and structured roadmaps. We do not offer coding classes, daily doubt-solving, ongoing chat support, or guaranteed placements.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              className="text-xs font-bold text-brand-blue hover:text-brand-blue-hover underline underline-offset-4"
            >
              Need help deciding which service fits you? →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
