export const timestampToTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0'); // Получаем часы
  const minutes = date.getMinutes().toString().padStart(2, '0'); // Получаем минуты
  return `${hours}:${minutes}`;
};
