import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Script from "next/script";
import ParallaxBG from "@/components/ParallaxBG";
import { publicOrders } from "@/data/orders";

export default function Home() {
  const works: string[] = [
    "/tilda/static_tildacdn_com-Opornye-konstruktsii.jpg",
    "/tilda/static_tildacdn_com-IMG_9224.jpg",
    "/tilda/static_tildacdn_com-C_swchiller_20120717.jpg",
    "/tilda/static_tildacdn_com-12072012423.jpg",
    "/tilda/static_tildacdn_com-8355f7db7f0d96436779.jpg",
    "/tilda/static_tildacdn_com-XXXL.jpg",
    "/tilda/static_tildacdn_com-thumb.jpg",
    "/tilda/static_tildacdn_com-4.jpg",
  ];

  const constructions: Array<{ name: string; price: string; img: string }> = [
    { name: "Фермы", price: "От 25000 руб/тн", img: "/tilda/static_tildacdn_com-4.jpg" },
    { name: "Прогоны, балки покрытия", price: "От 18000 руб/тн", img: "/tilda/static_tildacdn_com-8355f7db7f0d96436779.jpg" },
    { name: "Электросварной двутавр", price: "От 17000 руб/тн", img: "/tilda/static_tildacdn_com-XXXL.jpg" },
    { name: "Колонны", price: "От 22000 руб/тн", img: "/tilda/static_tildacdn_com-IMG_9224.jpg" },
    { name: "Связи, фахверк, распорки", price: "От 22000 руб/тн", img: "/tilda/static_tildacdn_com-12072012423.jpg" },
    { name: "Балки перекрытий", price: "От 18000 руб/тн", img: "/tilda/static_tildacdn_com-Opornye-konstruktsii.jpg" },
    { name: "Лестницы, ограждения, площадки", price: "От 30000 руб/тн", img: "/tilda/static_tildacdn_com-thumb.jpg" },
    { name: "Закладные изделия", price: "От 45000 руб/тн", img: "/tilda/static_tildacdn_com-uzel00851.png" },
    { name: "Створные знаки", price: "От 45000 руб/тн", img: "/tilda/static_tildacdn_com-photo.png" },
    { name: "Дымовые трубы", price: "От 50000 руб/тн", img: "/tilda/static_tildacdn_com-s1200.jpg" },
    { name: "Подкрановые балки", price: "От 45000 руб/тн", img: "/tilda/static_tildacdn_com-Opornye-konstruktsii.jpg" },
    { name: "Приварка статичных болтов", price: "От 400 руб/шт. Выезд на объект", img: "/tilda/static_tildacdn_com-noroot.png" },
    { name: "Пространственные конструкции", price: "От 35000 руб/тн", img: "/tilda/static_tildacdn_com-835e515259312359159d.jpg" },
    { name: "Опоры ЛЭП", price: "От 35000 руб/тн", img: "/tilda/static_tildacdn_com-iStock-695448564.jpg" },
    { name: "Емкости и резервуары", price: "От 50000 руб/тн", img: "/tilda/static_tildacdn_com-C_swchiller_20120717.jpg" },
    { name: "Нестандартные изделия", price: "От 60000 руб/тн", img: "/tilda/static_tildacdn_com-___.jpg" },
  ];

  const services: Array<{ name: string; price?: string; desc: string; img: string }> = [
    {
      name: "Вальцовка обечаек",
      price: "от 15000 руб./тн",
      desc: "Вальцовка обечаек относится к одному из важнейших технологических процессов. Без этого этапа невозможно представить изготовление цилиндрических деталей.",
      img: "/tilda/static_tildacdn_com-vse-o-valcovke.jpg",
    },
    {
      name: "Плазменная резка",
      price: "от 100 руб./м",
      desc: "Плазменная резка применима практически ко всем разновидностям металлов и сплавов. Можно резать чугун, нержавеющую сталь, титан и др.",
      img: "/tilda/static_tildacdn_com-Plasma_Cutting_2.jpg",
    },
    {
      name: "Гибка листа до 8мм",
      price: "от 50 руб./гиб",
      desc: "Гибка листового металла — операция деформирования заготовки для получения изделия нужной формы и размеров.",
      img: "/tilda/static_tildacdn_com-739f3d7b-f932-49ff-b.jpg",
    },
    {
      name: "Вальцовка профиля",
      price: "от 2000 р/пм",
      desc: "Быстрый и недорогой способ создания изделия нужной формы без необходимости сварки стыка.",
      img: "/tilda/static_tildacdn_com-noroot.png",
    },
    {
      name: "Разработка КМ КМД",
      desc: "Рабочая документация по ГОСТ и СНиП. Предварительный технико-экономический анализ снижает риски и сроки изготовления.",
      img: "/tilda/static_tildacdn_com-iStock-695448564.jpg",
    },
    {
      name: "Монтажные работы",
      price: "от 18000 руб/тн*",
      desc: "Монтаж зданий и металлоконструкций любой сложности, все допуски СРО.",
      img: "/tilda/static_tildacdn_com-photo.jpg",
    },
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sb2agb3adi6g.xn--p1ai";

  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding.jpg" scalePercent={135} brightness={1.18} contrast={1.08} />
      <div className="absolute inset-0 bg-black/35 -z-10" />

      <Script id="ld-services" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: constructions.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.name,
                description: `${s.name} — ${s.price}`,
                provider: { "@type": "Organization", name: "СМК Сталь" },
                url: `${siteUrl}#constructions`,
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
          <nav className="hidden md:flex items-center gap-3 text-sm font-medium">
            <a href="#services" className="btn-outline btn-sm">Услуги</a>
            <a href="#constructions" className="btn-outline btn-sm">Типовые конструкции</a>
            <a href="#prices" className="btn-outline btn-sm">Цены</a>
            <a href="#projects" className="btn-outline btn-sm">Работы</a>
            <a href="#orders" className="btn-outline btn-sm">Заказы</a>
            <a href="#contacts" className="btn-outline btn-sm">Контакты</a>
          </nav>
          <Link href="tel:+79219472911" className="btn-outline btn-sm">+7 (921) 947-29-11</Link>
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
              <a href="#lead" className="btn">Оставить заявку</a>
              <a href="#projects" className="btn-outline">Наши работы</a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4">Отправьте заявку на расчет</h3>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Услуги</h2>
          <p className="mt-2 text-gray-300 max-w-2xl">Мы оказываем весь спектр услуг по обработке и заготовке металлических изделий</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-4 flex gap-4">
                <div className="relative w-40 h-28 sm:w-52 sm:h-32 flex-none overflow-hidden rounded-lg border border-white/10">
                  <Image src={s.img} alt={s.name} fill className="object-cover" sizes="(max-width: 768px) 160px, 208px" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <p className="text-base font-semibold text-white">{s.name}</p>
                    {s.price ? <p className="text-sm font-medium text-gray-200">{s.price}</p> : null}
                  </div>
                  <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                  <a href="#lead" className="mt-3 inline-block btn-outline btn-sm">Заказать →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constructions */}
      <section className="py-20" id="constructions">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Типовые конструкции</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {constructions.map((c) => (
              <div key={c.name} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur overflow-hidden">
                <div className="relative h-40 w-full border-b border-white/10">
                  <Image src={c.img} alt={c.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="p-5">
                  <p className="text-base font-semibold text-white">{c.name}</p>
                  <p className="mt-2 text-gray-300 font-medium">{c.price}</p>
                  <a href="#lead" className="mt-4 inline-block btn-outline btn-sm">Заказать →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-xs text-gray-400 space-y-1">
            <p>* цены указаны без учета металлопроката и лакокрасочных материалов.</p>
            <p>** указанные цены не являются публичной офертой. Стоимость указана в рублях за 1 тонну с НДС.</p>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Цены</h2>
          <div className="overflow-x-auto rounded-xl border border-white/12 bg-white/5">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="text-left p-4 border-b border-white/10">Наименование</th>
                  <th className="text-left p-4 border-b border-white/10">Цена</th>
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
                  <tr key={name as string} className="border-t border-white/10">
                    <td className="p-4 text-white/90">{name}</td>
                    <td className="p-4 font-semibold text-white">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Orders (showcase on same page) */}
      <section id="orders" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Заказы</h2>
          <div className="grid gap-6">
            {publicOrders.map((o) => (
              <div key={o.id} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm text-gray-400">{new Date(o.createdAt).toLocaleString("ru-RU")} {o.location ? `· ${o.location}` : ""}</p>
                    <p className="text-lg font-semibold">{o.title}</p>
                    {o.clientName ? <p className="text-sm text-gray-300">Заказчик: {o.clientName}</p> : null}
                  </div>
                  {o.tags && o.tags.length ? (
                    <div className="flex flex-wrap gap-2">
                      {o.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-200">{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
                {o.description ? <p className="mt-3 text-gray-300">{o.description}</p> : null}
                {o.images?.length ? (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {o.images.map((src, idx) => (
                      <div key={idx} className="relative h-32 w-full overflow-hidden rounded-lg border border-white/10">
                        <Image src={src} alt={`${o.title} фото ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
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
            <div className="mt-4 flex gap-3">
              <a href="#" className="btn-outline btn-sm">Позвонить</a>
              <a href="#" className="btn-outline btn-sm">Написать</a>
            </div>
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
            <a href="#lead" className="mt-4 inline-block btn-outline btn-sm">Связаться</a>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
            <h3 className="font-semibold">Производство</h3>
            <p className="mt-2">м. Парнас, ул. Домостроительная 10Б</p>
            <a href="#lead" className="mt-4 inline-block btn-outline btn-sm">Оставить заявку</a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-400">© {new Date().getFullYear()} СМК Сталь</div>
      </footer>
    </div>
  );
}
