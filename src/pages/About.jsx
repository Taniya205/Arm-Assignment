import React from "react";
import "../styles/About.css";
import Hero from "../components/Hero"; // import the Hero component

import hireImg from "../assets/images/crane-hiring.jpeg";
import repairImg from "../assets/images/crane-repair.jpeg";
import oilImg from "../assets/images/lubricant.jpeg";
import Aboutimg from "../assets/images/about-hero.jpeg";

const About = () => {
  return (
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}
      <Hero
        title="About Taniya Enterprise"
        subtitle="Learn more about our journey, expertise, and commitment to quality."
        bgImage={Aboutimg} // replace with your hero image
      />

      {/* ================= ABOUT TEXT ================= */}
      <div className="about-text">
        <h2>About Taniya Enterprise</h2>

        <p className="about-para">
          Taniya Enterprise is a trusted name in the crane industry, offering
          professional crane hiring, expert repairing services, high-quality spare
          parts, lubricant oils, and reliable automotive batteries. We focus on
          delivering safe, efficient, and dependable solutions that help keep your
          operations running smoothly and successfully.
        </p>

        <p className="about-para">
          With strong values, technical expertise, and a customer-first approach,
          we proudly serve businesses across different sectors — ensuring quality,
          transparency, and long-term partnerships built on trust.
        </p>
      </div>

      {/* ================= HIGHLIGHTS WITH IMAGES ================= */}
      <div className="service-section">

        <div className="service-box">
          <div className="highlight-card">
            <h3>🚧 Crane Hiring</h3>
            <p>Reliable crane hiring services for industrial and construction projects.</p>
          </div>
          <img src={hireImg} alt="Crane Hiring" />
        </div>

        <div className="service-box">
          <div className="highlight-card">
            <h3>🔧 Crane Repairing</h3>
            <p>Professional crane repairing and maintenance for safe operations.</p>
          </div>
          <img src={repairImg} alt="Crane Repairing" />
        </div>

        <div className="service-box">
          <div className="highlight-card">
            <h3>⚙️ Lubricants & Spare Parts</h3>
            <p>Quality lubricant oils, crane spare parts & automotive batteries.</p>
          </div>
          <img src={oilImg} alt="Lubricant Oils" />
        </div>

      </div>

    </div>
  );
};

export default About;
