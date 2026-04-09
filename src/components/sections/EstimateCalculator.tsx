import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Info, CheckCircle2 } from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';

export default function EstimateCalculator() {
  const [sqft, setSqft] = useState<string>('');
  const [rooms, setRooms] = useState<number>(1);
  const [quality, setQuality] = useState<'standard' | 'premium' | 'ultra'>('premium');

  const calculateEstimate = () => {
    const basePrice = parseInt(sqft || '0') * 2.5;
    const roomMultiplier = rooms * 150;
    const qualityMultiplier = quality === 'ultra' ? 1.5 : quality === 'premium' ? 1.2 : 1;
    
    const total = (basePrice + roomMultiplier) * qualityMultiplier;
    return total > 0 ? Math.round(total) : 0;
  };

  const estimate = calculateEstimate();

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                Instant Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                Get an Instant <br /> <span className="text-accent">Project Estimate</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Wondering how much your project might cost? Use our calculator to get a rough idea. For a firm, guaranteed price, schedule a free on-site consultation.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'No credit card required',
                'Based on local market rates',
                'Includes labor and materials',
                'Get a detailed PDF via email'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-primary/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
              <Info className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This is a rough estimate. Actual pricing may vary based on wall condition, ceiling height, and specific material choices.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardHeader className="bg-primary text-white p-8">
                <CardTitle className="flex items-center gap-3 text-2xl font-heading">
                  <Calculator className="w-6 h-6 text-accent" />
                  Estimate Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="sqft">Estimated Square Footage</Label>
                    <Input 
                      id="sqft" 
                      type="number" 
                      placeholder="e.g. 1500" 
                      value={sqft}
                      onChange={(e) => setSqft(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Number of Rooms</Label>
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                      >-</Button>
                      <span className="text-xl font-bold w-8 text-center">{rooms}</span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => setRooms(rooms + 1)}
                      >+</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Paint Quality</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['standard', 'premium', 'ultra'] as const).map((q) => (
                        <Button
                          key={q}
                          variant={quality === q ? 'default' : 'outline'}
                          className={`capitalize ${quality === q ? 'bg-primary text-white' : ''}`}
                          onClick={() => setQuality(q)}
                        >
                          {q}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Estimated Total</p>
                      <h3 className="text-5xl font-heading font-bold text-primary">
                        ${estimate.toLocaleString()}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-sm font-bold text-accent">Low Monthly Payments Available</p>
                    </div>
                  </div>

                  <QuoteModal>
                    <Button className="w-full bg-accent hover:bg-gold-600 text-primary font-bold py-8 text-xl rounded-xl shadow-xl shadow-accent/20">
                      Lock In This Price
                    </Button>
                  </QuoteModal>
                </div>
              </CardContent>
            </Card>

            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-accent/10 rounded-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
