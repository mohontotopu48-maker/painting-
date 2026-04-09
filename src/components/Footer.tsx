import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                ELITE<span className="text-accent">PAINTERS</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Premium residential and commercial painting services. We bring precision, quality, and a flawless finish to every project across the tri-state area.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-heading font-bold mb-8 text-accent">Our Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Interior Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Exterior Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cabinet Refinishing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Drywall Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pressure Washing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-heading font-bold mb-8 text-accent">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-white transition-colors">About Our Company</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-heading font-bold mb-8 text-accent">Service Areas</h4>
            <div className="grid grid-cols-2 gap-4 text-white/60 text-sm">
              <ul className="space-y-2">
                <li>Irvine, CA</li>
                <li>Newport Beach, CA</li>
                <li>Laguna Beach, CA</li>
                <li>Huntington Beach, CA</li>
              </ul>
              <ul className="space-y-2">
                <li>Anaheim, CA</li>
                <li>Mission Viejo, CA</li>
                <li>Costa Mesa, CA</li>
                <li>San Clemente, CA</li>
              </ul>
            </div>
            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Need an Estimate?</p>
              <p className="text-lg font-heading font-bold">(800) 555-0123</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © 2026 Elite Painters LLC. All rights reserved. Licensed & Insured.
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="bg-white/5 hover:bg-accent hover:text-primary rounded-full"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
