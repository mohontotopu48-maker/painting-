import { motion } from 'motion/react';

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Projects Completed', value: '2,500+' },
  { label: 'Happy Clients', value: '1,800+' },
  { label: 'Satisfaction Rate', value: '100%' },
];

export default function TrustBar() {
  return (
    <div className="bg-primary py-12 border-y border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-1"
            >
              <div className="text-3xl md:text-5xl font-heading font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-white/60 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Partner Logos */}
          {['Sherwin Williams', 'Benjamin Moore', 'Behr', 'PPG', 'Valspar'].map((brand) => (
            <div key={brand} className="text-white font-heading font-black text-xl md:text-2xl tracking-tighter">
              {brand.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
