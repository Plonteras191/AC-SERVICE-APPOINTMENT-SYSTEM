import React from 'react';
import PageWrapper from './PageWrapper';

const Dashboard = () => {
  return (
    <PageWrapper>
      <div className="dashboard-main">
        <h2>Admin Dashboard</h2>
        <p>Welcome to the admin panel! Here you can manage appointments, view reports, and more.</p>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
