const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Use history API fallback
app.use(history());

// Serve index.html on all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
