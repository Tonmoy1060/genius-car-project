import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <Services></Services>
        <Experts></Experts>
      </div>
    </div>
  );
};

export default Home;
