import Link from "next/link";
import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  href,
  type = "button",
}) => {
  const baseClasses = "focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "btn focus:ring-white/50",
    outline: "btn-outline focus:ring-white/50", 
    ghost: "bg-transparent hover:bg-white/5 text-white focus:ring-white/30 inline-flex items-center justify-center h-12 px-4 rounded-lg transition-all duration-200",
  };

  const sizeClasses = {
    sm: "btn-sm",
    md: "", // Используем стандартную высоту из .btn
    lg: "btn-lg",
  };

  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer";

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('#')) {
      return (
        <a href={href} className={allClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 