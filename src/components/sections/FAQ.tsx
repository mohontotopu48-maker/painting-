import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does it cost to paint a house?",
    answer: "Pricing depends on several factors including the size of the area, the type of paint used, and the amount of prep work required. We provide free, detailed written estimates so you know exactly what to expect before we start."
  },
  {
    question: "How long does a typical painting project take?",
    answer: "Most residential interior projects take 2-4 days, while exterior projects can take 3-7 days depending on the size and weather conditions. We provide a specific timeline during your consultation."
  },
  {
    question: "Do I need to move my furniture?",
    answer: "We ask that you move small items and breakables. Our crew can help move larger furniture pieces to the center of the room and we will cover everything with professional-grade drop cloths and plastic."
  },
  {
    question: "What kind of paint do you use?",
    answer: "We primarily use premium paints from Sherwin Williams and Benjamin Moore. These products offer superior coverage, durability, and a beautiful finish that lasts much longer than budget alternatives."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Elite Painters is fully licensed and carries comprehensive general liability and workers' compensation insurance. We are happy to provide certificates of insurance upon request."
  },
  {
    question: "Do you offer a warranty on your work?",
    answer: "Absolutely. We offer a 2-year workmanship warranty on all our painting projects. We stand behind our quality and will return to fix any issues related to our application."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              Got Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              We want you to feel completely confident in your decision to work with us. If you don't see your question here, feel free to give us a call!
            </p>
            <div className="pt-8">
              <div className="bg-primary p-8 rounded-3xl text-white space-y-4">
                <h4 className="text-2xl font-heading font-bold">Still Need Help?</h4>
                <p className="text-white/70">Our experts are ready to answer any specific questions about your project.</p>
                <a href="tel:1-800-ELITE" className="block text-3xl font-heading font-bold text-accent hover:underline">
                  (800) 555-0123
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 last:border-0">
                  <AccordionTrigger className="text-left text-lg font-heading font-bold text-primary hover:text-accent py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
