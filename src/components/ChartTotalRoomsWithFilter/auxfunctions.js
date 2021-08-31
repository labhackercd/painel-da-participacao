const deepcopy = require('deepcopy');

/* eslint-disable import/prefer-default-export */
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

  if (!columnsTitle) {
    return matrix;
  }

  while (i < columnsTitle.length) {
    if (columnsTitle[i] === column) {
      filteredMatrix = await removeColumnOfMatrix(matrix.slice(), i);
    }
    i += 1;
  }
  // console.log('filtered')
  // console.log(filteredMatrix)

  return filteredMatrix;
}

export async function filterDataOfTotalRoomsMatrix(matrix, colsToRemove) {

  let i = 0;
  let filteredMatrix = deepcopy(matrix);

  if (colsToRemove.length === 0) {
    return filteredMatrix;
  }

  while (i < colsToRemove.length) {
    // eslint-disable-next-line no-await-in-loop
    filteredMatrix = await removeColumnsOfMatrix(filteredMatrix, colsToRemove[i]);
    i += 1;
  }

  return filteredMatrix;
}
