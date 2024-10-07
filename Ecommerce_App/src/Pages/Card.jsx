import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { asyncgetproducts } from "../actions/ProductAction";
import "../Pages/Card.css";
import { addToCart } from "../actions/cartAction";
import { addToWishlist } from "../actions/addToWishlist";

function Card() {
  const { products } = useSelector((state) => state.product);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  // State to track whether the item is in the wishlist
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  // Initialize wishlist state based on existing wishlist items
  useEffect(() => {
    const initialWishlist = {};
    wishlistItems.forEach(item => {
      initialWishlist[item.id] = true; // assuming item has a unique id
    });
    setWishlist(initialWishlist);
  }, [wishlistItems]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    const isInWishlist = wishlist[product.id]; // Check if the product is already in the wishlist
    if (isInWishlist) {
      // If the product is already in the wishlist, remove it
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
      setWishlist({ ...wishlist, [product.id]: false }); // Update the wishlist state
    } else {
      // If not, add it to the wishlist
      dispatch(addToWishlist(product));
      setWishlist({ ...wishlist, [product.id]: true }); // Update the wishlist state
    }
  };

  return (
    <>
      {products.map((data, index) => (
        <div className="card" key={index}>
          <div className="discount-badge">
            {(data.price * 80 * 100) / (data.price * 160)}%
          </div>
          <img src={data.image} alt={data.title} className="image" />
          <h3 className="title">{data.title}</h3>
          <div className="price-container">
            <span className="new-price">₹{data.price * 80}</span>
            <span className="old-price">₹{data.price * 160}</span>
          </div>
          <div>
            <button
              className="addToCartBtn"
              onClick={() => handleAddToCart(data)}
            >
              Add to Cart
            </button>
            <button 
              className="addToWishlistBtn" 
              onClick={() => handleAddToWishlist(data)} 
              style={{ color: wishlist[data.id] ? 'red' : 'black' }} // Conditional color
            >
              <FaHeart />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
