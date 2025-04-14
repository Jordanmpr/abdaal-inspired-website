
import Layout from "../components/layout/Layout";
import SectionHeading from "../components/ui/section-heading";
import NewsletterForm from "../components/ui/newsletter-form";
import { Check } from "lucide-react";

const benefits = [
  "Consejos prácticos de productividad que puedes aplicar inmediatamente",
  "Reseñas de libros y recursos que te ahorrarán tiempo y dinero",
  "Historias y casos de estudio inspiradores",
  "Contenido exclusivo que no publico en ningún otro lugar",
  "Acceso anticipado a nuevos productos y cursos",
  "Ofertas y descuentos especiales solo para suscriptores"
];

const Newsletter = () => {
  return (
    <Layout>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Únete a mi newsletter"
              subtitle="Recibe contenido exclusivo, consejos prácticos y recursos gratuitos para mejorar tu productividad y creatividad."
              align="center"
              highlight={true}
            />
            
            <div className="mt-12 p-8 bg-secondary/50 rounded-2xl border border-border/40">
              <NewsletterForm 
                title="Suscríbete ahora" 
                description="Prometido: solo contenido valioso, nada de spam. Puedes darte de baja en cualquier momento."
              />
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">¿Qué obtendrás al suscribirte?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center">
                    <Check size={14} />
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 max-w-lg mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Únete a más de 10,000 lectores</h3>
            <p className="text-muted-foreground">
              Cada semana, miles de profesionales, emprendedores y creativos reciben mis mejores consejos directamente en su bandeja de entrada. ¿Te unes?
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
