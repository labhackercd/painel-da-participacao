const roomsRankingMock = {
  DAILY: {
    count: 3,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2021-04-23',
        end_date: '2021-04-23',
        period: 'daily',
        rooms: 2,
        month: 4,
        year: 2020,
      },
      {
        start_date: '2021-04-27',
        end_date: '2021-04-27',
        period: 'daily',
        rooms: 2,
        month: 4,
        year: 2020,
      },
      {
        start_date: '2021-04-29',
        end_date: '2021-04-29',
        period: 'daily',
        rooms: 1,
        month: 4,
        year: 2020,
      },
    ],
    sum_total_results: 5,
  },
  MONTHLY: {
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2021-02-01',
        end_date: '2021-02-28',
        period: 'monthly',
        rooms: 3,
        month: 2,
        year: 2021,
      },
      {
        start_date: '2021-03-01',
        end_date: '2021-03-31',
        period: 'monthly',
        rooms: 10,
        month: 3,
        year: 2021,
      },
    ],
    sum_total_results: 13,
  },
  YEARLY: {
    count: 5,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2017-01-01',
        end_date: '2017-12-31',
        period: 'yearly',
        rooms: 399,
        month: 1,
        year: 2017,
      },
      {
        start_date: '2018-01-01',
        end_date: '2018-12-31',
        period: 'yearly',
        rooms: 163,
        month: 1,
        year: 2018,
      },
      {
        start_date: '2019-01-01',
        end_date: '2019-12-31',
        period: 'yearly',
        rooms: 536,
        month: 1,
        year: 2019,
      },
      {
        start_date: '2020-01-01',
        end_date: '2020-12-31',
        period: 'yearly',
        rooms: 195,
        month: 1,
        year: 2020,
      },
      {
        start_date: '2021-01-01',
        end_date: '2021-12-31',
        period: 'yearly',
        rooms: 13,
        month: 1,
        year: 2021,
      },
    ],
    sum_total_results: 1306,
  },
};

export default roomsRankingMock;
