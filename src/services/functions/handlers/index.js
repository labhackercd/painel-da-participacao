/* eslint-disable import/prefer-default-export */
/* eslint-disable  no-restricted-globals */
import * as APPLICATION_CONSTANTS from '../../../utils/constants/index';
import * as APPLICATION_OPTIONS from '../../../settings/applicationOptions/index';

const dailyKeyWord = APPLICATION_CONSTANTS.DAILY_KEY_WORD;
const monthlyKeyWord = APPLICATION_CONSTANTS.MONTHLY_KEY_WORD;
const audienceInitialYear = APPLICATION_OPTIONS.AUDIENCIAS_INITIAL_YEAR;
const wikilegisInitialYear = APPLICATION_OPTIONS.WIKILEGIS_INITIAL_YEAR;
const currentYear = APPLICATION_CONSTANTS.CURRENT_YEAR;

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

export function isDateInPeriod(date, period, month, year, tool) {
  switch (period) {
    case dailyKeyWord:
      if (parseInt(month, 10) === date.getMonth() + 1
        && date.getFullYear() === parseInt(year, 10)) {
        return true;
      }
      return false;
    case monthlyKeyWord:
      if (date.getFullYear() === parseInt(year, 10)) {
        return true;
      }
      return false;
    default:
      // yearly -> Total period
      if (tool === 'audiences' && date.getFullYear() >= parseInt(audienceInitialYear, 10)
        && date.getFullYear() <= parseInt(currentYear, 10)) {
        return true;
      }
      if (tool === 'wikilegis' && date.getFullYear() >= parseInt(wikilegisInitialYear, 10)
      && date.getFullYear() <= parseInt(currentYear, 10)) {
        return true;
      }
      return false;
  }
}

export function formatYear(searchedText) {
  const date = new Date(searchedText);
  const year = date.getFullYear().toString().substr(-2);
  const month = date.getMonth() + 1;
  let day = date.getDate();

  if (day.toString().length === 1) {
    day = `0${day}`;
  }

  return `${day}/${month}/${year}`;
}
