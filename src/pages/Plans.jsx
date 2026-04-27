import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";

function Plans() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "bungee plan",
      details: "only for proxy servers",
      price: "180",
      ram: "2GB RAM",
      storage: "10GB SSD",
      players: "10 Players",
      databases: "1 Database",
      backup: "1 Backup",
      portallocations: "1 Port Allocation",
      cpu: "100",
    },
    {
      name: "standard plan",
      details: "balanced setup for growing servers",
      price: "360",
      ram: "4GB RAM",
      storage: "20GB SSD",
      players: "20 Players",
      databases: "2 Databases",
      backup: "1 Backups",
      portallocations: "1 Port Allocation",
      cpu: "150",
    },
    {
      name: "advanced plan",
      details: "higher concurrency and plugin workloads",
      price: "540",
      ram: "6GB RAM",
      storage: "30GB SSD",
      players: "30 Players",
      databases: "3 Databases",
      backup: "1 Backups",
      portallocations: "1 Port Allocations",
      cpu: "180",
    },
    {
      name: "pro plan",
      details: "optimized for intensive communities",
      price: "720",
      ram: "8GB RAM",
      storage: "40GB SSD",
      players: "40 Players",
      databases: "4 Databases",
      backup: "2 Backups",
      portallocations: "2 Port Allocations",
      cpu: "220",
    },
    {
      name: "elite plan",
      details: "large-scale gameplay sessions",
      price: "1080",
      ram: "12GB RAM",
      storage: "60GB SSD",
      players: "60 Players",
      databases: "5 Databases",
      backup: "2 Backups",
      portallocations: "3 Port Allocations  ",
      cpu: "300",
    },
    {
      name: "ultimate plan",
      details: "premium performance profile",
      price: "1440",
      ram: "16GB RAM",
      storage: "80GB SSD",
      players: "80 Players",
      databases: "6 Databases",
      backup: "3 Backups",
      portallocations: "4 Port Allocations",
      cpu: "350",
    },
    {
      name: "mega plan",
      details: "for broad multi-world ecosystems",
      price: "2160",
      ram: "24GB RAM",
      storage: "100GB SSD",
      players: "100 Players",
      databases: "7 Databases",
      backup: "3 Backups",
      portallocations: "4 Port Allocations",
      cpu: "400",
    },
    {
      name: "extreme plan",
      details: "enterprise-grade throughput",
      price: "2880",
      ram: "32GB RAM",
      storage: "150GB SSD",
      players: "150 Players",
      databases: "8  Databases",
      backup: "4 Backups",
      portallocations: "5 Port Allocations",
      cpu: "500",
    },
  ];

  const handleSelectPlan = (plan) => {
    navigate("/checkout", { state: { plan } });
  };

  return (
    <PageShell
      eyebrow="pricing"
      title="hosting plans built for reliable runtime"
      subtitle="choose a minecraft hosting profile and let our team handle node allocation, monitoring, and uptime management end to end."
    >
      <section className="glass-card p-6 md:p-8 fade-up delay-1">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
          minecraft hosting plans
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-3xl border border-white/14 bg-black/35 p-5 flex flex-col"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-white/55 m-0">
                {plan.details}
              </p>
              <h3 className="mt-2 text-xl font-medium tracking-tight lowercase">
                {plan.name}
              </h3>
              <p className="mt-3 text-3xl font-medium tracking-tight">
                ₹{plan.price}
                <span className="ml-1 text-sm text-white/60">/month</span>
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/78">
                <li>{plan.ram}</li>
                <li>{plan.storage}</li>
                <li>
                  {plan.backup} • {plan.databases}
                </li>
                <li>{plan.portallocations}</li>
                <li>{plan.players}</li>
                <li>{plan.cpu}% intel xeon cpu</li>
              </ul>

              <button
                className="mt-6 w-full bg-white text-black text-sm font-normal rounded-full px-5 py-3 hover:bg-neutral-200 transition-colors"
                onClick={() => handleSelectPlan(plan)}
              >
                select plan
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card p-6 md:p-8 fade-up delay-2">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight lowercase">
          web hosting plans
        </h2>
        <p className="mt-3 text-white/75 leading-relaxed max-w-2xl">
          managed web hosting tiers are currently being finalized with provider
          benchmarking and route optimization. launch-ready pricing will be
          published soon.
        </p>
        <div className="mt-5 inline-flex items-center rounded-full border border-white/18 bg-black/40 px-4 py-2 text-sm text-white/80 lowercase">
          coming soon
        </div>
      </section>
    </PageShell>
  );
}

export default Plans;
