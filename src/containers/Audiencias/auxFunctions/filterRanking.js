import { formatDate } from '../../../utils/format/date';
import * as APPLICATION_CONSTANTS from '../../../utils/constants/index';
import * as APPLICATION_OPTIONS from '../../../settings/applicationOptions/index';

const dailyKeyWord = APPLICATION_CONSTANTS.DAILY_KEY_WORD;
const monthlyKeyWord = APPLICATION_CONSTANTS.MONTHLY_KEY_WORD;
const audienceInitialYear = APPLICATION_OPTIONS.AUDIENCIAS_INITIAL_YEAR;
const currentYear = APPLICATION_CONSTANTS.CURRENT_YEAR;

export default function filterRankingAudiencias(data, searchedText) {
  const filter = data.filter(
    (item) => (
      item.date.toLowerCase().includes(searchedText.toLowerCase())
      || (((item.reunion_theme === null || item.reunion_theme === '') ? item.title_reunion : item.reunion_theme) ? ((item.reunion_theme === null || item.reunion_theme === '') ? item.title_reunion : item.reunion_theme).toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.legislative_body_initials ? item.legislative_body_initials.toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.messages_count ? item.messages_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.participants_count ? item.participants_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.questions_count ? item.questions_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.reunion_type ? item.reunion_type.toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.votes_count ? item.votes_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.date ? formatDate(item.date) : '').includes(searchedText.toLowerCase())
      || (item.is_active ? 'realizada' : 'cancelada').includes(searchedText.toLowerCase())
    ),
  );
  return filter;
}

export function isDateInPeriod(date, period, month, year) {
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
      if (date.getFullYear() >= parseInt(audienceInitialYear, 10)
        && date.getFullYear() <= parseInt(currentYear, 10)) {
        return true;
      }
      return false;
  }
}
