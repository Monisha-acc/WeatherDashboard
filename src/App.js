import React, { useState } from 'react';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecast(forecastRes.data);
    } catch (err) {
      alert("City not found!");
      setWeather(null);
      setForecast(null);
    }
  };

  return (
    <div className="app">
      <h1>🌦 Weather Dashboard</h1>
      <input
        type="text"
        value={city}
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {weather && <CurrentWeather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;



