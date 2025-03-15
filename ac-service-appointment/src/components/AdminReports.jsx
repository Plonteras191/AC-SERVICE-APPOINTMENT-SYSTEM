import React from 'react';
import '../styles/AdminReports.css';

const AdminReports = () => {
  const completeAppointments = [
    { id: 1, customer: 'John Doe', date: '2025-04-01' },
    { id: 2, customer: 'Jane Smith', date: '2025-04-05' }
  ];
  const cancelledAppointments = [
    { id: 3, customer: 'Alice Brown', date: '2025-04-03' }
  ];
  const declinedAppointments = [
    { id: 4, customer: 'Bob White', date: '2025-04-04' }
  ];

  return (
    <div className="admin-reports-container">
      <h2>Reports</h2>
      <div className="reports-box">
        <div className="report-section">
          <h3>Complete Appointments</h3>
          <ul>
            {completeAppointments.map(app => (
              <li key={app.id}>
                ID: {app.id} - {app.customer} on {app.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="report-section">
          <h3>Cancelled Appointments</h3>
          <ul>
            {cancelledAppointments.map(app => (
              <li key={app.id}>
                ID: {app.id} - {app.customer} on {app.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="report-section">
          <h3>Declined Appointments</h3>
          <ul>
            {declinedAppointments.map(app => (
              <li key={app.id}>
                ID: {app.id} - {app.customer} on {app.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
