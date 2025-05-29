
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-16 bg-white relative overflow-hidden"
    >
      {/* Marble-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-portfolio-navy/10 rounded-bl-[100%] transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-1/3 left-0 w-1/2 h-64 bg-portfolio-highlight/10 rounded-tr-[100%]"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 border-2 border-portfolio-highlight/20 rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-portfolio-navy/10 rounded-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <p className="section-title opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, my name is
        </p>
        <h1 className="heading-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Raza Hamid.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-navy mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          I like to work on Artificial Intelligence.
        </h2>
        <div className="max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-portfolio-slate text-lg mb-12">
            Results-driven Computer Science senior at LUMS specializing in AI/ML and NLP. 
            Currently seeking a summer internship to innovate in generative AI, reinforcement learning, 
            and predictive analytics at a leading tech company.
          </p>
          <a href="https://github.com/Razahamid2003" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 group">
            View my work
            <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
