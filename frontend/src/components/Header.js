import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/Uplift-logo.svg" alt="Uplift NW Logo" className="header-logo" />
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">HOME PAGE</Link>
        <Link to="/add-participant" className="nav-link">ADD NEW PARTICIPANT</Link>
        <Link to="/manage-participants" className="nav-link">MANAGE PARTICIPANTS</Link>
      </nav>
    </header>
  );
}

export default Header;
