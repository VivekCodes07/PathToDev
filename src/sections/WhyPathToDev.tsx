import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { WHY_CHOOSE_ITEMS, TRANSPARENCY_BOUNDARIES } from '../config/services';
import {
  Map,
  HeartHandshake,
  Navigation,
  Terminal,
  Tag,
  ShieldCheck,
  Check,
  X,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Map,
  HeartHandshake,
  Navigation,
  Terminal,
  Tag,
  ShieldCheck,
};

export const WhyPathToDev: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-us" className="section-py bg-brand-blue-light/50 relative border-t border-slate-100">
      <div className="container">
        <SectionHeading
          badge="Why PathToDev"
          title="Grounded Mentorship Built on Real Needs"
          subtitle="We focus on what actually moves you forward: tailored roadmaps, realistic timelines, and practical project advice without exaggerated marketing claims."
          align="center"
        />

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const IconComp = ICON_MAP[item.icon] || ShieldCheck;

            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-brand-blue-soft text-brand-blue flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Positioning Comparison Table: What We Do vs What We Do NOT Do */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-premium overflow-hidden">
          <div className="p-6 bg-brand-navy text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between border-b border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                {TRANSPARENCY_BOUNDARIES.badge}
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                {TRANSPARENCY_BOUNDARIES.title}
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-2 sm:mt-0 max-w-xs">
              {TRANSPARENCY_BOUNDARIES.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* What PathToDev Does */}
            <div className="p-6 sm:p-8 space-y-4 bg-emerald-50/20">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-800 uppercase tracking-wider">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>What We Do</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {TRANSPARENCY_BOUNDARIES.whatWeDo.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What PathToDev Does NOT Do */}
            <div className="p-6 sm:p-8 space-y-4 bg-rose-50/20">
              <div className="flex items-center gap-2 text-sm font-bold text-rose-800 uppercase tracking-wider">
                <X className="w-4 h-4 text-rose-600 stroke-[3]" />
                <span>What We Do NOT Do</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {TRANSPARENCY_BOUNDARIES.whatWeDoNotDo.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Subtle Closing CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <p className="text-sm font-semibold text-brand-dark">
            Ready for clear, honest developer guidance?
          </p>
          <a
            href="#services"
            onClick={handleScrollToServices}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold transition-all shadow-sm group"
          >
            <span>Explore Guidance Services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
