const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve React static files (after running `npm run build`)
app.use(express.static(path.join(__dirname, 'build')));

// Handle client-side routing (e.g., React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Simple API route for testing
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});