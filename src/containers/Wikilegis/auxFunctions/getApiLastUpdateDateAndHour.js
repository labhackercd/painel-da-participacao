/* eslint-disable import/prefer-default-export */
export function getApiLastUpdateDateAndHour(opinionsData, voteData) {
  let lastUpdate = '';

  if (opinionsData.length > 0) {
    lastUpdate = opinionsData[0].modified;
  } else if (voteData.length > 0) {
    lastUpdate = voteData[0].modified;
  } else {
    lastUpdate = '-';
  }

  return lastUpdate;
}
