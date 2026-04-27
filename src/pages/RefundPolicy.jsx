import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

const RefundPolicy = () => {
  return (
    <PageShell
      eyebrow="policy"
      title="refund policy"
      subtitle="transparent handling for eligible service cancellations and unresolved technical failures."
    >
      <article className="glass-card p-6 md:p-8 policy-copy fade-up delay-1 space-y-8">
        <section className="space-y-3">
          <h2>1. policy overview</h2>
          <p>
            onebyt cloud systems is committed to high-quality managed hosting and
            deployment delivery. refunds are reviewed on a case-by-case basis
            under the conditions below.
          </p>
        </section>

        <section className="space-y-3">
          <h2>2. eligibility for refunds</h2>
          <ul className="list-disc space-y-2">
            <li>deployment service plans canceled within 3 days of purchase.</li>
            <li>
              minecraft service plans where persistent technical issues cannot be
              resolved, or within 24 hours of purchase.
            </li>
            <li>deployment setup and custom infrastructure work not yet started.</li>
            <li>minecraft service engagements not yet initiated.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2>3. refund process</h2>
          <p>
            submit your refund request through{" "}
            <Link to="/contact-us" className="policy-link">
              contact us
            </Link>
            , including order details and reason for cancellation.
          </p>
          <p>
            approved refunds are generally processed within 7-10 business days.
          </p>
        </section>

        <section className="space-y-3">
          <h2>4. late or missing refunds</h2>
          <p>
            if a refund remains pending after release from our side, please
            check with your payment provider or bank first, then contact
            support@onebyt.systems for escalation.
          </p>
        </section>
      </article>
    </PageShell>
  );
};

export default RefundPolicy;
