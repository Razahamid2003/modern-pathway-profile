
import React from "react";
import { Badge } from "@/components/ui/badge";

const About: React.FC = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "Next.js",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="py-24 bg-portfolio-navy">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="section-title inline-block">01.</h2>
          <h2 className="heading-md inline-block m-0">About Me</h2>
          <div className="h-px bg-portfolio-lightNavy flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-portfolio-slate">
            <p className="mb-4">
              Hello! I'm John, a software engineer passionate about creating digital experiences that are both beautiful and functional.
              My journey in technology began when I was designing my first website, and I've been hooked ever since.
            </p>
            
            <p className="mb-4">
              I've had the privilege of working at a startup, a large corporation, and a digital agency, which has given me a 
              well-rounded perspective on different development environments and methodologies.
            </p>
            
            <p className="mb-8">
              Beyond coding, I enjoy contributing to open-source projects and mentoring aspiring developers. I believe in creating 
              technology that makes a positive impact and solves real problems.
            </p>
            
            <div>
              <h3 className="text-portfolio-lightSlate font-medium mb-3">
                Here are a few technologies I've been working with recently:
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} className="bg-portfolio-lightNavy text-portfolio-lightSlate hover:bg-portfolio-lightNavy/70">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square rounded overflow-hidden group">
              <div className="absolute inset-0 bg-portfolio-highlight/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute inset-0 border-2 border-portfolio-highlight rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="w-full h-full bg-portfolio-slate/20 overflow-hidden rounded">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-portfolio-lightNavy flex items-center justify-center text-portfolio-highlight">
                  <span className="font-mono">Your Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
