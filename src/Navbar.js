import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/portfolio/">Home</Link>
      <Link to="/project">Project</Link>
      <Link to="/form">Form</Link>
    </nav>
  );
};

export default Navbar;
