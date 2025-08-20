import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Прогоны и балки покрытия в СПб от 18000 руб/тн | СМК Сталь",
  description: "Изготовление прогонов и балок покрытия в Санкт-Петербурге ⚡ Цены от 18000 руб/тн ⚡ По проекту ⚡ Доставка и монтаж",
  keywords: [
    "прогоны",
    "балки покрытия",
    "прогоны спб",
    "балки покрытия санкт петербург",
    "изготовление прогонов"
  ],
  openGraph: {
    title: "Прогоны и балки покрытия в СПб | СМК Сталь",
    description: "Изготовление прогонов и балок покрытия от 18000 руб/тн. По проекту.",
    images: [{ url: "/tilda/static_progonie.jpg", width: 1200, height: 630 }],
  },
};

export default function ProgonyBalkiPokrytiyaPage() {
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
            <li className="text-white">Прогоны, балки покрытия</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Прогоны и балки покрытия в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление прогонов и балок покрытия для промышленных зданий 
                и кровельных систем. Надежные несущие элементы по проекту.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">18 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Пролет до</span>
                  <div className="text-2xl font-bold">12 м</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_progonie.jpg"
                alt="Прогоны балки покрытия СМК Сталь"
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
              <SectionTitle>Типы прогонов и балок</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Прогоны покрытия</h4>
                  <p className="text-sm text-gray-300">Из двутавра и швеллера</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Балки покрытия</h4>
                  <p className="text-sm text-gray-300">Составные и цельные</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Настил кровли</h4>
                  <p className="text-sm text-gray-300">Профнастил и сэндвич-панели</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Крепежные элементы</h4>
                  <p className="text-sm text-gray-300">Кронштейны и опорные узлы</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О прогонах и балках покрытия</h3>
                <p className="text-gray-200 mb-4">
                  Прогоны и балки покрытия — это несущие элементы кровельной системы, 
                  которые передают нагрузки от настила кровли на главные несущие конструкции. 
                  Проектируются с учетом снеговых и ветровых нагрузок.
                </p>
                <p className="text-gray-200">
                  Изготавливаем прогоны из стандартного и специального профиля, 
                  а также составные балки покрытия больших пролетов. Вся продукция 
                  соответствует требованиям СНиП и имеет антикоррозийную защиту.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать прогоны</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-blue-900/30 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Нужны прогоны и балки?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Изготовим надежные несущие элементы по вашему проекту
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Получить расчет
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 