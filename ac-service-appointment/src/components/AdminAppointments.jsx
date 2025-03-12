import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminAppointments.css';

const AdminAppointments = () => {
  // Sample appointments data
  const initialAppointments = [
    { id: 1, customer: 'John Doe', service: 'Repair', date: '2025-04-01', time: '10:00 AM', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', service: 'Installation', date: '2025-04-02', time: '02:00 PM', status: 'Pending' },
  ];

  const [appointments, setAppointments] = useState(initialAppointments);
  const navigate = useNavigate();

  // Update status to Declined
  const handleDecline = (id) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === id ? { ...appt, status: 'Declined' } : appt
      )
    );
  };

  // Update status to Confirmed
  const handleConfirm = (id) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === id ? { ...appt, status: 'Confirmed' } : appt
      )
    );
  };

  return (
    <div className="admin-appointments-container">
      <h2>Customer Appointments</h2>
      <button
        className="back-button"
        onClick={() => navigate('/admin/dashboard')}
      >
        Back to Dashboard
      </button>
      {appointments.length === 0 ? (
        <p>No appointments available.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.id}</td>
                <td>{appt.customer}</td>
                <td>{appt.service}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>{appt.status}</td>
                <td>
                  <button
                    className="decline-button"
                    onClick={() => handleDecline(appt.id)}
                  >
                    Decline
                  </button>
                  <button
                    className="confirm-button"
                    onClick={() => handleConfirm(appt.id)}
                  >
                    Confirm
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminAppointments;
