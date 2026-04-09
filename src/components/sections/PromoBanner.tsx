import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import QuoteModal from '@/components/QuoteModal';

export default function PromoBanner() {
  return (
    <section className="bg-accent py-16 overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center space-y-8 shadow-2xl border-4 border-white/10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block bg-accent text-primary px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em]">
              Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Get <span className="text-accent">15% OFF</span> Your First <br className="hidden md:block" /> Interior Painting Project
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Book your free estimate this week and receive a complimentary color consultation with our design expert.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <QuoteModal>
              <Button className="bg-accent hover:bg-gold-600 text-primary font-bold py-8 px-12 text-2xl rounded-2xl shadow-2xl shadow-accent/20 transition-transform hover:scale-105">
                Claim Your Discount
              </Button>
            </QuoteModal>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 py-8 px-12 text-2xl rounded-2xl backdrop-blur-sm" asChild>
              <a href="tel:1-800-ELITE">
                Call (800) 555-0123
              </a>
            </Button>
          </div>
          
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
            *Offer valid for projects booked by April 30th. Minimum project size applies.
          </p>
        </div>
      </div>
    </section>
  );
}
