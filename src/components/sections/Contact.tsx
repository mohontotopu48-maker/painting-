import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '(714) 555-0123',
      sub: 'Mon–Fri 8am–6pm, Sat 9am–2pm',
      href: 'tel:7145550123',
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'hello@elitepainters.com',
      sub: 'We reply within 2 hours',
      href: 'mailto:hello@elitepainters.com',
    },
    {
      icon: MapPin,
      title: 'Our Office',
      detail: '456 Spectrum Center Dr, Ste 200',
      sub: 'Irvine, CA 92618',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Hours',
      detail: 'Mon–Fri: 8am – 6pm',
      sub: 'Saturday: 9am – 2pm',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="space-y-10">
            <div className="space-y-5">
              <div className="inline-block bg-[#0A192F]/8 text-[#0A192F] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest border border-[#0A192F]/10">
                Contact Us
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F]">
                Ready to Start Your <br /><span className="text-[#F59E0B]">Next Project?</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Get in touch today for a free, no-obligation estimate. We're locally based in Orange County and respond within 2 hours during business hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#F59E0B]/40 hover:bg-[#F59E0B]/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#F59E0B]/10 transition-colors">
                    <item.icon className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A192F] text-sm">{item.title}</h4>
                    <p className="text-[#0A192F] font-semibold text-sm mt-0.5">{item.detail}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust badge */}
            <div className="p-6 bg-[#0A192F] rounded-2xl text-white flex items-center gap-5">
              <div className="w-16 h-16 bg-[#F59E0B] rounded-2xl flex items-center justify-center shrink-0 rotate-3">
                <ShieldCheck className="w-8 h-8 text-[#0A192F]" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-bold mb-1">Licensed &amp; Fully Insured</h4>
                <p className="text-white/65 text-sm">
                  CSLB #1098234 · $2M liability coverage · Background-checked crew
                </p>
              </div>
            </div>

            {/* Google rating */}
            <div className="flex items-center gap-4 px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">G</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="font-bold text-[#0A192F] ml-1">4.9</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Based on 300+ Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-heading font-bold text-[#0A192F] mb-7">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name" className="font-semibold text-sm">Full Name *</Label>
                  <Input id="contact-name" placeholder="Jane Smith" className="bg-slate-50 border-slate-200 h-11" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-phone" className="font-semibold text-sm">Phone Number *</Label>
                  <Input id="contact-phone" placeholder="(714) 555-0123" className="bg-slate-50 border-slate-200 h-11" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email" className="font-semibold text-sm">Email Address *</Label>
                <Input id="contact-email" type="email" placeholder="jane@example.com" className="bg-slate-50 border-slate-200 h-11" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-service" className="font-semibold text-sm">Service Interested In</Label>
                <select
                  id="contact-service"
                  className="w-full h-11 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
                >
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Commercial Painting</option>
                  <option>Cabinet Painting</option>
                  <option>Drywall Repair</option>
                  <option>Pressure Washing</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-message" className="font-semibold text-sm">Project Details</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us about your project — location, size, timeline, and any special requests..."
                  className="bg-slate-50 border-slate-200 min-h-[120px] resize-none"
                />
              </div>
              <Button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-7 text-lg shadow-xl shadow-amber-200/50 rounded-xl gap-2">
                <Send className="w-5 h-5" />
                Send Message — Free Quote
              </Button>
              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to our privacy policy. We never share your info.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
