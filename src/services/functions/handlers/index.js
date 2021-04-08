/* eslint-disable import/prefer-default-export */
export async function handleUpdatePeriodSearchQuery(month, year) {
  const paramMonth = month.toString();
  const paramYear = year.toString();
  let query = '';
  let period = '';

  if (paramYear === '0') {
    query = '?period=yearly&ordering=start_date';
    period = 'yearly';
  } else if ((paramYear !== '0') && (paramMonth === '0')) {
    query = `?period=monthly&start_date__year=${year}&ordering=start_date`;
    period = 'monthly';
  } else { // (yearPeriod !== '0') && (monthPeriod !== '0')
    query = `?period=daily&start_date__year=${year}&start_date__month=${month}&ordering=start_date`;
    period = 'daily';
  }

  return { query, period };
}
