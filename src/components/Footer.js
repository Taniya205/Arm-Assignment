import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">Taniya Enterprise</h2>
          <p className="footer-tagline">
            Reliable Construction & Rental Solutions
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 9/415,Near Essar Petrol Pump Undera, koyli Road, Koyali, Vadodara, Gujarat 391330</p>
          <p>📞 +91 98989 40108</p>
          <p>📧 taniyajangid65@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Taniya Enterprise | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
