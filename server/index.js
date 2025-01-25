const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./Route/contactRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://www.vigomerge.com/',  // Replace with your Netlify URL
  methods: 'GET,POST',
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));  // Keep only this line for CORS
app.use(bodyParser.json()); 

// Database URL from environment variables
const DB_URL = process.env.DB_URL; 

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Optionally exit the process on DB failure
  }
};
connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Routes
app.use('/api/contact', contactRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
