import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/account/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ZooApp from './components/ZooApp';
import ZooMapPage from './components/ZooMapPage';
import NewOtters from './components/articles/NewOtters';
import WelcomeArang from './components/articles/WelcomeArang';
import NewHabitat from './components/articles/NewHabitat';
import './App.css';
import NewsPage from './components/NewsPage';
import FoodPage from './components/FoodPage';
import Sushi from './components/food/Sushi';
import Tacos from './components/food/Tacos';
import StreetFood from './components/food/StreetFood';
import TicketPage from './components/TicketPage';
import ProfilPage from './components/account/ProfilPage';
import LoginPage from './components/account/LoginPage';
import RegisterPage from './components/account/RegisterPage';

export default function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '200px', width: '100%' }}>
            <Routes>
              <Route path="/" element={<ZooApp />} />
              <Route path="/map" element={<ZooMapPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/food" element={<FoodPage />} />
              <Route path="/tickets" element={<TicketPage />} />
              <Route path="/articles/new-otters" element={<NewOtters />} />
              <Route path="/articles/welcome-arang" element={<WelcomeArang />} />
              <Route path="/articles/new-habitat" element={<NewHabitat />} />
              <Route path="/food/sushi" element={<Sushi />} />
              <Route path="/food/tacos" element={<Tacos />} />
              <Route path="/food/streetfood" element={<StreetFood />} />
              <Route path="/profile" element={<ProfilPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </AuthProvider>
  );
}
