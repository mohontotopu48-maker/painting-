import React from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectsProps {
  onOpenQuote: () => void;
}

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
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    description: 'Full interior and exterior transformation using premium weather-shield coatings.'
  },
  {
    id: 2,
    title: 'Tech Campus Refresh',
    category: 'Commercial',
    location: 'Irvine, CA',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    description: 'Industrial-style open office painting with custom accent walls and exposed ceiling work.'
  },
  {
    id: 3,
    title: 'Classic Coastal Refresh',
    category: 'Residential',
    location: 'Laguna Beach, CA',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop',
    description: 'Restoration of historical trim and siding with a traditional Coastal color palette.'
  },
  {
    id: 4,
    title: 'Luxury Kitchen Remodel',
    category: 'Cabinets',
    location: 'Mission Viejo, CA',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
    description: 'Professional cabinet refinishing with factory-grade durable sprayed finish.'
  }
];

export default function Projects({ onOpenQuote }: ProjectsProps) {
  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block bg-[#0A192F]/8 text-[#0A192F] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest border border-[#0A192F]/10">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F]">
            Recent Transformations
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Real projects, real Orange County homes and businesses. See the Elite difference for yourself.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white p-1.5 h-auto rounded-2xl shadow-md border border-slate-100">
              {['all', 'residential', 'commercial', 'cabinets'].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="px-6 py-2.5 rounded-xl capitalize font-semibold data-[state=active]:bg-[#0A192F] data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
                >
                  {tab === 'all' ? 'All Projects' : tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenQuote={onOpenQuote} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="residential" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.category === 'Residential').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenQuote={onOpenQuote} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="commercial" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.category === 'Commercial').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenQuote={onOpenQuote} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cabinets" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.category === 'Cabinets').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenQuote={onOpenQuote} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-14 text-center">
          <Button
            onClick={onOpenQuote}
            className="bg-[#0A192F] hover:bg-[#112240] text-white font-bold py-7 px-12 text-lg rounded-xl shadow-xl shadow-[#0A192F]/20 gap-2"
          >
            Start Your Transformation Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const ProjectCard: React.FC<{ project: Project; index: number; onOpenQuote: () => void }> = ({ project, index, onOpenQuote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-[380px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute top-5 left-5 flex gap-2">
          <Badge className="bg-[#F59E0B] text-[#0A192F] font-bold border-none px-3 py-1 shadow-md">
            {project.category}
          </Badge>
        </div>

        {/* Always-visible bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-2 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
            {project.location}
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/75 mb-4 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </p>
          <div className="flex items-center gap-1 text-[#F59E0B] mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            <span className="text-white text-sm font-bold ml-1">5.0 Rating</span>
          </div>
          <Button
            onClick={onOpenQuote}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0A192F] font-bold w-full py-5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 gap-2"
          >
            Request Similar Project <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
