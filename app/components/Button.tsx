"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "light" | "dark";
}

export default function Button({ children, onClick, href, className = "", variant = "light" }: ButtonProps) {
  const baseStyles = "px-12 py-4 cursor-pointer rounded-full text-base font-bold tracking-[0.15em] transition-all duration-300 inline-block uppercase";
  
  const variantStyles = variant === "dark" 
    ? "text-black hover:bg-neutral-200"
    : "text-white hover:bg-white/10";
  
  const borderStyle = variant === "light" ? {
    border: '1px solid #FFFFFF',
    borderBottom: '5px solid #FFFFFF'
  } : {
    border: '1px solid #0a0a1a',
    borderBottom: '5px solid #0a0a1a'
  };
  
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles} ${className}`} style={borderStyle}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`} style={borderStyle}>
      {children}
    </button>
  );
}
