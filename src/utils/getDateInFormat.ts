export function formatTimestamp(timestamp: string) {
  const months = [
    'янв.',
    'фев.',
    'мар.',
    'апр.',
    'мая',
    'июн.',
    'июл.',
    'авг.',
    'сен.',
    'окт.',
    'ноя.',
    'дек.',
  ];
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Добавляем ноль перед числами < 10
  const hoursStr = hours < 10 ? '0' + hours : hours;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  return `${day} ${month} ${year}, ${hoursStr}:${minutesStr}`;
}
