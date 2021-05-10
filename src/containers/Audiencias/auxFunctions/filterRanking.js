import { formatDate } from '../../../utils/format/date';

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
