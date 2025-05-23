
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import FeatureCard from '@/components/FeatureCard';
import ScrollReveal from '@/components/ScrollReveal';
import CTAButton from '@/components/CTAButton';
import PixelBackground from '@/components/PixelBackground';
import { Button } from '@/components/ui/button';

import {
  Clock,
  DollarSign,
  BarChart3,
  Rocket,
  MessagesSquare,
  Settings,
  Zap,
  Store,
  Stethoscope,
  Plane,
  MessageCircle,
  MailCheck,
  Database,
  Share2,
  Users,
  LineChart
} from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "Vivaz MKTN - Automação e Marketing Inteligente";
    
    // Scroll reveal functionality
    const handleScroll = () => {
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
          section.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-vivaz-dark to-black text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24">
        <PixelBackground count={60} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-sora mb-6 leading-tight">
              <span className="text-vivaz-purple">Transforme sua Empresa</span> com Automação e Marketing Inteligente 🚀
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-vivaz-metallic font-inter">
              Você está perdendo vendas, tempo e dinheiro com tarefas manuais e estratégias que não funcionam?
              Enquanto você tenta fazer tudo sozinho, seus concorrentes estão usando automação e marketing inteligente para dominar o mercado.
            </p>
            
            <p className="text-2xl md:text-3xl mb-10 font-sora">
              A <span className="font-bold">Vivaz<span className="text-vivaz-purple">MKTN</span></span> vai mudar isso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <CTAButton href="#fale-conosco">
                Fale com um Especialista Agora
              </CTAButton>
              
              <CTAButton variant="outline" href="#casos-sucesso">
                Veja Como Ajudamos Outras Empresas
              </CTAButton>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-vivaz-dark to-transparent"></div>
        <div className="hidden md:block absolute -bottom-10 right-10 w-64 h-64 rounded-full bg-vivaz-purple/10 blur-3xl"></div>
        
        {/* Pixel decorations */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-vivaz-purple"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-vivaz-purple"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-vivaz-purple/80"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-vivaz-purple/80"></div>
      </section>
      
      {/* O Que Fazemos Section */}
      <section id="o-que-fazemos" className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-vivaz-purple uppercase tracking-wider font-medium mb-2">💡 O Que Fazemos</span>
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
                Automação + Estratégia + <span className="metallic-text">Resultados de Verdade</span>
              </h2>
              <p className="text-vivaz-metallic max-w-2xl mx-auto text-lg">
                Combinamos dados, estratégia e tecnologia para entregar ROI real para sua empresa.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal>
              <ServiceCard 
                icon={Database}
                title="Integrações Automatizadas" 
                description="CRM, e-mail, redes sociais, ERPs integrados em um único sistema eficiente."
              />
            </ScrollReveal>
            
            <ScrollReveal>
              <ServiceCard 
                icon={Share2}
                title="Funis Personalizados" 
                description="Funis de vendas com alta conversão adaptados ao seu negócio."
              />
            </ScrollReveal>
            
            <ScrollReveal>
              <ServiceCard 
                icon={Users}
                title="Segmentação de Leads" 
                description="Segmentação com base em comportamento real do seu público-alvo."
              />
            </ScrollReveal>
            
            <ScrollReveal>
              <ServiceCard 
                icon={LineChart}
                title="Campanhas Inteligentes" 
                description="Estratégias que vendem automaticamente, mesmo enquanto você dorme."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Por Que Isso Importa */}
      <section id="por-que" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-vivaz-purple/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-vivaz-purple uppercase tracking-wider font-medium mb-2">🔥 Por Que Isso Importa?</span>
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">Benefícios que <span className="metallic-text">Transformam seu Negócio</span></h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <FeatureCard 
                icon={<Clock className="h-8 w-8" />}
                title="Ganhe tempo" 
                description="Chega de tarefas manuais que tomam seu dia. Automatize processos e foque no crescimento."
              />
            </ScrollReveal>
            
            <ScrollReveal>
              <FeatureCard 
                icon={<DollarSign className="h-8 w-8" />}
                title="Venda mais" 
                description="Estratégias testadas para atrair, engajar e converter seu público-alvo em clientes."
              />
            </ScrollReveal>
            
            <ScrollReveal>
              <FeatureCard 
                icon={<BarChart3 className="h-8 w-8" />}
                title="Tenha controle" 
                description="Tudo é mensurável — acompanhe métricas em tempo real e tome decisões baseadas em dados."
              />
            </ScrollReveal>
            
            <ScrollReveal>
              <FeatureCard 
                icon={<Rocket className="h-8 w-8" />}
                title="Supere sua concorrência" 
                description="Marketing de performance e inovação constante para deixar seus concorrentes para trás."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Como Trabalhamos */}
      <section id="como-trabalhamos" className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-vivaz-purple uppercase tracking-wider font-medium mb-2">🛠️ Como Trabalhamos</span>
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
                Nossa <span className="metallic-text">Metodologia</span> de Sucesso
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollReveal>
              <div className="text-center p-6 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-vivaz-purple to-transparent opacity-30 md:hidden"></div>
                <div className="w-16 h-16 mx-auto bg-vivaz-dark rounded-full flex items-center justify-center border border-vivaz-purple/30 mb-4 relative z-10 pixel-accent">
                  <MessagesSquare className="h-7 w-7 text-vivaz-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diagnóstico profundo</h3>
                <p className="text-vivaz-metallic">Entendemos seu negócio, mercado e objetivos antes de começar.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="text-center p-6 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-vivaz-purple to-transparent opacity-30 md:hidden"></div>
                <div className="w-16 h-16 mx-auto bg-vivaz-dark rounded-full flex items-center justify-center border border-vivaz-purple/30 mb-4 relative z-10 pixel-accent">
                  <Settings className="h-7 w-7 text-vivaz-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Plano sob medida</h3>
                <p className="text-vivaz-metallic">Criamos a melhor estratégia personalizada para sua realidade.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="text-center p-6 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-vivaz-purple to-transparent opacity-30 md:hidden"></div>
                <div className="w-16 h-16 mx-auto bg-vivaz-dark rounded-full flex items-center justify-center border border-vivaz-purple/30 mb-4 relative z-10 pixel-accent">
                  <Zap className="h-7 w-7 text-vivaz-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Execução rápida</h3>
                <p className="text-vivaz-metallic">Implementamos com agilidade e excelência para resultados rápidos.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="text-center p-6 relative">
                <div className="w-16 h-16 mx-auto bg-vivaz-dark rounded-full flex items-center justify-center border border-vivaz-purple/30 mb-4 relative z-10 pixel-accent">
                  <Rocket className="h-7 w-7 text-vivaz-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Escala contínua</h3>
                <p className="text-vivaz-metallic">Otimização constante para crescer seus resultados de forma sustentável.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Hidden connecting line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-vivaz-purple to-transparent opacity-30"></div>
        
        {/* Pixel decorations */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-vivaz-purple/80"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-vivaz-purple/80"></div>
      </section>
      
      {/* Casos de Sucesso */}
      <section id="casos-sucesso" className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-vivaz-purple uppercase tracking-wider font-medium mb-2">🧩 Casos de Sucesso</span>
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
                Histórias de <span className="metallic-text">Transformação</span>
              </h2>
              <p className="text-vivaz-metallic max-w-2xl mx-auto">
                Conheça alguns dos nossos projetos de maior impacto
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <ScrollReveal>
              <div className="bg-vivaz-dark rounded-xl overflow-hidden border border-vivaz-purple/20 transition-all duration-300 hover:border-vivaz-purple/50 group">
                {/* Pixel decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-vivaz-purple/80"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-vivaz-purple/60"></div>
                
                <div className="p-6 bg-gradient-to-b from-vivaz-dark/80 to-black/20">
                  <Store className="h-8 w-8 text-vivaz-purple mb-4" />
                  <h3 className="text-xl font-bold mb-2">Loja de Roupas Urban Style</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-vivaz-metallic mb-6">
                    "Reduzimos em 40% o tempo de atendimento e triplicamos as vendas online com funis automatizados criados pela Vivaz MKTN."
                  </p>
                  <p className="text-vivaz-purple font-medium">– Larissa F., CEO</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="bg-vivaz-dark rounded-xl overflow-hidden border border-vivaz-purple/20 transition-all duration-300 hover:border-vivaz-purple/50 group">
                {/* Pixel decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-vivaz-purple/80"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-vivaz-purple/60"></div>
                
                <div className="p-6 bg-gradient-to-b from-vivaz-dark/80 to-black/20">
                  <Stethoscope className="h-8 w-8 text-vivaz-purple mb-4" />
                  <h3 className="text-xl font-bold mb-2">Clínica OdontoMax</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-vivaz-metallic mb-6">
                    "Em 3 semanas, nossa agenda lotou com campanhas inteligentes e automação de WhatsApp integrada ao CRM."
                  </p>
                  <p className="text-vivaz-purple font-medium">– Dr. Rafael M., Diretor</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="bg-vivaz-dark rounded-xl overflow-hidden border border-vivaz-purple/20 transition-all duration-300 hover:border-vivaz-purple/50 group">
                {/* Pixel decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-vivaz-purple/80"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-vivaz-purple/60"></div>
                
                <div className="p-6 bg-gradient-to-b from-vivaz-dark/80 to-black/20">
                  <Plane className="h-8 w-8 text-vivaz-purple mb-4" />
                  <h3 className="text-xl font-bold mb-2">Agência de Viagens GlobalFly</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-vivaz-metallic mb-6">
                    "O marketing automatizado nos deu previsibilidade de vendas. Nunca mais deixamos leads esfriarem."
                  </p>
                  <p className="text-vivaz-purple font-medium">– Thiago S., Co-fundador</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="text-center">
            <Button className="bg-transparent hover:bg-vivaz-dark border border-vivaz-purple/30 text-vivaz-metallic hover:text-white transition-all">
              Ver todos os projetos →
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-vivaz-purple uppercase tracking-wider font-medium mb-2">⭐ O Que Nossos Clientes Dizem</span>
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
                Experiências <span className="metallic-text">Reais</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <TestimonialCard
                quote="A Vivaz transformou completamente o jeito que operamos. Hoje temos tempo, resultado e previsibilidade."
                author="Marina Costa"
                position="CEO da Bluemarket"
              />
            </ScrollReveal>
            
            <ScrollReveal>
              <TestimonialCard
                quote="Achei que marketing digital era tudo igual... até conhecer a Vivaz. Eles entregam resultado de verdade."
                author="Jorge Oliveira"
                position="Empresário"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="fale-conosco" className="py-20 bg-black relative overflow-hidden">
        <PixelBackground count={30} />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-vivaz-purple uppercase tracking-wider font-medium mb-2">⚡ Promoção por Tempo Limitado</span>
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
                Diagnóstico gratuito + 1 automação personalizada
              </h2>
              <p className="text-xl text-vivaz-metallic mb-8">
                Para os 10 primeiros contatos da semana!
                <br />Vagas limitadas – agende sua análise agora mesmo!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <CTAButton>
                  Solicitar Diagnóstico Gratuito
                </CTAButton>
                
                <CTAButton variant="outline">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contato pelo WhatsApp
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-vivaz-purple/5 rounded-full blur-3xl"></div>
        
        {/* Pixel decorations */}
        <div className="absolute bottom-10 left-10 w-3 h-3 bg-vivaz-purple/80"></div>
        <div className="absolute top-10 right-10 w-3 h-3 bg-vivaz-purple/80"></div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-vivaz-purple/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold text-white font-sora">
                Vivaz<span className="text-vivaz-purple">MKTN</span>
              </span>
              <p className="text-vivaz-metallic mt-2">Automação e Marketing Inteligente</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <a href="#" className="text-vivaz-metallic hover:text-white transition-colors flex items-center">
                <MailCheck className="h-4 w-4 mr-2" />
                contato@vivazmktn.com.br
              </a>
              <a href="#" className="text-vivaz-metallic hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-vivaz-metallic hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-vivaz-purple/10 text-center text-vivaz-metallic text-sm">
            <p>&copy; {new Date().getFullYear()} Vivaz MKTN. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* Fixed Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-vivaz-purple/20 p-4 z-50">
        <Button className="w-full bg-vivaz-purple border border-vivaz-purple/30 text-white shadow-button">
          Fale com um Especialista
        </Button>
      </div>
    </div>
  );
};

export default Index;
