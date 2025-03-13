import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomerBookings.css';

const CustomerBookings = () => {
  // Sample appointments
  const initialBookings = [
    { id: 1, service: 'Repair', date: '2025-04-01', status: 'Confirmed' },
    { id: 2, service: 'Installation', date: '2025-04-02', status: 'Confirmed' },
  ];

  const [bookings, setBookings] = useState(initialBookings);
  
  const [rescheduleId, setRescheduleId] = useState(null);
 
  const [newDate, setNewDate] = useState('');

  const navigate = useNavigate();

 
  const handleCancel = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };


  const handleRescheduleClick = (id) => {
    setRescheduleId(id);
  };

 
  const handleRescheduleConfirm = (id) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, date: newDate } : booking
      )
    );
    setRescheduleId(null);
    setNewDate('');
  };

  // Cancel the reschedule process
  const handleRescheduleCancel = () => {
    setRescheduleId(null);
    setNewDate('');
  };

  return (
    <div className="customer-bookings-container">
      <h2>My Bookings</h2>
      <button className="back-button" onClick={() => navigate('/customer/dashboard')}>
        Back to Dashboard
      </button>
      {bookings.length === 0 ? (
        <p>You have no appointments.</p>
      ) : (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.service}</td>
                <td>
                  {booking.date}
                  {rescheduleId === booking.id && (
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
                <td>{booking.status}</td>
                <td>
                  {rescheduleId === booking.id ? (
                    <>
                      <button
                        className="confirm-button"
                        onClick={() => handleRescheduleConfirm(booking.id)}
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
                        onClick={() => handleCancel(booking.id)}
                      >
                        Cancel
                      </button>
                      <button
                        className="reschedule-button"
                        onClick={() => handleRescheduleClick(booking.id)}
                      >
                        Reschedule
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

export default CustomerBookings;