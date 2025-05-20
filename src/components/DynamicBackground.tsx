
import React, { useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  opacity: number;
}

const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2; // Make it taller to cover the entire page
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Create circles
    const circleCount = 12; // Increase number of circles
    const circles: Circle[] = [];
    
    const colors = ["#0A192F", "#D4AF37", "#112240"];
    
    for (let i = 0; i < circleCount; i++) {
      const radius = Math.random() * 150 + 80; // Make circles larger
      circles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 2, // Distribute across the full height
        radius,
        dx: (Math.random() - 0.5) * 0.3, // Slightly faster movement
        dy: (Math.random() - 0.5) * 0.3,
        color: colors[i % colors.length],
        opacity: Math.random() * 0.12 + 0.05, // Increase opacity
      });
    }
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      circles.forEach(circle => {
        // Move circle
        circle.x += circle.dx;
        circle.y += circle.dy;
        
        // Bounce off edges
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx;
        }
        
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.dy = -circle.dy;
        }
        
        // Draw circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${circle.color}${Math.floor(circle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        ctx.closePath();
      });
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ filter: "blur(40px)" }} // Slightly less blur to make circles more visible
    />
  );
};

export default DynamicBackground;
