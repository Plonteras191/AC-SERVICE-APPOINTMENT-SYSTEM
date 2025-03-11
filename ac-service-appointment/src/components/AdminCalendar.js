import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminCalendar.css';

const AdminCalendar = () => {
  const navigate = useNavigate();

  // Sample available dates for demonstration
  const availableDates = [
    '2025-04-01',
    '2025-04-02',
    '2025-04-03',
    '2025-04-04',
    '2025-04-05'
  ];

  return (
    <div className="admin-calendar-page">
      <h2>Admin Calendar</h2>
      <button className="back-button" onClick={() => navigate('/admin/dashboard')}>
        Back to Dashboard
      </button>
      <div className="calendar-container">
        <div className="big-calendar">
          <h3>Big Calendar</h3>
          <div className="calendar-grid">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="calendar-cell">{i + 1}</div>
            ))}
          </div>
        </div>
        <div className="available-dates-box">
          <h3>Available Dates</h3>
          <ul>
            {availableDates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminCalendar;
