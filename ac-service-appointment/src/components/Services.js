import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Routine Maintenance',
      description: 'Regular check-ups and cleaning to keep your AC running efficiently and prevent unexpected breakdowns.',
    },
    {
      title: 'Repair',
      description: 'Quick and reliable repairs to fix any issues with your air conditioning system, ensuring maximum comfort.',
    },
    {
      title: 'Installation',
      description: 'Professional installation services for new air conditioning units with expert advice and support.',
    },
    // You can add more services here as needed.
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
