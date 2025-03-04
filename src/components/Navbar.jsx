import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import ./Navbar.css";

function Navbar({ handleLogout }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/src/assets/onebyt-logo.png" alt="OneByt Logo" width={50} />
          OneByt Cloud Systems
        </Link>

        {/* Burger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2  lead font-weight-bold rounded">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2  lead font-weight-bold rounded">
              <Link className="nav-link text-white" to="/web-services">
                Web Services
              </Link>
            </li>
            <li className="nav-item mx-2  lead font-weight-bold rounded">
              <Link className="nav-link text-white" to="/minecraft-services">
                Minecraft Services
              </Link>
            </li>
            <li className="nav-item mx-2  lead font-weight-bold rounded">
              <Link className="nav-link text-white" to="/plans">
                Plans
              </Link>
            </li>
            <li className="nav-item mx-2 lead font-weight-bold bg-success  rounded">
              <Link className="nav-link text-white" to="/contact-us">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
