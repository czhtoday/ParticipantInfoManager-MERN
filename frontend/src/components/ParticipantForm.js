import React from 'react';
import LocationSelector from './LocationSelector';
import { stateOptions, cityOptions } from '../data/locations'; 



function ParticipantForm({ formData, handleChange, handleJobPlacementChange, handleSubmit }) {
  return (
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
        <LocationSelector
          namePrefix="livingLocation"
          value={{ state: formData.livingLocation.state, city: formData.livingLocation.city }}
          onChange={handleChange}
          stateOptions={stateOptions}
          cityOptions={cityOptions}
        />
      </div>
      <div>
        <label>Working Location:</label>
        <LocationSelector
          namePrefix="workingLocation"
          value={{ state: formData.workingLocation.state, city: formData.workingLocation.city }}
          onChange={handleChange}
          stateOptions={stateOptions}
          cityOptions={cityOptions}
        />
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
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default ParticipantForm;
