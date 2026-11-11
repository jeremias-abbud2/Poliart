import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { QualityProcess } from './components/QualityProcess';
import { QuoteSimulator } from './components/QuoteSimulator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationAndContact } from './components/LocationAndContact';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { ServiceItem } from './data/businessData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [simulatorInitialService, setSimulatorInitialService] = useState<string>('camisetas');

  const handleOpenQuoteModal = (serviceName?: string) => {
    setModalService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceForQuote = (service: ServiceItem) => {
    setSimulatorInitialService(service.id);
    const simulatorElement = document.getElementById('simulador');
    if (simulatorElement) {
      simulatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex flex-col text-stone-900 font-sans selection:bg-[#FF6800] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Services Showcase & Bento Grid */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Production Flow & Quality Standards */}
        <QualityProcess />

        {/* Interactive Quote Simulator */}
        <QuoteSimulator key={simulatorInitialService} initialServiceId={simulatorInitialService} />

        {/* Real Google Maps Reviews & Social Proof */}
        <TestimonialsSection />

        {/* Physical Address, Map & Direct Contact */}
        <LocationAndContact />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 1-Click WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Fast Quote Capture Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={modalService}
      />
    </div>
  );
}
