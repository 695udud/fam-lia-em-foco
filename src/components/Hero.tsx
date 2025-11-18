import { Button } from "@/components/ui/button";
import { Heart, Scale } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="w-6 h-6 text-secondary" />
              <span className="text-sm font-medium text-secondary tracking-wider uppercase">
                OAB/SC 073346
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Proteção, acolhimento e orientação jurídica para sua família
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Atuação sensível, ética e especializada em Direito de Família. 
              Ajudo você a encontrar soluções justas com empatia e profissionalismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft rounded-full px-8"
                onClick={scrollToContact}
              >
                <Heart className="w-5 h-5 mr-2" />
                Agende uma Consulta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full px-8"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça meu trabalho
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img 
                src={heroImage} 
                alt="Advogada Maria Daureni Santos"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
