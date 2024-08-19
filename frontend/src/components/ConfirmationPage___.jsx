import React, {useState, useEffect } from 'react';
import './ConfirmationPage.css';
import logo from './logo.jpg';
import giftBoxImage from './giftbox_image.png'; 

const ConfirmationPage = () => {
  const [showMessage, setShowMessage ] = useState(false);

  const handleDoneClick = () => {

  };

  useEffect(() => {
    const confirmationBox = document.querySelector('.confirmation-box');
    if (confirmationBox) {
      const timer = setTimeout(() => {
        confirmationBox.classList.add('open');
      }, 100); 

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(messageTimer);
    };
  }
  }, []);

  return (
    <div className="confirmation-container">
      <img src= {logo} alt="RuDo Wealth Logo" className="logo" />
      <div className="confirmation-box">
          <img src={giftBoxImage} alt="Gift Box" className="box-container" />
          <div className={`box ${showMessage ? 'show-message' : ''}`}>
            {showMessage && (
              <> 
        <p className="congrats-message">Congratulations</p>
        <p className="waiting-list-message">You have been added to the waiting list</p>
        <button className="done-button" onClick={handleDoneClick}>Done</button>
        </>
        )}
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
