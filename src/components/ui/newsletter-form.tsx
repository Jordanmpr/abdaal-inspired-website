
import { useState } from "react";
import { Check } from "lucide-react";

interface NewsletterFormProps {
  title?: string;
  description?: string;
  dark?: boolean;
}

const NewsletterForm = ({ 
  title = "Suscríbete a mi newsletter", 
  description = "Recibe contenido exclusivo, consejos y recursos directamente en tu bandeja de entrada.",
  dark = false
}: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Aquí iría la lógica para enviar el email a un servicio de newsletter
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
    }
  };
  
  const bgClass = dark 
    ? "bg-foreground text-background" 
    : "bg-secondary/80";
  
  return (
    <div className={`rounded-2xl p-8 md:p-12 ${bgClass}`}>
      <div className="max-w-lg mx-auto">
        <h3 className={`text-3xl font-bold ${dark ? "text-background" : ""}`}>
          {title}
        </h3>
        
        <p className={`mt-4 ${dark ? "text-background/80" : "text-muted-foreground"}`}>
          {description}
        </p>
        
        {isSubmitted ? (
          <div className="mt-8 flex items-center gap-3 text-accent-green">
            <Check className="h-6 w-6" />
            <span className="font-medium">¡Gracias por suscribirte!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-grow rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Suscribirme
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
