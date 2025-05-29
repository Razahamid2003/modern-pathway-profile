
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
          <a 
            href="mailto:raza.hamid2003@gmail.com" 
            className="btn-primary"
          >
            Resume
          </a>
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
                <a 
                  href="mailto:raza.hamid2003@gmail.com" 
                  className="btn-primary"
                  onClick={toggleMenu}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
