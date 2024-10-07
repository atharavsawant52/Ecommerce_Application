import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';  
import '../Pages/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>E-COMMERCE</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="What are you looking for?" />
        <button><FaSearch /></button>
      </div>
      <div className="icons">
        <a href="#"><FaHeart /></a>
        <a href="#"><FaShoppingCart />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
