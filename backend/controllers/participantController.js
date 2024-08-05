import Participant from '../models/Participant.js';

// Create a new participant 
export const createParticipant = async (req, res) => {
  try {
    if (Array.isArray(req.body)) {  
      const participants = await Participant.insertMany(req.body);  
      res.status(201).json(participants);
    } else {
      const participant = new Participant(req.body);
      await participant.save();
      res.status(201).json(participant);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get all the participants
export const getParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.status(200).json(participants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a participant
export const getParticipant = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }
    res.status(200).json(participant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update the participant's information
export const updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }
    res.status(200).json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a participate
export const deleteParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndDelete(req.params.id);
    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }
    res.status(204).json({ message: "Participant deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
