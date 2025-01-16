import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        login(user);
        navigate('/profile');
      } else {
        setError('Ungültige E-Mail oder Passwort');
      }
    } catch (err) {
      setError('Fehler beim Login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">
            Anmelden bei ZooH!
          </h1>
        </div>
        <div className="login-content">
          <div className="login-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>
            {error && (
              <p className="error-message">{error}</p>
            )}
            <button
              onClick={handleLogin}
              className="login-button"
            >
              Anmelden
            </button>
            <p className="register-text">
              Noch kein Konto? <a href="/register" className="register-link">Registrieren</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;