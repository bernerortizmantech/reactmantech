import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);  // Function to log in
  const logout = () => setIsLoggedIn(false); // Function to log out

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}