import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} OneByt Cloud Systems</p>
        <div>
          <Link className="text-light mx-2" to="/terms-conditions">
            Terms & Conditions
          </Link>
          <Link className="text-light mx-2" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="text-light mx-2" to="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
