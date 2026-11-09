import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, Clock, Shield, FileText, RotateCcw } from 'lucide-react';
import { Logo } from './Logo';
import { SITE_CONFIG, getWhatsAppUrl, PREFILLED_MESSAGES, getGmailUrl, PREFILLED_EMAIL } from '../config/site';
import { SERVICES } from '../config/services';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenRefund?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenRefund }) => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      url: SITE_CONFIG.socials.linkedin,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: SITE_CONFIG.socials.instagram,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: SITE_CONFIG.socials.github,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'Twitter / X',
      url: SITE_CONFIG.socials.twitter,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const activeSocials = socialPlatforms.filter(p => typeof p.url === 'string' && p.url.trim() !== '');

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 relative overflow-hidden">
      {/* Subtle top ambient glow for depth */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-brand-blue/5 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 xl:gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Cols 1-2 on desktop, 1 on tablet/mobile) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block">
              <Logo variant="light" showTagline={true} />
            </div>
            
            <p className="text-sm text-slate-300/90 leading-relaxed max-w-sm">
              Personalized developer roadmaps and one-to-one mentorship designed to help college students and beginner programmers gain clarity, choose the right tech stack, and build genuine coding confidence.
            </p>

            {/* Premium Positioning Principle Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 max-w-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
                <span>Positioning Principle</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                PathToDev is an independent guidance initiative — not an expensive coding bootcamp, video course seller, or placement agency.
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2">
              <span className="w-1 h-3 rounded-full bg-brand-blue" aria-hidden="true" />
              <span>Navigation</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About PathToDev', href: '#about' },
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Developer Journey', href: '#journey' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'FAQs', href: '#faqs' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="hover:text-white hover:translate-x-1 transition-all duration-150 inline-block py-0.5 focus-visible:ring-1 focus-visible:ring-brand-blue rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Pricing */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2">
              <span className="w-1 h-3 rounded-full bg-brand-blue" aria-hidden="true" />
              <span>Services & Pricing</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleScroll(e, '#services')}
                    className="hover:text-white transition-colors flex items-center justify-between gap-3 group py-0.5 focus-visible:ring-1 focus-visible:ring-brand-blue rounded"
                  >
                    <span className="group-hover:text-white group-hover:translate-x-0.5 transition-all duration-150 text-sm">
                      {s.title}
                    </span>
                    <span className="text-[11px] font-bold text-brand-blue bg-brand-blue/10 border border-brand-blue/25 px-2 py-0.5 rounded-md group-hover:bg-brand-blue group-hover:text-white transition-all duration-150 shrink-0">
                      {s.currency}{s.price}
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800/80">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-xs font-semibold text-brand-blue hover:text-blue-300 hover:underline inline-flex items-center gap-1.5 transition-colors focus-visible:ring-1 focus-visible:ring-brand-blue rounded"
                >
                  <span>Custom Mentorship Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact & Socials */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2">
              <span className="w-1 h-3 rounded-full bg-brand-blue" aria-hidden="true" />
              <span>Direct Contact</span>
            </h3>

            <div className="space-y-2.5 text-sm text-slate-300">
              {/* Email */}
              <a
                href={getGmailUrl(PREFILLED_EMAIL.general.subject, PREFILLED_EMAIL.general.body)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors break-all group p-1.5 -mx-1.5 rounded-lg hover:bg-slate-900/60 focus-visible:ring-1 focus-visible:ring-brand-blue"
                title="Send email via Gmail Compose"
                aria-label={`Send email to ${SITE_CONFIG.officialEmail} (opens Gmail in a new tab)`}
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium">{SITE_CONFIG.officialEmail}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl(PREFILLED_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group p-1.5 -mx-1.5 rounded-lg hover:bg-slate-900/60 focus-visible:ring-1 focus-visible:ring-brand-blue"
                title={`Chat with PathToDev on WhatsApp (${SITE_CONFIG.WHATSAPP_DISPLAY})`}
                aria-label={`Chat with PathToDev on WhatsApp at ${SITE_CONFIG.WHATSAPP_DISPLAY} (opens WhatsApp in a new tab)`}
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium">WhatsApp: {SITE_CONFIG.WHATSAPP_DISPLAY}</span>
              </a>

              {/* Operating Hours */}
              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="leading-snug">
                  <span className="text-slate-300 font-medium block">Monday–Saturday</span>
                  <span>10:00 AM–8:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="pt-2 border-t border-slate-800/80">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Social Profiles
              </p>
              {activeSocials.length > 0 ? (
                <div className="flex items-center gap-2">
                  {activeSocials.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-brand-blue hover:text-white text-slate-300 flex items-center justify-center transition-all duration-150 border border-slate-700/60 hover:border-brand-blue focus-visible:ring-1 focus-visible:ring-brand-blue"
                      aria-label={`Follow PathToDev on ${platform.name} (opens in a new tab)`}
                      title={`Follow PathToDev on ${platform.name}`}
                    >
                      {platform.icon}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">
                  Social channels will be published upon launch.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal and Copyright Area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left leading-relaxed">
            © {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 py-1 px-2 rounded-md hover:bg-slate-800/60 focus-visible:ring-1 focus-visible:ring-brand-blue"
            >
              <Shield className="w-3.5 h-3.5 text-slate-400" />
              <span>Privacy Policy</span>
            </button>
            <span className="text-slate-700 hidden sm:inline" aria-hidden="true">•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 py-1 px-2 rounded-md hover:bg-slate-800/60 focus-visible:ring-1 focus-visible:ring-brand-blue"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Terms & Conditions</span>
            </button>
            <span className="text-slate-700 hidden sm:inline" aria-hidden="true">•</span>
            <button
              type="button"
              onClick={onOpenRefund}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 py-1 px-2 rounded-md hover:bg-slate-800/60 focus-visible:ring-1 focus-visible:ring-brand-blue"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Refund Policy</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
