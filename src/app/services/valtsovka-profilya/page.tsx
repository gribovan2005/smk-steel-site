import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, SectionTitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Вальцовка профиля в СПб от 2000 руб/пм | СМК Сталь",
  description: "Вальцовка профиля в Санкт-Петербурге ⚡ Цены от 2000 руб/пм ⚡ Различные профили ⚡ Радиус до 500мм ⚡ Без сварки стыков",
  keywords: [
    "вальцовка профиля",
    "вальцовка профиля спб", 
    "изготовление арок",
    "гнутый профиль",
    "вальцевание профиля",
    "радиусные конструкции"
  ],
  openGraph: {
    title: "Вальцовка профиля в СПб | СМК Сталь",
    description: "Вальцовка профиля от 2000 руб/пм. Радиус до 500мм, без сварки стыков.",
    images: [{ url: "/tilda/static_valzovka_profile.png", width: 1200, height: 630 }],
  },
};

export default function ValtsovkaProfilyaPage() {
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
            <li><Link href="/#services" className="text-gray-300 hover:text-white">Услуги</Link></li>
            <li className="text-gray-500">→</li>
            <li className="text-white">Вальцовка профиля</li>
          </ol>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Вальцовка профиля в Санкт-Петербурге
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Изготовление гнутых профилей и арочных конструкций. 
                Быстрый и недорогой способ создания изделия нужной формы.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Цена от</span>
                  <div className="text-2xl font-bold">2000 ₽/пм</div>
                </div>
                <div className="bg-black/30 backdrop-blur px-4 py-2 rounded-lg border border-white/10">
                  <span className="text-sm text-gray-300">Радиус до</span>
                  <div className="text-2xl font-bold">500 мм</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tilda/static_valzovka_profile.png"
                alt="Вальцовка профиля СМК Сталь"
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
              <SectionTitle>Типы профилей</SectionTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Уголок</h4>
                  <p className="text-sm text-gray-300">Равнополочный и неравнополочный</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Швеллер</h4>
                  <p className="text-sm text-gray-300">Стандартный и специальный</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Профильная труба</h4>
                  <p className="text-sm text-gray-300">Квадратная и прямоугольная</p>
                </div>
                <div className="bg-black/30 backdrop-blur p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Круглая труба</h4>
                  <p className="text-sm text-gray-300">Различных диаметров</p>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">О вальцовке профиля</h3>
                <p className="text-gray-200 mb-4">
                  Вальцовка профиля — это быстрый и недорогой способ создания 
                  изделия нужной формы без необходимости сварки стыка. Метод позволяет 
                  получить радиусные элементы высокого качества.
                </p>
                <p className="text-gray-200">
                  Используется для изготовления арочных конструкций, элементов декора, 
                  каркасов теплиц и навесов. Наше оборудование позволяет вальцевать 
                  профили различных сечений с минимальными радиусами изгиба.
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur p-6 rounded-xl border border-white/10 h-fit">
              <h3 className="text-xl font-semibold mb-4">Заказать вальцовку</h3>
              <LeadForm />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Нужна вальцовка профиля?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Изготовим арочные конструкции без сварных швов
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Заказать вальцовку
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
} 