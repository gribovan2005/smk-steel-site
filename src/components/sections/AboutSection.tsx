import { Section } from "@/components/ui";

const AboutSection = () => {
  return (
    <Section>
      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 blur-3xl" />
        <div className="relative rounded-2xl border border-white/20 bg-black/40 backdrop-blur-sm p-8 lg:p-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              О компании
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
              Надёжный партнёр с 2013 года
            </h2>
            <p className="max-w-4xl mx-auto text-base sm:text-lg text-gray-200 leading-relaxed">
              СМК Сталь один из лидирующих игроков на рынке производства металлоконструкций с 2013 года. 
              Мы предлагаем нашим клиентам полный комплекс услуг в сфере возведения зданий и сооружений 
              различного назначения, которые предполагают использование различных металлоконструкций. 
              Активно развиваем строительное направление для выполнения любых общестроительных работ, 
              начиная от благоустройства, заканчивая исполнением функций генерального подрядчика.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Более 10 лет на рынке
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Полный цикл производства
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Генподрядные работы
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection; 