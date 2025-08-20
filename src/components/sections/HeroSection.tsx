import { Button } from "@/components/ui";
import LeadForm from "@/components/LeadForm";

const HeroSection = () => {
  return (
    <section className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
        <div className="lg:pr-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-shadow mb-6">
            Изготовление металлоконструкций в Санкт-Петербурге
          </h1>
          <p className="text-base lg:text-lg max-w-xl text-gray-200 text-shadow mb-8">
            Проектирование, изготовление и монтаж металлоконструкций.
          </p>
          <div className="flex flex-wrap gap-4 mb-8 lg:mb-0">
            <Button href="#services" variant="outline" size="lg">
              Наши услуги
            </Button>
            <Button href="#lead" variant="outline" size="lg">
              Получить расчет
            </Button>
          </div>
        </div>
        <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur p-6">
          <h2 className="text-xl font-semibold mb-4">Получить расчет</h2>
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 