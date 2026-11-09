import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Mail, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, getGmailUrl } from '../config/site';
import { SERVICES } from '../config/services';
import { EnquiryFormData } from '../types';

interface ContactFormProps {
  initialServiceId?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
    academicYear: '1st Year College',
    programmingKnowledge: 'Complete Beginner (Zero to basic)',
    interestedField: 'Full Stack Web Development',
    learningGoal: '',
    currentConfusion: '',
    preferredService: initialServiceId || SERVICES[2].title,
    additionalMessage: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.learningGoal.trim()) {
      newErrors.learningGoal = 'Please summarize your target learning goal.';
    }
    if (!formData.currentConfusion.trim()) {
      newErrors.currentConfusion = 'Tell us what is currently confusing or blocking you.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate fast submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 350);
  };

  // Build formatted text message for WhatsApp/Email dispatch
  const getFormattedSummary = () => {
    const contactPhone = formData.phone?.trim() ? formData.phone.trim() : 'Not provided';
    return (
      `Hello PathToDev,\n\n` +
      `I would like to submit my guidance requirements:\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• WhatsApp / Phone: ${contactPhone}\n` +
      `• Year / Level: ${formData.academicYear}\n` +
      `• Knowledge Level: ${formData.programmingKnowledge}\n` +
      `• Target Field: ${formData.interestedField}\n` +
      `• Selected Service: ${formData.preferredService}\n` +
      `• Goal: ${formData.learningGoal}\n` +
      `• Main Confusion: ${formData.currentConfusion}\n` +
      (formData.additionalMessage ? `• Note: ${formData.additionalMessage}\n` : '')
    );
  };

  const handleSendViaWhatsApp = () => {
    const summary = getFormattedSummary();
    const url = getWhatsAppUrl(summary);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmail = () => {
    const subject = `PathToDev — Guidance Requirements: ${formData.name.trim()}`;
    const body = getFormattedSummary();
    const url = getGmailUrl(subject, body);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-premium p-4 sm:p-8 md:p-10">
      {/* Direct Guidance Workflow Notice */}
      <div className="mb-6 p-4 rounded-xl bg-brand-blue-soft/60 border border-brand-blue/20 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
        <div className="text-xs text-brand-dark leading-relaxed">
          <span className="font-bold text-brand-navy block sm:inline mr-1.5">Direct Guidance Workflow:</span>
          Share your requirements below. Once you submit the form, you can review your enquiry and send it directly to us through WhatsApp or email.
        </div>
      </div>

      {submitted ? (
        <div className="text-center py-6 sm:py-8 space-y-5 animate-fade-in">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-navy">Enquiry Details Prepared!</h3>
            <p className="mt-2 text-sm text-brand-muted max-w-lg mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-brand-navy">{formData.name}</span>. Please review your details below and choose whether to send them to us via WhatsApp or Gmail to complete your enquiry:
            </p>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Enquiry summary preview"
            className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-700 font-mono whitespace-pre-wrap max-h-56 overflow-y-auto shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            {getFormattedSummary()}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleSendViaWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
              title="Open WhatsApp with your prefilled requirements"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={handleSendViaEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-dark text-white font-semibold text-sm transition-colors shadow-sm"
              title="Open Gmail Compose with your prefilled requirements"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
            </button>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-brand-muted hover:text-brand-blue py-2 transition-colors px-2"
            >
              Edit Requirements
            </button>
          </div>
          <p className="text-[11px] text-slate-500">
            Clicking a button will open WhatsApp or Gmail in a new tab with your prefilled details ready to send.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label" htmlFor="name">
                Full Name <span className="text-brand-blue">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                aria-required="true"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`form-input ${errors.name ? 'border-red-400 focus:border-red-500' : ''}`}
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="form-label" htmlFor="email">
                Email Address <span className="text-brand-blue">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                aria-required="true"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`form-input ${errors.email ? 'border-red-400 focus:border-red-500' : ''}`}
                placeholder="e.g. rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: WhatsApp Number (Optional) & Academic Year */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label" htmlFor="phone">
                WhatsApp / Contact Number <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                className="form-input"
                placeholder="e.g. +91 98765 43210"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="form-label" htmlFor="academicYear">
                Academic Year / Experience Level
              </label>
              <select
                id="academicYear"
                className="form-input bg-white"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
              >
                <option value="1st Year College">1st Year College (B.Tech / BCA / BSc)</option>
                <option value="2nd Year College">2nd Year College</option>
                <option value="3rd Year College">3rd Year College</option>
                <option value="Final Year College">Final Year College</option>
                <option value="Recent Graduate">Recent Graduate</option>
                <option value="Non-Tech Career Switcher">Non-Tech Career Switcher</option>
                <option value="Self-Taught Learner">Self-Taught Learner</option>
              </select>
            </div>
          </div>

          {/* Row 3: Programming Knowledge & Target Field */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label" htmlFor="programmingKnowledge">
                Current Programming Knowledge
              </label>
              <select
                id="programmingKnowledge"
                className="form-input bg-white"
                value={formData.programmingKnowledge}
                onChange={(e) => setFormData({ ...formData, programmingKnowledge: e.target.value })}
              >
                <option value="Complete Beginner (Zero to basic)">Complete Beginner (Zero to basic)</option>
                <option value="Knows basic C / C++ / Python syntax">Knows basic C / C++ / Python syntax</option>
                <option value="Built 1-2 tutorial clones">Built 1-2 tutorial clones</option>
                <option value="Knows HTML/CSS/JS fundamentals">Knows HTML/CSS/JS fundamentals</option>
                <option value="Stuck in tutorial hell for months">Stuck in tutorial hell for months</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="interestedField">
                Target Development Field
              </label>
              <select
                id="interestedField"
                className="form-input bg-white"
                value={formData.interestedField}
                onChange={(e) => setFormData({ ...formData, interestedField: e.target.value })}
              >
                <option value="Full Stack Web Development">Full Stack Web Development</option>
                <option value="Frontend Web Development">Frontend Web Development</option>
                <option value="Backend & APIs">Backend & APIs</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Not sure yet (Need guidance to choose)">Not sure yet (Need guidance to choose)</option>
              </select>
            </div>
          </div>

          {/* Row 4: Preferred Guidance Service */}
          <div>
            <label className="form-label" htmlFor="preferredService">
              Preferred Guidance Service
            </label>
            <select
              id="preferredService"
              className="form-input bg-white font-medium"
              value={formData.preferredService}
              onChange={(e) => setFormData({ ...formData, preferredService: e.target.value })}
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.currency}{s.price})
                </option>
              ))}
            </select>
          </div>

          {/* Row 5: Main Learning Goal */}
          <div>
            <label className="form-label" htmlFor="learningGoal">
              What is your primary learning goal? <span className="text-brand-blue">*</span>
            </label>
            <input
              id="learningGoal"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.learningGoal}
              aria-describedby={errors.learningGoal ? 'learningGoal-error' : undefined}
              className={`form-input ${errors.learningGoal ? 'border-red-400 focus:border-red-500' : ''}`}
              placeholder="e.g. Master React and build 3 production-grade portfolio projects in the next 3 months"
              value={formData.learningGoal}
              onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
            />
            {errors.learningGoal && (
              <p id="learningGoal-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
                {errors.learningGoal}
              </p>
            )}
          </div>

          {/* Row 6: Current Confusion / Dilemma */}
          <div>
            <label className="form-label" htmlFor="currentConfusion">
              What is your current confusion or difficulty? <span className="text-brand-blue">*</span>
            </label>
            <textarea
              id="currentConfusion"
              rows={3}
              required
              aria-required="true"
              aria-invalid={!!errors.currentConfusion}
              aria-describedby={errors.currentConfusion ? 'currentConfusion-error' : undefined}
              className={`form-input resize-none ${errors.currentConfusion ? 'border-red-400 focus:border-red-500' : ''}`}
              placeholder="e.g. I jump between Python and JavaScript tutorials without knowing how they connect or which projects matter for internships."
              value={formData.currentConfusion}
              onChange={(e) => setFormData({ ...formData, currentConfusion: e.target.value })}
            />
            {errors.currentConfusion && (
              <p id="currentConfusion-error" role="alert" className="text-xs text-red-500 mt-1 font-medium">
                {errors.currentConfusion}
              </p>
            )}
          </div>

          {/* Row 7: Additional Message */}
          <div>
            <label className="form-label" htmlFor="additionalMessage">
              Additional Details or Questions <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="additionalMessage"
              rows={2}
              className="form-input resize-none"
              placeholder="Any specific questions, preferred days for calls, or college schedule notes..."
              value={formData.additionalMessage}
              onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-base shadow-sm transition-all duration-200 hover:shadow-glow disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Preparing Enquiry...' : 'Submit Guidance Enquiry'}</span>
            </button>
            <p className="mt-3 text-center text-xs text-brand-muted">
              We respond promptly via WhatsApp or email within working hours. Zero spam guaranteed.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
