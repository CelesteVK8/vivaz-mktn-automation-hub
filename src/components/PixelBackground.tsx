
import { useEffect, useRef } from 'react';

interface PixelBackgroundProps {
  count?: number;
  className?: string;
}

const PixelBackground: React.FC<PixelBackgroundProps> = ({ count = 40, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Create pixels
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      element.className = 'pixel';
      
      // Random positions and sizes
      const size = Math.random() * 4 + 2; // Slightly larger pixels
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.opacity = `${Math.random() * 0.5 + 0.2}`;
      
      // Add random purple shade
      const purpleShade = Math.floor(Math.random() * 40) + 60; // 60-100% purple brightness
      element.style.backgroundColor = `rgba(110, 12, 158, 0.${purpleShade})`;
      
      container.appendChild(element);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [count]);
  
  return (
    <div ref={containerRef} className={`pixels ${className}`}>
      {/* Pixels will be created dynamically */}
    </div>
  );
};

export default PixelBackground;
