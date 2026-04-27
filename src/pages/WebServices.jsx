import PageShell from "../components/PageShell";

const webServices = [
  {
    title: "full-stack web development",
    description:
      "we build modern applications with react, angular, node.js, express, and mongodb for fast and scalable deployments.",
  },
  {
    title: "wordpress development",
    description:
      "custom wordpress builds with optimized themes, integrations, and secure commerce-ready architecture.",
  },
  {
    title: "shopify development",
    description:
      "tailored storefront experiences, performance optimization, and app-level integrations for growth-focused brands.",
  },
  {
    title: "wix website development",
    description:
      "seo-friendly wix sites designed for clean user journeys and strong conversion outcomes.",
  },
  {
    title: "ecommerce solutions",
    description:
      "from shopify and woocommerce to custom stacks, we architect robust online commerce systems.",
  },
  {
    title: "custom web solutions",
    description:
      "bespoke implementations for unique business workflows, with deployment and maintenance included.",
  },
];

function WebServices() {
  return (
    <PageShell
      eyebrow="services"
      title="web services for secure high-performance rollout"
      subtitle="we design, build, and host production-ready web platforms with strong reliability, speed, and long-term maintainability."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 fade-up delay-1">
        {webServices.map((service) => (
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
    </PageShell>
  );
}

export default WebServices;
