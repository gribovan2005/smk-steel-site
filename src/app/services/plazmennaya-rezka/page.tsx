import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
    title: "Плазменная резка металла в СПб от 100 руб/м | СМК Сталь",
    description:
        "Плазменная резка металла в Санкт-Петербурге ⚡ Цены от 100 руб/м ⚡ Толщина до 150мм ⚡ Высокая точность ⚡ Быстрые сроки",
    keywords: [
        "плазменная резка",
        "резка металла спб",
        "плазменная резка санкт петербург",
        "резка металла цена",
        "плазморез",
        "фигурная резка металла",
    ],
    openGraph: {
        title: "Плазменная резка металла в СПб | СМК Сталь",
        description: "Плазменная резка металла от 100 руб/м. Толщина до 150мм, высокая точность.",
        images: [{ url: "/tilda/static_plazmennaya_rezka.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Плазменная резка металла",
    description: "Плазменная резка металла любой сложности с высокой точностью в Санкт-Петербурге",
    provider: {
        "@type": "Organization",
        name: "СМК Сталь",
        url: "https://smk-steel.ru",
    },
    areaServed: {
        "@type": "City",
        name: "Санкт-Петербург",
    },
    offers: {
        "@type": "Offer",
        price: "100",
        priceCurrency: "RUB",
        priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "100",
            priceCurrency: "RUB",
            unitCode: "MTR",
            unitText: "метр",
        },
    },
};

export default function PlazmenRezkaPage() {
    return (
        <div className="min-h-screen text-white relative">
            <ParallaxBG
                imageUrl="/welding_5.jpg"
                scalePercent={160}
                brightness={1.18}
                contrast={1.08}
                maxShiftPercent={10}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <nav className="bg-black/30 backdrop-blur py-4 relative z-10">
                <div className="mx-auto max-w-7xl px-4">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <Link href="/" className="text-gray-300 hover:text-white">
                                Главная
                            </Link>
                        </li>
                        <li className="text-gray-500">→</li>
                        <li>
                            <Link href="/#services" className="text-gray-300 hover:text-white">
                                Услуги
                            </Link>
                        </li>
                        <li className="text-gray-500">→</li>
                        <li className="text-white">Плазменная резка металла</li>
                    </ol>
                </div>
            </nav>

            <main className="relative">
                <Section className="py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                Плазменная резка металла в Санкт-Петербурге
                            </h1>
                            <p className="text-xl text-gray-200 mb-8">
                                Плазменная резка металла любой сложности с высокой точностью. Толщина до 150мм, быстрые
                                сроки выполнения.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                                    <span className="text-sm text-gray-300">Цена от</span>
                                    <div className="text-2xl font-bold">100 ₽/м</div>
                                </div>
                                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                                    <span className="text-sm text-gray-300">Толщина до</span>
                                    <div className="text-2xl font-bold">150 мм</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/tilda/static_plazmennaya_rezka.jpg"
                                alt="Плазменная резка металла СМК Сталь"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </Section>

                <Section className="py-16 bg-black/30 backdrop-blur">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <SectionTitle>Возможности плазменной резки</SectionTitle>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                                    <h4 className="font-semibold mb-2">Черные металлы</h4>
                                    <p className="text-sm text-gray-300">Сталь углеродистая и легированная</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                                    <h4 className="font-semibold mb-2">Цветные металлы</h4>
                                    <p className="text-sm text-gray-300">Алюминий, медь, титан, нержавейка</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                                    <h4 className="font-semibold mb-2">Фигурная резка</h4>
                                    <p className="text-sm text-gray-300">Сложные контуры по чертежам</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                                    <h4 className="font-semibold mb-2">Высокая скорость</h4>
                                    <p className="text-sm text-gray-300">Быстрое выполнение заказов</p>
                                </div>
                            </div>

                            <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                                <h3 className="text-xl font-bold mb-4">Описание услуги</h3>
                                <p className="text-gray-200 mb-4">
                                    Плазменная резка — это высокоэффективный метод обработки металлов, основанный на
                                    использовании плазменной дуги. Этот процесс обеспечивает высокое качество реза с
                                    минимальной зоной термического воздействия.
                                </p>
                                <p className="text-gray-200">
                                    Наше современное оборудование позволяет резать металл толщиной до 150мм с высокой
                                    точностью и скоростью. Выполняем как серийные заказы, так и единичные изделия по
                                    чертежам заказчика.
                                </p>
                            </div>
                        </div>

                        <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
                            <h3 className="text-xl font-semibold mb-4">Получить расчет стоимости</h3>
                            <LeadForm />
                        </div>
                    </div>
                </Section>

                <Section className="py-20 bg-black-900/30">
                    <div className="text-center">
                        <h2 className="text-6xl font-bold mb-6 text-white">Нужна плазменная резка?</h2>
                        <p className="text-2xl text-gray-200 mb-8">Быстро и точно режем металл любой сложности</p>
                        <Button href="/#lead" variant="primary" size="lg">
                            Получить расчет
                        </Button>
                    </div>
                </Section>
            </main>
        </div>
    );
}
