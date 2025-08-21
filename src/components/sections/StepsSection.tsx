import { Section, SectionTitle } from "@/components/ui";
import { workflowSteps } from "@/data/steps";

const StepsSection = () => {
    return (
        <Section id="steps">
            <SectionTitle>Этапы</SectionTitle>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {workflowSteps.map(step => (
                    <div key={step.number} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-white font-bold">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default StepsSection;
