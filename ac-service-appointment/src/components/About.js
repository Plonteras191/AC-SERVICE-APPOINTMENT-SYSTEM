import React from 'react';
import '../styles/About.css';
import myImage from "../assets/map.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h2>About Us</h2>
        <p>
        Welcome to ❄️ EER Aircon Cleaning, your trusted partner in air conditioning services. We are dedicated to providing high-quality and reliable cooling solutions to homes and businesses in our community. With a commitment to excellence and customer satisfaction, we ensure that your comfort is our top priority.
        At ❄️ EER Aircon Cleaning, we specialize in air conditioning installation, maintenance, and repair services. Our team of skilled professionals is equipped with the expertise and experience to handle all types of air conditioning systems, ensuring optimal performance and energy efficiency.
        </p>
        <div className="address-box">
          <div className="address-text">
            <h3>Our Address</h3>
            <p>
              Gemilina St.Zone 6.<br />
              Bugo<br />
              Cagayan De Oro City, 9000<br />
              Misamis Oriental
            </p>
          </div>
          <div className="address-image">
            {<img src={myImage} alt="Description" width="300" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
