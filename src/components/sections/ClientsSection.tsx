import Image from "next/image";
import { Section, SectionTitle } from "@/components/ui";
import { clientLogos } from "@/data/clients";

const ClientsSection = () => {
    return (
        <Section id="clients">
            <SectionTitle subtitle="Гордимся сотрудничеством с лидерами рынка">Наши клиенты</SectionTitle>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
                {clientLogos.map((src, i) => (
                    <div key={i} className="relative h-28 sm:h-36 w-full flex items-center justify-center">
                        <Image
                            src={src}
                            alt={`Клиент ${i + 1}`}
                            fill
                            className="object-contain transition-all duration-300 opacity-90 hover:opacity-100"
                            sizes="(max-width: 768px) 45vw, 20vw"
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ClientsSection;
