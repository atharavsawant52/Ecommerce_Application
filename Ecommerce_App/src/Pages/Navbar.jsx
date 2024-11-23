import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaRegUserCircle, FaBars } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown";
import { clearUserFromLocalStorage } from "../utils/localStorage";
import "../Pages/Navbar.css";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserFromLocalStorage();
    dispatch({ type: "LOGOUT" });
    setDropdownOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/Newupdate", { state: { query: searchQuery } });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Function to handle link click: closes menu and highlights current page
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>E-COMMERCE</h1>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      {/* Navigation links with dynamic class for mobile view */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={handleLinkClick}
          >
            About
          </Link>
        </li>
        {!user && (
          <>
            <li>
              <Link
                to="/signup"
                className={location.pathname === "/signup" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={location.pathname === "/login" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Log In
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Search bar */}
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {/* Icons for wishlist, cart, and user profile */}
      <div className="icons">
        <Link to="/wishlist" className="icon-container">
          <FaHeart />
          <span className="count">{wishlistItems ? wishlistItems.length : 0}</span>
        </Link>
        <Link to="/cart" className="icon-container">
          <FaShoppingCart />
          <span className="count">{cartItems ? cartItems.length : 0}</span>
        </Link>
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
