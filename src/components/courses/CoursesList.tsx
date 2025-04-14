
import ButtonLink from "../ui/button-link";
import { Check } from "lucide-react";

// Datos simulados para los cursos
const courses = [
  {
    id: 1,
    title: "Domina tu Productividad",
    description: "Un curso completo sobre cómo maximizar tu tiempo y lograr más en menos tiempo. Aprende sistemas prácticos que funcionan.",
    price: 149,
    image: "https://source.unsplash.com/random/800x600?productivity,1",
    slug: "domina-tu-productividad",
    features: [
      "12 módulos con más de 50 lecciones",
      "Plantillas de productividad descargables",
      "Acceso a comunidad privada",
      "Actualizaciones de por vida"
    ]
  },
  {
    id: 2,
    title: "Crece en YouTube",
    description: "Crea y haz crecer un canal de YouTube exitoso desde cero. Estrategias probadas para aumentar visualizaciones y suscriptores.",
    price: 199,
    image: "https://source.unsplash.com/random/800x600?youtube,2",
    slug: "crece-en-youtube",
    features: [
      "10 módulos con más de 40 lecciones",
      "Análisis de canales exitosos",
      "Plantillas para guiones y thumbnails",
      "Guía de equipamiento y software"
    ]
  },
  {
    id: 3,
    title: "Emprendimiento Digital",
    description: "Aprende a crear, lanzar y escalar negocios digitales. Desde la idea inicial hasta la monetización consistente.",
    price: 249,
    image: "https://source.unsplash.com/random/800x600?entrepreneurship,3",
    slug: "emprendimiento-digital",
    features: [
      "15 módulos con más de 60 lecciones",
      "Estudios de caso de emprendedores exitosos",
      "Plantillas para planes de negocio",
      "Tutorías grupales mensuales"
    ]
  }
];

interface CoursesListProps {
  limit?: number;
}

const CoursesList = ({ limit }: CoursesListProps) => {
  const displayedCourses = limit ? courses.slice(0, limit) : courses;
  
  return (
    <div className="space-y-16">
      {displayedCourses.map((course) => (
        <div 
          key={course.id} 
          className="bg-background rounded-2xl border border-border/40 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold">{course.title}</h3>
              <p className="mt-4">{course.description}</p>
              
              <ul className="mt-6 space-y-3">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center">
                      <Check size={14} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">{course.price}€</span>
                  <span className="text-muted-foreground">/ un solo pago</span>
                </div>
                
                <ButtonLink to={`/courses/${course.slug}`} variant="primary" className="w-full justify-center">
                  Inscribirme ahora
                </ButtonLink>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
