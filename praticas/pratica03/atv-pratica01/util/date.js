export function getFormattedDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function getDateMinusDays(date, days) {
  const resultDate = new Date(date);
  resultDate.setDate(resultDate.getDate() - days);
  return resultDate;
}
