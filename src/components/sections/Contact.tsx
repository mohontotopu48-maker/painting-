import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                Contact Us
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                Ready to Start Your <br /> Next Project?
              </h2>
              <p className="text-lg text-muted-foreground">
                Get in touch today for a free, no-obligation estimate. We respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">Call Us</h4>
                  <a href="tel:1-800-ELITE" className="text-muted-foreground hover:text-accent transition-colors">(800) 555-0123</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">Email Us</h4>
                  <a href="mailto:hello@elitepainters.com" className="text-muted-foreground hover:text-accent transition-colors">hello@elitepainters.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">Our Studio</h4>
                  <p className="text-muted-foreground">456 Spectrum Center Dr, Suite 200 <br /> Irvine, CA 92618</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">Business Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 8am - 6pm <br /> Sat: 9am - 2pm</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-3xl text-white flex items-center gap-6">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shrink-0 rotate-3">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold">Licensed & Fully Insured</h4>
                <p className="text-white/70 text-sm">Your property is protected. We carry $2M in liability coverage for your peace of mind.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input id="contact-name" placeholder="Jane Smith" className="bg-slate-50 h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" placeholder="(555) 000-0000" className="bg-slate-50 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email Address</Label>
                <Input id="contact-email" type="email" placeholder="jane@example.com" className="bg-slate-50 h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-service">Service Interested In</Label>
                <select className="w-full h-12 px-3 rounded-md border border-input bg-slate-50 text-sm">
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Commercial Painting</option>
                  <option>Cabinet Painting</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Project Details</Label>
                <Textarea id="contact-message" placeholder="Tell us about your project goals, timeline, and any specific requirements..." className="bg-slate-50 min-h-[150px]" />
              </div>
              <Button className="w-full bg-accent hover:bg-gold-600 text-primary font-bold py-8 text-xl shadow-xl shadow-accent/20 rounded-xl">
                Send Message
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
