import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ onOpenModal }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Find Jobs</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Find Talents</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Testimonials</a></li>
          </ul>
        </div>

        <button className="btn create-job-btn" onClick={() => {
          console.log("Create Jobs button clicked!");
          if (onOpenModal) {
            onOpenModal();
          } else {
            console.error("onOpenModal is undefined!");
          }
        }}>
          <span className="create-text">Create Jobs</span>
          <span className="login-text">Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
