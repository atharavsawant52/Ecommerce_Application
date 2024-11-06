import React from 'react';
import { Link } from 'react-router-dom';
import './ProductStyles.css';  // Import the CSS file

function Product({ product }) {
  return (
    <div className="product-card">
      <img className="product-card__image" src={product.image} alt={product.title} />
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__price">₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="product-card__btn">View Details</Link>
    </div>
  );
}

export default Product;
