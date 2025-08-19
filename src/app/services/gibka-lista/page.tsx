import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Гибка листа до 8мм в СПб от 50 руб/гиб | СМК Сталь",
  description: "Гибка листового металла в Санкт-Петербурге ⚡ Цены от 50 руб/гиб ⚡ Толщина до 8мм ⚡ Длина до 3000мм ⚡ Высокая точность",
  keywords: [
    "гибка листа",
    "гибка металла спб",
    "гибка листового металла",
    "листогиб санкт петербург",
    "гибка листа цена",
    "гибочные работы"
  ],
  openGraph: {
    title: "Гибка листа до 8мм в СПб | СМК Сталь",
    description: "Гибка листового металла от 50 руб/гиб. Толщина до 8мм, высокая точность.",
    images: [{ url: "/tilda/static_gibka_lista.jpg", width: 1200, height: 630 }],
  },
};

export default function GibkaListaPage() {
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
            <li className="text-white">Гибка листа до 8мм</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Гибка листового металла в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Гибка листового металла до 8мм на современном оборудовании. 
                Высокая точность, быстрые сроки выполнения.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">50 ₽/гиб</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Толщина до</span>
                  <div className="text-2xl font-bold">8 мм</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_gibka_lista.jpg"
                alt="Гибка листа СМК Сталь"
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
              <SectionTitle>Возможности гибки</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Углы гибки</h4>
                  <p className="text-sm text-gray-300">От 30° до 165°, точность ±1°</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Длина заготовки</h4>
                  <p className="text-sm text-gray-300">До 3000мм за один проход</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Материалы</h4>
                  <p className="text-sm text-gray-300">Сталь, нержавейка, алюминий</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Сложные профили</h4>
                  <p className="text-sm text-gray-300">Многогибочные операции</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О гибке листового металла</h3>
                <p className="text-gray-200 mb-4">
                  Гибка листового металла — это операция деформирования заготовки 
                  для получения изделия нужной формы и размеров. Наше оборудование 
                  позволяет выполнять как простые, так и сложные многогибочные операции.
                </p>
                <p className="text-gray-200">
                  Используем современные листогибочные прессы с ЧПУ, что обеспечивает 
                  высокую точность и повторяемость углов гибки. Изготавливаем детали 
                  для вентиляции, кровли, фасадов и других конструкций.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать гибку</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужна гибка листа?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Изготовим детали по вашим чертежам с высокой точностью
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать гибку
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 