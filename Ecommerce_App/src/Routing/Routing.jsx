import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import CardComponent from "../Pages/CardComponent";
import Wishlist from "../Pages/Wishlist";


function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/login-home" element={<Home/>}/>
        <Route path="/Signup/login" element={<Login/>}/>
        <Route path="/cart" element={<CardComponent/>} />
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default Routing;
