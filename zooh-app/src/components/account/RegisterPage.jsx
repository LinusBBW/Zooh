import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwörter stimmen nicht überein');
      return;
    }
  
    try {
      // Prüfen, ob die E-Mail bereits existiert
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Benutzerliste');
      }
      const users = await response.json();
  
      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        setError('E-Mail wird bereits verwendet');
        return;
      }
  
      // Neuen Benutzer erstellen
      const newUser = { email, password, name };
      const createResponse = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
  
      if (!createResponse.ok) {
        throw new Error('Fehler beim Erstellen des Benutzers');
      }
  
      // Nach erfolgreicher Erstellung zu /login navigieren
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError('Fehler bei der Registrierung');
    }
  };
  

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1 className="register-title">Jetzt registrieren bei ZooH!</h1>
        </div>
        <div className="register-content">
          <div className="register-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register-input"
              />
            </div>
            <div className="input-group">
              <input
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="register-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Passwort bestätigen"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="register-input"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button
              onClick={handleRegister}
              className="register-button"
            >
              Registrieren
            </button>
            <p className="login-text">
              Bereits ein Konto? <a href="/login" className="login-link">Anmelden</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
