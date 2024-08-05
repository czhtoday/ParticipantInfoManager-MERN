import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  dateofbirth: { type: Date, required: true },
  gender: { type: String, required: true },
  race: { type: String, required: true },
  livingLocation: { 
    state: { type: String, required: true },
    city: { type: String, required: true }
  },
  workingLocation: { 
    state: { type: String, required: true },
    city: { type: String, required: true }
  },
  housingStatus: { type: String, required: true },
  educationLevel: { type: String, required: true },
  healthInsurance: { type: Boolean, required: true },
  dentalInsurance: { type: Boolean, required: true },
  visionInsurance: { type: Boolean, required: true },
  militaryOrVeteran: { type: Boolean, required: true },
  orientationStatus: { type: String, required: true },
  jobPlacement: {
    jobTitle: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }
  }
});

const Participant = mongoose.model('Participant', participantSchema);

export default Participant;
