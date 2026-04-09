// Service page data structure and metadata

export interface ServicePageData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: BenefitItem[];
  process: ProcessStep[];
  whyChooseUs: WhyChooseItem[];
  faqs: FAQItem[];
  testimonials: TestimonialItem[];
  beforeAfterGallery: BeforeAfterImage[];
  serviceAreas: string[];
  guarantee: string;
  warranty: string;
  timelineWeeks: number;
  costRange: string;
  seoKeywords: string[];
  metaDescription: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  duration?: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  detail: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
  rating: number;
  date: string;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  location: string;
  description: string;
}

// Service pages configuration
export const services: Record<string, ServicePageData> = {
  'interior-painting': {
    id: 'interior-painting',
    slug: 'interior-painting',
    title: 'Professional Interior Painting',
    subtitle: 'Transform Your Rooms with Expert Craftsmanship',
    description: 'Comprehensive interior painting services for residential and commercial spaces. From single rooms to entire homes, we deliver flawless finishes with premium materials and meticulous attention to detail.',
    heroImage: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      {
        title: 'Premium Paint Selection',
        description: 'We use only top-tier paints from Sherwin-Williams and Benjamin Moore for superior coverage and durability.',
        icon: 'Palette'
      },
      {
        title: 'Flawless Preparation',
        description: 'Proper surface prep is essential. We sand, prime, and prepare every surface for a perfect finish.',
        icon: 'Wrench'
      },
      {
        title: 'Expert Color Consultation',
        description: 'Our free color consultation helps you choose the perfect shade for your space and lifestyle.',
        icon: 'Lightbulb'
      },
      {
        title: 'Clean Workspace',
        description: 'Professional-grade drop cloths, protective coverings, and daily cleanup protect your home throughout the project.',
        icon: 'Sparkles'
      }
    ],
    process: [
      {
        number: 1,
        title: 'Consultation & Color Selection',
        description: 'We meet with you to understand your vision, discuss color options, and provide a detailed estimate.',
        duration: '1-2 hours'
      },
      {
        number: 2,
        title: 'Surface Preparation',
        description: 'All surfaces are cleaned, sanded, primed, and prepared for a flawless paint application.',
        duration: '1-2 days'
      },
      {
        number: 3,
        title: 'Paint Application',
        description: 'Expert application of premium paint with perfect coverage and consistent finish.',
        duration: '2-4 days'
      },
      {
        number: 4,
        title: 'Final Inspection & Cleanup',
        description: 'Quality inspection of all work, touch-ups as needed, and complete site cleanup.',
        duration: '1 day'
      }
    ],
    whyChooseUs: [
      {
        title: 'Licensed & Insured',
        description: 'Full licensing and comprehensive insurance protects you throughout your project.',
        detail: 'CSLB License #1098234, $2M General Liability Insurance'
      },
      {
        title: '15+ Years Experience',
        description: 'Decades of skilled craftsmanship and expertise in premium interior finishes.',
        detail: '2,500+ completed projects, 98%+ satisfaction rate'
      },
      {
        title: 'Flawless Workmanship',
        description: 'Meticulous attention to every detail ensures a perfect result every time.',
        detail: 'Professional-grade materials, expert application, quality assurance'
      }
    ],
    faqs: [
      {
        question: 'How long does an interior painting project take?',
        answer: 'Most interior projects take 3-7 days depending on size and complexity. We provide a specific timeline during your consultation.',
        category: 'Timeline'
      },
      {
        question: 'Do I need to move my furniture?',
        answer: 'We ask that you move small items and breakables. Our crew can help move larger pieces and will cover everything with professional-grade drop cloths.',
        category: 'Preparation'
      },
      {
        question: 'What paint do you use?',
        answer: 'We use premium paints from Sherwin-Williams and Benjamin Moore. These paints offer superior coverage, durability, and lasting beauty.',
        category: 'Materials'
      },
      {
        question: 'Do you offer a warranty?',
        answer: 'Yes! We offer a 2-year workmanship warranty on all interior painting projects. Your satisfaction is guaranteed.',
        category: 'Warranty'
      },
      {
        question: 'Can you help with color selection?',
        answer: 'Absolutely! Our free color consultation service helps you choose the perfect colors for each room.',
        category: 'Colors'
      }
    ],
    testimonials: [
      {
        quote: 'Delgados transformed our entire home. The attention to detail was incredible, and the crew was professional and respectful throughout the project.',
        author: 'Jennifer M.',
        location: 'Newport Beach, CA',
        rating: 5,
        date: '2024'
      },
      {
        quote: 'The color consultation was invaluable. They helped us choose colors that perfectly matched our furniture and design aesthetic.',
        author: 'Robert C.',
        location: 'Irvine, CA',
        rating: 5,
        date: '2024'
      }
    ],
    beforeAfterGallery: [
      {
        before: 'https://images.unsplash.com/photo-1498940336285-b83e7c10f4ec?q=80&w=2070&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        title: 'Living Room Transformation',
        location: 'Irvine, CA',
        description: 'Dated gray walls transformed into a warm, modern living space.'
      }
    ],
    serviceAreas: ['Irvine', 'Newport Beach', 'Laguna Beach', 'Huntington Beach', 'Costa Mesa', 'Anaheim', 'Mission Viejo', 'San Clemente'],
    guarantee: '100% Satisfaction Guarantee - If you\'re not completely happy with our work, we\'ll make it right.',
    warranty: '2-Year Workmanship Warranty - All interior painting work backed by our complete satisfaction guarantee.',
    timelineWeeks: 2,
    costRange: '$1,500 - $5,000+ depending on project scope',
    seoKeywords: ['interior painting', 'interior painter', 'interior painting contractor', 'home interior painting', 'room painting', 'residential painting'],
    metaDescription: 'Professional interior painting services in Orange County. Expert painters, premium materials, guaranteed satisfaction. Free consultation and estimate.'
  },

  'exterior-painting': {
    id: 'exterior-painting',
    slug: 'exterior-painting',
    title: 'Professional Exterior Painting',
    subtitle: 'Protect & Beautify Your Home\'s Exterior',
    description: 'Expert exterior painting services designed to protect your property and enhance curb appeal. Weather-resistant coatings, expert surface prep, and meticulous attention to detail.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      {
        title: 'Weather Protection',
        description: 'Premium, weather-resistant coatings protect your home from California sun, rain, and coastal elements.',
        icon: 'Shield'
      },
      {
        title: 'Curb Appeal Enhancement',
        description: 'A fresh exterior paint job instantly increases your home\'s curb appeal and property value.',
        icon: 'Home'
      },
      {
        title: 'Comprehensive Prep Work',
        description: 'Power washing, surface repair, and expert preparation ensure your paint lasts years longer.',
        icon: 'Zap'
      },
      {
        title: 'Professional Technique',
        description: 'Weather-appropriate timing, proper ventilation, and expert application for flawless results.',
        icon: 'CheckCircle'
      }
    ],
    process: [
      {
        number: 1,
        title: 'Inspection & Preparation',
        description: 'We inspect all surfaces, repair damage, power wash, and prepare for painting.',
        duration: '2-3 days'
      },
      {
        number: 2,
        title: 'Primer Application',
        description: 'Quality primer applied to all surfaces for maximum paint adhesion and coverage.',
        duration: '1-2 days'
      },
      {
        number: 3,
        title: 'Paint Application',
        description: 'Expert application with proper technique and weather considerations.',
        duration: '3-5 days'
      },
      {
        number: 4,
        title: 'Final Inspection & Touch-ups',
        description: 'Quality assurance and any necessary touch-ups for perfect results.',
        duration: '1 day'
      }
    ],
    whyChooseUs: [
      {
        title: 'Weather-Ready',
        description: 'We understand California\'s climate and choose appropriate materials and timing for lasting results.',
        detail: 'Coastal-tested products, optimal weather windows, proven durability'
      },
      {
        title: 'Premium Materials',
        description: 'Exterior-grade paints that resist fading, chalking, and weather damage.',
        detail: 'Sherwin-Williams Duration, Benjamin Moore Aura exterior coatings'
      },
      {
        title: 'Safety First',
        description: 'Professional equipment, scaffolding, and safety protocols for all high-elevation work.',
        detail: 'Proper safety equipment, licensed crew, comprehensive insurance'
      }
    ],
    faqs: [
      {
        question: 'How long does exterior painting last?',
        answer: 'With proper preparation and premium materials, exterior paint typically lasts 7-10 years in Orange County\'s climate.',
        category: 'Duration'
      },
      {
        question: 'What\'s the best time of year to paint the exterior?',
        answer: 'Spring and fall are ideal with moderate temperatures and low humidity. Summer heat and winter rain can affect results.',
        category: 'Timing'
      },
      {
        question: 'Do you repair damaged siding or wood?',
        answer: 'Yes! We repair or replace damaged wood, siding, and trim before painting. This ensures lasting results.',
        category: 'Repair'
      },
      {
        question: 'Will you power wash before painting?',
        answer: 'Absolutely. Professional power washing removes dirt, mold, and buildup, essential for paint adhesion.',
        category: 'Preparation'
      }
    ],
    testimonials: [
      {
        quote: 'Our home\'s exterior looks brand new! The attention to detail and quality of work was exceptional.',
        author: 'Michelle L.',
        location: 'Newport Beach, CA',
        rating: 5,
        date: '2024'
      }
    ],
    beforeAfterGallery: [
      {
        before: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1572120094610-7cc34e95e91c?q=80&w=2070&auto=format&fit=crop',
        title: 'Exterior Home Transformation',
        location: 'Laguna Beach, CA',
        description: 'Faded exterior with discolored trim restored to pristine condition.'
      }
    ],
    serviceAreas: ['Irvine', 'Newport Beach', 'Laguna Beach', 'Huntington Beach', 'Costa Mesa', 'Anaheim', 'Mission Viejo', 'San Clemente'],
    guarantee: '100% Satisfaction Guarantee - We stand behind our exterior work completely.',
    warranty: '5-Year Paint Warranty - Coverage against peeling, fading, or failure under normal conditions.',
    timelineWeeks: 3,
    costRange: '$3,000 - $8,000+ depending on home size and condition',
    seoKeywords: ['exterior painting', 'house painting', 'exterior paint service', 'home exterior painting', 'professional painters'],
    metaDescription: 'Exterior house painting in Orange County. Expert painters, weather-resistant coatings, guaranteed satisfaction. Serving all OC cities.'
  },

  'commercial-painting': {
    id: 'commercial-painting',
    slug: 'commercial-painting',
    title: 'Commercial Painting Services',
    subtitle: 'Professional Painting Solutions for Your Business',
    description: 'Specialized commercial painting services for offices, retail spaces, industrial facilities, and multi-unit properties. Minimal business disruption, professional execution, guaranteed results.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      {
        title: 'Minimal Disruption',
        description: 'Professional scheduling and efficient execution minimize impact on your business operations.',
        icon: 'Clock'
      },
      {
        title: 'Professional Environment',
        description: 'Expert teams maintain professional, clean work sites appropriate for business environments.',
        icon: 'Briefcase'
      },
      {
        title: 'Quality Finish',
        description: 'Premium commercial coatings designed for durability in high-traffic environments.',
        icon: 'Star'
      },
      {
        title: 'Flexibility',
        description: 'After-hours, weekend, or phased project options to suit your business schedule.',
        icon: 'Zap'
      }
    ],
    process: [
      {
        number: 1,
        title: 'Consultation & Planning',
        description: 'We assess your space, understand your timeline, and plan minimal-disruption schedule.',
        duration: '1-2 hours'
      },
      {
        number: 2,
        title: 'Prep & Protection',
        description: 'Professional surface preparation while protecting furniture, equipment, and floors.',
        duration: 'Variable'
      },
      {
        number: 3,
        title: 'Painting & Execution',
        description: 'Expert application with professional-grade commercial coatings.',
        duration: 'Variable'
      },
      {
        number: 4,
        title: 'Inspection & Cleanup',
        description: 'Quality assurance and thorough cleanup. Your space ready for business.',
        duration: '1 day'
      }
    ],
    whyChooseUs: [
      {
        title: 'Commercial Expertise',
        description: 'Years of experience with offices, retail, industrial, and multi-unit properties.',
        detail: '200+ commercial projects, proven track record with local businesses'
      },
      {
        title: 'Professional Standards',
        description: 'Licensed, insured, bonded. Meet all commercial and safety requirements.',
        detail: 'Full insurance, safety certifications, compliance documentation'
      },
      {
        title: 'Flexible Scheduling',
        description: 'We work around your business hours - weekends, nights, phased projects.',
        detail: 'Fast turnaround available, evening/weekend scheduling, project phasing'
      }
    ],
    faqs: [
      {
        question: 'Can you work around our business hours?',
        answer: 'Yes! We offer after-hours, evening, and weekend scheduling to minimize disruption to your operations.',
        category: 'Scheduling'
      },
      {
        question: 'What\'s the best time to paint a commercial space?',
        answer: 'We recommend scheduling during closed hours or low-traffic periods. We\'ll work with your schedule.',
        category: 'Timing'
      },
      {
        question: 'Do you provide references from other businesses?',
        answer: 'Absolutely! We have numerous references from local Orange County businesses and commercial property managers.',
        category: 'References'
      },
      {
        question: 'Are you insured for commercial work?',
        answer: 'Yes. We carry comprehensive commercial liability insurance and are fully bonded.',
        category: 'Insurance'
      }
    ],
    testimonials: [
      {
        quote: 'Professional, punctual, and minimal disruption to our business. Highly recommend for commercial work.',
        author: 'David K.',
        location: 'Irvine Business Park, CA',
        rating: 5,
        date: '2024'
      }
    ],
    beforeAfterGallery: [
      {
        before: 'https://images.unsplash.com/photo-1497366216548-37526070144c?q=80&w=2070&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop',
        title: 'Modern Office Space Refresh',
        location: 'Irvine, CA',
        description: 'Corporate office interior refresh with professional color scheme.'
      }
    ],
    serviceAreas: ['Irvine', 'Newport Beach', 'Laguna Beach', 'Huntington Beach', 'Costa Mesa', 'Anaheim', 'Mission Viejo', 'San Clemente'],
    guarantee: '100% Business Satisfaction Guarantee - Your project completed to specifications and on schedule.',
    warranty: '3-Year Commercial Warranty - Full coverage for commercial painting applications.',
    timelineWeeks: 2,
    costRange: '$2,000 - $15,000+ depending on project scope',
    seoKeywords: ['commercial painting', 'office painting', 'commercial painter', 'commercial paint service', 'business painting'],
    metaDescription: 'Commercial painting services for Orange County businesses. Expert painters, minimal disruption, guaranteed results. Free commercial estimate.'
  },

  'cabinet-refinishing': {
    id: 'cabinet-refinishing',
    slug: 'cabinet-refinishing',
    title: 'Expert Cabinet Refinishing',
    subtitle: 'Update Your Kitchen & Bathrooms Without the Cost of Replacement',
    description: 'Professional cabinet painting and refinishing services. Transform outdated cabinets into beautiful focal points. Cost-effective alternative to cabinet replacement with premium results.',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      {
        title: 'Cost-Effective Update',
        description: 'Fraction of the cost of cabinet replacement with dramatic transformation results.',
        icon: 'DollarSign'
      },
      {
        title: 'Premium Finish',
        description: 'Professional cabinet paint and finishes rival new cabinet quality and durability.',
        icon: 'Sparkles'
      },
      {
        title: 'Customization',
        description: 'Any color, finish, or style. Transform your cabinets into your vision.',
        icon: 'Palette'
      },
      {
        title: 'Minimal Disruption',
        description: 'We\'ll keep your kitchen or bathroom functional throughout the project.',
        icon: 'Home'
      }
    ],
    process: [
      {
        number: 1,
        title: 'Design Consultation',
        description: 'Discuss colors, finishes, and styles. We help you envision the final result.',
        duration: '1-2 hours'
      },
      {
        number: 2,
        title: 'Cabinet Removal',
        description: 'Doors and hardware carefully removed for professional finishing.',
        duration: '1 day'
      },
      {
        number: 3,
        title: 'Professional Refinishing',
        description: 'Sanding, priming, painting, and topcoat applied with expert technique.',
        duration: '5-7 days'
      },
      {
        number: 4,
        title: 'Professional Reinstallation',
        description: 'Doors and hardware carefully reinstalled with precision and care.',
        duration: '1-2 days'
      }
    ],
    whyChooseUs: [
      {
        title: 'Cabinet Specialty',
        description: 'Years of specialized experience in cabinet refinishing - not general painters.',
        detail: '500+ cabinet projects, master craftsmen, premium cabinet finishes'
      },
      {
        title: 'Professional Technique',
        description: 'Proper surface preparation and finishing techniques for lasting durability.',
        detail: 'Dust-containment systems, professional equipment, multi-coat finishes'
      },
      {
        title: 'Design Expertise',
        description: 'We help you choose colors and finishes that match your home and lifestyle.',
        detail: 'Color consultation, modern trends, timeless classic styles'
      }
    ],
    faqs: [
      {
        question: 'How long will refinished cabinets last?',
        answer: 'Professionally finished cabinets last 7-10+ years with normal use. We use durable cabinet-grade finishes.',
        category: 'Durability'
      },
      {
        question: 'Can I use my kitchen during the project?',
        answer: 'Yes! We work around your schedule. You can still use your kitchen during most of the project.',
        category: 'Access'
      },
      {
        question: 'What colors are available?',
        answer: 'Any color! We can match paint colors or help you choose new styles from thousands of options.',
        category: 'Colors'
      },
      {
        question: 'Do you replace hardware?',
        answer: 'We recommend replacing old hardware for a fully updated look. New handles and hinges are available.',
        category: 'Hardware'
      },
      {
        question: 'What\'s the cost vs. new cabinets?',
        answer: 'Cabinet refinishing typically costs 50-70% less than full cabinet replacement.',
        category: 'Cost'
      }
    ],
    testimonials: [
      {
        quote: 'Our kitchen looks brand new! The cabinet refinishing was amazing quality and way more affordable than full replacement.',
        author: 'Patricia H.',
        location: 'Corona del Mar, CA',
        rating: 5,
        date: '2024'
      }
    ],
    beforeAfterGallery: [
      {
        before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
        title: 'Kitchen Cabinet Transformation',
        location: 'Huntington Beach, CA',
        description: 'Dated white cabinets transformed into elegant modern gray.'
      }
    ],
    serviceAreas: ['Irvine', 'Newport Beach', 'Laguna Beach', 'Huntington Beach', 'Costa Mesa', 'Anaheim', 'Mission Viejo', 'San Clemente'],
    guarantee: '100% Satisfaction Guarantee - Love your results or we\'ll make them right.',
    warranty: '3-Year Cabinet Refinishing Warranty - Full coverage on all refinished cabinets.',
    timelineWeeks: 2,
    costRange: '$1,500 - $4,000 for typical kitchen',
    seoKeywords: ['cabinet painting', 'cabinet refinishing', 'kitchen cabinet painting', 'cabinet refacing', 'bathroom vanity painting'],
    metaDescription: 'Professional cabinet refinishing in Orange County. Expert cabinet painters, premium finishes. Transform your kitchen or bathroom affordably.'
  },

  'drywall-repair': {
    id: 'drywall-repair',
    slug: 'drywall-repair',
    title: 'Expert Drywall & Wall Repair',
    subtitle: 'From Small Holes to Complete Wall Restoration',
    description: 'Professional drywall repair, taping, mudding, and texture services. From small hole repairs to complete wall restoration, we deliver flawless results.',
    heroImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      {
        title: 'Expert Patching',
        description: 'Seamless repairs that blend perfectly with your existing walls.',
        icon: 'CheckCircle'
      },
      {
        title: 'Multiple Textures',
        description: 'We match your existing texture perfectly or create new texture styles.',
        icon: 'Layers'
      },
      {
        title: 'Complete Restoration',
        description: 'From damage assessment through painting - complete wall restoration service.',
        icon: 'Wrench'
      },
      {
        title: 'Smooth Finish',
        description: 'Professional taping, mudding, and sanding create perfectly smooth walls.',
        icon: 'Sparkles'
      }
    ],
    process: [
      {
        number: 1,
        title: 'Damage Assessment',
        description: 'We evaluate the damage and recommend the best repair approach.',
        duration: '30 minutes'
      },
      {
        number: 2,
        title: 'Drywall Repair/Patching',
        description: 'Removal of damaged drywall and installation of patches.',
        duration: '1 day'
      },
      {
        number: 3,
        title: 'Taping & Mudding',
        description: 'Multiple coats of joint compound, sanding, and finishing for seamless appearance.',
        duration: '2-3 days'
      },
      {
        number: 4,
        title: 'Texture & Paint',
        description: 'Apply matching texture and paint for invisible repair.',
        duration: '1-2 days'
      }
    ],
    whyChooseUs: [
      {
        title: 'Finishing Specialists',
        description: 'Expert drywall finishers with master-level taping and mudding skills.',
        detail: 'Seamless repairs, perfect texture matching, professional-grade finish'
      },
      {
        title: 'Full Service',
        description: 'From repair through painting - complete solution in one project.',
        detail: 'No coordination needed, consistent quality, single point of responsibility'
      },
      {
        title: 'Invisible Results',
        description: 'Our goal: you can\'t see where the repair was done.',
        detail: 'Perfect matching, seamless blending, professional finishing'
      }
    ],
    faqs: [
      {
        question: 'What size holes can you repair?',
        answer: 'We repair anything from small nail holes to large sections of damaged drywall.',
        category: 'Scope'
      },
      {
        question: 'Can you match my wall texture?',
        answer: 'Yes! We can match any common wall texture and create new textures if desired.',
        category: 'Texture'
      },
      {
        question: 'How long until repairs are ready to paint?',
        answer: 'After repairs and sanding, walls are immediately ready for painting.',
        category: 'Timeline'
      },
      {
        question: 'Do you offer this with painting services?',
        answer: 'Absolutely! We offer combined drywall repair and painting services.',
        category: 'Services'
      }
    ],
    testimonials: [
      {
        quote: 'They completely fixed all the wall damage in our home. We can\'t even tell where the repairs were done!',
        author: 'Thomas B.',
        location: 'Irvine, CA',
        rating: 5,
        date: '2024'
      }
    ],
    beforeAfterGallery: [
      {
        before: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2070&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop',
        title: 'Comprehensive Wall Restoration',
        location: 'Newport Beach, CA',
        description: 'Severe wall damage fully repaired and restored to perfect condition.'
      }
    ],
    serviceAreas: ['Irvine', 'Newport Beach', 'Laguna Beach', 'Huntington Beach', 'Costa Mesa', 'Anaheim', 'Mission Viejo', 'San Clemente'],
    guarantee: '100% Satisfaction Guarantee - Repair results absolutely perfect or we\'ll redo them.',
    warranty: '2-Year Repair Warranty - Full coverage on all drywall repairs.',
    timelineWeeks: 1,
    costRange: '$300 - $2,000 depending on repair extent',
    seoKeywords: ['drywall repair', 'wall repair', 'drywall finishing', 'hole repair', 'drywall patching'],
    metaDescription: 'Expert drywall repair and finishing in Orange County. Professional wall repair, texture matching, guaranteed seamless results.'
  },

  'pressure-washing': {
    id: 'pressure-washing',
    slug: 'pressure-washing',
    title: 'Professional Pressure Washing Services',
    subtitle: 'Deep Clean for Siding, Driveways, Decks & More',
    description: 'Professional pressure washing for homes and commercial properties. Remove dirt, mold, and buildup. Perfect prep work for painting projects.',
    heroImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      {
        title: 'Deep Cleaning',
        description: 'Professional-grade equipment removes dirt, mold, algae, and buildup safely.',
        icon: 'Zap'
      },
      {
        title: 'Property Enhancement',
        description: 'Instantly refresh curb appeal and restore surfaces to like-new appearance.',
        icon: 'Sparkles'
      },
      {
        title: 'Paint Prep',
        description: 'Essential preparation for exterior painting projects ensuring superior paint adhesion.',
        icon: 'CheckCircle'
      },
      {
        title: 'Safe & Professional',
        description: 'Proper pressure settings and technique protect your property while cleaning effectively.',
        icon: 'Shield'
      }
    ],
    process: [
      {
        number: 1,
        title: 'Inspection & Assessment',
        description: 'We assess the surface type and conditions to determine optimal approach.',
        duration: '30 minutes'
      },
      {
        number: 2,
        title: 'Pre-Treatment',
        description: 'Application of cleaning solutions to loosen dirt, mold, and algae.',
        duration: '1 hour'
      },
      {
        number: 3,
        title: 'Professional Washing',
        description: 'Expert pressure washing with proper technique and pressure for optimal results.',
        duration: '2-4 hours'
      },
      {
        number: 4,
        title: 'Final Inspection',
        description: 'Quality check and touch-ups to ensure pristine results.',
        duration: '30 minutes'
      }
    ],
    whyChooseUs: [
      {
        title: 'Professional Equipment',
        description: 'Commercial-grade pressure washing equipment properly maintained and operated.',
        detail: 'High-pressure systems, temperature control, professional-grade chemicals'
      },
      {
        title: 'Safe Technique',
        description: 'Proper pressure settings protect siding, paint, and delicate surfaces.',
        detail: 'Adjustable pressure, appropriate nozzles, surface-specific technique'
      },
      {
        title: 'Complements Painting',
        description: 'Perfect pre-paint prep work ensuring superior paint adhesion and longevity.',
        detail: 'Paint preparation specialist, optimal surface condition for painting'
      }
    ],
    faqs: [
      {
        question: 'Is pressure washing safe for all surfaces?',
        answer: 'With proper technique and pressure settings, yes. We adjust pressure for different surface types.',
        category: 'Safety'
      },
      {
        question: 'How often should I pressure wash?',
        answer: 'It depends on your climate and surface. Generally every 1-2 years for maintenance.',
        category: 'Frequency'
      },
      {
        question: 'Is this a good prep for painting?',
        answer: 'It\'s essential prep for painting! Clean surfaces ensure superior paint adhesion.',
        category: 'Painting'
      },
      {
        question: 'Will it remove stubborn stains?',
        answer: 'Most stains (mold, algae, dirt) are removed. Some deep-set stains may be resistant.',
        category: 'Results'
      }
    ],
    testimonials: [
      {
        quote: 'My driveway looks brand new! Professional work at a fair price. Highly recommend!',
        author: 'Lisa T.',
        location: 'Laguna Beach, CA',
        rating: 5,
        date: '2024'
      }
    ],
    beforeAfterGallery: [
      {
        before: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2070&auto=format&fit=crop',
        title: 'Complete Property Cleaning',
        location: 'Costa Mesa, CA',
        description: 'Entire property from dirty and stained to clean and refreshed.'
      }
    ],
    serviceAreas: ['Irvine', 'Newport Beach', 'Laguna Beach', 'Huntington Beach', 'Costa Mesa', 'Anaheim', 'Mission Viejo', 'San Clemente'],
    guarantee: '100% Satisfaction Guarantee - Completely satisfied with cleaning results.',
    warranty: 'Results-Based Guarantee - We\'ll touch up any missed areas.',
    timelineWeeks: 1,
    costRange: '$300 - $1,500 depending on area size',
    seoKeywords: ['pressure washing', 'power washing', 'house cleaning', 'driveway cleaning', 'commercial cleaning'],
    metaDescription: 'Professional pressure washing in Orange County. Expert house and driveway cleaning, paint prep, guaranteed results.'
  }
};

export function getService(slug: string): ServicePageData | undefined {
  return services[slug];
}

export function getAllServices(): ServicePageData[] {
  return Object.values(services);
}
