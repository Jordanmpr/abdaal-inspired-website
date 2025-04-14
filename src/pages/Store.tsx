
import Layout from "../components/layout/Layout";
import ProductGrid from "../components/store/ProductGrid";
import SectionHeading from "../components/ui/section-heading";
import NewsletterForm from "../components/ui/newsletter-form";

const Store = () => {
  return (
    <Layout>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Store"
            subtitle="Plantillas, ebooks y recursos diseñados para ayudarte a ser más productivo y creativo."
            highlight={true}
          />
          
          <div className="mt-12">
            <ProductGrid />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <NewsletterForm 
            title="¿Quieres descuentos exclusivos?" 
            description="Suscríbete para recibir descuentos especiales, lanzamientos anticipados y contenido exclusivo."
            dark={true}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Store;
