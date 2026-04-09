import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';

export default function About() {
  return (
    <section className="section-padding bg-navy-900 text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-accent text-primary p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
              <div className="text-4xl font-heading font-bold leading-none">15+</div>
              <div className="text-sm font-bold uppercase tracking-widest mt-1">Years of <br /> Excellence</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-navy-900 to-transparent z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Orange County's Choice for <br /> <span className="text-accent">Professional Integrity</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Elite Painters was founded with a simple mission: to provide Orange County homeowners and businesses with a painting service that prioritizes quality, transparency, and respect.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We understand that your California property is your most valuable asset. That's why we don't just "paint"—we protect, enhance, and transform. Our team is composed of local experts who take immense pride in their craft and our OC community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Locally Owned & Operated',
                'Fully Licensed & Insured',
                'Background Checked Crew',
                'Premium Paint Products',
                'Meticulous Prep Work',
                'Clean Site Guarantee'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <QuoteModal>
                <Button className="bg-accent hover:bg-gold-600 text-primary font-bold py-6 px-8 text-lg rounded-xl">
                  Learn More About Us
                </Button>
              </QuoteModal>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
