// src/App.js
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
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import AdminReports from './components/AdminReports';
import AdminCalendar from './components/AdminCalendar';
import Booking from './components/Booking';
import CustomerDashboard from './components/CustomerDashboard';
import CustomerBookings from './components/CustomerBookings';
import Confirmation from './components/Confirmation';
import AdminAppointments from './components/AdminAppointments';


function App() {
  return (
    <div>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/admin/login" element={<AdminLogin />} />
         <Route path="/admin/dashboard" element={<Dashboard />} />
         <Route path="/admin/appointments" element={<AdminAppointments />} />
         <Route path="/admin/reports" element={<AdminReports />} />
         <Route path="/admin/calendar" element={<AdminCalendar />} />
         <Route path="/booking" element={<Booking />} />
         <Route path="/customer/dashboard" element={<CustomerDashboard />} />
         <Route path="/customer/bookings" element={<CustomerBookings />} />
         <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
