import React from 'react';
import { ArrowRight, Compass, ShieldCheck, CheckCircle2, Code2 } from 'lucide-react';

interface HeroProps {
  onExploreServices?: () => void;
  onGetGuidance?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 xl:pt-40 xl:pb-24 overflow-hidden bg-gradient-to-b from-brand-blue-light/50 via-white to-slate-50/40">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-60" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 xl:space-y-8 text-center lg:text-left">
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-soft border border-brand-blue/25 text-brand-blue text-xs font-bold tracking-wide uppercase shadow-subtle">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span>Developer Guidance & Mentorship</span>
            </div>

            {/* Main Heading - Prominent Agency Scale on Desktop, Fluid on Mobile */}
            <h1 className="hero-title text-brand-navy tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Your Developer Journey Deserves the{' '}
              <span className="relative text-brand-blue inline-block">
                Right Direction.
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-brand-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" strokeWidth="3" stroke="currentColor" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-brand-muted leading-relaxed max-w-xl xl:max-w-2xl mx-auto lg:mx-0 font-normal">
              Confused about what to learn, which technology to choose, or how to start your developer journey? PathToDev helps you make informed decisions through personalized roadmaps and one-to-one developer guidance.
            </p>

            {/* Action Buttons: Unified Height, Balanced Typography, Refined Contrast */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Primary CTA */}
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="btn-primary w-full sm:w-auto group"
              >
                <span>Get Personal Guidance</span>
                <ArrowRight className="w-4 h-4 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="btn-secondary w-full sm:w-auto"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Key Value Pillars */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Tailored Roadmaps</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>1-on-1 Video Calls</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>From Just ₹199</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with High-Contrast Roadmap Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Visual Workspace & Roadmap Display */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-white border border-slate-200 shadow-elevated overflow-hidden">
              {/* Window Header Chrome */}
              <div className="px-4 py-3 bg-[#101B35] text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="ml-2 font-mono text-xs text-slate-200 font-medium">pathtodev-guidance.roadmap</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Active Mentorship</span>
                </div>
              </div>

              {/* Developer Collaboration Visual - Authentic Students & Mentors Working on Code */}
              <div className="relative aspect-[16/10] bg-[#101B35] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                  alt="Developer mentors and students collaborating on software projects"
                  className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85";
                  }}
                />

                {/* Dark Gradient Overlay for Maximum Foreground Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B35] via-[#101B35]/55 to-transparent pointer-events-none" />

                {/* High-Contrast Roadmap Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl bg-[#101B35]/95 backdrop-blur-md border border-slate-700/80 text-white shadow-2xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-brand-blue/40 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">
                      <img src="/brand/icons/pathtodev-icon-white.png" alt="PathToDev Icon" className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                        Personalized Roadmap
                      </p>
                      <p className="text-xs text-slate-200 mt-0.5 font-normal leading-normal">
                        Structured 30 to 90 Day Milestones
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-white bg-brand-blue px-3 py-1 rounded-full shadow-sm tracking-wide uppercase text-[11px]">
                    Curated
                  </span>
                </div>
              </div>

              {/* Roadmap Blueprint Steps (Crisp, High Contrast) */}
              <div className="p-4 sm:p-5 bg-white space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                  <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
                    Guidance Blueprint
                  </span>
                  <span className="text-brand-blue font-bold text-xs">One-to-One Focus</span>
                </div>

                {/* Step Preview Items */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center">1</span>
                      <span className="text-xs font-semibold text-brand-navy">Goal & Background Diagnosis</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                      Complete
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-brand-blue-soft/70 border border-brand-blue/30 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center">2</span>
                      <span className="text-xs font-bold text-brand-navy">Curated Stack & Roadmap Delivery</span>
                    </div>
                    <span className="text-[11px] font-bold text-white bg-brand-blue px-2.5 py-0.5 rounded-md shadow-sm">
                      48h Delivery
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center">3</span>
                      <span className="text-xs font-medium text-slate-700">Action Plan & Portfolio Execution</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      Next Step
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Card Top-Right (Clean, Grounded Shield Icon, No AI Sparkles) */}
            <div className="hidden sm:flex absolute -top-3.5 right-2 sm:right-3 p-3 rounded-xl bg-white border border-slate-200 shadow-premium items-center gap-2.5 z-20 animate-float">
              <div className="w-8 h-8 rounded-lg bg-brand-blue-soft text-brand-blue flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-navy leading-none">Zero Fake Promises</p>
                <p className="text-[11px] text-brand-muted mt-0.5">Realistic, grounded direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
