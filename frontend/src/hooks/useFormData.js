import { useState } from 'react';

function useFormData() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    gender: '',
    race: '',
    livingLocation: {
      state: '',
      city: ''
    },
    workingLocation: {
      state: '',
      city: ''
    },
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

  return [formData, setFormData];
}

export default useFormData;
