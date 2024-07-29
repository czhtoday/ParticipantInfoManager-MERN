import React from 'react';
import ParticipantTable from '../components/ParticipantTable';
import Header from '../components/Header';
import '../App.css'; 


function ManageParticipantsPage() {
  return (
    <div className="manage-participant-table">
      <Header />
      <ParticipantTable />
    </div>
  );
}

export default ManageParticipantsPage;
