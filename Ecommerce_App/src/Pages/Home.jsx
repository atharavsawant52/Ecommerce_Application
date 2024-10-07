import React from "react";

import "./Home.css";
import Slidebar from "./Slidebar";
import Banner from "./Banner";
import Card from "./Card";

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
    </>
  );
};

export default Home;
