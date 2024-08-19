const express = require('express');
const router = express.Router();
const Prospect = require('../models/Prospect'); 


router.get('/waitlist', async (req, res) => {
  try {
    console.log('Inside waitlist routes')
    const waitlistEntries = await Prospect.find(); 
    console.log(waitlistEntries)
    res.json(waitlistEntries); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
});

module.exports = router;
