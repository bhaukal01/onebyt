import { AnimatePresence, motion as Motion } from "framer-motion";
import deploymentPlans from "../../data/deploymentPlans.json";
import minecraftPlans from "../../data/minecraftPlans.json";
import { InteractiveCard, ScrollSection } from "./SectionShell";

function PlansSection({ activeTab, onTabChange, reduceMotion }) {
  const plans = activeTab === "deployment" ? deploymentPlans : minecraftPlans;

  return (
    <ScrollSection
      id="plans"
      eyebrow="plans"
      title="choose a managed deployment lane"
      subtitle="switch between deployment services and minecraft services plans using the in-section tabs."
    >
      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/80 p-2 w-fit">
        <button
          type="button"
          onClick={() => onTabChange("deployment")}
          className="relative overflow-hidden rounded-full px-5 py-2 text-sm"
        >
          {activeTab === "deployment" ? (
            <Motion.span
              layoutId="plans-toggle"
              className="absolute inset-0 rounded-full bg-white"
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 420, damping: 32 }
              }
            />
          ) : null}
          <span
            className={`relative z-10 transition-colors ${
              activeTab === "deployment"
                ? "text-black"
                : "text-white/75 hover:text-white"
            }`}
          >
            deployment services
          </span>
        </button>
        <button
          type="button"
          onClick={() => onTabChange("minecraft")}
          className="relative overflow-hidden rounded-full px-5 py-2 text-sm"
        >
          {activeTab === "minecraft" ? (
            <Motion.span
              layoutId="plans-toggle"
              className="absolute inset-0 rounded-full bg-white"
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 420, damping: 32 }
              }
            />
          ) : null}
          <span
            className={`relative z-10 transition-colors ${
              activeTab === "minecraft"
                ? "text-black"
                : "text-white/75 hover:text-white"
            }`}
          >
            minecraft services
          </span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <Motion.div
          key={activeTab}
          className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{
            duration: reduceMotion ? 0 : 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {plans.map((plan) => (
            <InteractiveCard key={plan.name} className="h-full flex flex-col">
              <p className="text-xs uppercase tracking-[0.16em] text-white/56 m-0">
                best for
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight lowercase m-0">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-white/68 lowercase m-0">
                {plan.bestFor}
              </p>

              <p className="mt-4 text-4xl font-medium tracking-tight">
                ₹{plan.price}
                <span className="ml-1 text-sm text-white/60">/month</span>
              </p>

              <ul className="mt-5 space-y-2 text-sm text-white/78 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="lowercase">
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 bg-white text-black text-sm font-normal rounded-full px-5 py-3 hover:bg-neutral-200 transition-colors text-center"
              >
                get this plan
              </a>
            </InteractiveCard>
          ))}
        </Motion.div>
      </AnimatePresence>
    </ScrollSection>
  );
}

export default PlansSection;
