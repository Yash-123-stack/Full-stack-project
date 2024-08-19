const express = require('express');
const Prospect = require('../models/Prospect');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const existingProspect = await Prospect.findOne({ 
      $or: [
        { email: email },
        { phone: phone }
      ]
    });

    if (existingProspect) {
      return res.status(409).json({ error: 'This email id or phone number is already registered in our database' });
    }

    const newProspect = new Prospect({ name, email, phone, message });
    await newProspect.save();

    
    res.status(201).json({ message: 'Prospect registered successfully!' });
  } catch (error) {
    
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
