import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    heardAboutUs: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneLength = phoneNumber.replace(/\D/g, '').length;
    return phoneLength < 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validatePhoneNumber(formData.phone)) {
      setError('Invalid data: Phone number must be at least 10 digits.');
      return;
    }

    setError('');

    try {
      await axios.post('http://localhost:5000/api/register', formData);
      navigate('/confirmation');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.log( error.response)
        setError('This Email id/mobile number is already registered with us, please try different email id/phone number.');
      } else {
        console.error('Error submitting form', error);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Express Your Interest Here</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          EmailID:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Company Details:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <label>
          How did you hear about us?
          <select
            name="heardAboutUs"
            value={formData.heardAboutUs}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="linkedin">LinkedIn</option>
            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="meta">Meta</option>
            <option value="friends">Friends</option>
            <option value="others">Others</option>
          </select>
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Register Here</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
