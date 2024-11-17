import React from 'react';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Reach out to us using the form below.</p>
      </header>

      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="button" onClick={()=>{
            navigate('/home')
          }}>Send Message</button>
        </form>
      </section>

      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 123 Your Street, Your City, Your Country</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contact@yourcompany.com</p>
      </section>
    </div>
  );
}
