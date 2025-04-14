
import Layout from "../components/layout/Layout";
import BlogList from "../components/blog/BlogList";
import SectionHeading from "../components/ui/section-heading";
import NewsletterForm from "../components/ui/newsletter-form";

const Blog = () => {
  return (
    <Layout>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Blog"
            subtitle="Ideas, consejos y reflexiones sobre productividad, creatividad, emprendimiento y desarrollo personal."
            highlight={true}
          />
          
          <div className="mt-12">
            <BlogList />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <NewsletterForm 
            title="Recibe nuevo contenido en tu email" 
            description="Suscríbete para recibir los últimos artículos y contenido exclusivo directamente en tu bandeja de entrada."
          />
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
