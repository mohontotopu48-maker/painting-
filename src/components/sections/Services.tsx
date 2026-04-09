import { motion } from 'motion/react';
import { 
  Home, Building2, Paintbrush, Layers, Droplets, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServicesProps {
  onOpenQuote: () => void;
}

const services = [
  {
    title: 'Interior Painting',
    description: 'Flawless walls, ceilings, and trim. Premium low-VOC paints for a beautiful, healthy home that lasts.',
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Exterior Painting',
    description: 'Protect and beautify your home with weather-resistant coatings that stand up to California sun and rain.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Commercial Painting',
    description: 'Professional solutions for offices, retail, and industrial spaces — minimal disruption, maximum impact.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Cabinet Painting',
    description: 'Give your kitchen a high-end designer look for a fraction of the cost of full cabinet replacement.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Drywall & Wall Repair',
    description: 'Expert patching, sanding, and texturing for a perfectly smooth surface before any paint is applied.',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Pressure Washing',
    description: 'Deep cleaning for siding, decks, and driveways — prep your surface or just refresh your curb appeal.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Services({ onOpenQuote }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-block bg-[#0A192F]/8 text-[#0A192F] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest border border-[#0A192F]/10">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F]">
              Premium Painting Services <br className="hidden md:block" />For Every Surface
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              From residential refreshes to large-scale commercial projects — excellence with every brushstroke.
            </p>
          </div>
          <Button
            onClick={onOpenQuote}
            variant="outline"
            className="border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white font-bold h-14 px-8 shrink-0 transition-all"
          >
            View All Services
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col rounded-2xl">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-[#F59E0B] p-3 rounded-xl shadow-lg">
                    <service.icon className="w-5 h-5 text-[#0A192F]" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-heading font-bold group-hover:text-[#F59E0B] transition-colors text-[#0A192F]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-slate-500 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <button
                    onClick={onOpenQuote}
                    className="flex items-center gap-2 font-bold text-[#0A192F] group-hover:text-[#F59E0B] transition-colors text-sm"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
