import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  
  const [appointments, setAppointments] = useState([
    { id: 1, customer: 'John Doe', service: 'Repair', date: '2025-04-01', time: '10:00 AM', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', service: 'Installation', date: '2025-04-02', time: '02:00 PM', status: 'Pending' },
  ]);

  
  useEffect(() => {
    const stored = localStorage.getItem('appointments');
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleLogout = () => {
    navigate('/admin/login');
  };

  // Mark an appointment as "Complete"
  const handleComplete = (id) => {
    setAppointments(prev =>
      prev.map(appt =>
        appt.id === id ? { ...appt, status: 'Complete' } : appt
      )
    );
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard Home</Link>
          </li>
          <li>
            <Link to="/admin/appointments">Appointments</Link>
          </li>
          <li>
            <Link to="/admin/reports">Reports</Link>
          </li>
          <li>
            <Link to="/admin/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/admin/revenue">Revenue</Link>
          </li>
          <li>
             <Link to="/admin/revenue-history">Revenue History</Link>
            </li>

          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
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
                  {appt.status !== 'Complete' && (
                    <button className="complete-button" onClick={() => handleComplete(appt.id)}>
                      Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;