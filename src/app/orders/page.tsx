import Link from "next/link";
import { listOrders } from "@/lib/db";

export default async function OrdersPage() {
  let orders: Array<{
    id: string;
    created_at: string;
    customer_name: string | null;
    phone: string;
    email: string | null;
    message: string | null;
    attachment_filename: string | null;
    attachment_url: string | null;
    status: string;
  }> = [];
  try {
    orders = await listOrders(50);
  } catch {
    // Fallback placeholder when DB not configured
    orders = [
      {
        id: "ORD-001",
        created_at: new Date().toISOString(),
        customer_name: "ООО Ромашка",
        phone: "+7 (900) 000-00-00",
        email: "info@example.com",
        message: "Изготовление металлокаркаса склада",
        attachment_filename: null,
        attachment_url: null,
        status: "new",
      },
    ];
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Заказы</h1>
          <Link href="/" className="text-orange-600 hover:text-orange-700">На главную</Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6">
          {orders.map((o) => (
            <div key={o.id} className="rounded-xl border p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-sm text-gray-500">{new Date(o.created_at).toLocaleString("ru-RU")}</p>
                  <p className="text-lg font-semibold">{o.customer_name || "Без имени"}</p>
                  <p className="text-sm text-gray-600">{o.phone} {o.email ? `· ${o.email}` : ""}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-1 rounded-full border ${o.status === 'done' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-yellow-50 text-yellow-700 border-yellow-200'}`}>{o.status === 'done' ? 'Выполнен' : 'Новый'}</span>
                  {o.attachment_url ? (
                    <a className="text-sm text-orange-600 hover:text-orange-700" href={o.attachment_url} target="_blank" rel="noreferrer">Скачать файл</a>
                  ) : o.attachment_filename ? (
                    <span className="text-sm text-gray-500">Файл: {o.attachment_filename}</span>
                  ) : null}
                </div>
              </div>
              {o.message ? <p className="mt-3">{o.message}</p> : null}
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