import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ children, onClick, className = "", variant = "primary" }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm uppercase tracking-widest";
  
  const variants = {
    primary: "bg-art-accent text-art-bg hover:bg-opacity-90",
    secondary: "bg-art-ink text-art-bg hover:bg-opacity-90",
    outline: "border border-art-accent text-art-accent hover:bg-art-accent hover:text-art-bg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
