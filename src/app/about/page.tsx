import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";

export const metadata: Metadata = {
  title: "О компании СМК Сталь | Производство металлоконструкций с 2013 года",
  description: "СМК Сталь - надежный партнер в области производства металлоконструкций с 2013 года. Полный цикл от проектирования до монтажа в Санкт-Петербурге.",
  keywords: [
    "о компании СМК Сталь",
    "производство металлоконструкций",
    "история компании",
    "СМК Сталь",
    "металлоконструкции СПб"
  ],
  openGraph: {
    title: "О компании СМК Сталь",
    description: "Надежный партнер в области производства металлоконструкций с 2013 года.",
    images: [{ url: "/welding_3.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
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

          {/* Ссылка "На главную" — стильно и понятно */}
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">О компании СМК Сталь</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-shadow">
              Надежный партнер в области производства металлоконструкций с 2013 года
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-semibold mb-4">Наша история</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                СМК Сталь — один из лидирующих игроков на рынке производства металлоконструкций с 2013 года. 
                Мы предлагаем нашим клиентам полный комплекс услуг в сфере возведения зданий и сооружений 
                различного назначения, которые предполагают использование различных металлоконструкций.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Активно развиваем строительное направление для выполнения любых общестроительных работ, 
                начиная от благоустройства, заканчивая исполнением функций генерального подрядчика.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                <h2 className="text-xl font-semibold mb-4">Наши преимущества</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                    Более 10 лет успешной работы на рынке
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                    Полный цикл производства металлоконструкций
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></span>
                    Выполнение функций генерального подрядчика
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                    Все необходимые допуски СРО
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></span>
                    Собственное современное производство
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                <h2 className="text-xl font-semibold mb-4">Наши услуги</h2>
                <ul className="space-y-3 text-gray-300">
                  <li>• Проектирование КМ/КМД</li>
                  <li>• Изготовление металлоконструкций</li>
                  <li>• Плазменная резка металла</li>
                  <li>• Гибка и вальцовка</li>
                  <li>• Монтаж металлоконструкций</li>
                  <li>• Комплексные строительные работы</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-semibold mb-4">Качество и надежность</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Мы гарантируем высокое качество выполняемых работ благодаря использованию современного 
                оборудования, квалифицированных специалистов и строгому контролю на всех этапах производства.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Все наши специалисты имеют соответствующие сертификаты и допуски, а компания обладает 
                всеми необходимыми лицензиями СРО для выполнения строительно-монтажных работ.
              </p>
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