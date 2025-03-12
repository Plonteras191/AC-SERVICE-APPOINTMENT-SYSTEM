import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your backend
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you for your inquiry. We will get back to you soon!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
