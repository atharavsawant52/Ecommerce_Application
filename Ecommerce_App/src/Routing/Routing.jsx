import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import CardComponent from "../Pages/CardComponent";
import Wishlist from "../Pages/Wishlist";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Checkout from "../Pages/Checkout";
import ProductDetails from "../Pages/ProductDetails";
import CategoryPage from "../Pages/CategoryPage";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-home" element={<Home />} />
        <Route path="/cart" element={<CardComponent />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default Routing;
