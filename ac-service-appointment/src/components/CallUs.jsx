
import React from 'react';
import '../styles/CallUs.css';

const CallUs = () => {
  return (
    <div className="callus-container">
      <h2>Call Us</h2>
      <p>If you have any questions or need immediate assistance, please call us at:</p>
      <div className="phone-number">+63 912 345 6789</div>
      <p>Our customer service is available 24/7.</p>
      <button className="call-button" onClick={() => window.location.href = 'tel:+639123456789'}>
        Call Now
      </button>
    </div>
  );
};

export default CallUs;
