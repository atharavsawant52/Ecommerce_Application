import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>
        <div className="about-image">
          <img src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/ecommerce%20marketing.jpg" alt="About Us" />
        </div>
      </div>
      
      <div className="stats-container">
        <div className="stat-box">
          <div className="icon">🛍️</div>
          <h3>10.5k</h3>
          <p>Sellers active on our site</p>
        </div>
        <div className="stat-box highlight">
          <div className="icon">💰</div>
          <h3>33k</h3>
          <p>Monthly Product Sale</p>
        </div>
        <div className="stat-box">
          <div className="icon">👥</div>
          <h3>45.5k</h3>
          <p>Customers active on our site</p>
        </div>
        <div className="stat-box">
          <div className="icon">📈</div>
          <h3>25k</h3>
          <p>Annual gross sale in our site</p>
        </div>
      </div>
    </div>
  );
};

export default About;
