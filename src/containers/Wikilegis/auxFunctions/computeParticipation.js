/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { MONTHS_ABBREVIATED_LIST } from '../../../utils/constants/index';
import padNumberWithZeroOnLeft from '../../../utils/format/numbers/padNumberWithZeroOnLeft';

export async function getWikilegisParticipationChartDataByDay(month, year, opinionsData, voteData) {
  const totalOfDaysInMonth = await new Date(year, month, 0).getDate();
  const resultArray = [];

  try {
    for (let i = 1; i <= totalOfDaysInMonth; i += 1) {
      const opinionsFiltered = opinionsData.filter((opinion) => opinion.end_date === `${year}-${padNumberWithZeroOnLeft(month)}-${padNumberWithZeroOnLeft(i)}`);
      const voteFiltered = voteData.filter((vote) => vote.end_date === `${year}-${padNumberWithZeroOnLeft(month)}-${padNumberWithZeroOnLeft(i)}`);

      resultArray.push(
        [
          `${padNumberWithZeroOnLeft(i)}`,
          (opinionsFiltered.length > 0) ? opinionsFiltered[0].opinions : 0,
          (voteFiltered.length > 0) ? voteFiltered[0].votes : 0,
        ],
      );
    }

    return resultArray;
  } catch (e) {
    return [];
  }
}

export async function getWikilegisParticipationChartDataByMonth(month, year, opinionsData, voteData) {
  const resultArray = [];

  try {
    for (let i = 1; i <= 12; i += 1) {
      const opinionsFiltered = opinionsData.filter((opinion) => opinion.start_date === `${year}-${padNumberWithZeroOnLeft(i)}-01`);
      const voteFiltered = voteData.filter((vote) => vote.start_date === `${year}-${padNumberWithZeroOnLeft(i)}-01`);

      resultArray.push(
        [
          `${MONTHS_ABBREVIATED_LIST[i - 1]}`,
          (opinionsFiltered.length > 0) ? opinionsFiltered[0].opinions : 0,
          (voteFiltered.length > 0) ? voteFiltered[0].votes : 0,
        ],
      );
    }

    return resultArray;
  } catch (e) {
    return resultArray;
  }
}

export async function getWikilegisParticipationChartDataByYear(opinionsData, voteData, initialYear) {
  const resultArray = [];
  const begginingYear = initialYear;
  const currentYear = new Date().getFullYear();
  try {
    for (let i = begginingYear; i <= currentYear; i += 1) {
      const opinionsFiltered = opinionsData.filter((opinion) => opinion.start_date === `${i}-01-01`);
      const voteFiltered = voteData.filter((vote) => vote.start_date === `${i}-01-01`);

      resultArray.push(
        [
          `${i}`,
          (opinionsFiltered.length > 0) ? opinionsFiltered[0].opinions : 0,
          (voteFiltered.length > 0) ? voteFiltered[0].votes : 0,
        ],
      );
    }
    return resultArray;
  } catch (e) {
    return resultArray;
  }
}
