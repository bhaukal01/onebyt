import React from "react";
import "./PrivacyPolicy.css"; // Custom styling for this page

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="container">
        <h1 className="text-center">Privacy Policy</h1>
        <p className="text-center">Last Updated: [Insert Date]</p>

        <section>
          <h2>1. General Provisions</h2>
          <p>
            OneByt Cloud Systems is committed to ensuring the privacy and
            security of your personal information. We store and process data in
            compliance with the **General Data Protection Regulation (GDPR)**.
          </p>
          <p>
            This Privacy Policy applies to all OneByt Cloud Systems customers
            and the services we offer. By accepting this policy, you consent to
            the processing of your personal data, including **collection,
            storage, modification, and deletion**.
          </p>
        </section>

        <section>
          <h2>2. Collection & Use of Personal Information</h2>
          <p>
            When registering on our website and purchasing services, we may
            collect the following information:
          </p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing address</li>
          </ul>
          <p>
            You can browse the OneByt Cloud Systems website **without disclosing
            personal data**, but to use our services, registration with accurate
            details is required.
          </p>
        </section>

        <section>
          <h2>3. Purpose of Data Processing</h2>
          <p>
            We collect and process personal data for the following purposes:
          </p>
          <ul>
            <li>Managing your account and services</li>
            <li>Processing payments securely</li>
            <li>Notifying users of service updates, changes, or OneByt news</li>
            <li>Ensuring compliance with industry regulations</li>
          </ul>
        </section>

        <section>
          <h2>4. User Responsibility</h2>
          <p>
            You are **solely responsible** for the accuracy of the personal
            information you provide. OneByt Cloud Systems reserves the right to
            **terminate services** if false or stolen personal data is detected.
          </p>
        </section>

        <section>
          <h2>5. Data Sharing & Disclosure</h2>
          <p>
            Your personal data will **not** be sold, rented, or transferred to
            third parties.
          </p>
          <p>However, we may disclose data in the following cases:</p>
          <ul>
            <li>With your consent for specific services</li>
            <li>To ensure user safety and protect OneByt’s legal rights</li>
            <li>If required by law in a specific country</li>
            <li>
              If your actions violate our Terms of Service or legal regulations
            </li>
          </ul>
          <p>
            If you **disagree** with these terms, please refrain from using our
            services.
          </p>
        </section>

        <section>
          <h2>6. Privacy Policy Updates</h2>
          <p>
            OneByt Cloud Systems may update this Privacy Policy at any time
            **without prior notice**. Please review this page regularly to stay
            informed of any changes.
          </p>
        </section>

        <p className="text-center mt-4">
          <strong>
            For any privacy concerns, contact us at{" "}
            <a href="/contact-us">Contact Us</a>.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
