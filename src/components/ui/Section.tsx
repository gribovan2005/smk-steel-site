import { SectionProps } from "@/types";

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = "", 
  children 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        {children}
      </div>
    </section>
  );
};

export default Section; 