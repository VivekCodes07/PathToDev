import React, { useState } from 'react';
import { X, QrCode, Copy, Check, ShieldCheck, ArrowRight, AlertCircle, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/site';
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
    title: 'Guidance Service',
    price: 199,
    currency: '₹',
    whatsappMessage: 'Hello PathToDev, I would like to pay for the guidance service.'
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
            </div>
          </div>

          {/* Configurable UPI ID Box */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
              Official UPI ID <span className="text-brand-muted font-normal">(Configurable)</span>
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
          </div>

          {/* Payment QR Code Box / Placeholder */}
          <div className="p-5 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/60 text-center">
            {SITE_CONFIG.payment.qrCodeImage ? (
              <img
                src={SITE_CONFIG.payment.qrCodeImage}
                alt="UPI Payment QR Code"
                className="w-44 h-44 mx-auto rounded-lg shadow-sm border border-slate-200"
              />
            ) : (
              <div className="space-y-2 py-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-brand-blue flex items-center justify-center mx-auto shadow-sm">
                  <QrCode className="w-9 h-9" />
                </div>
                <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Payment QR Code Placeholder
                </p>
                <p className="text-xs text-brand-muted max-w-xs mx-auto">
                  Active merchant QR code will be shared directly on WhatsApp upon requirement confirmation.
                </p>
              </div>
            )}
          </div>

          {/* Step-by-Step Instructions */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Standard 4-Step Payment Workflow
            </h4>
            <ol className="space-y-2 text-xs text-brand-dark leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-blue">1.</span>
                <span>Connect with us on WhatsApp or submit your requirements form.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-blue">2.</span>
                <span>We confirm your slot or roadmap scope and share current payment info.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-blue">3.</span>
                <span>Transfer via any UPI app (GPay / PhonePe / Paytm / BHIM).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-blue">4.</span>
                <span>Share transaction screenshot on WhatsApp to lock in your booking.</span>
              </li>
            </ol>
          </div>

          {/* Policy Note */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-brand-muted">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              100% transparent manual payments. No recurring subscriptions or automatic charges.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-brand-muted hover:text-brand-navy"
          >
            Close
          </button>
          <a
            href={getWhatsAppUrl(selectedService.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat & Pay via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
