
import React, { useEffect, useRef } from "react";

interface BackgroundCircle {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  velocityX: number;
  velocityY: number;
}

const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const circlesRef = useRef<BackgroundCircle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Initialize canvas size
    handleResize();
    
    // Create initial circles
    const initCircles = () => {
      const circles: BackgroundCircle[] = [];
      const colors = ['#D4AF37', '#0A192F', '#112240'];
      
      for (let i = 0; i < 15; i++) {
        circles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 80 + 40,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.08 + 0.02,
          velocityX: (Math.random() - 0.5) * 0.2,
          velocityY: (Math.random() - 0.5) * 0.2
        });
      }
      
      circlesRef.current = circles;
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw circles
      circlesRef.current.forEach(circle => {
        // Update position
        circle.x += circle.velocityX;
        circle.y += circle.velocityY;
        
        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) {
          circle.velocityX = -circle.velocityX;
        }
        
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) {
          circle.velocityY = -circle.velocityY;
        }
        
        // Draw circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${circle.color}${Math.round(circle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle mouse movement to add interactivity
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Find the closest circle and push it away
      circlesRef.current.forEach(circle => {
        const dx = mouseX - circle.x;
        const dy = mouseY - circle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) * 0.01;
          
          circle.velocityX -= Math.cos(angle) * force;
          circle.velocityY -= Math.sin(angle) * force;
        }
      });
    };

    // Set up event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize and start animation
    initCircles();
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default DynamicBackground;
