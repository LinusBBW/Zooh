import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
