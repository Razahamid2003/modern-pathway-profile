
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-16 bg-white"
    >
      <div className="container-custom">
        <p className="section-title opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, my name is
        </p>
        <h1 className="heading-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          John Doe.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-navy mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          I build things for the web.
        </h2>
        <div className="max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-portfolio-slate text-lg mb-12">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently focusing on building accessible, human-centered products.
          </p>
          <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
            View my work
            <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
