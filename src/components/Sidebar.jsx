import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FaHome, FaMap, FaBook, FaUser, FaTicketAlt } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/">
      <img
        src={`${process.env.PUBLIC_URL}/assets/zooh.png`}
        alt="Zooh-logo"
        className="sidebar-logo"
      />
      </a>
      <nav>
        <NavLink to="/" className="sidebar-link" activeClassName="active">
          <FaHome className="icon" /> Home
        </NavLink>
        <NavLink to="/map" className="sidebar-link" activeClassName="active">
          <FaMap className="icon" /> Map
        </NavLink>
        <NavLink to="/tickets" className="sidebar-link" activeClassName="active">
          <FaTicketAlt className="icon" /> Tickets
        </NavLink>
        <NavLink to="/news" className="sidebar-link" activeClassName="active">
          <FaBook className="icon" /> News
        </NavLink>
        <NavLink to="/food" className="sidebar-link" activeClassName="active">
          <ImSpoonKnife className="icon" /> Food
        </NavLink>
        <NavLink to="/profile" className="sidebar-link" activeClassName="active">
          <FaUser className="icon" /> Profile
        </NavLink>
      </nav>
    </div>
  );
}
