import {
  getParticipationChartDataByDay, getParticipationChartDataByMonth, getParticipationChartDataByYear,
} from '../computeParticipation';

import * as apisMock from '../../../../mocks/audiencias/index';

describe('Test getParticipationChartDataByDay function', () => {
  const testMonth = 4;
  const testYear = 2021;

  test('getParticipationChartDataByDay return data with 30 days(april)', async () => {
    const resultArray = await getParticipationChartDataByDay(
      testMonth, testYear,
      apisMock.messagesApiMock.DAILY.results, apisMock.questionsApiMock.DAILY.results,
      apisMock.votesApiMock.DAILY.results,
    );
    expect(resultArray.length).toBe(30);
  });

  test('getParticipationChartDataByDay return data with 31 days(may)', async () => {
    const resultArray = await getParticipationChartDataByDay(
      (testMonth + 1), testYear,
      apisMock.messagesApiMock.DAILY.results, apisMock.questionsApiMock.DAILY.results,
      apisMock.votesApiMock.DAILY.results,
    );
    expect(resultArray.length).toBe(31);
  });
});

describe('Test getParticipationChartDataByMonth function', () => {
  const testMonth = 4;
  const testYear = 2021;

  test('getParticipationChartDataByMonth return data with 12 months', async () => {
    const resultArray = await getParticipationChartDataByMonth(
      testMonth, testYear,
      apisMock.messagesApiMock.MONTHLY.results, apisMock.questionsApiMock.MONTHLY.results,
      apisMock.votesApiMock.MONTHLY.results,
    );

    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray.length).toBe(12);
  });

  test('getParticipationChartDataByMonth catch with undefined values', async () => {
    const resultArray = await getParticipationChartDataByMonth(
      testMonth, testYear, undefined, undefined, undefined,
    );
    expect(resultArray.length).toBe(0);
  });
});

describe('Test getParticipationChartDataByYear function', () => {
  test('getParticipationChartDataByYear return data with 7 years', async () => {
    const resultArray = await getParticipationChartDataByYear(
      apisMock.messagesApiMock.YEARLY.results, apisMock.questionsApiMock.YEARLY.results,
      apisMock.votesApiMock.YEARLY.results,
      2016,
    );
    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray[0][0]).toBe('2016');
    expect(resultArray.length).toBe(7);
  });

  test('getParticipationChartDataByYear catch with undefined values', async () => {
    const resultArray = await getParticipationChartDataByYear(
      undefined, undefined,
      undefined,
      2016,
    );
    expect(resultArray.length).toBe(0);
  });
});
