import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const login = (credentials) => {
    // Simulate user login
    setUser({ email: credentials.email });
  };

  const signup = (details) => {
    // Simulate user registration
    setUser({ email: details.email });
  };

  const adminLogin = (credentials) => {
    // Simulate admin login
    setAdmin({ email: credentials.email });
  };

  const logout = () => {
    setUser(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ user, admin, login, signup, adminLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
