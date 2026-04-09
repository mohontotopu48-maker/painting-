import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Star, Phone, Send } from "lucide-react";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden border-none shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0A192F] to-[#112240] p-8 text-white">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            ))}
            <span className="text-white/70 text-xs ml-2">500+ 5-Star Reviews</span>
          </div>
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-white leading-tight">
              Your Free Estimate Awaits
            </DialogTitle>
            <DialogDescription className="text-white/75 text-base mt-1">
              Delgados Painting is here to help. No obligation. Response within 2 hours.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <div className="p-8 space-y-5 bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="modal-name" className="font-semibold text-sm">Full Name *</Label>
              <Input id="modal-name" placeholder="John Doe" className="bg-slate-50 border-slate-200" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="modal-phone" className="font-semibold text-sm">Phone Number *</Label>
              <Input id="modal-phone" placeholder="(714) 555-0123" className="bg-slate-50 border-slate-200" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="modal-email" className="font-semibold text-sm">Email Address *</Label>
            <Input id="modal-email" type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="modal-service" className="font-semibold text-sm">Service Needed</Label>
            <select
              id="modal-service"
              className="w-full h-10 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
            >
              <option>Interior Painting</option>
              <option>Exterior Painting</option>
              <option>Commercial Painting</option>
              <option>Cabinet Painting</option>
              <option>Drywall Repair</option>
              <option>Pressure Washing</option>
              <option>Other / Not Sure</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="modal-message" className="font-semibold text-sm">Project Details (Optional)</Label>
            <Textarea
              id="modal-message"
              placeholder="Tell us about your project — size, timeline, any special requests..."
              className="bg-slate-50 border-slate-200 min-h-[90px] resize-none"
            />
          </div>

          <Button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold py-6 text-lg shadow-xl shadow-amber-200 rounded-xl gap-2 mt-2 hover:scale-105 transition-all">
            <Send className="w-4 h-4" />
            Get Your Free Estimate Today
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-green-500" />
              <span>We respond in 2hrs</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
