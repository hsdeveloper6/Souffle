// src/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Soufflé</h2>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;