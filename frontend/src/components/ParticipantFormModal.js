import React from 'react';

const ParticipantFormModal = ({ show, onSuccess, onContinue, message }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <p>{message}</p>
      <button onClick={onSuccess}>Continue</button>
      <button onClick={onContinue}>Close</button>
    </div>
  );
};

export default ParticipantFormModal;
