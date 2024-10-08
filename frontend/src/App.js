import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationPage from './components/ConfirmationPage';
import ListingPage from './components/ListingPage';
import WaitlistDatabase from './components/WaitlistDatabase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route path="/waitlist" element={<WaitlistDatabase />} />
      </Routes>
    </Router>
  );
}

export default App;
