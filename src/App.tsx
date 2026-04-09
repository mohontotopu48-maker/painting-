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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <About />
        <Projects />
        <BeforeAfter />
        <EstimateCalculator />
        <Process />
        <Testimonials />
        <PromoBanner />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
