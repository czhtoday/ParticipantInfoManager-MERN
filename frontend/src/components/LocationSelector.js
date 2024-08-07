import React from 'react';

function LocationSelector({ value, onChange, stateOptions, cityOptions, namePrefix }) {
  const handleStateChange = (e) => {
    const newStateValue = e.target.value;
    const firstCity = cityOptions[newStateValue] ? cityOptions[newStateValue][0].value : '';
    
    onChange({
      target: {
        name: `${namePrefix}.state`,
        value: newStateValue
      }
    });
    onChange({
      target: {
        name: `${namePrefix}.city`,
        value: firstCity
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
        <option value="">Select a state</option>
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
        <option value="">Select a city</option>
        {value.state && cityOptions[value.state] ? cityOptions[value.state].map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        )) : null}
      </select>
    </div>
  );
}

export default LocationSelector;
