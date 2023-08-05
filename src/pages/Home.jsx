import React from "react";
import "../styles/home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  return (
    <div className="home-wrapper">
      <div className="homepageContents">
        <div className="cont1">
          <div className="top-cont">
            <h3>Calculate your Footprint today</h3>
            <p>it only takes a minute.</p>
          </div>
          <div className="bot-cont">
            <p>did you know ??</p>
            <h4>
              The amount of Energy you consume in your home is a big factor in
              your carbon footprint?
            </h4>
            <h4>We all produce CO2 directly or indirectly?</h4>
          </div>
        </div>
        <div className="cont2">
          <button onClick={()=>navigator("/calculate")}>Calculate Footprint</button>
          <button onClick={()=>navigator("/compare")}>Compare Footprint</button>
        </div>
      </div>
      <div className="imgside">
        <img src="./assets/4.jpg" />
      </div>
    </div>
  );
};

export default Home;
