import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Вальцовка обечаек в СПб от 15000 руб/тн | СМК Сталь",
  description: "Вальцовка обечаек в Санкт-Петербурге ⚡ Цены от 15000 руб/тн ⚡ Диаметр до 4000мм ⚡ Толщина до 50мм ⚡ Высокое качество",
  keywords: [
    "вальцовка обечаек",
    "вальцовка обечаек спб",
    "изготовление обечаек",
    "обечайки металлические",
    "вальцевание металла",
    "цилиндрические обечайки"
  ],
  openGraph: {
    title: "Вальцовка обечаек в СПб | СМК Сталь",
    description: "Вальцовка обечаек от 15000 руб/тн. Диаметр до 4000мм, высокое качество.",
    images: [{ url: "/tilda/static_valzovka_obechaek.jpg", width: 1200, height: 630 }],
  },
};

export default function ValtsovkaObechaekPage() {
  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_2.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Breadcrumbs */}
      <nav className="bg-black/30 backdrop-blur py-4 relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-300 hover:text-white">Главная</Link></li>
            <li className="text-gray-500">→</li>
            <li><Link href="/#services" className="text-gray-300 hover:text-white">Услуги</Link></li>
            <li className="text-gray-500">→</li>
            <li className="text-white">Вальцовка обечаек</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Вальцовка обечаек в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление цилиндрических обечаек любого диаметра методом вальцовки. 
                Высокое качество геометрии и точность размеров.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">15 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Диаметр до</span>
                  <div className="text-2xl font-bold">4000 мм</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_valzovka_obechaek.jpg"
                alt="Вальцовка обечаек СМК Сталь"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </Section>

        {/* Details Section */}
        <Section className="py-16 bg-black/30 backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionTitle>Типы обечаек</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Гладкие обечайки</h4>
                  <p className="text-sm text-gray-300">Для резервуаров и емкостей</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">С отбортовкой</h4>
                  <p className="text-sm text-gray-300">Для фланцевых соединений</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Конические</h4>
                  <p className="text-sm text-gray-300">Переходные участки трубопроводов</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">С ребрами жесткости</h4>
                  <p className="text-sm text-gray-300">Усиленные конструкции</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О вальцовке</h3>
                <p className="text-gray-200 mb-4">
                  Вальцовка — это процесс придания листовому металлу цилиндрической формы 
                  с помощью специального оборудования. Наши вальцы позволяют обрабатывать 
                  листы толщиной до 50мм с высокой точностью.
                </p>
                <p className="text-gray-200">
                  Изготавливаем обечайки для нефтегазовой промышленности, машиностроения, 
                  энергетики. Все изделия проходят контроль качества и соответствуют 
                  требованиям ГОСТ.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать вальцовку</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужны обечайки?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Изготовим обечайки любого диаметра с гарантией качества
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать вальцовку
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 