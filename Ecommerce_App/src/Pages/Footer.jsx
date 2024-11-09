import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section subscribe">
          <h2>Exclusive</h2>
          <p>Get 10% off your first order</p>
        </div>
        <div className="footer-section links">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Returns & Exchanges</li>
            <li>Shipping & Delivery</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Order History</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
