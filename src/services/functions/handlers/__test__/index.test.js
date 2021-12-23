import { handleUpdatePeriodSearchQuery, isDateInPeriod } from '../index';

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

  test('isDateInPeriod should return true when the period is daily', () => {
    const date = new Date('10/02/2020');
    const period = 'daily';
    const month = '10';
    const year = '2020';
    const tool = 'audiences';
    const result = isDateInPeriod(date, period, month, year, tool);

    expect(result).toBe(true);
  });

  test('isDateInPeriod should return false when the period is daily', () => {
    const dateBR = new Date('02/11/20').toLocaleString('pt-BR', { timeZone: 'UTC' });
    const date = new Date(dateBR);
    const period = 'daily';
    const month = '10';
    const year = '2020';
    const tool = 'audiences';
    const result = isDateInPeriod(date, period, month, year, tool);

    expect(result).toBe(false);
  });

  test('isDateInPeriod should return true when the period is monthly', () => {
    const dateBR = new Date('02/10/20').toLocaleString('pt-BR', { timeZone: 'UTC' });
    const date = new Date(dateBR);
    const period = 'monthly';
    const month = '0';
    const year = '2020';
    const tool = 'audiences';
    const result = isDateInPeriod(date, period, month, year, tool);

    expect(result).toBe(true);
  });

  test('isDateInPeriod should return false when the period is monthly', () => {
    const dateBR = new Date('02/11/21').toLocaleString('pt-BR', { timeZone: 'UTC' });
    const date = new Date(dateBR);
    const period = 'monthly';
    const month = '0';
    const year = '2020';
    const tool = 'audiences';
    const result = isDateInPeriod(date, period, month, year, tool);

    expect(result).toBe(false);
  });

  test('isDateInPeriod should return true when the period is yearly and tool is audiences', () => {
    const dateBR = new Date('02/10/20').toLocaleString('pt-BR', { timeZone: 'UTC' });
    const date = new Date(dateBR);
    const period = 'yearly';
    const month = '0';
    const year = '0';
    const tool = 'audiences';
    const result = isDateInPeriod(date, period, month, year, tool);

    expect(result).toBe(true);
  });

  test('isDateInPeriod should return true when the period is yearly and tool is wikilegis', () => {
    const dateBR = new Date('02/10/20').toLocaleString('pt-BR', { timeZone: 'UTC' });
    const date = new Date(dateBR);
    const period = 'yearly';
    const month = '0';
    const year = '0';
    const tool = 'wikilegis';
    const result = isDateInPeriod(date, period, month, year, tool);

    expect(result).toBe(true);
  });

  test('isDateInPeriod should return false when the period is yearly', () => {
    const dateBR = new Date('02/10/10').toLocaleString('pt-BR', { timeZone: 'UTC' });
    const date = new Date(dateBR);
    const period = 'yearly';
    const month = '0';
    const year = '0';
    const tool = 'wikilegis';
    const result = isDateInPeriod(date, period, month, year, tool);

    expect(result).toBe(false);
  });
});
