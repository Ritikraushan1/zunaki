"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ children, onClick, href, className = "" }: ButtonProps) {
  const baseStyles = "px-6 py-4 cursor-pointer rounded-[20px] text-white text-md font-bold tracking-[0.15em] hover:bg-white/10 transition-all duration-300 inline-block uppercase";
  
  const borderStyle = {
    border: '1px solid #FFFFFF',
    borderBottom: '5px solid #FFFFFF'
  };
  
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`} style={borderStyle}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`} style={borderStyle}>
      {children}
    </button>
  );
}
