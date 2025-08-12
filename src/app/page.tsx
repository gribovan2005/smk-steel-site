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

  const equipmentImages: string[] = [
    "/tilda/static_tildacdn_com-___5_.jpg",
    "/tilda/static_tildacdn_com-radialno-sverlilny-s.jpg",
    "/tilda/static_tildacdn_com-___.jpg",
    "/tilda/static_tildacdn_com-___-150.jpg",
  ];

  const equipmentList: string[] = [
    "Пресс 3-х кулачковый для правки профиля",
    "Кран мостовой г\\п 5 тн",
    "Кран мостовой г\\п 15 тн",
    "Сварочная установка для приварки Стат. Болтов Koster GO Gmbh",
    "Вальцы 3х валковые(16*2000) ИБ 2222б с подгибом кромки",
    "Сварочный трактор угловой для сварки под флюсом сВДУ -1250",
    "Сварочный трактор стыковой для сварки под флюсом сВДУ",
    "Сварочный п\\ автомат EWM AG (Phoenix 351 Progrtss puls MM F)",
    "Сварочный п\\автомат ПДГ",
    "Установка плазменной резки АПР-150",
    "Ленточнопильный станок по металлу JET MBS-1013CSD",
    "Покрасочный аппарат Grako",
    "Радиально-сверлильный станок 2М55",
    "Трубогиб Профилегиб металлыч-вс-300/70-У",
  ];

  const steps: Array<{ num: number; title: string; desc: string }> = [
    { num: 1, title: "1. Оставляете заявку", desc: "Вы оставляете заявку или звоните нам" },
    { num: 2, title: "2. Получаете консультацию и расчет стоимости", desc: "Вы приезжаете к нам на производство и задаете интересущие вас вопросы, далее рассчитываем стоимость проекта" },
    { num: 3, title: "3. Договор", desc: "Подписываем договор и начинаем работу" },
    { num: 4, title: "4. Доставка", desc: "Осуществляем доставку и монтаж металлоконструкций по необходимости" },
  ];

  const clientLogos: string[] = [
    "/tilda/static_tildacdn_com-2.jpg",
    "/tilda/static_tildacdn_com-7MyS3ZFUtIg.jpg",
    "/tilda/static_tildacdn_com-11.jpg",
    "/tilda/static_tildacdn_com-52112c7ed5f20be19966.png",
    "/tilda/static_tildacdn_com-ee.jpg",
    "/tilda/static_tildacdn_com-gk-morstroj-550x550-.jpg",
    "/tilda/static_tildacdn_com-moskva_-sao_-savelov.jpg",
    "/tilda/static_tildacdn_com-_-1.jpg",
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xn----8sb2agb3adi6g.xn--p1ai";
  const logoSrc = "/tilda/static_tildacdn_com-2123213.png";

  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_2.jpg" scalePercent={135} brightness={1.18} contrast={1.08} />
      {/* убираем затемнение для чистой шапки поверх фото */}
      {/* <div className="absolute inset-0 bg-black/35 -z-10" /> */}

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

      {/* Header over photo (not fixed) */}
      <header className="relative z-30">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* emblem removed per request */}
            <span className="text-lg font-semibold tracking-wide whitespace-nowrap">СМК Сталь</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold uppercase">
            <a href="#services" className="link-nav">Услуги</a>
            <a href="#constructions" className="link-nav">Типовые конструкции</a>
            <a href="#prices" className="link-nav">Цены</a>
            <a href="#steps" className="link-nav">Этапы</a>
            <a href="#projects" className="link-nav">Работы</a>
            <a href="#equipment" className="link-nav">Оборудование</a>
            <a href="#clients" className="link-nav">Клиенты</a>
            <a href="#orders" className="link-nav">Заказы</a>
            <details className="relative">
              <summary className="link-nav cursor-pointer list-none">Контакты</summary>
              <div className="absolute right-0 mt-2 w-72 rounded-xl border border-white/10 bg-black/70 backdrop-blur p-3 z-40">
                <div className="flex flex-col gap-2 text-left normal-case font-normal">
                  <a href="tel:+79219472911" className="link-nav">+7 (921) 947-29-11</a>
                  <a href="mailto:zakaz@smksteel-spb.ru" className="link-nav">zakaz@smksteel-spb.ru</a>
                  <div className="text-sm text-gray-300">г. Санкт-Петербург, ул. Караваевская 57</div>
                  <a href="#lead" className="btn-outline btn-sm mt-1">Связаться</a>
                </div>
              </div>
            </details>
          </nav>
          <div className="flex items-center gap-3">
            <details className="md:hidden">
              <summary className="link-nav">Меню</summary>
              <div className="absolute right-4 mt-2 w-56 rounded-xl border border-white/10 bg-black/70 backdrop-blur p-2 flex flex-col gap-1 z-40">
                {[
                  ["#services","Услуги"],
                  ["#constructions","Типовые конструкции"],
                  ["#prices","Цены"],
                  ["#steps","Этапы"],
                  ["#projects","Работы"],
                  ["#equipment","Оборудование"],
                  ["#clients","Клиенты"],
                  ["#orders","Заказы"],
                  ["#contacts","Контакты"],
                ].map(([href, label]) => (
                  <a key={href as string} href={href as string} className="link-nav">{label as string}</a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      <main>
      {/* Company intro text directly on parallax */}
      <section className="px-4">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-5xl text-sm sm:text-base text-gray-100 leading-relaxed">
            СМК Сталь один из лидирующих игроков на рынке производства металлоконструкций с 2013 года. Мы предлагаем нашим клиентам полный комплекс услуг в сфере возведения зданий и сооружений различного назначения, которые предполагают использование различных металлоконструкций. Активно развиваем строительное направление для выполнения любых общестроительных работ, начиная от благоустройства, заканчивая исполнением функций генерального подрядчика.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="relative isolate">
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Изготовление металлоконструкций в Санкт-Петербурге
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

      {/* Steps */}
      <section id="steps" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Этапы работы с нами</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6 text-center">
                <div className="mx-auto h-10 w-10 rounded-full border border-white/60 flex items-center justify-center font-semibold">{s.num}</div>
                <p className="mt-4 font-semibold">{s.title}</p>
                <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Наше оборудование</h2>
            <div className="grid grid-cols-2 gap-3">
              {equipmentImages.map((src, i) => (
                <div key={i} className="relative h-36 sm:h-44 w-full overflow-hidden rounded-lg border border-white/10">
                  <Image src={src} alt={`Оборудование ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <ol className="list-decimal pl-5 space-y-2 text-gray-200">
              {equipmentList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
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

      {/* Certificates section removed per request */}

      {/* Clients */}
      <section id="clients" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Наши клиенты</h2>
          <p className="mt-2 text-gray-300">Гордимся сотрудничеством с лидерами рынка</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((src, i) => (
              <div key={i} className="relative h-28 sm:h-36 w-full flex items-center justify-center">
                <Image src={src} alt={`Клиент ${i + 1}`} fill className="object-contain" sizes="(max-width: 768px) 45vw, 20vw" />
              </div>
            ))}
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
          <div className="rounded-XL border border-white/10 bg-black/40 backdrop-blur p-6">
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

      {/* Map */}
      <section id="map" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">На карте</h2>
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
              <div className="p-3 text-sm font-semibold">Офис — ул. Караваевская 57</div>
              <div className="aspect-[16/9] w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps?q=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,%20%D0%9A%D0%B0%D1%80%D0%B0%D0%B2%D0%B0%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2057&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      <footer className="py-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-400">© {new Date().getFullYear()} СМК Сталь</div>
      </footer>
    </div>
  );
}
