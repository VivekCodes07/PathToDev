import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  // Default open the first FAQ
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-brand-blue/40 bg-brand-blue-soft/30 shadow-subtle'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
            >
              <span className={`text-base md:text-lg font-semibold pr-4 leading-snug transition-colors ${
                isOpen ? 'text-brand-blue' : 'text-brand-navy'
              }`}>
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-slate-100 text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${idx}`}
                className="px-5 pb-5 pt-1 text-sm md:text-base text-brand-dark/90 leading-relaxed border-t border-slate-100/60"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
