import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { asyncgetproducts } from "../actions/ProductAction";
import "../Pages/Card.css";

function Card() {
  const { products } = useSelector((state) => state.product);


  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);

  return (
    <>
      {products.map((data, index) => (
        <div className="card " key={index}>
          <div className="discount-badge">{(data.price * 80 * 100) / (data.price * 160)}%</div>
          <img src={data.image} alt={data.title} className="image" />
          <h3 className="title">{data.title}</h3>
          <div className="price-container">
            <span className="new-price">₹{data.price * 80}</span>
            <span className="old-price">₹{data.price * 160}</span>
          </div>
          <div >
            <button className="addToCartBtn" >Add to Cart</button>
            <button className="addToWishlistBtn"><FaHeart /></button>
        </div>
        </div>
      ))}
    </>
  );
}

export default Card;
