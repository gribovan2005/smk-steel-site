import Link from "next/link";
import Image from "next/image";
import { publicOrders } from "@/data/orders";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Наши заказы</h1>
          <Link href="/" className="text-orange-600 hover:text-orange-700">На главную</Link>
        </div>
      </header>



      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6">
          {publicOrders.map((o) => (
            <div key={o.id} className="rounded-xl border p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-sm text-gray-500">{new Date(o.createdAt).toLocaleString("ru-RU")}{o.location ? ` · ${o.location}` : ""}</p>
                  <p className="text-lg font-semibold">{o.title}</p>
                  {o.clientName ? <p className="text-sm text-gray-600">Заказчик: {o.clientName}</p> : null}
                </div>
                {o.tags && o.tags.length ? (
                  <div className="flex flex-wrap gap-2">
                    {o.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full border bg-gray-50 text-gray-700 border-gray-200">{t}</span>
                    ))}
                  </div>
                ) : null}
              </div>
              {o.description ? <p className="mt-3">{o.description}</p> : null}
              {o.images?.length ? (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {o.images.map((src, idx) => (
                    <div key={idx} className="relative h-32 w-full overflow-hidden rounded-lg border">
                      <Image src={src} alt={`${o.title} фото ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </main>

      <footer className="py-8 border-t">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-500">© {new Date().getFullYear()} СМК Сталь</div>
      </footer>
    </div>
  );
} 