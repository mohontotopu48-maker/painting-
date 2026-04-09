import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-[#0A192F] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-[#F59E0B] font-bold text-lg leading-none">EP</span>
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? 'text-[#0A192F]' : 'text-[#0A192F]'}`}>
            ELITE<span className="text-[#F59E0B]">PAINTERS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                isScrolled ? 'text-[#0A192F]/80 hover:text-[#F59E0B]' : 'text-white/90 hover:text-[#F59E0B]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:7145550123"
            className={`flex items-center gap-2 font-semibold hover:text-[#F59E0B] transition-colors ${
              isScrolled ? 'text-[#0A192F]' : 'text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>(714) 555-0123</span>
          </a>
          <Button
            onClick={onOpenQuote}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold shadow-lg shadow-amber-200/50 px-6"
          >
            Free Estimate
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:7145550123"
            className={`p-2 rounded-full ${isScrolled ? 'bg-[#0A192F]/5 text-[#0A192F]' : 'bg-white/10 text-white'}`}
          >
            <Phone className="w-5 h-5" />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? 'text-[#0A192F]' : 'text-white hover:bg-white/10'}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-white">
              <div className="flex flex-col gap-8 mt-12">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 bg-[#0A192F] rounded-lg flex items-center justify-center">
                    <span className="text-[#F59E0B] font-bold leading-none">EP</span>
                  </div>
                  <span className="font-heading font-bold text-xl text-[#0A192F]">
                    ELITE<span className="text-[#F59E0B]">PAINTERS</span>
                  </span>
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-heading font-semibold text-[#0A192F] hover:text-[#F59E0B] transition-colors border-b border-slate-100 pb-4"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-4 pt-4">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Contact Us</p>
                  <a href="tel:7145550123" className="text-2xl font-heading font-bold text-[#0A192F] flex items-center gap-3">
                    <Phone className="w-6 h-6 text-[#F59E0B]" />
                    (714) 555-0123
                  </a>
                  <Button
                    onClick={onOpenQuote}
                    className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-6 text-lg mt-2"
                  >
                    Get Free Estimate
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
