export default function formatYear(searchedText) {
  const date = new Date(searchedText);
  // Removing two digits in year number
  const year = date.getFullYear().toString().substr(-2);
  const month = date.getMonth() + 1;
  let day = date.getDate();

  if (day.toString().length === 1) {
    day = `0${day}`;
  }

  return `${day}/${month}/${year}`;
}
