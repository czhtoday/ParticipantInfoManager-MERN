import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getParticipantById, updateParticipant } from '../services/participantService';
import ParticipantForm from '../components/ParticipantForm';
import Header from '../components/Header';
import '../App.css'; 
import useFormData from '../hooks/useFormData';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];  // Converts date to YYYY-MM-DD format
};

function EditParticipantPage() {
  const [formData, setFormData] = useFormData();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParticipant = async () => {
      try {
        const data = await getParticipantById(id);
        const formattedData = {
          ...data,
          dateofbirth: formatDate(data.dateofbirth),
          jobPlacement: {
            ...data.jobPlacement,
            startDate: formatDate(data.jobPlacement.startDate),
            endDate: data.jobPlacement.endDate ? formatDate(data.jobPlacement.endDate) : ''
          }
        };
        setFormData(formattedData);
      } catch (error) {
        console.error('Error fetching participant:', error);
      }
    };
    fetchParticipant();
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const nameParts = name.split('.'); // Split the name by the dot to check for nested properties

    if (nameParts.length === 2) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [nameParts[0]]: {
          ...prevFormData[nameParts[0]],
          [nameParts[1]]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateParticipant(id, formData);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Failed to update participant:', error.response ? error.response.data : error.message);
      console.log('Submitting data:', JSON.stringify(formData, null, 2));
    }
  };

  const handleContinue = () => {
    setShowSuccessModal(false);
    navigate('/manage-participants');
  };

  return (
    <div className="participant-form-page">
      <Header />
      <ParticipantForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {showSuccessModal && (
        <div className="modal">
          <p>Successfully Updated</p>
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  );
}

export default EditParticipantPage;
