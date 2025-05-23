
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
      "flex flex-col md:flex-row items-start gap-4 p-6 bg-vivaz-purple-dark/50 rounded-xl border border-vivaz-metallic/10 hover:border-vivaz-metallic/30 transition-all duration-300",
      className
    )}>
      <div className="text-vivaz-neon shrink-0">
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
