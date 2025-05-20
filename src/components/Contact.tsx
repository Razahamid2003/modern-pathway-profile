
import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-portfolio-navy relative overflow-hidden">
      {/* Marble-inspired decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-portfolio-highlight/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-portfolio-highlight/10 rounded-tl-full"></div>
        <div className="absolute top-1/4 right-10 w-24 h-24 border border-portfolio-highlight/30 rounded-full"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="section-title">04. What's Next?</p>
          <h2 className="heading-md text-white">Get In Touch</h2>
          
          <p className="text-white/80 mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll do my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <a href="mailto:hello@example.com" className="btn-primary bg-transparent inline-block">
              Say Hello
            </a>
            
            <div className="pt-8 flex justify-center gap-8 text-white">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-highlight transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-highlight transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:hello@example.com" className="hover:text-portfolio-highlight transition-colors">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
              <a href="#resume" className="hover:text-portfolio-highlight transition-colors">
                <FileText size={24} />
                <span className="sr-only">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
