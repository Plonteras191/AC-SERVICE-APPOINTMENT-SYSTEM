import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminCalendar.css';

const AdminCalendar = () => {
  const navigate = useNavigate();

  // For demonstration, assume current month is April 2025
  const year = 2025;
  const month = 3; // April (0-indexed: January=0)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Sample appointments data (hardcoded for now)
  const appointments = [
    { id: 1, customer: "John Doe", service: "Repair", date: "2025-04-05", time: "10:00 AM", status: "Pending" },
    { id: 2, customer: "Jane Smith", service: "Installation", date: "2025-04-12", time: "02:00 PM", status: "Confirmed" },
    { id: 3, customer: "Alice Brown", service: "Maintenance", date: "2025-04-12", time: "09:00 AM", status: "Pending" },
    { id: 4, customer: "Bob White", service: "Repair", date: "2025-04-20", time: "11:00 AM", status: "Pending" },
  ];

  const [selectedDay, setSelectedDay] = useState(null);

  // Helper: format a day (number) as "YYYY-MM-DD"
  const formatDate = (day) => {
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = (month + 1).toString().padStart(2, '0');
    return `${year}-${monthStr}-${dayStr}`;
  };

  // Filter appointments for the selected day
  const appointmentsForDay = selectedDay
    ? appointments.filter(appt => appt.date === formatDate(selectedDay))
    : [];

  return (
    <div className="admin-calendar-page">
      <h2>Admin Calendar</h2>
      <button className="back-button" onClick={() => navigate('/admin/dashboard')}>
        Back to Dashboard
      </button>

      {/* Calendar Grid View */}
      {!selectedDay && (
        <div className="calendar-container">
          <div className="big-calendar">
            <h3>Big Calendar</h3>
            <div className="calendar-grid">
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const dateStr = formatDate(day);
                const hasAppointment = appointments.some(appt => appt.date === dateStr);
                return (
                  <div
                    key={i}
                    className={`calendar-cell ${hasAppointment ? 'has-appointment' : ''}`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="available-dates-box">
            <h3>Days with Appointments</h3>
            <ul>
              {appointments.map((appt, index) => (
                <li key={index}>{appt.date}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Appointment Details View */}
      {selectedDay && (
        <div className="appointment-details">
          <h3>Appointments for {formatDate(selectedDay)}</h3>
          {appointmentsForDay.length === 0 ? (
            <p>No appointments for this day.</p>
          ) : (
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointmentsForDay.map(appt => (
                  <tr key={appt.id}>
                    <td>{appt.id}</td>
                    <td>{appt.customer}</td>
                    <td>{appt.service}</td>
                    <td>{appt.time}</td>
                    <td>{appt.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button className="back-to-calendar" onClick={() => setSelectedDay(null)}>
            Back to Calendar
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;
