import styles from './App.module.css';
import { useEffect, useState } from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

const API_KEY = '166f41f09442b35e807cb8bce5b3cfe6';
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=50.45466&lon=30.5238&exclude=minutely,hourly,current,alerts&units=metric&lang=ru&appid=${API_KEY}`;

function App() {
  const [forecast, setForecast] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url);
    const { daily } = await response.json();
    setForecast(daily);
  };

  return (
    <div className={styles.App}>
      {forecast && forecast.map((el) => <CurrentWeather key={el.dt} {...el} />)}
    </div>
  );
}

export default App;
