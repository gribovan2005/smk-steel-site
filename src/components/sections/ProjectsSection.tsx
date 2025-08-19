import Image from "next/image";
import { Section, SectionTitle } from "@/components/ui";
import { projectImages } from "@/data/clients";

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <SectionTitle>Работы</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projectImages.map((src, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden rounded-xl border border-white/10 group">
            <Image 
              src={src} 
              alt={`Проект ${idx + 1}`} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300" 
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection; 