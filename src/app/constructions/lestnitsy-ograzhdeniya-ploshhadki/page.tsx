import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
    title: "Лестницы, ограждения, площадки в СПб от 30000 руб/тн | СМК Сталь",
    description:
        "Изготовление металлических лестниц, ограждений и площадок в Санкт-Петербурге ⚡ Цены от 30000 руб/тн ⚡ Сварные и сборные",
    keywords: ["металлические лестницы", "ограждения", "площадки", "лестницы спб", "эвакуационные лестницы"],
    openGraph: {
        title: "Лестницы, ограждения, площадки в СПб | СМК Сталь",
        description: "Изготовление металлических лестниц, ограждений и площадок от 30000 руб/тн.",
        images: [{ url: "/tilda/static_lestnitsa.jpg", width: 1200, height: 630 }],
    },
};

export default function LestnitsyOgrazhdPloshhadkiPage() {
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
                            <Link href="/#constructions" className="text-gray-300 hover:text-white">
                                Конструкции
                            </Link>
                        </li>
                        <li className="text-gray-500">→</li>
                        <li className="text-white">Лестницы, ограждения, площадки</li>
                    </ol>
                </div>
            </nav>

            <main className="relative">
                <Section className="py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                Лестницы, ограждения, площадки в Санкт-Петербурге
                            </h1>
                            <p className="text-xl text-gray-200 mb-8">
                                Изготовление металлических лестниц, ограждений и площадок для промышленных объектов.
                                Эвакуационные и технологические.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                                    <span className="text-sm text-gray-300">Цена от</span>
                                    <div className="text-2xl font-bold">30 000 ₽/тн</div>
                                </div>
                                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                                    <span className="text-sm text-gray-300">Высота до</span>
                                    <div className="text-2xl font-bold">20 м</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/tilda/static_lestnitsa.jpg"
                                alt="Лестницы ограждения площадки СМК Сталь"
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
                            <SectionTitle>Типы конструкций</SectionTitle>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                                    <h4 className="font-semibold mb-2">Маршевые лестницы</h4>
                                    <p className="text-sm text-gray-300">Прямые и поворотные</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                                    <h4 className="font-semibold mb-2">Винтовые лестницы</h4>
                                    <p className="text-sm text-gray-300">Спиральные конструкции</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                                    <h4 className="font-semibold mb-2">Площадки обслуживания</h4>
                                    <p className="text-sm text-gray-300">Для оборудования</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                                    <h4 className="font-semibold mb-2">Ограждения</h4>
                                    <p className="text-sm text-gray-300">Перила и барьерные конструкции</p>
                                </div>
                            </div>

                            <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                                <h3 className="text-xl font-bold mb-4">О лестницах и площадках</h3>
                                <p className="text-gray-200 mb-4">
                                    Металлические лестницы, ограждения и площадки — важные элементы безопасности
                                    промышленных объектов. Обеспечивают доступ к оборудованию и эвакуационные пути в
                                    соответствии с нормами пожарной безопасности.
                                </p>
                                <p className="text-gray-200">
                                    Изготавливаем конструкции из решетчатого настила, рифленого листа и перфорированного
                                    металла. Все изделия имеют антикоррозийную защиту и соответствуют требованиям ГОСТ и
                                    СНиП.
                                </p>
                            </div>
                        </div>

                        <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
                            <h3 className="text-xl font-semibold mb-4">Заказать лестницы</h3>
                            <LeadForm />
                        </div>
                    </div>
                </Section>

                <Section className="py-20 bg-black-900/30">
                    <div className="text-center">
                        <h2 className="text-6xl font-bold mb-6 text-white">Нужны лестницы и площадки?</h2>
                        <p className="text-2xl text-gray-200 mb-8">Обеспечим безопасный доступ к оборудованию</p>
                        <Button href="/#lead" variant="primary" size="lg">
                            Заказать лестницы
                        </Button>
                    </div>
                </Section>
            </main>
        </div>
    );
}
