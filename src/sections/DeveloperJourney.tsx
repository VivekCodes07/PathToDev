import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { JOURNEY_STAGES } from '../config/services';
import {
  HelpCircle,
  Compass,
  BookOpen,
  Code2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  HelpCircle,
  Compass,
  BookOpen,
  Code2,
  TrendingUp,
};

export const DeveloperJourney: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const current = JOURNEY_STAGES[selectedStage];
  const progressPercent = (selectedStage / (JOURNEY_STAGES.length - 1)) * 100;

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="journey" className="section-py bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-blue-soft/50 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container relative z-10">
        <SectionHeading
          badge="Your Learning Journey"
          title="From Overwhelmed to Confident: The Developer Pathway"
          subtitle="How a beginner transitions from information overload to building real software with purpose and structure."
          align="center"
        />

        {/* Pathway Stage Navigator (Interactive Stepper) */}
        <div className="pt-2 pb-8 max-w-4xl mx-auto px-1 sm:px-0">
          <div className="relative">
            {/* Horizontal Track & Dynamic Electric-Blue Progress Line */}
            <div className="absolute top-[22px] sm:top-7 -translate-y-1/2 left-[10%] right-[10%] h-1 bg-slate-200 z-0 rounded-full">
              <div
                className="h-full bg-brand-blue rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-5 gap-1.5 sm:gap-2 relative z-10">
              {JOURNEY_STAGES.map((stage, idx) => {
                const IconComp = ICON_MAP[stage.icon] || TrendingUp;
                const isActive = selectedStage === idx;
                const isPast = selectedStage > idx;

                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setSelectedStage(idx)}
                    className="flex flex-col items-center group focus-visible:outline-none"
                    aria-label={`View stage ${stage.step}: ${stage.title}`}
                    aria-selected={isActive}
                  >
                    <div
                      className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${
                        isActive
                          ? 'bg-brand-blue text-white ring-4 ring-brand-blue/20 scale-105 sm:scale-110 shadow-glow'
                          : isPast
                          ? 'bg-brand-navy text-white hover:bg-brand-dark'
                          : 'bg-white border-2 border-slate-200 text-slate-400 group-hover:border-brand-blue group-hover:text-brand-blue'
                      }`}
                    >
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span
                      className={`mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider text-center line-clamp-1 transition-colors px-0.5 ${
                        isActive
                          ? 'text-brand-blue'
                          : isPast
                          ? 'text-brand-navy'
                          : 'text-slate-500 group-hover:text-brand-navy'
                      }`}
                    >
                      Stage {stage.step}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Stage Detailed Card */}
        <div className="max-w-4xl mx-auto mt-6 rounded-2xl bg-gradient-to-br from-brand-blue-soft/60 via-white to-brand-blue-light/40 border border-brand-blue/20 p-6 sm:p-10 shadow-premium">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left Stage Details */}
            <div key={`details-${current.step}`} className="md:col-span-7 space-y-4 animate-fade-in flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-navy text-white shadow-sm">
                    Stage 0{current.step}
                  </span>
                  <span className="text-xs font-semibold text-brand-blue">
                    {current.tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-snug">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              {/* Key Bullet Highlights */}
              <div className="pt-2 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Milestones at this phase:
                </p>
                <ul className="space-y-2">
                  {current.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-dark font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Stage Contextual Card */}
            <div className="md:col-span-5 flex flex-col justify-between p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-subtle min-h-[220px]">
              <div key={`insight-${current.step}`} className="animate-fade-in space-y-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-brand-blue-soft text-brand-blue border border-brand-blue/20">
                    <Sparkles className="w-3 h-3 text-brand-blue" />
                    STAGE INSIGHT
                  </span>
                </div>

                <p className="text-sm sm:text-base text-brand-dark/90 font-medium leading-relaxed italic">
                  "{current.insight}"
                </p>
              </div>

              {/* Stepper Navigation Controls / CTA */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={selectedStage === 0}
                  onClick={() => setSelectedStage((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  Previous
                </button>

                {selectedStage === JOURNEY_STAGES.length - 1 ? (
                  <a
                    href="#services"
                    onClick={handleScrollToServices}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold transition-all shadow-sm group"
                  >
                    <span>Explore Guidance Services</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedStage((prev) => Math.min(JOURNEY_STAGES.length - 1, prev + 1))}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
