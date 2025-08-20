import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Электросварной двутавр в СПб от 17000 руб/тн | СМК Сталь",
  description: "Изготовление электросварного двутавра в Санкт-Петербурге ⚡ Цены от 17000 руб/тн ⚡ Высота до 2000мм ⚡ По чертежам",
  keywords: [
    "электросварной двутавр",
    "двутавр спб", 
    "изготовление двутавра",
    "сварные балки",
    "двутавровые балки"
  ],
  openGraph: {
    title: "Электросварной двутавр в СПб | СМК Сталь", 
    description: "Изготовление электросварного двутавра от 17000 руб/тн. Высота до 2000мм.",
    images: [{ url: "/tilda/static_dvutavr.jpg", width: 1200, height: 630 }],
  },
};

export default function ElektrosvarnojDvutavrPage() {
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
            <li className="text-white">Электросварной двутавр</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Электросварной двутавр в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Производство электросварных двутавров нестандартных размеров 
                по индивидуальным чертежам. Высокое качество сварных швов.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">17 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Высота до</span>
                  <div className="text-2xl font-bold">2000 мм</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_dvutavr.jpg"
                alt="Электросварной двутавр СМК Сталь"
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
              <SectionTitle>Типы двутавровых балок</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Стандартные</h4>
                  <p className="text-sm text-gray-300">По ГОСТ 26020-83</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Усиленные</h4>
                  <p className="text-sm text-gray-300">С утолщенными полками</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Облегченные</h4>
                  <p className="text-sm text-gray-300">Со сниженным весом</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Специальные</h4>
                  <p className="text-sm text-gray-300">По индивидуальным размерам</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Об электросварном двутавре</h3>
                <p className="text-gray-200 mb-4">
                  Электросварной двутавр изготавливается путем сварки трех листов: 
                  стенки и двух полок. Это позволяет получить балки нестандартных 
                  размеров, которые невозможно изготовить прокаткой.
                </p>
                <p className="text-gray-200">
                  Используем автоматическую сварку под флюсом, что обеспечивает 
                  высокое качество сварных швов и стабильные геометрические размеры. 
                  Все изделия проходят контроль качества сварных соединений.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать двутавр</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужен двутавр?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Изготовим балки нестандартных размеров по вашим чертежам
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать двутавр
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 