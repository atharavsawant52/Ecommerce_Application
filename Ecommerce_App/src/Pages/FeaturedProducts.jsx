// FeaturedProducts.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../actions/ProductAction";
import "../Pages/FeaturedProducts.css";

function FeaturedProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="featured-items">
        {products.slice(0, 4).map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹{Math.floor(product.price * 20)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
