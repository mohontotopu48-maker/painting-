import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Elite Painters transformed our outdated living room into a modern masterpiece. Their attention to detail on the trim work was incredible. Highly recommend!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Property Manager',
    content: 'We use Elite for all our commercial properties. They are reliable, fast, and always leave the site spotless. Their pricing is fair and transparent.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Real Estate Agent',
    content: 'I always recommend Elite to my clients who are preparing to sell. Their exterior painting work adds massive curb appeal and value to every home.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=emily'
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-muted-foreground">
            Don’t just take our word for it. We pride ourselves on delivering 5-star service to every single customer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 relative pt-12">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <CardContent className="text-center space-y-6">
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="w-10 h-10 text-accent/20 absolute -top-4 -left-2 -z-10" />
                    <p className="text-lg text-primary/80 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50">
          {/* Mock Review Platform Logos */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1 rounded font-bold text-xl">G</div>
            <span className="font-bold text-primary">Google Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white p-1 rounded font-bold text-xl">Y</div>
            <span className="font-bold text-primary">Yelp Elite</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-green-600 text-white p-1 rounded font-bold text-xl">H</div>
            <span className="font-bold text-primary">Houzz Pro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
