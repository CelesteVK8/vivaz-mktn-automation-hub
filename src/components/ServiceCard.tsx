
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, className }) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-br from-vivaz-purple/90 to-vivaz-purple-dark border border-vivaz-metallic/20 rounded-xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-neon overflow-hidden relative group",
        className
      )}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-vivaz-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon with glow */}
      <div className="mb-4 relative">
        <div className="absolute -top-2 -left-2 w-12 h-12 bg-vivaz-neon/10 rounded-full blur-xl group-hover:bg-vivaz-neon/20 transition-all duration-300"></div>
        <div className="bg-vivaz-purple-dark p-3 inline-block rounded-lg border border-vivaz-metallic/20 relative">
          <Icon className="h-6 w-6 text-vivaz-neon" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-vivaz-metallic">{description}</p>
    </div>
  );
};

export default ServiceCard;
