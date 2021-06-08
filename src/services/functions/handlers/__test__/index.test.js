import { handleUpdatePeriodSearchQuery } from '../index';

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

  test('handleUpdatePeriodSearchQuery returns catch return', async () => {
    const testMonth = undefined; // In this case the month doesn't matter
    const testYear = undefined; // All years option
    const { query, period } = await handleUpdatePeriodSearchQuery(testMonth, testYear);

    expect(period).toBe('');
    expect(query).toBe('');
  });
});
