import { motion } from 'motion/react';
import { 
  Home, 
  Building2, 
  Paintbrush, 
  Layers, 
  Droplets, 
  Palette, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/QuoteModal';

const services = [
  {
    title: 'Interior Painting',
    description: 'Flawless walls, ceilings, and trim. We use premium low-VOC paints for a beautiful, healthy home.',
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Exterior Painting',
    description: 'Protect and beautify your home with weather-resistant coatings that last for years to come.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1518605336397-885332d623dd?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Commercial Painting',
    description: 'Professional solutions for offices, retail, and industrial spaces with minimal business disruption.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'Cabinet Painting',
    description: 'Give your kitchen a high-end designer look for a fraction of the cost of replacement.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Drywall & Wall Repair',
    description: 'Expert patching, sanding, and texturing to ensure a perfectly smooth surface before painting.',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Pressure Washing',
    description: 'Deep cleaning for siding, decks, and driveways to prep for paint or just refresh your curb appeal.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2076&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              Premium Painting Services <br className="hidden md:block" /> For Every Surface
            </h2>
            <p className="text-lg text-muted-foreground">
              From residential refreshes to large-scale commercial projects, we deliver excellence with every brushstroke.
            </p>
          </div>
          <QuoteModal>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold h-14 px-8">
              View All Services
            </Button>
          </QuoteModal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-accent p-3 rounded-xl shadow-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-heading font-bold group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <QuoteModal>
                    <Button variant="ghost" className="p-0 h-auto font-bold text-primary group-hover:text-accent flex items-center gap-2">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                  </QuoteModal>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
