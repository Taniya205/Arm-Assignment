import React from "react";
import "./Hero.css"; // Hero-specific styles

const Hero = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
