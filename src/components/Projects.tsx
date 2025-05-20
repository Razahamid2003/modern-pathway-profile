import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  liveLink?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "A sleek, modern portfolio website built with React and Tailwind CSS. Features smooth animations and responsive design.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      liveLink: "https://example.com",
      featured: true,
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, and payment processing capabilities.",
      tags: ["Next.js", "MongoDB", "Stripe API"],
      github: "https://github.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application that provides real-time forecasts using the OpenWeather API.",
      tags: ["JavaScript", "React", "Weather API"],
      github: "https://github.com",
      liveLink: "https://example.com",
      featured: false,
    },
    {
      title: "Task Management App",
      description: "A productivity tool built to help users manage their daily tasks with drag-and-drop capabilities.",
      tags: ["React", "Redux", "Node.js"],
      github: "https://github.com",
      featured: false,
    },
    {
      title: "Recipe Finder",
      description: "An app that lets users search for recipes based on ingredients they have on hand.",
      tags: ["React", "Food API", "Tailwind CSS"],
      github: "https://github.com",
      featured: false,
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first application for tracking workouts and fitness progress over time.",
      tags: ["React Native", "Firebase", "Charts.js"],
      github: "https://github.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="section-title inline-block">03.</h2>
          <h2 className="heading-md inline-block m-0">Some Things I've Built</h2>
          <div className="h-px bg-portfolio-lightNavy flex-grow"></div>
        </div>
        
        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className={`relative grid md:grid-cols-12 gap-4 md:gap-10 ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              <div className={`md:col-span-7 relative ${
                index % 2 === 0 
                  ? 'md:order-1' 
                  : 'md:order-2'
              }`}>
                <div className="h-full w-full bg-portfolio-navy rounded"></div>
              </div>
              
              <div className={`md:col-span-5 ${
                index % 2 === 0 
                  ? 'md:order-2' 
                  : 'md:order-1'
              }`}>
                <p className="section-title">Featured Project</p>
                <h3 className="text-2xl font-bold text-portfolio-black mb-4">{project.title}</h3>
                <div className="bg-white p-6 rounded shadow-xl mb-4 border border-portfolio-navy/10">
                  <p className="text-portfolio-slate">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-6 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.tags.map(tag => (
                    <Badge key={tag} className="bg-transparent text-portfolio-slate border border-portfolio-highlight">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className={`flex gap-4 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-portfolio-slate hover:text-portfolio-highlight">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-portfolio-slate hover:text-portfolio-highlight">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects Grid */}
        <h3 className="heading-md text-xl font-bold text-center mb-12">Other Noteworthy Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map(project => (
            <Card key={project.title} className="bg-white border-portfolio-navy/10 hover:-translate-y-2 transition-transform duration-300 shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <Folder size={32} className="text-portfolio-highlight" />
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-portfolio-slate hover:text-portfolio-highlight">
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-portfolio-slate hover:text-portfolio-highlight">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-portfolio-black mb-3">{project.title}</h3>
                <p className="text-portfolio-slate mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-portfolio-slate font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
