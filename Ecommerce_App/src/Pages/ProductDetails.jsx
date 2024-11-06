import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Pages/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="image-gallery">
          <img className="main-image" src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="price">₹{Math.floor(product.price * 80)}</p>
          
          <div className="quantity-selector">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          
          <div className="action-buttons">
            <button className="buy-now-btn">Buy Now</button>
            <button className="wishlist-btn">Add to Wishlist</button>
          </div>
        </div>
      </div>
      <div className="delivery-info">
        <p className="delivery-option">
          <span className="icon">🚚</span> Free Delivery
        </p>
        <p className="delivery-option">
          <span className="icon">🔒</span> Secure Checkout
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
