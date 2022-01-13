import {
  getWikilegisParticipationChartDataByDay, getWikilegisParticipationChartDataByMonth,
  getWikilegisParticipationChartDataByYear,
} from '../computeParticipation';

import * as apiMock from '../../../../mocks/wikilegis/index';

describe('Test getWikilegisParticipationChartDataByDay function', () => {
  const testMonth = 4;
  const testYear = 2021;

  test('getWikilegisParticipationChartDataByDay return data with 30 days(april)', async () => {
    const resultArray = await getWikilegisParticipationChartDataByDay(
      testMonth, testYear,
      apiMock.opinionsApiMock.DAILY.results, apiMock.votesApiMock.DAILY.results,
    );
    expect(resultArray.length).toBe(30);
  });

  test('getWikilegisParticipationChartDataByDay return data with 31 days(may)', async () => {
    const resultArray = await getWikilegisParticipationChartDataByDay(
      (testMonth + 1), testYear,
      apiMock.opinionsApiMock.DAILY.results, apiMock.votesApiMock.DAILY.results,
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
      apiMock.opinionsApiMock.DAILY.results, apiMock.votesApiMock.DAILY.results,
    );

    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray.length).toBe(12);
  });
});

describe('Test getWikilegisParticipationChartDataByYear function', () => {
  test('getWikilegisParticipationChartDataByYear return data with 7 years', async () => {
    const resultArray = await getWikilegisParticipationChartDataByYear(
      apiMock.opinionsApiMock.YEARLY.results, apiMock.votesApiMock.YEARLY.results,
      2016,
    );
    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray[0][0]).toBe('2016');
    expect(resultArray.length).toBe(7);
  });

  test('getWikilegisParticipationChartDataByYear catch with undefined values', async () => {
    const resultArray = await getWikilegisParticipationChartDataByYear(
      undefined, undefined,
      2016,
    );
    expect(resultArray.length).toBe(0);
  });
});
