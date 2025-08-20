import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";

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
  const testimonials = [
    {
      company: 'ООО "Новые Коммунальные Технологии"',
      text: 'Коллектив ООО "Новые Коммунальные Технологии" выражает свою признательность за плодотворное взаимовыгодное сотрудничество. Компания не раз доказывала свою благонадежность в качестве поставщика.',
      position: 'Технический директор',
      name: 'А.В. Петров'
    },
    {
      company: 'ООО "ТЕРРИКОН"',
      text: 'Рекомендуем производственную компанию ООО "СМК СТАЛЬ", как надежного партнера с высоким качеством сервиса и профессионализма. Выражаем огромную благодарность за предоставление услуг по металлообработке и производству металлоконструкций.',
      position: 'Генеральный директор',
      name: 'И.С. Смирнов'
    },
    {
      company: 'ООО "Залей пол"',
      text: 'ООО "Залей пол" выражает благодарность производственной компании ООО "СМК СТАЛЬ" за изготовление и покраску полимерно-порошковым покрытием колесоотбойников по нашим чертежам. Качество и оперативность поставки на высоте!',
      position: 'Коммерческий директор',
      name: 'М.А. Козлова'
    },
    {
      company: 'ООО "Новый дом в Луге"',
      text: 'ООО "Новый дом в Луге" выражает огромную благодарность ООО "СМК Сталь" за быстрое и качественное изготовление и монтаж металлических ограждений балконов.',
      position: 'Главный инженер',
      name: 'В.П. Николаев'
    }
  ];

  const majorClients = [
    { name: "ИКЕА", sector: "Торговля", projects: "Металлоконструкции торговых залов" },
    { name: "Газпром", sector: "Энергетика", projects: "Промышленное оборудование" },
    { name: "Лахта Центр", sector: "Строительство", projects: "Высотное строительство" },
    { name: "ОКЕЙ", sector: "Торговля", projects: "Сеть гипермаркетов" },
    { name: "ПСПбГМУ", sector: "Медицина", projects: "Купольные конструкции" },
    { name: "Северный поток", sector: "Энергетика", projects: "Инфраструктурные объекты" }
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
          <Link href="/" className="text-lg font-semibold tracking-wide px-3 py-1 rounded-lg border border-white/20 bg-black/40 backdrop-blur">
            СМК Сталь
          </Link>
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            ← На главную
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

          {/* Крупные клиенты */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-blue-300">Крупные клиенты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {majorClients.map((client) => (
                <div key={client.name} className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">{client.name}</h3>
                  <p className="text-sm text-blue-300 mb-2">{client.sector}</p>
                  <p className="text-sm text-gray-300">{client.projects}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Категории клиентов */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-green-300">Наши партнеры по отраслям</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientCategories.map((category, index) => (
                <div key={category.title} className="text-center">
                  <div className={`text-6xl mb-4 ${index === 0 ? '' : index === 1 ? '' : index === 2 ? '' : ''}`}>
                    {index === 0 ? '🏗️' : index === 1 ? '🏭' : index === 2 ? '🛒' : '🏛️'}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{
                    color: index === 0 ? '#60a5fa' : index === 1 ? '#34d399' : index === 2 ? '#fb7185' : '#a78bfa'
                  }}>{category.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{category.description}</p>
                  <div className="text-lg font-bold text-orange-400">{category.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Отзывы клиентов */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-orange-300">Отзывы наших клиентов</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.company} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">{testimonial.company}</h3>
                    <p className="text-gray-300 text-sm italic leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">{testimonial.position}</span>
                    <span className="text-white font-medium">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Почему нас выбирают */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-purple-300">Почему нас выбирают</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-300">Соблюдение сроков</h3>
                <p className="text-sm text-gray-300">100% проектов сдано в оговоренные сроки за последние 3 года</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-3 text-blue-300">Высокое качество</h3>
                <p className="text-sm text-gray-300">Строгий контроль качества на всех этапах производства</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold mb-3 text-green-300">Конкурентные цены</h3>
                <p className="text-sm text-gray-300">Прямое производство без посредников обеспечивает лучшие цены</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold mb-3 text-orange-300">Полный цикл</h3>
                <p className="text-sm text-gray-300">От проектирования до монтажа - все услуги в одном месте</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-semibold mb-3 text-pink-300">Опытная команда</h3>
                <p className="text-sm text-gray-300">Квалифицированные специалисты с опытом работы более 10 лет</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-white/10 bg-black/20">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold mb-3 text-indigo-300">Все допуски</h3>
                <p className="text-sm text-gray-300">Полный пакет разрешительных документов и допусков СРО</p>
              </div>
            </div>
          </div>

          {/* CTA для новых клиентов */}
          <div className="rounded-xl border border-white/10 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Станьте нашим клиентом!</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Присоединяйтесь к числу наших довольных клиентов. Получите персональное коммерческое предложение уже сегодня
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+79219472911" 
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Стать клиентом
              </a>
              <a 
                href="mailto:zakaz@smksteel-spb.ru" 
                className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Получить КП
              </a>
              <Link href="/" className="btn-outline">
                На главную
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} СМК Сталь
        </div>
      </footer>
    </div>
  );
} 