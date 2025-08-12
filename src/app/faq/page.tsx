export default function FAQPage() {
  const faqs: Array<{ q: string; a: string }> = [
    { q: "Сколько времени занимает изготовление?", a: "Срок зависит от объёма и сложности. Предварительную оценку даём в течение 1 рабочего дня." },
    { q: "Работаете ли вы с выездом на объект?", a: "Да, выполняем монтаж и выездные работы по Санкт-Петербургу и области." },
    { q: "Какие допуски и стандарты?", a: "Все допуски СРО, внутренние регламенты контроля качества, соответствие ISO 9001." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Вопросы и ответы</h1>
      <div className="space-y-4">
        {faqs.map(({ q, a }) => (
          <details key={q} className="rounded-lg border border-white/10 bg-black/30 p-4">
            <summary className="font-semibold cursor-pointer">{q}</summary>
            <p className="mt-2 text-gray-300">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
} 