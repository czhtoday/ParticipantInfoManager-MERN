import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddParticipantPage from './pages/AddParticipantPage';
import ManageParticipantsPage from './pages/ManageParticipantsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/add-participant" element={<AddParticipantPage />} />
        <Route path="/manage-participants" element={<ManageParticipantsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
