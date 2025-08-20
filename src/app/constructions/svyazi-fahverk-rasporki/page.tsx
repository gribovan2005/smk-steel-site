import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Связи, фахверк, распорки в СПб от 22000 руб/тн | СМК Сталь",
  description: "Изготовление связей, фахверка и распорок в Санкт-Петербурге ⚡ Цены от 22000 руб/тн ⚡ Для каркасов зданий ⚡ По проекту",
  keywords: [
    "связи каркаса",
    "фахверк",
    "распорки",
    "связи зданий спб",
    "элементы жесткости"
  ],
  openGraph: {
    title: "Связи, фахверк, распорки в СПб | СМК Сталь",
    description: "Изготовление связей, фахверка и распорок от 22000 руб/тн. Для каркасов зданий.",
    images: [{ url: "/tilda/static_rasporky.jpg", width: 1200, height: 630 }],
  },
};

export default function SvyaziFahverkRasporki() {
  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_5.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      <nav className="bg-black/30 backdrop-blur py-4 relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-300 hover:text-white">Главная</Link></li>
            <li className="text-gray-500">→</li>
            <li><Link href="/#constructions" className="text-gray-300 hover:text-white">Конструкции</Link></li>
            <li className="text-gray-500">→</li>
            <li className="text-white">Связи, фахверк, распорки</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Связи, фахверк, распорки в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление элементов пространственной жесткости каркасов зданий. 
                Связи между колоннами, фахверк стен, распорки покрытий.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">22 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Длина до</span>
                  <div className="text-2xl font-bold">12 м</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_rasporky.jpg"
                alt="Связи фахверк распорки СМК Сталь"
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
              <SectionTitle>Типы связевых элементов</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Связи по колоннам</h4>
                  <p className="text-sm text-gray-300">Горизонтальные и вертикальные</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Связи покрытий</h4>
                  <p className="text-sm text-gray-300">В плоскости верхних поясов</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Элементы фахверка</h4>
                  <p className="text-sm text-gray-300">Стойки и ригели стен</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Распорки</h4>
                  <p className="text-sm text-gray-300">Временные и постоянные</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О связевых элементах</h3>
                <p className="text-gray-200 mb-4">
                  Связи, фахверк и распорки обеспечивают пространственную жесткость 
                  и устойчивость каркаса здания. Они воспринимают горизонтальные 
                  нагрузки от ветра и обеспечивают общую устойчивость конструкций.
                </p>
                <p className="text-gray-200">
                  Изготавливаем все виды связевых элементов из уголкового профиля, 
                  круглых стержней и профильных труб. Все узлы соединений рассчитываются 
                  в соответствии с действующими нормами проектирования.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать связи</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-blue-900/30 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Нужны связи и фахверк?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Обеспечим пространственную жесткость каркаса здания
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать связи
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 