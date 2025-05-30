import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Folder } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  liveLink?: string;
  featured: boolean;
  detailsPath?: string;
}

const Projects: React.FC = () => {
  const navigate = useNavigate();
  
  const projects: Project[] = [
    {
      title: "ColorGrid Multiplayer Game (MERN Stack)",
      description: "Engineered a full-stack, real-time multiplayer 5x5 board game with matchmaking, turn-based coloring mechanics, persistent scoring, and dynamic leaderboards; built a React frontend (hooks, React Router, Tailwind CSS) and an Express + Socket.IO backend with optimized MongoDB schemas and socket event workflows to achieve <100 ms move latency and a 50% reduction in API response time.",
      tags: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Razahamid2003/LUMS-Projects/tree/main/LUMS%20Projects/Advanced%20Programming%20(CS-300)",
      featured: true,
      detailsPath: "/project/colorgrid",
    },
    {
      title: "Automated Daily News Sentiment Analysis Pipeline",
      description: "Spearheaded a Python pipeline using Scrapy, BeautifulSoup, and NLTK VADER to scrape 500+ news articles daily and auto-generate Matplotlib sentiment trend charts, cutting manual reporting time by 90% and delivering real-time media tone insights.",
      tags: ["Python", "Scrapy", "BeautifulSoup", "NLTK", "Data Analysis", "Automation"],
      github: "https://github.com/Razahamid2003/LUMS-Projects/tree/main/LUMS%20Projects/Machine%20Learning%20(CS-438)/News%20Sentiment%20Analysis",
      featured: true,
    },
    {
      title: "N-Gram Language Model with GPT Principles",
      description: "Designed and implemented a LLM using N-grams inspired by GPT architecture principles. Developed a scalable Bigram-based text generation model, capable of producing coherent predictions and handling complex language patterns. Optimized performance with efficient training strategies, enhancing model speed and accuracy.",
      tags: ["Python", "NLP", "GPT", "Language Models", "Machine Learning"],
      github: "https://github.com/Razahamid2003/LMKR-Projects",
      featured: true,
    },
    {
      title: "SmoLLoRA Injector",
      description: "Integrated Low-Rank Adapters (LoRA) into a 135 M-parameter SmoLLM by augmenting all Q/K/V/O and feed-forward projections with rank-4 adapter modules, slashing trainable parameters by 99% while matching LoRA fine-tuning perplexity on Dolly-15k. Developed a modular PyTorch framework to automate adapter injection, training, validation, and merge-for-inference, and optimized throughput with precomputed causal masks and step-LR scheduling—achieving a 3× speed-up in fine-tuning.",
      tags: ["PyTorch", "LoRA", "NLP", "Machine Learning", "Transformers"],
      featured: false,
    },
    {
      title: "Predictive Modeling for Classification and Regression",
      description: "Implemented Naive Bayes, K-Nearest Neighbors, Logistic Regression, and Neural Networks for diverse datasets, achieving 90%+ accuracy.",
      tags: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
      featured: false,
    },
    {
      title: "MERN Blackjack Game",
      description: "Developed a full-stack Blackjack web app with MongoDB, Express, React, and Node.js; styled with Tailwind CSS, navigated using React Router, CI/CD automated via GitHub Actions, and deployed on Netlify, demonstrating end-to-end full-stack proficiency.",
      tags: ["MERN Stack", "React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const handleProjectClick = (project: Project) => {
    if (project.detailsPath) {
      navigate(project.detailsPath);
    }
  };
  
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
                <div 
                  className={`h-64 w-full bg-portfolio-navy rounded flex items-center justify-center ${
                    project.detailsPath ? 'cursor-pointer hover:bg-portfolio-lightNavy transition-colors' : ''
                  }`}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="text-portfolio-highlight text-center">
                    <Folder size={48} className="mx-auto mb-4" />
                    <p className="font-mono text-sm">
                      {project.detailsPath ? 'Click to view details' : 'Project Preview'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`md:col-span-5 ${
                index % 2 === 0 
                  ? 'md:order-2' 
                  : 'md:order-1'
              }`}>
                <p className="section-title">Featured Project</p>
                <h3 className="text-2xl font-bold text-portfolio-black mb-4">{project.title}</h3>
                <div className="bg-white p-6 rounded shadow-xl mb-4 border border-portfolio-navy/10">
                  <p className="text-portfolio-slate text-sm">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-6 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.tags.map(tag => (
                    <Badge key={tag} className="bg-transparent text-portfolio-slate border border-portfolio-highlight text-xs">
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
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-portfolio-slate hover:text-portfolio-highlight">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-portfolio-black mb-3">{project.title}</h3>
                <p className="text-portfolio-slate mb-6 text-sm">{project.description}</p>
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
