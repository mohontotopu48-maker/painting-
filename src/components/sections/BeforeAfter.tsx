import React, { useState } from 'react';
import { motion } from 'motion/react';

const comparisons = [
  {
    title: 'Living Room Transformation',
    before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Exterior Curb Appeal',
    before: 'https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?q=80&w=2038&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1518605336397-885332d623dd?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function BeforeAfter() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            The Results
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Seeing is Believing
          </h2>
          <p className="text-lg text-muted-foreground">
            Our work speaks for itself. Slide to see the dramatic transformations we've achieved for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {comparisons.map((item, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-primary text-center">{item.title}</h3>
              <ComparisonSlider before={item.before} after={item.after} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSlider({ before, after }: { before: string; after: string }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      className="relative aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border-4 border-white"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img 
        src={after} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={before} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `calc(100 * 100 / ${sliderPos})%` }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-xl z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-primary/20 rounded-full"></div>
            <div className="w-1 h-4 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Before</div>
      <div className="absolute bottom-6 right-6 bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">After</div>
    </div>
  );
}
