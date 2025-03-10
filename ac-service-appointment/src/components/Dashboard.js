// src/components/Dashboard.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  // Sample appointment data
  const appointments = [
    { id: 1, customer: 'John Doe', service: 'Repair', date: '2025-04-01', time: '10:00 AM' },
    { id: 2, customer: 'Jane Smith', service: 'Installation', date: '2025-04-02', time: '02:00 PM' },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <ul>
          <li><Link to="/admin/dashboard">Dashboard Home</Link></li>
          <li><Link to="/admin/appointments">Appointments</Link></li>
          <li><Link to="/admin/reports">Reports</Link></li>
          <li><Link to="/admin/calendar">Calendar</Link></li>
          <li>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>
      <main className="dashboard-main">
        <h2>Admin Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
