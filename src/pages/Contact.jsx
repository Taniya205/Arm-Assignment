import React, { useState } from "react";
import "../styles/Contact.css";
import Hero from "../components/Hero";

import servicesimg from "../assets/images/services-hero.jpeg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let temp = {};

    if (!formData.name.trim()) temp.name = "Name is required";

    if (!formData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Enter a valid email address";

    if (!formData.message.trim()) temp.message = "Message is required";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-wrapper">

      
      <Hero
        title="Contact Taniya Enterprise"
        subtitle="Have a project in mind? Reach out to us and we’ll assist you."
        bgImage={servicesimg}
      />

      
      <div className="contact-card">
        <h2>Get Your Project Started</h2>
        <p>Share your requirements — we’ll get back to you soon.</p>

        {submitted && <div className="success">Message Sent Successfully ✔</div>}

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Describe your project..."
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;
