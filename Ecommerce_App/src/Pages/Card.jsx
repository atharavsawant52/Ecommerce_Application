import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { asyncgetproducts } from "../actions/ProductAction";
import "../Pages/Card.css";
import { addToCart } from "../actions/cartAction";
import { addToWishlist, removeFromWishlist } from "../actions/addToWishlist";
import { useNavigate } from "react-router-dom";

function Card() {
  const { products } = useSelector((state) => state.product);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  useEffect(() => {
    const initialWishlist = new Set(wishlistItems.map(item => item?.id));
    setWishlist(initialWishlist);
  }, [wishlistItems]);

  const handleAddToCart = (product) => {
    const updatedProduct = {
      ...product,
      price: Math.floor(product.price * 20),
    };
    dispatch(addToCart(updatedProduct));
  };

  const handleAddToWishlist = (product) => {
    if (wishlist.has(product.id)) {
      dispatch(removeFromWishlist(product));
      setWishlist(prevWishlist => {
        const updatedWishlist = new Set(prevWishlist);
        updatedWishlist.delete(product.id);
        return updatedWishlist;
      });
    } else {
      dispatch(addToWishlist(product));
      setWishlist(prevWishlist => new Set(prevWishlist).add(product.id));
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {products.length > 0 ? (
        products.map((data) => (
          <div className="card" key={data.id} onClick={() => handleProductClick(data.id)}>
            <img src={data.image} alt={data.title} className="image" />
            <h3 className="title">{data.title}</h3>
            <div className="price-container">
              <span className="new-price">₹{Math.floor(data.price * 20)}</span>
            </div>
            <div>
              <button
                className="addToCartBtn"
                onClick={(e) => { e.stopPropagation(); handleAddToCart(data); }}
              >
                Add to Cart
              </button>
              <button
                className="addToWishlistBtn"
                onClick={(e) => { e.stopPropagation(); handleAddToWishlist(data); }}
                style={{ color: wishlist.has(data.id) ? "red" : "black" }}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </>
  );
}

export default Card;
