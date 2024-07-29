import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/participants';

export const getAllParticipants = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getParticipantById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching participant with id ${id}:`, error);
    throw error;
  }
};

export const addParticipant = async (participantData) => {
  const response = await axios.post(baseUrl, participantData);
  return response.data;
};

export const updateParticipant = async (id, updatedData) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedData);
  return response.data;
};

export const deleteParticipant = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};
