import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";
import { publicOrders } from "@/data/orders";

export const metadata: Metadata = {
  title: "Наши заказы - СМК Сталь | Выполненные проекты металлоконструкций",
  description: "Портфолио выполненных заказов СМК Сталь. Металлоконструкции для торговых центров, производственных объектов, школ и больниц в Санкт-Петербурге.",
  keywords: [
    "заказы СМК Сталь",
    "портфолио металлоконструкций",
    "выполненные проекты",
    "металлоконструкции спб проекты",
    "наши работы"
  ],
  openGraph: {
    title: "Наши заказы - СМК Сталь",
    description: "Портфолио выполненных заказов СМК Сталь. Металлоконструкции для различных объектов.",
    images: [{ url: "/welding_3.jpg", width: 1200, height: 630 }],
  },
};

export default function OrdersPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "/" },
      { "@type": "ListItem", position: 2, name: "Заказы", item: "/orders" },
    ],
  };

  return (
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_2.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="bg-black/30 backdrop-blur py-4 relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-300 hover:text-white">Главная</Link></li>
            <li className="text-gray-500">→</li>
            <li className="text-white">Наши заказы</li>
          </ol>
        </div>
      </nav>

      <main className="relative py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Наши заказы</h1>
          <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            Портфолио выполненных проектов СМК Сталь. Мы изготавливаем металлоконструкции 
            для торговых центров, производственных объектов, школ, больниц и других сооружений.
          </p>
          
          <div className="grid gap-6">
            {publicOrders.map((o) => (
              <div key={o.id} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-lg font-semibold text-white">{o.title}</p>
                    {o.location && <p className="text-sm text-gray-400">{o.location}</p>}
                    {o.clientName && <p className="text-sm text-gray-500">Заказчик: {o.clientName}</p>}
                  </div>
                  {o.tags && o.tags.length ? (
                    <div className="flex flex-wrap gap-2">
                      {o.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-200 bg-white/5">
                          {t}
                        </span>
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
                        <Image src={src} alt={`${o.title} фото ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              ← На главную страницу
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 