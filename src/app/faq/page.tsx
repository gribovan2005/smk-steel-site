import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — ответы на вопросы | СМК Сталь",
  description: "Часто задаваемые вопросы о проектировании, изготовлении и монтаже металлоконструкций, сроках и оплате.",
};

export default function FAQPage() {
  const commonFaqs: Array<{ q: string; a: string }> = [
    { q: "Сколько времени занимает изготовление?", a: "Срок зависит от объёма и сложности. Предварительную оценку даём в течение 1 рабочего дня." },
    { q: "Работаете ли вы с выездом на объект?", a: "Да, выполняем монтаж и выездные работы по Санкт-Петербургу и области." },
    { q: "Какие допуски и стандарты?", a: "Все допуски СРО, внутренние регламенты контроля качества, соответствие ISO 9001." },
  ];

  const techFaqs: Array<{ q: string; a: string }> = [
    { q: "Из какого металлопроката изготавливаете?", a: "Работаем с прокатом по ГОСТ: лист, двутавр, швеллер, труба, уголок. Подбор с учётом ТЗ и экономичности." },
    { q: "Можно ли изготовить по вашим чертежам?", a: "Да. Также можем разработать КМ/КМД своими силами и согласовать с заказчиком." },
    { q: "Возможна ли горячая цинковка?", a: "Да, по запросу организуем горячее цинкование и покраску по системе покрытия." },
  ];

  const termsFaqs: Array<{ q: string; a: string }> = [
    { q: "Какой порядок оплаты?", a: "Обычно 50% предоплаты, 50% по факту готовности. Варианты обсуждаем индивидуально." },
    { q: "Доставка и разгрузка?", a: "Организуем доставку по СПб и ЛО, разгрузка по договорённости (кран/манипулятор)." },
    { q: "Гарантия?", a: "Гарантия 12 месяцев на изготовление при соблюдении условий эксплуатации." },
  ];

  const allFaqs = [...commonFaqs, ...techFaqs, ...termsFaqs];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const Section = ({ title, items }: { title: string; items: Array<{ q: string; a: string }> }) => (
    <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-5 sm:p-6">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">{title}</h2>
      <div className="divide-y divide-white/10">
        {items.map(({ q, a }) => (
          <details key={q} className="group py-3">
            <summary className="cursor-pointer list-none font-medium flex items-start justify-between gap-3">
              <span className="text-white/95">{q}</span>
              <span className="ml-auto inline-block rounded-md border border-white/20 px-2 py-0.5 text-xs text-white/80 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-2 text-gray-300">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Вопросы и ответы</h1>
        <p className="mt-2 text-gray-300 max-w-2xl mx-auto">Собрали ключевую информацию о сроках, технологии и условиях сотрудничества. Если не нашли ответ — задайте вопрос.</p>
        <a href="#lead" className="mt-4 inline-block btn">Задать вопрос</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Section title="Общие вопросы" items={commonFaqs} />
        <Section title="Технические" items={techFaqs} />
        <div className="md:col-span-2">
          <Section title="Сроки, доставка и гарантии" items={termsFaqs} />
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="btn-outline">На главную</Link>
      </div>
    </div>
  );
} 