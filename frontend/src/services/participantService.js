import axios from 'axios';

const getParticipants = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/participants');
    return response.data;
  } catch (error) {
    console.error('Error fetching participants:', error);
    throw error;
  }
};

export { getParticipants };
