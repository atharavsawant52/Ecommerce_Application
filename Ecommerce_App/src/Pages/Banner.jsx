import React, { useEffect } from 'react';

function Banner() {
  

  const handleShopNowClick = () => {
    alert("Sorry, this product is out of stock. Please check again later.");
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <img 
          src="https://photos5.appleinsider.com/gallery/58949-121423-iPhone-16-colors-4-xl.jpg" 
          alt="iPhone 16" 
          className="banner-img"
        />
        <div className="banner-text">
          <h2>IPhone 16</h2>
          <p>Up to 10% off</p>
          <button className="shop-now" onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
