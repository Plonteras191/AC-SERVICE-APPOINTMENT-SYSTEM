import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(details);
    // Redirect to Customer Dashboard after signup
    navigate('/customer/dashboard');
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={details.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={details.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={details.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      <div className="links">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
