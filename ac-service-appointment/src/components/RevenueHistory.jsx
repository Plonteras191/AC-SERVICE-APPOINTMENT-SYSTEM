// src/components/RevenueHistory.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RevenueHistory.css';

const RevenueHistory = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  // Load revenue history from localStorage on mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('revenueHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div className="revenue-history-container">
      <h2>Revenue History</h2>
      <button className="back-button" onClick={() => navigate('/admin/revenue')}>
        Back to Revenue
      </button>
      <div className="revenue-history-box">
        {history.length === 0 ? (
          <p>No revenue history available.</p>
        ) : (
          <table className="revenue-history-table">
            <thead>
              <tr>
                <th>Date Recorded</th>
                <th>Total Revenue (Php)</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RevenueHistory;
