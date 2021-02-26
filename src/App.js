import styles from './App.module.css';
import { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';

const API_KEY = '166f41f09442b35e807cb8bce5b3cfe6';
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=50.45466&lon=30.5238&exclude=minutely,current,hourly,alerts&units=metric&lang=ru&appid=${API_KEY}`;

function App() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const { daily } = await response.json();
      setWeather(daily);
    };
    fetchData();
  }, []);

  return (
    <div>
      {weather && weather.map((el) => <WeatherCard key={el.dt} {...el} />)}
    </div>
  );
}

export default App;
