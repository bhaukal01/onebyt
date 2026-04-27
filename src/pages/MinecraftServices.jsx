import PageShell from "../components/PageShell";

const minecraftServices = [
  {
    title: "bungeecord server setup",
    description:
      "we configure complete bungeecord networks to connect multiple instances with seamless routing.",
  },
  {
    title: "survival and custom game modes",
    description:
      "custom survival, factions, skyblock, prison, and more with balancing and stability testing.",
  },
  {
    title: "custom mobs and items",
    description:
      "unique entities, items, abilities, and enchantments tailored to your server identity.",
  },
  {
    title: "plugin optimization and performance",
    description:
      "fine-tuned plugin stacks and runtime settings to reduce lag and sustain smooth gameplay.",
  },
  {
    title: "anti-cheat and security hardening",
    description:
      "advanced anti-cheat integration and security patching for safer, fair play environments.",
  },
  {
    title: "full server management",
    description:
      "setup, maintenance, and 24/7 support so you can focus on growing your player community.",
  },
];

function MinecraftServices() {
  return (
    <PageShell
      eyebrow="services"
      title="minecraft infrastructure and managed operations"
      subtitle="from plugin-heavy server networks to secure anti-cheat deployment, we handle build, optimization, and ongoing operations."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 fade-up delay-1">
        {minecraftServices.map((service) => (
          <article
            key={service.title}
            className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <h2 className="text-xl font-medium tracking-tight lowercase m-0">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75 m-0">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <section className="glass-card p-6 md:p-8 fade-up delay-2">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight lowercase m-0">
          combine hosting and service management
        </h2>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/76 m-0 max-w-3xl">
          choose a single package that includes managed hosting and minecraft
          service execution for a frictionless deployment lifecycle.
        </p>
      </section>
    </PageShell>
  );
}

export default MinecraftServices;
