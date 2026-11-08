import React, { useState } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-elevated border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-brand-navy text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl">
              {activeTab === 'privacy' ? (
                <Shield className="w-5 h-5 text-brand-blue" />
              ) : (
                <FileText className="w-5 h-5 text-brand-blue" />
              )}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-xl font-bold text-white">
                {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-300">PathToDev Developer Guidance</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'privacy'
                ? 'border-brand-blue text-brand-blue'
                : 'border-transparent text-slate-500 hover:text-brand-navy'
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'terms'
                ? 'border-brand-blue text-brand-blue'
                : 'border-transparent text-slate-500 hover:text-brand-navy'
            }`}
          >
            Terms & Conditions
          </button>
        </div>

        {/* Document Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-brand-dark/90 leading-relaxed font-sans">
          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-brand-navy mb-1 text-base">1. Information We Collect</h4>
                <p>
                  PathToDev collects information that you voluntarily provide when enquiring about or booking our developer guidance services. This includes your name, email address, academic background, current programming skill level, and stated technical interests.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-brand-navy mb-1 text-base">2. How We Use Your Information</h4>
                <p>
                  Your information is exclusively used to evaluate your developer background, curate your personalized roadmap, and coordinate your 1-on-1 consultation session. We do not sell, rent, or trade your personal information to any third parties or marketing platforms.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-brand-navy mb-1 text-base">3. Communication Channels</h4>
                <p>
                  Communication takes place directly via WhatsApp and official email ({SITE_CONFIG.officialEmail}). We respect your privacy and communicate only with respect to your active guidance request.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-brand-navy mb-1 text-base">4. Data Retention & Security</h4>
                <p>
                  We retain requirement submissions only as long as necessary to prepare and deliver your personalized guidance. You may request deletion of your submitted details at any time by emailing us at {SITE_CONFIG.officialEmail}.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-brand-navy mb-1 text-base">1. Nature of Service</h4>
                <p>
                  PathToDev is an independent developer guidance and mentorship service. We are NOT a coding bootcamp, college, university, online video course platform, or job placement agency.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-brand-navy mb-1 text-base">2. No Guarantee of Placement or Outcomes</h4>
                <p>
                  We provide personalized roadmaps and honest mentorship based on current industry standards. However, PathToDev makes no guarantees regarding hiring, internships, salary packages, or exam performance. Your career success depends on your dedication, consistent coding practice, and external job market conditions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-brand-navy mb-1 text-base">3. Service Delivery & Timelines</h4>
                <p>
                  Written roadmaps are delivered digitally via email or WhatsApp within 48 hours following receipt of completed requirements. Guidance calls are scheduled via Google Meet at mutually agreed time slots.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-brand-navy mb-1 text-base">4. Payments & Refunds</h4>
                <p>
                  All guidance services are one-time payments conducted manually via UPI. Because custom roadmaps and mentor call preparation require dedicated individual analysis, payments are generally non-refundable once preparation has begun.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-navy text-white text-xs font-semibold hover:bg-brand-dark transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
