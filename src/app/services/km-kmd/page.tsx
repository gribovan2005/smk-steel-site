import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Разработка КМ КМД в СПб | Проектирование металлоконструкций | СМК Сталь",
  description: "Разработка КМ КМД в Санкт-Петербурге ⚡ Рабочая документация ⚡ Проектирование металлоконструкций ⚡ По ГОСТ и СНиП ⚡ Допуски СРО",
  keywords: [
    "КМ КМД",
    "проектирование металлоконструкций",
    "КМ КМД спб",
    "рабочая документация",
    "чертежи металлоконструкций",
    "проект металлоконструкций"
  ],
  openGraph: {
    title: "Разработка КМ КМД в СПб | СМК Сталь",
    description: "Разработка КМ КМД и рабочей документации по металлоконструкциям. По ГОСТ и СНиП.",
    images: [{ url: "/tilda/static_km_kmd.jpg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Разработка КМ КМД",
  "description": "Разработка конструкций металлических и конструкций металлических деталировочных в Санкт-Петербурге",
  "provider": {
    "@type": "Organization", 
    "name": "СМК Сталь",
    "url": "https://smk-steel.ru"
  },
  "areaServed": {
    "@type": "City",
    "name": "Санкт-Петербург"
  }
};

export default function KmKmdPage() {
  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_5.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav className="bg-black/30 backdrop-blur py-4 relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-300 hover:text-white">Главная</Link></li>
            <li className="text-gray-500">→</li>
            <li><Link href="/#services" className="text-gray-300 hover:text-white">Услуги</Link></li>
            <li className="text-gray-500">→</li>
            <li className="text-white">Разработка КМ КМД</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Разработка КМ КМД в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Разработка конструкций металлических (КМ) и конструкций металлических 
                деталировочных (КМД). Рабочая документация по ГОСТ и СНиП.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">По нормам</span>
                  <div className="text-2xl font-bold">ГОСТ</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Допуски</span>
                  <div className="text-2xl font-bold">СРО</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_km_kmd.jpg"
                alt="Разработка КМ КМД СМК Сталь"
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
              <SectionTitle>Что входит в разработку</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Стадия КМ</h4>
                  <p className="text-sm text-gray-300">Чертежи общих видов, узлов, спецификации</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Стадия КМД</h4>
                  <p className="text-sm text-gray-300">Деталировочные чертежи, отправочные марки</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Расчеты прочности</h4>
                  <p className="text-sm text-gray-300">Статические расчеты конструкций</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">3D модели</h4>
                  <p className="text-sm text-gray-300">Трехмерное моделирование в САПР</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О проектировании</h3>
                <p className="text-gray-200 mb-4">
                  Наша команда проектировщиков имеет большой опыт разработки КМ и КМД 
                  для различных типов зданий и сооружений. Работаем в современных 
                  САПР системах с созданием 3D-моделей.
                </p>
                <p className="text-gray-200">
                  Вся документация разрабатывается строго по действующим ГОСТ, СНиП 
                  и техническим регламентам. Имеем допуски СРО на проектирование 
                  особо опасных и технически сложных объектов.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать проект</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-20 bg-black-900/30">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-6 text-white">Нужен проект КМ КМД?</h2>
            <p className="text-2xl text-gray-200 mb-8">
              Разработаем рабочую документацию в срок и по ГОСТу
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать проект
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 