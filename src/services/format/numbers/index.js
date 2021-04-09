/* eslint-disable import/prefer-default-export */

// Add a 0 in front of an integer number. Ex: d=5 -> return 05;
export function pad(d) {
  return (d < 10 ? `0${d.toString()}` : d.toString());
}
