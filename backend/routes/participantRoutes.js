import express from 'express';
const router = express.Router();

// Import the controller for participant
import {
  createParticipant,
  getParticipants,
  getParticipant,
  updateParticipant,
  deleteParticipant
} from '../controllers/participantController.js';

// Create a new participant
router.post('/', createParticipant);

// Get all participant
router.get('/', getParticipants);

// Get a participant by ID
router.get('/:id', getParticipant);

// Update a participant by ID
router.put('/:id', updateParticipant);

// Remove a participant by ID
router.delete('/:id', deleteParticipant);

export default router;
