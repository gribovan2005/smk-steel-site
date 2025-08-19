import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Приварка статичных болтов в СПб от 400 руб/шт | СМК Сталь",
  description: "Приварка статичных болтов в Санкт-Петербурге ⚡ От 400 руб/шт + выезд ⚡ На объекте заказчика ⚡ Опытные сварщики ⚡ Контроль качества",
  keywords: [
    "приварка болтов",
    "статичные болты",
    "приварка болтов спб",
    "сварка болтов на объекте",
    "анкерные болты"
  ],
  openGraph: {
    title: "Приварка статичных болтов в СПб | СМК Сталь",
    description: "Приварка статичных болтов от 400 руб/шт. Выезд на объект заказчика.",
    images: [{ url: "/tilda/static_privarka_boltov.jpeg", width: 1200, height: 630 }],
  },
};

export default function PrivarkaStatichnyhBoltovPage() {
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
            <li className="text-white">Приварка статичных болтов</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Приварка статичных болтов в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Услуги по приварке статичных болтов на объекте заказчика. 
                Опытные сварщики с выездом и всем необходимым оборудованием.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">400 ₽/шт</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Диаметр до</span>
                  <div className="text-2xl font-bold">М36</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_privarka_boltov.jpeg"
                alt="Приварка статичных болтов СМК Сталь"
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
              <SectionTitle>Виды работ по приварке</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Анкерные болты</h4>
                  <p className="text-sm text-gray-300">Для крепления оборудования</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Крепежные элементы</h4>
                  <p className="text-sm text-gray-300">Различного назначения</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Опорные элементы</h4>
                  <p className="text-sm text-gray-300">Для металлоконструкций</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Контроль качества</h4>
                  <p className="text-sm text-gray-300">УЗК и внешний осмотр</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О приварке статичных болтов</h3>
                <p className="text-gray-200 mb-4">
                  Приварка статичных болтов — специальная сварочная операция для 
                  создания неразъемного соединения болта с металлической конструкцией. 
                  Выполняется на объекте заказчика аттестованными сварщиками.
                </p>
                <p className="text-gray-200">
                  Используем специальные сварочные пистолеты и электроды для приварки. 
                  Все работы выполняются согласно технологическим картам с обязательным 
                  контролем качества сварных соединений.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать приварку</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужна приварка болтов?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Выполним работы на вашем объекте качественно и в срок
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Вызвать сварщиков
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 