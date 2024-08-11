import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to ClickCraze Creations</h1>
                <p>Your one-stop solution for effective sales and  lead management</p>
                <a href="/register" className="cta-button">Getting Started</a>
            </header>
            <section className="features">
                <div className="feature-card">
                    <h2>Easy to Use</h2>
                    <p>Our platform is intuitively designed to facilitate quick and efficient lead capture, ensuring ease of use for all users.</p>
                </div>
                <div className="feature-card">
                    <h2>Secure</h2>
                    <p>We place the highest priority on the security of your data, ensuring that all information is securely stored.</p>
                </div>
                <div className="feature-card">
                    <h2>Responsive Design</h2>
                    <p>Our web application is fully optimized for all devices, delivering a seamless experience across both desktop and mobile platforms.</p>
                </div>
            </section>
        </div>
  );
};

export default LandingPage;
