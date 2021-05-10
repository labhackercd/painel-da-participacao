import {
  getWikilegisParticipationChartDataByDay, getWikilegisParticipationChartDataByMonth,
  getWikilegisParticipationChartDataByYear,
} from '../computeParticipation';

import messagesRankingMock from './mocks/messages_ranking_mock';
import questionsRankingMock from './mocks/questions_ranking_mock';

describe('Test getWikilegisParticipationChartDataByDay function', () => {
  const testMonth = 4;
  const testYear = 2021;

  test('getWikilegisParticipationChartDataByDay return data with 30 days(april)', async () => {
    const resultArray = await getWikilegisParticipationChartDataByDay(
      testMonth, testYear,
      messagesRankingMock.DAILY.results, questionsRankingMock.DAILY.results,
    );
    expect(resultArray.length).toBe(30);
  });

  test('getWikilegisParticipationChartDataByDay return data with 31 days(may)', async () => {
    const resultArray = await getWikilegisParticipationChartDataByDay(
      (testMonth + 1), testYear,
      messagesRankingMock.DAILY.results, questionsRankingMock.DAILY.results,
    );
    expect(resultArray.length).toBe(31);
  });
});

describe('Test getWikilegisParticipationChartDataByMonth function', () => {
  const testMonth = 4;
  const testYear = 2021;

  test('getWikilegisParticipationChartDataByMonth return data with 12 months', async () => {
    const resultArray = await getWikilegisParticipationChartDataByMonth(
      testMonth, testYear,
      messagesRankingMock.MONTHLY.results, questionsRankingMock.MONTHLY.results,
    );

    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray.length).toBe(12);
  });
});

describe('Test getWikilegisParticipationChartDataByYear function', () => {
  test('getWikilegisParticipationChartDataByYear return data with 6 years', async () => {
    const resultArray = await getWikilegisParticipationChartDataByYear(
      messagesRankingMock.YEARLY.results, questionsRankingMock.YEARLY.results,
      2016,
    );
    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray[0][0]).toBe('2016');
    expect(resultArray.length).toBe(6);
  });

  test('getWikilegisParticipationChartDataByYear catch with undefined values', async () => {
    const resultArray = await getWikilegisParticipationChartDataByYear(
      undefined, undefined,
      2016,
    );
    expect(resultArray.length).toBe(0);
  });
});
