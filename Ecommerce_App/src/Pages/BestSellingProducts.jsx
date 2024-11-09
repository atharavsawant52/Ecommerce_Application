import React from "react";
import "./BestSellingProducts.css";

function BestSellingProducts() {
  const products = [
    {
      id: 1,
      title: "Samsung Galaxy S24 ",
      image: "https://media.croma.com/image/upload/v1705575390/Croma%20Assets/Communication/Mobiles/Images/303839_rrhtai.png", 
      discountedPrice: 14999,
      originalPrice: 19999,
      rating: 4,
      reviews: 120,
    },
    {
      id: 2,
      title: "Dell G15 Gaming Laptop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0pTvnGPoGZTGVNG9cixS8dvXUN-k30ubfQ&s", 
      discountedPrice: 39999,
      originalPrice: 49999,
      rating: 5,
      reviews: 230,
    },
    {
      id: 3,
      title: "NOISE 4 Overhead Wireless Headphone",
      image: "https://m.media-amazon.com/images/I/61+R5rOj9+L._AC_UF1000,1000_QL80_.jpg",
      discountedPrice: 2999,
      originalPrice: 4999,
      rating: 3,
      reviews: 50,
    },
    {
      id: 4,
      title: "M1 Smart Watch for Men & Women",
      image: "https://images-eu.ssl-images-amazon.com/images/I/61ZjlBOp+rL._AC_UL600_SR600,600_.jpg",
      discountedPrice: 4999,
      originalPrice: 7999,
      rating: 4,
      reviews: 80,
    },
  ];

  return (
    <div className="best-selling-products">
      <div className="header">
        <h2>Best Selling Products</h2>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <div className="product-prices">
              <span className="discounted-price">
                ₹{product.discountedPrice}
              </span>
              <span className="original-price">₹{product.originalPrice}</span>
            </div>
            <div className="product-rating">
              {"★".repeat(product.rating)} ({product.reviews})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellingProducts;
