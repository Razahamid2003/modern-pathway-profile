
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";

const Index = () => {
  return (
    <div className="bg-white min-h-screen relative">
      {/* Dynamic animated background */}
      <DynamicBackground />
      
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
