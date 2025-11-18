import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5548999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-soft bg-secondary hover:bg-secondary/90 text-secondary-foreground p-0 animate-fade-in"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};

export default WhatsAppButton;
