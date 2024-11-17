import React from 'react';
import './About.css'; // Ensure you create this CSS file for styling

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our company, mission, and team.</p>
      </header>
      
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          We started with a simple idea: to create high-quality products that make a difference in people's lives. 
          Founded in 2020, our company has grown from a small startup to a leading provider in the industry. 
          Our commitment to excellence drives us to continuously improve and innovate.
        </p>
      </section>

      <section className="about-section">
        <h2>Mission & Values</h2>
        <p>
          Our mission is to deliver exceptional value to our customers through innovative products and services. 
          We believe in integrity, customer satisfaction, and sustainability. Our core values guide our actions and decisions every day.
        </p>
        <ul>
          <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency.</li>
          <li><strong>Customer Satisfaction:</strong> We are dedicated to exceeding our customers' expectations.</li>
          <li><strong>Sustainability:</strong> We strive to minimize our environmental impact and promote sustainability.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="John Doe" className="team-photo" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>John leads the company with a vision to drive innovation and excellence in our products.</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Jane Smith" className="team-photo" />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
            <p>Jane oversees the day-to-day operations and ensures smooth functioning across all departments.</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get in touch, feel free to contact us:</p>
        <p>Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Your Street, Your City, Your Country</p>
      </section>
    </div>
  );
}
