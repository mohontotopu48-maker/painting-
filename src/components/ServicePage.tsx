import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MapPin, Phone, Shield, Clock, Award, ArrowRight, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { ServicePageData, BenefitItem, ProcessStep, FAQItem } from '@/services/servicePages';

interface ServicePageProps {
  service: ServicePageData;
  onOpenQuote: () => void;
}

export default function ServicePage({ service, onOpenQuote }: ServicePageProps) {
  const [activeProcess, setActiveProcess] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A192F]/60"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] text-white">
              {service.title.split(' ').slice(0, -1).join(' ')}
              <br />
              <span className="text-[#F59E0B]">{service.title.split(' ').pop()}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">{service.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={onOpenQuote}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-7 px-10 text-lg shadow-2xl shadow-amber-500/40 rounded-xl hover:scale-105 transition-all"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href="tel:7145550123"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white hover:bg-white/10 py-7 px-10 text-lg rounded-xl font-bold transition-colors"
              >
                <Phone className="w-5 h-5 text-[#F59E0B]" />
                (714) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F]">
              About This Service
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {service.description}
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <p className="text-sm font-bold text-[#F59E0B] uppercase tracking-widest">Timeline</p>
                <p className="text-3xl font-heading font-bold text-[#0A192F]">{service.timelineWeeks} weeks</p>
                <p className="text-slate-600 text-sm">Typical project duration</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-[#F59E0B] uppercase tracking-widest">Investment</p>
                <p className="text-xl font-heading font-bold text-[#0A192F]">{service.costRange}</p>
                <p className="text-slate-600 text-sm">Transparent pricing</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-[#F59E0B] uppercase tracking-widest">Warranty</p>
                <p className="text-sm font-bold text-[#0A192F]">{service.warranty.split('-')[0].trim()}</p>
                <p className="text-slate-600 text-sm">Peace of mind guaranteed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F] mb-4">
              Why Choose This Service
            </h2>
            <p className="text-xl text-slate-600">
              Key benefits that make a real difference in your home or business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl text-[#F59E0B]">✓</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0A192F] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F] mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600">
              Step-by-step guidance through your project
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {service.process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveProcess(idx)}
                  className="cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200 hover:border-[#F59E0B] p-6 rounded-xl transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F59E0B] text-[#0A192F] rounded-full flex items-center justify-center font-heading font-bold text-lg shrink-0 group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-heading font-bold text-[#0A192F] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 mb-2">
                          {step.description}
                        </p>
                        {step.duration && (
                          <p className="text-sm font-semibold text-[#F59E0B] flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Why Delgados?
            </h2>
            <p className="text-xl text-white/75">
              What sets us apart in Orange County's painting industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {service.whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#F59E0B]/40 hover:bg-white/10 transition-all"
              >
                <h3 className="text-2xl font-heading font-bold mb-3 text-[#F59E0B]">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-4">{item.description}</p>
                <p className="text-sm text-white/60 border-t border-white/10 pt-4">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
              <Shield className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
              <p className="font-bold text-sm">Licensed & Insured</p>
              <p className="text-xs text-white/60">CSLB #1098234</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
              <Award className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
              <p className="font-bold text-sm">15+ Years</p>
              <p className="text-xs text-white/60">Orange County</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
              <Star className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
              <p className="font-bold text-sm">4.9 Stars</p>
              <p className="text-xs text-white/60">500+ Reviews</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
              <CheckCircle2 className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
              <p className="font-bold text-sm">100% Guarantee</p>
              <p className="text-xs text-white/60">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {service.beforeAfterGallery.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F] mb-4">
                Our Work
              </h2>
              <p className="text-xl text-slate-600">
                Real projects, real Orange County properties
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.beforeAfterGallery.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden border-4 border-slate-200 group-hover:border-[#F59E0B]/20 transition-colors">
                      <div className="grid grid-cols-2 gap-0">
                        <img
                          src={project.before}
                          alt="Before"
                          className="w-full aspect-[3/4] object-cover"
                        />
                        <img
                          src={project.after}
                          alt="After"
                          className="w-full aspect-[3/4] object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center pointer-events-none">
                          <p className="text-white font-bold text-sm bg-black/50 px-3 py-1 rounded-full">
                            Before — After
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-[#0A192F]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#F59E0B] font-semibold flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </p>
                      <p className="text-slate-600 mt-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {service.faqs.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F] mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-slate-600">
                  Everything you need to know about {service.title.toLowerCase()}
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="bg-white rounded-xl border border-slate-200 px-6 data-[state=open]:border-[#F59E0B]/40 transition-colors"
                  >
                    <AccordionTrigger className="text-lg font-heading font-bold text-[#0A192F] hover:text-[#F59E0B] py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-12 bg-[#0A192F] text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-heading font-bold mb-2">Still Have Questions?</h3>
                <p className="text-white/75 mb-6">
                  Our team is ready to answer anything about {service.title.toLowerCase()}.
                </p>
                <Button
                  onClick={onOpenQuote}
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A192F] to-[#112240] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto">
              Get your free estimate today. No obligation, no pressure — just honest, professional advice.
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
                <Phone className="w-5 h-5" />
                (714) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
