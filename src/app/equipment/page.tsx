import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Оборудование СМК Сталь | Современное производственное оборудование",
  description: "Современное оборудование СМК Сталь для производства металлоконструкций. Плазменная резка, гибочные станки, сварочное оборудование.",
  keywords: [
    "оборудование СМК Сталь",
    "производственное оборудование",
    "плазменная резка оборудование",
    "сварочное оборудование",
    "металлообрабатывающие станки"
  ],
  openGraph: {
    title: "Оборудование СМК Сталь",
    description: "Современное производственное оборудование для изготовления металлоконструкций.",
    images: [{ url: "/welding_5.jpg", width: 1200, height: 630 }],
  },
};

export default function EquipmentPage() {
  const equipmentList = [
    {
      name: "Установка плазменной резки",
      description: "Высокоточная резка металла до 30мм",
      specs: ["Толщина резки: до 30мм", "Точность: ±0.5мм", "Скорость: до 8м/мин"],
      image: "/tilda/static_plazmennaya_rezka.jpg"
    },
    {
      name: "Гибочные прессы",
      description: "Гибка листового металла различной толщины",
      specs: ["Усилие: 160 тонн", "Длина: 3200мм", "Точность: ±0.1°"],
      image: "/tilda/static_gibka_lista.jpg"
    },
    {
      name: "Сварочные роботы",
      description: "Автоматизированная сварка для серийного производства",
      specs: ["6-осевые манипуляторы", "MIG/MAG сварка", "Повторяемость: ±0.02мм"],
      image: "/welding_2.jpg"
    },
    {
      name: "Вальцовочное оборудование",
      description: "Вальцовка обечаек и профильного проката",
      specs: ["Диаметр: до 3000мм", "Толщина: до 25мм", "Длина: до 12м"],
      image: "/tilda/static_oborudovanie_1.jpg"
    }
  ];

  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_5.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      <header className="relative z-30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          {/* Логотип — больше, без обводки и фона */}
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Наше оборудование</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-shadow text-lg">
              Современное высокотехнологичное оборудование для производства качественных металлоконструкций
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">30мм</div>
              <div className="text-sm2 text-gray-300">максимальная толщина резки</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">160т</div>
              <div className="text-sm2 text-gray-300">усилие гибочного пресса</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">12м</div>
              <div className="text-sm2 text-gray-300">максимальная длина заготовки</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm2 text-gray-300">режим работы производства</div>
            </div>
          </div>

          <div className="grid gap-8 mb-12">
            {equipmentList.map((equipment, index) => (
              <div key={equipment.name} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={equipment.image}
                        alt={equipment.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold mb-4">{equipment.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{equipment.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Технические характеристики:</h4>
                      <ul className="space-y-2">
                        {equipment.specs.map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-bold mb-6 ">Контроль качества</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Измерительное оборудование</h3>
                    <p className="text-sm">Координатно-измерительные машины для контроля размеров</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Неразрушающий контроль</h3>
                    <p className="text-sm">УЗК и магнитопорошковая дефектоскопия сварных швов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Лабораторные испытания</h3>
                    <p className="text-sm">Испытания на растяжение, ударную вязкость</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-bold mb-6 ">Вспомогательное оборудование</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold mb-2">Грузоподъемная техника</h3>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Мостовые краны до 20 тонн
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Автокраны до 50 тонн
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Вилочные погрузчики
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Покрасочный участок</h3>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Дробеструйная очистка
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Покрасочная камера
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Сушильная печь
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Заготовительный участок</h3>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Ленточнопильные станки
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Гильотинные ножницы
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Правильные машины
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center ">Преимущества нашего оборудования</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-orange-400 text-xl font-semibold mb-5">Высокая точность</div>
                <p className="text-sm2 text-gray-300">Современные системы ЧПУ обеспечивают точность до ±0.1мм</p>
              </div>
              <div className="text-center">
                <div className="text-orange-400 text-xl font-semibold mb-5">Производительность</div>
                <p className="text-sm2 text-gray-300">Автоматизация процессов увеличивает скорость в 3 раза</p>
              </div>
              <div className="text-center">
                <div className="text-orange-400 text-xl font-semibold mb-5">Универсальность</div>
                <p className="text-sm2 text-gray-300">Обработка различных марок сталей и сплавов</p>
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