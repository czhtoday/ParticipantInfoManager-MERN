import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addParticipant } from '../services/participantService'; 
import Header from '../components/Header';
import ParticipantForm from '../components/ParticipantForm';
import '../App.css'; 
import useFormData from '../hooks/useFormData';



function AddParticipantPage() {
  const [formData, setFormData] = useFormData();
  // Managing the display state of the modal
  const [showSuccessModal, setShowSuccessModal] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: checked
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleJobPlacementChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      jobPlacement: {
        ...prevFormData.jobPlacement,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addParticipant(formData);
      setShowSuccessModal(true); // display success modal
    } catch (error) {
      console.error('Failed to add participant:', error);
    }
  };

  const handleContinue = () => {
    setShowSuccessModal(false); // close the modal
    window.location.reload();
  };

  return (
    <div className="participant-form-page">
      <Header />
      <ParticipantForm
        formData={formData}
        handleChange={handleChange}
        handleJobPlacementChange={handleJobPlacementChange}
        handleSubmit={handleSubmit}
      />
      {showSuccessModal && (
        <div className="modal">
          <p>Successfully Added</p>
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  );
}

export default AddParticipantPage;
