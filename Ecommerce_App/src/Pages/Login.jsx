import React, { useState } from 'react';
import '../Pages/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { getUserFromLocalStorage, saveUserToLocalStorage } from '../utils/localStorage';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get user from local storage
    const user = getUserFromLocalStorage();

    // Check if the user exists and credentials match
    if (user) {
      if (user.email === email && user.password === password) {
        // Save user to local storage as logged-in state
        saveUserToLocalStorage(user);

        // Dispatch LOGIN action to update Redux state
        dispatch({ type: "LOGIN", payload: user });

        // Redirect to home page
        navigate('/');
      } else {
        alert('Invalid email or password!');
      }
    } else {
      alert('User does not exist. Please sign up first.');
    }
  };

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

        <form className="login-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email or Phone Number" 
            className="login-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />

          <button type="submit" className="login-button">Log In</button>
        </form>

        <p className="login-forgot">
          <Link to="#">Forget Password?</Link>
        </p>

        <p>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
