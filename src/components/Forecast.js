import React from 'react';

function Forecast({ data }) {
  const dailyData = data.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyData.map((day, index) => (
          <div className="forecast-card" key={index}>
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>🌡 {day.main.temp}°C</p>
            <p>{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
