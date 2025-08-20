import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Закладные изделия в СПб от 45000 руб/тн | СМК Сталь",
  description: "Изготовление закладных изделий в Санкт-Петербурге ⚡ Цены от 45000 руб/тн ⚡ Для железобетонных конструкций ⚡ По ГОСТ",
  keywords: [
    "закладные изделия",
    "закладные детали", 
    "закладные элементы спб",
    "закладные для ЖБ",
    "анкерные пластины"
  ],
  openGraph: {
    title: "Закладные изделия в СПб | СМК Сталь",
    description: "Изготовление закладных изделий от 45000 руб/тн. Для железобетонных конструкций.",
    images: [{ url: "/tilda/static_zakladnie.jpg", width: 1200, height: 630 }],
  },
};

export default function ZakladnyeIzdeliyaPage() {
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
            <li className="text-white">Закладные изделия</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Закладные изделия в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление закладных изделий для железобетонных конструкций. 
                Анкерные пластины, закладные детали по ГОСТ и проекту.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">45 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">По стандарту</span>
                  <div className="text-2xl font-bold">ГОСТ</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_zakladnie.jpg"
                alt="Закладные изделия СМК Сталь"
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
              <SectionTitle>Типы закладных изделий</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Анкерные пластины</h4>
                  <p className="text-sm text-gray-300">Для крепления колонн</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Закладные детали</h4>
                  <p className="text-sm text-gray-300">Для крепления оборудования</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Консоли и опоры</h4>
                  <p className="text-sm text-gray-300">Для балок и прогонов</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Анкерные болты</h4>
                  <p className="text-sm text-gray-300">Изогнутые и прямые</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О закладных изделиях</h3>
                <p className="text-gray-200 mb-4">
                  Закладные изделия — металлические элементы, которые закладываются 
                  в железобетонные конструкции при их изготовлении для последующего 
                  крепления металлических конструкций, оборудования или других элементов.
                </p>
                <p className="text-gray-200">
                  Изготавливаем все типы закладных изделий в строгом соответствии 
                  с ГОСТ 23279-2012. Используем качественную сталь с обязательной 
                  антикоррозийной обработкой. Все изделия проходят входной контроль.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать закладные</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужны закладные изделия?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Изготовим закладные детали по ГОСТ и проекту
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать закладные
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 