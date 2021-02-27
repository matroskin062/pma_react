const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Ноября',
  'Октября',
  'Декабря',
];

const weekdays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const windDirections = [
  'Cеверный',
  'Cеверо-восточный',
  'Восточный',
  'Юго-восточный',
  'Южный',
  'Юго-западный',
  'Западный',
  'Северо-западный',
];

export const formatDate = (dt) => {
  const date = new Date(dt * 1000);

  return {
    weekday: weekdays[date.getDay()],
    date: date.getDate(),
    month: months[date.getMonth()],
    year: `${date.getFullYear()} года`,
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };
};

export const roundTemp = (temp) => Math.round(temp);

export const convertPressure = (pressure) => Math.round(pressure / 1.333);

export const convertWindDirection = (deg) => {
  const index = (Math.round((deg * 8) / 360) + 8) % 8;
  return windDirections[index];
};

export const getAverageFeelsLike = (feels_like) => {
  const data = Object.values(feels_like);
  return data.reduce((acc, val) => acc + val, 0) / data.length;
};
