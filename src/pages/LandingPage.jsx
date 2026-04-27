import { useEffect, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import providers from "../data/providers.json";

const deploymentServices = [
  {
    title: "static and plain web hosting",
    description:
      "managed nginx and cdn-backed hosting for static and plain websites with autoscaling-ready infra.",
  },
  {
    title: "react and frontend release management",
    description:
      "zero-downtime build pipelines, environment promotion, cache strategy, and rollback workflows.",
  },
  {
    title: "api runtime operations",
    description:
      "containerized api deployments, traffic routing, rate controls, and health monitoring in production.",
  },
  {
    title: "database management",
    description:
      "backup automation, replication, query health, and secure connection governance for live workloads.",
  },
  {
    title: "ci/cd automation",
    description:
      "git-based continuous delivery pipelines wired to staging and production with approval gates.",
  },
  {
    title: "uptime and incident handling",
    description:
      "24/7 alerting, log analysis, and remediation playbooks to keep applications online and responsive.",
  },
];

const minecraftServices = [
  {
    title: "proxy development",
    description:
      "multi-node proxy topologies for large communities and seamless server transitions.",
  },
  {
    title: "survival ecosystem setup",
    description:
      "economy balancing, world tuning, and plugin orchestration for long-term survival servers.",
  },
  {
    title: "bedwars and minigame systems",
    description:
      "arena logic, matchmaking automation, and synchronized game-state infrastructure.",
  },
  {
    title: "performance and anti-cheat hardening",
    description:
      "tick optimization, memory tuning, exploit protection, and operational monitoring.",
  },
];

const deploymentPlans = [
  {
    name: "plain web launch",
    price: "1499",
    bestFor: "brochure and plain web hosting",
    features: [
      "single region deployment",
      "managed ssl and dns",
      "weekly backup snapshots",
      "basic uptime monitoring",
    ],
  },
  {
    name: "react production",
    price: "3499",
    bestFor: "react, vite, and static app deployments",
    features: [
      "ci/cd with branch previews",
      "global cdn caching",
      "release rollback policy",
      "performance budget reports",
    ],
  },
  {
    name: "api reliability",
    price: "5999",
    bestFor: "node, python, and containerized apis",
    features: [
      "autoscaling runtime",
      "health checks and alerts",
      "rate limiting and waf",
      "error tracing dashboards",
    ],
  },
  {
    name: "database ops",
    price: "7499",
    bestFor: "mysql, postgres, and mongodb operations",
    features: [
      "backup + restore drills",
      "replication monitoring",
      "query performance review",
      "access policy hardening",
    ],
  },
  {
    name: "fullstack scale",
    price: "9999",
    bestFor: "frontend + api + database production stacks",
    features: [
      "multi-service orchestration",
      "staging-to-production promotion",
      "incident response support",
      "monthly architecture review",
    ],
  },
];

const minecraftPlans = [
  {
    name: "proxy network",
    price: "3999",
    bestFor: "bungeecord and velocity ecosystems",
    features: [
      "proxy setup + routing",
      "lobby and fallback config",
      "ddos-aware edge setup",
      "daily health checks",
    ],
  },
  {
    name: "survival management",
    price: "5499",
    bestFor: "community survival servers",
    features: [
      "economy and rank setup",
      "plugin optimization",
      "backup and restore",
      "weekly tuning pass",
    ],
  },
  {
    name: "bedwars operations",
    price: "7499",
    bestFor: "competitive bedwars clusters",
    features: [
      "arena logic implementation",
      "anti-cheat baseline",
      "latency-aware node selection",
      "event-day support",
    ],
  },
  {
    name: "custom minigame stack",
    price: "11499",
    bestFor: "multi-mode server networks",
    features: [
      "custom game mode workflows",
      "cross-server data sync",
      "performance load tests",
      "priority response support",
    ],
  },
];

function ScrollSection({ id, eyebrow, title, subtitle, children }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="relative px-6 md:px-10 py-12 md:py-20">
      <Motion.div
        className="section-surface"
        style={{
          transformPerspective: 1600,
          willChange: "transform, opacity",
        }}
        initial={
          reduceMotion
            ? { opacity: 1, y: 0, rotateX: 0 }
            : { opacity: 0, y: 86, rotateX: 11 }
        }
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ amount: 0.25, once: false }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="mt-7 md:mt-9">{children}</div>
      </Motion.div>
    </section>
  );
}

function InteractiveCard({ className = "", children }) {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (event) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  };

  const handleMouseLeave = () => {
    setPointer({ x: 50, y: 50 });
  };

  return (
    <Motion.article
      className={`interactive-card rounded-3xl border border-white/14 bg-neutral-900/72 p-5 md:p-6 backdrop-blur ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mx": `${pointer.x}%`,
        "--my": `${pointer.y}%`,
        transformPerspective: 1100,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.015,
              rotateX: 4,
              rotateY: -4,
              transition: {
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
    >
      {children}
    </Motion.article>
  );
}

function LandingPage() {
  const [activeTab, setActiveTab] = useState("deployment");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.2,
    });

    let frameId = 0;

    const frame = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(frame);
    };

    frameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [reduceMotion]);

  const plans = activeTab === "deployment" ? deploymentPlans : minecraftPlans;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("request submitted. our deployment team will contact you shortly.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("failed: " + (data.error || "unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("network error processing submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="home" className="bg-black text-white">
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black" />

        <div className="relative z-10 h-full w-full">
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%]">
            deploy
          </h1>
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[38%] text-right">
            any
          </h1>
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%]">
            app
          </h1>

          <div className="absolute left-6 md:left-10 top-[40%] max-w-sm flex flex-col items-start gap-6 z-20">
            <p className="max-w-[260px] text-[15px] leading-snug text-white/90 m-0">
              we manage deployments and hosting for web apps, apis, databases, and
              minecraft infrastructure with reliable cloud-first operations.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#plans"
                className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
              >
                explore plans
              </a>
              <a
                href="#contact"
                className="bg-neutral-900/90 text-white text-sm rounded-full px-6 py-3 border border-white/15 hover:text-white transition-colors"
              >
                book onboarding
              </a>
            </div>
          </div>

          <div className="absolute right-6 md:right-24 top-[14%]">
            <div className="flex items-center gap-3 justify-end">
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
              <span className="text-4xl md:text-5xl font-medium tracking-tight">
                99.9%
              </span>
            </div>
            <p className="text-xs md:text-sm text-white/70 mt-1 text-right">
              uptime delivered
            </p>
          </div>

          <div className="absolute left-6 md:left-20 bottom-22 md:bottom-24 hidden md:block">
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl font-medium tracking-tight">
                +10k
              </span>
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
            </div>
            <p className="text-xs md:text-sm text-white/70 mt-1">
              deployments managed
            </p>
          </div>

          <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20">
            <div className="flex items-center gap-3 justify-end">
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
              <span className="text-4xl md:text-5xl font-medium tracking-tight">
                10+
              </span>
            </div>
            <p className="text-xs md:text-sm text-white/70 mt-1 text-right">
              provider networks
            </p>
          </div>
        </div>
      </section>

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

      <ScrollSection
        id="plans"
        eyebrow="plans"
        title="choose a managed deployment lane"
        subtitle="switch between deployment services and minecraft services plans using the in-section tabs."
      >
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/80 p-2 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("deployment")}
            className={`rounded-full px-5 py-2 text-sm transition-colors ${
              activeTab === "deployment"
                ? "bg-white text-black"
                : "text-white/75 hover:text-white"
            }`}
          >
            deployment services
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("minecraft")}
            className={`rounded-full px-5 py-2 text-sm transition-colors ${
              activeTab === "minecraft"
                ? "bg-white text-black"
                : "text-white/75 hover:text-white"
            }`}
          >
            minecraft services
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </ScrollSection>

      <ScrollSection
        id="contact"
        eyebrow="contact"
        title="talk to the deployment operations team"
        subtitle="share your current stack and traffic goals, and we will propose the provider layout, deployment lane, and maintenance scope."
      >
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <InteractiveCard>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight lowercase m-0">
              direct channels
            </h3>
            <div className="mt-4 space-y-3 text-sm text-white/78">
              <p className="m-0">email: support@onebyt.systems</p>
              <p className="m-0">phone: +91 7367036311</p>
              <p className="m-0">
                location: bh3 panchsakha nagar, bhubaneswar, odisha, india
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/14 bg-black/40 px-4 py-4 text-sm text-white/72 leading-relaxed">
              onboarding response time is usually within 6 hours for deployment
              requests and within 12 hours for minecraft development requests.
            </div>
          </InteractiveCard>

          <InteractiveCard>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                  name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25"
                  placeholder="your name"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                  email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className="w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25"
                  placeholder="your email"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-white/65 mb-2">
                  requirement
                </label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className="w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25 resize-y"
                  placeholder="tell us your app type, stack, expected traffic, and timeline"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "submitting..." : "submit request"}
              </button>
            </form>
          </InteractiveCard>
        </div>
      </ScrollSection>
    </div>
  );
}

export default LandingPage;
