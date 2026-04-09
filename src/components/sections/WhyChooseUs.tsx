import { motion } from 'motion/react';
import { 
  Users, 
  ShieldCheck, 
  DollarSign, 
  Zap, 
  Search, 
  Sparkles, 
  Calendar, 
  ThumbsUp 
} from 'lucide-react';

const reasons = [
  {
    title: 'Experienced Painters',
    description: 'Our crew consists of background-checked, highly skilled professionals with years of experience.',
    icon: Users
  },
  {
    title: 'Premium Materials',
    description: 'We only use top-tier paints from Sherwin Williams and Benjamin Moore for a lasting finish.',
    icon: Sparkles
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees. You get a detailed, written estimate that we stick to—guaranteed.',
    icon: DollarSign
  },
  {
    title: 'Fast Turnaround',
    description: 'We respect your time. Our efficient process ensures your project is completed on schedule.',
    icon: Zap
  },
  {
    title: 'Detail-Oriented',
    description: 'From meticulous prep work to crisp lines, we don’t consider the job done until it’s perfect.',
    icon: Search
  },
  {
    title: 'Clean Job Sites',
    description: 'We treat your home like our own. We clean up thoroughly at the end of every single day.',
    icon: ShieldCheck
  },
  {
    title: 'Reliable Scheduling',
    description: 'When we say we’ll be there, we’ll be there. Punctuality is a core value of our business.',
    icon: Calendar
  },
  {
    title: 'Satisfaction Guarantee',
    description: 'We stand behind our work. If you’re not 100% happy, we’ll make it right—no questions asked.',
    icon: ThumbsUp
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            The Elite Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Why Homeowners & Businesses <br /> Trust Elite Painters
          </h2>
          <p className="text-lg text-muted-foreground">
            We’ve built our reputation on quality, reliability, and exceptional customer service. Here’s what sets us apart from the competition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6">
                  <reason.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent/20 rounded-lg -z-10 group-hover:bg-accent group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
