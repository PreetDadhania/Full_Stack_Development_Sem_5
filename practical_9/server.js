const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const homeRoute = require('./routes/home');
app.use('/', homeRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
