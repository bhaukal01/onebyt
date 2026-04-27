import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

const sections = [
  {
    title: "1. acceptance of terms",
    content: [
      "by accessing or purchasing any service from onebyt cloud systems, you agree to these terms and conditions.",
      "we may revise this policy periodically, and continued usage implies acceptance of updates.",
    ],
  },
  {
    title: "2. eligibility",
    content: [
      "services are available only to users who can legally enter binding contracts under applicable law.",
      "onebyt cloud systems may suspend or terminate access where eligibility requirements are not met.",
    ],
  },
  {
    title: "3. account and communication",
    content: [
      "you must provide accurate and current information during order and account workflows.",
      "you consent to receive electronic service-related communications, updates, and notices.",
    ],
  },
  {
    title: "4. orders and pricing",
    content: [
      "all service listings are invitations to offer and remain subject to acceptance by onebyt cloud systems.",
      "we reserve the right to correct pricing or service-description errors before activation.",
    ],
  },
  {
    title: "5. user submissions",
    content: [
      "feedback, reviews, and suggestions provided to onebyt cloud systems may be used for operational and product improvement purposes.",
      "you are responsible for ensuring submitted content does not violate third-party rights or applicable laws.",
    ],
  },
];

const TermsConditions = () => {
  return (
    <PageShell
      eyebrow="policy"
      title="terms and conditions"
      subtitle="last updated: 04-03-2025"
    >
      <article className="glass-card p-6 md:p-8 policy-copy fade-up delay-1 space-y-8">
        <p>
          by purchasing any server or managed service from onebyt cloud systems, you
          agree to the terms of service listed on this page.
        </p>

        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2>{section.title}</h2>
            {section.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <p>
          for any terms-related questions, reach out through{" "}
          <Link to="/contact-us" className="policy-link">
            contact us
          </Link>
          .
        </p>
      </article>
    </PageShell>
  );
};

export default TermsConditions;
