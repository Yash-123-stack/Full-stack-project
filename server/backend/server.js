const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const prospectRoutes = require('./Routes/prospectRoutes');
const waitlistRoutes = require('./Routes/waitlistRoutes');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost:27017/customer_details', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:',err));


const registrationSchema = new mongoose.Schema({
    fullName: { type: String, required: true}, 
    email: { type: String,nrequired: true, unique: true },
    contactNo: { type: String, required: true },
    message: { type: String, required: true },
});

const Registration = mongoose.model('Registration', registrationSchema);

app.use('/api', prospectRoutes);
app.post('/register', async (req, res) => {
    try {
        console.log('Inside request in register')
        console.log(req.body)
        const newRegistration = new Registration(req.body);
        console.log(newRegistration)
        await newRegistration.save();
        console.log('OUTPUTTTTTTTTT')
        res.status(201).send('Registration successful');
    } catch (err) {
        res.status(400).send('Error registering');
    }
});

app.use('/api', waitlistRoutes);
app.get('/waitlist', async (req, res) => {
    try {
        console.log('inside service to fetch json')
        const registrations = await Waitlist.find();
        res.json(registrations);
    } catch (err) {
        res.status(400).send('Error fetching waitlist');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
