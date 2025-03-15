import React, { useState, useEffect } from 'react';
import PageWrapper from './PageWrapper';
import '../styles/Dashboard.css';

const defaultAppointments = [
  { id: 1, customer: 'John Doe', service: 'Repair', date: '2025-04-01', time: '10:00 AM', status: 'Confirmed' },
  { id: 2, customer: 'Jane Smith', service: 'Installation', date: '2025-04-02', time: '02:00 PM', status: 'Confirmed' },
];

const Dashboard = () => {
  const [confirmedAppointments, setConfirmedAppointments] = useState(() => {
    const stored = localStorage.getItem('appointments');
    return stored ? JSON.parse(stored).filter(app => app.status === 'Confirmed') : defaultAppointments;
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(confirmedAppointments));
  }, [confirmedAppointments]);

  const completeAppointment = (id) => {
    const completedAppointment = confirmedAppointments.find(app => app.id === id);
    if (completedAppointment) {
      const updatedConfirmed = confirmedAppointments.filter(app => app.id !== id);
      setConfirmedAppointments(updatedConfirmed);

      const storedCompleted = localStorage.getItem('completedAppointments');
      const completedList = storedCompleted ? JSON.parse(storedCompleted) : [];
      const newCompleted = [...completedList, { ...completedAppointment, sales: '' }];
      localStorage.setItem('completedAppointments', JSON.stringify(newCompleted));
    }
  };

  return (
    <PageWrapper>
      <div className="dashboard-main">
        <h2>Admin Dashboard</h2>
        <p>Manage confirmed appointments and process completions for revenue tracking.</p>

        <div className="dashboard-section">
          <h3>Confirmed Appointments</h3>
          <div className="appointment-box">
            {confirmedAppointments.length > 0 ? (
              <table className="appointments-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {confirmedAppointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td>{appointment.id}</td>
                      <td>{appointment.customer}</td>
                      <td>{appointment.service}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.status}</td>
                      <td>
                        <button
                          className="complete-button"
                          onClick={() => completeAppointment(appointment.id)}
                        >
                          Complete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No confirmed appointments.</p>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
