
import SectionHeading from "../ui/section-heading";
import { BookOpen, ShoppingBag, Youtube, MousePointerClick } from "lucide-react";
import ButtonLink from "../ui/button-link";

const features = [
  {
    icon: <BookOpen className="w-10 h-10 text-accent-blue" />,
    title: "Blog",
    description: "Artículos sobre productividad, creatividad y desarrollo personal para ayudarte a mejorar día a día.",
    link: "/blog",
    linkText: "Leer artículos",
    bgColor: "bg-accent-blue/10"
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-accent-green" />,
    title: "Store",
    description: "Recursos digitales, plantillas y guías diseñadas para impulsarte hacia tus objetivos.",
    link: "/store",
    linkText: "Ver productos",
    bgColor: "bg-accent-green/10"
  },
  {
    icon: <Youtube className="w-10 h-10 text-accent-peach" />,
    title: "Grow a YouTube Channel",
    description: "Aprende a crear un canal de YouTube exitoso basado en mi experiencia personal.",
    link: "/courses",
    linkText: "Ver cursos",
    bgColor: "bg-accent-peach/10"
  },
  {
    icon: <MousePointerClick className="w-10 h-10 text-accent-yellow" />,
    title: "Be More Productive",
    description: "Aprende cómo administrar tu tiempo y alcanzar tus metas mientras disfrutas del proceso.",
    link: "/courses",
    linkText: "Empezar ahora",
    bgColor: "bg-accent-yellow/10"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="¿Cómo puedo ayudarte?"
          subtitle="Descubre recursos y contenidos diseñados para impulsar tu crecimiento personal y profesional."
          align="center"
          highlight={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-8 border border-border/40 card-hover"
            >
              <div className={`${feature.bgColor} w-16 h-16 flex items-center justify-center rounded-xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="mt-3 mb-6">{feature.description}</p>
              <ButtonLink to={feature.link} variant="outline">
                {feature.linkText}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
