const opinionsRankingMock = {
  DAILY: {
    count: 5,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2020-01-07',
        end_date: '2020-01-07',
        period: 'daily',
        opinions: 1,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-29',
        end_date: '2020-01-29',
        period: 'daily',
        opinions: 1,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
    ],
    sum_total_results: 8,
  },
  MONTHLY: {
    count: 4,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2021-01-01',
        end_date: '2021-01-31',
        period: 'monthly',
        opinions: 8,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:20',
      },
      {
        start_date: '2021-06-01',
        end_date: '2021-06-30',
        period: 'monthly',
        opinions: 9,
        month: 6,
        year: 2020,
        modified: '09/04/2021 11:20',
      },
    ],
    sum_total_results: 633,
  },
  YEARLY: {
    count: 2,
    next: null,
    previous: null,
    results: [
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
    ],
    sum_total_results: 747,
  },
};

export default opinionsRankingMock;
