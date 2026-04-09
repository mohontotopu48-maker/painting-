import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenQuote: () => void;
}

export default function About({ onOpenQuote }: AboutProps) {
  const stats = [
    { value: '15+', label: 'Years in Business' },
    { value: '500+', label: 'Projects Completed' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="section-padding bg-[#0A192F] text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                alt="Delgados Painting Professional Team"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#F59E0B] text-[#0A192F] p-6 rounded-2xl shadow-2xl z-20 hidden md:flex flex-col items-center">
              <div className="text-4xl font-heading font-bold leading-none">15+</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1 text-center">Years of<br />Excellence</div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-[#F59E0B]">{s.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Decorative glow */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#F59E0B]/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <div className="inline-block bg-[#F59E0B]/20 text-[#F59E0B] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest border border-[#F59E0B]/30">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Orange County's <span className="text-[#F59E0B]">Premier Painting</span>
                <br /> Partner
              </h2>
              <p className="text-lg text-white/75 leading-relaxed">
                Delgados Painting was founded on a singular principle: deliver exceptional craftsmanship with uncompromising integrity. We serve Orange County's most discerning homeowners and businesses who demand excellence.
              </p>
              <p className="text-lg text-white/75 leading-relaxed">
                Your property deserves more than a fresh coat of paint—it deserves artistry, expertise, and a team that genuinely cares. That's what Delgados brings to every single project.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Locally Owned & Operated',
                'Fully Licensed & Insured',
                'Background Checked Crew',
                'Premium Paint Products',
                'Meticulous Prep Work',
                'Clean Site Guarantee',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
                  <span className="font-medium text-white/85">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats desktop */}
            <div className="hidden md:grid grid-cols-4 gap-4 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-[#F59E0B] font-heading">{s.value}</div>
                  <div className="text-xs text-white/50 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                onClick={onOpenQuote}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-6 px-8 text-lg rounded-xl gap-2"
              >
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
