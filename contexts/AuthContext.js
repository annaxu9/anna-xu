import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add a loading state


  // Load token from local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('spotifyAccessToken');
    if (storedToken) {
        console.log("Loading:" + storedToken)
        setToken(storedToken);
    }
    setIsLoading(false);
  }, []);

  // Save token to local storage whenever it changes
  useEffect(() => {
    if (token) {
        console.log("Setting" + token)
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
