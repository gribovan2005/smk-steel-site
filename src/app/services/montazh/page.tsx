import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Монтаж металлоконструкций в СПб | СМК Сталь",
  description: "Монтаж металлоконструкций в Санкт-Петербурге ⚡ Все допуски СРО ⚡ Опытные монтажники ⚡ Гарантия качества ⚡ Работаем с 2013 года",
  keywords: [
    "монтаж металлоконструкций",
    "монтаж металлоконструкций спб",
    "монтажные работы санкт петербург",
    "монтаж зданий",
    "монтаж каркасов",
    "СРО монтаж"
  ],
  openGraph: {
    title: "Монтаж металлоконструкций в СПб | СМК Сталь",
    description: "Профессиональный монтаж металлоконструкций. Все допуски СРО, опытные монтажники.",
    images: [{ url: "/tilda/static_montazh.jpg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Монтаж металлоконструкций",
  "description": "Монтаж металлоконструкций любой сложности с допусками СРО в Санкт-Петербурге",
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

export default function MontazhPage() {
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
            <li className="text-white">Монтажные работы</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Монтаж металлоконструкций в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Профессиональный монтаж зданий и металлоконструкций любой сложности. 
                Все допуски СРО. Опыт работы с 2013 года.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Опыт</span>
                  <div className="text-2xl font-bold">10+ лет</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Допуски</span>
                  <div className="text-2xl font-bold">СРО</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_montazh.jpg"
                alt="Монтаж металлоконструкций СМК Сталь"
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
              <SectionTitle>Виды монтажных работ</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Каркасы зданий</h4>
                  <p className="text-sm text-gray-300">Промышленные и гражданские объекты</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Технологические конструкции</h4>
                  <p className="text-sm text-gray-300">Эстакады, площадки, ограждения</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Кровельные работы</h4>
                  <p className="text-sm text-gray-300">Монтаж стропильных систем</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Антикоррозийная защита</h4>
                  <p className="text-sm text-gray-300">Грунтовка и окраска конструкций</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О наших монтажных работах</h3>
                <p className="text-gray-200 mb-4">
                  Наша компания выполняет полный комплекс монтажных работ — от легких 
                  каркасных зданий до сложных промышленных объектов. Работаем с 
                  собственным автопарком спецтехники и опытной бригадой монтажников.
                </p>
                <p className="text-gray-200">
                  Имеем все необходимые допуски СРО, страхование ответственности. 
                  Выполняем работы строго по проекту с соблюдением всех требований 
                  безопасности и нормативов.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать монтаж</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужен монтаж?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Выполним монтажные работы быстро и качественно
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать монтаж
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 