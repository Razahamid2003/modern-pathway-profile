
import React from "react";
import { Badge } from "@/components/ui/badge";

const About: React.FC = () => {
  const programmingLanguages = [
    "Python (expert)",
    "C++ (expert)",
    "C# (intermediate)",
    "SQL (intermediate)",
    "Haskell (intermediate)",
    "TypeScript (intermediate)",
    "JavaScript (intermediate)"
  ];

  const aimlLibraries = [
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "Hugging Face",
    "Keras",
    "NLTK",
    "Gensim",
    "ONNX"
  ];

  const dataAnalysis = [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "OpenCV"
  ];

  const platforms = [
    "Docker",
    "Kubernetes",
    "Kaggle",
    "Git",
    "MLFlow",
    "Streamlit"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="section-title inline-block">01.</h2>
          <h2 className="heading-md inline-block m-0">About Me</h2>
          <div className="h-px bg-portfolio-lightNavy flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-portfolio-slate">
            <p className="mb-4">
              Hello! I'm Raza Hamid, a BS Computer Sciences Final Year Student and AI/ML Intern with a passion for 
              artificial intelligence and machine learning. Currently pursuing my degree at LUMS (Lahore University 
              of Management Sciences), I specialize in building scalable AI solutions and advanced ML models.
            </p>
            
            <p className="mb-4">
              I've had the privilege of working as an AI Intern at LMKR, where I architected domain-specific LLM pipelines 
              and built scalable MLOps workflows. My expertise spans from cutting-edge AI model development to 
              end-to-end model deployment, with a focus on GPT architecture and natural language understanding.
            </p>
            
            <p className="mb-8">
              Beyond my technical work, I'm passionate about contributing to the AI community and solving real-world 
              problems through innovative technology. I have experience in building multiplayer games, developing 
              predictive models, and creating automated data analysis pipelines.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-portfolio-black font-medium mb-3">Programming Languages:</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((skill) => (
                    <Badge key={skill} className="bg-white text-portfolio-slate border border-portfolio-highlight hover:bg-portfolio-highlight hover:text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-portfolio-black font-medium mb-3">AI/ML Libraries:</h3>
                <div className="flex flex-wrap gap-2">
                  {aimlLibraries.map((skill) => (
                    <Badge key={skill} className="bg-white text-portfolio-slate border border-portfolio-highlight hover:bg-portfolio-highlight hover:text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-portfolio-black font-medium mb-3">Data Manipulation & Analysis:</h3>
                <div className="flex flex-wrap gap-2">
                  {dataAnalysis.map((skill) => (
                    <Badge key={skill} className="bg-white text-portfolio-slate border border-portfolio-highlight hover:bg-portfolio-highlight hover:text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-portfolio-black font-medium mb-3">Platforms:</h3>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((skill) => (
                    <Badge key={skill} className="bg-white text-portfolio-slate border border-portfolio-highlight hover:bg-portfolio-highlight hover:text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square rounded overflow-hidden group">
              <div className="absolute inset-0 bg-portfolio-highlight/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute inset-0 border-2 border-portfolio-highlight rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="w-full h-full bg-white overflow-hidden rounded">
                <img 
                  src="/lovable-uploads/25ea077a-5adf-41dd-a31a-44ebe7808ebd.png" 
                  alt="Raza Hamid" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
