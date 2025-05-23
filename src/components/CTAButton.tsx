
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  href?: string;
  onClick?: () => void;
}

const CTAButton = ({ 
  children, 
  className, 
  variant = 'default',
  href,
  onClick
}: CTAButtonProps) => {
  const baseClasses = "text-white shadow-button font-medium text-lg py-6 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 btn-hover-effect";
  
  let variantClasses = "";
  
  switch (variant) {
    case 'default':
      variantClasses = "bg-gradient-to-r from-vivaz-purple-light to-vivaz-accent border border-vivaz-metallic/30 hover:shadow-neon animate-pulse-glow";
      break;
    case 'outline':
      variantClasses = "bg-transparent border-2 border-vivaz-metallic/50 hover:border-vivaz-neon hover:shadow-neon";
      break;
    case 'ghost':
      variantClasses = "bg-vivaz-purple/50 backdrop-blur-sm border border-vivaz-metallic/20 hover:bg-vivaz-purple-light/60";
      break;
  }
  
  const buttonContent = (
    <Button 
      className={cn(baseClasses, variantClasses, className)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
  
  if (href) {
    return (
      <a href={href}>
        {buttonContent}
      </a>
    );
  }
  
  return buttonContent;
};

export default CTAButton;
