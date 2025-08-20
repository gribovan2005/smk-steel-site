import type { Metadata } from "next";
import Link from "next/link";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { Section, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Цены на металлоконструкции в СПб | СМК Сталь",
  description: "Актуальные цены на изготовление металлоконструкций в Санкт-Петербурге. Фермы, балки, колонны, плазменная резка, монтаж от СМК Сталь.",
  keywords: [
    "цены металлоконструкции",
    "стоимость металлоконструкций СПб", 
    "цены изготовление металлоконструкций",
    "расценки металлообработка",
    "прайс СМК Сталь"
  ],
  openGraph: {
    title: "Цены на металлоконструкции в СПб | СМК Сталь",
    description: "Актуальные цены на изготовление металлоконструкций в Санкт-Петербурге.",
    images: [{ url: "/welding_5.jpg", width: 1200, height: 630 }],
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
              Актуальные цены на изготовление и монтаж металлоконструкций в Санкт-Петербурге
            </p>
          </div>

          {/* Цены на изготовление */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-xl font-semibold mb-6">Изготовление металлоконструкций</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-gray-300">Наименование</th>
                    <th className="text-right py-3 text-gray-300">Цена</th>
                    <th className="text-center py-3 text-gray-300">Ед. изм.</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Фермы стальные</td>
                    <td className="py-3 text-right font-medium">от 65 000</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Колонны</td>
                    <td className="py-3 text-right font-medium">от 55 000</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Балки перекрытий</td>
                    <td className="py-3 text-right font-medium">от 58 000</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Подкрановые балки</td>
                    <td className="py-3 text-right font-medium">от 72 000</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Лестницы и ограждения</td>
                    <td className="py-3 text-right font-medium">от 85 000</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Емкости и резервуары</td>
                    <td className="py-3 text-right font-medium">от 95 000</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                  <tr>
                    <td className="py-3">Нестандартные изделия</td>
                    <td className="py-3 text-right font-medium">договорная</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Цены на услуги */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-xl font-semibold mb-6">Услуги металлообработки</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-gray-300">Наименование</th>
                    <th className="text-right py-3 text-gray-300">Цена</th>
                    <th className="text-center py-3 text-gray-300">Ед. изм.</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Плазменная резка до 20мм</td>
                    <td className="py-3 text-right font-medium">от 120</td>
                    <td className="py-3 text-center">м.п.</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Плазменная резка свыше 20мм</td>
                    <td className="py-3 text-right font-medium">от 180</td>
                    <td className="py-3 text-center">м.п.</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Гибка листа до 10мм</td>
                    <td className="py-3 text-right font-medium">от 95</td>
                    <td className="py-3 text-center">м.п.</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Вальцовка обечаек</td>
                    <td className="py-3 text-right font-medium">от 8 500</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Вальцовка профиля</td>
                    <td className="py-3 text-right font-medium">от 12 000</td>
                    <td className="py-3 text-center">тонна</td>
                  </tr>
                  <tr>
                    <td className="py-3">Порошковая покраска</td>
                    <td className="py-3 text-right font-medium">от 320</td>
                    <td className="py-3 text-center">м²</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Проектирование */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-xl font-semibold mb-6">Проектирование</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Разработка КМ (Конструкции Металлические)</span>
                <span className="font-medium">от 2 500 руб/тонна</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Разработка КМД (Конструкции Металлические Деталировочные)</span>
                <span className="font-medium">от 4 500 руб/тонна</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>3D моделирование</span>
                <span className="font-medium">от 8 000 руб/модель</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Технический надзор</span>
                <span className="font-medium">от 1 200 руб/день</span>
              </div>
            </div>
          </div>

          {/* Монтаж */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-xl font-semibold mb-6">Монтаж</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Монтаж каркасов зданий</span>
                <span className="font-medium">от 12 000 руб/тонна</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Монтаж ферм и балок</span>
                <span className="font-medium">от 15 000 руб/тонна</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Монтаж колонн</span>
                <span className="font-medium">от 18 000 руб/тонна</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Монтаж нестандартных конструкций</span>
                <span className="font-medium">от 25 000 руб/тонна</span>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-xl font-semibold mb-4">Дополнительная информация</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="font-semibold mb-3">Условия работы</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Минимальный заказ: от 2 тонн</li>
                  <li>• Предоплата: 50% от суммы заказа</li>
                  <li>• Срок изготовления: от 7 рабочих дней</li>
                  <li>• Доставка по СПб: включена в стоимость</li>
                  <li>• Гарантия: 12 месяцев</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Что влияет на стоимость</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Сложность конструкции</li>
                  <li>• Марка стали и толщина металла</li>
                  <li>• Объем заказа</li>
                  <li>• Требования к покрытию</li>
                  <li>• Срочность изготовления</li>
                </ul>
              </div>
            </div>
          </div>

          <Section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Хотите получить расчет стоимости?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Заполните форму ниже и мы свяжемся с вами в ближайшее время
            </p>
            <Button href="/#lead" variant="primary" size="lg">
              Получить расчет
            </Button>
          </div>
        </Section>
          
        
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