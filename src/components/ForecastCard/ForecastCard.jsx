import React from 'react';
import { formatDate, roundTemp } from '../../utils';
import styles from './ForecastCard.module.css';

const img_api = 'https://openweathermap.org/img/wn';
const ForecastCard = ({ temp, dt, weather }) => {
  const weatherIcon = `${img_api}/${weather[0].icon}@2x.png`;
  const { description } = weather[0];
  const { weekday, date, month } = formatDate(dt);

  return (
    <div className={styles.Card}>
      <p className={styles.Title}>
        <span>{weekday}</span>
        <span>{date}</span>
        <span>{month}</span>
      </p>
      <div className={styles.Description}>
        <img src={weatherIcon} alt={weather[0].description} />
        <p>{description}</p>
      </div>
      <div className={styles.Temperature}>
        <div>
          <p>Мин</p>
          {roundTemp(temp.min)} &deg;C
        </div>
        <div>
          <p>Макс</p>
          {roundTemp(temp.max)} &deg;C
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
