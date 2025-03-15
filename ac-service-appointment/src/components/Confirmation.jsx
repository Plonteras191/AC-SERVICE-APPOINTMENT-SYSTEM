import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state || {};

  return (
    <div className="confirmation-container">
      <h2>Appointment Pending!</h2>
      <p>Thank you for booking your appointment!</p>
      <p>Your appointment details:</p>
      <ul>
        <li><strong>Date:</strong> {bookingData.date}</li>
        <li><strong>Name:</strong> {bookingData.name}</li>
        <li><strong>Phone:</strong> {bookingData.phone}</li>
        <li><strong>Email:</strong> {bookingData.email}</li>
        <li>
          <strong>Address:</strong> {bookingData.street}, {bookingData.houseNo}, {bookingData.apartmentNo}
        </li>
        <li><strong>Service:</strong> {bookingData.service}</li>
        {bookingData.service && (
          <li><strong>AC Type:</strong> {bookingData.acType}</li>
        )}
      </ul>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default Confirmation;
