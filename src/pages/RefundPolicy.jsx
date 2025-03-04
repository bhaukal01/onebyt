import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="container">
        <h1 className="text-center">Refund Policy</h1>
        <section>
          <p>
            At <strong>OneByt Cloud Systems</strong>, we are committed to
            providing high-quality cloud solutions. If you are not satisfied
            with your purchase, we offer a refund policy under certain
            conditions.
          </p>
        </section>

        <section>
          <h2>2. Eligibility for Refunds</h2>
          <p>Refunds are available for the following services:</p>
          <ul>
            <li>Web hosting plans (if canceled within 3 days of purchase).</li>
            <li>
              Game hosting services (if technical issues persist and cannot be
              resolved or within 24 hrs of purchase).
            </li>
            <li>
              Web development services (only if the project has not been
              started).
            </li>
            <li>Minecraft services (If development hasn't been started).</li>
          </ul>
        </section>

        <section>
          <h2>4. Refund Process</h2>
          <p>
            To request a refund, please contact our support team via our{" "}
            <a href="/contact-us">Contact Us</a> page. Include your order
            details and the reason for the refund request.
          </p>
          <p>
            Refunds will be processed within 7-10 business days after approval.
          </p>
        </section>

        <section>
          <h2>5. Late or Missing Refunds</h2>
          <p>
            If you haven't received a refund after we releasedthe funds, please
            check with your bank. If the issue persists, contact us at{" "}
            <strong>support@onebyt.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
