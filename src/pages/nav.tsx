import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

// Define an array of links
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About Me" },
  { to: "/education", text: "Education" },
  { to: "/projects", text: "Projects" },
  { to: "/contact", text: "Contacts" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>(""); // State to track the current page

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (page: string) => {
    setCurrentPage(page); // Update the current page
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };


  return (
    <nav className="navbar">
      {/* Navbar List (Left) */}
      <ul className={`navbar-list ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link, index) => (
          <li key={index} className="navbar-item">
            <Link
              to={link.to}
              className={`navbar-link ${currentPage === link.to ? "active" : ""}`}
              onClick={() => closeMenu(link.to)} // Pass the page to closeMenu
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Links (Right) */}
      <div className="navbar-social">
        <a
          href="https://www.instagram.com/nick.shahbazzz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://imgur.com/8e2hzLT.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nick-shahbaz-b258b8241/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://imgur.com/JSibq6F.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/Shazzz135"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://imgur.com/3LisyfA.png"
            alt="GitHub"
          />
        </a>
      </div>

      {/* Toggle Button (For Mobile) */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;