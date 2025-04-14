
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import FeatureSection from "../components/home/FeatureSection";
import BlogList from "../components/blog/BlogList";
import ProductGrid from "../components/store/ProductGrid";
import CoursesList from "../components/courses/CoursesList";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterForm from "../components/ui/newsletter-form";
import SectionHeading from "../components/ui/section-heading";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <FeatureSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Artículos recientes"
            subtitle="Ideas, consejos y estrategias para mejorar tu productividad y creatividad."
            highlight={true}
          />
          
          <BlogList limit={2} />
        </div>
      </section>
      
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Productos destacados"
            subtitle="Herramientas y recursos diseñados para ayudarte a alcanzar tu máximo potencial."
            highlight={true}
          />
          
          <ProductGrid limit={3} featuredOnly={true} />
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Mis cursos"
            subtitle="Formaciones completas para desarrollar nuevas habilidades y transformar tu vida."
            highlight={true}
          />
          
          <CoursesList limit={2} />
        </div>
      </section>
      
      <TestimonialsSection />
      
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <NewsletterForm 
            title="Únete a mi newsletter semanal" 
            description="Recibe contenido exclusivo, consejos prácticos y recursos gratuitos directamente en tu email cada semana."
            dark={false}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
