import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import BeforeAfter from '@/components/sections/BeforeAfter';
import EstimateCalculator from '@/components/sections/EstimateCalculator';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import PromoBanner from '@/components/sections/PromoBanner';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import QuoteModal from '@/components/QuoteModal';
import ServicesIndex from '@/components/ServicesIndex';
import ServicePage from '@/components/ServicePage';
import { services } from '@/services/servicePages';

function HomePage({ quoteOpen, setQuoteOpen }: { quoteOpen: boolean; setQuoteOpen: (open: boolean) => void }) {
  return (
    <>
      <Hero onOpenQuote={() => setQuoteOpen(true)} />
      <TrustBar />
      <Services onOpenQuote={() => setQuoteOpen(true)} />
      <WhyChooseUs />
      <About onOpenQuote={() => setQuoteOpen(true)} />
      <Projects onOpenQuote={() => setQuoteOpen(true)} />
      <BeforeAfter />
      <EstimateCalculator onOpenQuote={() => setQuoteOpen(true)} />
      <Process />
      <Testimonials />
      <PromoBanner onOpenQuote={() => setQuoteOpen(true)} />
      <FAQ />
      <Contact />
    </>
  );
}

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Global Quote Modal controlled from App level */}
        <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />

        <Navbar onOpenQuote={() => setQuoteOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage quoteOpen={quoteOpen} setQuoteOpen={setQuoteOpen} />} />
            <Route path="/services" element={<ServicesIndex onOpenQuote={() => setQuoteOpen(true)} />} />
            <Route
              path="/services/:slug"
              element={
                <ServicePageWrapper quoteOpen={quoteOpen} setQuoteOpen={setQuoteOpen} />
              }
            />
          </Routes>
        </main>

        <Footer />
        <StickyCTA onOpenQuote={() => setQuoteOpen(true)} />
      </div>
    </Router>
  );
}

// Wrapper component to handle dynamic service page routing
function ServicePageWrapper({ quoteOpen, setQuoteOpen }: { quoteOpen: boolean; setQuoteOpen: (open: boolean) => void }) {
  const { slug } = useParams<{ slug: string }>();
  const service = services[slug as string];

  if (!service) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-4xl font-heading font-bold text-[#0A192F] mb-4">Service Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">The service you're looking for doesn't exist.</p>
        <a href="/services" className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-3 px-8 rounded-lg">
          Back to Services
        </a>
      </div>
    );
  }

  return <ServicePage service={service} onOpenQuote={() => setQuoteOpen(true)} />;
}
