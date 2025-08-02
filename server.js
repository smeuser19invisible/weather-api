const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/weather', (req, res) => {
  res.json({ message: 'Weather endpoint not implemented yet' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});