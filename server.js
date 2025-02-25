const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// ✅ API routes should come BEFORE serving React static files
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Serve React static files (after running `npm run build`)
app.use(express.static(path.join(__dirname, 'build')));

// Handle client-side routing (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
