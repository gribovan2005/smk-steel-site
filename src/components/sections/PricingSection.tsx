import { Section, SectionTitle } from "@/components/ui";
import { pricingData } from "@/data/pricing";

const PricingSection = () => {
  return (
    <Section id="prices">
      <SectionTitle>Цены</SectionTitle>
      <div className="overflow-x-auto rounded-xl border border-white/20 bg-black/30 backdrop-blur">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-white/15 text-white">
              <th className="text-left p-4 border-b border-white/10">Наименование</th>
              <th className="text-left p-4 border-b border-white/10">Цена</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item) => (
              <tr 
                key={item.name} 
                className={`border-t border-white/10 hover:bg-white/5 ${
                  item.name === "Итого" ? "font-bold bg-white/5" : ""
                }`}
              >
                <td className="p-4 text-white">{item.name}</td>
                <td className="p-4 font-semibold text-white text-right">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default PricingSection; 