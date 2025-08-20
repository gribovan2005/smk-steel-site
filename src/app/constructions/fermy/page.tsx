import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Изготовление металлических ферм в СПб от 25000 руб/тн | СМК Сталь",
  description: "Производство металлических ферм в Санкт-Петербурге ⚡ Цены от 25000 руб/тн ⚡ Допуски СРО ⚡ Доставка и монтаж ⚡ Опыт с 2013 года",
  keywords: [
    "фермы металлические",
    "изготовление ферм спб", 
    "производство ферм санкт петербург",
    "металлические фермы цена",
    "стропильные фермы",
    "фермы покрытия"
  ],
  openGraph: {
    title: "Изготовление металлических ферм в СПб | СМК Сталь",
    description: "Производство металлических ферм от 25000 руб/тн. Допуски СРО, доставка и монтаж.",
    images: [{ url: "/tilda/static_ferm.jpg", width: 1200, height: 630 }],
  },
};

export default function FermyPage() {
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
            <li className="text-white">Металлические фермы</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Изготовление металлических ферм в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Производство металлических ферм любой сложности для промышленных 
                и гражданских объектов. Цены от 25000 руб/тн. Допуски СРО.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">25 000 ₽/тн</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Пролет до</span>
                  <div className="text-2xl font-bold">48 м</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_ferm.jpg"
                alt="Металлические фермы СМК Сталь"
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
              <SectionTitle>Типы металлических ферм</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Стропильные фермы</h4>
                  <p className="text-sm text-gray-300">Для скатных кровель пролетом до 36м</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Подстропильные фермы</h4>
                  <p className="text-sm text-gray-300">Опоры для стропильных конструкций</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Фермы покрытия</h4>
                  <p className="text-sm text-gray-300">Для плоских кровель больших пролетов</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Арочные фермы</h4>
                  <p className="text-sm text-gray-300">Для ангаров и спортивных сооружений</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Описание услуги</h3>
                <p className="text-gray-200 mb-4">
                  Металлические фермы — это несущие конструкции, состоящие из стержней, 
                  соединенных в узлах и образующих геометрически неизменяемую систему. 
                  Они являются основой для кровельных покрытий промышленных зданий, 
                  торговых центров, спортивных сооружений и других объектов.
                </p>
                <p className="text-gray-200">
                  Наша компания изготавливает фермы различных типов: треугольные, 
                  трапециевидные, полигональные, арочные и специальные конструкции 
                  по индивидуальным проектам. Используем только качественную сталь 
                  с соблюдением всех требований ГОСТ и СНиП.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Получить расчет стоимости</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="ppy-20 bg-blue-900/30 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужны металлические фермы?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Изготовим по вашим чертежам или разработаем проект
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Получить расчет
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 