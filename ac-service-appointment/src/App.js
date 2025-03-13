// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import CallUs from './components/CallUs';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';

// Admin Pages
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';         // Admin Dashboard
import AdminAppointments from './components/AdminAppointments';
import AdminReports from './components/AdminReports';
import AdminCalendar from './components/AdminCalendar';
import Revenue from './components/Revenue';
import RevenueHistory from './components/RevenueHistory';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/call-us" element={<CallUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/calendar" element={<AdminCalendar />} />
        <Route path="/admin/revenue" element={<Revenue />} />
        <Route path="/admin/revenue-history" element={<RevenueHistory />} />
      </Routes>
    </>
  );
};

export default App;
