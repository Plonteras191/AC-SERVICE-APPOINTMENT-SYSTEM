import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Booking.css';

const Booking = () => {
  const [service, setService] = useState('');
  const [acTypes, setAcTypes] = useState([]);
  const [customACType, setCustomACType] = useState("");
  const navigate = useNavigate();

  const handleServiceChange = (e) => {
    setService(e.target.value);
    setAcTypes([]); // Reset AC types when service changes
  };

  const handleACTypeChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      if (!acTypes.includes(value)) {
        setAcTypes([...acTypes, value]);
      }
    } else {
      setAcTypes(acTypes.filter((type) => type !== value));
    }
  };

  const handleAddCustomACType = () => {
    const trimmed = customACType.trim();
    if (trimmed && !acTypes.includes(trimmed)) {
      setAcTypes([...acTypes, trimmed]);
      setCustomACType("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      date: formData.get('date'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      street: formData.get('street'),
      houseNo: formData.get('houseNo'),
      apartmentNo: formData.get('apartmentNo'),
      service,
      acTypes, // Array of selected AC types
    };
    console.log(data);
    navigate('/confirmation', { state: data });
  };

  return (
    <div className="booking-container">
      <h2>Book Your Appointment</h2>
      <div className="booking-box">
        <form onSubmit={handleSubmit}>
          {/* Date Section */}
          <div className="date-section">
            <label htmlFor="date">Select Date:</label>
            <input type="date" id="date" name="date" required />
          </div>

          {/* Customer Details Section */}
          <div className="customer-details">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          {/* Address Section */}
          <div className="address-section">
            <h3>Address</h3>
            <div className="address-inputs">
              <input type="text" name="street" placeholder="Street" required />
              <input type="text" name="houseNo" placeholder="House No" />
              <input type="text" name="apartmentNo" placeholder="Apartment No" />
            </div>
          </div>

          {/* Service Section */}
          <div className="service-section">
            <h3>Service</h3>
            <select value={service} onChange={handleServiceChange} required>
              <option value="">Select Service</option>
              <option value="maintenance">Routine Maintenance</option>
              <option value="repair">Repair</option>
              <option value="installation">Installation</option>
            </select>
          </div>

          {/* AC Type Section */}
          {service && (
            <div className="ac-type-section">
              <h3>AC Type (Select all that apply)</h3>
              <div className="ac-type-options">
                <label>
                  <input
                    type="checkbox"
                    value="Central"
                    checked={acTypes.includes("Central")}
                    onChange={handleACTypeChange}
                  />
                  Central
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Window"
                    checked={acTypes.includes("Window")}
                    onChange={handleACTypeChange}
                  />
                  Window Type
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Split"
                    checked={acTypes.includes("Split")}
                    onChange={handleACTypeChange}
                  />
                  Split Type
                </label>
              </div>
              <div className="ac-type-custom">
                <input
                  type="text"
                  placeholder="Add custom AC type"
                  value={customACType}
                  onChange={(e) => setCustomACType(e.target.value)}
                />
                <button type="button" onClick={handleAddCustomACType}>Add</button>
              </div>
            </div>
          )}

          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
