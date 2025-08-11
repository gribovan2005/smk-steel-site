import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Script from "next/script";
import ParallaxBG from "@/components/ParallaxBG";

export default function Home() {
  const works: string[] = [
    "https://images.unsplash.com/photo-1523419409543-36d5b2b36a23?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497280725660-fdb83f0bce1a?q=80&w=1600&auto=format&fit=crop",
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
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop" />
      <div className="absolute inset-0 bg-black/60 -z-10" />

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
      <header className="border-b border-white/10 sticky top-0 z-30 backdrop-blur bg-black/40">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold tracking-wide">СМК Сталь</span>
            <span className="hidden sm:block text-sm text-gray-300">zakaz@smksteel-spb.ru</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-gray-300">Услуги</a>
            <a href="#prices" className="hover:text-gray-300">Цены</a>
            <a href="#projects" className="hover:text-gray-300">Работы</a>
            <Link href="/orders" className="hover:text-gray-300">Заказы</Link>
            <a href="#contacts" className="hover:text-gray-300">Контакты</a>
          </nav>
          <Link href="tel:+79219472911" className="text-base font-medium hover:text-gray-300">+7 (921) 947-29-11</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Минимализм. Сталь. Надёжность.
            </h1>
            <p className="mt-6 text-lg max-w-xl text-gray-300">
              Проектирование, изготовление и монтаж металлоконструкций.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#lead" className="inline-block rounded-md bg-white text-black px-5 py-2.5 font-semibold hover:bg-gray-200">Оставить заявку</a>
              <a href="#projects" className="inline-block rounded-md border border-white/30 text-white px-5 py-2.5 font-semibold hover:bg-white/10">Наши работы</a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4">Отправьте заявку на расчет</h3>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" id="services">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Услуги</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6 flex flex-col justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{s.name}</p>
                  <p className="mt-2 text-gray-300 font-medium">{s.price}</p>
                </div>
                <a href="#lead" className="mt-4 text-sm font-medium text-white/90 hover:text-white">Заказать →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Цены</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 backdrop-blur">
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
                    <td className="p-3 font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Работы</h2>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur">
            <div className="marquee">
              {[...works, ...works].map((src, idx) => (
                <div key={idx} className="relative h-48 w-80 sm:h-56 sm:w-96 m-2 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src={src} alt={`Проект ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 320px, 384px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section id="lead" className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Оставьте заявку</h2>
            <p className="mt-4 text-gray-300">Ответим в течение рабочего дня. Можно указать только телефон.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur p-6">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
            <h3 className="font-semibold">Офис</h3>
            <p className="mt-2">+7 (921) 947-29-11</p>
            <p>zakaz@smksteel-spb.ru</p>
            <p>г. Санкт-Петербург. ул. Караваевская 57</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
            <h3 className="font-semibold">Производство</h3>
            <p className="mt-2">м. Парнас, ул. Домостроительная 10Б</p>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-400">© {new Date().getFullYear()} СМК Сталь</div>
      </footer>
    </div>
  );
}
