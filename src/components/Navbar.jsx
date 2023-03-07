import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuopen, setMenuopen] = useState(false);
  function handleClick() {
    setMenuopen(!menuopen);
  }
  function closeMenu(){
    setMenuopen(false);
  }
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={menuopen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
      <ul className={`nav-menu ${menuopen ? "active" : ""}`}>
        <li>
          <Link className="nav-links" to="/" onClick={closeMenu}>
            <i className="fa-solid fa-house-user"></i>Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/about" onClick={closeMenu}>
            <i className="fa-solid fa-circle-info"></i>About
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/service" onClick={closeMenu}>
            <i className="fa-solid fa-briefcase"></i>Service
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/contact" onClick={closeMenu}>
            <i className="fa-solid fa-address-book"></i>Contact
          </Link>
        </li>
        <li>
          <Link className="nav-links-mobile" to="/signup">
            Sign Up
          </Link>
        </li>
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
