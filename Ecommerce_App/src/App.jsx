import React from 'react';
import Product from './Pages/ProductList';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Routing from './Routing/Routing';
import { Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>  
    <Routing/>
    </>
    
  )
}

export default App