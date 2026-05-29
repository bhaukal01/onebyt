import deploymentServices from "../../data/deploymentServices.json";
import minecraftServices from "../../data/minecraftServices.json";
import { InteractiveCard, ScrollSection } from "./SectionShell";

function ServicesSection() {
  return (
    <ScrollSection
      id="services"
      eyebrow="services"
      title="deployment management, not generic development"
      subtitle="we focus on production operations, scaling, reliability, and platform governance. minecraft development services are still fully supported."
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <InteractiveCard>
          <p className="text-xs uppercase tracking-[0.18em] text-white/55 m-0">
            deployment services
          </p>
          <ul className="mt-4 space-y-3">
            {deploymentServices.map((service) => (
              <li key={service.title} className="space-y-1">
                <h3 className="text-lg font-medium tracking-tight lowercase m-0">
                  {service.title}
                </h3>
                <p className="text-sm text-white/72 leading-relaxed m-0">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </InteractiveCard>

        <InteractiveCard>
          <p className="text-xs uppercase tracking-[0.18em] text-white/55 m-0">
            minecraft development services
          </p>
          <ul className="mt-4 space-y-3">
            {minecraftServices.map((service) => (
              <li key={service.title} className="space-y-1">
                <h3 className="text-lg font-medium tracking-tight lowercase m-0">
                  {service.title}
                </h3>
                <p className="text-sm text-white/72 leading-relaxed m-0">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </InteractiveCard>
      </div>
    </ScrollSection>
  );
}

export default ServicesSection;
