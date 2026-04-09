import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, Star, Shield, Award, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Interior Painting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/97 via-[#0A192F]/85 to-[#0A192F]/40"></div>
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A192F]/60"></div>
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#F59E0B]/20 border border-[#F59E0B]/40 px-5 py-2 rounded-full text-[#F59E0B] font-bold text-sm tracking-wide uppercase"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Orange County's #1 Rated Painting Service</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
            Transform Your{' '}
            <span className="text-[#F59E0B] relative">
              California Home
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                <path d="M0 6 Q75 0 150 4 Q225 8 300 2" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
              </svg>
            </span>{' '}
            With Elite Craftsmanship
          </h1>

          <p className="text-xl md:text-2xl text-white/75 max-w-xl leading-relaxed">
            Premium residential and commercial painting across Orange County. Precision, quality, and a flawless finish — guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              onClick={onOpenQuote}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-7 px-10 text-xl shadow-2xl shadow-amber-500/30 rounded-xl group flex items-center gap-3"
            >
              Get Free Estimate
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
            <a
              href="tel:7145550123"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white hover:bg-white/10 py-7 px-10 text-xl rounded-xl backdrop-blur-sm font-bold transition-colors"
            >
              <Phone className="w-5 h-5 text-[#F59E0B]" />
              (714) 555-0123
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-10 border-t border-white/10">
            {[
              { icon: Shield, label: 'Licensed & Insured' },
              { icon: Clock, label: 'Free Estimates' },
              { icon: Star, label: '5-Star Rated' },
              { icon: Award, label: '15+ Yrs Excellence' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#F59E0B]/15 rounded-full flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <span className="text-sm font-semibold text-white/80 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Floating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-3xl overflow-hidden border-4 border-white/15 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185138a047a?q=80&w=2070&auto=format&fit=crop"
              alt="Professional Painter at Work"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Overlay card */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F]/95 to-transparent p-8 pt-16">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  {[11, 12, 13, 14].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/80?img=${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      alt="Customer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white mt-0.5">500+ Happy Clients</p>
                </div>
              </div>
              <p className="text-sm text-white/85 italic leading-relaxed">
                "The most professional crew we've ever hired. Our home looks absolutely brand new!"
              </p>
              <p className="text-xs font-bold mt-2 text-[#F59E0B]">— Sarah Johnson, Newport Beach</p>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-5 -right-5 bg-[#F59E0B] text-[#0A192F] p-5 rounded-full shadow-2xl border-4 border-white flex flex-col items-center justify-center text-center w-28 h-28 rotate-12">
            <span className="text-2xl font-bold leading-none">15+</span>
            <span className="text-[10px] font-bold uppercase tracking-tight mt-0.5">Years of Excellence</span>
          </div>

          {/* Stats Card */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-5 shadow-2xl flex items-center gap-4 border border-slate-100">
            <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0A192F] leading-none">98%</p>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#F59E0B] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
