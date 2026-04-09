import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Info, CheckCircle2, ArrowRight } from 'lucide-react';

interface EstimateCalculatorProps {
  onOpenQuote: () => void;
}

export default function EstimateCalculator({ onOpenQuote }: EstimateCalculatorProps) {
  const [sqft, setSqft] = useState<string>('');
  const [rooms, setRooms] = useState<number>(1);
  const [quality, setQuality] = useState<'standard' | 'premium' | 'ultra'>('premium');

  const calculateEstimate = () => {
    const sq = parseInt(sqft || '0');
    if (sq <= 0) return 0;
    const basePrice = sq * 2.5;
    const roomMultiplier = rooms * 150;
    const qualityMultiplier = quality === 'ultra' ? 1.5 : quality === 'premium' ? 1.2 : 1;
    const total = (basePrice + roomMultiplier) * qualityMultiplier;
    return Math.round(total);
  };

  const estimate = calculateEstimate();
  const hasSqft = parseInt(sqft || '0') > 0;

  const qualityLabels = {
    standard: { label: 'Standard', sub: 'Good Quality' },
    premium: { label: 'Premium', sub: 'Best Seller' },
    ultra: { label: 'Ultra', sub: 'Luxury Grade' },
  };

  return (
    <section id="estimate" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block bg-[#F59E0B]/10 text-[#D97706] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest border border-[#F59E0B]/20">
                Instant Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F]">
                Get an Instant <br /><span className="text-[#F59E0B]">Project Estimate</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Wondering how much your project might cost? Use our smart calculator to get a rough idea instantly. For a guaranteed price, we'll schedule a free on-site visit.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'No credit card required',
                'Based on local Orange County market rates',
                'Includes labor and premium materials',
                'Response within 2 hours guaranteed',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="font-medium text-[#0A192F]/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 bg-white rounded-2xl border border-slate-200 flex gap-4 shadow-sm">
              <Info className="w-5 h-5 text-[#0A192F] shrink-0 mt-0.5" />
              <p className="text-sm text-slate-500">
                <strong className="text-[#0A192F]">Note:</strong> This is a rough estimate. Actual pricing may vary based on wall condition, ceiling height, and specific material choices. Our in-person quote is always free.
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 px-5 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-[#0A192F]">500+</div>
              <div>
                <p className="font-bold text-[#0A192F] text-sm">Projects Completed</p>
                <p className="text-xs text-slate-500">Across Orange County this year</p>
              </div>
              <div className="w-px h-10 bg-slate-200 mx-2"></div>
              <div className="text-3xl font-bold text-[#0A192F]">4.9★</div>
              <div>
                <p className="font-bold text-[#0A192F] text-sm">Average Rating</p>
                <p className="text-xs text-slate-500">Google &amp; Yelp combined</p>
              </div>
            </div>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
              <CardHeader className="bg-gradient-to-br from-[#0A192F] to-[#112240] text-white p-8">
                <CardTitle className="flex items-center gap-3 text-2xl font-heading">
                  <div className="w-10 h-10 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  Paint Cost Estimator
                </CardTitle>
                <p className="text-white/60 text-sm mt-1">Fill in details below for an instant estimate</p>
              </CardHeader>

              <CardContent className="p-8 space-y-7 bg-white">
                {/* Sqft */}
                <div className="space-y-2">
                  <Label htmlFor="sqft" className="font-semibold text-[#0A192F]">Square Footage</Label>
                  <Input
                    id="sqft"
                    type="number"
                    placeholder="e.g. 1500"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    className="h-12 text-lg border-slate-200 focus:border-[#0A192F]"
                  />
                </div>

                {/* Rooms */}
                <div className="space-y-2">
                  <Label className="font-semibold text-[#0A192F]">Number of Rooms</Label>
                  <div className="flex items-center gap-5">
                    <button
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      className="w-10 h-10 rounded-xl border-2 border-slate-200 flex items-center justify-center text-[#0A192F] font-bold hover:border-[#0A192F] transition-colors"
                    >−</button>
                    <span className="text-2xl font-bold text-[#0A192F] w-8 text-center">{rooms}</span>
                    <button
                      onClick={() => setRooms(rooms + 1)}
                      className="w-10 h-10 rounded-xl border-2 border-slate-200 flex items-center justify-center text-[#0A192F] font-bold hover:border-[#0A192F] transition-colors"
                    >+</button>
                  </div>
                </div>

                {/* Quality */}
                <div className="space-y-2">
                  <Label className="font-semibold text-[#0A192F]">Paint Quality</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['standard', 'premium', 'ultra'] as const).map((q) => (
                      <button
                        key={q}
                        onClick={() => setQuality(q)}
                        className={`py-3 px-2 rounded-xl border-2 text-center transition-all font-semibold text-sm flex flex-col items-center gap-0.5 ${
                          quality === q
                            ? 'border-[#0A192F] bg-[#0A192F] text-white'
                            : 'border-slate-200 text-slate-600 hover:border-[#0A192F]/40'
                        }`}
                      >
                        <span className="capitalize">{qualityLabels[q].label}</span>
                        <span className={`text-[10px] font-normal ${quality === q ? 'text-white/70' : 'text-slate-400'}`}>
                          {qualityLabels[q].sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Total</p>
                      <div className="flex items-end gap-2">
                        <h3 className="text-5xl font-heading font-bold text-[#0A192F]">
                          {hasSqft ? `$${estimate.toLocaleString()}` : '$—'}
                        </h3>
                        {hasSqft && <span className="text-slate-400 text-sm mb-2">approx.</span>}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Financing</p>
                      <p className="text-sm font-bold text-[#F59E0B]">Monthly Plans Available</p>
                    </div>
                  </div>

                  <Button
                    onClick={onOpenQuote}
                    className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-7 text-lg rounded-xl shadow-xl shadow-amber-200/50 flex items-center gap-2 justify-center"
                  >
                    Lock In This Price
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <p className="text-center text-xs text-slate-400 mt-3">Free estimate • No commitment required</p>
                </div>
              </CardContent>
            </Card>

            {/* Decorative background */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#F59E0B]/10 rounded-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
