import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Балки перекрытий в СПб от 18000 руб/тн | СМК Сталь",
  description: "Изготовление балок перекрытий в Санкт-Петербурге ⚡ Цены от 18000 руб/тн ⚡ Высота до 2000мм ⚡ По проекту ⚡ Доставка и монтаж",
  keywords: [
    "балки перекрытий",
    "балки перекрытий спб",
    "изготовление балок перекрытий",
    "металлические балки перекрытий",
    "балки для перекрытий",
    "балки перекрытий цена"
  ],
  openGraph: {
    title: "Балки перекрытий в СПб | СМК Сталь",
    description: "Изготовление балок перекрытий от 18000 руб/тн. Высота до 2000мм, по проекту.",
    images: [{ url: "/tilda/static_balki_perekrytia.jpg", width: 1200, height: 630 }],
  },
};

export default function BalkiPerekrytijPage() {
  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_5.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Breadcrumbs */}
      <nav className="bg-black/30 backdrop-blur py-4 relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-300 hover:text-white">Главная</Link></li>
            <li className="text-gray-500">→</li>
            <li><Link href="/#constructions" className="text-gray-300 hover:text-white">Конструкции</Link></li>
            <li className="text-gray-500">→</li>
            <li className="text-white">Балки перекрытий</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Балки перекрытий в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление балок перекрытий для многоэтажных зданий и промышленных 
                объектов. Электросварные двутавры любых размеров по проекту.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">18 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Высота до</span>
                  <div className="text-2xl font-bold">2000 мм</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_balki_perekrytia.jpg"
                alt="Балки перекрытий СМК Сталь"
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
              <SectionTitle>Типы балок перекрытий</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Главные балки</h4>
                  <p className="text-sm text-gray-300">Основные несущие элементы перекрытий</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Второстепенные балки</h4>
                  <p className="text-sm text-gray-300">Дополнительные элементы каркаса</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Монолитные балки</h4>
                  <p className="text-sm text-gray-300">Для работы с бетоном</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Сборные балки</h4>
                  <p className="text-sm text-gray-300">Для сборных перекрытий</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О балках перекрытий</h3>
                <p className="text-gray-200 mb-4">
                  Балки перекрытий — основные несущие элементы каркаса здания, которые 
                  воспринимают нагрузки от перекрытий и передают их на колонны и стены. 
                  Мы изготавливаем балки различных типов и сечений в зависимости от 
                  конструктивной схемы здания.
                </p>
                <p className="text-gray-200">
                  Все балки изготавливаются строго по проекту с учетом всех нагрузок 
                  и требований к прочности. Используем автоматическую сварку, что 
                  обеспечивает высокое качество сварных швов и геометрическую точность.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать балки перекрытий</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-20 bg-black-900/30">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-6 text-white">Нужны балки перекрытий?</h2>
            <p className="text-2xl text-gray-200 mb-8">
              Изготовим балки по вашему проекту с гарантией качества
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