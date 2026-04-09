import { motion } from 'motion/react';
import { ClipboardList, CalendarCheck, Paintbrush, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Request Quote',
    description: 'Fill out our simple online form or give us a call to schedule your free, no-obligation estimate.',
    icon: ClipboardList,
    color: 'bg-blue-500'
  },
  {
    title: 'Consultation',
    description: 'We visit your property, discuss your vision, provide color advice, and give you a detailed written quote.',
    icon: CalendarCheck,
    color: 'bg-purple-500'
  },
  {
    title: 'Professional Painting',
    description: 'Our expert crew handles all prep work and painting with meticulous attention to detail and cleanliness.',
    icon: Paintbrush,
    color: 'bg-accent'
  },
  {
    title: 'Final Walkthrough',
    description: 'We review the work with you to ensure every detail meets our high standards and your complete satisfaction.',
    icon: CheckCircle,
    color: 'bg-green-500'
  }
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Our Simple 4-Step Process
          </h2>
          <p className="text-lg text-muted-foreground">
            We’ve refined our workflow to ensure a stress-free experience from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center text-white shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-heading font-bold text-primary">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
