
import SectionHeading from "../ui/section-heading";

const testimonials = [
  {
    quote: "Los consejos de productividad han transformado completamente mi forma de trabajar y organizarme. Ahora consigo mucho más en menos tiempo.",
    author: "María García",
    role: "Emprendedora"
  },
  {
    quote: "El curso sobre YouTube me dio exactamente lo que necesitaba para lanzar mi canal. En solo 6 meses he conseguido mis primeros 10.000 suscriptores.",
    author: "Carlos Rodríguez",
    role: "Creador de contenido"
  },
  {
    quote: "Las plantillas de productividad son una maravilla. Simples pero increíblemente efectivas. Las recomendaría sin dudar.",
    author: "Laura Martínez",
    role: "Gerente de proyectos"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Lo que dicen mis estudiantes"
          subtitle="Miles de personas han mejorado su productividad y alcanzado sus metas con mis recursos y cursos."
          align="center"
          highlight={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-secondary/30 rounded-2xl p-8 border border-border/40"
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 text-accent-blue">
                <path d="M14.4 24H8.4C8.4 17.4 11.4 15 18 15V18C14.4 18 14.4 20.4 14.4 24ZM28.8 24H22.8C22.8 17.4 25.8 15 32.4 15V18C28.8 18 28.8 20.4 28.8 24Z" fill="currentColor"/>
              </svg>
              
              <p className="text-lg mb-8">{testimonial.quote}</p>
              
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
