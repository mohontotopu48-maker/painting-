import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Clock } from 'lucide-react';

interface PromoBannerProps {
  onOpenQuote: () => void;
}

export default function PromoBanner({ onOpenQuote }: PromoBannerProps) {
  return (
    <section className="bg-[#F59E0B] py-16 overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/15 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0A192F]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="bg-[#0A192F] rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Subtle bubbles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B]/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F59E0B]/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-5 relative z-10"
          >
            {/* Urgency badge */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.15em] shadow-lg">
                <Clock className="w-4 h-4" />
                Limited Time Offer — April 2026
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Get <span className="text-[#F59E0B]">15% OFF</span> Your First<br className="hidden md:block" /> Interior Painting Project
            </h2>
            <p className="text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Book your free estimate this month and receive a complimentary professional color consultation — a <span className="text-white font-semibold">$150 value, free</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-5 mt-10 relative z-10"
          >
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-5 px-12 text-xl rounded-2xl shadow-2xl shadow-amber-400/20 transition-all hover:scale-105"
            >
              Claim Your 15% Discount
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:7145550123"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white hover:bg-white/10 py-5 px-12 text-xl rounded-2xl backdrop-blur-sm transition-all font-bold"
            >
              <Phone className="w-5 h-5 text-[#F59E0B]" />
              (714) 555-0123
            </a>
          </motion.div>

          <p className="text-white/35 text-xs font-medium uppercase tracking-widest mt-8 relative z-10">
            *Offer valid for projects booked by April 30th, 2026. Minimum project size of 500 sq ft applies.
          </p>
        </div>
      </div>
    </section>
  );
}
