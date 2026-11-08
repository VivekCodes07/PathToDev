import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { JOURNEY_STAGES } from '../config/services';
import { HelpCircle, Compass, BookOpen, Code2, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export const DeveloperJourney: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const stageIcons = [HelpCircle, Compass, BookOpen, Code2, TrendingUp];

  const current = JOURNEY_STAGES[selectedStage];
  const CurrentIcon = stageIcons[selectedStage] || TrendingUp;

  return (
    <section id="journey" className="section-py bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue-soft/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="container relative z-10">
        <SectionHeading
          badge="Visual Storytelling"
          title="From Overwhelmed to Confident: The Developer Pathway"
          subtitle="How a beginner transitions from information overload to building real software with purpose and structure."
          align="center"
        />

        {/* Pathway Stage Navigator (Interactive Stepper) */}
        <div className="pt-2 pb-8 max-w-4xl mx-auto">
          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-6 right-6 h-1 bg-slate-100 -z-0" />

            <div className="grid grid-cols-5 gap-2 relative z-10">
              {JOURNEY_STAGES.map((stage, idx) => {
                const IconComp = stageIcons[idx];
                const isActive = selectedStage === idx;
                const isPast = selectedStage > idx;

                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setSelectedStage(idx)}
                    className="flex flex-col items-center group focus-visible:outline-none"
                    aria-label={`View stage ${stage.step}: ${stage.title}`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${
                        isActive
                          ? 'bg-brand-blue text-white ring-4 ring-brand-blue/20 scale-110 shadow-glow'
                          : isPast
                          ? 'bg-brand-navy text-white'
                          : 'bg-white border border-slate-200 text-slate-400 group-hover:border-brand-blue group-hover:text-brand-blue'
                      }`}
                    >
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center line-clamp-1 transition-colors px-1 text-slate-600 group-hover:text-brand-navy">
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Stage Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-navy text-white">
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

              {/* Key Bullet Highlights */}
              <div className="pt-3 space-y-2.5">
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

            {/* Right Stage Visual Representation */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-subtle text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue-soft text-brand-blue flex items-center justify-center mb-4">
                <CurrentIcon className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-brand-navy">{current.title}</h4>
              <p className="text-xs text-brand-muted mt-1 max-w-xs">
                {selectedStage === 0
                  ? "Where 80% of self-learners get stuck for months."
                  : selectedStage === 1
                  ? "Where PathToDev provides targeted clarity."
                  : selectedStage === 2
                  ? "Where daily consistency replaces endless tutorials."
                  : selectedStage === 3
                  ? "Where portfolio-grade software takes shape."
                  : "Where authentic competence opens real career doors."}
              </p>

              <div className="mt-6 flex items-center gap-2">
                <button
                  type="button"
                  disabled={selectedStage === 0}
                  onClick={() => setSelectedStage(Math.max(0, selectedStage - 1))}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 disabled:opacity-30 hover:bg-slate-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={selectedStage === JOURNEY_STAGES.length - 1}
                  onClick={() => setSelectedStage(Math.min(JOURNEY_STAGES.length - 1, selectedStage + 1))}
                  className="px-3 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-bold disabled:opacity-30 hover:bg-brand-blue-hover"
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
