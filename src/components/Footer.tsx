import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, Heart, Shield, FileText } from 'lucide-react';
import { Logo } from './Logo';
import { SITE_CONFIG, getWhatsAppUrl, PREFILLED_MESSAGES, getGmailUrl, PREFILLED_EMAIL } from '../config/site';
import { SERVICES } from '../config/services';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-slate-800">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" showTagline={true} />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
              Personalized developer roadmaps and one-to-one mentorship designed to help college students and beginner programmers gain clarity, choose the right tech stack, and build genuine coding confidence.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Positioning Note:</span> PathToDev is a guidance and mentorship initiative, not a coding bootcamp, course seller, or placement agency.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-white transition-colors">
                  About PathToDev
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleScroll(e, '#how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#journey" onClick={(e) => handleScroll(e, '#journey')} className="hover:text-white transition-colors">
                  Developer Journey
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleScroll(e, '#why-us')} className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleScroll(e, '#faqs')} className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Services & Pricing
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleScroll(e, '#services')}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <span className="text-xs font-bold text-brand-blue opacity-80 group-hover:opacity-100">
                      {s.currency}{s.price}
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  Custom Mentorship Enquiry
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300">
              <a
                href={getGmailUrl(PREFILLED_EMAIL.general.subject, PREFILLED_EMAIL.general.body)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
                title="Send email via Gmail Compose"
              >
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{SITE_CONFIG.officialEmail}</span>
              </a>

              <a
                href={getWhatsAppUrl(PREFILLED_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                title={`Chat with PathToDev on WhatsApp (${SITE_CONFIG.WHATSAPP_DISPLAY})`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.WHATSAPP_DISPLAY}</span>
              </a>
            </div>

            {/* Configurable Social Media Section */}
            <div className="pt-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Social Profiles
              </p>
              {SITE_CONFIG.socials.linkedin || SITE_CONFIG.socials.instagram ? (
                <div className="flex items-center gap-3">
                  {SITE_CONFIG.socials.linkedin && (
                    <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue text-xs font-medium">
                      LinkedIn
                    </a>
                  )}
                  {SITE_CONFIG.socials.instagram && (
                    <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue text-xs font-medium">
                      Instagram
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  Social channels will be published upon launch.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {SITE_CONFIG.brandName}. All rights reserved. {SITE_CONFIG.tagline}
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-slate-500" />
              <span>Privacy Policy</span>
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-slate-500" />
              <span>Terms & Conditions</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
