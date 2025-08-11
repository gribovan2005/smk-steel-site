import Image from "next/image";
import Link from "next/link";

const orders = [
  {
    id: "ORD-001",
    customer: "ООО Ромашка",
    title: "Изготовление металлокаркаса склада",
    photo: "https://static.tildacdn.com/tild3335-3662-4130-a330-623136333563/4.jpg",
  },
  {
    id: "ORD-002",
    customer: "ИП Петров",
    title: "Балка перекрытия 12м",
    photo: "https://static.tildacdn.com/tild3636-6631-4130-b130-326262636339/IMG_9224.jpg",
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Сделанные заказы</h1>
          <Link href="/" className="text-orange-600 hover:text-orange-700">На главную</Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {orders.map((o) => (
            <div key={o.id} className="rounded-xl border bg-white overflow-hidden">
              <div className="relative h-56">
                <Image src={o.photo} alt={o.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500">{o.id}</p>
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <p className="text-gray-600 mt-1">Заказчик: {o.customer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-8 border-t">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-500">
          © {new Date().getFullYear()} СМК Сталь
        </div>
      </footer>
    </div>
  );
} 