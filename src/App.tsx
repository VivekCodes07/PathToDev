import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PaymentModal } from './components/PaymentModal';
import { LegalModal } from './components/LegalModal';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { HowItWorks } from './sections/HowItWorks';
import { DeveloperJourney } from './sections/DeveloperJourney';
import { WhyPathToDev } from './sections/WhyPathToDev';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';

import { ServiceItem } from './types';

export const App: React.FC = () => {
  // Modal states
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedServiceForPayment, setSelectedServiceForPayment] = useState<ServiceItem | null>(null);

  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'terms' | 'refund'>('privacy');

  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');

  // Handle service selection (scrolls to contact form and preselects service)
  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceTitle(service.title);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open payment details modal
  const handleOpenPaymentInfo = (service?: ServiceItem) => {
    setSelectedServiceForPayment(service || null);
    setPaymentModalOpen(true);
  };

  // Open legal modal
  const handleOpenPrivacy = () => {
    setLegalModalTab('privacy');
    setLegalModalOpen(true);
  };

  const handleOpenTerms = () => {
    setLegalModalTab('terms');
    setLegalModalOpen(true);
  };

  const handleOpenRefund = () => {
    setLegalModalTab('refund');
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark selection:bg-brand-blue selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenEnquiry={() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onGetGuidance={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <About />

        <Services
          onSelectService={handleSelectService}
          onOpenPaymentInfo={handleOpenPaymentInfo}
        />

        <HowItWorks />

        <DeveloperJourney />

        <WhyPathToDev />

        <FAQ />

        <Contact
          selectedServiceTitle={selectedServiceTitle}
          onOpenPaymentInfo={() => handleOpenPaymentInfo()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
        onOpenRefund={handleOpenRefund}
      />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />

      {/* Payment Information Modal */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        service={selectedServiceForPayment}
      />

      {/* Legal & Privacy Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab={legalModalTab}
      />
    </div>
  );
};

export default App;
