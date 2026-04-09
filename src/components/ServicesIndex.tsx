import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getAllServices } from '@/services/servicePages';

interface ServicesIndexProps {
  onOpenQuote: () => void;
}

export default function ServicesIndex({ onOpenQuote }: ServicesIndexProps) {
  const services = getAllServices();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center pt-20 overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1]">
              Our <span className="text-[#F59E0B]">Painting Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80">
              Comprehensive painting solutions for your residential and commercial needs. Explore our full range of professional services.
            </p>
            <Button
              onClick={onOpenQuote}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-7 px-10 text-lg gap-2 w-fit"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F] mb-4">
              Complete Painting Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Each service page includes detailed information, process timelines, FAQs, and real project examples
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <a
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <div className="h-full rounded-2xl overflow-hidden border border-slate-200 hover:border-[#F59E0B]/40 transition-all hover:shadow-xl">
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 bg-slate-200">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-heading font-bold text-[#0A192F] group-hover:text-[#F59E0B] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>

                      {/* Key Info */}
                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-[#F59E0B] font-bold w-24">Timeline:</span>
                          <span className="text-slate-600">{service.timelineWeeks} weeks</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-[#F59E0B] font-bold w-24">Warranty:</span>
                          <span className="text-slate-600">{service.warranty.split('-')[0].trim()}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <span className="inline-flex items-center gap-2 text-[#F59E0B] font-bold group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Multiple Services Matter */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F] mb-4">
                  One Trusted Partner
                </h2>
                <p className="text-xl text-slate-600">
                  We handle all your painting needs. No need to coordinate multiple contractors. One team, one vision, one guarantee.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Professional expertise in every service area',
                  'Consistent quality across all projects',
                  'Simplified scheduling and communication',
                  'Premium materials for every application',
                  'Satisfaction guarantee on all work'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#F59E0B] shrink-0" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                alt="Professional team"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F] mb-6">
              Serving All of Orange County
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Irvine',
                'Newport Beach',
                'Laguna Beach',
                'Huntington Beach',
                'Costa Mesa',
                'Anaheim',
                'Mission Viejo',
                'San Clemente'
              ].map((city) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center hover:border-[#F59E0B]/40 transition-colors"
                >
                  <p className="font-bold text-[#0A192F]">{city}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-slate-600 mt-8">
              Plus surrounding areas. Licensed, insured, and trusted throughout Orange County.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto">
              Choose your service above and explore detailed information, process timelines, and real project examples. Or start with a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={onOpenQuote}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold px-12 py-6 text-lg gap-2"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="tel:7145550123"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-lg rounded-xl font-bold transition-colors"
              >
                Call (714) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
