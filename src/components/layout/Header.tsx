
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Tu Nombre
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground font-medium hover:text-foreground/70 transition-colors">
            Home
          </Link>
          <Link to="/blog" className="text-foreground font-medium hover:text-foreground/70 transition-colors">
            Blog
          </Link>
          <Link to="/store" className="text-foreground font-medium hover:text-foreground/70 transition-colors">
            Store
          </Link>
          <Link to="/courses" className="text-foreground font-medium hover:text-foreground/70 transition-colors">
            Courses
          </Link>
          <Link to="/newsletter" className="btn-primary">
            Newsletter
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background absolute top-[72px] left-0 right-0 border-b border-border/40 z-40">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <Link 
              to="/" 
              className="text-foreground font-medium hover:text-foreground/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="text-foreground font-medium hover:text-foreground/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/store" 
              className="text-foreground font-medium hover:text-foreground/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </Link>
            <Link 
              to="/courses" 
              className="text-foreground font-medium hover:text-foreground/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/newsletter" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
