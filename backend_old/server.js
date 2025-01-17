const express = require('express');
const app = express();
const port = 3001; // Different from Vite's port

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
