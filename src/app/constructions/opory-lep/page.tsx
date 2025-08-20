import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Опоры ЛЭП в СПб от 35000 руб/тн | СМК Сталь",
  description: "Изготовление опор линий электропередач в Санкт-Петербурге ⚡ Цены от 35000 руб/тн ⚡ Высота до 110м ⚡ Анкерные и промежуточные",
  keywords: [
    "опоры ЛЭП",
    "опоры линий электропередач",
    "металлические опоры ЛЭП",
    "опоры ЛЭП спб",
    "решетчатые опоры"
  ],
  openGraph: {
    title: "Опоры ЛЭП в СПб | СМК Сталь",
    description: "Изготовление опор линий электропередач от 35000 руб/тн. Высота до 110м.",
    images: [{ url: "/tilda/static_lep_oporie.jpg", width: 1200, height: 630 }],
  },
};

export default function OporyLepPage() {
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
            <li className="text-white">Опоры ЛЭП</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Опоры ЛЭП в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление металлических опор для линий электропередач. 
                Решетчатые конструкции высотой до 110 метров.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">35 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Высота до</span>
                  <div className="text-2xl font-bold">110 м</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_lep_oporie.jpg"
                alt="Опоры ЛЭП СМК Сталь"
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
              <SectionTitle>Типы опор ЛЭП</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Промежуточные</h4>
                  <p className="text-sm text-gray-300">Для прямых участков</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Анкерные</h4>
                  <p className="text-sm text-gray-300">Для натяжения проводов</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Угловые</h4>
                  <p className="text-sm text-gray-300">Для изменения направления</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Концевые</h4>
                  <p className="text-sm text-gray-300">Для окончания линий</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Об опорах ЛЭП</h3>
                <p className="text-gray-200 mb-4">
                  Опоры линий электропередач — высокие решетчатые конструкции 
                  для поддержания воздушных линий электропередач. Обеспечивают 
                  надежную передачу электроэнергии на большие расстояния.
                </p>
                <p className="text-gray-200">
                  Изготавливаем опоры согласно типовым проектам и индивидуальным 
                  техническим условиям. Все конструкции рассчитываются на климатические 
                  нагрузки региона и имеют цинковое покрытие.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать опоры ЛЭП</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-black-900/30">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-6 text-white">Нужны опоры ЛЭП?</h2>
            <p className="text-2xl text-gray-200 mb-8">
              Изготовим надежные опоры для линий электропередач
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать опоры
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 