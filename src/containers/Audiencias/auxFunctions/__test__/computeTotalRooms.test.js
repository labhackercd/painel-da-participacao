import {
  getRoomTotalsChartDataByDay, getRoomTotalsChartDataByMonth, getRoomTotalsChartDataByYear,
} from '../computeTotalRooms';

import * as apisMock from '../../../../mocks/audiencias/index';

describe('Test getRoomTotalsChartDataByDay function', () => {
  const testMonth = 4;
  const testYear = 2021;

  test('getRoomTotalsChartDataByDay return data with 30 days(april)', async () => {
    const resultArray = await getRoomTotalsChartDataByDay(
      testMonth, testYear, apisMock.roomsApiMock.DAILY.results,
    );
    expect(resultArray.length).toBe(30);
  });

  test('getRoomTotalsChartDataByDay return data with 31 days(may)', async () => {
    const resultArray = await getRoomTotalsChartDataByDay(
      (testMonth + 1), testYear, apisMock.roomsApiMock.DAILY.results,
    );
    expect(resultArray.length).toBe(31);
  });
});

describe('Test getRoomTotalsChartDataByMonth function', () => {
  const testYear = 2021;

  test('getRoomTotalsChartDataByMonth return data with 12 months', async () => {
    const resultArray = await getRoomTotalsChartDataByMonth(
      testYear, apisMock.roomsApiMock.MONTHLY.results,
    );

    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray.length).toBe(12);
  });

  test('getRoomTotalsChartDataByMonth catch with undefined values', async () => {
    const resultArray = await getRoomTotalsChartDataByMonth(
      testYear, undefined,
    );
    expect(resultArray.length).toBe(0);
  });
});

describe('Test getRoomTotalsChartDataByYear function', () => {
  test('getRoomTotalsChartDataByYear return data with 6 years', async () => {
    const resultArray = await getRoomTotalsChartDataByYear(
      apisMock.roomsApiMock.YEARLY.results,
    );
    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray[0][0]).toBe('2016');
    expect(resultArray.length).toBe(6);
  });

  test('getRoomTotalsChartDataByYear catch with undefined values', async () => {
    const resultArray = await getRoomTotalsChartDataByYear(
      undefined,
    );
    expect(resultArray.length).toBe(0);
  });
});
