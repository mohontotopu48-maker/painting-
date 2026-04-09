import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, ArrowUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceAreas = ['Irvine', 'Newport Beach', 'Laguna Beach', 'Huntington Beach', 'Anaheim', 'Mission Viejo', 'Costa Mesa', 'San Clemente'];

  return (
    <footer className="bg-[#0A192F] text-white pt-20 pb-8">
      <div className="container-custom">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#0A192F] font-bold font-heading text-lg">D</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                Delgados<span className="text-[#F59E0B]">Painting</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Orange County's premier painting service. Exceptional craftsmanship, reliability, and stunning transformations with 15+ years of excellence and local expertise.
            </p>
            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span className="text-white/60 text-sm">4.9 out of 5 · 500+ Reviews</span>
            </div>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/8 rounded-full flex items-center justify-center hover:bg-[#F59E0B] hover:text-[#0A192F] transition-all duration-300 text-white/60"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4 className="text-base font-heading font-bold mb-6 text-[#F59E0B] uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-3 text-white/55 text-sm">
              {['Interior Painting', 'Exterior Painting', 'Commercial Painting', 'Cabinet Refinishing', 'Drywall Repair', 'Pressure Washing'].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1">
                    <span className="text-[#F59E0B] text-xs">›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas col */}
          <div>
            <h4 className="text-base font-heading font-bold mb-6 text-[#F59E0B] uppercase tracking-widest">Service Areas</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-white/55 text-sm">
              {serviceAreas.map((area) => (
                <span key={area} className="flex items-center gap-1">
                  <span className="text-[#F59E0B] text-xs">📍</span> {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="text-base font-heading font-bold mb-6 text-[#F59E0B] uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-white/55 text-sm">
              <li>
                <a href="tel:7145550123" className="flex items-start gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">(714) 555-0123</p>
                    <p className="text-white/40 text-xs">Mon–Sat, 8am–6pm</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:contact@delgadospainting.com" className="flex items-start gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  contact@delgadospainting.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>456 Spectrum Center Dr<br />Irvine, CA 92618</span>
              </li>
            </ul>

            <div className="mt-7 p-4 bg-[#F59E0B]/10 rounded-2xl border border-[#F59E0B]/20">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-1">Free Estimate</p>
              <p className="text-lg font-heading font-bold text-white">(714) 555-0123</p>
              <p className="text-white/40 text-xs mt-0.5">Response within 2 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/35 text-sm text-center md:text-left">
            © 2026 Delgados Painting. All rights reserved. Licensed &amp; Insured · CSLB #1098234
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/35 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/35 hover:text-white text-xs transition-colors">Terms</a>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="bg-white/8 hover:bg-[#F59E0B] hover:text-[#0A192F] rounded-full w-9 h-9 text-white/50 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
