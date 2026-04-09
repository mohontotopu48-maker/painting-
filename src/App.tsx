import { useState } from 'react';
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

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Quote Modal controlled from App level */}
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />

      <Navbar onOpenQuote={() => setQuoteOpen(true)} />
      
      <main className="flex-grow">
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
      </main>

      <Footer />
      <StickyCTA onOpenQuote={() => setQuoteOpen(true)} />
    </div>
  );
}
