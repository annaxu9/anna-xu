import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState('');
  
  useEffect(() => {
    let storedToken = ''
    try {
      storedToken = localStorage.getItem('spotifyAccessToken');
      setToken(storedToken)
    } catch (error) {
        console.error("Error accessing localStorage:", error);
    }
  }, [])

  // Save token to local storage whenever it changes
  useEffect(() => {
    if (token) {
        localStorage.setItem('spotifyAccessToken', token);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
