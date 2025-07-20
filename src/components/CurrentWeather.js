import React from 'react';

function CurrentWeather({ data }) {
  return (
    <div className="weather">
      <h2>{data.name}</h2>
      <p>🌡 Temperature: {data.main.temp}°C</p>
      <p>☁ Condition: {data.weather[0].main}</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>🌬 Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default CurrentWeather;

