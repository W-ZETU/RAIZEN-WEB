// Import Express framework
const express = require('express');
const path = require('path');
const app = express();

// Tell the server to use files in the current folder
app.use(express.static(path.join(__dirname, '.')));

// Main route: Send index.html when someone visits the site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Set the port (Render uses process.env.PORT)
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
