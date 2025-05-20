
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-white min-h-screen relative">
      {/* Decorative elements inspired by marble & gold veins */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-0 right-0 h-96 w-96 bg-portfolio-highlight/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-portfolio-navy/10 rounded-tr-full"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
