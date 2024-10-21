import React from 'react';
import { useSelector } from 'react-redux';  
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import '../Pages/Navbar.css';

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);

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
        <Link to="/wishlist" className="icon-container">
          <FaHeart />
          <span className="count">{wishlistItems ? wishlistItems.length : 0}</span> 
        </Link>
        <Link to="/cart" className="icon-container">
          <FaShoppingCart />
          <span className="count">{cartItems ? cartItems.length : 0}</span> 
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
