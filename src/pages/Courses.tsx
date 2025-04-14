
import Layout from "../components/layout/Layout";
import CoursesList from "../components/courses/CoursesList";
import SectionHeading from "../components/ui/section-heading";
import NewsletterForm from "../components/ui/newsletter-form";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Courses = () => {
  return (
    <Layout>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Academy"
            subtitle="Cursos completos diseñados para ayudarte a desarrollar habilidades prácticas y transformar tu vida."
            highlight={true}
          />
          
          <div className="mt-12">
            <CoursesList />
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <NewsletterForm 
            title="¿No estás seguro de qué curso elegir?" 
            description="Suscríbete para recibir orientación personalizada y contenido gratuito que te ayudará a decidir qué formación es la adecuada para ti."
          />
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
