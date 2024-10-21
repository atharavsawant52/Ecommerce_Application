import React, { useState } from 'react';
import '../Pages/Signup.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { saveUserToLocalStorage } from '../utils/localStorage';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // User data object
    const userData = {
      name,
      email,
      password,
      wishlist: [], // Initialize an empty wishlist
      cart: [] // Initialize an empty cart
    };

    // Local storage me user data save karna
    saveUserToLocalStorage(userData);

    // Redirect to login page
    navigate('/Login'); 
  };

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

        <form className="signup-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            className="signup-input" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email or Phone Number" 
            className="signup-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="signup-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />

          <button type="submit" className="signup-create-btn">Create Account</button>
        </form>

        <p className="signup-login-link">
          Already have an account? <Link to="/Login" style={{textDecoration: 'none'}}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
