
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

interface Job {
  company: string;
  title: string;
  period: string;
  description: string[];
  url?: string;
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      company: "Tech Corp",
      title: "Senior Frontend Engineer",
      period: "January 2022 - Present",
      url: "https://example.com",
      description: [
        "Led the development of a new customer dashboard using React, increasing user engagement by 40%",
        "Architected and implemented a component library used across multiple product teams",
        "Mentored junior developers through code reviews and pair programming sessions",
        "Collaborated with designers to improve UI/UX and implement design system",
      ],
    },
    {
      company: "StartupX",
      title: "Frontend Developer",
      period: "March 2020 - December 2021",
      url: "https://example.com",
      description: [
        "Developed and maintained multiple React applications with TypeScript",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Reduced bundle size by 35% through code splitting and lazy loading",
        "Participated in agile development process with two-week sprint cycles",
      ],
    },
    {
      company: "Digital Agency",
      title: "Web Developer",
      period: "June 2018 - February 2020",
      url: "https://example.com",
      description: [
        "Created interactive websites for various clients using JavaScript and CSS frameworks",
        "Optimized websites for maximum speed and scalability",
        "Collaborated with creative team to implement visual elements that enhanced user engagement",
        "Ensured websites were responsive and accessible across all devices",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-portfolio-navy">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="section-title inline-block">02.</h2>
          <h2 className="heading-md inline-block m-0 text-portfolio-white">Where I've Worked</h2>
          <div className="h-px bg-portfolio-white/30 flex-grow"></div>
        </div>

        <Tabs defaultValue={jobs[0].company} className="max-w-3xl">
          <TabsList className="bg-transparent border-l border-portfolio-white/30 h-auto flex-col space-x-0 space-y-0 w-full sm:w-auto">
            {jobs.map((job) => (
              <TabsTrigger
                key={job.company}
                value={job.company}
                className="font-mono text-sm rounded-none border-l-2 border-transparent data-[state=active]:border-portfolio-highlight data-[state=active]:bg-portfolio-navy/90 data-[state=active]:text-portfolio-highlight h-12 justify-start px-5 text-white"
              >
                {job.company}
              </TabsTrigger>
            ))}
          </TabsList>
          {jobs.map((job) => (
            <TabsContent key={job.company} value={job.company} className="mt-8 px-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                {job.title} 
                {job.url && (
                  <a 
                    href={job.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center ml-2 text-portfolio-highlight hover:text-portfolio-highlight/80"
                  >
                    <span className="sr-only">{job.company} website</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                <span className="text-portfolio-highlight"> @ {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-portfolio-white/80 mb-4">{job.period}</p>
              <ul className="space-y-3">
                {job.description.map((item, i) => (
                  <li key={i} className="flex gap-2 text-portfolio-white/90">
                    <span className="text-portfolio-highlight mt-1.5 shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
