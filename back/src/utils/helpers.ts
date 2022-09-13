export function convertHourStringToMinutes(hourString: string) {
  const [hour, minutes] = hourString.split(':').map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}

export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}`;
}
