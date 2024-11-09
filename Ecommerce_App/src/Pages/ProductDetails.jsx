import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction"; 
import { addToWishlist } from "../actions/addToWishlist"; 
import "../Pages/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product)); 
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="image-gallery">
          <img className="main-image" src={product.image} alt={product.title} />
          {product.additionalImages?.map((img, index) => (
            <img key={index} className="additional-image" src={img} alt={`${product.title} ${index + 1}`} />
          ))}
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="price">₹{Math.floor(product.price * 20)}</p>

          <div className="quantity-selector">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>

          <div className="action-buttons">
            <button onClick={handleAddToCart} className="buy-now-btn">Add to Cart</button>
            <button onClick={handleAddToWishlist} className="wishlist-btn">Add to Wishlist</button>
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
