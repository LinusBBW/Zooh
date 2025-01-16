import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    // Initialer Benutzerzustand aus localStorage laden
    return JSON.parse(localStorage.getItem('currentUser')) || null;
  });

  const login = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user); // Benutzerzustand aktualisieren
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null); // Benutzerzustand leeren
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
