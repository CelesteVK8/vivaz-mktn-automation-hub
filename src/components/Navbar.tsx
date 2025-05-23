
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-vivaz-purple-dark/95 backdrop-blur-sm py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-white font-sora">
                Vivaz<span className="text-vivaz-neon glow-text">MKTN</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#o-que-fazemos" className="text-vivaz-metallic hover:text-white transition-colors">O Que Fazemos</a>
            <a href="#por-que" className="text-vivaz-metallic hover:text-white transition-colors">Por Que</a>
            <a href="#como-trabalhamos" className="text-vivaz-metallic hover:text-white transition-colors">Como Trabalhamos</a>
            <a href="#casos-sucesso" className="text-vivaz-metallic hover:text-white transition-colors">Casos de Sucesso</a>
            <Button 
              className="bg-gradient-to-r from-vivaz-purple-light to-vivaz-accent border border-vivaz-metallic/30
              text-white shadow-button hover:shadow-neon transition-all duration-300 btn-hover-effect"
            >
              Fale Conosco
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-vivaz-purple bg-opacity-95 backdrop-blur-md absolute w-full`}>
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          <a 
            href="#o-que-fazemos" 
            className="text-vivaz-metallic hover:text-white transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            O Que Fazemos
          </a>
          <a 
            href="#por-que" 
            className="text-vivaz-metallic hover:text-white transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Por Que
          </a>
          <a 
            href="#como-trabalhamos" 
            className="text-vivaz-metallic hover:text-white transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Como Trabalhamos
          </a>
          <a 
            href="#casos-sucesso" 
            className="text-vivaz-metallic hover:text-white transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Casos de Sucesso
          </a>
          <Button 
            className="bg-gradient-to-r from-vivaz-purple-light to-vivaz-accent text-white shadow-button 
            hover:shadow-neon transition-all duration-300 mt-2 w-full"
          >
            Fale Conosco
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
