const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: ['https://bespoke-gaufre-80aa97.netlify.app', 'http://localhost:3000'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Import routes
const authRoutes = require('../routes/auth');
const noteRoutes = require('../routes/notes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    env: process.env.NODE_ENV,
    mongoConnected: mongoose.connection.readyState === 1
  });
});

// Export the serverless handler
module.exports.handler = serverless(app); 