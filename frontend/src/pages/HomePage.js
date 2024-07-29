import React from 'react';
import { Link } from 'react-router-dom';
import AboutModal from '../components/AboutModal';
import '../App.css'; 


function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <img src="/Uplift-logo.svg" alt="Logo" className="Logo" />
        <h1>Uplift NW</h1>
        <h2>Participant Management System</h2>
      </header>
      <nav>
        <Link to="/add-participant" className="button">Add New Participant</Link>
        <Link to="/manage-participants" className="button">Manage Participants</Link>
        <AboutModal />
      </nav>
    </div>
  );
}

export default HomePage;
