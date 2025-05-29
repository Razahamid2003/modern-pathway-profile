
import React from "react";
import { Github, Linkedin, Mail, FileText, Phone, MapPin, Download } from "lucide-react";

const Contact: React.FC = () => {
  const handleResumeDownload = () => {
    // Create a downloadable PDF content
    const resumeContent = `
RAZA HAMID
AI/ML Engineer & Computer Science Student

Contact Information:
Email: raza.hamid2003@gmail.com
Phone: +92-313-8556157
Location: Islamabad, Pakistan
GitHub: https://github.com/Razahamid2003
LinkedIn: https://linkedin.com/in/raza-hamid

Education:
BS Computer Sciences (Final Year)
LUMS - Lahore University of Management Sciences
Expected Graduation: 2025

Experience:
AI Intern - LMKR (June 2024 - August 2024)
• Architected domain-specific LLM pipelines
• Built scalable MLOps workflows
• Developed AI model deployment solutions

Technical Skills:
Programming Languages: Python (expert), C++ (expert), C# (intermediate), SQL (intermediate), Haskell (intermediate), TypeScript (intermediate), JavaScript (intermediate)
AI/ML Libraries: TensorFlow, PyTorch, scikit-learn, Hugging Face, Keras, NLTK, Gensim, ONNX
Data Analysis: Pandas, NumPy, Matplotlib, Seaborn, OpenCV
Platforms: Docker, Kubernetes, Kaggle, Git, MLFlow, Streamlit

Featured Projects:
1. ColorGrid Multiplayer Game (MERN Stack)
2. Automated Daily News Sentiment Analysis Pipeline
3. N-Gram Language Model with GPT Principles
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Raza_Hamid_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
          
          <p className="text-white/80 mb-8">
            I'm currently looking for new opportunities in AI/ML and software engineering. 
            Whether you have a question about my projects or want to discuss potential collaborations,
            I'll do my best to get back to you!
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Phone size={16} />
              <a href="tel:+923138556157" className="hover:text-portfolio-highlight transition-colors">
                +92-313-8556157
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Mail size={16} />
              <a href="mailto:raza.hamid2003@gmail.com" className="hover:text-portfolio-highlight transition-colors">
                raza.hamid2003@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-white/80">
              <MapPin size={16} />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <a href="mailto:raza.hamid2003@gmail.com" className="btn-primary bg-transparent inline-block">
              Say Hello
            </a>
            
            <div className="pt-8 flex justify-center gap-8 text-white">
              <a href="https://github.com/Razahamid2003" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-highlight transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/raza-hamid" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-highlight transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:raza.hamid2003@gmail.com" className="hover:text-portfolio-highlight transition-colors">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
              <button onClick={handleResumeDownload} className="hover:text-portfolio-highlight transition-colors">
                <FileText size={24} />
                <span className="sr-only">Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
