import React from "react";

const ServiceCard = ({ title, image, description }) => {
    return (
    <div style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        width: "300px",
        margin: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.3s"
    }}
    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
        <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div style={{ padding: "15px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    </div>
    );
};

export default ServiceCard;
