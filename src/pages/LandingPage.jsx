import "./home.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>OneByt Cloud Systems</h1>
          <p>
            Your One-Stop Solution for Web Hosting, Development, and Game
            Servers
          </p>
          <Link to="/plans" className="hero-btn">
            Explore Plans
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Full-Stack Web Development</h3>
            <p>
              Custom websites, eCommerce solutions, and business portals
              tailored for your needs.
            </p>
          </div>
          <div className="service-card">
            <h3>Game Hosting</h3>
            <p>
              High-performance hosting solutions for Minecraft and other
              multiplayer games.
            </p>
          </div>
          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>
              Scalable and reliable cloud web hosting for businesses and
              startups.
            </p>
          </div>
          <div className="service-card">
            <h3>WordPress & Shopify Development</h3>
            <p>
              We build and optimize WordPress, Shopify, and Wix stores for
              maximum performance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose OneByt?</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <h3>🚀 High Performance</h3>
            <p>Our servers are optimized for speed, stability, and security.</p>
          </div>
          <div className="reason-card">
            <h3>🔧 24/7 Support</h3>
            <p>
              We provide round-the-clock support to ensure your services run
              smoothly.
            </p>
          </div>
          <div className="reason-card">
            <h3>💡 Custom Solutions</h3>
            <p>
              Tailor-made web and hosting solutions to meet your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Get Started with OneByt Cloud Systems</h2>
        <p>
          Launch your website or game server today with our reliable hosting
          solutions.
        </p>
        <Link to="/contact-us" className="cta-btn">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default LandingPage;
