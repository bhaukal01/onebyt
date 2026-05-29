import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "navigation",
      items: [
        { label: "home", href: "#home" },
        { label: "services", href: "#services" },
        { label: "providers", href: "#providers" },
      ],
    },
    {
      title: "offerings",
      items: [
        { label: "deployment management", href: "#services" },
        { label: "minecraft services", href: "#services" },
        { label: "plans", href: "#plans" },
      ],
    },
    {
      title: "contact",
      items: [
        { label: "book onboarding", href: "#contact" },
        {
          label: "support@onebyt.systems",
          href: "mailto:support@onebyt.systems",
        },
        { label: "+91 7367036311", href: "tel:+917367036311" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h5 className="text-sm uppercase tracking-[0.18em] text-white/65 mb-4">
                {column.title}
              </h5>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <a
            href="#home"
            className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3"
          >
            <BrandLogo className="h-5 w-5" />
            <span className="text-sm tracking-tight text-white">
              onebyt.systems
            </span>
          </a>
          <div className="flex flex-col md:items-end gap-2 text-sm text-white/60">
            <div className="flex gap-4">
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                privacy policy
              </Link>
              <Link
                to="/refund-policy"
                className="hover:text-white transition-colors"
              >
                refund policy
              </Link>
              <Link
                to="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                terms & conditions
              </Link>
            </div>
            <p>© {year} onebyt cloud systems. all rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
