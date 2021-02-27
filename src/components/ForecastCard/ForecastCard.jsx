import React from 'react';
import styles from './ForecastCard.module.css';
import {
  roundTemp,
  formatDate,
  convertPressure,
  convertWindDirection,
  getAverageFeelsLike,
} from '../../utils';
import humidityIco from '../../assets/humidity_min.svg';
import pressureIco from '../../assets/pressure_min.svg';
import windIco from '../../assets/wind_min.svg';
import windDirIco from '../../assets/wind-direction_min.svg';
import sunriseIco from '../../assets/sunrise_min.svg';
import sunsetIco from '../../assets/sunset_min.svg';

const img_api = 'https://openweathermap.org/img/wn';

const CurrentWeather = ({
  weather,
  temp,
  feels_like,
  humidity,
  pressure,
  wind_speed,
  wind_deg,
  dt,
  sunrise,
  sunset,
}) => {
  const { description, icon } = weather[0];
  const { weekday, date, month, year } = formatDate(dt);
  const { hours: sunriseHours, minutes: sunriseMinutes } = formatDate(sunrise);
  const { hours: sunsetHours, minutes: sunsetMinutes } = formatDate(sunset);
  const { min, max } = temp;
  const feelsLike = getAverageFeelsLike(feels_like);

  return (
    <div className={styles.Container}>
      <h1 className={styles.Date}>
        Сегодня: {weekday} {date} {month} {year}
      </h1>
      <div className={styles.Weather}>
        <div className={styles.Temperature}>
          <div>
            <img src={`${img_api}/${icon}@4x.png`} alt={description} />
          </div>
          <div>
            <h1>Температура:</h1>
            <div>
              <h3>
                Мин: {roundTemp(min)} <span>&deg;C</span>
              </h3>
              <h3>
                Макс: {roundTemp(max)}
                <span>&deg;C</span>
              </h3>
            </div>
            <h4>
              Чувствуется как: {roundTemp(feelsLike)}
              <span>&deg;C</span>
            </h4>
            <h4>{description}</h4>
          </div>
        </div>
        <div className={styles.Info}>
          <div>
            <img src={humidityIco} alt='влажность' />
            <p>Влажность</p>
            <p>{humidity} %</p>
          </div>
          <div>
            <img src={pressureIco} alt='давление' />
            <p>Давление</p>
            <p>{convertPressure(pressure)} мм.рт.с</p>
          </div>
          <div>
            <img src={windIco} alt='ветер' />
            <p>Скорость ветра</p>
            <p>{wind_speed} м/сек</p>
          </div>
          <div>
            <img src={windDirIco} alt='направление ветра' />
            <p>{convertWindDirection(wind_deg)} ветер</p>
          </div>
          <div>
            <img src={sunriseIco} alt='восход' />
            <p>
              Восход {sunriseHours}:{sunriseMinutes}
            </p>
          </div>
          <div>
            <img src={sunsetIco} alt='закат' />
            <p>
              Закат {sunsetHours}:{sunsetMinutes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
