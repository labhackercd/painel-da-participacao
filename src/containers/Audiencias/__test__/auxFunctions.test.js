import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockTheme from '../../../components/mockTheme';
import Audiencias from '../index';
import {
  getParticipationChartDataByDay, getParticipationChartDataByMonth, getParticipationChartDataByYear,
  handleUpdatePeriodSearchQuery, pad,
} from '../auxFunctions';

import messagesRankingMock from './mocks/messages_ranking_mock';
import participantesUsersMock from './mocks/participants_users_mock';
import questionsRankingMock from './mocks/questions_ranking_mock';
import roomsRankingMock from './mocks/rooms_ranking_mock';
import votesRankingMock from './mocks/votes_ranking_mock';

describe('Test pad function', () => {
  test('Pad function should return string 01', () => {
    expect(pad(1)).toBe('01');
  });

  test('Pad function should not return string 1', () => {
    expect(pad(1)).not.toBe('1');
  });
});

describe('Test getParticipationChartDataByDay function', () => {
  const testMonth = 4;
  const testYear = 2021;

  test('getParticipationChartDataByDay return data with 30 days(april)', async () => {
    const resultArray = await getParticipationChartDataByDay(
      testMonth, testYear,
      messagesRankingMock.DAILY.results, questionsRankingMock.DAILY.results,
      votesRankingMock.DAILY.results,
    );
    expect(resultArray.length).toBe(30);
  });

  test('getParticipationChartDataByDay return data with 31 days(may)', async () => {
    const resultArray = await getParticipationChartDataByDay(
      (testMonth + 1), testYear,
      messagesRankingMock.DAILY.results, questionsRankingMock.DAILY.results,
      votesRankingMock.DAILY.results,
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
      messagesRankingMock.MONTHLY.results, questionsRankingMock.MONTHLY.results,
      votesRankingMock.MONTHLY.results,
    );

    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray.length).toBe(12);
  });
});

describe('Test getParticipationChartDataByYear function', () => {
  test('getParticipationChartDataByYear return data with 6 years', async () => {
    const resultArray = await getParticipationChartDataByYear(
      messagesRankingMock.YEARLY.results, questionsRankingMock.YEARLY.results,
      votesRankingMock.YEARLY.results,
    );
    expect(resultArray).not.toBe(null);
    expect(resultArray.length).not.toBe(1);
    expect(resultArray[0][0]).toBe('2016');
    expect(resultArray.length).toBe(6);
  });
});

describe('Test handleUpdatePeriodSearchQuery function', () => {
  test('handleUpdatePeriodSearchQuery returns daily as result of period', async () => {
    const testMonth = '4';
    const testYear = '2021';
    const { query, period } = await handleUpdatePeriodSearchQuery(testMonth, testYear);

    expect(period).toBe('daily');
    expect(query).toBe(`?period=daily&start_date__year=${testYear}&start_date__month=${testMonth}&ordering=start_date`);
  });

  test('handleUpdatePeriodSearchQuery returns monthly as result of period', async () => {
    const testMonth = 0; // All months option, passed as integer for test purposes
    const testYear = '2021';
    const { query, period } = await handleUpdatePeriodSearchQuery(testMonth, testYear);

    expect(period).toBe('monthly');
    expect(query).toBe(`?period=monthly&start_date__year=${testYear}&ordering=start_date`);
  });

  test('handleUpdatePeriodSearchQuery returns yearly as result of period', async () => {
    const testMonth = 0; // In this case the month doesn't matter
    const testYear = 0; // All years option
    const { query, period } = await handleUpdatePeriodSearchQuery(testMonth, testYear);

    expect(period).toBe('yearly');
    expect(query).toBe('?period=yearly&ordering=start_date');
  });
});
