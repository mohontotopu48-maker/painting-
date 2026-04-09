import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StickyCTAProps {
  onOpenQuote: () => void;
}

export default function StickyCTA({ onOpenQuote }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Buttons */}
      <AnimatePresence>
        {isVisible && !dismissed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col items-end gap-3"
          >
            {/* Dismiss button */}
            <button
              onClick={() => setDismissed(true)}
              className="w-6 h-6 rounded-full bg-slate-300 hover:bg-slate-400 flex items-center justify-center text-slate-700 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>

            <button
              onClick={onOpenQuote}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold rounded-full shadow-2xl shadow-amber-300/40 h-14 px-8 text-base flex items-center gap-2 transition-all hover:scale-105"
            >
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/17145550123"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl self-end transition-all hover:scale-110 flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-6 h-6" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bar — always visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/98 backdrop-blur-md border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        <a
          href="tel:7145550123"
          className="flex-1 flex items-center justify-center gap-2 border-2 border-[#0A192F] text-[#0A192F] font-bold h-12 rounded-xl hover:bg-[#0A192F] hover:text-white transition-all"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <button
          onClick={onOpenQuote}
          className="flex-[1.5] flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold h-12 rounded-xl shadow-md shadow-amber-200 transition-all"
        >
          Free Estimate
        </button>
      </div>
    </>
  );
}
