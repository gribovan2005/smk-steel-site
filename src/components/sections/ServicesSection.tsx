import Image from "next/image";
import { Section, SectionTitle, Button } from "@/components/ui";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <Section id="services">
      <SectionTitle subtitle="Мы оказываем весь спектр услуг по обработке и заготовке металлических изделий">
        Услуги
      </SectionTitle>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.name} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-4 flex gap-4">
            <div className="relative w-40 h-28 sm:w-52 sm:h-32 flex-none overflow-hidden rounded-lg border border-white/10">
              <Image src={service.img} alt={service.name} fill className="object-cover" sizes="(max-width: 768px) 160px, 208px" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                <p className="text-base font-semibold text-white">{service.name}</p>
                {service.price ? <p className="text-sm font-medium text-gray-200">{service.price}</p> : null}
              </div>
              <p className="mt-2 text-sm text-gray-300">{service.desc}</p>
              <Button href="#lead" variant="outline" size="sm" className="mt-3">
                Заказать →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection; 