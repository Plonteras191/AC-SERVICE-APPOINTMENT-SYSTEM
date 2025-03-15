import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminAppointments.css';

const AdminAppointments = () => {
  const navigate = useNavigate();

  // Sample appointments for demonstration
  const initialAppointments = [
    { id: 1, customer: 'John Doe', service: 'Repair', date: '2025-04-01', time: '10:00 AM', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', service: 'Installation', date: '2025-04-02', time: '02:00 PM', status: 'Pending' },
  ];

  const [appointments, setAppointments] = useState(initialAppointments);
  const [rescheduleId, setRescheduleId] = useState(null);
  const [newDate, setNewDate] = useState('');

  // Load appointments from localStorage if available
  useEffect(() => {
    const stored = localStorage.getItem('appointments');
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  // Cancel an appointment
  const handleCancelAppointment = (id) => {
    setAppointments(appointments.filter(appt => appt.id !== id));
  };

  // Set reschedule mode for a given appointment
  const handleRescheduleClick = (id) => {
    setRescheduleId(id);
  };

  // Confirm the reschedule: update the appointment's date
  const handleRescheduleConfirm = (id) => {
    setAppointments(
      appointments.map(appt =>
        appt.id === id ? { ...appt, date: newDate } : appt
      )
    );
    setRescheduleId(null);
    setNewDate('');
  };

  // Cancel the rescheduling process
  const handleRescheduleCancel = () => {
    setRescheduleId(null);
    setNewDate('');
  };

  // Accept an appointment, update its status, and navigate to Dashboard
  const handleAcceptAppointment = (id) => {
    const updatedAppointments = appointments.map(appt =>
      appt.id === id ? { ...appt, status: 'Accepted' } : appt
    );
    setAppointments(updatedAppointments);
    // Optionally, update localStorage if needed (effect will run automatically)
    // Navigate back to Dashboard (or refresh the dashboard view)
    navigate('/admin/dashboard');
  };

  return (
    <div className="admin-appointments-container">
      <h2>Admin Appointments</h2>
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
                <td>
                  {appt.date}
                  {rescheduleId === appt.id && (
                    <div className="reschedule-input-container">
                      <input
                        type="date"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        className="reschedule-date-input"
                      />
                    </div>
                  )}
                </td>
                <td>{appt.time}</td>
                <td>{appt.status}</td>
                <td>
                  {rescheduleId === appt.id ? (
                    <>
                      <button
                        className="confirm-button"
                        onClick={() => handleRescheduleConfirm(appt.id)}
                        disabled={!newDate}
                      >
                        Confirm
                      </button>
                      <button
                        className="cancel-button"
                        onClick={handleRescheduleCancel}
                      >
                        Cancel Reschedule
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="cancel-button"
                        onClick={() => handleCancelAppointment(appt.id)}
                      >
                        Cancel
                      </button>
                      <button
                        className="reschedule-button"
                        onClick={() => handleRescheduleClick(appt.id)}
                      >
                        Reschedule
                      </button>
                      <button
                        className="accept-button"
                        onClick={() => handleAcceptAppointment(appt.id)}
                      >
                        Accept
                      </button>
                    </>
                  )}
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