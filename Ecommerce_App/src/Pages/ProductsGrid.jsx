// ProductsGrid.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../actions/ProductAction";
import "../Pages/ProductsGrid.css";

function ProductsGrid() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  return (
    <div className="products-grid">
      <h2>Our Products</h2>
      <div className="product-items">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹{Math.floor(product.price * 20)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
