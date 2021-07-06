/* eslint-disable import/prefer-default-export */

// Format date to format DD/MM/YYYY
export function formatDate(input) {
  if (!input) {
    return '00/00/00';
  }

  const datePart = input.match(/\d+/g);
  const year = datePart[0].substring(2);
  const month = datePart[1];
  const day = datePart[2];

  return `${day}/${month}/${year}`;
}
