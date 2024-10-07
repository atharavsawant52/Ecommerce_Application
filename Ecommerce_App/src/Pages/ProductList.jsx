import React, { Component } from "react";
import "./ProductList.css";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  getProducts() {
    console.log("get products");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.products.map((product, index) => {
          return(
          <div className="product-list" key={index}>
            <div className="card">
              <img className="card-img" src={product.image} alt="" />
              <h1 className="card-name">{product.title}</h1>
              <p className="card-detail">{product.description}</p>
              <h3 className="card-price">${product.price}</h3>
              <button
                className="btn-product"
                onClick={() => this.addToCart(index)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        )
        })}
      </>
    );
  }
}
