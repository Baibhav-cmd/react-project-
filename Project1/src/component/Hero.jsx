import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-section">
        <h1>YOUR FEET</h1>
        <h1>DESERVE</h1>
        <h1>THE BEST</h1>

        <p>
          Lorem ipsum dolor sit amet
          <br /> consectetur adipisicing elit. <br />
          Illum fugiat placeat maiores sit cum?
        </p>
        <div className="button">
        <button className="shop">Shop Now</button>
        <button className="cate">Category</button>
      </div>
      </div>
      <div className="hero-image">
        <img src="images.jfif" alt="shoes" />
      </div>
    </div>
  );
}

export default Hero;
