import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Star } from "lucide-react";

export default function QuoteModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none">
        <div className="bg-primary p-8 text-white">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <DialogHeader>
            <DialogTitle className="text-3xl font-heading font-bold text-white">Get Your Free Estimate</DialogTitle>
            <DialogDescription className="text-white/80 text-lg">
              Professional painting services at competitive prices. No obligation.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="p-8 space-y-6 bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="bg-slate-50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="(555) 000-0000" className="bg-slate-50" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service Needed</Label>
            <select className="w-full h-10 px-3 rounded-md border border-input bg-slate-50 text-sm">
              <option>Interior Painting</option>
              <option>Exterior Painting</option>
              <option>Commercial Painting</option>
              <option>Cabinet Painting</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Project Details (Optional)</Label>
            <Textarea id="message" placeholder="Tell us about your project..." className="bg-slate-50 min-h-[100px]" />
          </div>
          <Button className="w-full bg-accent hover:bg-gold-600 text-primary font-bold py-6 text-lg shadow-xl shadow-accent/20">
            Submit Request
          </Button>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span>Fast Response</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
