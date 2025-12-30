import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Home.css";
import Hero from "../components/Hero"; 

import crane9 from "../assets/images/crane9.jpeg";
import crane1 from "../assets/images/crane1.jpeg";
import crane7 from "../assets/images/crane7.jpeg";
import lubricant3 from "../assets/images/lubricant3.avif";
import crane3 from "../assets/images/crane3.jpeg";
import lubricant5 from "../assets/images/lubricant5.jpg";
import Aboutimg from "../assets/images/about-hero.jpeg";

import gallery1 from "../assets/images/crane2.jpeg";
import gallery2 from "../assets/images/crane3.jpeg";
import gallery3 from "../assets/images/crane4.jpeg";
import gallery4 from "../assets/images/crane5.jpeg";

export default function Home() {
  return (
    <div className="home">

      
      <Hero
        title="Welcome to Taniya Enterprise"
        subtitle="Your trusted partner for crane services and equipment solutions."
        bgImage={Aboutimg} // add your hero image here
      />

      
      <section className="hero-carousel">
        <Carousel>
      
          <Carousel.Item>
            <img
              src={crane9}
              className="d-block w-100"
              alt="Crane Hiring Services"
            />
            <Carousel.Caption>
              <h2>Premium Crane Hiring Services</h2>
              <p>Safe • Reliable • Professional Crane Rental Solutions</p>
            </Carousel.Caption>
          </Carousel.Item>

          
          <Carousel.Item>
            <img
              src={crane1}
              className="d-block w-100"
              alt="Heavy Crane Rental India"
            />
            <Carousel.Caption>
              <h2>Heavy Duty Crane Rental</h2>
              <p>Trusted Crane Hiring for Construction & Industrial Projects</p>
            </Carousel.Caption>
          </Carousel.Item>

          
          <Carousel.Item>
            <img
              src={crane7}
              className="d-block w-100"
              alt="Crane Repair Services"
            />
            <Carousel.Caption>
              <h2>Crane Repair & Maintenance</h2>
              <p>Expert Technicians • Quality Spare Parts</p>
            </Carousel.Caption>
          </Carousel.Item>

          
          <Carousel.Item>
            <img
              src={lubricant3}
              className="d-block w-100"
              alt="Lubricant Oils & Machinery Fluids"
            />
            <Carousel.Caption>
              <h2>Premium Lubricant Oils</h2>
              <p className="highlight-text">High-performance oils for cranes & heavy machinery</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      
      <section className="why-us">
        <h2>Why Choose Taniya Enterprise</h2>
        <p className="section-text">
          We provide professional crane hiring services with complete safety,
          reliability, and customer support for all types of lifting projects.
        </p>

        <div className="why-grid">
          <div className="why-card">✔ Trusted Crane Hiring Company</div>
          <div className="why-card">✔ Experienced Operators & Technicians</div>
          <div className="why-card">✔ Cost-Effective Crane Rental Solutions</div>
          <div className="why-card">✔ Fast & Reliable Project Support</div>
        </div>
      </section>

     
      <section className="services-preview">
        <h2>Our Crane Hiring & Support Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Crane Hiring Services</h3>
            <p>
              We offer crane rental for construction, industrial lifting and
              infrastructure projects with expert operators.
            </p>
          </div>

          <div className="service-card">
            <h3>Crane Repair & Maintenance</h3>
            <p>
              Complete crane repair, servicing, and preventive maintenance by certified technicians.
            </p>
          </div>

          <div className="service-card">
            <h3>Lubricants & Spare Parts</h3>
            <p>
              Original crane spare parts, batteries, and lubricants to ensure long-term performance.
            </p>
          </div>
        </div>

        <div className="service-image-grid">
          <div className="service-image-card">
            <img src={crane3} alt="Crane" />
          </div>

          <div className="service-image-card">
            <img src={crane1} alt="Crane" />
          </div>

          <div className="service-image-card">
            <img src={lubricant5} alt="lubricant" />
          </div>
        </div>

        <a href="/services" className="link-btn">View Full Services →</a>
      </section>  

      
      <section className="gallery">
        <h2>Our Crane Operations & Equipment</h2>

        <div className="gallery-grid">
          <img src={gallery1} alt="Hydraulic Crane" />
          <img src={gallery2} alt="Boom Crane" />
          <img src={gallery3} alt="Construction Crane" />
          <img src={gallery4} alt="Industrial Crane" />
        </div>

        <a href="/services" className="link-btn">View More Cranes →</a>
      </section>

      
      <section className="cta-strip">
        <h2>Need Professional Crane Hiring?</h2>
        <p>Contact Taniya Enterprise today for safe and reliable crane rental services.</p>
        <a href="/contact" className="cta-btn-dark">Get a Quote</a>
      </section>

    </div>
  );
}
