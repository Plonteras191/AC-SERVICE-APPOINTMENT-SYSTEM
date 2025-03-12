import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

// Admin Pages
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import AdminAppointments from './components/AdminAppointments';
import AdminReports from './components/AdminReports';
import AdminCalendar from './components/AdminCalendar';
import Revenue from './components/Revenue';

// Customer Pages
import CustomerDashboard from './components/CustomerDashboard';
import CustomerBookings from './components/CustomerBookings';

// Booking Flow
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/calendar" element={<AdminCalendar />} />
        <Route path="/admin/revenue" element={<Revenue />} />

        {/* Customer Routes */}
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/bookings" element={<CustomerBookings />} />

        {/* Booking Flow */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
