import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Services */}
          <div className="col-md-4">
            <h5>Services</h5>
            <ul>
              <li>
                <a href="/minecraft-services">Minecraft Services</a>
              </li>
              <li>
                <a href="/web-services">Web Services</a>
              </li>
              <li>
                <a href="/plans">Minecraft Server Hosting</a>
              </li>
              <li>
                <a href="/plans/#web">Web Hosting</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-4">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-4">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/partners">Partners</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="brand">
            <img
              src="/src/assets/onebyt-logo.png"
              alt="OneByt Logo"
              className="logo"
            />
            <span className="company-name">OneByt Cloud Systems</span>
          </div>
          <p>© 2025 OneByt Cloud Systems. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
