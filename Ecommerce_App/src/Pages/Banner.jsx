import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgetproducts } from '../actions/ProductAction';

function Banner() {
  const { products }= useSelector((state) => state.product);

  console.log(products);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(asyncgetproducts());
  },[]);

  return (
    <div className="banner">
      <div className="banner-content">
        <img src="https://photos5.appleinsider.com/gallery/58949-121423-iPhone-16-colors-4-xl.jpg" alt="" className="banner-img"/>
        <div className="banner-text">
          <h2>IPhone 16</h2>
          <p>Up to 10% off</p>
          <a href="#" className="shop-now">Shop Now</a>
        </div>
      </div>
    </div>

  )
}

export default Banner