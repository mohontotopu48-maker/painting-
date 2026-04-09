import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col gap-3"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-gold-600 text-primary font-bold rounded-full shadow-2xl shadow-accent/30 h-16 px-8 text-lg"
            >
              Get Free Estimate
            </Button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl self-end transition-transform hover:scale-110"
            >
              <MessageSquare className="w-6 h-6 fill-current" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-border p-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <Button variant="outline" className="flex-1 border-primary text-primary font-bold h-12" asChild>
          <a href="tel:1-800-ELITE">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </Button>
        <Button className="flex-[1.5] bg-accent hover:bg-gold-600 text-primary font-bold h-12">
          Free Estimate
        </Button>
      </div>
    </>
  );
}
