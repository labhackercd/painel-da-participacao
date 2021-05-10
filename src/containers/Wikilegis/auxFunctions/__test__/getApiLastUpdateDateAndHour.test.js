import { getApiLastUpdateDateAndHour } from '../getApiLastUpdateDateAndHour';

const opinionsData = [
  {
    start_date: '2019-01-01',
    end_date: '2019-12-31',
    period: 'yearly',
    opinions: 114,
    month: 1,
    year: 2019,
    modified: '09/04/2021 11:21',
  },
  {
    start_date: '2020-01-01',
    end_date: '2020-12-31',
    period: 'yearly',
    opinions: 633,
    month: 1,
    year: 2020,
    modified: '09/04/2021 11:21',
  },
];

const votesData = [
  {
    start_date: '2019-01-01',
    end_date: '2019-12-31',
    period: 'yearly',
    votes: 1235,
    month: 1,
    year: 2019,
    modified: '05/05/2021 10:31',
  },
  {
    start_date: '2020-01-01',
    end_date: '2020-12-31',
    period: 'yearly',
    votes: 5579,
    month: 1,
    year: 2020,
    modified: '05/05/2021 10:31',
  },
];

describe('Test filterRankingWikilegis function', () => {
  test('filterRankingWikilegis return data searching by title', async () => {
    const resultArray = await getApiLastUpdateDateAndHour(opinionsData, votesData);
    expect(resultArray).toBe('09/04/2021 11:21');
  });
});

describe('Test filterRankingWikilegis function second case', () => {
  test('filterRankingWikilegis return data searching by title', async () => {
    const resultArray = await getApiLastUpdateDateAndHour([], votesData);
    expect(resultArray).toBe('05/05/2021 10:31');
  });
});

describe('Test filterRankingWikilegis with no data passed', () => {
  test('filterRankingWikilegis return data searching by title', async () => {
    const resultArray = await getApiLastUpdateDateAndHour([], []);
    expect(resultArray).toBe('-');
  });
});
