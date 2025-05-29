
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-white shadow-md" 
          : "py-6 bg-white"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="text-portfolio-highlight font-mono text-xl">RH</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-portfolio-slate hover:text-portfolio-highlight transition-colors"
                >
                  <span className="text-portfolio-highlight">{`0${i + 1}.`}</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <button 
            onClick={handleResumeDownload}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-highlight" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-24">
          <nav className="container-custom">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-mono text-lg text-portfolio-slate hover:text-portfolio-highlight transition-colors"
                    onClick={toggleMenu}
                  >
                    <span className="text-portfolio-highlight">{`0${i + 1}.`}</span> {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-6">
                <button 
                  onClick={() => {
                    handleResumeDownload();
                    toggleMenu();
                  }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Download size={16} />
                  Resume
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
