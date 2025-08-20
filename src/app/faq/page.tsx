import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxBG from "@/components/ParallaxBG";

export const metadata: Metadata = {
  title: "FAQ — ответы на вопросы | СМК Сталь",
  description: "Часто задаваемые вопросы о проектировании, изготовлении и монтаже металлоконструкций, сроках и оплате.",
};

export default function FAQPage() {
  const commonFaqs: Array<{ q: string; a: string }> = [
    { q: "Сколько времени занимает изготовление?", a: "Срок зависит от объёма и сложности. Предварительную оценку даём в течение 1-2 рабочих дней." },
    { q: "Работаете ли вы с выездом на объект?", a: "Да, выполняем монтаж и выездные работы по Санкт-Петербургу и области." },
    { q: "Можно ли заказать срочное изготовление?", a: "Да, обсуждаем возможность ускоренного производства с доплатой за срочность." },
  ];

  const techFaqs: Array<{ q: string; a: string }> = [
    { q: "Из какого металлопроката изготавливаете?", a: "Работаем с прокатом по ГОСТ: лист, двутавр, швеллер, труба, уголок. Подбор с учётом ТЗ." },
    { q: "Можно ли изготовить по вашим чертежам?", a: "Да. Также можем разработать КМ/КМД своими силами и согласовать с заказчиком." },
    { q: "Возможна ли горячая цинковка?", a: "Да, по запросу организуем горячее цинкование и покраску по системе покрытия." },
    { q: "Выполняете ли сварку нержавейки и алюминия?", a: "Да, работаем с нержавеющей сталью и алюминием, используем соответствующие технологии сварки." },
  ];

  const termsFaqs: Array<{ q: string; a: string }> = [
    { q: "Какой порядок оплаты?", a: "Обычно 70% предоплаты, 30% по факту готовности. Варианты обсуждаем индивидуально." },
    { q: "Доставка и разгрузка?", a: "Организуем доставку по СПб и ЛО, разгрузка по договорённости (кран/манипулятор)." },
    { q: "Работаете ли в выходные дни?", a: "Да, работаем в выходные дни." },
    { q: "Возможна ли оплата безналичным расчетом?", a: "Да, работаем как с физическими, так и с юридическими лицами, все формы оплаты." },
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
    <div className="min-h-screen text-white relative">
      <ParallaxBG imageUrl="/welding_5.jpg" scalePercent={160} brightness={1.18} contrast={1.08} maxShiftPercent={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative z-30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          {/* Логотип — больше, без обводки и фона */}
          <Link href="/" className="flex items-center">
            <Image
              src="/static_smk_steel.png"
              alt="СМК Сталь — Производство металлоконструкций"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Ссылка "На главную" — стильно и понятно */}
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            ← <span className="hidden sm:inline">На главную</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-shadow">Вопросы и ответы</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-shadow">
              Собрали ключевую информацию о сроках, технологии и условиях сотрудничества. 
              Если не нашли ответ — свяжитесь с нами по телефону или через форму обратной связи.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Section title="Общие вопросы" items={commonFaqs} />
            <Section title="Технические вопросы" items={techFaqs} />
            <div className="md:col-span-2">
              <Section title="Сроки, доставка и гарантии" items={termsFaqs} />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="btn-outline">
              На главную
            </Link>
          </div>
        </div>
      </main>


    </div>
  );
} 