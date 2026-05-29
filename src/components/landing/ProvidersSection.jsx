import providers from "../../data/providers.json";
import { InteractiveCard, ScrollSection } from "./SectionShell";

function ProvidersSection() {
  return (
    <ScrollSection
      id="providers"
      eyebrow="providers"
      title="cloud providers we operate on"
      subtitle="provider integrations are mapped from json and tuned for each workload profile, region, and budget target."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {providers.map((provider) => (
          <InteractiveCard key={provider.id} className="h-full">
            <div className="h-12 w-12 rounded-xl border border-white/14 bg-black/55 flex items-center justify-center">
              <img
                src={provider.image}
                alt={`${provider.name} logo`}
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-xl font-medium tracking-tight lowercase m-0">
              {provider.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/74 m-0">
              {provider.description}
            </p>
          </InteractiveCard>
        ))}
      </div>
    </ScrollSection>
  );
}

export default ProvidersSection;
