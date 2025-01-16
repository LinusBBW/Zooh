import React, { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useAuth } from './account/AuthContext';
import { useNavigate } from 'react-router-dom';
import './TicketPage.css';

const TicketShop = () => {
  const [cart, setCart] = useState([]);
  const [tickets, setTickets] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch tickets from JSON server
    fetch('http://localhost:3000/tickets')
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  const addToCart = (ticket) => {
    if (ticket.note === 'online nicht erhältlich') return;
    setCart([...cart, { ...ticket, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const handlePurchase = async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    try {
      // Fetch existing purchased tickets
      const response = await fetch(`http://localhost:3000/purchasedTickets?userId=${currentUser.id}`);
      const existingTickets = await response.json();

      // Create new purchase entry
      const purchase = {
        userId: currentUser.id,
        purchaseDate: new Date().toISOString(),
        tickets: cart.map(ticket => ({
          ticketId: ticket.id,
          name: ticket.name,
          price: ticket.price,
          purchaseDate: new Date().toISOString(),
          status: 'valid'
        }))
      };

      // Save the new purchase
      await fetch('http://localhost:3000/purchasedTickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchase),
      });

      // Clear the cart and show success message
      setCart([]);
      alert('Tickets erfolgreich gekauft! Sie können Ihre Tickets in Ihrem Profil einsehen.');
      navigate('/profile');
    } catch (error) {
      console.error('Error purchasing tickets:', error);
      alert('Fehler beim Kaufen der Tickets. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <div className="ticket-shop-container">
      <div className="flex gap-6">
        {/* Main ticket list */}
        <div className="flex-grow bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-teal-700">Online-Ticketshop/Zookasse</h1>

          <div className="space-y-6">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="ticket-item flex items-center justify-between p-4 border-b border-gray-200"
              >
                <div>
                  <h3 className="font-semibold text-lg">{ticket.name}</h3>
                  <div className="price-tag mt-1">
                    CHF {ticket.price.toFixed(2)} / CHF {ticket.priceBox.toFixed(2)}
                  </div>
                  {ticket.note && (
                    <div className="text-sm text-gray-500 mt-1">{ticket.note}</div>
                  )}
                </div>

                {!ticket.note?.includes('nicht erhältlich') && ticket.price > 0 && (
                  <button
                    onClick={() => addToCart(ticket)}
                    className="buy-button"
                  >
                    <ShoppingCart size={18} />
                    TICKET KAUFEN
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Shopping cart */}
        <div className="w-80 bg-white rounded-lg shadow-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="cart-item flex justify-between items-center"
                  >
                    <div className="flex-grow">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-600">CHF {item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="remove-button"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span className="total-price">CHF {calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="space-x-2">
                <button
                  onClick={() => setCart([])}
                  className="action-button bg-red-600 text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePurchase}
                  className="action-button bg-green-600 text-white"
                >
                  Kaufen
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketShop;