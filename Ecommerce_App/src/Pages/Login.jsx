import React from 'react';
import '../Pages/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img 
          src="https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Shopping with phone" 
          className="login-image"
        />
      </div>

      <div className="login-right">
        <h2 className="signup-right-info">Log in to Exclusive</h2>
        <p className="signup-right-info">Enter your details below</p>

        <form className="login-form">
          <input type="email" placeholder="Email or Phone Number" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />

          <button type="submit" className="login-button"><Link to="/login-home" style={{ textDecoration: 'none', color:'white'}}> Log In </Link></button>
        </form>

        <p className="login-forgot">
          <a href="#">Forget Password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
