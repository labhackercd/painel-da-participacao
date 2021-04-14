/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
const monthNamesList = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
];

export function pad(d) {
  return (d < 10 ? `0${d.toString()}` : d.toString());
}

export async function getParticipationChartDataByDay(month, year, messagesData, questionsData, questionsVoteData) {
  const totalOfDaysInMonth = await new Date(year, month, 0).getDate();
  const resultArray = [];

  try {
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
  } catch (e) {
    return [];
  }
}

export async function getParticipationChartDataByMonth(month, year, messagesData, questionsData, questionsVoteData) {
  const resultArray = [];

  try {
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

export async function handleUpdatePeriodSearchQuery(month, year) {
  const paramMonth = month.toString();
  const paramYear = year.toString();
  let query = '';
  let period = '';

  try {
    if (paramYear === '0') {
      query = '?period=yearly&ordering=start_date';
      period = 'yearly';
    } else if ((paramYear !== '0') && (paramMonth === '0')) {
      query = `?period=monthly&start_date__year=${year}&ordering=start_date`;
      period = 'monthly';
    } else { // (yearPeriod !== '0') && (monthPeriod !== '0')
      query = `?period=daily&start_date__year=${year}&start_date__month=${month}&ordering=start_date`;
      period = 'daily';
    }
  } catch (e) {
    return { query, period };
  }

  return { query, period };
}
