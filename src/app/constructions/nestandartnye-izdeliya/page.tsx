import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Нестандартные металлические изделия в СПб от 60000 руб/тн | СМК Сталь",
  description: "Изготовление нестандартных металлических изделий в Санкт-Петербурге ⚡ Цены от 60000 руб/тн ⚡ По индивидуальным чертежам ⚡ Любая сложность",
  keywords: [
    "нестандартные изделия",
    "индивидуальные металлоконструкции",
    "нестандартные изделия спб",
    "сложные металлоконструкции",
    "единичные изделия"
  ],
  openGraph: {
    title: "Нестандартные металлические изделия в СПб | СМК Сталь",
    description: "Изготовление нестандартных металлических изделий от 60000 руб/тн. По чертежам.",
    images: [{ url: "/tilda/static_nestandartnie_izdelia.jpg", width: 1200, height: 630 }],
  },
};

export default function NestandartnyeIzdeliyaPage() {
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
            <li className="text-white">Нестандартные изделия</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Нестандартные металлические изделия в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление уникальных металлических изделий по индивидуальным 
                чертежам и техническим заданиям. Любая сложность и единичные экземпляры.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">60 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Вес до</span>
                  <div className="text-2xl font-bold">50 тн</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_nestandartnie_izdelia.jpg"
                alt="Нестандартные изделия СМК Сталь"
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
              <SectionTitle>Типы нестандартных изделий</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Уникальные конструкции</h4>
                  <p className="text-sm text-gray-300">Авторские архитектурные решения</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Специальное оборудование</h4>
                  <p className="text-sm text-gray-300">Корпуса и рамы</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Декоративные элементы</h4>
                  <p className="text-sm text-gray-300">Художественная ковка и сварка</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Прототипы</h4>
                  <p className="text-sm text-gray-300">Опытные образцы</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О нестандартных изделиях</h3>
                <p className="text-gray-200 mb-4">
                  Нестандартные металлические изделия — это уникальные конструкции, 
                  изготавливаемые по индивидуальным проектам для решения специфических 
                  задач. Каждое изделие требует особого подхода и мастерства.
                </p>
                <p className="text-gray-200">
                  Наши специалисты имеют большой опыт работы с нестандартными задачами. 
                  От эскиза до готового изделия мы сопровождаем весь процесс, 
                  предлагая оптимальные технические решения.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать изделие</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-blue-900/30 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Нужно нестандартное решение?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Воплотим любые идеи в металле с высоким качеством
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Обсудить задачу
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 