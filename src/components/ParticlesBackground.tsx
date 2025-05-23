
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

interface ParticlesBackgroundProps {
  count?: number;
  className?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ count = 20, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Create particles
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      element.className = 'particle';
      
      // Random positions and sizes
      const size = Math.random() * 3 + 1;
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.opacity = `${Math.random() * 0.5 + 0.2}`;
      
      container.appendChild(element);
      
      particlesRef.current.push({
        x, y, size, speedX, speedY, element
      });
    }
    
    // Animation loop
    let animationId: number;
    
    const animate = () => {
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Check boundaries
        if (particle.x < 0) particle.x = containerWidth;
        if (particle.x > containerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = containerHeight;
        if (particle.y > containerHeight) particle.y = 0;
        
        // Update DOM element position
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      particlesRef.current.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      particlesRef.current = [];
    };
  }, [count]);
  
  return (
    <div ref={containerRef} className={`particles ${className}`}>
      {/* Particles will be created dynamically */}
    </div>
  );
};

export default ParticlesBackground;
