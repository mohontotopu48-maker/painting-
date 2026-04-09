import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
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
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xl">E</span>
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? 'text-primary' : 'text-primary'}`}>
            ELITE<span className="text-accent">PAINTERS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-primary/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:1-800-ELITE" className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span>(800) 555-0123</span>
          </a>
          <Button className="bg-accent hover:bg-gold-600 text-primary font-bold shadow-lg shadow-accent/20">
            Get Free Estimate
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:1-800-ELITE" className="p-2 bg-primary/5 rounded-full text-primary">
            <Phone className="w-5 h-5" />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-heading font-semibold text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-4 pt-8 border-t">
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Contact Us</p>
                  <a href="tel:1-800-ELITE" className="text-2xl font-heading font-bold text-primary">
                    (800) 555-0123
                  </a>
                  <Button className="w-full bg-accent hover:bg-gold-600 text-primary font-bold py-6 text-lg">
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
