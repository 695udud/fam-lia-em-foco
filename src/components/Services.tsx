import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, FileText, Handshake, Home, Scale } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Divórcio",
    description: "Orientação completa em processos de divórcio consensual e litigioso, buscando sempre a melhor solução para todas as partes envolvidas.",
  },
  {
    icon: Users,
    title: "Guarda e Convivência",
    description: "Regulamentação de guarda compartilhada, unilateral e convivência familiar, priorizando o bem-estar das crianças e adolescentes.",
  },
  {
    icon: FileText,
    title: "Pensão Alimentícia",
    description: "Estabelecimento, revisão e exoneração de pensão alimentícia, garantindo os direitos de todos os envolvidos com justiça.",
  },
  {
    icon: Handshake,
    title: "Acordos de Convivência",
    description: "Elaboração de acordos equilibrados e personalizados para regulamentar a convivência familiar de forma harmoniosa.",
  },
  {
    icon: Home,
    title: "União Estável",
    description: "Reconhecimento, dissolução e partilha de bens em união estável, com segurança jurídica e respeito às particularidades de cada família.",
  },
  {
    icon: Scale,
    title: "Mediação Familiar",
    description: "Facilitação de diálogo e construção de acordos consensuais, promovendo soluções pacíficas e duradouras para conflitos familiares.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Como posso ajudar você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atuação especializada em Direito de Família com foco em soluções humanizadas e eficazes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-slide-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-serif text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
