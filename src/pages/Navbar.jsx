import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/navbar.css";

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Cheksiz Nasiya" />

      <b>
        <ul>
          <li><Link to="/" onClick={() => handleScroll("home")}>Home</Link></li>
          <li><Link to="/about" onClick={() => handleScroll("about")}>About</Link></li>
          <li><Link to="/services" onClick={() => handleScroll("services")}>Services</Link></li>
          <li><Link to="/contacts" onClick={() => handleScroll("contacts")}>Contacts</Link></li>
        </ul>
      </b>
    </nav>
  );
};

export default Navbar;
