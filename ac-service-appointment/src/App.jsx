import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import CallUs from './components/CallUs';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';

// Admin Pages
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import AdminAppointments from './components/AdminAppointments';
import AdminReports from './components/AdminReports';
import AdminCalendar from './components/AdminCalendar';
import Revenue from './components/Revenue';
import RevenueHistory from './components/RevenueHistory';
import AdminLayout from './components/AdminLayout';

// Reusable PageWrapper for smooth transitions
import PageWrapper from './components/PageWrapper';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/call-us" element={<PageWrapper><CallUs /></PageWrapper>} />
        <Route path="/booking" element={<PageWrapper><Booking /></PageWrapper>} />
        <Route path="/confirmation" element={<PageWrapper><Confirmation /></PageWrapper>} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<PageWrapper><AdminLogin /></PageWrapper>} />

        {/* Admin Routes nested under AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
          <Route path="appointments" element={<PageWrapper><AdminAppointments /></PageWrapper>} />
          <Route path="reports" element={<PageWrapper><AdminReports /></PageWrapper>} />
          <Route path="calendar" element={<PageWrapper><AdminCalendar /></PageWrapper>} />
          <Route path="revenue" element={<PageWrapper><Revenue /></PageWrapper>} />
          <Route path="revenue-history" element={<PageWrapper><RevenueHistory /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <AnimatedRoutes />
    </>
  );
};

export default App;
