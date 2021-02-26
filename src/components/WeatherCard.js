import React from 'react';
import { parseDate } from '../parseDate';

const img_api = 'https://openweathermap.org/img/wn';
const WeatherCard = ({
  temp,
  dt,
  feels_like,
  pressure,
  humidity,
  wind_speed,
  wind_deg,
  weather,
}) => {
  const weatherIcon = `${img_api}/${weather[0].icon}@2x.png`;
  const { description } = weather[0];
  const date = parseDate(dt);
  return (
    <div>
      <h1>{date}</h1>
      <img src={weatherIcon} alt={weather[0].description} />
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
