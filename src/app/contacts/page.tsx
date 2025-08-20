import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-4">
          ← На главную
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">Контакты</h1>
      <p className="text-gray-300">Телефон: +7 (921) 947-29-11</p>
      <p className="text-gray-300">Email: zakaz@smksteel-spb.ru</p>
      <p className="text-gray-300">Адрес: 192012, г. Санкт-Петербург, вн. тер. г. муниципальный округ Рыбацкое, ул. Мурзинская, д. 11, литера А, офис 701</p>
    </div>
  );
} 