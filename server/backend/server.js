const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const prospectRoutes = require('./Routes/prospectRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Establishing the connection to the mongoDB server

mongoose.connect('mongodb://localhost:27017/customer_details', {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));



// Routes
app.use('/api', prospectRoutes);

app.post('api/check', async (req, res) => {
  try {
    const { email, phone } = req.body;

    // This will Search the database for a record with the same email or phone number to reduce duplicacy
    const existingProspect = await Prospect.findOne({
      $or: [
        { email: email },
        { phone: phone }
      ]
    });

    if (existingProspect) {
      return res.status(401).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Starting the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app;