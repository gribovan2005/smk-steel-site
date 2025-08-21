import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, Button } from "@/components/ui";

export const metadata: Metadata = {
    title: "О нас - СМК Сталь | Производство металлоконструкций с 2013 года",
    description:
        "СМК Сталь - надежный производитель металлоконструкций в Санкт-Петербурге с 2013 года. Собственное производство, квалифицированная команда, допуски СРО.",
    keywords: [
        "о нас СМК Сталь",
        "производство металлоконструкций СПб",
        "завод металлоконструкций",
        "история СМК Сталь",
        "команда СМК Сталь",
    ],
    openGraph: {
        title: "О нас - СМК Сталь",
        description: "Надежный производитель металлоконструкций в Санкт-Петербурге с 2013 года.",
        images: [{ url: "/welding_5.jpg", width: 1200, height: 630 }],
    },
};

export default function AboutUsPage() {
    return (
        <div className="min-h-screen text-white relative">
            <ParallaxBG
                imageUrl="/welding_5.jpg"
                scalePercent={160}
                brightness={1.18}
                contrast={1.08}
                maxShiftPercent={10}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

            <header className="relative z-30 border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/static_smk_steel.png"
                            alt="СМК Сталь — Производство металлоконструкций"
                            width={180}
                            height={60}
                            className="h-12 w-auto"
                        />
                    </Link>

                    <Link
                        href="/"
                        className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1"
                    >
                        ← <span className="hidden sm:inline">На главную</span>
                    </Link>
                </div>
            </header>

            <main className="relative z-10">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">О заводе СМК Сталь</h1>
                        <p className="text-gray-300 max-w-3xl mx-auto text-shadow text-lg">
                            Северо-западный завод металлоконструкций «СМК Сталь» производит изделия из металла на заказ
                            для частных и коммерческих объектов с 2013 года
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">200+</div>
                            <div className="text-sm2 text-white-300">довольных клиентов</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">300</div>
                            <div className="text-sm2 text-white-300">тонн в месяц</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">150+</div>
                            <div className="text-sm2 text-white-300">объектов с монтажом</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">100%</div>
                            <div className="text-sm2 text-white-300">соблюдение сроков</div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
                        <h2 className="text-2xl font-bold mb-6 ">О заводе</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            ООО «СМК Сталь» занимается производством металлоконструкций с 2013 г.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            <strong>Критерии нашего профессионализма</strong> – это индивидуальный подход к каждому
                            клиенту, тщательная проработка заказов, регулярное обучение рабочих бригад, новейшее
                            оборудование, качественное производство и соблюдение сроков поставки.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Большой опыт работы и широкие производственные возможности позволяют нам создавать самые
                            сложные и нестандартные металлоизделия. Мы изготавливаем конструкции любого уровня сложности
                            – по типовым и индивидуальным проектам.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                            <h2 className="text-xl font-bold mb-6 ">Наши сильные стороны</h2>
                            <div className="space-y-4 text-gray-300">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Качественные материалы</h3>
                                        <p className="text-sm mb-2">
                                            Работаем только с сертифицированными материалами от надежных производителей
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Современное оборудование</h3>
                                        <p className="text-sm mb-2">
                                            Новейшие станки плазменной резки, гибки, вальцовки и сварки
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Контроль качества</h3>
                                        <p className="text-sm">
                                            Проводим дополнительные лабораторные испытания по требованию заказчика
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Долгосрочное сотрудничество</h3>
                                        <p className="text-sm">
                                            Заинтересованы в долгосрочном и взаимовыгодном сотрудничестве
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                            <h2 className="text-xl font-bold mb-6 ">Производственные возможности</h2>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h3 className="font-semibold mb-2">Металлообработка</h3>
                                    <ul className="text-sm space-y-1">
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Плазменная резка до 30мм
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Гибка листового металла
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Вальцовка обечаек и профиля
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Механическая обработка
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Сварочные работы</h3>
                                    <ul className="text-sm space-y-1">
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Полуавтоматическая сварка
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Аргонодуговая сварка
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Работа с нержавейкой
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Сварка алюминия
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Дополнительные услуги</h3>
                                    <ul className="text-sm space-y-1">
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Проектирование КМ/КМД
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Покрытие и покраска
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                            Горячее цинкование
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
                        <h2 className="text-2xl font-bold mb-6 ">Монтаж металлоконструкций в Санкт-Петербурге и ЛО</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            На заводе по производству металлоконструкций ООО «СМК Сталь» вы сможете заказать услуги
                            сборки и монтажа изделий из металла с доставкой по СПБ и Ленинградской области.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            В штате нашего предприятия работают только квалифицированные строительные мастера. Мы
                            предлагаем лучшие цены на монтаж. Работаем зимой и летом в любых условиях.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            <div className="text-center">
                                <div className="text-orange-400 font-semibold mb-2">Квалифицированные мастера</div>
                                <p className="text-sm text-gray-300">Все допуски СРО и сертификаты</p>
                            </div>
                            <div className="text-center">
                                <div className="text-orange-400 font-semibold mb-2">Работаем круглогодично</div>
                                <p className="text-sm text-gray-300">Монтаж зимой и летом</p>
                            </div>
                            <div className="text-center">
                                <div className="text-orange-400 font-semibold mb-2">Лучшие цены</div>
                                <p className="text-sm text-gray-300">Конкурентная стоимость</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
                        <h2 className="text-2xl font-bold mb-6 ">Условия работы</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            В торгово-производственной компании «СМК Сталь» вы сможете заказать проектирование и
                            изготовление конструкций из металла с доставкой по всей России. Наш завод металлообработки
                            работает для вас в удобном режиме.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Мы гарантируем каждому нашему покупателю строгое соблюдение сроков поставки, прозрачный
                            прайс и высокую скорость производства – от 7 до 21 дня в зависимости от сложности проекта.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div>
                                <h3 className="font-semibold  mb-5">Гарантии качества</h3>
                                <ul className="space-y-2 text-gray-300 text-sm2">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                        Соблюдение сроков поставки
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                        Прозрачное ценообразование
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                        Технические паспорта на изделия
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                        Лабораторные испытания
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold  mb-5">Преимущества работы с нами</h3>
                                <ul className="space-y-2 text-gray-300 text-sm2">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                        Индивидуальный подход
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                        Работа по чертежам заказчика
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                        Собственная конструкторская база
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                                        Доставка по всей России
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/" className="btn-outline">
                            На главную
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
