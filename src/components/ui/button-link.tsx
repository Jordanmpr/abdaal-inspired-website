
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  showArrow?: boolean;
  className?: string;
}

const ButtonLink = ({ 
  to, 
  children, 
  variant = "primary", 
  showArrow = true, 
  className = ""
}: ButtonLinkProps) => {
  const baseClass = variant === "primary" 
    ? "btn-primary" 
    : variant === "secondary" 
      ? "btn-secondary"
      : "btn-outline";
  
  return (
    <Link to={to} className={`${baseClass} ${className}`}>
      <span>{children}</span>
      {showArrow && <ArrowRight size={16} />}
    </Link>
  );
};

export default ButtonLink;
