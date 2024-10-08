// src/Pages/Wishlist.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../actions/addToWishlist'; // Make sure to import the action correctly
import { FaTrash } from 'react-icons/fa';
import '../Pages/Wishlist.css'; // Create your CSS file for styling

function Wishlist() {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const dispatch = useDispatch();

    const handleRemoveFromWishlist = (item) => {
        dispatch(removeFromWishlist(item));
    };

    return (
        <div className="wishlist-container">
            <h2>Wishlist ({wishlistItems.length})</h2>
            <div className="wishlist-items">
                {wishlistItems.length === 0 ? (
                    <p>Your wishlist is empty.</p>
                ) : (
                    wishlistItems.map((item) => (
                        <div className="wishlist-item" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className="item-info">
                                <h3>{item.title}</h3>
                                <p>₹{Math.floor(item.price * 80)}</p>
                            </div>
                            <button onClick={() => handleRemoveFromWishlist(item)}>
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
