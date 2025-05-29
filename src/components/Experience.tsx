
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

interface Job {
  company: string;
  title: string;
  period: string;
  description: string[];
  url?: string;
  location: string;
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      company: "LMKR",
      title: "AI Intern",
      period: "07/2024 - 09/2024",
      location: "Islamabad, Pakistan",
      description: [
        "Engineered cutting-edge AI models based on GPT architecture to develop advanced Large Language Models (LLMs) capable of generating high-quality textual content.",
        "Leveraged pre-trained models to fine-tune and create custom solutions for real-world text generation applications, optimizing for scalability and accuracy.",
        "Contributed to end-to-end model development, from conceptualization to deployment, enhancing AI-driven capabilities in text generation and natural language understanding."
      ],
    },
    {
      company: "NESCOM",
      title: "Cybersecurity Intern",
      period: "06/2024 - 07/2024",
      location: "Islamabad, Pakistan",
      description: [
        "Gained hands-on experience in Windows system file management using C#, mastering essential system-level programming techniques.",
        "Engineered a TCP server-client communication framework, enabling seamless data transfer between client devices and a central server.",
        "Developed and deployed an intuitive Windows Forms application that automates device scans for missing applications and reports results to a server, demonstrating expertise in both frontend and backend integration."
      ],
    },
    {
      company: "Renzym",
      title: "CS Intern",
      period: "05/2023 - 09/2023",
      location: "Islamabad, Pakistan",
      description: [
        "Gained hands-on experience in Object-Oriented Programming (OOP) with C++ under the mentorship of the Project Manager and company founder.",
        "Developed user-friendly, efficient, and optimized software solutions focusing on creating intuitive and error-proof interfaces."
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

        <Tabs defaultValue={jobs[0].company} className="max-w-4xl">
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
                <span className="text-portfolio-highlight"> @ {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-portfolio-white/80 mb-2">{job.period}</p>
              <p className="font-mono text-sm text-portfolio-highlight mb-4">{job.location}</p>
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
