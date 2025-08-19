import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Емкости и резервуары в СПб от 50000 руб/тн | СМК Сталь",
  description: "Изготовление металлических емкостей и резервуаров в Санкт-Петербурге ⚡ Цены от 50000 руб/тн ⚡ Объем до 10000м³ ⚡ По техзаданию",
  keywords: [
    "металлические емкости",
    "резервуары",
    "емкости спб",
    "стальные резервуары",
    "промышленные емкости"
  ],
  openGraph: {
    title: "Емкости и резервуары в СПб | СМК Сталь",
    description: "Изготовление металлических емкостей и резервуаров от 50000 руб/тн. Объем до 10000м³.",
    images: [{ url: "/tilda/static_emkosti.jpg", width: 1200, height: 630 }],
  },
};

export default function EmkostiRezvaryPage() {
  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_2.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      <nav className="bg-black/30 backdrop-blur py-4 relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-300 hover:text-white">Главная</Link></li>
            <li className="text-gray-500">→</li>
            <li><Link href="/#constructions" className="text-gray-300 hover:text-white">Конструкции</Link></li>
            <li className="text-gray-500">→</li>
            <li className="text-white">Емкости и резервуары</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Емкости и резервуары в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление металлических емкостей и резервуаров различного назначения. 
                Цилиндрические, прямоугольные и специальных форм.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">50 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Объем до</span>
                  <div className="text-2xl font-bold">10 000 м³</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_emkosti.jpg"
                alt="Емкости и резервуары СМК Сталь"
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
              <SectionTitle>Типы емкостей и резервуаров</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Вертикальные</h4>
                  <p className="text-sm text-gray-300">Цилиндрические резервуары</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Горизонтальные</h4>
                  <p className="text-sm text-gray-300">На опорах и седловинах</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Прямоугольные</h4>
                  <p className="text-sm text-gray-300">Для специальных жидкостей</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">С подогревом</h4>
                  <p className="text-sm text-gray-300">Для вязких продуктов</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О емкостях и резервуарах</h3>
                <p className="text-gray-200 mb-4">
                  Металлические емкости и резервуары используются для хранения 
                  жидкостей, сыпучих материалов и газов в промышленности, 
                  нефтехимии, пищевой и других отраслях.
                </p>
                <p className="text-gray-200">
                  Изготавливаем сосуды под давлением и без давления в соответствии 
                  с ТР ТС 032/2013 и правилами Ростехнадзора. Все изделия проходят 
                  гидроиспытания и имеют паспорта сосудов.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать емкости</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужны емкости или резервуары?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Изготовим сосуды любого назначения по техзаданию
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать емкости
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 