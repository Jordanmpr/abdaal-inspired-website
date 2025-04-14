
import { Link } from "react-router-dom";
import ButtonLink from "../ui/button-link";

// Datos simulados para los artículos del blog
const articles = [
  {
    id: 1,
    title: "Cómo establecer un sistema de productividad que funcione para ti",
    excerpt: "Descubre cómo crear un sistema personalizado que se adapte a tu forma de trabajar y te ayude a alcanzar tus metas.",
    date: "14 Abr 2025",
    readTime: "8 min",
    slug: "sistema-productividad-personalizado",
    category: "Productividad"
  },
  {
    id: 2,
    title: "5 técnicas para mejorar tu creatividad diaria",
    excerpt: "Estrategias prácticas para estimular tu creatividad y generar nuevas ideas innovadoras cada día.",
    date: "10 Abr 2025",
    readTime: "6 min",
    slug: "tecnicas-mejorar-creatividad",
    category: "Creatividad"
  },
  {
    id: 3,
    title: "Construyendo buenos hábitos: una guía paso a paso",
    excerpt: "Aprende cómo crear y mantener hábitos positivos que transformarán tu vida personal y profesional.",
    date: "5 Abr 2025",
    readTime: "10 min",
    slug: "guia-buenos-habitos",
    category: "Desarrollo Personal"
  },
  {
    id: 4,
    title: "Cómo lanzar tu primer proyecto digital y monetizarlo",
    excerpt: "Estrategias para crear, lanzar y monetizar tu primer proyecto digital sin morir en el intento.",
    date: "28 Mar 2025",
    readTime: "12 min",
    slug: "lanzar-proyecto-digital",
    category: "Emprendimiento"
  }
];

const BlogList = ({ limit }: { limit?: number }) => {
  const displayedArticles = limit ? articles.slice(0, limit) : articles;
  
  return (
    <div className="space-y-12">
      {displayedArticles.map((article) => (
        <article key={article.id} className="border-b border-border/40 pb-12 last:border-0">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <span className="text-sm text-accent-blue font-medium">{article.category}</span>
              <h3 className="mt-2 text-2xl font-bold">
                <Link to={`/blog/${article.slug}`} className="hover:text-primary/80 transition-colors">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-4">{article.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime} de lectura</span>
              </div>
              <div className="mt-6">
                <ButtonLink to={`/blog/${article.slug}`} variant="outline">
                  Leer artículo
                </ButtonLink>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="aspect-[3/2] rounded-lg overflow-hidden bg-secondary">
                <img
                  src={`https://source.unsplash.com/random/600x400?productivity,${article.id}`}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </article>
      ))}
      
      {limit && articles.length > limit && (
        <div className="text-center mt-12">
          <ButtonLink to="/blog" variant="primary" className="mx-auto">
            Ver todos los artículos
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default BlogList;
