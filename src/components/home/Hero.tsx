
import ButtonLink from "../ui/button-link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-16 pb-24 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              How Can<br />
              <span className="relative">
                I Help You?
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-accent-blue" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C45.6667 4.66666 158.8 -3.6 356 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-xl">
              Descubre cómo maximizar tu potencial, mejorar tu productividad y alcanzar tus metas personales y profesionales.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink to="/blog" variant="primary">
                Leer el blog
              </ButtonLink>
              <ButtonLink to="/courses" variant="outline">
                Ver cursos
              </ButtonLink>
            </div>
          </div>
          
          <div className={`rounded-3xl bg-secondary/50 p-8 relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="aspect-video overflow-hidden">
              <img 
                src="/lovable-uploads/6ebb7c53-7b41-4443-98fc-882ad875c664.png" 
                alt="Persona trabajando" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
