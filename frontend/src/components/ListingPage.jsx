import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListingPage = () => {
  const [prospects, setProspects] = useState([]);

  useEffect(() => {
    const fetchProspects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/submissions');
        setProspects(response.data);
      } catch (error) {
        console.error('Error fetching prospects', error);
      }
    };

    fetchProspects();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Registered Prospects</h2>
      <ul>
        {prospects.map((prospect) => (
          <li key={prospect._id}>
            <strong>{prospect.name}</strong> - {prospect.email} - {prospect.phone} - {prospect.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingPage;