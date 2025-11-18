import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Scale className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg text-foreground">Maria Daureni</h1>
              <p className="text-xs text-muted-foreground">Advocacia & Família</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
            >
              Agendar Consulta
            </Button>
          </nav>
          
          <Button 
            onClick={() => scrollToSection('contato')}
            className="md:hidden bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
            size="sm"
          >
            Contato
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
