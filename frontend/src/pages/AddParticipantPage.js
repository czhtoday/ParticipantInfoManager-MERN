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
    const nameParts = name.split('.');  // Split the name by the dot to check for nested properties
  
    if (nameParts.length === 2) {
      // Handling nested properties such as "livingLocation.state"
      setFormData(prevFormData => ({
        ...prevFormData,
        [nameParts[0]]: {
          ...prevFormData[nameParts[0]],
          [nameParts[1]]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      // Handling regular properties
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
      const response = await addParticipant(formData);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Failed to add participant:', error.response ? error.response.data : error.message);
      console.log('Submitting data:', JSON.stringify(formData, null, 2));
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
