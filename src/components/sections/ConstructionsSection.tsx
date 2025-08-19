import Image from "next/image";
import { Section, SectionTitle, Button } from "@/components/ui";
import { constructions } from "@/data/constructions";

const ConstructionsSection = () => {
  return (
    <Section id="constructions">
      <SectionTitle>Типовые конструкции</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {constructions.map((construction) => (
          <div key={construction.name} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur overflow-hidden">
            <div className="relative h-40 w-full border-b border-white/10">
              <Image 
                src={construction.img} 
                alt={construction.name} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 50vw, 25vw" 
              />
            </div>
            <div className="p-5">
              <p className="text-base font-semibold text-white">{construction.name}</p>
              <p className="mt-2 text-gray-300 font-medium">{construction.price}</p>
              <Button href="#lead" variant="outline" size="sm" className="mt-4">
                Заказать →
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-xs text-gray-400 space-y-1">
        <p>* цены указаны без учета металлопроката и лакокрасочных материалов.</p>
        <p>** указанные цены не являются публичной офертой. Стоимость указана в рублях за 1 тонну с НДС.</p>
      </div>
    </Section>
  );
};

export default ConstructionsSection; 