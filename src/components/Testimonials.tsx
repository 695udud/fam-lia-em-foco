import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina M.",
    text: "A Dra. Maria me acolheu em um dos momentos mais difíceis da minha vida. Sua sensibilidade e profissionalismo foram fundamentais para resolver meu processo de divórcio de forma respeitosa.",
    rating: 5,
  },
  {
    name: "Roberto S.",
    text: "Excelente profissional! Conseguimos chegar a um acordo de guarda compartilhada que beneficiou principalmente minha filha. Muito grato pela orientação clara e humanizada.",
    rating: 5,
  },
  {
    name: "Juliana P.",
    text: "Sempre tive receio de processos jurídicos, mas a Dra. Maria explicou cada etapa com muita paciência e transparência. Me senti segura e bem representada durante todo o processo.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            O que dizem meus clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos de quem confiou em meu trabalho para resolver questões familiares
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 animate-slide-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-lg font-semibold text-secondary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Cliente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
