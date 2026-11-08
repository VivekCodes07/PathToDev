import React from 'react';
import { Target, Layers, ArrowUpRight, Compass, CheckCircle2, AlertOctagon } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-py bg-brand-blue-light/50 relative overflow-hidden border-t border-b border-slate-100">
      <div className="container relative z-10">
        <SectionHeading
          badge="About PathToDev"
          title="Bridging the Gap Between Ambition and Action"
          subtitle="Learning to code is exciting, but without the right guidance, it is dangerously easy to get trapped in an endless cycle of unfinished courses and confusion."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Story / Real Student Learning Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating and learning development"
                className="w-full h-[420px] object-cover"
                loading="lazy"
                onError={(e) => {
                  // Fallback if network image fails
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 text-brand-navy shadow-lg">
                <p className="text-xs font-bold text-brand-blue uppercase tracking-wider">The PathToDev Philosophy</p>
                <p className="text-sm font-semibold text-brand-navy mt-1">
                  "Clarity beats speed. Building one real thing with direction is worth more than watching twenty tutorials."
                </p>
              </div>
            </div>

            {/* Subtle decorative backing accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-blue/15 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Problem & PathToDev Solution */}
          <div className="lg:col-span-7 space-y-8">
            {/* The Real Problem */}
            <div className="p-6 rounded-2xl bg-white border border-rose-100 shadow-subtle">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">The Common Struggle</h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    Most college students and beginner programmers jump from one YouTube playlist to another. You learn HTML on Monday, start Python on Wednesday, and get lured into Machine Learning on Friday. Without understanding how technologies connect or what foundational steps are required, months pass with zero working projects and growing self-doubt.
                  </p>
                </div>
              </div>
            </div>

            {/* How PathToDev Helps */}
            <div className="p-6 rounded-2xl bg-white border border-brand-blue/20 shadow-subtle">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-soft text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">How PathToDev Changes Your Trajectory</h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    We sit down with your exact situation—your college year, available study hours, and genuine interests—to craft a clear roadmap so you never have to wonder what to code next.
                  </p>
                </div>
              </div>

              {/* 6 Core Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Understand individual goals</strong> tailored to your timeline</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Choose a viable tech stack</strong> that matches your ambitions</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Filter high-signal tools</strong> and skip irrelevant hype</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Structured learning sequence</strong> with zero skipped steps</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Portfolio-grade projects</strong> instead of cloned to-do apps</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Practical next steps</strong> ready to execute today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
