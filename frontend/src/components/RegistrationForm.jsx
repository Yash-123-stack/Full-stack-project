import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; 
import logo from './logo.jpg';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [error, setError] = useState({
        email: '',
        phone: '',
        general: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneLength = phoneNumber.replace(/\D/g, '').length;
        return phoneLength !== 10; // Check if phone number is not exactly 10 digits
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(email); // Check if email is invalid
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        const newError = {
            email: '',
            phone: '',
            general: ''
        };

        if (validateEmail(formData.email)) {
            newError.email = 'Invalid email address.';
            valid = false;
        }

        if (validatePhoneNumber(formData.phone)) {
            newError.phone = 'Phone number must be exactly 10 digits.';
            valid = false;
        }

        if (!valid) {
            setError(newError);
            return;
        }

        setError({ email: '', phone: '', general: '' });

        try {
            await axios.post('http://localhost:5000/api/register', formData);
            navigate('/confirmation');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setError({
                    ...newError,
                    general: 'This Email ID/Phone number is already registered. Please try a different one.'
                });
            } else {
                console.error('Error submitting form', error);
            }
        }
    };

    return (
        <div className="registration-container">
            <img src={logo} alt="RuDo Wealth Logo" className="logo" />
            <form onSubmit={handleSubmit} className="registration-form">
                <p className="offer-message">Join now and get AED 50</p>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="input-field"
                    />
                    {error.email && <p className="error-message">{error.email}</p>}
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Contact No."
                        required
                        className="input-field"
                    />
                    {error.phone && <p className="error-message">{error.phone}</p>}
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="input-field"
                    />
                </div>
                {error.general && <p className="error-message">{error.general}</p>}
                <div className="button-container">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
