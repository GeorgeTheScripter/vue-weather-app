export function getLocalTime(timezoneSeconds) {
  // Текущее время в UTC (в миллисекундах)
  const nowUTC = new Date().getTime();

  // Переводим timezone в миллисекунды (×1000)
  const timezoneOffsetMs = timezoneSeconds * 1000;

  // Создаём дату с учётом временной зоны
  const localTime = new Date(nowUTC + timezoneOffsetMs);

  // Форматируем в читаемый вид
  return localTime.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC", // Имитируем смещение вручную
  });
}
