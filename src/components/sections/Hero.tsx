import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, Star, Shield, Award, Clock } from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Interior Painting"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full text-accent font-bold text-sm tracking-wide uppercase">
            <Star className="w-4 h-4 fill-current" />
            <span>Orange County's #1 Rated Painting Service</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
            Transform Your <span className="text-accent">California Home</span> With Elite Craftsmanship
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed">
            Premium residential and commercial painting services across Orange County. We bring precision, quality, and a flawless finish to every project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <QuoteModal>
              <Button className="bg-accent hover:bg-gold-600 text-primary font-bold py-8 px-10 text-xl shadow-2xl shadow-accent/30 rounded-xl group">
                Get Free Estimate
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Button>
            </QuoteModal>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 py-8 px-10 text-xl rounded-xl backdrop-blur-sm" asChild>
              <a href="tel:1-800-ELITE">
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-white/70">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-white/70">Free Estimates</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-white/70">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-white/70">Premium Crew</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185138a047a?q=80&w=2070&auto=format&fit=crop"
              alt="Professional Painter at Work"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="Customer"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-primary">500+ Happy Clients</p>
                </div>
              </div>
              <p className="text-sm text-primary/80 italic">
                "The most professional crew we've ever hired. Our home looks brand new!"
              </p>
              <p className="text-xs font-bold mt-2 text-primary">— Sarah Johnson, Homeowner</p>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -top-6 -right-6 bg-accent text-primary p-6 rounded-full shadow-2xl border-4 border-white flex flex-col items-center justify-center text-center w-32 h-32 rotate-12">
            <span className="text-2xl font-bold leading-none">15+</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Years of Excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
