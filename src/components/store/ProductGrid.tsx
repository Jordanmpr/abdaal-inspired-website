
import { Link } from "react-router-dom";

// Datos simulados para los productos
const products = [
  {
    id: 1,
    title: "Plantilla de Planificación Semanal",
    price: 19.99,
    image: "https://source.unsplash.com/random/400x500?planner,1",
    slug: "plantilla-planificacion-semanal",
    category: "Plantillas",
    featured: true
  },
  {
    id: 2,
    title: "Ebook: Domina tu Tiempo",
    price: 24.99,
    image: "https://source.unsplash.com/random/400x500?ebook,2",
    slug: "ebook-domina-tu-tiempo",
    category: "Ebooks",
    featured: true
  },
  {
    id: 3,
    title: "Kit de Productividad Digital",
    price: 39.99,
    image: "https://source.unsplash.com/random/400x500?productivity,3",
    slug: "kit-productividad-digital",
    category: "Kits Digitales",
    featured: true
  },
  {
    id: 4,
    title: "Calendario de Hábitos 2025",
    price: 14.99,
    image: "https://source.unsplash.com/random/400x500?calendar,4",
    slug: "calendario-habitos-2025",
    category: "Plantillas",
    featured: false
  },
  {
    id: 5,
    title: "Ebook: Creatividad sin Límites",
    price: 19.99,
    image: "https://source.unsplash.com/random/400x500?creativity,5",
    slug: "ebook-creatividad-sin-limites",
    category: "Ebooks",
    featured: false
  },
  {
    id: 6,
    title: "Pack de Plantillas para Notion",
    price: 29.99,
    image: "https://source.unsplash.com/random/400x500?notion,6",
    slug: "pack-plantillas-notion",
    category: "Plantillas",
    featured: false
  }
];

interface ProductGridProps {
  limit?: number;
  featuredOnly?: boolean;
}

const ProductGrid = ({ limit, featuredOnly = false }: ProductGridProps) => {
  let displayedProducts = products;
  
  if (featuredOnly) {
    displayedProducts = products.filter(product => product.featured);
  }
  
  if (limit) {
    displayedProducts = displayedProducts.slice(0, limit);
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {displayedProducts.map((product) => (
        <Link 
          key={product.id}
          to={`/store/${product.slug}`}
          className="group"
        >
          <div className="bg-background rounded-xl overflow-hidden border border-border/40 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-accent-blue font-medium">{product.category}</span>
              <h3 className="mt-2 font-semibold text-xl">{product.title}</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg">{product.price}€</span>
                <button className="btn-primary py-2">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
