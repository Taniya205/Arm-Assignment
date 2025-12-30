import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import craneIcon from "../assets/images/crane-icon.png"; // small crane icon (optional)

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="logo">
        {craneIcon && <img src={craneIcon} alt="Crane" className="logo-icon" />}
        Taniya Enterprise   
        </div>
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        </div>
    </nav>
    );
};

export default Navbar;
