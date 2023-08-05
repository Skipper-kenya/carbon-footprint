import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="top-left">
        <h3>Carbon-footprint Calculator</h3>
      </div>
      <div className="top-right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculate">Calculate</NavLink>
        <NavLink to="/compare">Compare</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
