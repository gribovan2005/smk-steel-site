import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Script from "next/script";

export default function Home() {
  const works: string[] = [
    "https://static.tildacdn.com/tild3335-3662-4130-a330-623136333563/4.jpg",
    "https://static.tildacdn.com/tild6332-6633-4366-b665-643331393165/8355f7db7f0d96436779.jpg",
    "https://static.tildacdn.com/tild6139-3638-4639-a137-623563303933/12072012423.jpg",
    "https://static.tildacdn.com/tild3636-6631-4130-b130-326262636339/IMG_9224.jpg",
    "https://static.tildacdn.com/tild6437-3664-4933-b764-346637623132/Opornye-konstruktsii.jpg",
    "https://static.tildacdn.com/tild3662-6465-4665-a664-326535303562/thumb.jpg",
    "https://static.tildacdn.com/tild6339-3237-4131-a238-623065393137/XXXL.jpg",
    "https://static.tildacdn.com/tild3464-3535-4438-b134-303136343435/C_swchiller_20120717.jpg",
  ];

  const services = [
    { name: "Фермы", price: "От 25000 руб/тн" },
    { name: "Прогоны, балки покрытия", price: "От 18000 руб/тн" },
    { name: "Электросварной двутавр", price: "От 17000 руб/тн" },
    { name: "Колонны", price: "От 22000 руб/тн" },
    { name: "Связи, фахверк, распорки", price: "От 22000 руб/тн" },
    { name: "Балки перекрытий", price: "От 18000 руб/тн" },
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sb2agb3adi6g.xn--p1ai";

  return (
    <div className="min-h-screen text-gray-100 relative">
      <div className="aurora" />
      <div className="absolute inset-0 bg-grid" />

      <Script id="ld-services" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.name,
                description: `${s.name} — ${s.price}`,
                provider: { "@type": "Organization", name: "СМК Сталь" },
                url: `${siteUrl}#services`,
              },
            })),
          }),
        }}
      />

      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-30 backdrop-blur bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://static.tildacdn.com/tild6261-3530-4135-b865-373336663531/photo.png"
              alt="Логотип СМК Сталь"
              width={120}
              height={60}
              className="h-10 w-auto"
            />
            <span className="hidden sm:block text-sm text-gray-300">
              zakaz@smksteel-spb.ru
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-teal-300">Услуги</a>
            <a href="#prices" className="hover:text-teal-300">Цены</a>
            <a href="#projects" className="hover:text-teal-300">Работы</a>
            <Link href="/orders" className="hover:text-teal-300">Заказы</Link>
            <a href="#contacts" className="hover:text-teal-300">Контакты</a>
          </nav>
          <Link
            href="tel:+79219472911"
            className="text-base font-semibold hover:text-teal-300"
          >
            +7 (921) 947-29-11
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[url('https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1600&auto=format&fit=crop')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight gradient-text">
              Металлоконструкции нового уровня
            </h1>
            <p className="mt-6 text-lg max-w-xl text-gray-200">
              Проектирование, изготовление и монтаж. Сроки, качество и прозрачная смета.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#lead" className="inline-block rounded-md bg-teal-500 text-white px-5 py-2.5 font-semibold hover:bg-teal-400">Оставить заявку</a>
              <a href="#projects" className="inline-block rounded-md border border-white/20 text-white px-5 py-2.5 font-semibold hover:bg-white/10">Наши работы</a>
            </div>
          </div>
          <div className="glass rounded-2xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4">Отправьте заявку на расчет</h3>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16" id="advantages" aria-label="Преимущества СМК Сталь">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Собственное производство 3000м2",
            "Полный цикл металлообработки",
            "Производственные мощности ≥ 300 тн/мес",
            "Все допуски СРО, ISO 9001",
          ].map((text) => (
            <div key={text} className="glass rounded-xl border border-white/10 p-6">
              <p className="font-semibold text-gray-100">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20" id="services" aria-label="Услуги и типовые конструкции">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 gradient-text">Типовые конструкции</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="glass rounded-xl border border-white/10 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-100">{s.name}</p>
                  <p className="mt-2 text-teal-300 font-bold">{s.price}</p>
                </div>
                <a href="#lead" className="mt-4 text-sm font-medium text-teal-300 hover:text-teal-200" aria-label={`Заказать ${s.name}`}>Заказать →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-20" aria-label="Цены на металлоконструкции">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">Пример расчета стоимости за тонну</h2>
          <div className="overflow-x-auto glass rounded-xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-3 border-b border-white/10">Наименование</th>
                  <th className="text-left p-3 border-b border-white/10">Цена</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["КМД (проектирование чертежей)", "1 500р"],
                  ["Металлопрокат с учётом 5% отхода", "48 700р"],
                  ["Грунт (ВЛ-023, 108 г/м2)", "880р"],
                  ["Краска (360 г/м2)", "2 970р"],
                  ["М-29 (расходники)", "730р"],
                  ["Доставка металлопроката в цех", "400р"],
                  ["Доставка до объекта заказчика", "400р"],
                  ["Изготовление металлоконструкций", "19 950р"],
                  ["Итого", "75 530р"],
                ].map(([name, price]) => (
                  <tr key={name as string} className="odd:bg-white/0 even:bg-white/5">
                    <td className="p-3">{name}</td>
                    <td className="p-3 font-semibold text-teal-300">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href="#lead" className="inline-block mt-6 rounded-md bg-teal-500 text-white px-5 py-2.5 font-semibold hover:bg-teal-400">Оставить заявку</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20" aria-label="Наши работы: реализованные проекты">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">Реализованные проекты</h2>
          <div className="overflow-hidden glass rounded-xl border border-white/10">
            <div className="marquee">
              {[...works, ...works].map((src, idx) => (
                <div key={idx} className="relative h-48 w-80 sm:h-56 sm:w-96 m-2 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src={src} alt={`Проект металлконструкции ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 320px, 384px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form duplicate */}
      <section id="lead" className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text">Оставьте заявку на расчет</h2>
            <p className="mt-4 text-gray-300">
              Ответим в течение рабочего дня. Можно указать только телефон.
            </p>
          </div>
          <div className="glass rounded-xl border border-white/10 p-6">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="glass rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold">Офис</h3>
            <p className="mt-2">+7 (921) 947-29-11</p>
            <p>zakaz@smksteel-spb.ru</p>
            <p>г. Санкт-Петербург. ул. Караваевская 57</p>
          </div>
          <div className="glass rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold">Производство</h3>
            <p className="mt-2">м. Парнас, ул. Домостроительная 10Б</p>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-400">
          © {new Date().getFullYear()} СМК Сталь
        </div>
      </footer>
    </div>
  );
}
