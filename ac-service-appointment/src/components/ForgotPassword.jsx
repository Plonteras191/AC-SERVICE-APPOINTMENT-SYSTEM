import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending a reset password email
    setSubmitted(true);
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      {submitted ? (
        <p>
          Please check your email for password reset instructions. Redirecting to
          login...
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
