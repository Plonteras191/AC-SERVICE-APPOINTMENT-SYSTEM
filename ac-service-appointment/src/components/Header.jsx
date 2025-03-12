import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSnowflake } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FaSnowflake className="logo-icon" /> EER Aircon Cleaning
      </div>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Login/SignUp
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/login" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
