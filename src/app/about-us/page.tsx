import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";

export const metadata: Metadata = {
  title: "О нас - СМК Сталь | Производство металлоконструкций с 2013 года",
  description: "СМК Сталь - надежный производитель металлоконструкций в Санкт-Петербурге с 2013 года. Собственное производство, квалифицированная команда, допуски СРО.",
  keywords: [
    "о нас СМК Сталь",
    "производство металлоконструкций",
    "завод металлоконструкций СПб",
    "команда СМК Сталь",
    "производственные возможности"
  ],
  openGraph: {
    title: "О нас - СМК Сталь",
    description: "Производство металлоконструкций с 2013 года. Собственное производство в Санкт-Петербурге.",
    images: [{ url: "/welding_3.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutUsPage() {
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
            ← На главную страницу
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">О заводе СМК Сталь</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-shadow text-lg">
              Северо-западный завод металлоконструкций «СМК Сталь» производит изделия из металла 
              на заказ для частных и коммерческих объектов с 2013 года
            </p>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-sm text-gray-300">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold  mb-2">500</div>
              <div className="text-sm text-gray-300">тонн в месяц</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">150+</div>
              <div className="text-sm text-gray-300">объектов с монтажом</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">соблюдение сроков</div>
            </div>
          </div>

          {/* О заводе */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 ">О заводе</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              ООО «СМК Сталь» занимается производством металлоконструкций с 2013 г.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Критерии нашего профессионализма</strong> – это индивидуальный подход к каждому клиенту, 
              тщательная проработка заказов, регулярное обучение рабочих бригад, новейшее оборудование, 
              качественное производство и соблюдение сроков поставки.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Большой опыт работы и широкие производственные возможности позволяют нам создавать 
              самые сложные и нестандартные металлоизделия. Мы изготавливаем конструкции любого 
              уровня сложности – по типовым и индивидуальным проектам.
            </p>
          </div>

          {/* Наши сильные стороны */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-bold mb-6 ">Наши сильные стороны</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Качественные материалы</h3>
                    <p className="text-sm">Работаем только с сертифицированными материалами от надежных производителей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Современное оборудование</h3>
                    <p className="text-sm">Новейшие станки плазменной резки, гибки, вальцовки и сварки</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Контроль качества</h3>
                    <p className="text-sm">Проводим дополнительные лабораторные испытания по требованию заказчика</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Долгосрочное сотрудничество</h3>
                    <p className="text-sm">Заинтересованы в долгосрочном и взаимовыгодном сотрудничестве</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl font-bold mb-6 ">Производственные возможности</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold mb-2">Металлообработка</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Плазменная резка до 30мм</li>
                    <li>• Гибка листового металла</li>
                    <li>• Вальцовка обечаек и профиля</li>
                    <li>• Механическая обработка</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Сварочные работы</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Полуавтоматическая сварка</li>
                    <li>• Аргонодуговая сварка</li>
                    <li>• Работа с нержавейкой</li>
                    <li>• Сварка алюминия</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Дополнительные услуги</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Проектирование КМ/КМД</li>
                    <li>• Покрытие и покраска</li>
                    <li>• Горячее цинкование</li>
                    <li>• Монтажные работы</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Монтаж */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 ">Монтаж металлоконструкций в Санкт-Петербурге и ЛО</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              На заводе по производству металлоконструкций ООО «СМК Сталь» вы сможете заказать услуги сборки 
              и монтажа изделий из металла с доставкой по СПБ и Ленинградской области.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              В штате нашего предприятия работают только квалифицированные строительные мастера. 
              Мы предлагаем лучшие цены на монтаж. Работаем зимой и летом в любых условиях.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-blue-400 font-semibold mb-2">Квалифицированные мастера</div>
                <p className="text-sm text-gray-300">Все допуски СРО и сертификаты</p>
              </div>
              <div className="text-center">
                <div className=" font-semibold mb-2">Работаем круглогодично</div>
                <p className="text-sm text-gray-300">Монтаж зимой и летом</p>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-semibold mb-2">Лучшие цены</div>
                <p className="text-sm text-gray-300">Конкурентная стоимость</p>
              </div>
            </div>
          </div>

          {/* Условия работы */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 ">Условия работы</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              В торгово-производственной компании «СМК Сталь» вы сможете заказать проектирование и изготовление 
              конструкций из металла с доставкой по всей России. Наш завод металлообработки работает для вас 
              в удобном режиме.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Мы гарантируем каждому нашему покупателю строгое соблюдение сроков поставки, прозрачный прайс 
              и высокую скорость производства – от 7 до 21 дня в зависимости от сложности проекта.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="font-semibold  mb-4">Гарантии качества</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Соблюдение сроков поставки</li>
                  <li>• Прозрачное ценообразование</li>
                  <li>• Технические паспорта на изделия</li>
                  <li>• Сертификаты на материалы</li>
                  <li>• Лабораторные испытания</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold  mb-4">Преимущества работы с нами</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Индивидуальный подход</li>
                  <li>• Работа по чертежам заказчика</li>
                  <li>• Собственная конструкторская база</li>
                  <li>• Полный цикл производства</li>
                  <li>• Доставка по всей России</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-white/10 bg-blue-900/80 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Нужна консультация специалиста?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Чтобы получить бесплатную консультацию по услуге, заполните форму заявки или позвоните по номеру
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+79219472911" 
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                +7 (921) 947-29-11
              </a>
              <Link href="/" className="btn-outline">
                На главную страницу
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