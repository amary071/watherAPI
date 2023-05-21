const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const moment = require('moment');
const port = 3000;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


// Endpoint for current weather conditions
app.get('/weather/current', (req, res) => {
  // Call your weather API to get current weather data
  // For example, using the OpenWeatherMap API
  const axios = require('axios');
  const apiKey = 'your-api-key';
  const city = 'your-city';
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error retrieving current weather conditions');
    });
});

// Endpoint for weather forecast
app.get('/weather/forecast', (req, res) => {
  // Call your weather API to get weather forecast data
  // For example, using the OpenWeatherMap API
  const axios = require('axios');
  const apiKey = 'your-api-key';
  const city = 'your-city';
  axios.get(`

}

const weatherData = {
    location: response.data.name,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    conditions: response.data.weather[0].description
  };

  return weatherData;
}


app.get('/weather/current', (req, res) => {
  const city = req.query.location;
 
  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }
