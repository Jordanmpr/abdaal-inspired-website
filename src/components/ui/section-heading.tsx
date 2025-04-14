
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  highlight?: boolean;
  highlightColor?: string;
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = "left", 
  highlight = false,
  highlightColor = "bg-accent-blue",
  children 
}: SectionHeadingProps) => {
  const alignClass = 
    align === "center" 
      ? "text-center" 
      : align === "right" 
        ? "text-right" 
        : "text-left";
  
  return (
    <div className={`mb-12 ${alignClass}`}>
      {highlight ? (
        <h2 className="highlight-circle">
          {title}
        </h2>
      ) : (
        <h2>{title}</h2>
      )}
      
      {subtitle && (
        <p className="mt-4 text-xl sm:text-2xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
};

export default SectionHeading;
