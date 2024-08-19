import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import logo from './logo_new.png';
import lemonade from './lemonade1.png';
import practical_achiever from './practical_achiever.png';
import sleeping_beauty from './sleeping_beauty.png';
import chaotic_Overspender from './chaotic_Overspender.png';
import cautiously_Optimistic from './cautiously_Optimistic.png';
import stabilizer from './wanna_be_stabilizer.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/register');
  };

  return (
    <div className="landing-page">
      <header className="main-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="main-content">
          <h1>They say, when life gives you lemons, make lemonade!</h1>
          <p>But your lemonade might taste different from others</p> 
          <p>considering how well you play with the ingredients.</p>
          <p1>Let's see how your lemonade tastes!</p1>
          <button className="cta-button" onClick={handleJoinClick}>Join now →</button>
        <img src={lemonade} alt="Lemonade" className="lemonade-image" />
      </div>
      <div className="scroll-section">
        <h2>Take the test & know which of the lemon personalities you resonate with</h2>
        <div className="lemon-personalities">
          <div className="personality">
            <img src={practical_achiever} alt="Practical Achiever" />
            <p className= "p3">Practical Achiever</p>
          </div>
          <div className="personality">
            <img src={cautiously_Optimistic} alt="Cautiously Optimistic" />
            <p className= "p4">Cautiously Optimistic</p>
          </div>
          <div className="personality">
            <img src={stabilizer} alt="The Wanna-be Stabilizer" />
            <p className = "p5" >The Wanna-be Stabilizer</p>
          </div>
          <div className="personality">
            <img src={sleeping_beauty} alt="The Sleeping Beauty" />
            <p className = "p6">The Sleeping Beauty</p>
          </div>
          <div className="personality">
            <img src={chaotic_Overspender} alt="The Chaotic Overspender" />
            <p className = "p7">The Chaotic Overspender</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
