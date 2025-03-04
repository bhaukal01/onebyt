import React from "react";
import "./TermsConditions.css"; // Custom styling for this page

const TermsConditions = () => {
  return (
    <div className="terms-container">
      <div className="container">
        <h1 className="text-center">Terms & Conditions</h1>
        <p className="text-center">Last Updated: 4-03-2025</p>
        <p className="text-center">
          By Purchasing any server by Onebyt Cloud System you automatically
          agree with all the terms of service.
        </p>
        <br />

        <section>
          <h2>1. Server Usage Policy</h2>
          <p>
            We allow you to purchase our server for only fair use. Purchasing
            only a Bungee Server from OneByt Cloud Systems is not allowed. If we
            find a customer running only a Bungee server without backend servers
            hosted with us, we reserve the right to terminate the service
            immediately.
          </p>
          <p>
            At least 50% of backend servers connected to the Bungee must be
            hosted on OneByt Cloud Systems.
          </p>
        </section>

        <section>
          <h2>2. Refunds and Cancellations</h2>
          <p>
            All products are eligible for cancellation and a full **100%
            refund** within **24 hours** of purchase via our website or Discord
            support.
          </p>
          <p>
            Refunds are applicable only if the service was **not delivered** or
            **not in working condition**.
          </p>
        </section>

        <section>
          <h2>3. Liability</h2>
          <p>
            We are **not responsible** for any data loss. While we take
            **regular offsite backups**, we encourage users to keep their own
            backups. In case of any failure, **we are not liable for lost
            files**.
          </p>
        </section>

        <section>
          <h2>4. Community Conduct</h2>
          <p>
            When engaging with users or staff in our community, respectful
            behavior is expected. **Spam, harassment, or rude behavior** may
            result in account suspension.
          </p>
          <p>
            Any threats of **harm, discrimination, or illegal activity** will
            result in an immediate ban without warning.
          </p>
        </section>

        <section>
          <h2>5. Fair Use Policy</h2>
          <p>
            Our **game plans come with unmetered bandwidth and defined
            storage**. However, storage must be used fairly. The recommended
            guideline is **5GB of disk per 1GB of RAM**.
          </p>
          <p>
            Users **must not store unrelated files**, and we reserve the right
            to **suspend servers misusing resources**.
          </p>
        </section>

        <section>
          <h2>6. Prohibited Activities</h2>
          <p>
            Using our services for **DDoS attacks, crypto mining, high CPU/RAM
            usage, or illegal activities** will result in immediate termination
            **without refund**.
          </p>
        </section>

        <section>
          <h2>7. Payment & Late Fees</h2>
          <p>
            **Suspension Timeline:** If payment is late:
            <ul>
              <li>Day 1: Server is suspended.</li>
              <li>Day 3: A late fee is applied.</li>
              <li>Day 5: All files are permanently deleted.</li>
            </ul>
          </p>
        </section>

        <section>
          <h2>8. Privacy Policy</h2>
          <p>
            By using our services, you **agree to our Privacy Policy**, which
            you can find <a href="/privacy-policy">here</a>.
          </p>
        </section>

        <p className="text-center mt-4">
          <strong>
            For any queries, contact us at <a href="/contact-us">Contact Us</a>.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
