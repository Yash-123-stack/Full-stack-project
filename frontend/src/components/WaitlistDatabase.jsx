import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WaitlistDatabase.css';
import logo from './logo_new.png';

const WaitlistDatabase = () => {
  const [waitlistData, setWaitlistData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWaitlistData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/waitlist'); 
        setWaitlistData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWaitlistData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div>
      <header className="main-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
    <h1>Waitlist Database</h1>
    {waitlistData.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th><center>S.No</center></th>
            <th><center>Name</center></th>
            <th><center>Email</center></th>
            <th><center>Contact no.</center></th>
            <th><center>Message</center></th>
          </tr>
        </thead>
        <tbody>
          {waitlistData.map((entry, index) => (
            <tr key={entry._id}> 
            <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.phone}</td>
              <td>{entry.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No entries found</p>
    )}
  </div>
  );
};

export default WaitlistDatabase;
