import { motion } from 'motion/react';
import { Shield, MapPin, Phone, Star, Award, Clock } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Projects Completed', value: '2,500+' },
  { label: 'Happy OC Clients', value: '1,800+' },
  { label: 'Satisfaction Rate', value: '100%' },
];

const trustedBrands = ['Sherwin-Williams', 'Benjamin Moore', 'Behr', 'PPG', 'Valspar'];

const trustSignals = [
  { icon: Shield, label: 'Licensed & Insured', sub: 'CSLB #1098234' },
  { icon: MapPin, label: 'Orange County, CA', sub: 'Serving All OC Cities' },
  { icon: Star, label: '4.9 Star Rating', sub: '500+ Reviews' },
  { icon: Clock, label: 'Fast Response', sub: 'Reply within 2 hours' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#0A192F]">
      {/* Trust signals strip */}
      <div className="border-b border-white/10">
        <div className="container-custom py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustSignals.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-[#F59E0B]/15 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{item.label}</p>
                  <p className="text-white/50 text-xs">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-14 border-b border-white/10">
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
                <div className="text-4xl md:text-5xl font-heading font-bold text-[#F59E0B]">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/55 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Paint brand logos */}
      <div className="py-8">
        <div className="container-custom">
          <p className="text-center text-white/30 text-xs font-bold uppercase tracking-widest mb-6">
            We use premium paints from trusted brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="text-white/30 hover:text-white/70 font-heading font-black text-lg md:text-xl tracking-tighter transition-colors duration-300 cursor-default"
              >
                {brand.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
