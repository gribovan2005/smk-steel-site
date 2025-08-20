import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Дымовые трубы в СПб от 50000 руб/тн | СМК Сталь",
  description: "Изготовление металлических дымовых труб в Санкт-Петербурге ⚡ Цены от 50000 руб/тн ⚡ Высота до 100м ⚡ Стальные и ферромагнитные",
  keywords: [
    "дымовые трубы",
    "металлические дымовые трубы",
    "дымовые трубы спб",
    "промышленные трубы",
    "стальные трубы"
  ],
  openGraph: {
    title: "Дымовые трубы в СПб | СМК Сталь",
    description: "Изготовление металлических дымовых труб от 50000 руб/тн. Высота до 100м.",
    images: [{ url: "/tilda/static_dym_trub.jpg", width: 1200, height: 630 }],
  },
};

export default function DymovyeTrubyPage() {
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
            <li className="text-white">Дымовые трубы</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Дымовые трубы в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление металлических дымовых труб для промышленных предприятий. 
                Стальные конструкции большой высоты с теплоизоляцией.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">50 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Высота до</span>
                  <div className="text-2xl font-bold">100 м</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_dym_trub.jpg"
                alt="Дымовые трубы СМК Сталь"
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
              <SectionTitle>Типы дымовых труб</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Самонесущие</h4>
                  <p className="text-sm text-gray-300">До 100м высотой</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">С растяжками</h4>
                  <p className="text-sm text-gray-300">Сверхвысокие конструкции</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Футерованные</h4>
                  <p className="text-sm text-gray-300">С огнеупорной футеровкой</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Утепленные</h4>
                  <p className="text-sm text-gray-300">С теплоизоляцией</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О дымовых трубах</h3>
                <p className="text-gray-200 mb-4">
                  Металлические дымовые трубы используются для отвода продуктов сгорания 
                  от промышленных котлов, печей и других технологических установок. 
                  Обеспечивают необходимую тягу и рассеивание выбросов в атмосфере.
                </p>
                <p className="text-gray-200">
                  Изготавливаем дымовые трубы из жаростойкой стали с учетом температурных 
                  деформаций и сейсмических воздействий. Все конструкции рассчитываются 
                  на ветровые нагрузки и имеют молниезащиту.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать дымовую трубу</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-black-900/30">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-6 text-white">Нужна дымовая труба?</h2>
            <p className="text-2xl text-gray-200 mb-8">
              Изготовим надежную конструкцию для вашего предприятия
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать трубу
            </Button>
          </div>
        </Section>

      </main>
    </div>
  );
} 