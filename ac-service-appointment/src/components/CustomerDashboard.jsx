import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/CustomerDashboard.css';

const CustomerDashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Sample booking data
  const bookings = [
    { id: 1, service: 'Repair', date: '2025-04-01', status: 'Confirmed' },
    { id: 2, service: 'Installation', date: '2025-04-02', status: 'Pending' },
  ];

  return (
    <div className="customer-dashboard">
      <aside className="sidebar">
        <ul>
          <li><Link to="/customer/dashboard">Dashboard Home</Link></li>
          <li><Link to="/customer/bookings">My Bookings</Link></li>
          <li>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>
      <main className="dashboard-main">
        <h2>Customer Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.service}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default CustomerDashboard;
