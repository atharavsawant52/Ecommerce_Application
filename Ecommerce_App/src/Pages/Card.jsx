import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { asyncgetproducts } from "../actions/ProductAction";
import "../Pages/Card.css";
import { addToCart } from "../actions/cartAction";
import { addToWishlist } from "../actions/addToWishlist";

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
    wishlistItems.forEach((item) => {
      initialWishlist[item.id] = true;
    });
    setWishlist(initialWishlist);
  }, [wishlistItems]);

  const getRandomDiscount = () => {
    const discounts = [20, 50, 80]; // Allowed discount values
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  const handleAddToCart = (product) => {
    const discount = getRandomDiscount();
    const discountedPrice = Math.floor(
      product.price * 80 * (1 - discount / 100)
    );

    const updatedProduct = {
      ...product,
      price: Math.floor(product.price * 80),
      discount: discount,
      discountedPrice: discountedPrice, // Adding discounted price to product
    };
    dispatch(addToCart(updatedProduct));
  };

  const handleAddToWishlist = (product) => {
    const isInWishlist = wishlist[product.id];
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
      setWishlist({ ...wishlist, [product.id]: false });
    } else {
      dispatch(addToWishlist(product));
      setWishlist({ ...wishlist, [product.id]: true });
    }
  };

  return (
    <>
      {products.map((data, index) => {
        const discount = getRandomDiscount();
        const discountedPrice = Math.floor(
          data.price * 80 * (1 - discount / 100)
        );

        return (
          <div className="card" key={index}>
            <div className="discount-badge">{discount}%</div>
            <img src={data.image} alt={data.title} className="image" />
            <h3 className="title">{data.title}</h3>
            <div className="price-container">
              <span className="new-price">₹{discountedPrice}</span>
              <span className="old-price">₹{Math.floor(data.price * 160)}</span>
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
        );
      })}
    </>
  );
}

export default Card;
