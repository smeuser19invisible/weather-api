const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Weather API endpoint
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'Unable to fetch weather data' });
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;
    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description
    });
  } catch (error) {
    res.status(400).json({ error: 'Unable to fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});