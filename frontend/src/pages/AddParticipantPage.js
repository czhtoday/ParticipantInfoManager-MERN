import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


function AddParticipantPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    gender: '',
    race: '',
    livingLocation: '',
    workingLocation: '',
    housingStatus: '',
    educationLevel: '',
    healthInsurance: false,
    dentalInsurance: false,
    visionInsurance: false,
    militaryOrVeteran: false,
    orientationStatus: '',
    jobPlacement: {
      jobTitle: '',
      startDate: '',
      endDate: ''
    }
  });

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
      await axios.post('http://localhost:8080/api/participants', formData);
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
    <div className="add-participant-page">
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div>
          <label>Race:</label>
          <input type="text" name="race" value={formData.race} onChange={handleChange} required />
        </div>
        <div>
          <label>Living Location:</label>
          <input type="text" name="livingLocation" value={formData.livingLocation} onChange={handleChange} required />
        </div>
        <div>
          <label>Working Location:</label>
          <input type="text" name="workingLocation" value={formData.workingLocation} onChange={handleChange} required />
        </div>
        <div>
          <label>Housing Status:</label>
          <input type="text" name="housingStatus" value={formData.housingStatus} onChange={handleChange} required />
        </div>
        <div>
          <label>Education Level:</label>
          <input type="text" name="educationLevel" value={formData.educationLevel} onChange={handleChange} required />
        </div>
        <div>
          <label>Health Insurance:</label>
          <input type="checkbox" name="healthInsurance" checked={formData.healthInsurance} onChange={handleChange} />
        </div>
        <div>
          <label>Dental Insurance:</label>
          <input type="checkbox" name="dentalInsurance" checked={formData.dentalInsurance} onChange={handleChange} />
        </div>
        <div>
          <label>Vision Insurance:</label>
          <input type="checkbox" name="visionInsurance" checked={formData.visionInsurance} onChange={handleChange} />
        </div>
        <div>
          <label>Military or Veteran:</label>
          <input type="checkbox" name="militaryOrVeteran" checked={formData.militaryOrVeteran} onChange={handleChange} />
        </div>
        <div>
          <label>Orientation Status:</label>
          <input type="text" name="orientationStatus" value={formData.orientationStatus} onChange={handleChange} required />
        </div>
        <div>
          <label>Job Title:</label>
          <input type="text" name="jobTitle" value={formData.jobPlacement.jobTitle} onChange={handleJobPlacementChange} required />
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" name="startDate" value={formData.jobPlacement.startDate} onChange={handleJobPlacementChange} required />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" name="endDate" value={formData.jobPlacement.endDate} onChange={handleJobPlacementChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
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
