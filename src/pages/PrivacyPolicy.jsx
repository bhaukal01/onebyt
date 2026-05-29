import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

const sections = [
  {
    title: "privacy commitment",
    paragraphs: [
      "we are committed to protecting your personal information and we do not sell or rent personal data without explicit consent.",
      "this policy applies to services operated under onebyt cloud systems and explains how we collect, use, and retain information.",
    ],
  },
  {
    title: "information we collect",
    paragraphs: [
      "we collect details necessary to process orders, deliver support, and improve service quality.",
      "technical metadata such as ip address and device information may be used for diagnostics, security, and analytics.",
    ],
  },
  {
    title: "cookies and analytics",
    paragraphs: [
      "cookies help us maintain session continuity, understand usage patterns, and improve user experience.",
      "you can disable cookies in browser settings, though some platform features may be affected.",
    ],
  },
  {
    title: "security and retention",
    paragraphs: [
      "we apply administrative, technical, and operational controls to protect customer data.",
      "data is retained only for as long as required to fulfill service, legal, and operational obligations.",
    ],
  },
];

const cookieTypes = [
  "essential: required for core platform functionality",
  "functional: remember your preferences for smoother experience",
  "analytics: help us measure traffic and improve content",
  "advertising: support relevant campaign delivery where applicable",
];

const PrivacyPolicy = () => {
  return (
    
    <PageShell
      eyebrow="policy"
      title="privacy policy"
      subtitle="last updated: 04-03-2025"
    >

      <article className="glass-card p-6 md:p-8 policy-copy fade-up delay-1 space-y-8">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="space-y-3">
          <h2>cookie categories</h2>
          <ul className="list-disc space-y-2">
            {cookieTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            for details on partner analytics practices, refer to{" "}
            <a
              href="https://www.google.com/policies/privacy/partners"
              className="policy-link"
              target="_blank"
              rel="noreferrer"
            >
              google privacy partners
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2>policy updates</h2>
          <p>
            onebyt cloud systems may update this policy without prior notice.
            please review this page periodically to stay informed.
          </p>
        </section>

        <p>
          for privacy concerns, connect via{" "}
          <Link to="/contact-us" className="policy-link">
            contact us
          </Link>
          .
        </p>
      </article>
    </PageShell>
  );
};

export default PrivacyPolicy;
