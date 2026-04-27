import PageShell from "../components/PageShell";

function ShippingDelivery() {
  return (
    <PageShell
      eyebrow="policy"
      title="shipping and delivery"
      subtitle="all onebyt.systems offerings are digital services delivered through electronic activation and support channels."
    >
      <article className="glass-card p-6 md:p-8 policy-copy fade-up delay-1 space-y-4">
        <p>
          we deliver digital services only, so fulfillment is electronic and no
          physical shipping is involved.
        </p>
        <ul className="list-disc space-y-2">
          <li>
            hosting plans and domains are typically activated within 24 hours.
          </li>
          <li>
            custom web development timelines depend on project scope and agreed
            milestones.
          </li>
          <li>
            for delivery-status updates, reach out through our contact support
            channel.
          </li>
        </ul>
      </article>
    </PageShell>
  );
}

export default ShippingDelivery;
