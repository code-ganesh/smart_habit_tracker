const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const habitRoutes = require('./routes/habitRoutes');
require('./services/cron'); // Cron jobs setup

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', habitRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
