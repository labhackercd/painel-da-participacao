const legislativeProposalsMock = {
  DAILY: {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2020-01-11',
        end_date: '2020-01-11',
        period: 'daily',
        documents: 2,
        month: 11,
        year: 2019,
        modified: '09/04/2021 10:55',
      },
    ],
    sum_total_results: 2,
  },
  MONTHLY: {
    count: 3,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2021-09-01',
        end_date: '2021-09-30',
        period: 'monthly',
        documents: 3,
        month: 9,
        year: 2019,
        modified: '09/04/2021 11:16',
      },
      {
        start_date: '2021-11-01',
        end_date: '2021-11-30',
        period: 'monthly',
        documents: 2,
        month: 11,
        year: 2019,
        modified: '09/04/2021 11:16',
      },
      {
        start_date: '2021-12-01',
        end_date: '2021-12-31',
        period: 'monthly',
        documents: 2,
        month: 12,
        year: 2019,
        modified: '09/04/2021 11:16',
      },
    ],
    sum_total_results: 7,
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
        documents: 7,
        month: 1,
        year: 2019,
        modified: '09/04/2021 11:19',
      },
      {
        start_date: '2020-01-01',
        end_date: '2020-12-31',
        period: 'yearly',
        documents: 1,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:19',
      },
    ],
    sum_total_results: 8,
  },
};

export default legislativeProposalsMock;
