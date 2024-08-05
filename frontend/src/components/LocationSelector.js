import React from 'react';

function LocationSelector({ value, onChange, stateOptions, cityOptions, namePrefix }) {
  const handleStateChange = (e) => {
    const newStateValue = e.target.value;
    onChange({
      target: {
        name: `${namePrefix}.state`,
        value: newStateValue
      }
    });
    onChange({
      target: {
        name: `${namePrefix}.city`,
        value: ''
      }
    });
  };

  const handleCityChange = (e) => {
    onChange({
      target: {
        name: `${namePrefix}.city`,
        value: e.target.value
      }
    });
  };

  return (
    <div>
      <select name={`${namePrefix}.state`} value={value.state} onChange={handleStateChange}>
        {stateOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <select 
        name={`${namePrefix}.city`} 
        value={value.city} 
        onChange={handleCityChange} 
        disabled={!value.state || !(cityOptions[value.state] && cityOptions[value.state].length)}
      >
        {value.state && cityOptions[value.state] ? cityOptions[value.state].map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        )) : <option value="">Select a city</option>}
      </select>
    </div>
  );
}

export default LocationSelector;
