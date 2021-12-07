/* eslint-disable import/prefer-default-export */
export async function handleUpdatePeriodSearchQuery(month, year) {
  let query = '';
  let period = '';

  try {
    const paramMonth = month.toString();
    const paramYear = year.toString();

    if (paramYear === '0') {
      query = '?period=yearly&ordering=start_date';
      period = 'yearly';
    } else if (paramYear !== '0' && paramMonth === '0') {
      query = `?period=monthly&start_date__year=${year}&ordering=start_date`;
      period = 'monthly';
    } else {
      // (yearPeriod !== '0') && (monthPeriod !== '0')
      query = `?period=daily&start_date__year=${year}&start_date__month=${month}&ordering=start_date`;
      period = 'daily';
    }

    return { query, period };
  } catch (e) {
    return { query, period };
  }
}

export async function handleUpdatePeriodSearchQueryParticipants(month, year) {
  let queryParticipants = '';

  try {
    const paramMonth = month.toString();
    const paramYear = year.toString();

    if (paramYear === '0') {
      queryParticipants = '?period=all&ordering=start_date';
    } else if (paramYear !== '0' && paramMonth === '0') {
      queryParticipants = `?period=yearly&start_date__year=${year}&ordering=start_date`;
    } else {
      // (yearPeriod !== '0') && (monthPeriod !== '0')
      queryParticipants = `?period=monthly&start_date__year=${year}&start_date__month=${month}&ordering=start_date`;
    }

    return { queryParticipants };
  } catch (e) {
    return { queryParticipants };
  }
}
