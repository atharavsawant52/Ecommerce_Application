import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { asyncgetproducts } from "../actions/ProductAction";
import "../Pages/Card.css";
import { addToCart } from "../actions/cartAction";
import { addToWishlist, removeFromWishlist } from "../actions/addToWishlist"; // Import remove from wishlist

function Card() {
  const { products } = useSelector((state) => state.product);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  useEffect(() => {
    const initialWishlist = {};
    const filteredWishlistItems = wishlistItems.filter(item => item !== null && item !== undefined);
    
    filteredWishlistItems.forEach((item) => {
      if (item && item.id) { // Ensure item and item.id are valid
        initialWishlist[item.id] = true;
      }
    });
    
    setWishlist(initialWishlist);
  }, [wishlistItems]);

  const handleAddToCart = (product) => {
    const updatedProduct = {
      ...product,
      price: Math.floor(product.price * 80), // Assuming you still want to apply this for the cart
    };
    dispatch(addToCart(updatedProduct));
  };

  const handleAddToWishlist = (product) => {
    const isInWishlist = wishlist[product.id] || false;
    if (isInWishlist) {
      dispatch(removeFromWishlist(product)); // Use the correct action
      setWishlist((prevWishlist) => ({
        ...prevWishlist,
        [product.id]: false,
      }));
    } else {
      dispatch(addToWishlist(product));
      setWishlist((prevWishlist) => ({
        ...prevWishlist,
        [product.id]: true,
      }));
    }
  };

  return (
    <>
      {products.map((data, index) => (
        <div className="card" key={index}>
          <img src={data.image} alt={data.title} className="image" />
          <h3 className="title">{data.title}</h3>
          <div className="price-container">
            <span className="new-price">₹{Math.floor(data.price * 80)}</span>
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
              style={{ color: wishlist[data.id] ? "red" : "black" }}
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
