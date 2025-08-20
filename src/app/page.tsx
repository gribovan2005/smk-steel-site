"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import ParallaxBG from "@/components/ParallaxBG";
import LeadForm from "@/components/LeadForm";
import { publicOrders } from "@/data/orders";
import { services } from "@/data/services";
import { constructions } from "@/data/constructions";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ConstructionsSection,
  PricingSection,
  StepsSection,
  EquipmentSection,
  ProjectsSection,
  ClientsSection,
} from "@/components/sections";

export default function Home() {
  // Маппинги URL-ов для услуг
  const serviceUrls: Record<string, string> = {
    "Вальцовка обечаек": "/services/valtsovka-obechaek",
    "Плазменная резка": "/services/plazmennaya-rezka",
    "Гибка листа до 8мм": "/services/gibka-lista",
    "Вальцовка профиля": "/services/valtsovka-profilya",
    "Разработка КМ КМД": "/services/km-kmd",
    "Монтажные работы": "/services/montazh",
  };

  // Маппинги URL-ов для конструкций
  const constructionUrls: Record<string, string> = {
    "Фермы": "/constructions/fermy",
    "Прогоны, балки покрытия": "/constructions/progony-balki-pokrytiya",
    "Электросварной двутавр": "/constructions/elektrosvarnoj-dvutavr",
    "Колонны": "/constructions/kolonny",
    "Связи, фахверк, распорки": "/constructions/svyazi-fahverk-rasporki",
    "Балки перекрытий": "/constructions/balki-perekrytij",
    "Лестницы, ограждения, площадки": "/constructions/lestnitsy-ograzhdeniya-ploshhadki",
    "Закладные изделия": "/constructions/zakladnye-izdeliya",
    "Створные знаки": "/constructions/stvornye-znaki",
    "Дымовые трубы": "/constructions/dymovye-truby",
    "Подкрановые балки": "/constructions/podkranovye-balki",
    "Приварка статичных болтов": "/constructions/privarka-statichnykh-boltov",
    "Пространственные конструкции": "/constructions/prostranstvennye-konstruktsii",
    "Опоры ЛЭП": "/constructions/opory-lep",
    "Емкости и резервуары": "/constructions/emkosti-rezervuary",
    "Нестандартные изделия": "/constructions/nestandartnye-izdeliya",
  };

  // Автоматическое закрытие других выпадающих меню
  useEffect(() => {
    const handleDetailsToggle = (event: Event) => {
      const target = event.target as HTMLDetailsElement;
      if (target.tagName === 'DETAILS' && target.open) {
        // Найти все другие details элементы в навигации и закрыть их
        const allDetails = document.querySelectorAll('nav details');
        allDetails.forEach((details) => {
          if (details !== target && (details as HTMLDetailsElement).open) {
            (details as HTMLDetailsElement).open = false;
          }
        });
      }
    };

    // Добавить обработчик событий
    document.addEventListener('toggle', handleDetailsToggle, true);

    // Очистка при размонтировании компонента
    return () => {
      document.removeEventListener('toggle', handleDetailsToggle, true);
    };
  }, []);
  const logoSrc = "/tilda/static_tildacdn_com-2123213.png";

  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_5.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="lazyOnload"
      />

      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold tracking-wide whitespace-nowrap px-3 py-1 rounded-lg border border-white/20 bg-black/40 backdrop-blur">СМК Сталь</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold uppercase">
            {/* Выпадающее меню Услуги */}
            <div className="relative group">
              <span className="link-nav cursor-pointer">Услуги</span>
              <div className="absolute left-0 mt-2 w-80 rounded-xl border border-white/10 bg-black/70 backdrop-blur p-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="flex flex-col gap-2 text-left normal-case font-normal">
                  <a href="#services" className="link-nav font-semibold border-b border-white/20 pb-2">Все услуги</a>
                  {services.map((service) => {
                    const url = serviceUrls[service.name];
                    return url ? (
                      <Link key={service.name} href={url} className="link-nav text-sm py-1 hover:text-blue-300 transition-colors">
                        {service.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
            
            {/* Выпадающее меню Типовые конструкции */}
            <div className="relative group">
              <span className="link-nav cursor-pointer">Типовые конструкции</span>
              <div className="absolute left-0 mt-2 w-80 rounded-xl border border-white/10 bg-black/70 backdrop-blur p-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-96 overflow-y-auto">
                <div className="flex flex-col gap-2 text-left normal-case font-normal">
                  <a href="#constructions" className="link-nav font-semibold border-b border-white/20 pb-2">Все конструкции</a>
                  {constructions.map((construction) => {
                    const url = constructionUrls[construction.name];
                    return url ? (
                      <Link key={construction.name} href={url} className="link-nav text-sm py-1 hover:text-blue-300 transition-colors">
                        {construction.name}
                      </Link>
                    ) : (
                      <span key={construction.name} className="text-sm py-1 text-gray-500">
                        {construction.name} <span className="text-xs">(скоро)</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <Link href="/prices" className="link-nav">Цены</Link>
            <Link href="/about-us" className="link-nav">О нас</Link>
            <Link href="/faq" className="link-nav">FAQ</Link>
            <Link href="/contacts" className="link-nav">Контакты</Link>
          </nav>
          <div className="flex items-center gap-3">
            <details className="md:hidden">
              <summary className="link-nav">Меню</summary>
              <div className="absolute right-4 mt-2 w-72 rounded-xl border border-white/10 bg-black/70 backdrop-blur p-3 flex flex-col gap-1 z-40 max-h-96 overflow-y-auto">
                {/* Основные разделы */}
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Разделы</div>
                {[
                  ["/prices","Цены"],
                  ["/about-us","О нас"],
                  ["/faq","FAQ"],
                  ["/contacts","Контакты"],
                ].map(([href, label]) => (
                  href.startsWith('/') ? (
                    <Link key={href} href={href} className="link-nav text-sm py-1">{label}</Link>
                  ) : (
                    <a key={href} href={href} className="link-nav text-sm py-1">{label}</a>
                  )
                ))}
                
                {/* Услуги */}
                <div className="text-xs text-gray-400 uppercase tracking-wide mt-3 mb-2">Услуги</div>
                <a href="#services" className="link-nav text-sm py-1 font-semibold">Все услуги</a>
                {services.map((service) => {
                  const url = serviceUrls[service.name];
                  return url ? (
                    <Link key={service.name} href={url} className="link-nav text-xs py-1 ml-2 text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  ) : null;
                })}
                
                {/* Конструкции */}
                <div className="text-xs text-gray-400 uppercase tracking-wide mt-3 mb-2">Конструкции</div>
                <a href="#constructions" className="link-nav text-sm py-1 font-semibold">Все конструкции</a>
                {constructions.map((construction) => {
                  const url = constructionUrls[construction.name];
                  return url ? (
                    <Link key={construction.name} href={url} className="link-nav text-xs py-1 ml-2 text-gray-300 hover:text-white transition-colors">
                      {construction.name}
                    </Link>
                  ) : (
                    <span key={construction.name} className="text-xs py-1 ml-2 text-gray-500">
                      {construction.name} <span className="text-xs">(скоро)</span>
                    </span>
                  );
                })}
              </div>
            </details>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <StepsSection />
        <ServicesSection />
        
        <section id="orders" className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Заказы</h2>
            <div className="grid gap-6">
              {publicOrders.map((o) => (
                <div key={o.id} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-lg font-semibold">{o.title}</p>
                      {o.location && <p className="text-sm text-gray-500">{o.location}</p>}
                      {o.clientName && <p className="text-sm text-gray-600">Заказчик: {o.clientName}</p>}
                    </div>
                    {o.tags && o.tags.length ? (
                      <div className="flex flex-wrap gap-2">
                        {o.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-200">{t}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {o.description ? (
                    o.clientName === "ОКЕЙ" ? (
                      <div className="mt-3">
                        <ol className="list-decimal text-gray-300 space-y-1 pl-6">
                          {o.description.split('\n').map((address, idx) => (
                            <li key={idx} className="text-sm">{address}</li>
                          ))}
                        </ol>
                      </div>
                    ) : (
                      <p className="mt-3 text-gray-300">{o.description}</p>
                    )
                  ) : null}
                  {o.images?.length ? (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {o.images.map((src, idx) => (
                        <div key={idx} className="relative h-32 w-full overflow-hidden rounded-lg border border-white/10">
                          <img src={src} alt={`${o.title} фото ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ConstructionsSection />
        <EquipmentSection />
        <ProjectsSection />
        <ClientsSection />

        <section id="lead" className="py-20">
          <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">Готовы обсудить ваш проект?</h2>
              <p className="mt-2">+7 (921) 947-29-11</p>
              <p>zakaz@smksteel-spb.ru</p>
                            <p>192012, г. Санкт-Петербург, вн. тер. г. муниципальный округ Рыбацкое, ул. Мурзинская, д. 11, литера А, офис 701</p>
              <a href="#lead" className="mt-4 inline-block btn-outline btn-sm">Связаться</a>
            </div>
            <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur p-6">
              <h3 className="text-xl font-semibold mb-4">Оставить заявку</h3>
              <LeadForm />
            </div>
          </div>
        </section>

        <section id="map" className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">На карте</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 overflow-hidden">
                <div className="p-3 text-sm font-semibold">Производство — м. Парнас, ул. Домостроительная 10Б</div>
                <div className="aspect-[16/9] w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps?q=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,%20%D0%94%D0%BE%D0%BC%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%2010%D0%91&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="rounded-xl border border-white/10 overflow-hidden">
                              <div className="p-3 text-sm font-semibold">Офис — ул. Мурзинская, д. 11, литера А, офис 701</div>
                <div className="aspect-[16/9] w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps?q=192012,%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,%20%D0%9C%D1%83%D1%80%D0%B7%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2011&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
