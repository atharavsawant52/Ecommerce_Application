import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import { FaSearch, FaHeart, FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
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

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>E-COMMERCE</h1>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        {!user && (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </>
        )}
      </ul>

      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link to="/submit" type="submit">
          <FaSearch />
        </Link>
      </form>

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
