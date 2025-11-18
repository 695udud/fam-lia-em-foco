import { Scale, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Scale className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Maria Daureni Santos</h3>
                <p className="text-sm text-background/70">OAB/SC 073346</p>
              </div>
            </div>
            <p className="text-sm text-background/70">
              Advocacia especializada em Direito de Família com atuação ética, empática e profissional.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Divórcio</li>
              <li>Guarda e Convivência</li>
              <li>Pensão Alimentícia</li>
              <li>União Estável</li>
              <li>Mediação Familiar</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (48) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@mariadaureni.adv.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Tijucas, SC
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/70">
          <p>© {currentYear} Maria Daureni Santos - Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
