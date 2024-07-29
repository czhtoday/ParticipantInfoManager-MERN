import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getParticipantById, updateParticipant } from '../services/participantService';
import ParticipantForm from '../components/ParticipantForm';
import Header from '../components/Header';
import '../App.css'; 
import useFormData from '../hooks/useFormData'; 
import ParticipantFormModal from '../components/ParticipantFormModal';



const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];  // Converts date to YYYY-MM-DD format
};

function EditParticipantPage() {
  const [formData, setFormData] = useFormData();
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State to manage the display of the success modal
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
    if (type === 'checkbox') {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: checked
      }));
    } else if (event.target.name in formData.jobPlacement) {
      setFormData(prevFormData => ({
        ...prevFormData,
        jobPlacement: {
          ...prevFormData.jobPlacement,
          [name]: value
        }
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateParticipant(id, formData);
      setShowSuccessModal(true); // Show the success modal on successful update
    } catch (error) {
      console.error('Failed to update participant:', error);
    }
  };

  const handleContinue = () => {
    setShowSuccessModal(false); // Close the modal
    navigate('/manage-participants'); // Navigate back to the manage participants page
  };

  return (
    <div className="edit-participant-page">
      <Header />
      <ParticipantForm
        formData={formData}
        handleChange={handleChange}
        handleJobPlacementChange={handleChange}
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
