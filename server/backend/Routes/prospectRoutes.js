const express = require('express');
const Prospect = require('../models/Prospect');

const router = express.Router();
router.post('/register', async (req, res) => {
  try {
   
    const { email, phone } = req.body;
    const existingProspect = await Prospect.findOne({ 
      $or: [
        { email: email },
        { phone: phone }
      ]
    });

    if (existingProspect) {
      return res.status(409).json({ error: 'This email id or phone number is already registered in our database' });
    }


    const newProspect = new Prospect(req.body);
    await newProspect.save();
    res.status(201).json({ message: 'Prospect registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/submissions', async (req, res) => {
  try {
    const prospects = await Prospect.find();
    res.json(prospects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
