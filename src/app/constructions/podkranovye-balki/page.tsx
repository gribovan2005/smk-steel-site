import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Подкрановые балки в СПб от 45000 руб/тн | СМК Сталь",
  description: "Изготовление подкрановых балок в Санкт-Петербурге ⚡ Цены от 45000 руб/тн ⚡ Для мостовых кранов ⚡ Грузоподъемность до 500т",
  keywords: [
    "подкрановые балки",
    "балки для кранов",
    "подкрановые балки спб",
    "крановые балки",
    "балки для мостовых кранов"
  ],
  openGraph: {
    title: "Подкрановые балки в СПб | СМК Сталь",
    description: "Изготовление подкрановых балок от 45000 руб/тн. Для мостовых кранов.",
    images: [{ url: "/tilda/static_balki.jpg", width: 1200, height: 630 }],
  },
};

export default function PodkranovyeBalkiPage() {
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
            <li className="text-white">Подкрановые балки</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Подкрановые балки в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление подкрановых балок для мостовых кранов различной 
                грузоподъемности. Усиленные конструкции для тяжелых режимов работы.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">45 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Нагрузка до</span>
                  <div className="text-2xl font-bold">500 т</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_balki.jpg"
                alt="Подкрановые балки СМК Сталь"
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
              <SectionTitle>Типы подкрановых балок</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Прокатные</h4>
                  <p className="text-sm text-gray-300">До 20т грузоподъемности</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Составные сварные</h4>
                  <p className="text-sm text-gray-300">Для тяжелых кранов</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">С тормозными конструкциями</h4>
                  <p className="text-sm text-gray-300">Для тяжелых режимов</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Усиленные</h4>
                  <p className="text-sm text-gray-300">Для особо тяжелых кранов</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О подкрановых балках</h3>
                <p className="text-gray-200 mb-4">
                  Подкрановые балки — специальные несущие конструкции, по которым 
                  передвигаются мостовые краны. Они воспринимают вертикальные нагрузки 
                  от крана и груза, а также горизонтальные силы торможения и боковые.
                </p>
                <p className="text-gray-200">
                  Изготавливаем подкрановые балки по индивидуальным проектам с учетом 
                  режима работы крана, его грузоподъемности и пролета. Все изделия 
                  имеют крановые рельсы и тормозные конструкции.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать подкрановые балки</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-black-900/30">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-6 text-white">Нужны подкрановые балки?</h2>
            <p className="text-2xl text-gray-200 mb-8">
              Изготовим надежные балки для вашего мостового крана
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать балки
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 