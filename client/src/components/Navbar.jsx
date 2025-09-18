import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <div className="brand-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12C2 17.52 6.48 22 12 22S22 17.52 22 12Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
            </svg>
          </div>
          <span className="brand-text">StreamFlex</span>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            <span className="nav-link-text">Home</span>
          </Link>
          <Link
            to="/about"
            className={`nav-link ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            <span className="nav-link-text">About</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
