// Navbar.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown";
import { clearUserFromLocalStorage } from "../utils/localStorage";
import "../Pages/Navbar.css";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const user = useSelector((state) => state.user.user); // Ensure correct destructuring
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Logout handler
  const handleLogout = () => {
    clearUserFromLocalStorage();
    dispatch({ type: "LOGOUT" });
    setDropdownOpen(false);
  };

  // Dropdown toggle for user profile
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>E-COMMERCE</h1>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* Render Sign Up/Log In link only if user is not logged in */}
        {!user && (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </>
        )}
      </ul>

      <div className="search-bar">
        <input type="text" placeholder="What are you looking for?" />
        <button>
          <FaSearch /> {/* Search Icon */}
        </button>
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

        {/* Show profile icon only when user is logged in */}
        {user && (
          <div className="icon-container" onClick={toggleDropdown}>
            <FaRegUserCircle />
            {isDropdownOpen && <ProfileDropdown handleLogout={handleLogout} />}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
