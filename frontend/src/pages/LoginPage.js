import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', formData);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');  
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="LoginPage">
      <header>
        <img src="/Uplift-logo.svg" alt="Logo" className="Logo" />
      </header>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin} className="LoginForm">
        <div className="FormGroup">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="FormGroup">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="SubmitButton">Login</button>
      </form>
      <button onClick={() => navigate('/register')} className="RegisterButton">Register</button>
    </div>
  );
}

export default LoginPage;
