import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Revenue.css';

const Revenue = () => {
  const navigate = useNavigate();
  
  // Load appointments from localStorage and filter for those marked as "Complete"
  const [appointments, setAppointments] = useState([]);
  const [revenueData, setRevenueData] = useState({});
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      const parsedAppointments = JSON.parse(storedAppointments);
      const completed = parsedAppointments.filter(appt => appt.status === 'Complete');
      setAppointments(completed);
    }
  }, []);

  const handleInputChange = (id, value) => {
    setRevenueData(prev => ({ ...prev, [id]: value }));
  };

  const computeTotalRevenue = () => {
    let total = 0;
    Object.values(revenueData).forEach(val => {
      const amount = parseFloat(val);
      if (!isNaN(amount)) {
        total += amount;
      }
    });
    setTotalRevenue(total);
  };

  return (
    <div className="revenue-container">
      <h2>Revenue</h2>
      <button className="back-button" onClick={() => navigate('/admin/dashboard')}>
        Back to Dashboard
      </button>
      <div className="revenue-box">
        <table className="revenue-table">
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Date</th>
              <th>Revenue (Php)</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appt => (
              <tr key={appt.id}>
                <td>{appt.id}</td>
                <td>{appt.customer}</td>
                <td>{appt.service}</td>
                <td>{appt.date}</td>
                <td>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={revenueData[appt.id] || ''}
                    onChange={(e) => handleInputChange(appt.id, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="revenue-actions">
          <button className="compute-button" onClick={computeTotalRevenue}>
            Compute Revenue
          </button>
          <div className="total-display">
            <h3>Total Revenue: Php {totalRevenue.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
