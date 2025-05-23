
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-start gap-4 p-6 bg-vivaz-dark rounded-xl border border-vivaz-purple/30 hover:border-vivaz-purple/50 transition-all duration-300",
      className
    )}>
      <div className="text-vivaz-purple relative">
        {/* Pixel accent decoration */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-vivaz-purple/80"></div>
        <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-vivaz-purple/80"></div>
        {icon}
      </div>
      <div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-vivaz-metallic">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
