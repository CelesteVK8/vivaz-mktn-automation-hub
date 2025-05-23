
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
      "bg-gradient-to-br from-vivaz-purple to-vivaz-purple-dark p-6 md:p-8 rounded-xl shadow-card card-border relative",
      className
    )}>
      <Quote className="h-8 w-8 text-vivaz-neon/50 absolute top-4 right-6" />
      <div className="mb-6">
        <p className="text-vivaz-metallic font-inter text-lg leading-relaxed">{quote}</p>
      </div>
      <div className="border-t border-vivaz-metallic/20 pt-4">
        <p className="text-white font-bold">{author}</p>
        <p className="text-vivaz-metallic text-sm">
          {position}{company ? `, ${company}` : ''}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
