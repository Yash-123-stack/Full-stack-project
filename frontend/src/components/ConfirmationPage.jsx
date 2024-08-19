import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './ConfirmationPage.css';
import logo from './logo_new1.png';
import giftBoxImage from './best_gift.png'; 

const ConfirmationPage = () => {
    const navigate = useNavigate();

  const handleDoneClick = async (e) => {
    navigate('/waitlist');
  };

  
  return (
    <div className="confirmation-container">
      <img src= {logo} alt="RuDo Wealth Logo" className="logo" />
      <div className="confirmation-box">
        <div className="gift-box-image">
          <img src={giftBoxImage} alt="Gift Box" />
        </div>
        <h2 className="congrats-message">Congratulations</h2>
        <p className="waiting-list-message">You have been added to the waiting list</p>
        <button className="done-button" onClick={handleDoneClick}>Done</button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
