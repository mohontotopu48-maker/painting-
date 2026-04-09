import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

const comparisons = [
  {
    title: 'Living Room Transformation',
    location: 'Irvine, CA',
    before: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Exterior Curb Appeal',
    location: 'Newport Beach, CA',
    before: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1518605336397-885332d623dd?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block bg-[#0A192F]/8 text-[#0A192F] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest border border-[#0A192F]/10">
            The Results
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F]">
            Seeing Is Believing
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Drag the slider to reveal the dramatic transformations we've achieved for real Orange County homeowners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-heading font-bold text-[#0A192F]">{item.title}</h3>
                <span className="text-sm text-slate-500 font-medium">📍 {item.location}</span>
              </div>
              <ComparisonSlider before={item.before} after={item.after} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSlider({ before, after }: { before: string; after: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 2), 98));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updateSlider(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border-2 border-slate-200"
      onMouseMove={handleMouseMove}
      onMouseDown={(e) => { setIsDragging(true); updateSlider(e.clientX); }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (full background) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (clipped to left side) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / sliderPos) * 100}%`, maxWidth: 'none' }}
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-slate-200">
          <MoveHorizontal className="w-5 h-5 text-[#0A192F]" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-[#F59E0B] text-[#0A192F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
        After
      </div>

      {/* Drag hint */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md text-[#0A192F] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md pointer-events-none">
        <MoveHorizontal className="w-3 h-3" /> Drag to compare
      </div>
    </div>
  );
}
