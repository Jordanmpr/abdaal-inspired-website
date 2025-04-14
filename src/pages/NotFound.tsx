
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-bold mb-4">404</h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">Oops! La página que buscas no existe.</p>
        <Link 
          to="/" 
          className="btn-primary"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
