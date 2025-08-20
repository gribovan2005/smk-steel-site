import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";

export const metadata: Metadata = {
  title: "Наши работы - СМК Сталь | Портфолио выполненных проектов",
  description: "Портфолио работ СМК Сталь. Примеры выполненных проектов металлоконструкций: торговые центры, промышленные объекты, жилые комплексы.",
  keywords: [
    "работы СМК Сталь",
    "портфолио металлоконструкций",
    "примеры работ",
    "проекты металлоконструкций",
    "выполненные заказы"
  ],
  openGraph: {
    title: "Наши работы - СМК Сталь",
    description: "Портфолио выполненных проектов металлоконструкций различной сложности.",
    images: [{ url: "/welding_5.jpg", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  const projectCategories = [
    {
      title: "Торговые и общественные объекты",
      projects: [
        {
          name: "Торговый центр МЕГА",
          description: "Металлические конструкции кровли и фасада",
          specs: ["Площадь: 45 000 м²", "Вес металла: 850 тонн", "Срок: 6 месяцев"],
          image: "/orders/ok_msk.jpeg"
        },
        {
          name: "Школа №607 в Пушкине",
          description: "Металлокаркас здания и благоустройство территории", 
          specs: ["Этажность: 3 этажа", "Вес металла: 320 тонн", "Срок: 4 месяца"],
          image: "/orders/school.jpeg"
        }
      ]
    },
    {
      title: "Промышленные объекты",
      projects: [
        {
          name: "Производственное здание",
          description: "Металлокаркас производственного корпуса",
          specs: ["Пролет: 24 метра", "Вес металла: 450 тонн", "Срок: 5 месяцев"],
          image: "/orders/medecine.jpg"
        },
        {
          name: "Складской комплекс",
          description: "Быстровозводимое здание склада",
          specs: ["Площадь: 12 000 м²", "Высота: 12 метров", "Срок: 3 месяца"],
          image: "/orders/ok_rust.webp"
        }
      ]
    },
    {
      title: "Жилые комплексы",
      projects: [
        {
          name: "ЖК «Европа Сити»",
          description: "Металлические конструкции паркингов и входных групп",
          specs: ["Количество секций: 8", "Вес металла: 180 тонн", "Срок: 3 месяца"],
          image: "/orders/ok_nauka.jpeg"
        },
        {
          name: "ЖК «Новый Оккервиль»",
          description: "Ограждения, лестницы и балконные конструкции",
          specs: ["Квартир: 1200", "Протяженность: 2,5 км", "Срок: 4 месяца"],
          image: "/orders/ok_balkan.jpeg"
        }
      ]
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Наши работы</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-shadow text-lg">
              Портфолио выполненных проектов различной сложности — от небольших конструкций до масштабных промышленных объектов
            </p>
          </div>

          {/* Статистика проектов */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-sm text-gray-300">выполненных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">50 000</div>
              <div className="text-sm text-gray-300">тонн изготовленного металла</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">2 млн</div>
              <div className="text-sm text-gray-300">м² построенных объектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">проектов сданы в срок</div>
            </div>
          </div>

          {/* Категории проектов */}
          {projectCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center" style={{
                color: categoryIndex === 0 ? '#60a5fa' : categoryIndex === 1 ? '#34d399' : '#fb7185'
              }}>
                {category.title}
              </h2>
              <div className="grid gap-8">
                {category.projects.map((project, projectIndex) => (
                  <div key={project.name} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur overflow-hidden">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8`}>
                      <div className={`${projectIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="relative h-64 lg:h-full">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                      <div className={`p-8 ${projectIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h3 className="text-2xl font-bold mb-4" style={{
                          color: categoryIndex === 0 ? '#60a5fa' : categoryIndex === 1 ? '#34d399' : '#fb7185'
                        }}>{project.name}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-orange-300">Основные параметры:</h4>
                          <ul className="space-y-2">
                            {project.specs.map((spec, specIndex) => (
                              <li key={specIndex} className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                                <span className="text-sm">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Наши возможности */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-yellow-300">Наши возможности</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Промышленное строительство</h3>
                <p className="text-sm text-gray-300">Заводские корпуса, склады, цеха любой сложности</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold mb-3 text-green-300">Коммерческие объекты</h3>
                <p className="text-sm text-gray-300">Торговые центры, офисные здания, общественные сооружения</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-xl font-semibold mb-3 text-orange-300">Жилое строительство</h3>
                <p className="text-sm text-gray-300">Металлокаркасы жилых домов, паркинги, инфраструктура</p>
              </div>
            </div>
          </div>

          {/* Этапы работы */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-purple-300">Этапы выполнения проектов</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
                <h3 className="font-semibold mb-2">Проектирование</h3>
                <p className="text-sm text-gray-300">Разработка КМ/КМД по техническому заданию</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
                <h3 className="font-semibold mb-2">Изготовление</h3>
                <p className="text-sm text-gray-300">Производство конструкций на собственном заводе</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
                <h3 className="font-semibold mb-2">Доставка</h3>
                <p className="text-sm text-gray-300">Транспортировка на объект в указанные сроки</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">4</div>
                <h3 className="font-semibold mb-2">Монтаж</h3>
                <p className="text-sm text-gray-300">Профессиональный монтаж квалифицированными бригадами</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-white/10 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Есть проект? Обсудим его реализацию!</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Отправьте нам чертежи или техническое задание, и мы подготовим коммерческое предложение в течение 2 дней
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+79219472911" 
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Обсудить проект
              </a>
              <a 
                href="mailto:zakaz@smksteel-spb.ru" 
                className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Отправить ТЗ
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