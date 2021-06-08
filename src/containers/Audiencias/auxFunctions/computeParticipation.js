/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { MONTHS_ABBREVIATED_LIST } from '../../../utils/constants/index';
import padNumberWithZeroOnLeft from '../../../utils/format/numbers/padNumberWithZeroOnLeft';

export async function getParticipationChartDataByDay(month, year, messagesData, questionsData, questionsVoteData) {
  const totalOfDaysInMonth = await new Date(year, month, 0).getDate();
  const resultArray = [];

  try {
    for (let i = 1; i <= totalOfDaysInMonth; i += 1) {
      const messageFiltered = messagesData.filter(
        (message) => message.end_date === `${year}-${padNumberWithZeroOnLeft(month)}-${padNumberWithZeroOnLeft(i)}`,
      );
      const questionFiltered = questionsData.filter(
        (question) => question.end_date === `${year}-${padNumberWithZeroOnLeft(month)}-${padNumberWithZeroOnLeft(i)}`,
      );
      const questionsVoteFiltered = questionsVoteData.filter(
        (queVote) => queVote.end_date === `${year}-${padNumberWithZeroOnLeft(month)}-${padNumberWithZeroOnLeft(i)}`,
      );

      resultArray.push(
        [
          `${padNumberWithZeroOnLeft(i)}`,
          (messageFiltered.length > 0) ? messageFiltered[0].messages : 0,
          (questionFiltered.length > 0) ? questionFiltered[0].questions : 0,
          (questionsVoteFiltered.length > 0) ? questionsVoteFiltered[0].votes : 0,
        ],
      );
    }

    return resultArray;
  } catch (e) {
    return [];
  }
}

export async function getParticipationChartDataByMonth(month, year, messagesData, questionsData, questionsVoteData) {
  const resultArray = [];

  try {
    for (let i = 1; i <= 12; i += 1) {
      const messageFiltered = messagesData.filter((message) => message.start_date === `${year}-${padNumberWithZeroOnLeft(i)}-01`);
      const questionFiltered = questionsData.filter((question) => question.start_date === `${year}-${padNumberWithZeroOnLeft(i)}-01`);
      const questionsVoteFiltered = questionsVoteData.filter((queVote) => queVote.start_date === `${year}-${padNumberWithZeroOnLeft(i)}-01`);

      resultArray.push(
        [
          `${MONTHS_ABBREVIATED_LIST[i - 1]}`,
          (messageFiltered.length > 0) ? messageFiltered[0].messages : 0,
          (questionFiltered.length > 0) ? questionFiltered[0].questions : 0,
          (questionsVoteFiltered.length > 0) ? questionsVoteFiltered[0].votes : 0,
        ],
      );
    }

    return resultArray;
  } catch (e) {
    return resultArray;
  }
}

export async function getParticipationChartDataByYear(messagesData, questionsData, questionsVoteData, initialYear) {
  const resultArray = [];
  const begginingYear = initialYear;
  const currentYear = new Date().getFullYear();
  try {
    for (let i = begginingYear; i <= currentYear; i += 1) {
      const messageFiltered = messagesData.filter((message) => message.start_date === `${i}-01-01`);
      const questionFiltered = questionsData.filter((question) => question.start_date === `${i}-01-01`);
      const questionsVoteFiltered = questionsVoteData.filter((queVote) => queVote.start_date === `${i}-01-01`);

      resultArray.push(
        [
          `${i}`,
          (messageFiltered.length > 0) ? messageFiltered[0].messages : 0,
          (questionFiltered.length > 0) ? questionFiltered[0].questions : 0,
          (questionsVoteFiltered.length > 0) ? questionsVoteFiltered[0].votes : 0,
        ],
      );
    }
    return resultArray;
  } catch (e) {
    return resultArray;
  }
}
