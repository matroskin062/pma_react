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

export const parseDate = (dt) => {
  const date = new Date(dt * 1000);

  return `${weekdays[date.getDay()]} ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} года`;
};
