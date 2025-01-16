import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './ProfilPage.css';

const ProfilePage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [purchasedTickets, setPurchasedTickets] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { replace: true });
      return;
    }

    // Fetch user's purchased tickets
    fetch(`http://localhost:3000/purchasedTickets?userId=${currentUser.id}`)
      .then(response => response.json())
      .then(data => {
        const allTickets = data.flatMap(purchase => 
          purchase.tickets.map(ticket => ({
            ...ticket,
            purchaseDate: new Date(ticket.purchaseDate).toLocaleDateString()
          }))
        );
        setPurchasedTickets(allTickets);
      })
      .catch(error => console.error('Error fetching tickets:', error));
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-card">
          <div className="profile-header">
            <h1 className="profile-title">Mein Profil</h1>
            <button 
              onClick={handleLogout}
              className="logout-button"
            >
              Abmelden
            </button>
          </div>
          <div className="profile-content">
            <div className="user-info">
              <h2 className="welcome-text">
                Willkommen, {currentUser.name}!
              </h2>
              <p className="email-text">Email: {currentUser.email}</p>
            </div>
            <div className="activities-section">
              <h3 className="activities-title">Meine Tickets</h3>
              {purchasedTickets.length === 0 ? (
                <p className="no-tickets">Keine Tickets vorhanden</p>
              ) : (
                <div className="tickets-list">
                  {purchasedTickets.map((ticket, index) => (
                    <div key={index} className="ticket-item">
                      <div className="ticket-details">
                        <h4 className="ticket-name">{ticket.name}</h4>
                        <p className="ticket-info">Gekauft am: {ticket.purchaseDate}</p>
                        <p className="ticket-price">CHF {ticket.price.toFixed(2)}</p>
                        <span className={`ticket-status ${ticket.status}`}>
                          {ticket.status === 'valid' ? 'Gültig' : 'Verwendet'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;