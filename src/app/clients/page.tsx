import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Наши клиенты - СМК Сталь | Отзывы и рекомендации",
  description: "Клиенты СМК Сталь - ведущие компании Санкт-Петербурга и России. Отзывы о качестве работ и соблюдении сроков изготовления металлоконструкций.",
  keywords: [
    "клиенты СМК Сталь",
    "отзывы о СМК Сталь", 
    "рекомендации металлоконструкции",
    "партнеры СМК Сталь",
    "референс лист"
  ],
  openGraph: {
    title: "Наши клиенты - СМК Сталь",
    description: "Отзывы клиентов и партнеров о работе с СМК Сталь.",
    images: [{ url: "/welding_5.jpg", width: 1200, height: 630 }],
  },
};

export default function ClientsPage() {

  // Реальные клиенты с логотипами с главной страницы
  const clientLogos = [
    "/tilda/static_company_1.jpg",
    "/tilda/static_company_2.jpg", 
    "/tilda/static_company_3.jpg",
    "/tilda/static_company_4.jpg",
    "/tilda/static_company_5.png",
    "/tilda/static_company_6.jpg",
    "/tilda/static_company_7.jpg",
    "/tilda/static_company_8.jpg",
  ];

  const clientCategories = [
    {
      title: "Строительные компании",
      description: "Генеральные подрядчики и застройщики",
      count: "45+"
    },
    {
      title: "Промышленные предприятия",
      description: "Заводы и производственные комплексы", 
      count: "30+"
    },
    {
      title: "Торговые сети",
      description: "Ритейл и коммерческая недвижимость",
      count: "25+"
    },
    {
      title: "Государственные организации",
      description: "Бюджетные и муниципальные заказы",
      count: "20+"
    }
  ];

  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_5.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      <header className="relative z-30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/static_smk_steel.png"
              alt="СМК Сталь — Производство металлоконструкций"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            ← <span className="hidden sm:inline">На главную</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Наши клиенты</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-shadow text-lg">
              Более 10 лет мы работаем с ведущими компаниями России, обеспечивая высокое качество и соблюдение сроков
            </p>
          </div>

          {/* Статистика клиентов */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-sm text-gray-300">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">повторных заказов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">соблюдение сроков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">10 лет</div>
              <div className="text-sm text-gray-300">средний срок сотрудничества</div>
            </div>
          </div>

          {/* Логотипы клиентов */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Наши клиенты</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <div key={index} className="relative h-24 sm:h-32 w-full flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Клиент ${index + 1}`}
                    fill
                    className="object-contain transition-all duration-300 opacity-90 hover:opacity-100 filter"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Категории клиентов */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Наши партнеры по отраслям</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientCategories.map((category, index) => (
                <div key={category.title} className="text-center">
                  <div className={`text-6xl mb-4 ${index === 0 ? '' : index === 1 ? '' : index === 2 ? '' : ''}`}>
                    {index === 0 ? '🏗️' : index === 1 ? '🏭' : index === 2 ? '🛒' : '🏛️'}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{category.description}</p>
                  <div className="text-lg font-bold text-orange-400">{category.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Почему нас выбирают */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Почему нас выбирают</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-3">Соблюдение сроков</h3>
                <p className="text-sm text-gray-300">100% проектов сдано в оговоренные сроки за последние 3 года</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-3">Высокое качество</h3>
                <p className="text-sm text-gray-300">Строгий контроль качества на всех этапах производства</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold mb-3">Конкурентные цены</h3>
                <p className="text-sm text-gray-300">Прямое производство без посредников обеспечивает лучшие цены</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold mb-3">Полный цикл</h3>
                <p className="text-sm text-gray-300">От проектирования до монтажа - все услуги в одном месте</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-semibold mb-3">Опытная команда</h3>
                <p className="text-sm text-gray-300">Квалифицированные специалисты с опытом работы более 10 лет</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold mb-3">Все допуски</h3>
                <p className="text-sm text-gray-300">Полный пакет разрешительных документов и допусков СРО</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="btn-outline">
              На главную
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
} 