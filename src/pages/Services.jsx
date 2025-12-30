import React from "react";
import Hero from "../components/Hero"; 

import crane7 from "../assets/images/crane7.jpeg";
import crane2 from "../assets/images/crane2.jpeg";
import crane3 from "../assets/images/crane3.jpeg";
import crane4 from "../assets/images/crane4.jpeg";
import crane5 from "../assets/images/crane5.jpeg";
import crane6 from "../assets/images/crane6.jpeg";
import crane10 from "../assets/images/crane10.jpeg";
import crane11 from "../assets/images/crane11.jpeg";
import crane12 from "../assets/images/crane12.jpeg";
import servicesimg from "../assets/images/services-hero.jpeg";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">

     
      <Hero
        title="Our Services"
        subtitle="Professional crane hiring, repair, and equipment solutions for every project."
        bgImage={servicesimg} 
      />

      
      <section className="services-section">
        <h1 className="section-title">Our Services</h1>

        <div className="services-card-container">
          <div className="service-card">
            <h3>Crane Hiring</h3>
            <p>
              Reliable crane rental services for industrial, construction,
              infrastructure and lifting projects with expert guidance.
            </p>
          </div>

          <div className="service-card">
            <h3>Crane Repair & Maintenance</h3>
            <p>
              Professional repairing, servicing and inspections to ensure
              safe and efficient crane performance.
            </p>
          </div>

          <div className="service-card">
            <h3>Spare Parts & Lubricants</h3>
            <p>
              Genuine crane spare parts, premium lubricants and quality
              automotive batteries for smooth operations.
            </p>
          </div>
        </div>
      </section>

      
      <section className="crane-gallery">
        <h2>Our Crane Fleet</h2>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={crane7} alt="Crane" />
            <p>Hydra Crane</p>
          </div>

          <div className="gallery-item">
            <img src={crane2} alt="Crane" />
            <p>Mobile Crane</p>
          </div>

          <div className="gallery-item">
            <img src={crane3} alt="Crane" />
            <p>Boom Lift Crane</p>
          </div>

          <div className="gallery-item">
            <img src={crane4} alt="Crane" />
            <p>Truck Mounted Crane</p>
          </div>

          <div className="gallery-item">
            <img src={crane5} alt="Crane" />
            <p>Heavy Lift Crane</p>
          </div>

          <div className="gallery-item">
            <img src={crane6} alt="Crane" />
            <p>Hydraulic Crane</p>
          </div>

          <div className="gallery-item">
            <img src={crane10} alt="Crane" />
            <p>15 Ton Hydra Crane</p>
          </div>

          <div className="gallery-item">
            <img src={crane11} alt="Crane" />
            <p>Escort Hydra Crane</p>
          </div>

          <div className="gallery-item">
            <img src={crane12} alt="Crane" />
            <p>Heavy Duty Mobile Crane</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
