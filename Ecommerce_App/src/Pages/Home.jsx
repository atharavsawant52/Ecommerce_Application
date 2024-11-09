import React from "react";

import "./Home.css";
import Slidebar from "./Slidebar";
import Banner from "./Banner";
import Card from "./Card";
import FeaturedProducts from "./FeaturedProducts";
import Services from "./Services";
import ProductsGrid from "./ProductsGrid";
import Footer from "./Footer";
import BestSellingProducts from "./BestSellingProducts";

const Home = () => {
  return (
    <>
      <div className="home">
        <Slidebar />
        <Banner />
      </div>
      <div className="product">
        <Card />
      </div>
      <Services/>
      <FeaturedProducts/>
      <BestSellingProducts/>
      <ProductsGrid/>
      <Footer/>
    </>
  );
};

export default Home;
