export default function convertArrayToJSON(arr) {
  const keys = arr[0];
  const newArr = arr.slice(1, arr.length);

  const formatted = [];
  const data = newArr;
  const cols = keys;
  const l = cols.length;
  for (let i = 0; i < data.length; i += 1) {
    const d = data[i];
    const o = {};
    for (let j = 0; j < l; j += 1) o[cols[j]] = d[j];
    formatted.push(o);
  }
  return formatted;
}
