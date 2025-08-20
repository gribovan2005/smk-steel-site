import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";

export const metadata: Metadata = {
  title: "Контакты СМК Сталь | Связаться с производителем металлоконструкций",
  description: "Контакты СМК Сталь в Санкт-Петербурге. Телефон, адрес офиса и производства. Связаться с производителем металлоконструкций.",
  keywords: [
    "контакты СМК Сталь",
    "телефон СМК Сталь", 
    "адрес СМК Сталь",
    "офис металлоконструкции",
    "производство СПб"
  ],
  openGraph: {
    title: "Контакты СМК Сталь",
    description: "Свяжитесь с нами для заказа металлоконструкций в Санкт-Петербурге.",
    images: [{ url: "/welding_3.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactsPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Контакты</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-shadow">
              Свяжитесь с нами любым удобным способом для консультации или заказа металлоконструкций
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                <h2 className="text-xl text-orange-300 font-semibold mb-4">Связь с нами</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white-300 mb-2">Телефон</h3>
                    <a 
                      href="tel:+79219472911" 
                      className="text-white font-medium hover:text-white-300 transition-colors text-lg"
                    >
                      +7 (921) 947-29-11
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white-300 mb-2">Email</h3>
                    <a 
                      href="mailto:zakaz@smksteel-spb.ru" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      zakaz@smksteel-spb.ru
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white-300 mb-2">Режим работы</h3>
                    <p className="text-gray-300">Пн-Вс: 9:00 - 20:00</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                <h2 className="text-xl text-orange-300 font-semibold mb-4">Реквизиты</h2>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <span className="text-white-300">ИНН:</span> 7811564681
                  </div>
                  <div>
                    <span className="text-white-300">ОГРН:</span> 1137847431028
                  </div>
                  <div>
                    <span className="text-white-300">КПП:</span> 781101001
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl text-orange-300 font-semibold mb-4">Наши адреса</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold  mb-2">Офис</h3>
                  <p className="text-gray-300 leading-relaxed">
                    192012, г. Санкт-Петербург<br/>
                    ул. Мурзинская, д. 11, литера А, офис 701<br/>
                    <span className="text-sm text-gray-400">(юридический адрес)</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold  mb-2">Производство</h3>
                  <p className="text-gray-300 leading-relaxed">
                    г. Санкт-Петербург<br/>
                    м. Парнас, ул. Домостроительная 10Б<br/>
                    <span className="text-sm text-gray-400">(фактический адрес)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
              <h2 className="text-xl text-orange-300 font-semibold mb-4">Как нас найти</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold  mb-3">До офиса</h3>
                  <ul className="space-y-2 text-gray-300 text-sm2">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      м. Рыбацкое - 10 мин пешком
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      От КАД - съезд на ул. Шелгунова
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Парковка возле здания
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold  mb-3">До производства</h3>
                  <ul className="space-y-2 text-gray-300 text-sm2">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      м. Парнас - 15 мин на транспорте
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      От КАД - съезд Домостроительная
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      Удобный въезд для грузового транспорта
                    </li>
                  </ul>
                </div>
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