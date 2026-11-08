import React, { useState } from 'react';
import { X, QrCode, Copy, Check, ShieldCheck, ArrowRight, AlertCircle, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, PREFILLED_MESSAGES } from '../config/site';
import { ServiceItem } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: ServiceItem | null;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  service
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(SITE_CONFIG.payment.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedService = service || {
    title: 'Developer Guidance Service',
    price: 199,
    currency: '₹',
    whatsappMessage: PREFILLED_MESSAGES.serviceEnquiry
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-elevated border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-brand-navy text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue bg-brand-navy/80 px-2 py-0.5 rounded border border-brand-blue/30">
              Direct UPI Payment
            </span>
            <h3 id="payment-modal-title" className="text-xl font-bold text-white mt-1">
              Payment & Confirmation Guide
            </h3>
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

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Service Price Summary */}
          <div className="p-4 rounded-xl bg-brand-blue-soft/50 border border-brand-blue/20 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-brand-muted">Selected Service</p>
              <p className="text-sm font-bold text-brand-navy">{selectedService.title}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-brand-navy">
                {selectedService.currency}{selectedService.price}
              </span>
              <span className="block text-[11px] font-medium text-slate-500">One-time payment</span>
            </div>
          </div>

          {/* Payment Destination / Status */}
          {SITE_CONFIG.payment.isConfigured ? (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Official UPI ID
              </label>
              <div className="flex items-center gap-2">
                <div className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-sm text-brand-navy font-semibold select-all">
                  {SITE_CONFIG.payment.upiId}
                </div>
                <button
                  type="button"
                  onClick={handleCopyUPI}
                  className="inline-flex items-center gap-1.5 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-brand-navy rounded-xl text-xs font-bold transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {SITE_CONFIG.payment.qrCodeImage && (
                <div className="mt-3 p-4 border border-slate-200 rounded-xl bg-slate-50 text-center">
                  <img
                    src={SITE_CONFIG.payment.qrCodeImage}
                    alt="UPI Payment QR Code"
                    className="w-40 h-40 mx-auto rounded-lg shadow-sm border border-slate-200"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-left space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Payment Details Shared After Confirmation</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                To ensure every student receives personalized attention and a confirmed delivery slot, active UPI payment instructions (official UPI ID and QR code) are shared directly via WhatsApp or email once PathToDev reviews your requirements.
              </p>
            </div>
          )}

          {/* 5-Step Customer Journey */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Intended Customer Journey (5 Simple Steps)
            </h4>
            <ol className="space-y-2 text-xs text-brand-dark leading-relaxed">
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-brand-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <span className="font-semibold text-brand-navy">Submit Your Enquiry:</span>{' '}
                  <span className="text-slate-600">Select your service and share your college background, goals, and blockers.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-brand-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <span className="font-semibold text-brand-navy">Requirements Review:</span>{' '}
                  <span className="text-slate-600">PathToDev reviews your background to ensure the guidance format is appropriate.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-brand-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <span className="font-semibold text-brand-navy">Service Confirmation:</span>{' '}
                  <span className="text-slate-600">We confirm your guidance scope or coordinate a mutually convenient Google Meet slot.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <span className="font-semibold text-brand-navy">Payment Instructions:</span>{' '}
                  <span className="text-slate-600">Official UPI payment details are shared to complete your simple, transparent one-time payment.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <span className="font-semibold text-brand-navy">Guidance Delivered:</span>{' '}
                  <span className="text-slate-600">Attend your 30-minute private video session or receive your custom roadmap within 48 hours.</span>
                </div>
              </li>
            </ol>
          </div>

          {/* Positioning & Policy Note */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-brand-muted">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              100% transparent one-time payments. No recurring subscriptions, automated charges, or hidden fees.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-brand-muted hover:text-brand-navy"
          >
            Close
          </button>
          <div className="w-full sm:w-auto flex items-center gap-2">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 sm:flex-initial text-center px-4 py-2.5 rounded-xl border border-slate-200 hover:border-brand-blue text-xs font-semibold text-brand-navy transition-colors bg-white shadow-xs"
            >
              Fill Enquiry Form
            </a>
            <a
              href={getWhatsAppUrl(selectedService.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Start on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
