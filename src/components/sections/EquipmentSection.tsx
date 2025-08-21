import Image from "next/image";
import { Section, SectionTitle } from "@/components/ui";
import { equipmentList, equipmentImages } from "@/data/equipment";

const EquipmentSection = () => {
    return (
        <Section id="equipment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    <SectionTitle centered={false}>Наше оборудование</SectionTitle>
                    <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                        <ul className="space-y-2 text-sm text-gray-300">
                            {equipmentList.map((equipment, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{equipment}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {equipmentImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
                        >
                            <Image
                                src={src}
                                alt={`Оборудование ${idx + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default EquipmentSection;
