import "./WebServices.css";

function WebServices() {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Web Services</h1>
        <p>Empowering businesses with robust and scalable web solutions.</p>
      </header>

      <div className="services-grid">
        {/* Full-Stack Development */}
        <div className="service-card">
          <h2>Full-Stack Web Development</h2>
          <p>
            We build modern web applications using React, Angular, Node.js,
            Express, and MongoDB to deliver high-performance, scalable
            solutions.
          </p>
        </div>

        {/* WordPress Development */}
        <div className="service-card">
          <h2>WordPress Development</h2>
          <p>
            Custom WordPress websites with themes, plugins, and eCommerce
            solutions tailored to your business needs.
          </p>
        </div>

        {/* Shopify Development */}
        <div className="service-card">
          <h2>Shopify Development</h2>
          <p>
            Build and optimize your online store with Shopify. We provide custom
            themes, integrations, and performance enhancements.
          </p>
        </div>

        {/* Wix Development */}
        <div className="service-card">
          <h2>Wix Website Development</h2>
          <p>
            Get a stunning Wix-based website designed with SEO-friendly features
            and seamless user experience.
          </p>
        </div>

        {/* eCommerce Development */}
        <div className="service-card">
          <h2>eCommerce Solutions</h2>
          <p>
            Build your online store with Shopify, WooCommerce, Wix, or custom
            solutions to drive sales and manage inventory efficiently.
          </p>
        </div>

        {/* Custom Web Solutions */}
        <div className="service-card">
          <h2>Custom Web Solutions</h2>
          <p>
            Need something unique? We create tailored web solutions that match
            your exact business requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebServices;
