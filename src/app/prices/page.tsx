import type { Metadata } from "next";
import Link from "next/link";
import ParallaxBG from "@/components/ParallaxBG";

export const metadata: Metadata = {
  title: "Цены на металлоконструкции в СПб | СМК Сталь",
  description: "Актуальные цены на изготовление металлоконструкций в Санкт-Петербурге. Фермы, балки, колонны, плазменная резка, монтаж от СМК Сталь.",
  keywords: [
    "цены металлоконструкции",
    "стоимость металлоконструкций",
    "цены фермы балки",
    "стоимость монтажа",
    "прайс лист СМК Сталь"
  ],
  openGraph: {
    title: "Цены на металлоконструкции | СМК Сталь",
    description: "Актуальные цены на металлоконструкции и услуги в Санкт-Петербурге.",
    images: [{ url: "/welding_3.jpg", width: 1200, height: 630 }],
  },
};

export default function PricesPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Цены на металлоконструкции</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-shadow">
              Актуальные цены на изготовление и монтаж металлоконструкций в Санкт-Петербурге. 
              Все цены указаны с учетом НДС.
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {/* Изготовление металлоконструкций */}
            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-semibold mb-6 text-blue-300">Изготовление металлоконструкций</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 text-gray-300">Наименование</th>
                      <th className="text-right py-3 text-gray-300">Цена</th>
                      <th className="text-center py-3 text-gray-300">Ед. изм.</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3">Фермы стропильные</td>
                      <td className="text-right py-3 font-medium">от 28 000 ₽</td>
                      <td className="text-center py-3">тонна</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Балки перекрытий</td>
                      <td className="text-right py-3 font-medium">от 32 000 ₽</td>
                      <td className="text-center py-3">тонна</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Колонны стальные</td>
                      <td className="text-right py-3 font-medium">от 25 000 ₽</td>
                      <td className="text-center py-3">тонна</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Лестницы металлические</td>
                      <td className="text-right py-3 font-medium">от 35 000 ₽</td>
                      <td className="text-center py-3">тонна</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Ограждения и площадки</td>
                      <td className="text-right py-3 font-medium">от 40 000 ₽</td>
                      <td className="text-center py-3">тонна</td>
                    </tr>
                    <tr>
                      <td className="py-3">Нестандартные изделия</td>
                      <td className="text-right py-3 font-medium">от 45 000 ₽</td>
                      <td className="text-center py-3">тонна</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Услуги металлообработки */}
            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-semibold mb-6 text-green-300">Услуги металлообработки</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 text-gray-300">Наименование</th>
                      <th className="text-right py-3 text-gray-300">Цена</th>
                      <th className="text-center py-3 text-gray-300">Ед. изм.</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3">Плазменная резка (до 30мм)</td>
                      <td className="text-right py-3 font-medium">от 180 ₽</td>
                      <td className="text-center py-3">м.п.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Гибка листа (до 8мм)</td>
                      <td className="text-right py-3 font-medium">от 120 ₽</td>
                      <td className="text-center py-3">м.п.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Вальцовка обечаек</td>
                      <td className="text-right py-3 font-medium">от 15 000 ₽</td>
                      <td className="text-center py-3">тонна</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Вальцовка профиля</td>
                      <td className="text-right py-3 font-medium">от 12 000 ₽</td>
                      <td className="text-center py-3">тонна</td>
                    </tr>
                    <tr>
                      <td className="py-3">Сварочные работы</td>
                      <td className="text-right py-3 font-medium">от 800 ₽</td>
                      <td className="text-center py-3">час</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Проектирование и монтаж */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                <h2 className="text-xl font-semibold mb-6 text-orange-300">Проектирование</h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between">
                    <span>Разработка КМ</span>
                    <span className="font-medium">от 8 000 ₽/тн</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Разработка КМД</span>
                    <span className="font-medium">от 12 000 ₽/тн</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3D моделирование</span>
                    <span className="font-medium">от 5 000 ₽/тн</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                <h2 className="text-xl font-semibold mb-6 text-purple-300">Монтаж</h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between">
                    <span>Монтаж каркаса</span>
                    <span className="font-medium">от 8 000 ₽/тн</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Монтаж кровли</span>
                    <span className="font-medium">от 12 000 ₽/тн</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Сложный монтаж</span>
                    <span className="font-medium">от 15 000 ₽/тн</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-semibold mb-4 text-yellow-300">Дополнительная информация</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="font-semibold mb-3">Условия работы:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Минимальный заказ: 1 тонна</li>
                    <li>• Предоплата: 70%</li>
                    <li>• Доплата по готовности: 30%</li>
                    <li>• Срок изготовления: 7-21 день</li>
                    <li>• Доставка по СПб и ЛО</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">В стоимость включено:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Материалы (сталь по ГОСТ)</li>
                    <li>• Грунтовка ГФ-021</li>
                    <li>• Сварочные материалы</li>
                    <li>• Контроль качества</li>
                    <li>• Техническая документация</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Итоговая стоимость рассчитывается индивидуально в зависимости от сложности проекта
            </p>
            <Link href="/" className="btn-outline mr-4">
              На главную
            </Link>
            <a href="tel:+79219472911" className="btn-outline">
              Получить расчет
            </a>
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