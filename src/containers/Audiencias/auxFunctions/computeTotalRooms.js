/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import {
  MONTHS_ABBREVIATED_LIST,
} from '../../../utils/constants/index';
import padNumberWithZeroOnLeft from '../../../utils/format/numbers/padNumberWithZeroOnLeft';

export async function getRoomTotalsChartDataByDay(month, year, roomsData) {
  const totalOfDaysInMonth = await new Date(year, month, 0).getDate();
  const resultArray = [];

  try {
    for (let i = 1; i <= totalOfDaysInMonth; i += 1) {
      const roomsFiltered = roomsData.filter(
        (room) => room.end_date === `${year}-${padNumberWithZeroOnLeft(month)}-${padNumberWithZeroOnLeft(i)}`,
      );

      resultArray.push(
        [
          `${padNumberWithZeroOnLeft(i)}`,
          (roomsFiltered.length > 0) ? roomsFiltered[0].finished_rooms : 0,
          (roomsFiltered.length > 0) ? roomsFiltered[0].canceled_rooms : 0,
          (roomsFiltered.length > 0) ? roomsFiltered[0].total_rooms : 0,
        ],
      );
    }

    return resultArray;
  } catch (e) {
    return [];
  }
}

export async function getRoomTotalsChartDataByMonth(year, roomsData) {
  const resultArray = [];
  try {
    for (let i = 1; i <= 12; i += 1) {
      const roomsFiltered = roomsData.filter(
        (room) => room.start_date === `${year}-${padNumberWithZeroOnLeft(i)}-01`,
      );

      resultArray.push(
        [
          `${MONTHS_ABBREVIATED_LIST[i - 1]}`,
          (roomsFiltered.length > 0) ? roomsFiltered[0].canceled_rooms : 0,
          (roomsFiltered.length > 0) ? roomsFiltered[0].finished_rooms : 0,
          (roomsFiltered.length > 0) ? roomsFiltered[0].total_rooms : 0,
        ],
      );
    }

    return resultArray;
  } catch (e) {
    return resultArray;
  }
}

export async function getRoomTotalsChartDataByYear(roomsData) {
  const resultArray = [];

  try {
    for (let i = 0; i <= roomsData.length; i += 1) {
      resultArray.push(
        [
          (roomsData[i].year).toString(),
          roomsData[i].canceled_rooms,
          roomsData[i].finished_rooms,
          roomsData[i].total_rooms,
        ],
      );
    }

    return resultArray;
  } catch (e) {
    return resultArray;
  }
}

async function removeColumnOfMatrix(matrix, indexToRemove) {
  await matrix.forEach((column) => {
    column.splice(indexToRemove, 1);
  });

  return matrix;
}

async function removeColumnsOfMatrix(matrix, column) {
  const columnsTitle = matrix[0];
  let i = 1; // Start in 1 because the 0 corresponds do the dates
  let filteredMatrix = [];

  while (i < columnsTitle.length) {
    if (columnsTitle[i] === column) {
      filteredMatrix = removeColumnOfMatrix(matrix, i);
    }
    i += 1;
  }

  return filteredMatrix;
}

export async function filterDataOfTotalRoomsMatrix(matrix, colsToRemove) {
  let i = 0;
  let filteredMatrix = matrix;

  while (i < colsToRemove.length) {
    // eslint-disable-next-line no-await-in-loop
    filteredMatrix = await removeColumnsOfMatrix(filteredMatrix, colsToRemove[i]);
    i += 1;
  }
  return filteredMatrix;
}