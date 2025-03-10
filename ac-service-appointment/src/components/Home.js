import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => (
  <>
    {/* Full-width Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1>Professional Air Conditioning Services</h1>
        <p>24/7 Emergency Service · NC2/NC3 Certified Technicians</p>
        <div className="cta-buttons">
          <Link to="/booking" className="cta-primary">Schedule Now</Link>
          <Link to="/contact" className="cta-secondary">Contact Us</Link>
        </div>
      </div>
    </section>

    {/* Full-width Features Section */}
    <section className="features-section">
      <div className="feature-card">
        <div className="feature-icon">❄️</div>
        <h3>Fast Response</h3>
        <p>24/7 emergency service</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🔧</div>
        <h3>Expert Technicians</h3>
        <p>NC2/NC3-certified professionals with 10+ years experience</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">₱</div>
        <h3>Price Guarantee</h3>
        <p>Upfront pricing with no hidden fees</p>
      </div>
    </section>

    {/* If you have more content to keep centered, use .home-container */}
    <div className="home-container">
      {/* Example: A footer CTA or other centered content */}
      <section className="footer-cta">
        <h2>Ready to Stay Cool?</h2>
        <p>Contact us now for all your air conditioning needs.</p>
        <Link to="/booking" className="cta-primary">Book Appointment</Link>
      </section>
    </div>
  </>
);

export default Home;
