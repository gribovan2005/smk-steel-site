import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Пространственные конструкции в СПб от 35000 руб/тн | СМК Сталь",
  description: "Изготовление пространственных металлоконструкций в Санкт-Петербурге ⚡ Цены от 35000 руб/тн ⚡ Купола, шатры, арки ⚡ Сложная геометрия",
  keywords: [
    "пространственные конструкции",
    "купола металлические",
    "арочные конструкции",
    "сложные металлоконструкции",
    "пространственные каркасы"
  ],
  openGraph: {
    title: "Пространственные конструкции в СПб | СМК Сталь",
    description: "Изготовление пространственных металлоконструкций от 35000 руб/тн. Купола, арки.",
    images: [{ url: "/tilda/static_prostranstvernnie.jpg", width: 1200, height: 630 }],
  },
};

export default function ProstranstvennyeKonstruktsiiPage() {
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
            <li className="text-white">Пространственные конструкции</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Пространственные конструкции в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление сложных пространственных металлоконструкций. 
                Купола, арки, шатровые покрытия и другие уникальные формы.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">35 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Диаметр до</span>
                  <div className="text-2xl font-bold">100 м</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_prostranstvernnie.jpg"
                alt="Пространственные конструкции СМК Сталь"
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
              <SectionTitle>Типы пространственных конструкций</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Купольные покрытия</h4>
                  <p className="text-sm text-gray-300">Сферические и эллиптические</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Арочные конструкции</h4>
                  <p className="text-sm text-gray-300">Цилиндрические своды</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Шатровые покрытия</h4>
                  <p className="text-sm text-gray-300">Пирамидальные формы</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Висячие конструкции</h4>
                  <p className="text-sm text-gray-300">Вантовые и мембранные</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О пространственных конструкциях</h3>
                <p className="text-gray-200 mb-4">
                  Пространственные конструкции — это сложные инженерные сооружения, 
                  работающие в трех измерениях и имеющие криволинейную форму. 
                  Они позволяют перекрывать большие пролеты без промежуточных опор.
                </p>
                <p className="text-gray-200">
                  Разрабатываем и изготавливаем уникальные конструкции с использованием 
                  современных расчетных программ и технологий 3D-моделирования. 
                  Каждый проект индивидуален и требует особого подхода.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать конструкцию</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-blue-900/30 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужна сложная конструкция?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Реализуем любые архитектурные замыслы в металле
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Обсудить проект
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 