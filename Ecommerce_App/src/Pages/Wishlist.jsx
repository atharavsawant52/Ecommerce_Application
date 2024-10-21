import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../actions/addToWishlist";
import { FaTrash } from "react-icons/fa";
import { saveWishlistToLocalStorage, getWishlistFromLocalStorage } from "../utils/localStorage"; // Import your utility functions
import "../Pages/Wishlist.css";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  useEffect(() => {
    // Initial loading from local storage
    const storedWishlist = getWishlistFromLocalStorage();
    // You can dispatch an action to load these into your Redux store if needed
  }, []);

  useEffect(() => {
    // Save wishlist to local storage whenever it changes
    saveWishlistToLocalStorage(wishlistItems);
  }, [wishlistItems]);

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">Wishlist ({wishlistItems.length})</h2>
      <div className="wishlist-items">
        {wishlistItems.length === 0 ? (
          <p className="empty-message">Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.title} className="wishlist-image" />
              <div className="item-info">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">₹{Math.floor(item.price * 80)}</p>
              </div>
              <button className="remove-button" onClick={() => handleRemoveFromWishlist(item)}>
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;
