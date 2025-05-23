
import { cn } from "@/lib/utils";
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company?: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, position, company, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-vivaz-dark p-6 md:p-8 rounded-xl shadow-card border border-vivaz-purple/30 relative",
      className
    )}>
      <Quote className="h-8 w-8 text-vivaz-purple opacity-50 absolute top-4 right-6" />
      
      {/* Pixel decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 bg-vivaz-purple/80"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-vivaz-purple/80"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-vivaz-purple/60"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-vivaz-purple/60"></div>
      
      <div className="mb-6">
        <p className="text-vivaz-metallic font-inter text-lg leading-relaxed">{quote}</p>
      </div>
      <div className="border-t border-vivaz-purple/20 pt-4">
        <p className="text-white font-bold">{author}</p>
        <p className="text-vivaz-metallic text-sm">
          {position}{company ? `, ${company}` : ''}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
