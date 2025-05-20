
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-portfolio-navy">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-title">04. What's Next?</p>
          <h2 className="heading-md">Get In Touch</h2>
          
          <p className="text-portfolio-slate mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll do my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <a href="mailto:hello@example.com" className="btn-primary inline-block">
              Say Hello
            </a>
            
            <div className="pt-8 flex justify-center gap-8 text-portfolio-lightSlate">
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
