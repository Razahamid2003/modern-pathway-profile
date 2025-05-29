
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-portfolio-navy">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-portfolio-white text-sm font-mono">
            Designed & Built by Raza Hamid <span className="text-portfolio-highlight">©</span> {year}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
