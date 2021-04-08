/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { pad } from '../../services/format/numbers/index';

const monthNamesList = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
];

export async function getParticipationChartDataByDay(month, year, messagesData, questionsData, questionsVoteData) {
  const totalOfDaysInMonth = await new Date(year, month, 0).getDate();
  const resultArray = [];

  for (let i = 1; i <= totalOfDaysInMonth; i += 1) {
    const messageFiltered = messagesData.filter((message) => message.end_date === `${year}-${pad(month)}-${pad(i)}`);
    const questionFiltered = questionsData.filter((question) => question.end_date === `${year}-${pad(month)}-${pad(i)}`);
    const questionsVoteFiltered = questionsVoteData.filter((queVote) => queVote.end_date === `${year}-${pad(month)}-${pad(i)}`);

    resultArray.push(
      [
        `${pad(i)}`,
        (messageFiltered.length > 0) ? messageFiltered[0].messages : 0,
        (questionFiltered.length > 0) ? questionFiltered[0].questions : 0,
        (questionsVoteFiltered.length > 0) ? questionsVoteFiltered[0].votes : 0,
      ],
    );
  }

  return resultArray;
}

export async function getParticipationChartDataByMonth(month, year, messagesData, questionsData, questionsVoteData) {
  const resultArray = [];

  for (let i = 1; i <= 12; i += 1) {
    const messageFiltered = messagesData.filter((message) => message.start_date === `${year}-${pad(i)}-01`);
    const questionFiltered = questionsData.filter((question) => question.start_date === `${year}-${pad(i)}-01`);
    const questionsVoteFiltered = questionsVoteData.filter((queVote) => queVote.start_date === `${year}-${pad(i)}-01`);

    resultArray.push(
      [
        `${monthNamesList[i - 1]}`,
        (messageFiltered.length > 0) ? messageFiltered[0].messages : 0,
        (questionFiltered.length > 0) ? questionFiltered[0].questions : 0,
        (questionsVoteFiltered.length > 0) ? questionsVoteFiltered[0].votes : 0,
      ],
    );
  }

  return resultArray;
}

export async function getParticipationChartDataByYear(messagesData, questionsData, questionsVoteData) {
  const resultArray = [];
  const begginingYear = 2016;
  const currentYear = new Date().getFullYear();

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
}
