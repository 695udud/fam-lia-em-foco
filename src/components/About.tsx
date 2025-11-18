import { Award, BookOpen, Heart, Scale } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img 
                src={aboutBg} 
                alt="Escritório de advocacia"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
          </div>
          
          <div className="animate-slide-up">
            <div className="inline-block bg-primary/30 text-secondary px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Sobre a Advogada</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Maria Daureni Santos
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Advogada especializada em Direito de Família, com atuação pautada pela ética, 
              empatia e profissionalismo. Acredito que cada família é única e merece uma 
              abordagem personalizada e humanizada.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Minha missão é orientar famílias em momentos delicados, buscando soluções 
              justas e pacíficas através do diálogo, respeito e clareza. Cada caso é tratado 
              com atenção especial às particularidades e necessidades de todos os envolvidos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">OAB/SC 073346</h3>
                  <p className="text-muted-foreground">Regularmente inscrita na Ordem dos Advogados do Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Especialização em Direito de Família</h3>
                  <p className="text-muted-foreground">Formação contínua e atualizada nas melhores práticas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Atuação em Tijucas/SC</h3>
                  <p className="text-muted-foreground">Atendimento presencial e online para sua comodidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
