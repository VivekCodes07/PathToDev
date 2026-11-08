import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, PREFILLED_MESSAGES } from '../config/site';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 bg-white rounded-2xl shadow-elevated border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="p-3.5 sm:p-4 bg-[#25D366] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold leading-none text-white">Chat with PathToDev</p>
                <p className="text-[11px] text-emerald-50 mt-1">Direct Developer Guidance</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close chat menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Service Links */}
          <div className="p-3 bg-slate-50 space-y-1.5 text-xs">
            <p className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Select Guidance Option:
            </p>

            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.roadmap)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-brand-navy border border-slate-100 hover:border-emerald-200 transition-colors font-medium"
            >
              <span>Written Developer Roadmap (₹199)</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            </a>

            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.oneToOne)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-brand-navy border border-slate-100 hover:border-emerald-200 transition-colors font-medium"
            >
              <span>1-on-1 Guidance Call (₹299)</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            </a>

            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.completePackage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-brand-navy border border-slate-100 hover:border-emerald-200 transition-colors font-medium"
            >
              <span>Complete Package (₹499)</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            </a>

            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-brand-navy border border-slate-100 hover:border-emerald-200 transition-colors font-medium"
            >
              <span>General Mentorship Enquiry</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            </a>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center focus-visible:ring-4 focus-visible:ring-emerald-300"
        aria-label="Contact PathToDev on WhatsApp"
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white/10" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
