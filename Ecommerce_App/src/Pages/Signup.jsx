import React from 'react';
import '../Pages/Signup.css'; 
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      
      <div className="signup-left">
        <img 
          src="https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Shopping" 
          className="signup-image"
        />
      </div>

      
      <div className="signup-right">
        <h2 className="signup-right-info">Create an account</h2>
        <p className="signup-right-info">Enter your details below</p>

        <form className="signup-form">
          <input type="text" placeholder="Name" className="signup-input" />
          <input type="email" placeholder="Email or Phone Number" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />

          <button type="submit" className="signup-create-btn"> <Link style={{textDecoration: 'none',color:'white'}} to="/Signup/login">Create Account</Link> </button>
        </form>

       

        <p className="signup-login-link">
          Already have an account? <Link to="/Login" style={{textDecoration: 'none'}}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
