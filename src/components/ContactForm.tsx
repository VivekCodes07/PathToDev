import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Mail } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, getGmailUrl } from '../config/site';
import { SERVICES } from '../config/services';
import { EnquiryFormData } from '../types';

interface ContactFormProps {
  initialServiceId?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
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
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
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
    }, 400);
  };

  // Build formatted text message for WhatsApp/Email fallback
  const getFormattedSummary = () => {
    return (
      `Hello PathToDev,\n\n` +
      `I would like to submit my guidance requirements:\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
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
    const url = getWhatsAppUrl(getFormattedSummary());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmail = () => {
    const subject = `PathToDev — Guidance Requirements (${formData.name})`;
    const body = getFormattedSummary();
    const url = getGmailUrl(subject, body);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-premium p-6 sm:p-10">
      {/* Notice about form configuration */}
      {!SITE_CONFIG.form.isConfigured && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <span className="font-bold">Form Configuration Notice:</span> This enquiry form is in client-side preview mode. No data is stored in a database. Submissions can be dispatched directly via WhatsApp or official email below.
          </div>
        </div>
      )}

      {submitted ? (
        <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-navy">Enquiry Details Prepared!</h3>
            <p className="mt-2 text-sm text-brand-muted max-w-md mx-auto">
              Thank you, <span className="font-semibold text-brand-navy">{formData.name}</span>. Since our platform uses direct WhatsApp & Email communication, please choose how you would like to send these details to our mentors:
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-700 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
            {getFormattedSummary()}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleSendViaWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={handleSendViaEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-dark text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
            </button>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-brand-muted hover:text-brand-blue py-2"
            >
              Edit Requirements
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label" htmlFor="name">
                Full Name <span className="text-brand-blue">*</span>
              </label>
              <input
                id="name"
                type="text"
                className={`form-input ${errors.name ? 'border-red-400 focus:border-red-500' : ''}`}
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="form-label" htmlFor="email">
                Email Address <span className="text-brand-blue">*</span>
              </label>
              <input
                id="email"
                type="email"
                className={`form-input ${errors.email ? 'border-red-400 focus:border-red-500' : ''}`}
                placeholder="e.g. rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Row 2: Academic Year & Programming Knowledge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          </div>

          {/* Row 3: Interested Field & Preferred Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          </div>

          {/* Row 4: Main Learning Goal */}
          <div>
            <label className="form-label" htmlFor="learningGoal">
              What is your primary learning goal? <span className="text-brand-blue">*</span>
            </label>
            <input
              id="learningGoal"
              type="text"
              className={`form-input ${errors.learningGoal ? 'border-red-400 focus:border-red-500' : ''}`}
              placeholder="e.g. Master React and build 3 production-grade portfolio projects in the next 3 months"
              value={formData.learningGoal}
              onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
            />
            {errors.learningGoal && <p className="text-xs text-red-500 mt-1">{errors.learningGoal}</p>}
          </div>

          {/* Row 5: Current Confusion / Dilemma */}
          <div>
            <label className="form-label" htmlFor="currentConfusion">
              What is your current confusion or difficulty? <span className="text-brand-blue">*</span>
            </label>
            <textarea
              id="currentConfusion"
              rows={3}
              className={`form-input resize-none ${errors.currentConfusion ? 'border-red-400 focus:border-red-500' : ''}`}
              placeholder="e.g. I jump between Python and JavaScript tutorials without knowing how they connect or which projects matter for internships."
              value={formData.currentConfusion}
              onChange={(e) => setFormData({ ...formData, currentConfusion: e.target.value })}
            />
            {errors.currentConfusion && <p className="text-xs text-red-500 mt-1">{errors.currentConfusion}</p>}
          </div>

          {/* Row 6: Additional Message */}
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
