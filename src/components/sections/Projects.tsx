import React from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/QuoteModal';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Waterfront Estate',
    category: 'Residential',
    location: 'Newport Beach, CA',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    description: 'Full interior and exterior transformation using premium weather-shield coatings.'
  },
  {
    id: 2,
    title: 'Tech Campus Refresh',
    category: 'Commercial',
    location: 'Irvine, CA',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    description: 'Industrial-style open office painting with custom accent walls and exposed ceiling work.'
  },
  {
    id: 3,
    title: 'Classic Coastal Refresh',
    category: 'Residential',
    location: 'Laguna Beach, CA',
    image: 'https://images.unsplash.com/photo-1518605336397-885332d623dd?q=80&w=2070&auto=format&fit=crop',
    description: 'Restoration of historical trim and siding with traditional color palette.'
  },
  {
    id: 4,
    title: 'Luxury Kitchen Remodel',
    category: 'Cabinets',
    location: 'Mission Viejo, CA',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop',
    description: 'Professional cabinet refinishing with factory-grade durable finish.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Recent Transformations
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore some of our recently completed projects and see the Elite difference for yourself.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white p-1 h-auto rounded-xl shadow-sm border">
              <TabsTrigger value="all" className="px-6 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">All Projects</TabsTrigger>
              <TabsTrigger value="residential" className="px-6 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Residential</TabsTrigger>
              <TabsTrigger value="commercial" className="px-6 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Commercial</TabsTrigger>
              <TabsTrigger value="cabinets" className="px-6 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Cabinets</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="residential" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.category === 'Residential').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="commercial" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.category === 'Commercial').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cabinets" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.category === 'Cabinets').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <QuoteModal>
            <Button className="bg-primary hover:bg-navy-800 text-white font-bold py-6 px-10 text-lg rounded-xl shadow-xl shadow-primary/20">
              Start Your Transformation Today
            </Button>
          </QuoteModal>
        </div>
      </div>
    </section>
  );
}

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute top-6 left-6 flex gap-2">
          <Badge className="bg-accent text-primary font-bold border-none px-3 py-1">{project.category}</Badge>
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-primary font-bold border-none px-3 py-1">{project.location}</Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
          <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/80 mb-6 line-clamp-2">{project.description}</p>
          <div className="flex items-center gap-1 text-accent mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            <span className="text-white text-sm font-bold ml-2">5.0 Rating</span>
          </div>
          <QuoteModal>
            <Button className="bg-accent hover:bg-gold-600 text-primary font-bold w-full py-6 rounded-xl">
              Request Similar Project
            </Button>
          </QuoteModal>
        </div>
      </div>
    </motion.div>
  );
};
