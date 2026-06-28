import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon"></div>
        <div className="logo-text">
          <span className="brand-name">CODWAYS</span>
          <span className="brand-sub">Hackathon Portal</span>
        </div>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#hackathons">Hackathons</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="navbar-auth">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;