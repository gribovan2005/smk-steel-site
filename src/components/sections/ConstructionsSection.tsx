import Image from "next/image";
import { Section, SectionTitle, Button } from "@/components/ui";
import { constructions } from "@/data/constructions";

// Маппинг конструкций на URL страниц
const constructionUrls: Record<string, string> = {
    Фермы: "/constructions/fermy",
    "Прогоны, балки покрытия": "/constructions/progony-balki-pokrytiya",
    "Электросварной двутавр": "/constructions/elektrosvarnoj-dvutavr",
    Колонны: "/constructions/kolonny",
    "Связи, фахверк, распорки": "/constructions/svyazi-fahverk-rasporki",
    "Балки перекрытий": "/constructions/balki-perekrytij",
    "Лестницы, ограждения, площадки": "/constructions/lestnitsy-ograzhdeniya-ploshhadki",
    "Закладные изделия": "/constructions/zakladnye-izdeliya",
    "Створные знаки": "/constructions/stvornye-znaki",
    "Дымовые трубы": "/constructions/dymovye-truby",
    "Подкрановые балки": "/constructions/podkranovye-balki",
    "Приварка статичных болтов": "/constructions/privarka-statichnykh-boltov",
    "Пространственные конструкции": "/constructions/prostranstvennye-konstruktsii",
    "Опоры ЛЭП": "/constructions/opory-lep",
    "Емкости и резервуары": "/constructions/emkosti-rezervuary",
    "Нестандартные изделия": "/constructions/nestandartnye-izdeliya",
};

const ConstructionsSection = () => {
    return (
        <Section id="constructions">
            <SectionTitle>Типовые конструкции</SectionTitle>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {constructions.map(construction => {
                    const constructionUrl = constructionUrls[construction.name];
                    return (
                        <div
                            key={construction.name}
                            className="rounded-xl border border-white/10 bg-black/30 backdrop-blur overflow-hidden"
                        >
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
                                <div className="mt-4 flex gap-2">
                                    {constructionUrl && (
                                        <Button href={constructionUrl} variant="primary" size="sm">
                                            Подробнее →
                                        </Button>
                                    )}
                                    <Button href="#lead" variant="outline" size="sm">
                                        Заказать
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 text-xs text-gray-400 space-y-1">
                <p>* цены указаны без учета металлопроката и лакокрасочных материалов.</p>
                <p>** указанные цены не являются публичной офертой. Стоимость указана в рублях за 1 тонну с НДС.</p>
            </div>
        </Section>
    );
};

export default ConstructionsSection;
